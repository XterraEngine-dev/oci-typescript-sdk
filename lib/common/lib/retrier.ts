/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import {
  ExponentialBackoffDelayStrategy,
  MaxAttemptsTerminationStrategy,
  WaiterConfigurationDetails,
  delay,
  WaitContextImpl
} from "./waiter";
import { HttpClient } from "./http";
import { HttpRequest } from "./http-request";
import { handleErrorBody, handleErrorResponse } from "./helper";
import { OciError } from "..";
import { Logger } from "./log";

/**
 * This class implements the retrier
 * NOTE : Retries are not supported for requests that have binary or stream bodies
 * this also affects UploadManager operations
 * For all requests with binary/stream bodies, retry attempts will not be made
 */

export type RetryConfiguration = Partial<RetryConfigurationDetails>;

export interface RetryConfigurationDetails extends WaiterConfigurationDetails {
  retryCondition: (response: OciError) => boolean;
}

class DefaultRetryCondition {
  /**
   * Default retry condition for Retry mechanism
   * NOTE : Retries are not supported for requests that have binary or stream bodies
   */
  private static RETRYABLE_SERVICE_ERRORS: Map<number, string> = new Map([
    [401, "NotAuthenticated"],
    [404, "NotAuthorizedOrNotFound"],
    [409, "IncorrectState"],
    [409, "NotAuthorizedOrResourceAlreadyExists"],
    [429, "TooManyRequests"],
    [500, "InternalServerError"],
    [401, "NotAuthenticated"],
    [404, "NotAuthorizedOrNotFound"],
    [409, "IncorrectState"],
    [409, "NotAuthorizedOrResourceAlreadyExists"],
    [429, "TooManyRequests"],
    [500, "InternalServerError"]
  ]);

  static shouldBeRetried(error: OciError): boolean {
    return (
      error.statusCode >= 500 ||
      (DefaultRetryCondition.RETRYABLE_SERVICE_ERRORS.has(error.statusCode) &&
        DefaultRetryCondition.RETRYABLE_SERVICE_ERRORS.get(error.statusCode) === error.serviceCode)
    );
  }
}

const NoRetryConfigurationDetails: RetryConfigurationDetails = {
  terminationStrategy: new MaxAttemptsTerminationStrategy(1),
  delayStrategy: new ExponentialBackoffDelayStrategy(30),
  retryCondition: DefaultRetryCondition.shouldBeRetried
};

export class GenericRetrier {
  private retryConfiguration: RetryConfigurationDetails;
  private _logger: Logger = (undefined as unknown) as Logger;

  constructor(retryConfiguration: RetryConfiguration) {
    const preferredRetryConfig = { ...NoRetryConfigurationDetails, ...retryConfiguration };
    this.retryConfiguration = preferredRetryConfig;
  }

  public set logger(logger: Logger) {
    this._logger = logger;
  }

  public static createPreferredRetrier(
    clientRetryConfiguration?: RetryConfiguration,
    requestRetryConfiguration?: RetryConfiguration
  ): GenericRetrier {
    let retryConfigToUse = [requestRetryConfiguration, clientRetryConfiguration, {}].filter(
      configuration => configuration !== null && configuration !== undefined
    )[0];
    retryConfigToUse = { ...NoRetryConfigurationDetails, ...retryConfigToUse };
    return new GenericRetrier(retryConfigToUse);
  }

  public async makeServiceCall(
    httpClient: HttpClient,
    request: HttpRequest,
    excludeBody?: boolean
  ): Promise<Response> {
    const waitContext = new WaitContextImpl();
    let lastKnownError!: Error | OciError;
    let shouldBeRetried: boolean = true;
    while (true) {
      try {
        const response: Response = await httpClient.send(request, excludeBody);
        if (response.status && response.status >= 200 && response.status <= 299) {
          return response;
        } else {
          const errBody = await handleErrorBody(response);
          const errorObject = handleErrorResponse(response, errBody);
          shouldBeRetried = this.retryConfiguration.retryCondition(errorObject);
          lastKnownError = errorObject;
        }
      } catch (err) {
        lastKnownError = new OciError(err.code, "unknown code", err.message, "unknown");
        shouldBeRetried = true;
      }
      if (
        !shouldBeRetried ||
        this.retryConfiguration.terminationStrategy.shouldTerminate(waitContext) ||
        !GenericRetrier.isRequestRetryable(request)
      ) {
        if (this._logger) this._logger.debug("Not retrying the service call...");
        throw lastKnownError;
      }
      await delay(this.retryConfiguration.delayStrategy.delay(waitContext));
      waitContext.attemptCount++;
      GenericRetrier.refreshRequest(request);
      if (this._logger)
        this._logger.debug("Retrying the service call, attempt : ", waitContext.attemptCount);
    }
  }

  private static refreshRequest(request: HttpRequest) {
    request.headers.set("x-date", new Date().toUTCString());
    // TO-DO : Implement resetting/recreating stream/blobs
  }

  private static isRequestRetryable(request: HttpRequest) {
    if (!request.body) return true;
    if (request.body) {
      if (GenericRetrier.isReadableStream(request.body)) {
        return false;
      }
      return true;
    }
  }

  private static isReadableStream(obj: any) {
    return typeof obj._read === "function" && typeof obj._readableState === "object";
  }
}

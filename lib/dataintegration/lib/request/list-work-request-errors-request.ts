/**
 *
 *
 * OpenAPI spec version: 20200430
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");
export interface ListWorkRequestErrorsRequest {
  /**
   * The ID of the asynchronous request.
   */
  "workRequestId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If
   * you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * This parameter will control pagination.  Values for the parameter should come from the `opc-next-page` or `opc-prev-page` header in previous response.
   */
  "page"?: string;
  /**
   * This parameter allows users to set the maximum number of items to return per page.  The value must be between 1 and 100 (inclusive).  Default value is 100.
   */
  "limit"?: number;
  /**
   * This parameter is used to control the sort order.  Supported values are `ASC` (ascending) and `DESC` (descending).
   */
  "sortOrder"?: ListWorkRequestErrorsRequest.SortOrder;
  /**
   * This parameter allows users to specify a sort field.  Supported sort fields are `name`, `identifier`, `timeCreated`, and `timeUpdated`.  Default sort order is the descending order of `timeCreated` (most recently created objects at the top).  Sorting related parameters are ignored when parameter `query` is present (search operation and sorting order is by relevance score in descending order).
   */
  "sortBy"?: ListWorkRequestErrorsRequest.SortBy;
}

export namespace ListWorkRequestErrorsRequest {
  export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
  }

  export enum SortBy {
    TIMECREATED = "TIME_CREATED",
    DISPLAYNAME = "DISPLAY_NAME"
  }
}
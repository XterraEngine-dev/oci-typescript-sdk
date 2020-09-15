/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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

/**
 * Returns a parser agnostic breakdown of a query string for client query string introspection.
 *
 */
export interface ParseQueryOutput {
  /**
   * Display string formatted by query builder of user specified query string.
   *
   */
  "displayQueryString": string;
  /**
   * Internal string formatted by query builder of user specified query string.
   *
   */
  "internalQueryString": string;
  /**
   * List of columns returned by the specified query string as result output.
   *
   */
  "columns"?: Array<model.AbstractColumn>;
  /**
   * Operation response time.
   *
   */
  "responseTimeInMs"?: number;
  /**
   * List of querylanguage command descriptors, describing the specfied query string.
   *
   */
  "commands"?: Array<model.AbstractCommandDescriptor>;
}

export namespace ParseQueryOutput {
  export function getJsonObj(obj: ParseQueryOutput): object {
    const jsonObj = {
      ...obj,
      ...{
        "columns": obj.columns
          ? obj.columns.map(item => {
              return model.AbstractColumn.getJsonObj(item);
            })
          : undefined,

        "commands": obj.commands
          ? obj.commands.map(item => {
              return model.AbstractCommandDescriptor.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
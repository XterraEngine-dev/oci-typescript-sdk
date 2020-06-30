/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * A summary type containing information about the object including its key, name and when/who created/updated it
 */
export interface PatchObjectMetadata {
  /**
   * The key of the object.
   */
  "key"?: string;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value can be edited by the user and it is restricted to 1000 characters
   */
  "name"?: string;
  /**
   * The fully qualified path of the published object which would include its project and folder.
   */
  "namePath"?: string;
  /**
   * The type of the object in patch.
   */
  "type"?: PatchObjectMetadata.Type;
  /**
   * The object version.
   */
  "objectVersion"?: number;
  /**
   * Value can only contain upper case letters, underscore and numbers. It should begin with upper case letter or underscore. The value can be edited by the user.
   */
  "identifier"?: string;
  /**
   * The patch action, if object was created, updated or deleted.
   */
  "action"?: PatchObjectMetadata.Action;
}

export namespace PatchObjectMetadata {
  export enum Type {
    INTEGRATIONTASK = "INTEGRATION_TASK",
    DATALOADERTASK = "DATA_LOADER_TASK",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum Action {
    CREATED = "CREATED",
    DELETED = "DELETED",
    UPDATED = "UPDATED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PatchObjectMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
/**
 * InstanceAgentService API
 * Instance Agent Service API
 * OpenAPI spec version: 20180530
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
 * Command content.
 */
export interface InstanceAgentCommandContent {
  "source":
    | model.InstanceAgentCommandSourceViaObjectStorageTupleDetails
    | model.InstanceAgentCommandSourceViaObjectStorageUriDetails
    | model.InstanceAgentCommandSourceViaTextDetails;
  "output"?:
    | model.InstanceAgentCommandOutputViaObjectStorageUriDetails
    | model.InstanceAgentCommandOutputViaObjectStorageTupleDetails
    | model.InstanceAgentCommandOutputViaTextDetails;
}

export namespace InstanceAgentCommandContent {
  export function getJsonObj(obj: InstanceAgentCommandContent): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source
          ? model.InstanceAgentCommandSourceDetails.getJsonObj(obj.source)
          : undefined,
        "output": obj.output
          ? model.InstanceAgentCommandOutputDetails.getJsonObj(obj.output)
          : undefined
      }
    };

    return jsonObj;
  }
}

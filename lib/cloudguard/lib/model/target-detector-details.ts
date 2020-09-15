/**
 * Cloud Guard APIs
 * A description of the Cloud Guard APIs
 * OpenAPI spec version: 20200131
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
 * Overriden settings of a Detector Rule applied on target
 */
export interface TargetDetectorDetails {
  /**
   * Enables the control
   */
  "isEnabled": boolean;
  /**
   * The Risk Level
   */
  "riskLevel": model.RiskLevel;
  /**
   * Configuration details
   */
  "configurations"?: Array<model.DetectorConfiguration>;
  /**
   * Condition group corresponding to each compartment
   */
  "conditionGroups"?: Array<model.ConditionGroup>;
  /**
   * user defined labels for a detector rule
   */
  "labels"?: Array<string>;
  /**
   * configuration allowed or not
   */
  "isConfigurationAllowed"?: boolean;
}

export namespace TargetDetectorDetails {
  export function getJsonObj(obj: TargetDetectorDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.DetectorConfiguration.getJsonObj(item);
            })
          : undefined,
        "conditionGroups": obj.conditionGroups
          ? obj.conditionGroups.map(item => {
              return model.ConditionGroup.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}

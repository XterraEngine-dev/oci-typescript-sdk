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
 * Summary of the Detector Rules.
 */
export interface DetectorRuleSummary {
  /**
   * The unique identifier of the detector rule
   */
  "id": string;
  /**
   * DetectorTemplate Identifier, can be renamed
   */
  "displayName"?: string;
  /**
   * Description for detector rule
   */
  "description"?: string;
  /**
   * Recommendation for detector rule
   */
  "recommendation"?: string;
  /**
   * possible type of detectors
   */
  "detector": model.DetectorEnum;
  /**
   * service type of the configuration to which the rule is applied
   */
  "serviceType"?: string;
  /**
   * resource type of the configuration to which the rule is applied
   */
  "resourceType"?: string;
  /**
   * List of cloudguard managed list types related to this rule
   */
  "managedListTypes"?: Array<DetectorRuleSummary.ManagedListTypes>;
  /**
   * List of CandidateResponderRule related to this rule
   */
  "candidateResponderRules"?: Array<model.CandidateResponderRule>;
  "detectorDetails"?: model.DetectorDetails;
  /**
   * The date and time the detector rule was created. Format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the detector rule was updated. Format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the detector rule
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
}

export namespace DetectorRuleSummary {
  export enum ManagedListTypes {
    CidrBlock = "CIDR_BLOCK",
    Users = "USERS",
    Groups = "GROUPS",
    Ipv4Address = "IPV4ADDRESS",
    Ipv6Address = "IPV6ADDRESS",
    ResourceOcid = "RESOURCE_OCID",
    Region = "REGION",
    Country = "COUNTRY",
    State = "STATE",
    City = "CITY",
    Tags = "TAGS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DetectorRuleSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "candidateResponderRules": obj.candidateResponderRules
          ? obj.candidateResponderRules.map(item => {
              return model.CandidateResponderRule.getJsonObj(item);
            })
          : undefined,
        "detectorDetails": obj.detectorDetails
          ? model.DetectorDetails.getJsonObj(obj.detectorDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}

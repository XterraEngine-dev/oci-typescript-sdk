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
 * Responder Activity summary Definition.
 */
export interface ResponderActivitySummary {
  /**
   * Unique id for Responder activity.
   */
  "id": string;
  /**
   * problemId for which Responder activity is associated to.
   */
  "problemId": string;
  /**
   * Id of the responder rule for the problem
   */
  "responderRuleId": string;
  /**
   * responder rule type for performing the operation
   */
  "responderType": model.ResponderType;
  /**
   * responder rule name
   */
  "responderRuleName": string;
  /**
   * Responder activity types
   */
  "responderActivityType": model.ResponderActivityType;
  /**
   * the responder execution status
   */
  "responderExecutionStatus": model.ResponderExecutionStates;
  /**
   * responder activity starting time
   */
  "timeCreated": Date;
  /**
   * additional message related to this operation
   */
  "message": string;
}

export namespace ResponderActivitySummary {
  export function getJsonObj(obj: ResponderActivitySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

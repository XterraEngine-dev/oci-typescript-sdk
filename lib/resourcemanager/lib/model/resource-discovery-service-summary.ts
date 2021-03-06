/**
 * Resource Manager API
 * API for the Resource Manager service.
Use this API to install, configure, and manage resources via the "infrastructure-as-code" model.
For more information, see
[Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).

 * OpenAPI spec version: 20180917
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
 * A service supported for use with Resource Discovery.
 *
 */
export interface ResourceDiscoveryServiceSummary {
  /**
   * A supported service. Example: `core`
   * For reference on service names, see the [Terraform provider documentation](https://www.terraform.io/docs/providers/oci/guides/resource_discovery.html#services).
   *
   */
  "name"?: string;
  /**
   * The scope of the service as used with Resource Discovery.
   * This property determines the type of compartment OCID required: root compartment (`TENANCY`) or not (`COMPARTMENT`).
   * For example, `identity` is at the root compartment scope while `database` is at the compartment scope.
   *
   */
  "discoveryScope"?: ResourceDiscoveryServiceSummary.DiscoveryScope;
}

export namespace ResourceDiscoveryServiceSummary {
  export enum DiscoveryScope {
    Tenancy = "TENANCY",
    Compartment = "COMPARTMENT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ResourceDiscoveryServiceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

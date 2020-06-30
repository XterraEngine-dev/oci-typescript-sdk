/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
 * A dedicated virtual machine host that enables you to host multiple VM instances
 * on a dedicated host that is not shared with other tenancies.
 *
 */
export interface DedicatedVmHost {
  /**
    * The availability domain the dedicated virtual machine host is running in.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain": string;
  /**
   * The OCID of the compartment that contains the dedicated virtual machine host.
   */
  "compartmentId": string;
  /**
   * The dedicated virtual machine host shape. The shape determines the number of CPUs and
   * other resources available for VMs.
   *
   */
  "dedicatedVmHostShape": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: `My Dedicated Vm Host`
* 
    */
  "displayName": string;
  /**
    * The fault domain for the dedicated virtual machine host's assigned instances.
* For more information, see [Fault Domains](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/regions.htm#fault).
* <p>
If you do not specify the fault domain, the system selects one for you. To change the fault domain for a dedicated virtual machine host,
* delete it, and then create a new dedicated virtual machine host in the preferred fault domain.
* <p>
To get a list of fault domains, use the `ListFaultDomains` operation in the [Identity and Access Management Service API](https://docs.cloud.oracle.com/iaas/api/#/en/identity/20160918/).
* <p>
Example: `FAULT-DOMAIN-1`
* 
    */
  "faultDomain"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID of the dedicated VM host.
   */
  "id": string;
  /**
   * The current state of the dedicated VM host.
   *
   */
  "lifecycleState": DedicatedVmHost.LifecycleState;
  /**
    * The date and time the dedicated VM host was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The total OCPUs of the dedicated VM host.
   *
   */
  "totalOcpus": number;
  /**
   * The available OCPUs of the dedicated VM host.
   *
   */
  "remainingOcpus": number;
}

export namespace DedicatedVmHost {
  export enum LifecycleState {
    CREATING = "CREATING",
    ACTIVE = "ACTIVE",
    UPDATING = "UPDATING",
    DELETING = "DELETING",
    DELETED = "DELETED",
    FAILED = "FAILED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DedicatedVmHost): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}

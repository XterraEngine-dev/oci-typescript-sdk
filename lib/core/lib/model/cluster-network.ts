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
 * A cluster network is a group of high performance computing (HPC) bare metal instances that are connected
 * with an ultra low latency network. For more information about cluster networks, see
 * [Managing Cluster Networks](https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/managingclusternetworks.htm).
 *
 */
export interface ClusterNetwork {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the cluster network.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the cluster netowrk.
   */
  "compartmentId": string;
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
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * The instance pools in the cluster network.
* <p>
Each cluster network can have one instance pool.
* 
    */
  "instancePools"?: Array<model.InstancePool>;
  /**
   * The placement configuration for the instance pools in the cluster network.
   *
   */
  "placementConfiguration"?: model.ClusterNetworkPlacementConfigurationDetails;
  /**
   * The current state of the cluster network.
   */
  "lifecycleState": ClusterNetwork.LifecycleState;
  /**
    * The date and time the resource was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the resource was updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeUpdated": Date;
}

export namespace ClusterNetwork {
  export enum LifecycleState {
    PROVISIONING = "PROVISIONING",
    SCALING = "SCALING",
    STARTING = "STARTING",
    STOPPING = "STOPPING",
    TERMINATING = "TERMINATING",
    STOPPED = "STOPPED",
    TERMINATED = "TERMINATED",
    RUNNING = "RUNNING",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ClusterNetwork): object {
    const jsonObj = {
      ...obj,
      ...{
        "instancePools": obj.instancePools
          ? obj.instancePools.map(item => {
              return model.InstancePool.getJsonObj(item);
            })
          : undefined,
        "placementConfiguration": obj.placementConfiguration
          ? model.ClusterNetworkPlacementConfigurationDetails.getJsonObj(obj.placementConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
}

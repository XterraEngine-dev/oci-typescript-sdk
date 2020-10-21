/**
 *
 *
 * OpenAPI spec version: 20200630
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
export interface SummarizeSqlStatisticsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * Filter by one or more database type.
   * Possible values are ADW-S, ATP-S, ADW-D, ATP-D
   *
   */
  "databaseType"?: Array<SummarizeSqlStatisticsRequest.DatabaseType>;
  /**
   * Optional list of database [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "databaseId"?: Array<string>;
  /**
   * Filter sqls by percentage of db time.
   *
   */
  "databaseTimePctGreaterThan"?: number;
  /**
   * One or more unique SQL_IDs for a SQL Statement.
   * Example: `6rgjh9bjmy2s7`
   *
   */
  "sqlIdentifier"?: Array<string>;
  /**
   * Specify time period in ISO 8601 format with respect to current time.
   * Default is last 30 days represented by P30D.
   * If timeInterval is specified, then timeIntervalStart and timeIntervalEnd will be ignored.
   * Examples  P90D (last 90 days), P4W (last 4 weeks), P2M (last 2 months), P1Y (last 12 months), . Maximum value allowed is 25 months prior to current time (P25M).
   *
   */
  "analysisTimeInterval"?: string;
  /**
   * Analysis start time in UTC in ISO 8601 format(inclusive).
   * Example 2019-10-30T00:00:00Z (yyyy-MM-ddThh:mm:ssZ).
   * The minimum allowed value is 2 years prior to the current day.
   * timeIntervalStart and timeIntervalEnd parameters are used together.
   * If analysisTimeInterval is specified, this parameter is ignored.
   *
   */
  "timeIntervalStart"?: Date;
  /**
   * Analysis end time in UTC in ISO 8601 format(exclusive).
   * Example 2019-10-30T00:00:00Z (yyyy-MM-ddThh:mm:ssZ).
   * timeIntervalStart and timeIntervalEnd are used together.
   * If timeIntervalEnd is not specified, current time is used as timeIntervalEnd.
   *
   */
  "timeIntervalEnd"?: Date;
  /**
   * For list pagination. The maximum number of results per page, or items to
   * return in a paginated \"List\" call.
   * For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   * Example: `50`
   *
   */
  "limit"?: number;
  /**
   * For list pagination. The value of the `opc-next-page` response header from
   * the previous \"List\" call. For important details about how pagination works,
   * see [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to use when sorting SQL statistics.
   * Example: databaseTimeInSec
   *
   */
  "sortBy"?: SummarizeSqlStatisticsRequest.SortBy;
  /**
   * Filter sqls by one or more performance categories.
   *
   */
  "category"?: Array<SummarizeSqlStatisticsRequest.Category>;
}

export namespace SummarizeSqlStatisticsRequest {
  export enum DatabaseType {
    AdwS = "ADW-S",
    AtpS = "ATP-S",
    AdwD = "ADW-D",
    AtpD = "ATP-D"
  }

  export enum SortBy {
    DatabaseTimeInSec = "databaseTimeInSec",
    ExecutionsPerHour = "executionsPerHour",
    ExecutionsCount = "executionsCount",
    CpuTimeInSec = "cpuTimeInSec",
    IoTimeInSec = "ioTimeInSec",
    InefficientWaitTimeInSec = "inefficientWaitTimeInSec",
    ResponseTimeInSec = "responseTimeInSec",
    PlanCount = "planCount",
    Variability = "variability",
    AverageActiveSessions = "averageActiveSessions",
    DatabaseTimePct = "databaseTimePct",
    InefficiencyInPct = "inefficiencyInPct",
    ChangeInCpuTimeInPct = "changeInCpuTimeInPct",
    ChangeInIoTimeInPct = "changeInIoTimeInPct",
    ChangeInInefficientWaitTimeInPct = "changeInInefficientWaitTimeInPct",
    ChangeInResponseTimeInPct = "changeInResponseTimeInPct",
    ChangeInAverageActiveSessionsInPct = "changeInAverageActiveSessionsInPct",
    ChangeInExecutionsPerHourInPct = "changeInExecutionsPerHourInPct",
    ChangeInInefficiencyInPct = "changeInInefficiencyInPct"
  }

  export enum Category {
    Degrading = "DEGRADING",
    Variant = "VARIANT",
    Inefficient = "INEFFICIENT",
    ChangingPlans = "CHANGING_PLANS",
    DegradingVariant = "DEGRADING_VARIANT",
    DegradingInefficient = "DEGRADING_INEFFICIENT",
    DegradingChangingPlans = "DEGRADING_CHANGING_PLANS",
    DegradingIncreasingIo = "DEGRADING_INCREASING_IO",
    DegradingIncreasingCpu = "DEGRADING_INCREASING_CPU",
    DegradingIncreasingInefficientWait = "DEGRADING_INCREASING_INEFFICIENT_WAIT",
    DegradingChangingPlansAndIncreasingIo = "DEGRADING_CHANGING_PLANS_AND_INCREASING_IO",
    DegradingChangingPlansAndIncreasingCpu = "DEGRADING_CHANGING_PLANS_AND_INCREASING_CPU",
    DegradingChangingPlansAndIncreasingInefficientWait = "DEGRADING_CHANGING_PLANS_AND_INCREASING_INEFFICIENT_WAIT",
    VariantInefficient = "VARIANT_INEFFICIENT",
    VariantChangingPlans = "VARIANT_CHANGING_PLANS",
    VariantIncreasingIo = "VARIANT_INCREASING_IO",
    VariantIncreasingCpu = "VARIANT_INCREASING_CPU",
    VariantIncreasingInefficientWait = "VARIANT_INCREASING_INEFFICIENT_WAIT",
    VariantChangingPlansAndIncreasingIo = "VARIANT_CHANGING_PLANS_AND_INCREASING_IO",
    VariantChangingPlansAndIncreasingCpu = "VARIANT_CHANGING_PLANS_AND_INCREASING_CPU",
    VariantChangingPlansAndIncreasingInefficientWait = "VARIANT_CHANGING_PLANS_AND_INCREASING_INEFFICIENT_WAIT",
    InefficientChangingPlans = "INEFFICIENT_CHANGING_PLANS",
    InefficientIncreasingInefficientWait = "INEFFICIENT_INCREASING_INEFFICIENT_WAIT",
    InefficientChangingPlansAndIncreasingInefficientWait = "INEFFICIENT_CHANGING_PLANS_AND_INCREASING_INEFFICIENT_WAIT"
  }
}
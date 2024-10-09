// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace oracledatabase_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Oracle Database@Google Cloud API
   *
   * The Oracle Database@Google Cloud API provides a set of APIs to manage Oracle database services, such as Exadata and Autonomous Databases.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const oracledatabase = google.oracledatabase('v1');
   * ```
   */
  export class Oracledatabase {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * A list of all connection strings that can be used to connect to the Autonomous Database.
   */
  export interface Schema$AllConnectionStrings {
    /**
     * Output only. The database service provides the highest level of resources to each SQL statement.
     */
    high?: string | null;
    /**
     * Output only. The database service provides the least level of resources to each SQL statement.
     */
    low?: string | null;
    /**
     * Output only. The database service provides a lower level of resources to each SQL statement.
     */
    medium?: string | null;
  }
  /**
   * Details of the Autonomous Database resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDatabase/
   */
  export interface Schema$AutonomousDatabase {
    /**
     * Optional. The password for the default ADMIN user.
     */
    adminPassword?: string | null;
    /**
     * Required. The subnet CIDR range for the Autonmous Database.
     */
    cidr?: string | null;
    /**
     * Output only. The date and time that the Autonomous Database was created.
     */
    createTime?: string | null;
    /**
     * Optional. The name of the Autonomous Database. The database name must be unique in the project. The name must begin with a letter and can contain a maximum of 30 alphanumeric characters.
     */
    database?: string | null;
    /**
     * Optional. The display name for the Autonomous Database. The name does not have to be unique within your project.
     */
    displayName?: string | null;
    /**
     * Output only. The ID of the subscription entitlement associated with the Autonomous Database.
     */
    entitlementId?: string | null;
    /**
     * Optional. The labels or tags associated with the Autonomous Database.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the Autonomous Database resource in the following format: projects/{project\}/locations/{region\}/autonomousDatabases/{autonomous_database\}
     */
    name?: string | null;
    /**
     * Required. The name of the VPC network used by the Autonomous Database in the following format: projects/{project\}/global/networks/{network\}
     */
    network?: string | null;
    /**
     * Optional. The properties of the Autonomous Database.
     */
    properties?: Schema$AutonomousDatabaseProperties;
  }
  /**
   * Oracle APEX Application Development. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/AutonomousDatabaseApex
   */
  export interface Schema$AutonomousDatabaseApex {
    /**
     * Output only. The Oracle APEX Application Development version.
     */
    apexVersion?: string | null;
    /**
     * Output only. The Oracle REST Data Services (ORDS) version.
     */
    ordsVersion?: string | null;
  }
  /**
   * Details of the Autonomous Database Backup resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDatabaseBackup/
   */
  export interface Schema$AutonomousDatabaseBackup {
    /**
     * Required. The name of the Autonomous Database resource for which the backup is being created. Format: projects/{project\}/locations/{region\}/autonomousDatabases/{autonomous_database\}
     */
    autonomousDatabase?: string | null;
    /**
     * Optional. User friendly name for the Backup. The name does not have to be unique.
     */
    displayName?: string | null;
    /**
     * Optional. labels or tags associated with the resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the Autonomous Database Backup resource with the format: projects/{project\}/locations/{region\}/autonomousDatabaseBackups/{autonomous_database_backup\}
     */
    name?: string | null;
    /**
     * Optional. Various properties of the backup.
     */
    properties?: Schema$AutonomousDatabaseBackupProperties;
  }
  /**
   * Properties of the Autonomous Database Backup resource.
   */
  export interface Schema$AutonomousDatabaseBackupProperties {
    /**
     * Output only. Timestamp until when the backup will be available.
     */
    availableTillTime?: string | null;
    /**
     * Output only. The OCID of the compartment.
     */
    compartmentId?: string | null;
    /**
     * Output only. The quantity of data in the database, in terabytes.
     */
    databaseSizeTb?: number | null;
    /**
     * Output only. A valid Oracle Database version for Autonomous Database.
     */
    dbVersion?: string | null;
    /**
     * Output only. The date and time the backup completed.
     */
    endTime?: string | null;
    /**
     * Output only. Indicates if the backup is automatic or user initiated.
     */
    isAutomaticBackup?: boolean | null;
    /**
     * Output only. Indicates if the backup is long term backup.
     */
    isLongTermBackup?: boolean | null;
    /**
     * Output only. Indicates if the backup can be used to restore the Autonomous Database.
     */
    isRestorable?: boolean | null;
    /**
     * Optional. The OCID of the key store of Oracle Vault.
     */
    keyStoreId?: string | null;
    /**
     * Optional. The wallet name for Oracle Key Vault.
     */
    keyStoreWallet?: string | null;
    /**
     * Optional. The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
     */
    kmsKeyId?: string | null;
    /**
     * Optional. The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation. Autonomous Database Serverless does not use key versions, hence is not applicable for Autonomous Database Serverless instances.
     */
    kmsKeyVersionId?: string | null;
    /**
     * Output only. Additional information about the current lifecycle state.
     */
    lifecycleDetails?: string | null;
    /**
     * Output only. The lifecycle state of the backup.
     */
    lifecycleState?: string | null;
    /**
     * Output only. OCID of the Autonomous Database backup. https://docs.oracle.com/en-us/iaas/Content/General/Concepts/identifiers.htm#Oracle
     */
    ocid?: string | null;
    /**
     * Optional. Retention period in days for the backup.
     */
    retentionPeriodDays?: number | null;
    /**
     * Output only. The backup size in terabytes.
     */
    sizeTb?: number | null;
    /**
     * Output only. The date and time the backup started.
     */
    startTime?: string | null;
    /**
     * Output only. The type of the backup.
     */
    type?: string | null;
    /**
     * Optional. The OCID of the vault.
     */
    vaultId?: string | null;
  }
  /**
   * Details of the Autonomous Database character set resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDatabaseCharacterSets/
   */
  export interface Schema$AutonomousDatabaseCharacterSet {
    /**
     * Output only. The character set name for the Autonomous Database which is the ID in the resource name.
     */
    characterSet?: string | null;
    /**
     * Output only. The character set type for the Autonomous Database.
     */
    characterSetType?: string | null;
    /**
     * Identifier. The name of the Autonomous Database Character Set resource in the following format: projects/{project\}/locations/{region\}/autonomousDatabaseCharacterSets/{autonomous_database_character_set\}
     */
    name?: string | null;
  }
  /**
   * The connection string used to connect to the Autonomous Database. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/AutonomousDatabaseConnectionStrings
   */
  export interface Schema$AutonomousDatabaseConnectionStrings {
    /**
     * Output only. Returns all connection strings that can be used to connect to the Autonomous Database.
     */
    allConnectionStrings?: Schema$AllConnectionStrings;
    /**
     * Output only. The database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements.
     */
    dedicated?: string | null;
    /**
     * Output only. The database service provides the highest level of resources to each SQL statement.
     */
    high?: string | null;
    /**
     * Output only. The database service provides the least level of resources to each SQL statement.
     */
    low?: string | null;
    /**
     * Output only. The database service provides a lower level of resources to each SQL statement.
     */
    medium?: string | null;
    /**
     * Output only. A list of connection string profiles to allow clients to group, filter, and select values based on the structured metadata.
     */
    profiles?: Schema$DatabaseConnectionStringProfile[];
  }
  /**
   * The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/AutonomousDatabaseConnectionUrls
   */
  export interface Schema$AutonomousDatabaseConnectionUrls {
    /**
     * Output only. Oracle Application Express (APEX) URL.
     */
    apexUri?: string | null;
    /**
     * Output only. The URL of the Database Transforms for the Autonomous Database.
     */
    databaseTransformsUri?: string | null;
    /**
     * Output only. The URL of the Graph Studio for the Autonomous Database.
     */
    graphStudioUri?: string | null;
    /**
     * Output only. The URL of the Oracle Machine Learning (OML) Notebook for the Autonomous Database.
     */
    machineLearningNotebookUri?: string | null;
    /**
     * Output only. The URL of Machine Learning user management the Autonomous Database.
     */
    machineLearningUserManagementUri?: string | null;
    /**
     * Output only. The URL of the MongoDB API for the Autonomous Database.
     */
    mongoDbUri?: string | null;
    /**
     * Output only. The Oracle REST Data Services (ORDS) URL of the Web Access for the Autonomous Database.
     */
    ordsUri?: string | null;
    /**
     * Output only. The URL of the Oracle SQL Developer Web for the Autonomous Database.
     */
    sqlDevWebUri?: string | null;
  }
  /**
   * The properties of an Autonomous Database.
   */
  export interface Schema$AutonomousDatabaseProperties {
    /**
     * Output only. The amount of storage currently being used for user and system data, in terabytes.
     */
    actualUsedDataStorageSizeTb?: number | null;
    /**
     * Output only. The amount of storage currently allocated for the database tables and billed for, rounded up in terabytes.
     */
    allocatedStorageSizeTb?: number | null;
    /**
     * Output only. The details for the Oracle APEX Application Development.
     */
    apexDetails?: Schema$AutonomousDatabaseApex;
    /**
     * Output only. This field indicates the status of Data Guard and Access control for the Autonomous Database. The field's value is null if Data Guard is disabled or Access Control is disabled. The field's value is TRUE if both Data Guard and Access Control are enabled, and the Autonomous Database is using primary IP access control list (ACL) for standby. The field's value is FALSE if both Data Guard and Access Control are enabled, and the Autonomous Database is using a different IP access control list (ACL) for standby compared to primary.
     */
    arePrimaryAllowlistedIpsUsed?: boolean | null;
    /**
     * Output only. The Autonomous Container Database OCID.
     */
    autonomousContainerDatabaseId?: string | null;
    /**
     * Output only. The list of available Oracle Database upgrade versions for an Autonomous Database.
     */
    availableUpgradeVersions?: string[] | null;
    /**
     * Optional. The retention period for the Autonomous Database. This field is specified in days, can range from 1 day to 60 days, and has a default value of 60 days.
     */
    backupRetentionPeriodDays?: number | null;
    /**
     * Optional. The character set for the Autonomous Database. The default is AL32UTF8.
     */
    characterSet?: string | null;
    /**
     * Optional. The number of compute servers for the Autonomous Database.
     */
    computeCount?: number | null;
    /**
     * Output only. The connection strings used to connect to an Autonomous Database.
     */
    connectionStrings?: Schema$AutonomousDatabaseConnectionStrings;
    /**
     * Output only. The Oracle Connection URLs for an Autonomous Database.
     */
    connectionUrls?: Schema$AutonomousDatabaseConnectionUrls;
    /**
     * Optional. The number of CPU cores to be made available to the database.
     */
    cpuCoreCount?: number | null;
    /**
     * Optional. The list of customer contacts.
     */
    customerContacts?: Schema$CustomerContact[];
    /**
     * Output only. The current state of database management for the Autonomous Database.
     */
    databaseManagementState?: string | null;
    /**
     * Output only. The current state of the Data Safe registration for the Autonomous Database.
     */
    dataSafeState?: string | null;
    /**
     * Optional. The size of the data stored in the database, in gigabytes.
     */
    dataStorageSizeGb?: number | null;
    /**
     * Optional. The size of the data stored in the database, in terabytes.
     */
    dataStorageSizeTb?: number | null;
    /**
     * Optional. The edition of the Autonomous Databases.
     */
    dbEdition?: string | null;
    /**
     * Optional. The Oracle Database version for the Autonomous Database.
     */
    dbVersion?: string | null;
    /**
     * Required. The workload type of the Autonomous Database.
     */
    dbWorkload?: string | null;
    /**
     * Output only. This field indicates the number of seconds of data loss during a Data Guard failover.
     */
    failedDataRecoveryDuration?: string | null;
    /**
     * Optional. This field indicates if auto scaling is enabled for the Autonomous Database CPU core count.
     */
    isAutoScalingEnabled?: boolean | null;
    /**
     * Output only. This field indicates whether the Autonomous Database has local (in-region) Data Guard enabled.
     */
    isLocalDataGuardEnabled?: boolean | null;
    /**
     * Optional. This field indicates if auto scaling is enabled for the Autonomous Database storage.
     */
    isStorageAutoScalingEnabled?: boolean | null;
    /**
     * Required. The license type used for the Autonomous Database.
     */
    licenseType?: string | null;
    /**
     * Output only. The details of the current lifestyle state of the Autonomous Database.
     */
    lifecycleDetails?: string | null;
    /**
     * Output only. This field indicates the maximum data loss limit for an Autonomous Database, in seconds.
     */
    localAdgAutoFailoverMaxDataLossLimit?: number | null;
    /**
     * Output only. This field indicates the local disaster recovery (DR) type of an Autonomous Database.
     */
    localDisasterRecoveryType?: string | null;
    /**
     * Output only. The details of the Autonomous Data Guard standby database.
     */
    localStandbyDb?: Schema$AutonomousDatabaseStandbySummary;
    /**
     * Output only. The date and time when maintenance will begin.
     */
    maintenanceBeginTime?: string | null;
    /**
     * Output only. The date and time when maintenance will end.
     */
    maintenanceEndTime?: string | null;
    /**
     * Optional. The maintenance schedule of the Autonomous Database.
     */
    maintenanceScheduleType?: string | null;
    /**
     * Output only. The amount of memory enabled per ECPU, in gigabytes.
     */
    memoryPerOracleComputeUnitGbs?: number | null;
    /**
     * Output only. The memory assigned to in-memory tables in an Autonomous Database.
     */
    memoryTableGbs?: number | null;
    /**
     * Optional. This field specifies if the Autonomous Database requires mTLS connections.
     */
    mtlsConnectionRequired?: boolean | null;
    /**
     * Optional. The national character set for the Autonomous Database. The default is AL16UTF16.
     */
    nCharacterSet?: string | null;
    /**
     * Output only. The long term backup schedule of the Autonomous Database.
     */
    nextLongTermBackupTime?: string | null;
    /**
     * Output only. OCID of the Autonomous Database. https://docs.oracle.com/en-us/iaas/Content/General/Concepts/identifiers.htm#Oracle
     */
    ocid?: string | null;
    /**
     * Output only. The Oracle Cloud Infrastructure link for the Autonomous Database.
     */
    ociUrl?: string | null;
    /**
     * Output only. This field indicates the current mode of the Autonomous Database.
     */
    openMode?: string | null;
    /**
     * Output only. This field indicates the state of Operations Insights for the Autonomous Database.
     */
    operationsInsightsState?: string | null;
    /**
     * Output only. The list of OCIDs of standby databases located in Autonomous Data Guard remote regions that are associated with the source database.
     */
    peerDbIds?: string[] | null;
    /**
     * Output only. The permission level of the Autonomous Database.
     */
    permissionLevel?: string | null;
    /**
     * Output only. The private endpoint for the Autonomous Database.
     */
    privateEndpoint?: string | null;
    /**
     * Optional. The private endpoint IP address for the Autonomous Database.
     */
    privateEndpointIp?: string | null;
    /**
     * Optional. The private endpoint label for the Autonomous Database.
     */
    privateEndpointLabel?: string | null;
    /**
     * Output only. The refresh mode of the cloned Autonomous Database.
     */
    refreshableMode?: string | null;
    /**
     * Output only. The refresh State of the clone.
     */
    refreshableState?: string | null;
    /**
     * Output only. The Data Guard role of the Autonomous Database.
     */
    role?: string | null;
    /**
     * Output only. The list and details of the scheduled operations of the Autonomous Database.
     */
    scheduledOperationDetails?: Schema$ScheduledOperationDetails[];
    /**
     * Optional. The ID of the Oracle Cloud Infrastructure vault secret.
     */
    secretId?: string | null;
    /**
     * Output only. The SQL Web Developer URL for the Autonomous Database.
     */
    sqlWebDeveloperUrl?: string | null;
    /**
     * Output only. The current lifecycle state of the Autonomous Database.
     */
    state?: string | null;
    /**
     * Output only. The list of available regions that can be used to create a clone for the Autonomous Database.
     */
    supportedCloneRegions?: string[] | null;
    /**
     * Output only. The storage space used by automatic backups of Autonomous Database, in gigabytes.
     */
    totalAutoBackupStorageSizeGbs?: number | null;
    /**
     * Output only. The storage space used by Autonomous Database, in gigabytes.
     */
    usedDataStorageSizeTbs?: number | null;
    /**
     * Optional. The ID of the Oracle Cloud Infrastructure vault.
     */
    vaultId?: string | null;
  }
  /**
   * Autonomous Data Guard standby database details. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/AutonomousDatabaseStandbySummary
   */
  export interface Schema$AutonomousDatabaseStandbySummary {
    /**
     * Output only. The date and time the Autonomous Data Guard role was switched for the standby Autonomous Database.
     */
    dataGuardRoleChangedTime?: string | null;
    /**
     * Output only. The date and time the Disaster Recovery role was switched for the standby Autonomous Database.
     */
    disasterRecoveryRoleChangedTime?: string | null;
    /**
     * Output only. The amount of time, in seconds, that the data of the standby database lags in comparison to the data of the primary database.
     */
    lagTimeDuration?: string | null;
    /**
     * Output only. The additional details about the current lifecycle state of the Autonomous Database.
     */
    lifecycleDetails?: string | null;
    /**
     * Output only. The current lifecycle state of the Autonomous Database.
     */
    state?: string | null;
  }
  /**
   * Details of the Autonomous Database version. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDbVersionSummary/
   */
  export interface Schema$AutonomousDbVersion {
    /**
     * Output only. The Autonomous Database workload type.
     */
    dbWorkload?: string | null;
    /**
     * Identifier. The name of the Autonomous Database Version resource with the format: projects/{project\}/locations/{region\}/autonomousDbVersions/{autonomous_db_version\}
     */
    name?: string | null;
    /**
     * Output only. An Oracle Database version for Autonomous Database.
     */
    version?: string | null;
    /**
     * Output only. A URL that points to a detailed description of the Autonomous Database version.
     */
    workloadUri?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Details of the OCI Cloud Account.
   */
  export interface Schema$CloudAccountDetails {
    /**
     * Output only. URL to create a new account and link.
     */
    accountCreationUri?: string | null;
    /**
     * Output only. OCI account name.
     */
    cloudAccount?: string | null;
    /**
     * Output only. OCI account home region.
     */
    cloudAccountHomeRegion?: string | null;
    /**
     * Output only. URL to link an existing account.
     */
    linkExistingAccountUri?: string | null;
  }
  /**
   * Represents CloudExadataInfrastructure resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/CloudExadataInfrastructure/
   */
  export interface Schema$CloudExadataInfrastructure {
    /**
     * Output only. The date and time that the Exadata Infrastructure was created.
     */
    createTime?: string | null;
    /**
     * Optional. User friendly name for this resource.
     */
    displayName?: string | null;
    /**
     * Output only. Entitlement ID of the private offer against which this infrastructure resource is provisioned.
     */
    entitlementId?: string | null;
    /**
     * Optional. Google Cloud Platform location where Oracle Exadata is hosted.
     */
    gcpOracleZone?: string | null;
    /**
     * Optional. Labels or tags associated with the resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the Exadata Infrastructure resource with the format: projects/{project\}/locations/{region\}/cloudExadataInfrastructures/{cloud_exadata_infrastructure\}
     */
    name?: string | null;
    /**
     * Optional. Various properties of the infra.
     */
    properties?: Schema$CloudExadataInfrastructureProperties;
  }
  /**
   * Various properties of Exadata Infrastructure.
   */
  export interface Schema$CloudExadataInfrastructureProperties {
    /**
     * Output only. The requested number of additional storage servers activated for the Exadata Infrastructure.
     */
    activatedStorageCount?: number | null;
    /**
     * Output only. The requested number of additional storage servers for the Exadata Infrastructure.
     */
    additionalStorageCount?: number | null;
    /**
     * Output only. The available storage can be allocated to the Exadata Infrastructure resource, in gigabytes (GB).
     */
    availableStorageSizeGb?: number | null;
    /**
     * Optional. The number of compute servers for the Exadata Infrastructure.
     */
    computeCount?: number | null;
    /**
     * Optional. The number of enabled CPU cores.
     */
    cpuCount?: number | null;
    /**
     * Optional. The list of customer contacts.
     */
    customerContacts?: Schema$CustomerContact[];
    /**
     * Output only. Size, in terabytes, of the DATA disk group.
     */
    dataStorageSizeTb?: number | null;
    /**
     * Optional. The local node storage allocated in GBs.
     */
    dbNodeStorageSizeGb?: number | null;
    /**
     * Output only. The software version of the database servers (dom0) in the Exadata Infrastructure.
     */
    dbServerVersion?: string | null;
    /**
     * Optional. Maintenance window for repair.
     */
    maintenanceWindow?: Schema$MaintenanceWindow;
    /**
     * Output only. The total number of CPU cores available.
     */
    maxCpuCount?: number | null;
    /**
     * Output only. The total available DATA disk group size.
     */
    maxDataStorageTb?: number | null;
    /**
     * Output only. The total local node storage available in GBs.
     */
    maxDbNodeStorageSizeGb?: number | null;
    /**
     * Output only. The total memory available in GBs.
     */
    maxMemoryGb?: number | null;
    /**
     * Optional. The memory allocated in GBs.
     */
    memorySizeGb?: number | null;
    /**
     * Output only. The monthly software version of the database servers (dom0) in the Exadata Infrastructure. Example: 20.1.15
     */
    monthlyDbServerVersion?: string | null;
    /**
     * Output only. The monthly software version of the storage servers (cells) in the Exadata Infrastructure. Example: 20.1.15
     */
    monthlyStorageServerVersion?: string | null;
    /**
     * Output only. The OCID of the next maintenance run.
     */
    nextMaintenanceRunId?: string | null;
    /**
     * Output only. The time when the next maintenance run will occur.
     */
    nextMaintenanceRunTime?: string | null;
    /**
     * Output only. The time when the next security maintenance run will occur.
     */
    nextSecurityMaintenanceRunTime?: string | null;
    /**
     * Output only. OCID of created infra. https://docs.oracle.com/en-us/iaas/Content/General/Concepts/identifiers.htm#Oracle
     */
    ocid?: string | null;
    /**
     * Output only. Deep link to the OCI console to view this resource.
     */
    ociUrl?: string | null;
    /**
     * Required. The shape of the Exadata Infrastructure. The shape determines the amount of CPU, storage, and memory resources allocated to the instance.
     */
    shape?: string | null;
    /**
     * Output only. The current lifecycle state of the Exadata Infrastructure.
     */
    state?: string | null;
    /**
     * Optional. The number of Cloud Exadata storage servers for the Exadata Infrastructure.
     */
    storageCount?: number | null;
    /**
     * Output only. The software version of the storage servers (cells) in the Exadata Infrastructure.
     */
    storageServerVersion?: string | null;
    /**
     * Optional. The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB).
     */
    totalStorageSizeGb?: number | null;
  }
  /**
   * Details of the Cloud VM Cluster resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/CloudVmCluster/
   */
  export interface Schema$CloudVmCluster {
    /**
     * Required. CIDR range of the backup subnet.
     */
    backupSubnetCidr?: string | null;
    /**
     * Required. Network settings. CIDR to use for cluster IP allocation.
     */
    cidr?: string | null;
    /**
     * Output only. The date and time that the VM cluster was created.
     */
    createTime?: string | null;
    /**
     * Optional. User friendly name for this resource.
     */
    displayName?: string | null;
    /**
     * Required. The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project\}/locations/{region\}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure\}
     */
    exadataInfrastructure?: string | null;
    /**
     * Output only. Google Cloud Platform location where Oracle Exadata is hosted. It is same as Google Cloud Platform Oracle zone of Exadata infrastructure.
     */
    gcpOracleZone?: string | null;
    /**
     * Optional. Labels or tags associated with the VM Cluster.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the VM Cluster resource with the format: projects/{project\}/locations/{region\}/cloudVmClusters/{cloud_vm_cluster\}
     */
    name?: string | null;
    /**
     * Required. The name of the VPC network. Format: projects/{project\}/global/networks/{network\}
     */
    network?: string | null;
    /**
     * Optional. Various properties of the VM Cluster.
     */
    properties?: Schema$CloudVmClusterProperties;
  }
  /**
   * Various properties and settings associated with Exadata VM cluster.
   */
  export interface Schema$CloudVmClusterProperties {
    /**
     * Optional. OCI Cluster name.
     */
    clusterName?: string | null;
    /**
     * Output only. Compartment ID of cluster.
     */
    compartmentId?: string | null;
    /**
     * Required. Number of enabled CPU cores.
     */
    cpuCoreCount?: number | null;
    /**
     * Optional. The data disk group size to be allocated in TBs.
     */
    dataStorageSizeTb?: number | null;
    /**
     * Optional. Local storage per VM.
     */
    dbNodeStorageSizeGb?: number | null;
    /**
     * Optional. OCID of database servers.
     */
    dbServerOcids?: string[] | null;
    /**
     * Optional. Data collection options for diagnostics.
     */
    diagnosticsDataCollectionOptions?: Schema$DataCollectionOptions;
    /**
     * Optional. The type of redundancy.
     */
    diskRedundancy?: string | null;
    /**
     * Output only. DNS listener IP.
     */
    dnsListenerIp?: string | null;
    /**
     * Output only. Parent DNS domain where SCAN DNS and hosts names are qualified. ex: ocispdelegated.ocisp10jvnet.oraclevcn.com
     */
    domain?: string | null;
    /**
     * Optional. Grid Infrastructure Version.
     */
    giVersion?: string | null;
    /**
     * Output only. host name without domain. format: "-" with some suffix. ex: sp2-yi0xq where "sp2" is the hostname_prefix.
     */
    hostname?: string | null;
    /**
     * Optional. Prefix for VM cluster host names.
     */
    hostnamePrefix?: string | null;
    /**
     * Required. License type of VM Cluster.
     */
    licenseType?: string | null;
    /**
     * Optional. Use local backup.
     */
    localBackupEnabled?: boolean | null;
    /**
     * Optional. Memory allocated in GBs.
     */
    memorySizeGb?: number | null;
    /**
     * Optional. Number of database servers.
     */
    nodeCount?: number | null;
    /**
     * Output only. Oracle Cloud Infrastructure ID of VM Cluster.
     */
    ocid?: string | null;
    /**
     * Output only. Deep link to the OCI console to view this resource.
     */
    ociUrl?: string | null;
    /**
     * Optional. OCPU count per VM. Minimum is 0.1.
     */
    ocpuCount?: number | null;
    /**
     * Output only. SCAN DNS name. ex: sp2-yi0xq-scan.ocispdelegated.ocisp10jvnet.oraclevcn.com
     */
    scanDns?: string | null;
    /**
     * Output only. OCID of scan DNS record.
     */
    scanDnsRecordId?: string | null;
    /**
     * Output only. OCIDs of scan IPs.
     */
    scanIpIds?: string[] | null;
    /**
     * Output only. SCAN listener port - TCP
     */
    scanListenerPortTcp?: number | null;
    /**
     * Output only. SCAN listener port - TLS
     */
    scanListenerPortTcpSsl?: number | null;
    /**
     * Output only. Shape of VM Cluster.
     */
    shape?: string | null;
    /**
     * Optional. Use exadata sparse snapshots.
     */
    sparseDiskgroupEnabled?: boolean | null;
    /**
     * Optional. SSH public keys to be stored with cluster.
     */
    sshPublicKeys?: string[] | null;
    /**
     * Output only. State of the cluster.
     */
    state?: string | null;
    /**
     * Output only. The storage allocation for the disk group, in gigabytes (GB).
     */
    storageSizeGb?: number | null;
    /**
     * Output only. Operating system version of the image.
     */
    systemVersion?: string | null;
    /**
     * Optional. Time zone of VM Cluster to set. Defaults to UTC if not specified.
     */
    timeZone?: Schema$TimeZone;
  }
  /**
   * The CustomerContact reference as defined by Oracle. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/CustomerContact
   */
  export interface Schema$CustomerContact {
    /**
     * Required. The email address used by Oracle to send notifications regarding databases and infrastructure.
     */
    email?: string | null;
  }
  /**
   * The connection string profile to allow clients to group. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/DatabaseConnectionStringProfile
   */
  export interface Schema$DatabaseConnectionStringProfile {
    /**
     * Output only. The current consumer group being used by the connection.
     */
    consumerGroup?: string | null;
    /**
     * Output only. The display name for the database connection.
     */
    displayName?: string | null;
    /**
     * Output only. The host name format being currently used in connection string.
     */
    hostFormat?: string | null;
    /**
     * Output only. This field indicates if the connection string is regional and is only applicable for cross-region Data Guard.
     */
    isRegional?: boolean | null;
    /**
     * Output only. The protocol being used by the connection.
     */
    protocol?: string | null;
    /**
     * Output only. The current session mode of the connection.
     */
    sessionMode?: string | null;
    /**
     * Output only. The syntax of the connection string.
     */
    syntaxFormat?: string | null;
    /**
     * Output only. This field indicates the TLS authentication type of the connection.
     */
    tlsAuthentication?: string | null;
    /**
     * Output only. The value of the connection string.
     */
    value?: string | null;
  }
  /**
   * Data collection options for diagnostics.
   */
  export interface Schema$DataCollectionOptions {
    /**
     * Optional. Indicates whether diagnostic collection is enabled for the VM cluster
     */
    diagnosticsEventsEnabled?: boolean | null;
    /**
     * Optional. Indicates whether health monitoring is enabled for the VM cluster
     */
    healthMonitoringEnabled?: boolean | null;
    /**
     * Optional. Indicates whether incident logs and trace collection are enabled for the VM cluster
     */
    incidentLogsEnabled?: boolean | null;
  }
  /**
   * Details of the database node resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/DbNode/
   */
  export interface Schema$DbNode {
    /**
     * Identifier. The name of the database node resource in the following format: projects/{project\}/locations/{location\}/cloudVmClusters/{cloud_vm_cluster\}/dbNodes/{db_node\}
     */
    name?: string | null;
    /**
     * Optional. Various properties of the database node.
     */
    properties?: Schema$DbNodeProperties;
  }
  /**
   * Various properties and settings associated with Db node.
   */
  export interface Schema$DbNodeProperties {
    /**
     * Optional. Local storage per database node.
     */
    dbNodeStorageSizeGb?: number | null;
    /**
     * Optional. Database server OCID.
     */
    dbServerOcid?: string | null;
    /**
     * Optional. DNS
     */
    hostname?: string | null;
    /**
     * Memory allocated in GBs.
     */
    memorySizeGb?: number | null;
    /**
     * Output only. OCID of database node.
     */
    ocid?: string | null;
    /**
     * Optional. OCPU count per database node.
     */
    ocpuCount?: number | null;
    /**
     * Output only. State of the database node.
     */
    state?: string | null;
    /**
     * Total CPU core count of the database node.
     */
    totalCpuCoreCount?: number | null;
  }
  /**
   * Details of the database server resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/DbServer/
   */
  export interface Schema$DbServer {
    /**
     * Optional. User friendly name for this resource.
     */
    displayName?: string | null;
    /**
     * Identifier. The name of the database server resource with the format: projects/{project\}/locations/{location\}/cloudExadataInfrastructures/{cloud_exadata_infrastructure\}/dbServers/{db_server\}
     */
    name?: string | null;
    /**
     * Optional. Various properties of the database server.
     */
    properties?: Schema$DbServerProperties;
  }
  /**
   * Various properties and settings associated with Exadata database server.
   */
  export interface Schema$DbServerProperties {
    /**
     * Output only. OCID of database nodes associated with the database server.
     */
    dbNodeIds?: string[] | null;
    /**
     * Optional. Local storage per VM.
     */
    dbNodeStorageSizeGb?: number | null;
    /**
     * Optional. Maximum local storage per VM.
     */
    maxDbNodeStorageSizeGb?: number | null;
    /**
     * Optional. Maximum memory allocated in GBs.
     */
    maxMemorySizeGb?: number | null;
    /**
     * Optional. Maximum OCPU count per database.
     */
    maxOcpuCount?: number | null;
    /**
     * Optional. Memory allocated in GBs.
     */
    memorySizeGb?: number | null;
    /**
     * Output only. OCID of database server.
     */
    ocid?: string | null;
    /**
     * Optional. OCPU count per database.
     */
    ocpuCount?: number | null;
    /**
     * Output only. State of the database server.
     */
    state?: string | null;
    /**
     * Optional. Vm count per database.
     */
    vmCount?: number | null;
  }
  /**
   * Details of the Database System Shapes resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/DbSystemShapeSummary/
   */
  export interface Schema$DbSystemShape {
    /**
     * Optional. Number of cores per node.
     */
    availableCoreCountPerNode?: number | null;
    /**
     * Optional. Storage per storage server in terabytes.
     */
    availableDataStorageTb?: number | null;
    /**
     * Optional. Memory per database server node in gigabytes.
     */
    availableMemoryPerNodeGb?: number | null;
    /**
     * Optional. Maximum number of database servers.
     */
    maxNodeCount?: number | null;
    /**
     * Optional. Maximum number of storage servers.
     */
    maxStorageCount?: number | null;
    /**
     * Optional. Minimum core count per node.
     */
    minCoreCountPerNode?: number | null;
    /**
     * Optional. Minimum node storage per database server in gigabytes.
     */
    minDbNodeStoragePerNodeGb?: number | null;
    /**
     * Optional. Minimum memory per node in gigabytes.
     */
    minMemoryPerNodeGb?: number | null;
    /**
     * Optional. Minimum number of database servers.
     */
    minNodeCount?: number | null;
    /**
     * Optional. Minimum number of storage servers.
     */
    minStorageCount?: number | null;
    /**
     * Identifier. The name of the Database System Shape resource with the format: projects/{project\}/locations/{region\}/dbSystemShapes/{db_system_shape\}
     */
    name?: string | null;
    /**
     * Optional. shape
     */
    shape?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Details of the Entitlement resource.
   */
  export interface Schema$Entitlement {
    /**
     * Details of the OCI Cloud Account.
     */
    cloudAccountDetails?: Schema$CloudAccountDetails;
    /**
     * Output only. Google Cloud Marketplace order ID (aka entitlement ID)
     */
    entitlementId?: string | null;
    /**
     * Identifier. The name of the Entitlement resource with the format: projects/{project\}/locations/{region\}/entitlements/{entitlement\}
     */
    name?: string | null;
    /**
     * Output only. Entitlement State.
     */
    state?: string | null;
  }
  /**
   * The request for `AutonomousDatabase.GenerateWallet`.
   */
  export interface Schema$GenerateAutonomousDatabaseWalletRequest {
    /**
     * Optional. True when requesting regional connection strings in PDB connect info, applicable to cross-region Data Guard only.
     */
    isRegional?: boolean | null;
    /**
     * Required. The password used to encrypt the keys inside the wallet. The password must be a minimum of 8 characters.
     */
    password?: string | null;
    /**
     * Optional. The type of wallet generation for the Autonomous Database. The default value is SINGLE.
     */
    type?: string | null;
  }
  /**
   * The response for `AutonomousDatabase.GenerateWallet`.
   */
  export interface Schema$GenerateAutonomousDatabaseWalletResponse {
    /**
     * Output only. The base64 encoded wallet files.
     */
    archiveContent?: string | null;
  }
  /**
   * Details of the Oracle Grid Infrastructure (GI) version resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/GiVersionSummary/
   */
  export interface Schema$GiVersion {
    /**
     * Identifier. The name of the Oracle Grid Infrastructure (GI) version resource with the format: projects/{project\}/locations/{region\}/giVersions/{gi_versions\}
     */
    name?: string | null;
    /**
     * Optional. version
     */
    version?: string | null;
  }
  /**
   * The response for `AutonomousDatabaseBackup.List`.
   */
  export interface Schema$ListAutonomousDatabaseBackupsResponse {
    /**
     * The list of Autonomous Database Backups.
     */
    autonomousDatabaseBackups?: Schema$AutonomousDatabaseBackup[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `AutonomousDatabaseCharacterSet.List`.
   */
  export interface Schema$ListAutonomousDatabaseCharacterSetsResponse {
    /**
     * The list of Autonomous Database Character Sets.
     */
    autonomousDatabaseCharacterSets?: Schema$AutonomousDatabaseCharacterSet[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `AutonomousDatabase.List`.
   */
  export interface Schema$ListAutonomousDatabasesResponse {
    /**
     * The list of Autonomous Databases.
     */
    autonomousDatabases?: Schema$AutonomousDatabase[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `AutonomousDbVersion.List`.
   */
  export interface Schema$ListAutonomousDbVersionsResponse {
    /**
     * The list of Autonomous Database versions.
     */
    autonomousDbVersions?: Schema$AutonomousDbVersion[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `CloudExadataInfrastructures.list`.
   */
  export interface Schema$ListCloudExadataInfrastructuresResponse {
    /**
     * The list of Exadata Infrastructures.
     */
    cloudExadataInfrastructures?: Schema$CloudExadataInfrastructure[];
    /**
     * A token for fetching next page of response.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `CloudVmCluster.List`.
   */
  export interface Schema$ListCloudVmClustersResponse {
    /**
     * The list of VM Clusters.
     */
    cloudVmClusters?: Schema$CloudVmCluster[];
    /**
     * A token to fetch the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `DbNode.List`.
   */
  export interface Schema$ListDbNodesResponse {
    /**
     * The list of DB Nodes
     */
    dbNodes?: Schema$DbNode[];
    /**
     * A token identifying a page of results the node should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `DbServer.List`.
   */
  export interface Schema$ListDbServersResponse {
    /**
     * The list of database servers.
     */
    dbServers?: Schema$DbServer[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `DbSystemShape.List`.
   */
  export interface Schema$ListDbSystemShapesResponse {
    /**
     * The list of Database System shapes.
     */
    dbSystemShapes?: Schema$DbSystemShape[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `Entitlement.List`.
   */
  export interface Schema$ListEntitlementsResponse {
    /**
     * The list of Entitlements
     */
    entitlements?: Schema$Entitlement[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `GiVersion.List`.
   */
  export interface Schema$ListGiVersionsResponse {
    /**
     * The list of Oracle Grid Infrastructure (GI) versions.
     */
    giVersions?: Schema$GiVersion[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * A resource that represents a Google Cloud location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * Metadata for a given Location.
   */
  export interface Schema$LocationMetadata {
    /**
     * Output only. Google Cloud Platform Oracle zones in a location.
     */
    gcpOracleZones?: string[] | null;
  }
  /**
   * Maintenance window as defined by Oracle. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/MaintenanceWindow
   */
  export interface Schema$MaintenanceWindow {
    /**
     * Optional. Determines the amount of time the system will wait before the start of each database server patching operation. Custom action timeout is in minutes and valid value is between 15 to 120 (inclusive).
     */
    customActionTimeoutMins?: number | null;
    /**
     * Optional. Days during the week when maintenance should be performed.
     */
    daysOfWeek?: string[] | null;
    /**
     * Optional. The window of hours during the day when maintenance should be performed. The window is a 4 hour slot. Valid values are: 0 - represents time slot 0:00 - 3:59 UTC 4 - represents time slot 4:00 - 7:59 UTC 8 - represents time slot 8:00 - 11:59 UTC 12 - represents time slot 12:00 - 15:59 UTC 16 - represents time slot 16:00 - 19:59 UTC 20 - represents time slot 20:00 - 23:59 UTC
     */
    hoursOfDay?: number[] | null;
    /**
     * Optional. If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations.
     */
    isCustomActionTimeoutEnabled?: boolean | null;
    /**
     * Optional. Lead time window allows user to set a lead time to prepare for a down time. The lead time is in weeks and valid value is between 1 to 4.
     */
    leadTimeWeek?: number | null;
    /**
     * Optional. Months during the year when maintenance should be performed.
     */
    months?: string[] | null;
    /**
     * Optional. Cloud CloudExadataInfrastructure node patching method, either "ROLLING" or "NONROLLING". Default value is ROLLING.
     */
    patchingMode?: string | null;
    /**
     * Optional. The maintenance window scheduling preference.
     */
    preference?: string | null;
    /**
     * Optional. Weeks during the month when maintenance should be performed. Weeks start on the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7 days. Weeks start and end based on calendar dates, not days of the week.
     */
    weeksOfMonth?: number[] | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. An estimated percentage of the operation that has been completed at a given moment of time, between 0 and 100.
     */
    percentComplete?: number | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. The status of the operation.
     */
    statusMessage?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * The request for `AutonomousDatabase.Restore`.
   */
  export interface Schema$RestoreAutonomousDatabaseRequest {
    /**
     * Required. The time and date to restore the database to.
     */
    restoreTime?: string | null;
  }
  /**
   * Details of scheduled operation. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/ScheduledOperationDetails
   */
  export interface Schema$ScheduledOperationDetails {
    /**
     * Output only. Day of week.
     */
    dayOfWeek?: string | null;
    /**
     * Output only. Auto start time.
     */
    startTime?: Schema$TimeOfDay;
    /**
     * Output only. Auto stop time.
     */
    stopTime?: Schema$TimeOfDay;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of hour of day. Must be from 0 to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
  }
  /**
   * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
   */
  export interface Schema$TimeZone {
    /**
     * IANA Time Zone Database time zone, e.g. "America/New_York".
     */
    id?: string | null;
    /**
     * Optional. IANA Time Zone Database version number, e.g. "2019a".
     */
    version?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    autonomousDatabaseBackups: Resource$Projects$Locations$Autonomousdatabasebackups;
    autonomousDatabaseCharacterSets: Resource$Projects$Locations$Autonomousdatabasecharactersets;
    autonomousDatabases: Resource$Projects$Locations$Autonomousdatabases;
    autonomousDbVersions: Resource$Projects$Locations$Autonomousdbversions;
    cloudExadataInfrastructures: Resource$Projects$Locations$Cloudexadatainfrastructures;
    cloudVmClusters: Resource$Projects$Locations$Cloudvmclusters;
    dbSystemShapes: Resource$Projects$Locations$Dbsystemshapes;
    entitlements: Resource$Projects$Locations$Entitlements;
    giVersions: Resource$Projects$Locations$Giversions;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.autonomousDatabaseBackups =
        new Resource$Projects$Locations$Autonomousdatabasebackups(this.context);
      this.autonomousDatabaseCharacterSets =
        new Resource$Projects$Locations$Autonomousdatabasecharactersets(
          this.context
        );
      this.autonomousDatabases =
        new Resource$Projects$Locations$Autonomousdatabases(this.context);
      this.autonomousDbVersions =
        new Resource$Projects$Locations$Autonomousdbversions(this.context);
      this.cloudExadataInfrastructures =
        new Resource$Projects$Locations$Cloudexadatainfrastructures(
          this.context
        );
      this.cloudVmClusters = new Resource$Projects$Locations$Cloudvmclusters(
        this.context
      );
      this.dbSystemShapes = new Resource$Projects$Locations$Dbsystemshapes(
        this.context
      );
      this.entitlements = new Resource$Projects$Locations$Entitlements(
        this.context
      );
      this.giVersions = new Resource$Projects$Locations$Giversions(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * Gets information about a location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Location> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLocationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Autonomousdatabasebackups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the long-term and automatic backups of an Autonomous Database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabasebackups$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Autonomousdatabasebackups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAutonomousDatabaseBackupsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabasebackups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabasebackups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDatabaseBackupsResponse>,
      callback: BodyResponseCallback<Schema$ListAutonomousDatabaseBackupsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabasebackups$List,
      callback: BodyResponseCallback<Schema$ListAutonomousDatabaseBackupsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAutonomousDatabaseBackupsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabasebackups$List
        | BodyResponseCallback<Schema$ListAutonomousDatabaseBackupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDatabaseBackupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAutonomousDatabaseBackupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAutonomousDatabaseBackupsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdatabasebackups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabasebackups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/autonomousDatabaseBackups').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAutonomousDatabaseBackupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAutonomousDatabaseBackupsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Autonomousdatabasebackups$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request. Only the **autonomous_database_id** field is supported in the following format: `autonomous_database_id="{autonomous_database_id\}"`. The accepted values must be a valid Autonomous Database ID, limited to the naming restrictions of the ID: ^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$). The ID must start with a letter, end with a letter or a number, and be a maximum of 63 characters.
     */
    filter?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Backups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for ListAutonomousDatabaseBackups in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Autonomousdatabasecharactersets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists Autonomous Database Character Sets in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAutonomousDatabaseCharacterSetsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDatabaseCharacterSetsResponse>,
      callback: BodyResponseCallback<Schema$ListAutonomousDatabaseCharacterSetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List,
      callback: BodyResponseCallback<Schema$ListAutonomousDatabaseCharacterSetsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAutonomousDatabaseCharacterSetsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List
        | BodyResponseCallback<Schema$ListAutonomousDatabaseCharacterSetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDatabaseCharacterSetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAutonomousDatabaseCharacterSetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAutonomousDatabaseCharacterSetsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/autonomousDatabaseCharacterSets'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAutonomousDatabaseCharacterSetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAutonomousDatabaseCharacterSetsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request. Only the **character_set_type** field is supported in the following format: `character_set_type="{characterSetType\}"`. Accepted values include `DATABASE` and `NATIONAL`.
     */
    filter?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Character Sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for the Autonomous Database in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Autonomousdatabases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Autonomous Database in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/autonomousDatabases').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single Autonomous Database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Generates a wallet for an Autonomous Database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generateWallet(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generateWallet(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenerateAutonomousDatabaseWalletResponse>;
    generateWallet(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateWallet(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateAutonomousDatabaseWalletResponse>,
      callback: BodyResponseCallback<Schema$GenerateAutonomousDatabaseWalletResponse>
    ): void;
    generateWallet(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet,
      callback: BodyResponseCallback<Schema$GenerateAutonomousDatabaseWalletResponse>
    ): void;
    generateWallet(
      callback: BodyResponseCallback<Schema$GenerateAutonomousDatabaseWalletResponse>
    ): void;
    generateWallet(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet
        | BodyResponseCallback<Schema$GenerateAutonomousDatabaseWalletResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateAutonomousDatabaseWalletResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateAutonomousDatabaseWalletResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GenerateAutonomousDatabaseWalletResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:generateWallet').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenerateAutonomousDatabaseWalletResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateAutonomousDatabaseWalletResponse>(
          parameters
        );
      }
    }

    /**
     * Gets the details of a single Autonomous Database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutonomousDatabase>;
    get(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AutonomousDatabase>,
      callback: BodyResponseCallback<Schema$AutonomousDatabase>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Get,
      callback: BodyResponseCallback<Schema$AutonomousDatabase>
    ): void;
    get(callback: BodyResponseCallback<Schema$AutonomousDatabase>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Get
        | BodyResponseCallback<Schema$AutonomousDatabase>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AutonomousDatabase>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AutonomousDatabase>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AutonomousDatabase>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AutonomousDatabase>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AutonomousDatabase>(parameters);
      }
    }

    /**
     * Lists the Autonomous Databases in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAutonomousDatabasesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDatabasesResponse>,
      callback: BodyResponseCallback<Schema$ListAutonomousDatabasesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$List,
      callback: BodyResponseCallback<Schema$ListAutonomousDatabasesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAutonomousDatabasesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$List
        | BodyResponseCallback<Schema$ListAutonomousDatabasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDatabasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAutonomousDatabasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAutonomousDatabasesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/autonomousDatabases').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAutonomousDatabasesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAutonomousDatabasesResponse>(
          parameters
        );
      }
    }

    /**
     * Restores a single Autonomous Database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    restore(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Restore,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    restore(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Restore,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    restore(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Restore,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restore(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Restore,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restore(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Restore,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restore(callback: BodyResponseCallback<Schema$Operation>): void;
    restore(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Restore
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Restore;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Restore;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:restore').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Create
    extends StandardParameters {
    /**
     * Required. The ID of the Autonomous Database to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     */
    autonomousDatabaseId?: string;
    /**
     * Required. The name of the parent in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AutonomousDatabase;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Delete
    extends StandardParameters {
    /**
     * Required. The name of the resource in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     */
    name?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet
    extends StandardParameters {
    /**
     * Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateAutonomousDatabaseWalletRequest;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Get
    extends StandardParameters {
    /**
     * Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request.
     */
    filter?: string;
    /**
     * Optional. An expression for ordering the results of the request.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous Database will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for the Autonomous Database in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Restore
    extends StandardParameters {
    /**
     * Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RestoreAutonomousDatabaseRequest;
  }

  export class Resource$Projects$Locations$Autonomousdbversions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all the available Autonomous Database versions for a project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Autonomousdbversions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Autonomousdbversions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAutonomousDbVersionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdbversions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdbversions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDbVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListAutonomousDbVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdbversions$List,
      callback: BodyResponseCallback<Schema$ListAutonomousDbVersionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAutonomousDbVersionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdbversions$List
        | BodyResponseCallback<Schema$ListAutonomousDbVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDbVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAutonomousDbVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAutonomousDbVersionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdbversions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdbversions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/autonomousDbVersions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAutonomousDbVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAutonomousDbVersionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Autonomousdbversions$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for the Autonomous Database in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Cloudexadatainfrastructures {
    context: APIRequestContext;
    dbServers: Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dbServers =
        new Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers(
          this.context
        );
    }

    /**
     * Creates a new Exadata Infrastructure in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/cloudExadataInfrastructures'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single Exadata Infrastructure.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single Exadata Infrastructure.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CloudExadataInfrastructure>;
    get(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CloudExadataInfrastructure>,
      callback: BodyResponseCallback<Schema$CloudExadataInfrastructure>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get,
      callback: BodyResponseCallback<Schema$CloudExadataInfrastructure>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$CloudExadataInfrastructure>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get
        | BodyResponseCallback<Schema$CloudExadataInfrastructure>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CloudExadataInfrastructure>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CloudExadataInfrastructure>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CloudExadataInfrastructure>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CloudExadataInfrastructure>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CloudExadataInfrastructure>(parameters);
      }
    }

    /**
     * Lists Exadata Infrastructures in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCloudExadataInfrastructuresResponse>;
    list(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCloudExadataInfrastructuresResponse>,
      callback: BodyResponseCallback<Schema$ListCloudExadataInfrastructuresResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List,
      callback: BodyResponseCallback<Schema$ListCloudExadataInfrastructuresResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCloudExadataInfrastructuresResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List
        | BodyResponseCallback<Schema$ListCloudExadataInfrastructuresResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCloudExadataInfrastructuresResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCloudExadataInfrastructuresResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCloudExadataInfrastructuresResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/cloudExadataInfrastructures'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCloudExadataInfrastructuresResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCloudExadataInfrastructuresResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create
    extends StandardParameters {
    /**
     * Required. The ID of the Exadata Infrastructure to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     */
    cloudExadataInfrastructureId?: string;
    /**
     * Required. The parent value for CloudExadataInfrastructure in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloudExadataInfrastructure;
  }
  export interface Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete
    extends StandardParameters {
    /**
     * Optional. If set to true, all VM clusters for this Exadata Infrastructure will be deleted. An Exadata Infrastructure can only be deleted once all its VM clusters have been deleted.
     */
    force?: boolean;
    /**
     * Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project\}/locations/{location\}/cloudExadataInfrastructures/{cloud_exadata_infrastructure\}.
     */
    name?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get
    extends StandardParameters {
    /**
     * Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project\}/locations/{location\}/cloudExadataInfrastructures/{cloud_exadata_infrastructure\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 Exadata infrastructures will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for CloudExadataInfrastructure in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the database servers of an Exadata Infrastructure instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDbServersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDbServersResponse>,
      callback: BodyResponseCallback<Schema$ListDbServersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List,
      callback: BodyResponseCallback<Schema$ListDbServersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDbServersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List
        | BodyResponseCallback<Schema$ListDbServersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDbServersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDbServersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDbServersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbServers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDbServersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDbServersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return. If unspecified, a maximum of 50 db servers will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for database server in the following format: projects/{project\}/locations/{location\}/cloudExadataInfrastructures/{cloudExadataInfrastructure\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Cloudvmclusters {
    context: APIRequestContext;
    dbNodes: Resource$Projects$Locations$Cloudvmclusters$Dbnodes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dbNodes = new Resource$Projects$Locations$Cloudvmclusters$Dbnodes(
        this.context
      );
    }

    /**
     * Creates a new VM Cluster in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Cloudvmclusters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudvmclusters$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudvmclusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudvmclusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cloudVmClusters').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single VM Cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Cloudvmclusters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudvmclusters$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudvmclusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudvmclusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single VM Cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Cloudvmclusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CloudVmCluster>;
    get(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CloudVmCluster>,
      callback: BodyResponseCallback<Schema$CloudVmCluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Get,
      callback: BodyResponseCallback<Schema$CloudVmCluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$CloudVmCluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudvmclusters$Get
        | BodyResponseCallback<Schema$CloudVmCluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CloudVmCluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CloudVmCluster>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CloudVmCluster> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudvmclusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Cloudvmclusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CloudVmCluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CloudVmCluster>(parameters);
      }
    }

    /**
     * Lists the VM Clusters in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Cloudvmclusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCloudVmClustersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCloudVmClustersResponse>,
      callback: BodyResponseCallback<Schema$ListCloudVmClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$List,
      callback: BodyResponseCallback<Schema$ListCloudVmClustersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCloudVmClustersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudvmclusters$List
        | BodyResponseCallback<Schema$ListCloudVmClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCloudVmClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCloudVmClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCloudVmClustersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudvmclusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Cloudvmclusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cloudVmClusters').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCloudVmClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCloudVmClustersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Cloudvmclusters$Create
    extends StandardParameters {
    /**
     * Required. The ID of the VM Cluster to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     */
    cloudVmClusterId?: string;
    /**
     * Required. The name of the parent in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloudVmCluster;
  }
  export interface Params$Resource$Projects$Locations$Cloudvmclusters$Delete
    extends StandardParameters {
    /**
     * Optional. If set to true, all child resources for the VM Cluster will be deleted. A VM Cluster can only be deleted once all its child resources have been deleted.
     */
    force?: boolean;
    /**
     * Required. The name of the Cloud VM Cluster in the following format: projects/{project\}/locations/{location\}/cloudVmClusters/{cloud_vm_cluster\}.
     */
    name?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Cloudvmclusters$Get
    extends StandardParameters {
    /**
     * Required. The name of the Cloud VM Cluster in the following format: projects/{project\}/locations/{location\}/cloudVmClusters/{cloud_vm_cluster\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Cloudvmclusters$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request.
     */
    filter?: string;
    /**
     * Optional. The number of VM clusters to return. If unspecified, at most 50 VM clusters will be returned. The maximum value is 1,000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying the page of results the server returns.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Cloudvmclusters$Dbnodes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the database nodes of a VM Cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDbNodesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListDbNodesResponse>,
      callback: BodyResponseCallback<Schema$ListDbNodesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List,
      callback: BodyResponseCallback<Schema$ListDbNodesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDbNodesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List
        | BodyResponseCallback<Schema$ListDbNodesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDbNodesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDbNodesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDbNodesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbNodes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDbNodesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDbNodesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 db nodes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the node should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for database node in the following format: projects/{project\}/locations/{location\}/cloudVmClusters/{cloudVmCluster\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Dbsystemshapes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the database system shapes available for the project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Dbsystemshapes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Dbsystemshapes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDbSystemShapesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Dbsystemshapes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbsystemshapes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDbSystemShapesResponse>,
      callback: BodyResponseCallback<Schema$ListDbSystemShapesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbsystemshapes$List,
      callback: BodyResponseCallback<Schema$ListDbSystemShapesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDbSystemShapesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dbsystemshapes$List
        | BodyResponseCallback<Schema$ListDbSystemShapesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDbSystemShapesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDbSystemShapesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDbSystemShapesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dbsystemshapes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dbsystemshapes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbSystemShapes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDbSystemShapesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDbSystemShapesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Dbsystemshapes$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 database system shapes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for Database System Shapes in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Entitlements {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the entitlements in a given project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Entitlements$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Entitlements$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListEntitlementsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Entitlements$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Entitlements$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEntitlementsResponse>,
      callback: BodyResponseCallback<Schema$ListEntitlementsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Entitlements$List,
      callback: BodyResponseCallback<Schema$ListEntitlementsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEntitlementsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entitlements$List
        | BodyResponseCallback<Schema$ListEntitlementsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEntitlementsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEntitlementsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListEntitlementsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entitlements$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entitlements$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/entitlements').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListEntitlementsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEntitlementsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Entitlements$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return. If unspecified, a maximum of 50 entitlements will be returned. The maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for the entitlement in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Giversions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all the valid Oracle Grid Infrastructure (GI) versions for the given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Giversions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Giversions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGiVersionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Giversions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Giversions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGiVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListGiVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Giversions$List,
      callback: BodyResponseCallback<Schema$ListGiVersionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListGiVersionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Giversions$List
        | BodyResponseCallback<Schema$ListGiVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGiVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGiVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListGiVersionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Giversions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Giversions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/giVersions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListGiVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGiVersionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Giversions$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return. If unspecified, a maximum of 50 Oracle Grid Infrastructure (GI) versions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for Grid Infrastructure Version in the following format: Format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }
}

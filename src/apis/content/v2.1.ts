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

export namespace content_v2_1 {
  export interface Options extends GlobalOptions {
    version: 'v2.1';
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
   * Content API for Shopping
   *
   * Manage your product listings and accounts for Google Shopping
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const content = google.content('v2.1');
   * ```
   */
  export class Content {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    accountstatuses: Resource$Accountstatuses;
    accounttax: Resource$Accounttax;
    collections: Resource$Collections;
    collectionstatuses: Resource$Collectionstatuses;
    conversionsources: Resource$Conversionsources;
    csses: Resource$Csses;
    datafeeds: Resource$Datafeeds;
    datafeedstatuses: Resource$Datafeedstatuses;
    freelistingsprogram: Resource$Freelistingsprogram;
    liasettings: Resource$Liasettings;
    localinventory: Resource$Localinventory;
    merchantsupport: Resource$Merchantsupport;
    ordertrackingsignals: Resource$Ordertrackingsignals;
    pos: Resource$Pos;
    productdeliverytime: Resource$Productdeliverytime;
    products: Resource$Products;
    productstatuses: Resource$Productstatuses;
    promotions: Resource$Promotions;
    pubsubnotificationsettings: Resource$Pubsubnotificationsettings;
    quotas: Resource$Quotas;
    recommendations: Resource$Recommendations;
    regionalinventory: Resource$Regionalinventory;
    regions: Resource$Regions;
    reports: Resource$Reports;
    returnaddress: Resource$Returnaddress;
    returnpolicy: Resource$Returnpolicy;
    returnpolicyonline: Resource$Returnpolicyonline;
    settlementreports: Resource$Settlementreports;
    settlementtransactions: Resource$Settlementtransactions;
    shippingsettings: Resource$Shippingsettings;
    shoppingadsprogram: Resource$Shoppingadsprogram;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.accountstatuses = new Resource$Accountstatuses(this.context);
      this.accounttax = new Resource$Accounttax(this.context);
      this.collections = new Resource$Collections(this.context);
      this.collectionstatuses = new Resource$Collectionstatuses(this.context);
      this.conversionsources = new Resource$Conversionsources(this.context);
      this.csses = new Resource$Csses(this.context);
      this.datafeeds = new Resource$Datafeeds(this.context);
      this.datafeedstatuses = new Resource$Datafeedstatuses(this.context);
      this.freelistingsprogram = new Resource$Freelistingsprogram(this.context);
      this.liasettings = new Resource$Liasettings(this.context);
      this.localinventory = new Resource$Localinventory(this.context);
      this.merchantsupport = new Resource$Merchantsupport(this.context);
      this.ordertrackingsignals = new Resource$Ordertrackingsignals(
        this.context
      );
      this.pos = new Resource$Pos(this.context);
      this.productdeliverytime = new Resource$Productdeliverytime(this.context);
      this.products = new Resource$Products(this.context);
      this.productstatuses = new Resource$Productstatuses(this.context);
      this.promotions = new Resource$Promotions(this.context);
      this.pubsubnotificationsettings = new Resource$Pubsubnotificationsettings(
        this.context
      );
      this.quotas = new Resource$Quotas(this.context);
      this.recommendations = new Resource$Recommendations(this.context);
      this.regionalinventory = new Resource$Regionalinventory(this.context);
      this.regions = new Resource$Regions(this.context);
      this.reports = new Resource$Reports(this.context);
      this.returnaddress = new Resource$Returnaddress(this.context);
      this.returnpolicy = new Resource$Returnpolicy(this.context);
      this.returnpolicyonline = new Resource$Returnpolicyonline(this.context);
      this.settlementreports = new Resource$Settlementreports(this.context);
      this.settlementtransactions = new Resource$Settlementtransactions(
        this.context
      );
      this.shippingsettings = new Resource$Shippingsettings(this.context);
      this.shoppingadsprogram = new Resource$Shoppingadsprogram(this.context);
    }
  }

  /**
   * Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
   */
  export interface Schema$Account {
    /**
     * Output only. How the account is managed. Acceptable values are: - "`manual`" - "`automatic`"
     */
    accountManagement?: string | null;
    /**
     * Linked Ads accounts that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected either in the Ads interface or through the Google Ads API. To delete an active link, or to cancel a link request, remove it from the list.
     */
    adsLinks?: Schema$AccountAdsLink[];
    /**
     * Indicates whether the merchant sells adult content.
     */
    adultContent?: boolean | null;
    /**
     * The automatic improvements of the account can be used to automatically update items, improve images and shipping. Each section inside AutomaticImprovements is updated separately.
     */
    automaticImprovements?: Schema$AccountAutomaticImprovements;
    /**
     * Automatically created label IDs that are assigned to the account by CSS Center.
     */
    automaticLabelIds?: string[] | null;
    /**
     * The business identity attributes can be used to self-declare attributes that let customers know more about your business.
     */
    businessIdentity?: Schema$AccountBusinessIdentity;
    /**
     * The business information of the account.
     */
    businessInformation?: Schema$AccountBusinessInformation;
    /**
     * Settings for conversion tracking.
     */
    conversionSettings?: Schema$AccountConversionSettings;
    /**
     * ID of CSS the account belongs to.
     */
    cssId?: string | null;
    /**
     * The Business Profile which is linked or in the process of being linked with the Merchant Center account.
     */
    googleMyBusinessLink?: Schema$AccountGoogleMyBusinessLink;
    /**
     * Required. 64-bit Merchant Center account ID.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#account`".
     */
    kind?: string | null;
    /**
     * Manually created label IDs that are assigned to the account by CSS.
     */
    labelIds?: string[] | null;
    /**
     * Required. Display name for the account.
     */
    name?: string | null;
    /**
     * Client-specific, locally-unique, internal ID for the child account.
     */
    sellerId?: string | null;
    /**
     * Users with access to the account. Every account (except for subaccounts) must have at least one admin user.
     */
    users?: Schema$AccountUser[];
    /**
     * The merchant's website.
     */
    websiteUrl?: string | null;
    /**
     * Linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list.
     */
    youtubeChannelLinks?: Schema$AccountYouTubeChannelLink[];
  }
  export interface Schema$AccountAddress {
    /**
     * CLDR country code (for example, "US"). All MCA sub-accounts inherit the country of their parent MCA by default, however the country can be updated for individual sub-accounts.
     */
    country?: string | null;
    /**
     * City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs).
     */
    locality?: string | null;
    /**
     * Postal code or ZIP (for example, "94043").
     */
    postalCode?: string | null;
    /**
     * Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
     */
    region?: string | null;
    /**
     * Street-level part of the address. Use `\n` to add a second line.
     */
    streetAddress?: string | null;
  }
  export interface Schema$AccountAdsLink {
    /**
     * Customer ID of the Ads account.
     */
    adsId?: string | null;
    /**
     * Status of the link between this Merchant Center account and the Ads account. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in Google Ads or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. Acceptable values are: - "`active`" - "`pending`"
     */
    status?: string | null;
  }
  /**
   * The automatic improvements of the account can be used to automatically update items, improve images and shipping.
   */
  export interface Schema$AccountAutomaticImprovements {
    /**
     * This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973) This field is only updated (cleared) if provided.
     */
    imageImprovements?: Schema$AccountImageImprovements;
    /**
     * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown. This field is only updated (cleared) if provided.
     */
    itemUpdates?: Schema$AccountItemUpdates;
    /**
     * Not available for MCAs [accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: - Delivery address of an order - Current handling time and shipping time settings - Estimated weekdays or business days - Parcel tracking data This field is only updated (cleared) if provided.
     */
    shippingImprovements?: Schema$AccountShippingImprovements;
  }
  /**
   * The [business identity attributes](https://support.google.com/merchants/answer/10342414) can be used to self-declare attributes that let customers know more about your business.
   */
  export interface Schema$AccountBusinessIdentity {
    /**
     * Specifies whether the business identifies itself as being black-owned. This optional field is only available for merchants with a business country set to "US". This field is not allowed for marketplaces or marketplace sellers.
     */
    blackOwned?: Schema$AccountIdentityType;
    /**
     * Required. By setting this field, your business may be included in promotions for all the selected attributes. If you clear this option, it won't affect your identification with any of the attributes. For this field to be set, the merchant must self identify with at least one of the `AccountIdentityType`. If none are included, the request will be considered invalid.
     */
    includeForPromotions?: boolean | null;
    /**
     * Specifies whether the business identifies itself as being latino-owned. This optional field is only available for merchants with a business country set to "US". This field is not allowed for marketplaces or marketplace sellers.
     */
    latinoOwned?: Schema$AccountIdentityType;
    /**
     * Specifies whether the business identifies itself as a small business. This optional field is only available for merchants with a business country set to "US". It is also not allowed for marketplaces, but it is allowed to marketplace sellers.
     */
    smallBusiness?: Schema$AccountIdentityType;
    /**
     * Specifies whether the business identifies itself as being veteran-owned. This optional field is only available for merchants with a business country set to "US". This field is not allowed for marketplaces or marketplace sellers.
     */
    veteranOwned?: Schema$AccountIdentityType;
    /**
     * Specifies whether the business identifies itself as being women-owned. This optional field is only available for merchants with a business country set to "US". This field is not allowed for marketplaces or marketplace sellers.
     */
    womenOwned?: Schema$AccountIdentityType;
  }
  export interface Schema$AccountBusinessInformation {
    /**
     * The address of the business. Use `\n` to add a second address line.
     */
    address?: Schema$AccountAddress;
    /**
     * The customer service information of the business.
     */
    customerService?: Schema$AccountCustomerService;
    /**
     * The 10-digit [Korean business registration number](https://support.google.com/merchants/answer/9037766) separated with dashes in the format: XXX-XX-XXXXX. This field will only be updated if explicitly set.
     */
    koreanBusinessRegistrationNumber?: string | null;
    /**
     * The phone number of the business in [E.164](https://en.wikipedia.org/wiki/E.164) format. This can only be updated if a verified phone number is not already set. To replace a verified phone number use the `Accounts.requestphoneverification` and `Accounts.verifyphonenumber`.
     */
    phoneNumber?: string | null;
    /**
     * Verification status of the phone number of the business. This status is read only and can be updated only by successful phone verification. Acceptable values are: - "`verified`" - "`unverified`"
     */
    phoneVerificationStatus?: string | null;
  }
  /**
   * Settings for conversion tracking.
   */
  export interface Schema$AccountConversionSettings {
    /**
     * When enabled, free listing URLs have a parameter to enable conversion tracking for products owned by the current merchant account. See [auto-tagging](https://support.google.com/merchants/answer/11127659).
     */
    freeListingsAutoTaggingEnabled?: boolean | null;
  }
  /**
   * Credentials allowing Google to call a partner's API on behalf of a merchant.
   */
  export interface Schema$AccountCredentials {
    /**
     * An OAuth access token.
     */
    accessToken?: string | null;
    /**
     * The amount of time, in seconds, after which the access token is no longer valid.
     */
    expiresIn?: string | null;
    /**
     * Indicates to Google how Google should use these OAuth tokens.
     */
    purpose?: string | null;
  }
  export interface Schema$AccountCustomerService {
    /**
     * Customer service email.
     */
    email?: string | null;
    /**
     * Customer service phone number.
     */
    phoneNumber?: string | null;
    /**
     * Customer service URL.
     */
    url?: string | null;
  }
  export interface Schema$AccountGoogleMyBusinessLink {
    /**
     * The ID of the Business Profile. If this is provided, then `gmbEmail` is ignored. The value of this field should match the `accountId` used by the Business Profile API.
     */
    gmbAccountId?: string | null;
    /**
     * The Business Profile email address of a specific account within a Business Profile. A sample account within a Business Profile could be a business account with set of locations, managed under the Business Profile.
     */
    gmbEmail?: string | null;
    /**
     * Status of the link between this Merchant Center account and the Business Profile. Acceptable values are: - "`active`" - "`pending`"
     */
    status?: string | null;
  }
  export interface Schema$AccountIdentifier {
    /**
     * The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount).
     */
    aggregatorId?: string | null;
    /**
     * The merchant account ID, set for individual accounts and subaccounts.
     */
    merchantId?: string | null;
  }
  /**
   * The account identity type used to specify attributes.
   */
  export interface Schema$AccountIdentityType {
    /**
     * Optional. Indicates that the business identifies itself with a given identity type. Setting this field does not automatically mean eligibility for promotions.
     */
    selfIdentified?: boolean | null;
  }
  /**
   * This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)
   */
  export interface Schema$AccountImageImprovements {
    /**
     * Determines how the images should be automatically updated. If this field is not present, then the settings will be deleted. If there are no settings for subaccount, they are inherited from aggregator.
     */
    accountImageImprovementsSettings?: Schema$AccountImageImprovementsSettings;
    /**
     * Output only. The effective value of allow_automatic_image_improvements. If account_image_improvements_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.
     */
    effectiveAllowAutomaticImageImprovements?: boolean | null;
  }
  /**
   * Settings for the Automatic Image Improvements.
   */
  export interface Schema$AccountImageImprovementsSettings {
    /**
     * Enables automatic image improvements.
     */
    allowAutomaticImageImprovements?: boolean | null;
  }
  /**
   * An issue affecting specific merchant.
   */
  export interface Schema$AccountIssue {
    /**
     * A list of actionable steps that can be executed to solve the issue. An example is requesting a re-review or providing arguments when merchant disagrees with the issue. Actions that are supported in (your) third-party application can be rendered as buttons and should be available to merchant when they expand the issue.
     */
    actions?: Schema$Action[];
    /**
     * Clarifies the severity of the issue. The summarizing message, if present, should be shown right under the title for each issue. It helps merchants to quickly understand the impact of the issue. The detailed breakdown helps the merchant to fully understand the impact of the issue. It can be rendered as dialog that opens when the merchant mouse over the summarized impact statement. Issues with different severity can be styled differently. They may use a different color or icon to signal the difference between `ERROR`, `WARNING` and `INFO`.
     */
    impact?: Schema$AccountIssueImpact;
    /**
     * Details of the issue as a pre-rendered HTML. HTML elements contain CSS classes that can be used to customize the style of the content. Always sanitize the HTML before embedding it directly to your application. The sanitizer needs to allow basic HTML tags, such as: `div`, `span`, `p`, `a`, `ul`, `li`, `table`, `tr`, `td`. For example, you can use [DOMPurify](https://www.npmjs.com/package/dompurify). CSS classes: * `issue-detail` - top level container for the detail of the issue * `callout-banners` - section of the `issue-detail` with callout banners * `callout-banner` - single callout banner, inside `callout-banners` * `callout-banner-info` - callout with important information (default) * `callout-banner-warning` - callout with a warning * `callout-banner-error` - callout informing about an error (most severe) * `issue-content` - section of the `issue-detail`, contains multiple `content-element` * `content-element` - content element such as a list, link or paragraph, inside `issue-content` * `root-causes` - unordered list with items describing root causes of the issue, inside `issue-content` * `root-causes-intro` - intro text before the `root-causes` list, inside `issue-content` * `segment` - section of the text, `span` inside paragraph * `segment-attribute` - section of the text that represents a product attribute, for example 'image\_link' * `segment-literal` - section of the text that contains a special value, for example '0-1000 kg' * `segment-bold` - section of the text that should be rendered as bold * `segment-italic` - section of the text that should be rendered as italic * `tooltip` - used on paragraphs that should be rendered with a tooltip. A section of the text in such a paragraph will have a class `tooltip-text` and is intended to be shown in a mouse over dialog. If the style is not used, the `tooltip-text` section would be shown on a new line, after the main part of the text. * `tooltip-text` - marks a section of the text within a `tooltip`, that is intended to be shown in a mouse over dialog. * `tooltip-icon` - marks a section of the text within a `tooltip`, that can be replaced with a tooltip icon, for example '?' or 'i'. By default, this section contains a `br` tag, that is separating the main text and the tooltip text when the style is not used. * `tooltip-style-question` - the tooltip shows helpful information, can use the '?' as an icon. * `tooltip-style-info` - the tooltip adds additional information fitting to the context, can use the 'i' as an icon. * `content-moderation` - marks the paragraph that explains how the issue was identified. * `new-element` - Present for new elements added to the pre-rendered content in the future. To make sure that a new content element does not break your style, you can hide everything with this class.
     */
    prerenderedContent?: string | null;
    /**
     * Title of the issue.
     */
    title?: string | null;
  }
  /**
   * Overall impact of the issue.
   */
  export interface Schema$AccountIssueImpact {
    /**
     * Detailed impact breakdown. Explains the types of restriction the issue has in different shopping destinations and territory. If present, it should be rendered to the merchant. Can be shown as a mouse over dropdown or a dialog. Each breakdown item represents a group of regions with the same impact details.
     */
    breakdowns?: Schema$Breakdown[];
    /**
     * Optional. Message summarizing the overall impact of the issue. If present, it should be rendered to the merchant. For example: "Disapproves 90k offers in 25 countries"
     */
    message?: string | null;
    /**
     * The severity of the issue.
     */
    severity?: string | null;
  }
  /**
   * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
   */
  export interface Schema$AccountItemUpdates {
    /**
     * Determines which attributes of the items should be automatically updated. If this field is not present, then the settings will be deleted. If there are no settings for subaccount, they are inherited from aggregator.
     */
    accountItemUpdatesSettings?: Schema$AccountItemUpdatesSettings;
    /**
     * Output only. The effective value of allow_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.
     */
    effectiveAllowAvailabilityUpdates?: boolean | null;
    /**
     * Output only. The effective value of allow_condition_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.
     */
    effectiveAllowConditionUpdates?: boolean | null;
    /**
     * Output only. The effective value of allow_price_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.
     */
    effectiveAllowPriceUpdates?: boolean | null;
    /**
     * Output only. The effective value of allow_strict_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.
     */
    effectiveAllowStrictAvailabilityUpdates?: boolean | null;
  }
  /**
   * Settings for the Automatic Item Updates.
   */
  export interface Schema$AccountItemUpdatesSettings {
    /**
     * If availability updates are enabled, any previous availability values get overwritten if Google finds an out-of-stock annotation on the offer's page. If additionally `allow_availability_updates` field is set to true, values get overwritten if Google finds an in-stock annotation on the offer’s page.
     */
    allowAvailabilityUpdates?: boolean | null;
    /**
     * If condition updates are enabled, Google always updates item condition with the condition detected from the details of your product.
     */
    allowConditionUpdates?: boolean | null;
    /**
     * If price updates are enabled, Google always updates the active price with the crawled information.
     */
    allowPriceUpdates?: boolean | null;
    /**
     * If allow_availability_updates is enabled, items are automatically updated in all your Shopping target countries. By default, availability updates will only be applied to items that are 'out of stock' on your website but 'in stock' on Shopping. Set this to true to also update items that are 'in stock' on your website, but 'out of stock' on Google Shopping. In order for this field to have an effect, you must also allow availability updates.
     */
    allowStrictAvailabilityUpdates?: boolean | null;
  }
  /**
   * Label assigned by CSS domain or CSS group to one of its sub-accounts.
   */
  export interface Schema$AccountLabel {
    /**
     * Immutable. The ID of account this label belongs to.
     */
    accountId?: string | null;
    /**
     * The description of this label.
     */
    description?: string | null;
    /**
     * Output only. The ID of the label.
     */
    labelId?: string | null;
    /**
     * Output only. The type of this label.
     */
    labelType?: string | null;
    /**
     * The display name of this label.
     */
    name?: string | null;
  }
  /**
   *  The return carrier information. This service is designed for merchants enrolled in the Buy on Google program.
   */
  export interface Schema$AccountReturnCarrier {
    /**
     * Output only. Immutable. The Google-provided unique carrier ID, used to update the resource.
     */
    carrierAccountId?: string | null;
    /**
     * Name of the carrier account.
     */
    carrierAccountName?: string | null;
    /**
     * Number of the carrier account.
     */
    carrierAccountNumber?: string | null;
    /**
     * The carrier code enum. Accepts the values FEDEX or UPS.
     */
    carrierCode?: string | null;
  }
  export interface Schema$AccountsAuthInfoResponse {
    /**
     * The account identifiers corresponding to the authenticated user. - For an individual account: only the merchant ID is defined - For an aggregator: only the aggregator ID is defined - For a subaccount of an MCA: both the merchant ID and the aggregator ID are defined.
     */
    accountIdentifiers?: Schema$AccountIdentifier[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountsAuthInfoResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$AccountsClaimWebsiteResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountsClaimWebsiteResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$AccountsCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$AccountsCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch accounts request.
   */
  export interface Schema$AccountsCustomBatchRequestEntry {
    /**
     * The account to create or update. Only defined if the method is `insert` or `update`.
     */
    account?: Schema$Account;
    /**
     * The ID of the targeted account. Only defined if the method is not `insert`.
     */
    accountId?: string | null;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * Whether the account should be deleted if the account has offers. Only applicable if the method is `delete`.
     */
    force?: boolean | null;
    /**
     * Label IDs for the 'updatelabels' request.
     */
    labelIds?: string[] | null;
    /**
     * Details about the `link` request.
     */
    linkRequest?: Schema$AccountsCustomBatchRequestEntryLinkRequest;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry. Acceptable values are: - "`claimWebsite`" - "`delete`" - "`get`" - "`insert`" - "`link`" - "`update`"
     */
    method?: string | null;
    /**
     * Only applicable if the method is `claimwebsite`. Indicates whether or not to take the claim from another account in case there is a conflict.
     */
    overwrite?: boolean | null;
    /**
     * Controls which fields are visible. Only applicable if the method is 'get'.
     */
    view?: string | null;
  }
  export interface Schema$AccountsCustomBatchRequestEntryLinkRequest {
    /**
     * Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`"
     */
    action?: string | null;
    /**
     * The ID of the linked account.
     */
    linkedAccountId?: string | null;
    /**
     * Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" - "`paymentServiceProvider`" - "`localProductManager`"
     */
    linkType?: string | null;
    /**
     * Provided services. Acceptable values are: - "`shoppingAdsProductManagement`" - "`shoppingActionsProductManagement`" - "`shoppingActionsOrderManagement`" - "`paymentProcessing`" - "`localProductManagement`"
     */
    services?: string[] | null;
  }
  export interface Schema$AccountsCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$AccountsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponse`".
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch accounts response.
   */
  export interface Schema$AccountsCustomBatchResponseEntry {
    /**
     * The retrieved, created, or updated account. Not defined if the method was `delete`, `claimwebsite` or `link`.
     */
    account?: Schema$Account;
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponseEntry`"
     */
    kind?: string | null;
  }
  /**
   * Not available for MCAs [accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data
   */
  export interface Schema$AccountShippingImprovements {
    /**
     * Enables automatic shipping improvements.
     */
    allowShippingImprovements?: boolean | null;
  }
  export interface Schema$AccountsLinkRequest {
    /**
     * Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`"
     */
    action?: string | null;
    /**
     * Additional information required for `eCommercePlatform` link type.
     */
    eCommercePlatformLinkInfo?: Schema$ECommercePlatformLinkInfo;
    /**
     * The ID of the linked account.
     */
    linkedAccountId?: string | null;
    /**
     * Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" - "`paymentServiceProvider`"
     */
    linkType?: string | null;
    /**
     * Additional information required for `paymentServiceProvider` link type.
     */
    paymentServiceProviderLinkInfo?: Schema$PaymentServiceProviderLinkInfo;
    /**
     *  Acceptable values are: - "`shoppingAdsProductManagement`" - "`shoppingActionsProductManagement`" - "`shoppingActionsOrderManagement`" - "`paymentProcessing`"
     */
    services?: string[] | null;
  }
  export interface Schema$AccountsLinkResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountsLinkResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$AccountsListLinksResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountsListLinksResponse`".
     */
    kind?: string | null;
    /**
     * The list of available links.
     */
    links?: Schema$LinkedAccount[];
    /**
     * The token for the retrieval of the next page of links.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$AccountsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountsListResponse`".
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of accounts.
     */
    nextPageToken?: string | null;
    resources?: Schema$Account[];
  }
  /**
   * The status of an account, that is, information about its products, which is computed offline and not returned immediately at insertion time.
   */
  export interface Schema$AccountStatus {
    /**
     * The ID of the account for which the status is reported.
     */
    accountId?: string | null;
    /**
     * A list of account level issues.
     */
    accountLevelIssues?: Schema$AccountStatusAccountLevelIssue[];
    /**
     * How the account is managed. Acceptable values are: - "`manual`" - "`automatic`"
     */
    accountManagement?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountStatus`"
     */
    kind?: string | null;
    /**
     * List of product-related data by channel, destination, and country. Data in this field may be delayed by up to 30 minutes.
     */
    products?: Schema$AccountStatusProducts[];
    /**
     * Whether the account's website is claimed or not.
     */
    websiteClaimed?: boolean | null;
  }
  export interface Schema$AccountStatusAccountLevelIssue {
    /**
     * Country for which this issue is reported.
     */
    country?: string | null;
    /**
     * The destination the issue applies to. If this field is empty then the issue applies to all available destinations.
     */
    destination?: string | null;
    /**
     * Additional details about the issue.
     */
    detail?: string | null;
    /**
     * The URL of a web page to help resolving this issue.
     */
    documentation?: string | null;
    /**
     * Issue identifier.
     */
    id?: string | null;
    /**
     * Severity of the issue. Acceptable values are: - "`critical`" - "`error`" - "`suggestion`"
     */
    severity?: string | null;
    /**
     * Short description of the issue.
     */
    title?: string | null;
  }
  export interface Schema$AccountstatusesCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$AccountstatusesCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch accountstatuses request.
   */
  export interface Schema$AccountstatusesCustomBatchRequestEntry {
    /**
     * The ID of the (sub-)account whose status to get.
     */
    accountId?: string | null;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     */
    destinations?: string[] | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry. Acceptable values are: - "`get`"
     */
    method?: string | null;
  }
  export interface Schema$AccountstatusesCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$AccountstatusesCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountstatusesCustomBatchResponse`".
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch accountstatuses response.
   */
  export interface Schema$AccountstatusesCustomBatchResponseEntry {
    /**
     * The requested account status. Defined if and only if the request was successful.
     */
    accountStatus?: Schema$AccountStatus;
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.
     */
    errors?: Schema$Errors;
  }
  export interface Schema$AccountstatusesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountstatusesListResponse`".
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of account statuses.
     */
    nextPageToken?: string | null;
    resources?: Schema$AccountStatus[];
  }
  export interface Schema$AccountStatusItemLevelIssue {
    /**
     * The attribute's name, if the issue is caused by a single attribute.
     */
    attributeName?: string | null;
    /**
     * The error code of the issue.
     */
    code?: string | null;
    /**
     * A short issue description in English.
     */
    description?: string | null;
    /**
     * A detailed issue description in English.
     */
    detail?: string | null;
    /**
     * The URL of a web page to help with resolving this issue.
     */
    documentation?: string | null;
    /**
     * Number of items with this issue.
     */
    numItems?: string | null;
    /**
     * Whether the issue can be resolved by the merchant.
     */
    resolution?: string | null;
    /**
     * How this issue affects serving of the offer.
     */
    servability?: string | null;
  }
  export interface Schema$AccountStatusProducts {
    /**
     * The channel the data applies to. Acceptable values are: - "`local`" - "`online`"
     */
    channel?: string | null;
    /**
     * The country the data applies to.
     */
    country?: string | null;
    /**
     * The destination the data applies to.
     */
    destination?: string | null;
    /**
     * List of item-level issues.
     */
    itemLevelIssues?: Schema$AccountStatusItemLevelIssue[];
    /**
     * Aggregated product statistics.
     */
    statistics?: Schema$AccountStatusStatistics;
  }
  export interface Schema$AccountStatusStatistics {
    /**
     * Number of active offers.
     */
    active?: string | null;
    /**
     * Number of disapproved offers.
     */
    disapproved?: string | null;
    /**
     * Number of expiring offers.
     */
    expiring?: string | null;
    /**
     * Number of pending offers.
     */
    pending?: string | null;
  }
  export interface Schema$AccountsUpdateLabelsRequest {
    /**
     * The IDs of labels that should be assigned to the account.
     */
    labelIds?: string[] | null;
  }
  export interface Schema$AccountsUpdateLabelsResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountsUpdateLabelsResponse`".
     */
    kind?: string | null;
  }
  /**
   * The tax settings of a merchant account. All methods require the admin role.
   */
  export interface Schema$AccountTax {
    /**
     * Required. The ID of the account to which these account tax settings belong.
     */
    accountId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountTax`".
     */
    kind?: string | null;
    /**
     * Tax rules. Updating the tax rules will enable "US" taxes (not reversible). Defining no rules is equivalent to not charging tax at all.
     */
    rules?: Schema$AccountTaxTaxRule[];
  }
  export interface Schema$AccounttaxCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$AccounttaxCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch accounttax request.
   */
  export interface Schema$AccounttaxCustomBatchRequestEntry {
    /**
     * The ID of the account for which to get/update account tax settings.
     */
    accountId?: string | null;
    /**
     * The account tax settings to update. Only defined if the method is `update`.
     */
    accountTax?: Schema$AccountTax;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry. Acceptable values are: - "`get`" - "`update`"
     */
    method?: string | null;
  }
  export interface Schema$AccounttaxCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$AccounttaxCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxCustomBatchResponse`".
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch accounttax response.
   */
  export interface Schema$AccounttaxCustomBatchResponseEntry {
    /**
     * The retrieved or updated account tax settings.
     */
    accountTax?: Schema$AccountTax;
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxCustomBatchResponseEntry`"
     */
    kind?: string | null;
  }
  export interface Schema$AccounttaxListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxListResponse`".
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of account tax settings.
     */
    nextPageToken?: string | null;
    resources?: Schema$AccountTax[];
  }
  /**
   * Tax calculation rule to apply in a state or province (US only).
   */
  export interface Schema$AccountTaxTaxRule {
    /**
     * Country code in which tax is applicable.
     */
    country?: string | null;
    /**
     * Required. State (or province) is which the tax is applicable, described by its location ID (also called criteria ID).
     */
    locationId?: string | null;
    /**
     * Explicit tax rate in percent, represented as a floating point number without the percentage character. Must not be negative.
     */
    ratePercent?: string | null;
    /**
     * If true, shipping charges are also taxed.
     */
    shippingTaxed?: boolean | null;
    /**
     * Whether the tax rate is taken from a global tax table or specified explicitly.
     */
    useGlobalRate?: boolean | null;
  }
  export interface Schema$AccountUser {
    /**
     * Whether user is an admin.
     */
    admin?: boolean | null;
    /**
     * User's email address.
     */
    emailAddress?: string | null;
    /**
     * Whether user is an order manager.
     */
    orderManager?: boolean | null;
    /**
     * Whether user can access payment statements.
     */
    paymentsAnalyst?: boolean | null;
    /**
     * Whether user can manage payment settings.
     */
    paymentsManager?: boolean | null;
    /**
     * Whether user is a reporting manager. This role is equivalent to the Performance and insights role in Merchant Center.
     */
    reportingManager?: boolean | null;
  }
  export interface Schema$AccountYouTubeChannelLink {
    /**
     * Channel ID.
     */
    channelId?: string | null;
    /**
     * Status of the link between this Merchant Center account and the YouTube channel. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in YT Creator Studio or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending.
     */
    status?: string | null;
  }
  /**
   * An actionable step that can be executed to solve the issue.
   */
  export interface Schema$Action {
    /**
     * Action implemented and performed in (your) third-party application. The application should point the merchant to the place, where they can access the corresponding functionality or provide instructions, if the specific functionality is not available.
     */
    builtinSimpleAction?: Schema$BuiltInSimpleAction;
    /**
     * Action implemented and performed in (your) third-party application. The application needs to show an additional content and input form to the merchant as specified for given action. They can trigger the action only when they provided all required inputs.
     */
    builtinUserInputAction?: Schema$BuiltInUserInputAction;
    /**
     * Label of the action button.
     */
    buttonLabel?: string | null;
    /**
     * Action that is implemented and performed outside of (your) third-party application. The application needs to redirect the merchant to the external location where they can perform the action.
     */
    externalAction?: Schema$ExternalAction;
    /**
     * Controlling whether the button is active or disabled. The value is 'false' when the action was already requested or is not available. If the action is not available then a reason will be present. If (your) third-party application shows a disabled button for action that is not available, then it should also show reasons.
     */
    isAvailable?: boolean | null;
    /**
     * List of reasons why the action is not available. The list of reasons is empty if the action is available. If there is only one reason, it can be displayed next to the disabled button. If there are more reasons, all of them should be displayed, for example in a pop-up dialog.
     */
    reasons?: Schema$ActionReason[];
  }
  /**
   * Flow that can be selected for an action. When merchant selects a flow, application should open a dialog with more information and input form.
   */
  export interface Schema$ActionFlow {
    /**
     * Label for the button to trigger the action from the action dialog. For example: "Request review"
     */
    dialogButtonLabel?: string | null;
    /**
     * Important message to be highlighted in the request dialog. For example: "You can only request a review for disagreeing with this issue once. If it's not approved, you'll need to fix the issue and wait a few days before you can request another review."
     */
    dialogCallout?: Schema$Callout;
    /**
     * Message displayed in the request dialog. For example: "Make sure you've fixed all your country-specific issues. If not, you may have to wait 7 days to request another review". There may be an more information to be shown in a tooltip.
     */
    dialogMessage?: Schema$TextWithTooltip;
    /**
     * Title of the request dialog. For example: "Before you request a review"
     */
    dialogTitle?: string | null;
    /**
     * Not for display but need to be sent back for the selected action flow.
     */
    id?: string | null;
    /**
     * A list of input fields.
     */
    inputs?: Schema$InputField[];
    /**
     * Text value describing the intent for the action flow. It can be used as an input label if merchant needs to pick one of multiple flows. For example: "I disagree with the issue"
     */
    label?: string | null;
  }
  /**
   * Input provided by the merchant.
   */
  export interface Schema$ActionInput {
    /**
     * Required. Id of the selected action flow.
     */
    actionFlowId?: string | null;
    /**
     * Required. Values for input fields.
     */
    inputValues?: Schema$InputValue[];
  }
  /**
   * A single reason why the action is not available.
   */
  export interface Schema$ActionReason {
    /**
     * Optional. An action that needs to be performed to solve the problem represented by this reason. This action will always be available. Should be rendered as a link or button next to the summarizing message. For example, the review may be available only once merchant configure all required attributes. In such a situation this action can be a link to the form, where they can fill the missing attribute to unblock the main action.
     */
    action?: Schema$Action;
    /**
     * Detailed explanation of the reason. Should be displayed as a hint if present.
     */
    detail?: string | null;
    /**
     * Messages summarizing the reason, why the action is not available. For example: "Review requested on Jan 03. Review requests can take a few days to complete."
     */
    message?: string | null;
  }
  export interface Schema$Address {
    /**
     * Required. Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
     */
    administrativeArea?: string | null;
    /**
     * Required. City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs).
     */
    city?: string | null;
    /**
     * Required. [CLDR country code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml) (for example, "US").
     */
    country?: string | null;
    /**
     * Required. Postal code or ZIP (for example, "94043").
     */
    postalCode?: string | null;
    /**
     * Street-level part of the address. Use `\n` to add a second line.
     */
    streetAddress?: string | null;
  }
  /**
   * The Alternate Dispute Resolution (ADR) that may be available to merchants in some regions. If present, the link should be shown on the same page as the list of issues.
   */
  export interface Schema$AlternateDisputeResolution {
    /**
     * The label for the alternate dispute resolution link.
     */
    label?: string | null;
    /**
     * The URL pointing to a page, where merchant can request alternative dispute resolution with an [external body](https://support.google.com/european-union-digital-services-act-redress-options/answer/13535501).
     */
    uri?: string | null;
  }
  /**
   * Represents attribution settings for conversion sources receiving pre-attribution data.
   */
  export interface Schema$AttributionSettings {
    /**
     * Required. Lookback windows (in days) used for attribution in this source. Supported values are 7, 30, 40.
     */
    attributionLookbackWindowInDays?: number | null;
    /**
     * Required. Attribution model.
     */
    attributionModel?: string | null;
    /**
     * Immutable. Unordered list. List of different conversion types a conversion event can be classified as. A standard "purchase" type will be automatically created if this list is empty at creation time.
     */
    conversionType?: Schema$AttributionSettingsConversionType[];
  }
  /**
   * Message representing a types of conversion events
   */
  export interface Schema$AttributionSettingsConversionType {
    /**
     * Output only. Option indicating if the type should be included in Merchant Center reporting.
     */
    includeInReporting?: boolean | null;
    /**
     * Output only. Conversion event name, as it'll be reported by the client.
     */
    name?: string | null;
  }
  /**
   * Fields related to the [Best sellers reports](https://support.google.com/merchants/answer/9488679).
   */
  export interface Schema$BestSellers {
    /**
     * Google product category ID to calculate the ranking for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). If a `WHERE` condition on `best_sellers.category_id` is not specified in the query, rankings for all top-level categories are returned.
     */
    categoryId?: string | null;
    /**
     * Country where the ranking is calculated. A `WHERE` condition on `best_sellers.country_code` is required in the query.
     */
    countryCode?: string | null;
    /**
     * Popularity rank in the previous week or month.
     */
    previousRank?: string | null;
    /**
     * Estimated demand in relation to the item with the highest popularity rank in the same category and country in the previous week or month.
     */
    previousRelativeDemand?: string | null;
    /**
     * Popularity on Shopping ads and free listings, in the selected category and country, based on the estimated number of units sold.
     */
    rank?: string | null;
    /**
     * Estimated demand in relation to the item with the highest popularity rank in the same category and country.
     */
    relativeDemand?: string | null;
    /**
     * Change in the estimated demand. Whether it rose, sank or remained flat.
     */
    relativeDemandChange?: string | null;
    /**
     * Report date. The value of this field can only be one of the following: * The first day of the week (Monday) for weekly reports. * The first day of the month for monthly reports. If a `WHERE` condition on `best_sellers.report_date` is not specified in the query, the latest available weekly or monthly report is returned.
     */
    reportDate?: Schema$Date;
    /**
     * Granularity of the report. The ranking can be done over a week or a month timeframe. A `WHERE` condition on `best_sellers.report_granularity` is required in the query.
     */
    reportGranularity?: string | null;
  }
  /**
   * Brand fields. Values are only set for fields requested explicitly in the request's search query.
   */
  export interface Schema$Brand {
    /**
     * Name of the brand.
     */
    name?: string | null;
  }
  /**
   * A detailed impact breakdown for a group of regions where the impact of the issue on different shopping destinations is the same.
   */
  export interface Schema$Breakdown {
    /**
     * Human readable, localized description of issue's effect on different targets. Should be rendered as a list. For example: * "Products not showing in ads" * "Products not showing organically"
     */
    details?: string[] | null;
    /**
     * Lists of regions. Should be rendered as a title for this group of details. The full list should be shown to merchant. If the list is too long, it is recommended to make it expandable.
     */
    regions?: Schema$BreakdownRegion[];
  }
  /**
   * Region with code and localized name.
   */
  export interface Schema$BreakdownRegion {
    /**
     * The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml)
     */
    code?: string | null;
    /**
     * The localized name of the region. For region with code='001' the value is 'All countries' or the equivalent in other languages.
     */
    name?: string | null;
  }
  /**
   * Action that is implemented and performed in (your) third-party application. Represents various functionality that is expected to be available to merchant and will help them with resolving the issue. The application should point the merchant to the place, where they can access the corresponding functionality. If the functionality is not supported, it is recommended to explain the situation to merchant and provide them with instructions how to solve the issue.
   */
  export interface Schema$BuiltInSimpleAction {
    /**
     * Long text from an external source that should be available to the merchant. Present when the type is `SHOW_ADDITIONAL_CONTENT`.
     */
    additionalContent?: Schema$BuiltInSimpleActionAdditionalContent;
    /**
     * The attribute that needs to be updated. Present when the type is `EDIT_ITEM_ATTRIBUTE`. This field contains a code for attribute, represented in snake_case. You can find a list of product's attributes, with their codes [here](https://support.google.com/merchants/answer/7052112).
     */
    attributeCode?: string | null;
    /**
     * The type of action that represents a functionality that is expected to be available in third-party application.
     */
    type?: string | null;
  }
  /**
   * Long text from external source.
   */
  export interface Schema$BuiltInSimpleActionAdditionalContent {
    /**
     * Long text organized into paragraphs.
     */
    paragraphs?: string[] | null;
    /**
     * Title of the additional content;
     */
    title?: string | null;
  }
  /**
   * Action that is implemented and performed in (your) third-party application. The application needs to show an additional content and input form to the merchant. They can start the action only when they provided all required inputs. The application will request processing of the action by calling the [triggeraction method](https://developers.google.com/shopping-content/reference/rest/v2.1/merchantsupport/triggeraction).
   */
  export interface Schema$BuiltInUserInputAction {
    /**
     * Internal details. Not for display but need to be sent back when triggering the action.
     */
    actionContext?: string | null;
    /**
     * Actions may provide multiple different flows. Merchant selects one that fits best to their intent. Selecting the flow is the first step in user's interaction with the action. It affects what input fields will be available and required and also how the request will be processed.
     */
    flows?: Schema$ActionFlow[];
  }
  export interface Schema$BusinessDayConfig {
    /**
     * Regular business days, such as '"monday"'. May not be empty.
     */
    businessDays?: string[] | null;
  }
  /**
   * An important message that should be highlighted. Usually displayed as a banner.
   */
  export interface Schema$Callout {
    /**
     * A full message that needs to be shown to the merchant.
     */
    fullMessage?: Schema$TextWithTooltip;
    /**
     * Can be used to render messages with different severity in different styles. Snippets off all types contain important information that should be displayed to merchants.
     */
    styleHint?: string | null;
  }
  export interface Schema$CarrierRate {
    /**
     * Carrier service, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved through the `getSupportedCarriers` method. Required.
     */
    carrierName?: string | null;
    /**
     * Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved through the `getSupportedCarriers` method. Required.
     */
    carrierService?: string | null;
    /**
     * Additive shipping rate modifier. Can be negative. For example `{ "value": "1", "currency" : "USD" \}` adds $1 to the rate, `{ "value": "-3", "currency" : "USD" \}` removes $3 from the rate. Optional.
     */
    flatAdjustment?: Schema$Price;
    /**
     * Name of the carrier rate. Must be unique per rate group. Required.
     */
    name?: string | null;
    /**
     * Shipping origin for this carrier rate. Required.
     */
    originPostalCode?: string | null;
    /**
     * Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example `"5.4"` increases the rate by 5.4%, `"-3"` decreases the rate by 3%. Optional.
     */
    percentageAdjustment?: string | null;
  }
  export interface Schema$CarriersCarrier {
    /**
     * The CLDR country code of the carrier (for example, "US"). Always present.
     */
    country?: string | null;
    /**
     * A list of services supported for EDD (Estimated Delivery Date) calculation. This is the list of valid values for WarehouseBasedDeliveryTime.carrierService.
     */
    eddServices?: string[] | null;
    /**
     * The name of the carrier (for example, `"UPS"`). Always present.
     */
    name?: string | null;
    /**
     * A list of supported services (for example, `"ground"`) for that carrier. Contains at least one service. This is the list of valid values for CarrierRate.carrierService.
     */
    services?: string[] | null;
  }
  /**
   * `CheckoutSettings` for a specific merchant ID.
   */
  export interface Schema$CheckoutSettings {
    /**
     * Output only. The effective value of enrollment state for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account.
     */
    effectiveEnrollmentState?: string | null;
    /**
     * Output only. The effective value of review state for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account.
     */
    effectiveReviewState?: string | null;
    /**
     * The effective value of `url_settings` for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account.
     */
    effectiveUriSettings?: Schema$UrlSettings;
    /**
     * Output only. Reflects the merchant enrollment state in `Checkout` feature.
     */
    enrollmentState?: string | null;
    /**
     * Required. The ID of the account.
     */
    merchantId?: string | null;
    /**
     * Output only. Reflects the merchant review state in `Checkout` feature. This is set based on the data quality reviews of the URL provided by the merchant. A merchant with enrollment state as `ENROLLED` can be in the following review states: `IN_REVIEW`, `APPROVED` or `DISAPPROVED`. A merchant must be in an enrollment_state of `ENROLLED` before a review can begin for the merchant.
     */
    reviewState?: string | null;
    /**
     * URL settings for cart or checkout URL.
     */
    uriSettings?: Schema$UrlSettings;
  }
  /**
   * Product property for the Cloud Retail API. For example, properties for a TV product could be "Screen-Resolution" or "Screen-Size".
   */
  export interface Schema$CloudExportAdditionalProperties {
    /**
     * Boolean value of the given property. For example for a TV product, "True" or "False" if the screen is UHD.
     */
    boolValue?: boolean | null;
    /**
     * Float values of the given property. For example for a TV product 1.2345. Maximum number of specified values for this field is 400. Values are stored in an arbitrary but consistent order.
     */
    floatValue?: number[] | null;
    /**
     * Integer values of the given property. For example, 1080 for a screen resolution of a TV product. Maximum number of specified values for this field is 400. Values are stored in an arbitrary but consistent order.
     */
    intValue?: string[] | null;
    /**
     * Maximum float value of the given property. For example for a TV product 100.00.
     */
    maxValue?: number | null;
    /**
     * Minimum float value of the given property. For example for a TV product 1.00.
     */
    minValue?: number | null;
    /**
     * Name of the given property. For example, "Screen-Resolution" for a TV product. Maximum string size is 256 characters.
     */
    propertyName?: string | null;
    /**
     * Text value of the given property. For example, "8K(UHD)" could be a text value for a TV product. Maximum number of specified values for this field is 400. Values are stored in an arbitrary but consistent order. Maximum string size is 256 characters.
     */
    textValue?: string[] | null;
    /**
     * Unit of the given property. For example, "Pixels" for a TV product. Maximum string size is 256 bytes.
     */
    unitCode?: string | null;
  }
  /**
   * The collection message.
   */
  export interface Schema$Collection {
    /**
     * Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. [Custom label](https://support.google.com/merchants/answer/9674217)
     */
    customLabel0?: string | null;
    /**
     * Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns.
     */
    customLabel1?: string | null;
    /**
     * Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns.
     */
    customLabel2?: string | null;
    /**
     * Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns.
     */
    customLabel3?: string | null;
    /**
     * Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns.
     */
    customLabel4?: string | null;
    /**
     * This identifies one or more products associated with the collection. Used as a lookup to the corresponding product ID in your product feeds. Provide a maximum of 100 featuredProduct (for collections). Provide up to 10 featuredProduct (for Shoppable Images only) with ID and X and Y coordinates. [featured_product attribute](https://support.google.com/merchants/answer/9703736)
     */
    featuredProduct?: Schema$CollectionFeaturedProduct[];
    /**
     * Your collection's name. [headline attribute](https://support.google.com/merchants/answer/9673580)
     */
    headline?: string[] | null;
    /**
     * Required. The REST ID of the collection. Content API methods that operate on collections take this as their collectionId parameter. The REST ID for a collection is of the form collectionId. [id attribute](https://support.google.com/merchants/answer/9649290)
     */
    id?: string | null;
    /**
     * The URL of a collection’s image. [image_link attribute](https://support.google.com/merchants/answer/9703236)
     */
    imageLink?: string[] | null;
    /**
     * The language of a collection and the language of any featured products linked to the collection. [language attribute](https://support.google.com/merchants/answer/9673781)
     */
    language?: string | null;
    /**
     * A collection’s landing page. URL directly linking to your collection's page on your website. [link attribute](https://support.google.com/merchants/answer/9673983)
     */
    link?: string | null;
    /**
     * A collection’s mobile-optimized landing page when you have a different URL for mobile and desktop traffic. [mobile_link attribute](https://support.google.com/merchants/answer/9646123)
     */
    mobileLink?: string | null;
    /**
     * [product_country attribute](https://support.google.com/merchants/answer/9674155)
     */
    productCountry?: string | null;
  }
  /**
   * The message for FeaturedProduct. [FeaturedProduct](https://support.google.com/merchants/answer/9703736)
   */
  export interface Schema$CollectionFeaturedProduct {
    /**
     * The unique identifier for the product item.
     */
    offerId?: string | null;
    /**
     * Required. X-coordinate of the product callout on the Shoppable Image.
     */
    x?: number | null;
    /**
     * Required. Y-coordinate of the product callout on the Shoppable Image.
     */
    y?: number | null;
  }
  /**
   * The collectionstatus message.
   */
  export interface Schema$CollectionStatus {
    /**
     * A list of all issues associated with the collection.
     */
    collectionLevelIssuses?: Schema$CollectionStatusItemLevelIssue[];
    /**
     * Date on which the collection has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z"
     */
    creationDate?: string | null;
    /**
     * The intended destinations for the collection.
     */
    destinationStatuses?: Schema$CollectionStatusDestinationStatus[];
    /**
     * Required. The ID of the collection for which status is reported.
     */
    id?: string | null;
    /**
     * Date on which the collection has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z"
     */
    lastUpdateDate?: string | null;
  }
  /**
   * Destination status message.
   */
  export interface Schema$CollectionStatusDestinationStatus {
    /**
     * Country codes (ISO 3166-1 alpha-2) where the collection is approved.
     */
    approvedCountries?: string[] | null;
    /**
     * The name of the destination
     */
    destination?: string | null;
    /**
     * Country codes (ISO 3166-1 alpha-2) where the collection is disapproved.
     */
    disapprovedCountries?: string[] | null;
    /**
     * Country codes (ISO 3166-1 alpha-2) where the collection is pending approval.
     */
    pendingCountries?: string[] | null;
    /**
     * The status for the specified destination in the collections target country.
     */
    status?: string | null;
  }
  /**
   * Issue associated with the collection.
   */
  export interface Schema$CollectionStatusItemLevelIssue {
    /**
     * Country codes (ISO 3166-1 alpha-2) where issue applies to the offer.
     */
    applicableCountries?: string[] | null;
    /**
     * The attribute's name, if the issue is caused by a single attribute.
     */
    attributeName?: string | null;
    /**
     * The error code of the issue.
     */
    code?: string | null;
    /**
     * A short issue description in English.
     */
    description?: string | null;
    /**
     * The destination the issue applies to.
     */
    destination?: string | null;
    /**
     * A detailed issue description in English.
     */
    detail?: string | null;
    /**
     * The URL of a web page to help with resolving this issue.
     */
    documentation?: string | null;
    /**
     * Whether the issue can be resolved by the merchant.
     */
    resolution?: string | null;
    /**
     * How this issue affects the serving of the collection.
     */
    servability?: string | null;
  }
  /**
   * Fields related to [competitive visibility reports] (https://support.google.com/merchants/answer/11366442).
   */
  export interface Schema$CompetitiveVisibility {
    /**
     * [Ads / organic ratio] (https://support.google.com/merchants/answer/11366442#zippy=%2Cadsfree-ratio) shows how often a merchant receives impressions from Shopping ads compared to organic traffic. The number is rounded and bucketed. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause.
     */
    adsOrganicRatio?: number | null;
    /**
     * Change in visibility based on impressions with respect to the start of the selected time range (or first day with non-zero impressions) for a combined set of merchants with highest visibility approximating the market. Available only in `CompetitiveVisibilityBenchmarkView`. Cannot be filtered on in the 'WHERE' clause.
     */
    categoryBenchmarkVisibilityTrend?: number | null;
    /**
     * Google product category ID to calculate the report for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the `SELECT` clause. A `WHERE` condition on `competitive_visibility.category_id` is required in the query.
     */
    categoryId?: string | null;
    /**
     * The country where impression appeared. Required in the `SELECT` clause. A `WHERE` condition on `competitive_visibility.country_code` is required in the query.
     */
    countryCode?: string | null;
    /**
     * Date of this row. Available only in `CompetitiveVisibilityBenchmarkView` and `CompetitiveVisibilityCompetitorView`. Required in the `SELECT` clause for `CompetitiveVisibilityMarketBenchmarkView`.
     */
    date?: Schema$Date;
    /**
     * Domain of your competitor or your domain, if 'is_your_domain' is true. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Required in the `SELECT` clause for `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause.
     */
    domain?: string | null;
    /**
     * Higher position rate shows how often a competitor’s offer got placed in a higher position on the page than your offer. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause.
     */
    higherPositionRate?: number | null;
    /**
     * True if this row contains data for your domain. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause.
     */
    isYourDomain?: boolean | null;
    /**
     * Page overlap rate describes how frequently competing retailers’ offers are shown together with your offers on the same page. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause.
     */
    pageOverlapRate?: number | null;
    /**
     * Position of the domain in the top merchants ranking for the selected keys (`date`, `category_id`, `country_code`, `listing_type`) based on impressions. 1 is the highest. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause.
     */
    rank?: string | null;
    /**
     * Relative visibility shows how often your competitors’ offers are shown compared to your offers. In other words, this is the number of displayed impressions of a competitor retailer divided by the number of your displayed impressions during a selected time range for a selected product category and country. Available only in `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause.
     */
    relativeVisibility?: number | null;
    /**
     * Type of impression listing. Required in the `SELECT` clause. Cannot be filtered on in the 'WHERE' clause.
     */
    trafficSource?: string | null;
    /**
     * Change in visibility based on impressions for your domain with respect to the start of the selected time range (or first day with non-zero impressions). Available only in `CompetitiveVisibilityBenchmarkView`. Cannot be filtered on in the 'WHERE' clause.
     */
    yourDomainVisibilityTrend?: number | null;
  }
  /**
   * Represents a conversion source owned by a Merchant account. A merchant account can have up to 200 conversion sources.
   */
  export interface Schema$ConversionSource {
    /**
     * Output only. Generated by the Content API upon creation of a new `ConversionSource`. Format: [a-z]{4\}:.+ The four characters before the colon represent the type of conversio source. Content after the colon represents the ID of the conversion source within that type. The ID of two different conversion sources might be the same across different types. The following type prefixes are supported: - galk: For GoogleAnalyticsLink sources. - mcdn: For MerchantCenterDestination sources.
     */
    conversionSourceId?: string | null;
    /**
     * Output only. The time when an archived conversion source becomes permanently deleted and is no longer available to undelete.
     */
    expireTime?: string | null;
    /**
     * Immutable. Conversion Source of type "Link to Google Analytics Property".
     */
    googleAnalyticsLink?: Schema$GoogleAnalyticsLink;
    /**
     * Conversion Source of type "Merchant Center Tag Destination".
     */
    merchantCenterDestination?: Schema$MerchantCenterDestination;
    /**
     * Output only. Current state of this conversion source. Can't be edited through the API.
     */
    state?: string | null;
  }
  /**
   * Information about CSS domain.
   */
  export interface Schema$Css {
    /**
     * Output only. Immutable. The CSS domain ID.
     */
    cssDomainId?: string | null;
    /**
     * Output only. Immutable. The ID of the CSS group this CSS domain is affiliated with. Only populated for CSS group users.
     */
    cssGroupId?: string | null;
    /**
     * Output only. Immutable. The CSS domain's display name, used when space is constrained.
     */
    displayName?: string | null;
    /**
     * Output only. Immutable. The CSS domain's full name.
     */
    fullName?: string | null;
    /**
     * Output only. Immutable. The CSS domain's homepage.
     */
    homepageUri?: string | null;
    /**
     * A list of label IDs that are assigned to this CSS domain by its CSS group. Only populated for CSS group users.
     */
    labelIds?: string[] | null;
  }
  /**
   * A message that represents custom attributes. Exactly one of `value` or `groupValues` must be provided. Maximum allowed number of characters for each custom attribute is 10240 (represents sum of characters for name and value). Maximum 2500 custom attributes can be set per merchant, with total size of 102.4kB.
   */
  export interface Schema$CustomAttribute {
    /**
     * Subattributes within this attribute group. Exactly one of value or groupValues must be provided.
     */
    groupValues?: Schema$CustomAttribute[];
    /**
     * The name of the attribute. Underscores will be replaced by spaces upon insertion.
     */
    name?: string | null;
    /**
     * The value of the attribute.
     */
    value?: string | null;
  }
  export interface Schema$CutoffTime {
    /**
     * Hour of the cutoff time until which an order has to be placed to be processed in the same day. Required.
     */
    hour?: number | null;
    /**
     * Minute of the cutoff time until which an order has to be placed to be processed in the same day. Required.
     */
    minute?: number | null;
    /**
     * Timezone identifier for the cutoff time (for example, "Europe/Zurich"). List of identifiers. Required.
     */
    timezone?: string | null;
  }
  /**
   * Datafeed configuration data.
   */
  export interface Schema$Datafeed {
    /**
     * The two-letter ISO 639-1 language in which the attributes are defined in the data feed.
     */
    attributeLanguage?: string | null;
    /**
     * Required. The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are supported. Acceptable values are: - "`local products`" - "`product inventory`" - "`products`"
     */
    contentType?: string | null;
    /**
     * Fetch schedule for the feed file.
     */
    fetchSchedule?: Schema$DatafeedFetchSchedule;
    /**
     * Required. The filename of the feed. All feeds must have a unique file name.
     */
    fileName?: string | null;
    /**
     * Format of the feed file.
     */
    format?: Schema$DatafeedFormat;
    /**
     * Required for update. The ID of the data feed.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#datafeed`"
     */
    kind?: string | null;
    /**
     * Required for insert. A descriptive name of the data feed.
     */
    name?: string | null;
    /**
     * The targets this feed should apply to (country, language, destinations).
     */
    targets?: Schema$DatafeedTarget[];
  }
  /**
   * The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required.
   */
  export interface Schema$DatafeedFetchSchedule {
    /**
     * The day of the month the feed file should be fetched (1-31).
     */
    dayOfMonth?: number | null;
    /**
     * The URL where the feed file can be fetched. Google Merchant Center will support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP protocols, so the value will need to be a valid link using one of those four protocols.
     */
    fetchUrl?: string | null;
    /**
     * The hour of the day the feed file should be fetched (0-23).
     */
    hour?: number | null;
    /**
     * The minute of the hour the feed file should be fetched (0-59). Read-only.
     */
    minuteOfHour?: number | null;
    /**
     * An optional password for fetch_url.
     */
    password?: string | null;
    /**
     * Whether the scheduled fetch is paused or not.
     */
    paused?: boolean | null;
    /**
     * Time zone used for schedule. UTC by default. For example, "America/Los_Angeles".
     */
    timeZone?: string | null;
    /**
     * An optional user name for fetch_url.
     */
    username?: string | null;
    /**
     * The day of the week the feed file should be fetched. Acceptable values are: - "`monday`" - "`tuesday`" - "`wednesday`" - "`thursday`" - "`friday`" - "`saturday`" - "`sunday`"
     */
    weekday?: string | null;
  }
  export interface Schema$DatafeedFormat {
    /**
     * Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`pipe`" - "`tab`" - "`tilde`"
     */
    columnDelimiter?: string | null;
    /**
     * Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected. Acceptable values are: - "`latin-1`" - "`utf-16be`" - "`utf-16le`" - "`utf-8`" - "`windows-1252`"
     */
    fileEncoding?: string | null;
    /**
     * Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`normal character`" - "`value quoting`"
     */
    quotingMode?: string | null;
  }
  export interface Schema$DatafeedsCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$DatafeedsCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch datafeeds request.
   */
  export interface Schema$DatafeedsCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * The data feed to insert.
     */
    datafeed?: Schema$Datafeed;
    /**
     * The ID of the data feed to get, delete or fetch.
     */
    datafeedId?: string | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry. Acceptable values are: - "`delete`" - "`fetchNow`" - "`get`" - "`insert`" - "`update`"
     */
    method?: string | null;
  }
  export interface Schema$DatafeedsCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$DatafeedsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsCustomBatchResponse`".
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch datafeeds response.
   */
  export interface Schema$DatafeedsCustomBatchResponseEntry {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * The requested data feed. Defined if and only if the request was successful.
     */
    datafeed?: Schema$Datafeed;
    /**
     * A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.
     */
    errors?: Schema$Errors;
  }
  export interface Schema$DatafeedsFetchNowResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsFetchNowResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$DatafeedsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsListResponse`".
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of datafeeds.
     */
    nextPageToken?: string | null;
    resources?: Schema$Datafeed[];
  }
  /**
   * The status of a datafeed, that is, the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished.
   */
  export interface Schema$DatafeedStatus {
    /**
     * The country for which the status is reported, represented as a CLDR territory code.
     */
    country?: string | null;
    /**
     * The ID of the feed for which the status is reported.
     */
    datafeedId?: string | null;
    /**
     * The list of errors occurring in the feed.
     */
    errors?: Schema$DatafeedStatusError[];
    /**
     * The feed label status is reported for.
     */
    feedLabel?: string | null;
    /**
     * The number of items in the feed that were processed.
     */
    itemsTotal?: string | null;
    /**
     * The number of items in the feed that were valid.
     */
    itemsValid?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#datafeedStatus`"
     */
    kind?: string | null;
    /**
     * The two-letter ISO 639-1 language for which the status is reported.
     */
    language?: string | null;
    /**
     * The last date at which the feed was uploaded.
     */
    lastUploadDate?: string | null;
    /**
     * The processing status of the feed. Acceptable values are: - "`"`failure`": The feed could not be processed or all items had errors.`" - "`in progress`": The feed is being processed. - "`none`": The feed has not yet been processed. For example, a feed that has never been uploaded will have this processing status. - "`success`": The feed was processed successfully, though some items might have had errors.
     */
    processingStatus?: string | null;
    /**
     * The list of errors occurring in the feed.
     */
    warnings?: Schema$DatafeedStatusError[];
  }
  /**
   * An error occurring in the feed, like "invalid price".
   */
  export interface Schema$DatafeedStatusError {
    /**
     * The code of the error, for example, "validation/invalid_value".
     */
    code?: string | null;
    /**
     * The number of occurrences of the error in the feed.
     */
    count?: string | null;
    /**
     * A list of example occurrences of the error, grouped by product.
     */
    examples?: Schema$DatafeedStatusExample[];
    /**
     * The error message, for example, "Invalid price".
     */
    message?: string | null;
  }
  export interface Schema$DatafeedstatusesCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$DatafeedstatusesCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch datafeedstatuses request.
   */
  export interface Schema$DatafeedstatusesCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * Deprecated. Use `feedLabel` instead. The country to get the datafeed status for. If this parameter is provided, then `language` must also be provided. Note that for multi-target datafeeds this parameter is required.
     */
    country?: string | null;
    /**
     * The ID of the data feed to get.
     */
    datafeedId?: string | null;
    /**
     * The feed label to get the datafeed status for. If this parameter is provided, then `language` must also be provided. Note that for multi-target datafeeds this parameter is required.
     */
    feedLabel?: string | null;
    /**
     * The language to get the datafeed status for. If this parameter is provided then `country` must also be provided. Note that for multi-target datafeeds this parameter is required.
     */
    language?: string | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry. Acceptable values are: - "`get`"
     */
    method?: string | null;
  }
  export interface Schema$DatafeedstatusesCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$DatafeedstatusesCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#datafeedstatusesCustomBatchResponse`".
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch datafeedstatuses response.
   */
  export interface Schema$DatafeedstatusesCustomBatchResponseEntry {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * The requested data feed status. Defined if and only if the request was successful.
     */
    datafeedStatus?: Schema$DatafeedStatus;
    /**
     * A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.
     */
    errors?: Schema$Errors;
  }
  export interface Schema$DatafeedstatusesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#datafeedstatusesListResponse`".
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of datafeed statuses.
     */
    nextPageToken?: string | null;
    resources?: Schema$DatafeedStatus[];
  }
  /**
   * An example occurrence for a particular error.
   */
  export interface Schema$DatafeedStatusExample {
    /**
     * The ID of the example item.
     */
    itemId?: string | null;
    /**
     * Line number in the data feed where the example is found.
     */
    lineNumber?: string | null;
    /**
     * The problematic value.
     */
    value?: string | null;
  }
  export interface Schema$DatafeedTarget {
    /**
     * Deprecated. Use `feedLabel` instead. The country where the items in the feed will be included in the search index, represented as a CLDR territory code.
     */
    country?: string | null;
    /**
     * The list of [destinations to exclude](//support.google.com/merchants/answer/6324486) for this target (corresponds to cleared check boxes in Merchant Center). Products that are excluded from all destinations for more than 7 days are automatically deleted.
     */
    excludedDestinations?: string[] | null;
    /**
     * Feed label for the DatafeedTarget. Either `country` or `feedLabel` is required. If both `feedLabel` and `country` is specified, the values must match. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-).
     */
    feedLabel?: string | null;
    /**
     * The list of [destinations to include](//support.google.com/merchants/answer/7501026) for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`.
     */
    includedDestinations?: string[] | null;
    /**
     * The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targets[].country`.
     */
    language?: string | null;
    /**
     * The countries where the items may be displayed. Represented as a CLDR territory code. Will be ignored for "product inventory" feeds.
     */
    targetCountries?: string[] | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
   */
  export interface Schema$DateTime {
    /**
     * Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     */
    day?: number | null;
    /**
     * Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     */
    minutes?: number | null;
    /**
     * Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     */
    month?: number | null;
    /**
     * Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     */
    nanos?: number | null;
    /**
     * Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
    /**
     * Time zone.
     */
    timeZone?: Schema$TimeZone;
    /**
     * UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 \}.
     */
    utcOffset?: string | null;
    /**
     * Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     */
    year?: number | null;
  }
  /**
   * A delivery area for the product. Only one of `countryCode` or `postalCodeRange` must be set.
   */
  export interface Schema$DeliveryArea {
    /**
     * Required. The country that the product can be delivered to. Submit a [unicode CLDR region](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) such as `US` or `CH`.
     */
    countryCode?: string | null;
    /**
     * A postal code, postal code range or postal code prefix that defines this area. Limited to US and AUS.
     */
    postalCodeRange?: Schema$DeliveryAreaPostalCodeRange;
    /**
     * A state, territory, or prefecture. This is supported for the United States, Australia, and Japan. Provide a subdivision code from the ISO 3166-2 code tables ([US](https://en.wikipedia.org/wiki/ISO_3166-2:US), [AU](https://en.wikipedia.org/wiki/ISO_3166-2:AU), or [JP](https://en.wikipedia.org/wiki/ISO_3166-2:JP)) without country prefix (for example, `"NY"`, `"NSW"`, `"03"`).
     */
    regionCode?: string | null;
  }
  /**
   * A range of postal codes that defines the delivery area. Only set `firstPostalCode` when specifying a single postal code.
   */
  export interface Schema$DeliveryAreaPostalCodeRange {
    /**
     * Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: `"94108"`, `"9410*"`, `"9*"`.
     */
    firstPostalCode?: string | null;
    /**
     * A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area (for example [070* - 078*] results in the range [07000 - 07899]). It must have the same length as `firstPostalCode`: if `firstPostalCode` is a postal code then `lastPostalCode` must be a postal code too; if firstPostalCode is a pattern then `lastPostalCode` must be a pattern with the same prefix length. Ignored if not set, then the area is defined as being all the postal codes matching `firstPostalCode`.
     */
    lastPostalCode?: string | null;
  }
  export interface Schema$DeliveryTime {
    /**
     * Business days cutoff time definition. If not configured, the cutoff time will be defaulted to 8AM PST. If local delivery, use Service.StoreConfig.CutoffConfig.
     */
    cutoffTime?: Schema$CutoffTime;
    /**
     * The business days during which orders can be handled. If not provided, Monday to Friday business days will be assumed.
     */
    handlingBusinessDayConfig?: Schema$BusinessDayConfig;
    /**
     * Holiday cutoff definitions. If configured, they specify order cutoff times for holiday-specific shipping.
     */
    holidayCutoffs?: Schema$HolidayCutoff[];
    /**
     * Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. Must be greater than or equal to `minHandlingTimeInDays`.
     */
    maxHandlingTimeInDays?: number | null;
    /**
     * Maximum number of business days that are spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to `minTransitTimeInDays`.
     */
    maxTransitTimeInDays?: number | null;
    /**
     * Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped.
     */
    minHandlingTimeInDays?: number | null;
    /**
     * Minimum number of business days that are spent in transit. 0 means same day delivery, 1 means next day delivery. Either `{min,max\}TransitTimeInDays` or `transitTimeTable` must be set, but not both.
     */
    minTransitTimeInDays?: number | null;
    /**
     * The business days during which orders can be in-transit. If not provided, Monday to Friday business days will be assumed.
     */
    transitBusinessDayConfig?: Schema$BusinessDayConfig;
    /**
     * Transit time table, number of business days spent in transit based on row and column dimensions. Either `{min,max\}TransitTimeInDays` or `transitTimeTable` can be set, but not both.
     */
    transitTimeTable?: Schema$TransitTable;
    /**
     * Indicates that the delivery time should be calculated per warehouse (shipping origin location) based on the settings of the selected carrier. When set, no other transit time related field in DeliveryTime should be set.
     */
    warehouseBasedDeliveryTimes?: Schema$WarehouseBasedDeliveryTime[];
  }
  /**
   * Distance represented by an integer and unit.
   */
  export interface Schema$Distance {
    /**
     * The distance unit. Acceptable values are `None`, `Miles`, and `Kilometers`.
     */
    unit?: string | null;
    /**
     * The distance represented as a number.
     */
    value?: string | null;
  }
  /**
   * Additional information required for E_COMMERCE_PLATFORM link type.
   */
  export interface Schema$ECommercePlatformLinkInfo {
    /**
     * The id used by the third party service provider to identify the merchant.
     */
    externalAccountId?: string | null;
  }
  /**
   * An error returned by the API.
   */
  export interface Schema$Error {
    /**
     * The domain of the error.
     */
    domain?: string | null;
    /**
     * A description of the error.
     */
    message?: string | null;
    /**
     * The error code.
     */
    reason?: string | null;
  }
  /**
   * A list of errors returned by a failed batch entry.
   */
  export interface Schema$Errors {
    /**
     * The HTTP status of the first error in `errors`.
     */
    code?: number | null;
    /**
     * A list of errors.
     */
    errors?: Schema$Error[];
    /**
     * The message of the first error in `errors`.
     */
    message?: string | null;
  }
  /**
   * Action that is implemented and performed outside of the third-party application. It should redirect the merchant to the provided URL of an external system where they can perform the action. For example to request a review in the Merchant Center.
   */
  export interface Schema$ExternalAction {
    /**
     * The type of external action.
     */
    type?: string | null;
    /**
     * URL to external system, for example Merchant Center, where the merchant can perform the action.
     */
    uri?: string | null;
  }
  /**
   * Response message for GetFreeListingsProgramStatus.
   */
  export interface Schema$FreeListingsProgramStatus {
    /**
     * State of the program. `ENABLED` if there are offers for at least one region.
     */
    globalState?: string | null;
    /**
     * Status of the program in each region. Regions with the same status and review eligibility are grouped together in `regionCodes`.
     */
    regionStatuses?: Schema$FreeListingsProgramStatusRegionStatus[];
  }
  /**
   * Status of program and region.
   */
  export interface Schema$FreeListingsProgramStatusRegionStatus {
    /**
     * Date by which eligibilityStatus will go from `WARNING` to `DISAPPROVED`. Only visible when your eligibilityStatus is WARNING. In [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DD`.
     */
    disapprovalDate?: string | null;
    /**
     * Eligibility status of the standard free listing program.
     */
    eligibilityStatus?: string | null;
    /**
     * Issues that must be fixed to be eligible for review.
     */
    onboardingIssues?: string[] | null;
    /**
     * The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes for all the regions with the same `eligibilityStatus` and `reviewEligibility`.
     */
    regionCodes?: string[] | null;
    /**
     * If a program is eligible for review in a specific region. Only visible if `eligibilityStatus` is `DISAPPROVED`.
     */
    reviewEligibilityStatus?: string | null;
    /**
     * Review ineligibility reason if account is not eligible for review.
     */
    reviewIneligibilityReason?: string | null;
    /**
     * Reason a program in a specific region isn’t eligible for review. Only visible if `reviewEligibilityStatus` is `INELIGIBLE`.
     */
    reviewIneligibilityReasonDescription?: string | null;
    /**
     * Additional information for ineligibility. If `reviewIneligibilityReason` is `IN_COOLDOWN_PERIOD`, a timestamp for the end of the cooldown period is provided.
     */
    reviewIneligibilityReasonDetails?: Schema$FreeListingsProgramStatusReviewIneligibilityReasonDetails;
    /**
     * Issues evaluated in the review process. Fix all issues before requesting a review.
     */
    reviewIssues?: string[] | null;
  }
  /**
   * Additional details for review ineligibility reasons.
   */
  export interface Schema$FreeListingsProgramStatusReviewIneligibilityReasonDetails {
    /**
     * This timestamp represents end of cooldown period for review ineligbility reason `IN_COOLDOWN_PERIOD`.
     */
    cooldownTime?: string | null;
  }
  /**
   * Conditions to be met for a product to have free shipping.
   */
  export interface Schema$FreeShippingThreshold {
    /**
     * Required. The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which an item will ship.
     */
    country?: string | null;
    /**
     * Required. The minimum product price for the shipping cost to become free. Represented as a number.
     */
    priceThreshold?: Schema$Price;
  }
  /**
   * Response containing generated recommendations.
   */
  export interface Schema$GenerateRecommendationsResponse {
    /**
     * Recommendations generated for a request.
     */
    recommendations?: Schema$Recommendation[];
    /**
     * Output only. Response token is a string created for each `GenerateRecommendationsResponse`. This token doesn't expire, and is globally unique. This token must be used when reporting interactions for recommendations.
     */
    responseToken?: string | null;
  }
  export interface Schema$GmbAccounts {
    /**
     * The ID of the Merchant Center account.
     */
    accountId?: string | null;
    /**
     * A list of Business Profiles which are available to the merchant.
     */
    gmbAccounts?: Schema$GmbAccountsGmbAccount[];
  }
  export interface Schema$GmbAccountsGmbAccount {
    /**
     * The email which identifies the Business Profile.
     */
    email?: string | null;
    /**
     * Number of listings under this account.
     */
    listingCount?: string | null;
    /**
     * The name of the Business Profile.
     */
    name?: string | null;
    /**
     * The type of the Business Profile (User or Business).
     */
    type?: string | null;
  }
  /**
   * "Google Analytics Link" sources can be used to get conversion data from an existing Google Analytics property into the linked Merchant Center account.
   */
  export interface Schema$GoogleAnalyticsLink {
    /**
     * Output only. Attribution settings for the linked Google Analytics property.
     */
    attributionSettings?: Schema$AttributionSettings;
    /**
     * Required. Immutable. ID of the Google Analytics property the merchant is linked to.
     */
    propertyId?: string | null;
    /**
     * Output only. Name of the Google Analytics property the merchant is linked to.
     */
    propertyName?: string | null;
  }
  /**
   * A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set.
   */
  export interface Schema$Headers {
    /**
     * A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set.
     */
    locations?: Schema$LocationIdSet[];
    /**
     * A list of inclusive number of items upper bounds. The last value can be `"infinity"`. For example `["10", "50", "infinity"]` represents the headers "<= 10 items", "<= 50 items", and "\> 50 items". Must be non-empty. Can only be set if all other fields are not set.
     */
    numberOfItems?: string[] | null;
    /**
     * A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service. Must be non-empty. Can only be set if all other fields are not set.
     */
    postalCodeGroupNames?: string[] | null;
    /**
     * A list of inclusive order price upper bounds. The last price's value can be `"infinity"`. For example `[{"value": "10", "currency": "USD"\}, {"value": "500", "currency": "USD"\}, {"value": "infinity", "currency": "USD"\}]` represents the headers "<= $10", "<= $500", and "\> $500". All prices within a service must have the same currency. Must be non-empty. Can only be set if all other fields are not set.
     */
    prices?: Schema$Price[];
    /**
     * A list of inclusive order weight upper bounds. The last weight's value can be `"infinity"`. For example `[{"value": "10", "unit": "kg"\}, {"value": "50", "unit": "kg"\}, {"value": "infinity", "unit": "kg"\}]` represents the headers "<= 10kg", "<= 50kg", and "\> 50kg". All weights within a service must have the same unit. Must be non-empty. Can only be set if all other fields are not set.
     */
    weights?: Schema$Weight[];
  }
  export interface Schema$HolidayCutoff {
    /**
     * Date of the order deadline, in ISO 8601 format. For example, "2016-11-29" for 29th November 2016. Required.
     */
    deadlineDate?: string | null;
    /**
     * Hour of the day on the deadline date until which the order has to be placed to qualify for the delivery guarantee. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Required.
     */
    deadlineHour?: number | null;
    /**
     * Timezone identifier for the deadline hour (for example, "Europe/Zurich"). List of identifiers. Required.
     */
    deadlineTimezone?: string | null;
    /**
     * Unique identifier for the holiday. Required.
     */
    holidayId?: string | null;
    /**
     * Date on which the deadline will become visible to consumers in ISO 8601 format. For example, "2016-10-31" for 31st October 2016. Required.
     */
    visibleFromDate?: string | null;
  }
  export interface Schema$HolidaysHoliday {
    /**
     * The CLDR territory code of the country in which the holiday is available. For example, "US", "DE", "GB". A holiday cutoff can only be configured in a shipping settings service with matching delivery country. Always present.
     */
    countryCode?: string | null;
    /**
     * Date of the holiday, in ISO 8601 format. For example, "2016-12-25" for Christmas 2016. Always present.
     */
    date?: string | null;
    /**
     * Date on which the order has to arrive at the customer's, in ISO 8601 format. For example, "2016-12-24" for 24th December 2016. Always present.
     */
    deliveryGuaranteeDate?: string | null;
    /**
     * Hour of the day in the delivery location's timezone on the guaranteed delivery date by which the order has to arrive at the customer's. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Always present.
     */
    deliveryGuaranteeHour?: string | null;
    /**
     * Unique identifier for the holiday to be used when configuring holiday cutoffs. Always present.
     */
    id?: string | null;
    /**
     * The holiday type. Always present. Acceptable values are: - "`Christmas`" - "`Easter`" - "`Father's Day`" - "`Halloween`" - "`Independence Day (USA)`" - "`Mother's Day`" - "`Thanksgiving`" - "`Valentine's Day`"
     */
    type?: string | null;
  }
  /**
   * Input field that needs to be available to the merchant. If the field is marked as required, then a value needs to be provided for a successful processing of the request.
   */
  export interface Schema$InputField {
    /**
     * Input field to provide a boolean value. Corresponds to the [html input type=checkbox](https://www.w3.org/TR/2012/WD-html-markup-20121025/input.checkbox.html#input.checkbox).
     */
    checkboxInput?: Schema$InputFieldCheckboxInput;
    /**
     * Input field to select one of the offered choices. Corresponds to the [html input type=radio](https://www.w3.org/TR/2012/WD-html-markup-20121025/input.radio.html#input.radio).
     */
    choiceInput?: Schema$InputFieldChoiceInput;
    /**
     * Not for display but need to be sent back for the given input field.
     */
    id?: string | null;
    /**
     * Input field label. There may be more information to be shown in a tooltip.
     */
    label?: Schema$TextWithTooltip;
    /**
     * Whether the field is required. The action button needs to stay disabled till values for all required fields are provided.
     */
    required?: boolean | null;
    /**
     * Input field to provide text information. Corresponds to the [html input type=text](https://www.w3.org/TR/2012/WD-html-markup-20121025/input.text.html#input.text) or [html textarea](https://www.w3.org/TR/2012/WD-html-markup-20121025/textarea.html#textarea).
     */
    textInput?: Schema$InputFieldTextInput;
  }
  /**
   * Checkbox input allows merchants to provide a boolean value. Corresponds to the [html input type=checkbox](https://www.w3.org/TR/2012/WD-html-markup-20121025/input.checkbox.html#input.checkbox). If merchant checks the box, the input value for the field is `true`, otherwise it is `false`. This type of input is often used as a confirmation that the merchant completed required steps before they are allowed to start the action. In such a case, the input field is marked as required and the button to trigger the action should stay disabled until the merchant checks the box.
   */
  export interface Schema$InputFieldCheckboxInput {}
  /**
   * Choice input allows merchants to select one of the offered choices. Some choices may be linked to additional input fields that should be displayed under or next to the choice option. The value for the additional input field needs to be provided only when the specific choice is selected by the merchant. For example, additional input field can be hidden or disabled until the merchant selects the specific choice.
   */
  export interface Schema$InputFieldChoiceInput {
    /**
     * A list of choices. Only one option can be selected.
     */
    options?: Schema$InputFieldChoiceInputChoiceInputOption[];
  }
  /**
   * A choice that merchant can select.
   */
  export interface Schema$InputFieldChoiceInputChoiceInputOption {
    /**
     * Input that should be displayed when this option is selected. The additional input will not contain a `ChoiceInput`.
     */
    additionalInput?: Schema$InputField;
    /**
     * Not for display but need to be sent back for the selected choice option.
     */
    id?: string | null;
    /**
     * Short description of the choice option. There may be more information to be shown as a tooltip.
     */
    label?: Schema$TextWithTooltip;
  }
  /**
   * Text input allows merchants to provide a text value.
   */
  export interface Schema$InputFieldTextInput {
    /**
     * Additional info regarding the field to be displayed to merchant. For example, warning to not include personal identifiable information. There may be more information to be shown in a tooltip.
     */
    additionalInfo?: Schema$TextWithTooltip;
    /**
     * Text to be used as the [aria-label](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html) for the input.
     */
    ariaLabel?: string | null;
    /**
     * Information about the required format. If present, it should be shown close to the input field to help merchants to provide a correct value. For example: "VAT numbers should be in a format similar to SK9999999999"
     */
    formatInfo?: string | null;
    /**
     * Type of the text input
     */
    type?: string | null;
  }
  /**
   * Input provided by the merchant for input field.
   */
  export interface Schema$InputValue {
    /**
     * Value for checkbox input field.
     */
    checkboxInputValue?: Schema$InputValueCheckboxInputValue;
    /**
     * Value for choice input field.
     */
    choiceInputValue?: Schema$InputValueChoiceInputValue;
    /**
     * Required. Id of the corresponding input field.
     */
    inputFieldId?: string | null;
    /**
     * Value for text input field.
     */
    textInputValue?: Schema$InputValueTextInputValue;
  }
  /**
   * Value for checkbox input field.
   */
  export interface Schema$InputValueCheckboxInputValue {
    /**
     * Required. True if the merchant checked the box field. False otherwise.
     */
    value?: boolean | null;
  }
  /**
   * Value for choice input field.
   */
  export interface Schema$InputValueChoiceInputValue {
    /**
     * Required. Id of the option that was selected by the merchant.
     */
    choiceInputOptionId?: string | null;
  }
  /**
   * Value for text input field.
   */
  export interface Schema$InputValueTextInputValue {
    /**
     * Required. Text provided by the merchant.
     */
    value?: string | null;
  }
  /**
   * Request message for the `InsertCheckoutSettings` method.
   */
  export interface Schema$InsertCheckoutSettingsRequest {
    /**
     * Required. The `UrlSettings` for the request. The presence of URL settings indicates `Checkout` enrollment.
     */
    uriSettings?: Schema$UrlSettings;
  }
  /**
   * Details of a monthly installment payment offering. [Learn more](https://support.google.com/merchants/answer/6324474) about installments.
   */
  export interface Schema$Installment {
    /**
     * The amount the buyer has to pay per month.
     */
    amount?: Schema$Price;
    /**
     * Optional. Type of installment payments. Supported values are: - "`finance`" - "`lease`"
     */
    creditType?: string | null;
    /**
     * Optional. The initial down payment amount the buyer has to pay.
     */
    downpayment?: Schema$Price;
    /**
     * The number of installments the buyer has to pay.
     */
    months?: string | null;
  }
  /**
   * The IDs of labels that should be assigned to the CSS domain.
   */
  export interface Schema$LabelIds {
    /**
     * The list of label IDs.
     */
    labelIds?: string[] | null;
  }
  export interface Schema$LiaAboutPageSettings {
    /**
     * The status of the verification process for the About page. Supported values are: - "`active`" - "`inactive`" - "`pending`"
     */
    status?: string | null;
    /**
     * The URL for the About page.
     */
    url?: string | null;
  }
  export interface Schema$LiaCountrySettings {
    /**
     * The settings for the About page.
     */
    about?: Schema$LiaAboutPageSettings;
    /**
     * Required. CLDR country code (for example, "US").
     */
    country?: string | null;
    /**
     * The status of the "Merchant hosted local storefront" feature.
     */
    hostedLocalStorefrontActive?: boolean | null;
    /**
     * LIA inventory verification settings.
     */
    inventory?: Schema$LiaInventorySettings;
    /**
     * The omnichannel experience configured for this country.
     */
    omnichannelExperience?: Schema$LiaOmnichannelExperience;
    /**
     * LIA "On Display To Order" settings.
     */
    onDisplayToOrder?: Schema$LiaOnDisplayToOrderSettings;
    /**
     * The POS data provider linked with this country.
     */
    posDataProvider?: Schema$LiaPosDataProvider;
    /**
     * The status of the "Store pickup" feature.
     */
    storePickupActive?: boolean | null;
  }
  export interface Schema$LiaInventorySettings {
    /**
     * The email of the contact for the inventory verification process.
     */
    inventoryVerificationContactEmail?: string | null;
    /**
     * The name of the contact for the inventory verification process.
     */
    inventoryVerificationContactName?: string | null;
    /**
     * The status of the verification contact. Acceptable values are: - "`active`" - "`inactive`" - "`pending`"
     */
    inventoryVerificationContactStatus?: string | null;
    /**
     * The status of the inventory verification process. Acceptable values are: - "`active`" - "`inactive`" - "`pending`"
     */
    status?: string | null;
  }
  /**
   * Omnichannel experience details.
   */
  export interface Schema$LiaOmnichannelExperience {
    /**
     * The CLDR country code (for example, "US").
     */
    country?: string | null;
    /**
     * The Local Store Front (LSF) type for this country. Acceptable values are: - "`ghlsf`" (Google-Hosted Local Store Front) - "`mhlsfBasic`" (Merchant-Hosted Local Store Front Basic) - "`mhlsfFull`" (Merchant-Hosted Local Store Front Full) More details about these types can be found here.
     */
    lsfType?: string | null;
    /**
     * The Pickup types for this country. Acceptable values are: - "`pickupToday`" - "`pickupLater`"
     */
    pickupTypes?: string[] | null;
  }
  export interface Schema$LiaOnDisplayToOrderSettings {
    /**
     * Shipping cost and policy URL.
     */
    shippingCostPolicyUrl?: string | null;
    /**
     * The status of the ?On display to order? feature. Acceptable values are: - "`active`" - "`inactive`" - "`pending`"
     */
    status?: string | null;
  }
  export interface Schema$LiaPosDataProvider {
    /**
     * The ID of the POS data provider.
     */
    posDataProviderId?: string | null;
    /**
     * The account ID by which this merchant is known to the POS data provider.
     */
    posExternalAccountId?: string | null;
  }
  /**
   * Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
   */
  export interface Schema$LiaSettings {
    /**
     * The ID of the account to which these LIA settings belong. Ignored upon update, always present in get request responses.
     */
    accountId?: string | null;
    /**
     * The LIA settings for each country.
     */
    countrySettings?: Schema$LiaCountrySettings[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#liaSettings`"
     */
    kind?: string | null;
  }
  export interface Schema$LiasettingsCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$LiasettingsCustomBatchRequestEntry[];
  }
  export interface Schema$LiasettingsCustomBatchRequestEntry {
    /**
     * The ID of the account for which to get/update account LIA settings.
     */
    accountId?: string | null;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * Inventory validation contact email. Required only for SetInventoryValidationContact.
     */
    contactEmail?: string | null;
    /**
     * Inventory validation contact name. Required only for SetInventoryValidationContact.
     */
    contactName?: string | null;
    /**
     * The country code. Required only for RequestInventoryVerification.
     */
    country?: string | null;
    /**
     * The Business Profile. Required only for RequestGmbAccess.
     */
    gmbEmail?: string | null;
    /**
     * The account Lia settings to update. Only defined if the method is `update`.
     */
    liaSettings?: Schema$LiaSettings;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry. Acceptable values are: - "`get`" - "`getAccessibleGmbAccounts`" - "`requestGmbAccess`" - "`requestInventoryVerification`" - "`setInventoryVerificationContact`" - "`update`"
     */
    method?: string | null;
    /**
     * The omnichannel experience for a country. Required only for SetOmnichannelExperience.
     */
    omnichannelExperience?: Schema$LiaOmnichannelExperience;
    /**
     * The ID of POS data provider. Required only for SetPosProvider.
     */
    posDataProviderId?: string | null;
    /**
     * The account ID by which this merchant is known to the POS provider.
     */
    posExternalAccountId?: string | null;
  }
  export interface Schema$LiasettingsCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$LiasettingsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$LiasettingsCustomBatchResponseEntry {
    /**
     * The ID of the request entry to which this entry responds.
     */
    batchId?: number | null;
    /**
     * A list of errors defined if, and only if, the request failed.
     */
    errors?: Schema$Errors;
    /**
     * The list of accessible Business Profiles.
     */
    gmbAccounts?: Schema$GmbAccounts;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponseEntry`"
     */
    kind?: string | null;
    /**
     * The retrieved or updated Lia settings.
     */
    liaSettings?: Schema$LiaSettings;
    /**
     * The updated omnichannel experience for a country.
     */
    omnichannelExperience?: Schema$LiaOmnichannelExperience;
    /**
     * The list of POS data providers.
     */
    posDataProviders?: Schema$PosDataProviders[];
  }
  export interface Schema$LiasettingsGetAccessibleGmbAccountsResponse {
    /**
     * The ID of the Merchant Center account.
     */
    accountId?: string | null;
    /**
     * A list of Business Profiles which are available to the merchant.
     */
    gmbAccounts?: Schema$GmbAccountsGmbAccount[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsGetAccessibleGmbAccountsResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$LiasettingsListPosDataProvidersResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsListPosDataProvidersResponse`".
     */
    kind?: string | null;
    /**
     * The list of POS data providers for each eligible country
     */
    posDataProviders?: Schema$PosDataProviders[];
  }
  export interface Schema$LiasettingsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsListResponse`".
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of LIA settings.
     */
    nextPageToken?: string | null;
    resources?: Schema$LiaSettings[];
  }
  export interface Schema$LiasettingsRequestGmbAccessResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsRequestGmbAccessResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$LiasettingsRequestInventoryVerificationResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsRequestInventoryVerificationResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$LiasettingsSetInventoryVerificationContactResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsSetInventoryVerificationContactResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$LiasettingsSetPosDataProviderResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsSetPosDataProviderResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$LinkedAccount {
    /**
     * The ID of the linked account.
     */
    linkedAccountId?: string | null;
    /**
     * List of provided services.
     */
    services?: Schema$LinkService[];
  }
  export interface Schema$LinkService {
    /**
     * Service provided to or by the linked account. Acceptable values are: - "`shoppingActionsOrderManagement`" - "`shoppingActionsProductManagement`" - "`shoppingAdsProductManagement`" - "`paymentProcessing`"
     */
    service?: string | null;
    /**
     * Status of the link Acceptable values are: - "`active`" - "`inactive`" - "`pending`"
     */
    status?: string | null;
  }
  /**
   * Response message for the `ListAccountLabels` method.
   */
  export interface Schema$ListAccountLabelsResponse {
    /**
     * The labels from the specified account.
     */
    accountLabels?: Schema$AccountLabel[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for listing account return carriers.
   */
  export interface Schema$ListAccountReturnCarrierResponse {
    /**
     * List of all available account return carriers for the merchant.
     */
    accountReturnCarriers?: Schema$AccountReturnCarrier[];
  }
  /**
   * Response message for the ListCollections method.
   */
  export interface Schema$ListCollectionsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The collections listed.
     */
    resources?: Schema$Collection[];
  }
  /**
   * Response message for the ListCollectionStatuses method.
   */
  export interface Schema$ListCollectionStatusesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The collectionstatuses listed.
     */
    resources?: Schema$CollectionStatus[];
  }
  /**
   * Response message for the ListConversionSources method.
   */
  export interface Schema$ListConversionSourcesResponse {
    /**
     * List of conversion sources.
     */
    conversionSources?: Schema$ConversionSource[];
    /**
     * Token to be used to fetch the next results page.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for the `ListCsses` method
   */
  export interface Schema$ListCssesResponse {
    /**
     * The CSS domains affiliated with the specified CSS group.
     */
    csses?: Schema$Css[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the ListMethodQuotas method.
   */
  export interface Schema$ListMethodQuotasResponse {
    /**
     * The current quota usage and limits per each method.
     */
    methodQuotas?: Schema$MethodQuota[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for Promotions.List method.
   */
  export interface Schema$ListPromotionResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of all available promotions for the merchant.
     */
    promotions?: Schema$Promotion[];
  }
  /**
   * Response message for the `ListRegions` method.
   */
  export interface Schema$ListRegionsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The regions from the specified merchant.
     */
    regions?: Schema$Region[];
  }
  /**
   * Response message for the `ListReturnPolicyOnline` method.
   */
  export interface Schema$ListReturnPolicyOnlineResponse {
    /**
     * The retrieved return policies.
     */
    returnPolicies?: Schema$ReturnPolicyOnline[];
  }
  /**
   * Local inventory resource. For accepted attribute values, see the local product inventory feed specification.
   */
  export interface Schema$LocalInventory {
    /**
     * The availability of the product. For accepted attribute values, see the local product inventory feed specification.
     */
    availability?: string | null;
    /**
     * A list of custom (merchant-provided) attributes. Can also be used to submit any attribute of the feed specification in its generic form, for example, `{ "name": "size type", "value": "regular" \}`.
     */
    customAttributes?: Schema$CustomAttribute[];
    /**
     * The in-store product location.
     */
    instoreProductLocation?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#localInventory`"
     */
    kind?: string | null;
    /**
     * The supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the local product inventory feed specification.
     */
    pickupMethod?: string | null;
    /**
     * The expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the local product inventory feed specification.
     */
    pickupSla?: string | null;
    /**
     * The price of the product.
     */
    price?: Schema$Price;
    /**
     * The quantity of the product. Must be nonnegative.
     */
    quantity?: number | null;
    /**
     * The sale price of the product. Mandatory if `sale_price_effective_date` is defined.
     */
    salePrice?: Schema$Price;
    /**
     * A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates may be specified as 'null' if undecided.
     */
    salePriceEffectiveDate?: string | null;
    /**
     * Required. The store code of this local inventory resource.
     */
    storeCode?: string | null;
  }
  export interface Schema$LocalinventoryCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$LocalinventoryCustomBatchRequestEntry[];
  }
  /**
   * Batch entry encoding a single local inventory update request.
   */
  export interface Schema$LocalinventoryCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * Local inventory of the product.
     */
    localInventory?: Schema$LocalInventory;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * Method of the batch request entry. Acceptable values are: - "`insert`"
     */
    method?: string | null;
    /**
     * The ID of the product for which to update local inventory.
     */
    productId?: string | null;
  }
  export interface Schema$LocalinventoryCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$LocalinventoryCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#localinventoryCustomBatchResponse`".
     */
    kind?: string | null;
  }
  /**
   * Batch entry encoding a single local inventory update response.
   */
  export interface Schema$LocalinventoryCustomBatchResponseEntry {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#localinventoryCustomBatchResponseEntry`"
     */
    kind?: string | null;
  }
  export interface Schema$LocationIdSet {
    /**
     * A non-empty list of location IDs. They must all be of the same location type (for example, state).
     */
    locationIds?: string[] | null;
  }
  /**
   * Allows the setting up of loyalty program benefits (for example price or points). https://support.google.com/merchants/answer/12922446
   */
  export interface Schema$LoyaltyProgram {
    /**
     * Optional. The cashback that can be used for future purchases.
     */
    cashbackForFutureUse?: Schema$Price;
    /**
     * Optional. The amount of loyalty points earned on a purchase.
     */
    loyaltyPoints?: string | null;
    /**
     * Optional. A date range during which the item is eligible for member price. If not specified, the member price is always applicable. The date range is represented by a pair of ISO 8601 dates separated by a space, comma, or slash.
     */
    memberPriceEffectiveDate?: string | null;
    /**
     * Optional. The price for members of the given tier (instant discount price). Must be smaller or equal to the regular price.
     */
    price?: Schema$Price;
    /**
     * Required. The label of the loyalty program. This is an internal label that uniquely identifies the relationship between a merchant entity and a loyalty program entity. It must be provided so that system can associate the assets below (for example, price and points) with a merchant. The corresponding program must be linked to the merchant account.
     */
    programLabel?: string | null;
    /**
     * Required. The label of the tier within the loyalty program. Must match one of the labels within the program.
     */
    tierLabel?: string | null;
  }
  /**
   * "Merchant Center Destination" sources can be used to send conversion events from a website using a Google tag directly to a Merchant Center account where the source is created.
   */
  export interface Schema$MerchantCenterDestination {
    /**
     * Required. Attribution settings being used for the Merchant Center Destination.
     */
    attributionSettings?: Schema$AttributionSettings;
    /**
     * Required. Three-letter currency code (ISO 4217). The currency code defines in which currency the conversions sent to this destination will be reported in Merchant Center.
     */
    currencyCode?: string | null;
    /**
     * Output only. Merchant Center Destination ID.
     */
    destinationId?: string | null;
    /**
     * Required. Merchant-specified display name for the destination. This is the name that identifies the conversion source within the Merchant Center UI. Limited to 64 characters.
     */
    displayName?: string | null;
  }
  /**
   * The quota information per method in the Content API.
   */
  export interface Schema$MethodQuota {
    /**
     * Output only. The method name, for example `products.list`. Method name does not contain version because quota can be shared between different API versions of the same method.
     */
    method?: string | null;
    /**
     * Output only. The maximum number of calls allowed per day for the method.
     */
    quotaLimit?: string | null;
    /**
     * Output only. The maximum number of calls allowed per minute for the method.
     */
    quotaMinuteLimit?: string | null;
    /**
     * Output only. The current quota usage, meaning the number of calls already made to the method per day. Usage is reset every day at 12 PM midday UTC.
     */
    quotaUsage?: string | null;
  }
  /**
   * Performance metrics. Values are only set for metrics requested explicitly in the request's search query.
   */
  export interface Schema$Metrics {
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Average order size - the average number of items in an order. **This metric cannot be segmented by product dimensions and customer_country_code.**
     */
    aos?: number | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Average order value in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) - the average value (total price of items) of all placed orders. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by product dimensions and customer_country_code.**
     */
    aovMicros?: number | null;
    /**
     * Number of clicks.
     */
    clicks?: string | null;
    /**
     * Number of conversions divided by the number of clicks, reported on the impression date. The metric is currently available only for the `FREE_PRODUCT_LISTING` program.
     */
    conversionRate?: number | null;
    /**
     * Number of conversions attributed to the product, reported on the conversion date. Depending on the attribution model, a conversion might be distributed across multiple clicks, where each click gets its own credit assigned. This metric is a sum of all such credits. The metric is currently available only for the `FREE_PRODUCT_LISTING` program.
     */
    conversions?: number | null;
    /**
     * Value of conversions in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) attributed to the product, reported on the conversion date. The metric is currently available only for the `FREE_PRODUCT_LISTING` program. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response.
     */
    conversionValueMicros?: string | null;
    /**
     * Click-through rate - the number of clicks merchant's products receive (clicks) divided by the number of times the products are shown (impressions).
     */
    ctr?: number | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Average number of days between an order being placed and the order being fully shipped, reported on the last shipment date. **This metric cannot be segmented by product dimensions and customer_country_code.**
     */
    daysToShip?: number | null;
    /**
     * Number of times merchant's products are shown.
     */
    impressions?: string | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Average number of days between an item being ordered and the item being **This metric cannot be segmented by customer_country_code.**
     */
    itemDaysToShip?: number | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Percentage of shipped items in relation to all finalized items (shipped or rejected by the merchant; unshipped items are not taken into account), reported on the order date. Item fill rate is lowered by merchant rejections. **This metric cannot be segmented by customer_country_code.**
     */
    itemFillRate?: number | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of ordered items. Excludes customer cancellations that happened within 30 minutes of placing the order. **This metric cannot be segmented by customer_country_code.**
     */
    orderedItems?: string | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Total price of ordered items in micros (1 millionth of a standard unit, 1 USD = 1000000 micros). Excludes shipping, taxes (US only), and customer cancellations that happened within 30 minutes of placing the order. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.**
     */
    orderedItemSalesMicros?: string | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of placed orders. Excludes customer cancellations that happened within 30 minutes of placing the order. **This metric cannot be segmented by product dimensions and customer_country_code.**
     */
    orders?: string | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of ordered items canceled by the merchant, reported on the order date. **This metric cannot be segmented by customer_country_code.**
     */
    rejectedItems?: string | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of ordered items sent back for return, reported on the date when the merchant accepted the return. **This metric cannot be segmented by customer_country_code.**
     */
    returnedItems?: string | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Total price of returned items divided by the total price of shipped items, reported on the order date. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.**
     */
    returnRate?: number | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Total price of ordered items sent back for return in micros (1 millionth of a standard unit, 1 USD = 1000000 micros), reported on the date when the merchant accepted the return. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.**
     */
    returnsMicros?: string | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of shipped items, reported on the shipment date. **This metric cannot be segmented by customer_country_code.**
     */
    shippedItems?: string | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Total price of shipped items in micros (1 millionth of a standard unit, 1 USD = 1000000 micros), reported on the order date. Excludes shipping and taxes (US only). The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.**
     */
    shippedItemSalesMicros?: string | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of fully shipped orders, reported on the last shipment date. **This metric cannot be segmented by product dimensions and customer_country_code.**
     */
    shippedOrders?: string | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of ordered items not shipped up until the end of the queried day. If a multi-day period is specified in the search query, the returned value is the average number of unshipped items over the days in the queried period. **This metric cannot be segmented by customer_country_code.**
     */
    unshippedItems?: number | null;
    /**
     * *Deprecated*: This field is no longer supported and retrieving it returns 0 starting from May 2024. Number of orders not shipped or partially shipped up until the end of the queried day. If a multi-day period is specified in the search query, the returned value is the average number of unshipped orders over the days in the queried period. **This metric cannot be segmented by product dimensions and customer_country_code.**
     */
    unshippedOrders?: number | null;
  }
  export interface Schema$MinimumOrderValueTable {
    storeCodeSetWithMovs?: Schema$MinimumOrderValueTableStoreCodeSetWithMov[];
  }
  /**
   * A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency.
   */
  export interface Schema$MinimumOrderValueTableStoreCodeSetWithMov {
    /**
     * A list of unique store codes or empty for the catch all.
     */
    storeCodes?: string[] | null;
    /**
     * The minimum order value for the given stores.
     */
    value?: Schema$Price;
  }
  /**
   * Represents a merchant trade from which signals are extracted, e.g. shipping.
   */
  export interface Schema$OrderTrackingSignal {
    /**
     * The shipping fee of the order; this value should be set to zero in the case of free shipping.
     */
    customerShippingFee?: Schema$PriceAmount;
    /**
     * Required. The delivery postal code, as a continuous string without spaces or dashes, e.g. "95016". This field will be anonymized in returned OrderTrackingSignal creation response.
     */
    deliveryPostalCode?: string | null;
    /**
     * Required. The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping destination.
     */
    deliveryRegionCode?: string | null;
    /**
     * Information about line items in the order.
     */
    lineItems?: Schema$OrderTrackingSignalLineItemDetails[];
    /**
     * The Google merchant ID of this order tracking signal. This value is optional. If left unset, the caller's merchant ID is used. You must request access in order to provide data on behalf of another merchant. For more information, see [Submitting Order Tracking Signals](/shopping-content/guides/order-tracking-signals).
     */
    merchantId?: string | null;
    /**
     * Required. The time when the order was created on the merchant side. Include the year and timezone string, if available.
     */
    orderCreatedTime?: Schema$DateTime;
    /**
     * Required. The ID of the order on the merchant side. This field will be hashed in returned OrderTrackingSignal creation response.
     */
    orderId?: string | null;
    /**
     * Output only. The ID that uniquely identifies this order tracking signal.
     */
    orderTrackingSignalId?: string | null;
    /**
     * The mapping of the line items to the shipment information.
     */
    shipmentLineItemMapping?: Schema$OrderTrackingSignalShipmentLineItemMapping[];
    /**
     * The shipping information for the order.
     */
    shippingInfo?: Schema$OrderTrackingSignalShippingInfo[];
  }
  /**
   * The line items of the order.
   */
  export interface Schema$OrderTrackingSignalLineItemDetails {
    /**
     * Brand of the product.
     */
    brand?: string | null;
    /**
     * The Global Trade Item Number.
     */
    gtin?: string | null;
    /**
     * Required. The ID for this line item.
     */
    lineItemId?: string | null;
    /**
     * The manufacturer part number.
     */
    mpn?: string | null;
    /**
     * Plain text description of this product (deprecated: Please use product_title instead).
     */
    productDescription?: string | null;
    /**
     * Required. The Content API REST ID of the product, in the form channel:contentLanguage:targetCountry:offerId.
     */
    productId?: string | null;
    /**
     * Plain text title of this product.
     */
    productTitle?: string | null;
    /**
     * The quantity of the line item in the order.
     */
    quantity?: string | null;
    /**
     * Merchant SKU for this item (deprecated).
     */
    sku?: string | null;
    /**
     * Universal product code for this item (deprecated: Please use GTIN instead).
     */
    upc?: string | null;
  }
  /**
   * Represents how many items are in the shipment for the given shipment_id and line_item_id.
   */
  export interface Schema$OrderTrackingSignalShipmentLineItemMapping {
    /**
     * Required. The line item ID.
     */
    lineItemId?: string | null;
    /**
     * The line item quantity in the shipment.
     */
    quantity?: string | null;
    /**
     * Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response.
     */
    shipmentId?: string | null;
  }
  /**
   * The shipping information for the order.
   */
  export interface Schema$OrderTrackingSignalShippingInfo {
    /**
     * The time when the shipment was actually delivered. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name.
     */
    actualDeliveryTime?: Schema$DateTime;
    /**
     * The name of the shipping carrier for the delivery. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time.
     */
    carrierName?: string | null;
    /**
     * The service type for fulfillment, e.g., GROUND, FIRST_CLASS, etc.
     */
    carrierServiceName?: string | null;
    /**
     * The earliest delivery promised time. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name.
     */
    earliestDeliveryPromiseTime?: Schema$DateTime;
    /**
     * The latest delivery promised time. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name.
     */
    latestDeliveryPromiseTime?: Schema$DateTime;
    /**
     * The origin postal code, as a continuous string without spaces or dashes, e.g. "95016". This field will be anonymized in returned OrderTrackingSignal creation response.
     */
    originPostalCode?: string | null;
    /**
     * The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping origin.
     */
    originRegionCode?: string | null;
    /**
     * Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response.
     */
    shipmentId?: string | null;
    /**
     * The time when the shipment was shipped. Include the year and timezone string, if available.
     */
    shippedTime?: Schema$DateTime;
    /**
     * The status of the shipment.
     */
    shippingStatus?: string | null;
    /**
     * The tracking ID of the shipment. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time.
     */
    trackingId?: string | null;
  }
  /**
   * Additional information required for PAYMENT_SERVICE_PROVIDER link type.
   */
  export interface Schema$PaymentServiceProviderLinkInfo {
    /**
     * The business country of the merchant account as identified by the third party service provider.
     */
    externalAccountBusinessCountry?: string | null;
    /**
     * The id used by the third party service provider to identify the merchant.
     */
    externalAccountId?: string | null;
  }
  export interface Schema$PickupCarrierService {
    /**
     * The name of the pickup carrier (for example, `"UPS"`). Required.
     */
    carrierName?: string | null;
    /**
     * The name of the pickup service (for example, `"Access point"`). Required.
     */
    serviceName?: string | null;
  }
  export interface Schema$PickupServicesPickupService {
    /**
     * The name of the carrier (for example, `"UPS"`). Always present.
     */
    carrierName?: string | null;
    /**
     * The CLDR country code of the carrier (for example, "US"). Always present.
     */
    country?: string | null;
    /**
     * The name of the pickup service (for example, `"Access point"`). Always present.
     */
    serviceName?: string | null;
  }
  export interface Schema$PosCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$PosCustomBatchRequestEntry[];
  }
  export interface Schema$PosCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * The inventory to submit. This should be set only if the method is `inventory`.
     */
    inventory?: Schema$PosInventory;
    /**
     * The ID of the POS data provider.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" - "`inventory`" - "`sale`"
     */
    method?: string | null;
    /**
     * The sale information to submit. This should be set only if the method is `sale`.
     */
    sale?: Schema$PosSale;
    /**
     * The store information to submit. This should be set only if the method is `insert`.
     */
    store?: Schema$PosStore;
    /**
     * The store code. This should be set only if the method is `delete` or `get`.
     */
    storeCode?: string | null;
    /**
     * The ID of the account for which to get/submit data.
     */
    targetMerchantId?: string | null;
  }
  export interface Schema$PosCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$PosCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$PosCustomBatchResponseEntry {
    /**
     * The ID of the request entry to which this entry responds.
     */
    batchId?: number | null;
    /**
     * A list of errors defined if, and only if, the request failed.
     */
    errors?: Schema$Errors;
    /**
     * The updated inventory information.
     */
    inventory?: Schema$PosInventory;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponseEntry`"
     */
    kind?: string | null;
    /**
     * The updated sale information.
     */
    sale?: Schema$PosSale;
    /**
     * The retrieved or updated store information.
     */
    store?: Schema$PosStore;
  }
  export interface Schema$PosDataProviders {
    /**
     * Country code.
     */
    country?: string | null;
    /**
     * A list of POS data providers.
     */
    posDataProviders?: Schema$PosDataProvidersPosDataProvider[];
  }
  export interface Schema$PosDataProvidersPosDataProvider {
    /**
     * The display name of Pos data Provider.
     */
    displayName?: string | null;
    /**
     * The full name of this POS data Provider.
     */
    fullName?: string | null;
    /**
     * The ID of the account.
     */
    providerId?: string | null;
  }
  /**
   * The absolute quantity of an item available at the given store.
   */
  export interface Schema$PosInventory {
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Global Trade Item Number.
     */
    gtin?: string | null;
    /**
     * Required. A unique identifier for the item.
     */
    itemId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#posInventory`"
     */
    kind?: string | null;
    /**
     * Optional. Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342).
     */
    pickupMethod?: string | null;
    /**
     * Optional. Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342).
     */
    pickupSla?: string | null;
    /**
     * Required. The current price of the item.
     */
    price?: Schema$Price;
    /**
     * Required. The available quantity of the item.
     */
    quantity?: string | null;
    /**
     * Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile.
     */
    storeCode?: string | null;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string | null;
    /**
     * Required. The inventory timestamp, in ISO 8601 format.
     */
    timestamp?: string | null;
  }
  export interface Schema$PosInventoryRequest {
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Global Trade Item Number.
     */
    gtin?: string | null;
    /**
     * Required. A unique identifier for the item.
     */
    itemId?: string | null;
    /**
     * Optional. Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342).
     */
    pickupMethod?: string | null;
    /**
     * Optional. Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342).
     */
    pickupSla?: string | null;
    /**
     * Required. The current price of the item.
     */
    price?: Schema$Price;
    /**
     * Required. The available quantity of the item.
     */
    quantity?: string | null;
    /**
     * Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile.
     */
    storeCode?: string | null;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string | null;
    /**
     * Required. The inventory timestamp, in ISO 8601 format.
     */
    timestamp?: string | null;
  }
  export interface Schema$PosInventoryResponse {
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Global Trade Item Number.
     */
    gtin?: string | null;
    /**
     * Required. A unique identifier for the item.
     */
    itemId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#posInventoryResponse`".
     */
    kind?: string | null;
    /**
     * Optional. Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342).
     */
    pickupMethod?: string | null;
    /**
     * Optional. Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342).
     */
    pickupSla?: string | null;
    /**
     * Required. The current price of the item.
     */
    price?: Schema$Price;
    /**
     * Required. The available quantity of the item.
     */
    quantity?: string | null;
    /**
     * Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile.
     */
    storeCode?: string | null;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string | null;
    /**
     * Required. The inventory timestamp, in ISO 8601 format.
     */
    timestamp?: string | null;
  }
  export interface Schema$PosListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#posListResponse`".
     */
    kind?: string | null;
    resources?: Schema$PosStore[];
  }
  /**
   * The change of the available quantity of an item at the given store.
   */
  export interface Schema$PosSale {
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Global Trade Item Number.
     */
    gtin?: string | null;
    /**
     * Required. A unique identifier for the item.
     */
    itemId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#posSale`"
     */
    kind?: string | null;
    /**
     * Required. The price of the item.
     */
    price?: Schema$Price;
    /**
     * Required. The relative change of the available quantity. Negative for items returned.
     */
    quantity?: string | null;
    /**
     * A unique ID to group items from the same sale event.
     */
    saleId?: string | null;
    /**
     * Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile.
     */
    storeCode?: string | null;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string | null;
    /**
     * Required. The inventory timestamp, in ISO 8601 format.
     */
    timestamp?: string | null;
  }
  export interface Schema$PosSaleRequest {
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Global Trade Item Number.
     */
    gtin?: string | null;
    /**
     * Required. A unique identifier for the item.
     */
    itemId?: string | null;
    /**
     * Required. The price of the item.
     */
    price?: Schema$Price;
    /**
     * Required. The relative change of the available quantity. Negative for items returned.
     */
    quantity?: string | null;
    /**
     * A unique ID to group items from the same sale event.
     */
    saleId?: string | null;
    /**
     * Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile.
     */
    storeCode?: string | null;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string | null;
    /**
     * Required. The inventory timestamp, in ISO 8601 format.
     */
    timestamp?: string | null;
  }
  export interface Schema$PosSaleResponse {
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Global Trade Item Number.
     */
    gtin?: string | null;
    /**
     * Required. A unique identifier for the item.
     */
    itemId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#posSaleResponse`".
     */
    kind?: string | null;
    /**
     * Required. The price of the item.
     */
    price?: Schema$Price;
    /**
     * Required. The relative change of the available quantity. Negative for items returned.
     */
    quantity?: string | null;
    /**
     * A unique ID to group items from the same sale event.
     */
    saleId?: string | null;
    /**
     * Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile.
     */
    storeCode?: string | null;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string | null;
    /**
     * Required. The inventory timestamp, in ISO 8601 format.
     */
    timestamp?: string | null;
  }
  /**
   * Store resource.
   */
  export interface Schema$PosStore {
    /**
     * The business type of the store.
     */
    gcidCategory?: string[] | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#posStore`"
     */
    kind?: string | null;
    /**
     * Output only. The matching status of POS store and Google Business Profile store. Possible values are: - "`matched`": The POS store is successfully matched with the Google Business Profile store. - "`failed`": The POS store is not matched with the Google Business Profile store. See matching_status_hint for further details. Note that there is up to 48 hours propagation delay for changes in Merchant Center (e.g. creation of new account, accounts linking) and Google Business Profile (e.g. store address update) which may affect the matching status. In such cases, after a delay call [pos.list](https://developers.google.com/shopping-content/reference/rest/v2.1/pos/list) to retrieve the updated matching status.
     */
    matchingStatus?: string | null;
    /**
     * Output only. The hint of why the matching has failed. This is only set when matching_status=failed. Possible values are: - "`linked-store-not-found`": There aren't any Google Business Profile stores available for matching. Connect your Merchant Center account with the Google Business Profile account. Or add a new Google Business Profile store corresponding to the POS store. - "`store-match-not-found`": The provided POS store couldn't be matched to any of the connected Google Business Profile stores. Merchant Center account is connected correctly and stores are available on Google Business Profile, but POS store location address does not match with Google Business Profile stores' addresses. Update POS store address or Google Business Profile store address to match correctly. - "`store-match-unverified`": The provided POS store couldn't be matched to any of the connected Google Business Profile stores, as the matched Google Business Profile store is unverified. Go through the Google Business Profile verification process to match correctly.
     */
    matchingStatusHint?: string | null;
    /**
     * The store phone number.
     */
    phoneNumber?: string | null;
    /**
     * The Google Place Id of the store location.
     */
    placeId?: string | null;
    /**
     * Required. The street address of the store.
     */
    storeAddress?: string | null;
    /**
     * Required. A store identifier that is unique for the given merchant.
     */
    storeCode?: string | null;
    /**
     * The merchant or store name.
     */
    storeName?: string | null;
    /**
     * The website url for the store or merchant.
     */
    websiteUrl?: string | null;
  }
  export interface Schema$PostalCodeGroup {
    /**
     * The CLDR territory code of the country the postal code group applies to. Required.
     */
    country?: string | null;
    /**
     * The name of the postal code group, referred to in headers. Required.
     */
    name?: string | null;
    /**
     * A range of postal codes. Required.
     */
    postalCodeRanges?: Schema$PostalCodeRange[];
  }
  export interface Schema$PostalCodeRange {
    /**
     * A postal code or a pattern of the form `prefix*` denoting the inclusive lower bound of the range defining the area. Examples values: `"94108"`, `"9410*"`, `"9*"`. Required.
     */
    postalCodeRangeBegin?: string | null;
    /**
     * A postal code or a pattern of the form `prefix*` denoting the inclusive upper bound of the range defining the area. It must have the same length as `postalCodeRangeBegin`: if `postalCodeRangeBegin` is a postal code then `postalCodeRangeEnd` must be a postal code too; if `postalCodeRangeBegin` is a pattern then `postalCodeRangeEnd` must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching `postalCodeRangeBegin`.
     */
    postalCodeRangeEnd?: string | null;
  }
  export interface Schema$Price {
    /**
     * The currency of the price.
     */
    currency?: string | null;
    /**
     * The price represented as a number.
     */
    value?: string | null;
  }
  /**
   * The price represented as a number and currency.
   */
  export interface Schema$PriceAmount {
    /**
     * The currency of the price.
     */
    currency?: string | null;
    /**
     * The price represented as a number.
     */
    value?: string | null;
  }
  /**
   * Price competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`. https://support.google.com/merchants/answer/9626903
   */
  export interface Schema$PriceCompetitiveness {
    /**
     * The price benchmark currency (ISO 4217 code).
     */
    benchmarkPriceCurrencyCode?: string | null;
    /**
     * The latest available price benchmark in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) for the product's catalog in the benchmark country.
     */
    benchmarkPriceMicros?: string | null;
    /**
     * The country of the price benchmark (ISO 3166 code).
     */
    countryCode?: string | null;
  }
  /**
   * Price insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926
   */
  export interface Schema$PriceInsights {
    /**
     * The predicted effectiveness of applying the price suggestion, bucketed.
     */
    effectiveness?: string | null;
    /**
     * The predicted change in clicks as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in clicks.
     */
    predictedClicksChangeFraction?: number | null;
    /**
     * The predicted change in conversions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in conversions).
     */
    predictedConversionsChangeFraction?: number | null;
    /**
     * *Deprecated*: This field is no longer supported and will start returning 0. The predicted change in gross profit as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in gross profit.
     */
    predictedGrossProfitChangeFraction?: number | null;
    /**
     * The predicted change in impressions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in impressions.
     */
    predictedImpressionsChangeFraction?: number | null;
    /**
     * *Deprecated*: This field is no longer supported and will start returning USD for all requests. The predicted monthly gross profit change currency (ISO 4217 code).
     */
    predictedMonthlyGrossProfitChangeCurrencyCode?: string | null;
    /**
     * *Deprecated*: This field is no longer supported and will start returning 0. The predicted change in gross profit in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) after introducing the suggested price for a month compared to current active price.
     */
    predictedMonthlyGrossProfitChangeMicros?: string | null;
    /**
     * The suggested price currency (ISO 4217 code).
     */
    suggestedPriceCurrencyCode?: string | null;
    /**
     * The latest suggested price in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) for the product.
     */
    suggestedPriceMicros?: string | null;
  }
  /**
   *  Required product attributes are primarily defined by the product data specification. See the Product Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
   */
  export interface Schema$Product {
    /**
     * Additional URLs of images of the item.
     */
    additionalImageLinks?: string[] | null;
    /**
     * Additional cut of the item. Used together with size_type to represent combined size types for apparel items.
     */
    additionalSizeType?: string | null;
    /**
     * Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise.
     */
    adsGrouping?: string | null;
    /**
     * Similar to ads_grouping, but only works on CPC.
     */
    adsLabels?: string[] | null;
    /**
     * Allows advertisers to override the item URL when the product is shown within the context of Product Ads.
     */
    adsRedirect?: string | null;
    /**
     * Should be set to true if the item is targeted towards adults.
     */
    adult?: boolean | null;
    /**
     * Target age group of the item.
     */
    ageGroup?: string | null;
    /**
     * A safeguard in the [Automated Discounts](//support.google.com/merchants/answer/10295759) and [Dynamic Promotions](//support.google.com/merchants/answer/13949249) projects, ensuring that discounts on merchants' offers do not fall below this value, thereby preserving the offer's value and profitability.
     */
    autoPricingMinPrice?: Schema$Price;
    /**
     * Availability status of the item.
     */
    availability?: string | null;
    /**
     * The day a pre-ordered product becomes available for delivery, in ISO 8601 format.
     */
    availabilityDate?: string | null;
    /**
     * Brand of the item.
     */
    brand?: string | null;
    /**
     * URL for the canonical version of your item's landing page.
     */
    canonicalLink?: string | null;
    /**
     * Product [certification](https://support.google.com/merchants/answer/13528839), introduced for EU energy efficiency labeling compliance using the [EU EPREL](https://eprel.ec.europa.eu/screen/home) database.
     */
    certifications?: Schema$ProductCertification[];
    /**
     * Required. The item's channel (online or local). Acceptable values are: - "`local`" - "`online`"
     */
    channel?: string | null;
    /**
     * Extra fields to export to the Cloud Retail program.
     */
    cloudExportAdditionalProperties?: Schema$CloudExportAdditionalProperties[];
    /**
     * Color of the item.
     */
    color?: string | null;
    /**
     * Condition or state of the item.
     */
    condition?: string | null;
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string | null;
    /**
     * Cost of goods sold. Used for gross profit reporting.
     */
    costOfGoodsSold?: Schema$Price;
    /**
     * A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (for example, `{ "name": "size type", "value": "regular" \}`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google (formerly known as Shopping Actions).
     */
    customAttributes?: Schema$CustomAttribute[];
    /**
     * Custom label 0 for custom grouping of items in a Shopping campaign.
     */
    customLabel0?: string | null;
    /**
     * Custom label 1 for custom grouping of items in a Shopping campaign.
     */
    customLabel1?: string | null;
    /**
     * Custom label 2 for custom grouping of items in a Shopping campaign.
     */
    customLabel2?: string | null;
    /**
     * Custom label 3 for custom grouping of items in a Shopping campaign.
     */
    customLabel3?: string | null;
    /**
     * Custom label 4 for custom grouping of items in a Shopping campaign.
     */
    customLabel4?: string | null;
    /**
     * Description of the item.
     */
    description?: string | null;
    /**
     * The date time when an offer becomes visible in search results across Google’s YouTube surfaces, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. See [Disclosure date](https://support.google.com/merchants/answer/13034208) for more information.
     */
    disclosureDate?: string | null;
    /**
     * An identifier for an item for dynamic remarketing campaigns.
     */
    displayAdsId?: string | null;
    /**
     * URL directly to your item's landing page for dynamic remarketing campaigns.
     */
    displayAdsLink?: string | null;
    /**
     * Advertiser-specified recommendations.
     */
    displayAdsSimilarIds?: string[] | null;
    /**
     * Title of an item for dynamic remarketing campaigns.
     */
    displayAdsTitle?: string | null;
    /**
     * Offer margin for dynamic remarketing campaigns.
     */
    displayAdsValue?: number | null;
    /**
     * The energy efficiency class as defined in EU directive 2010/30/EU.
     */
    energyEfficiencyClass?: string | null;
    /**
     * The list of [destinations to exclude](//support.google.com/merchants/answer/6324486) for this target (corresponds to cleared check boxes in Merchant Center). Products that are excluded from all destinations for more than 7 days are automatically deleted.
     */
    excludedDestinations?: string[] | null;
    /**
     * Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is too far in the future.
     */
    expirationDate?: string | null;
    /**
     * Required for multi-seller accounts. Use this attribute if you're a marketplace uploading products for various sellers to your multi-seller account.
     */
    externalSellerId?: string | null;
    /**
     * Feed label for the item. Either `targetCountry` or `feedLabel` is required. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-).
     */
    feedLabel?: string | null;
    /**
     * Optional. Conditions to be met for a product to have free shipping.
     */
    freeShippingThreshold?: Schema$FreeShippingThreshold[];
    /**
     * Target gender of the item.
     */
    gender?: string | null;
    /**
     * Google's category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When querying products, this field will contain the user provided value. There is currently no way to get back the auto assigned google product categories through the API.
     */
    googleProductCategory?: string | null;
    /**
     * Global Trade Item Number (GTIN) of the item.
     */
    gtin?: string | null;
    /**
     * The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter. The REST ID for a product has one of the 2 forms channel:contentLanguage: targetCountry: offerId or channel:contentLanguage:feedLabel: offerId.
     */
    id?: string | null;
    /**
     * False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada.
     */
    identifierExists?: boolean | null;
    /**
     * URL of an image of the item.
     */
    imageLink?: string | null;
    /**
     * The list of [destinations to include](//support.google.com/merchants/answer/7501026) for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`.
     */
    includedDestinations?: string[] | null;
    /**
     * Number and amount of installments to pay for an item.
     */
    installment?: Schema$Installment;
    /**
     * Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price.
     */
    isBundle?: boolean | null;
    /**
     * Shared identifier for all variants of the same product.
     */
    itemGroupId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#product`"
     */
    kind?: string | null;
    /**
     * Additional URLs of lifestyle images of the item. Used to explicitly identify images that showcase your item in a real-world context. See the Help Center article for more information.
     */
    lifestyleImageLinks?: string[] | null;
    /**
     * URL directly linking to your item's page on your website.
     */
    link?: string | null;
    /**
     * URL template for merchant hosted local storefront.
     */
    linkTemplate?: string | null;
    /**
     * Loyalty program information that is used to surface loyalty benefits ( for example, better pricing, points, etc) to the user of this item. This signular field points to the latest uploaded loyalty program info. This field will be deprecated in the coming weeks and should not be used in favor of the plural 'LoyaltyProgram' field below.
     */
    loyaltyProgram?: Schema$LoyaltyProgram;
    /**
     * Optional. A list of loyalty program information that is used to surface loyalty benefits (for example, better pricing, points, etc) to the user of this item.
     */
    loyaltyPrograms?: Schema$LoyaltyProgram[];
    /**
     * The material of which the item is made.
     */
    material?: string | null;
    /**
     * The energy efficiency class as defined in EU directive 2010/30/EU.
     */
    maxEnergyEfficiencyClass?: string | null;
    /**
     * Maximal product handling time (in business days).
     */
    maxHandlingTime?: string | null;
    /**
     * The energy efficiency class as defined in EU directive 2010/30/EU.
     */
    minEnergyEfficiencyClass?: string | null;
    /**
     * Minimal product handling time (in business days).
     */
    minHandlingTime?: string | null;
    /**
     * URL for the mobile-optimized version of your item's landing page.
     */
    mobileLink?: string | null;
    /**
     * URL template for merchant hosted local storefront optimized for mobile devices.
     */
    mobileLinkTemplate?: string | null;
    /**
     * Manufacturer Part Number (MPN) of the item.
     */
    mpn?: string | null;
    /**
     * The number of identical products in a merchant-defined multipack.
     */
    multipack?: string | null;
    /**
     * Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details. *Note:* Content API methods that operate on products take the REST ID of the product, *not* this identifier.
     */
    offerId?: string | null;
    /**
     * The item's pattern (for example, polka dots).
     */
    pattern?: string | null;
    /**
     * Publication of this item should be temporarily paused. Acceptable values are: - "`ads`"
     */
    pause?: string | null;
    /**
     * The pick up option for the item. Acceptable values are: - "`buy`" - "`reserve`" - "`ship to store`" - "`not supported`"
     */
    pickupMethod?: string | null;
    /**
     * Item store pickup timeline. Acceptable values are: - "`same day`" - "`next day`" - "`2-day`" - "`3-day`" - "`4-day`" - "`5-day`" - "`6-day`" - "`7-day`" - "`multi-week`"
     */
    pickupSla?: string | null;
    /**
     * Price of the item.
     */
    price?: Schema$Price;
    /**
     * Technical specification or additional product details.
     */
    productDetails?: Schema$ProductProductDetail[];
    /**
     * The height of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive).
     */
    productHeight?: Schema$ProductDimension;
    /**
     * Bullet points describing the most relevant highlights of a product.
     */
    productHighlights?: string[] | null;
    /**
     * The length of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive).
     */
    productLength?: Schema$ProductDimension;
    /**
     * Categories of the item (formatted as in product data specification).
     */
    productTypes?: string[] | null;
    /**
     * The weight of the product in the units provided. The value must be between 0 (exclusive) and 2000 (inclusive).
     */
    productWeight?: Schema$ProductWeight;
    /**
     * The width of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive).
     */
    productWidth?: Schema$ProductDimension;
    /**
     * The unique ID of a promotion.
     */
    promotionIds?: string[] | null;
    /**
     * Advertised sale price of the item.
     */
    salePrice?: Schema$Price;
    /**
     * Date range during which the item is on sale (see product data specification ).
     */
    salePriceEffectiveDate?: string | null;
    /**
     * The quantity of the product that is available for selling on Google. Supported only for online products.
     */
    sellOnGoogleQuantity?: string | null;
    /**
     * Shipping rules.
     */
    shipping?: Schema$ProductShipping[];
    /**
     * Height of the item for shipping.
     */
    shippingHeight?: Schema$ProductShippingDimension;
    /**
     * The shipping label of the product, used to group product in account-level shipping rules.
     */
    shippingLabel?: string | null;
    /**
     * Length of the item for shipping.
     */
    shippingLength?: Schema$ProductShippingDimension;
    /**
     * Weight of the item for shipping.
     */
    shippingWeight?: Schema$ProductShippingWeight;
    /**
     * Width of the item for shipping.
     */
    shippingWidth?: Schema$ProductShippingDimension;
    /**
     * List of country codes (ISO 3166-1 alpha-2) to exclude the offer from Shopping Ads destination. Countries from this list are removed from countries configured in MC feed settings.
     */
    shoppingAdsExcludedCountries?: string[] | null;
    /**
     * Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value (see size definition).
     */
    sizes?: string[] | null;
    /**
     * System in which the size is specified. Recommended for apparel items.
     */
    sizeSystem?: string | null;
    /**
     * The cut of the item. Recommended for apparel items.
     */
    sizeType?: string | null;
    /**
     * Output only. The source of the offer, that is, how the offer was created. Acceptable values are: - "`api`" - "`crawl`" - "`feed`"
     */
    source?: string | null;
    /**
     * Structured description, for algorithmically (AI)-generated descriptions.
     */
    structuredDescription?: Schema$ProductStructuredDescription;
    /**
     * Structured title, for algorithmically (AI)-generated titles.
     */
    structuredTitle?: Schema$ProductStructuredTitle;
    /**
     * Number of periods (months or years) and amount of payment per period for an item with an associated subscription contract.
     */
    subscriptionCost?: Schema$ProductSubscriptionCost;
    /**
     * Required. The CLDR territory code for the item's country of sale.
     */
    targetCountry?: string | null;
    /**
     * The tax category of the product, used to configure detailed tax nexus in account-level tax settings.
     */
    taxCategory?: string | null;
    /**
     * Tax information.
     */
    taxes?: Schema$ProductTax[];
    /**
     * Title of the item.
     */
    title?: string | null;
    /**
     * The transit time label of the product, used to group product in account-level transit time tables.
     */
    transitTimeLabel?: string | null;
    /**
     * The preference of the denominator of the unit price.
     */
    unitPricingBaseMeasure?: Schema$ProductUnitPricingBaseMeasure;
    /**
     * The measure and dimension of an item.
     */
    unitPricingMeasure?: Schema$ProductUnitPricingMeasure;
    /**
     * URL of the 3D model of the item to provide more visuals.
     */
    virtualModelLink?: string | null;
  }
  /**
   * Product [certification](https://support.google.com/merchants/answer/13528839), introduced for EU energy efficiency labeling compliance using the [EU EPREL](https://eprel.ec.europa.eu/screen/home) database.
   */
  export interface Schema$ProductCertification {
    /**
     * The certification authority, for example "European_Commission". Maximum length is 2000 characters.
     */
    certificationAuthority?: string | null;
    /**
     * The certification code, for eaxample "123456". Maximum length is 2000 characters.
     */
    certificationCode?: string | null;
    /**
     * The name of the certification, for example "EPREL". Maximum length is 2000 characters.
     */
    certificationName?: string | null;
    /**
     * The certification value (also known as class, level or grade), for example "A+", "C", "gold". Maximum length is 2000 characters.
     */
    certificationValue?: string | null;
  }
  /**
   * Product cluster fields. A product cluster is a grouping for different offers that represent the same product. Values are only set for fields requested explicitly in the request's search query.
   */
  export interface Schema$ProductCluster {
    /**
     * Brand of the product cluster.
     */
    brand?: string | null;
    /**
     * Tells if there is at least one product of the brand currently `IN_STOCK` in your product feed across multiple countries, all products are `OUT_OF_STOCK` in your product feed, or `NOT_IN_INVENTORY`. The field doesn't take the Best Sellers report country filter into account.
     */
    brandInventoryStatus?: string | null;
    /**
     * Product category (1st level) of the product cluster, represented in Google's product taxonomy.
     */
    categoryL1?: string | null;
    /**
     * Product category (2nd level) of the product cluster, represented in Google's product taxonomy.
     */
    categoryL2?: string | null;
    /**
     * Product category (3rd level) of the product cluster, represented in Google's product taxonomy.
     */
    categoryL3?: string | null;
    /**
     * Product category (4th level) of the product cluster, represented in Google's product taxonomy.
     */
    categoryL4?: string | null;
    /**
     * Product category (5th level) of the product cluster, represented in Google's product taxonomy.
     */
    categoryL5?: string | null;
    /**
     * Tells whether the product cluster is `IN_STOCK` in your product feed across multiple countries, `OUT_OF_STOCK` in your product feed, or `NOT_IN_INVENTORY` at all. The field doesn't take the Best Sellers report country filter into account.
     */
    inventoryStatus?: string | null;
    /**
     * Title of the product cluster.
     */
    title?: string | null;
    /**
     * GTINs of example variants of the product cluster.
     */
    variantGtins?: string[] | null;
  }
  /**
   * The estimated days to deliver a product after an order is placed. Only authorized shipping signals partners working with a merchant can use this resource. Merchants should use the [`products`](https://developers.google.com/shopping-content/reference/rest/v2.1/products#productshipping) resource instead.
   */
  export interface Schema$ProductDeliveryTime {
    /**
     * Required. A set of associations between `DeliveryArea` and `DeliveryTime` entries. The total number of `areaDeliveryTimes` can be at most 100.
     */
    areaDeliveryTimes?: Schema$ProductDeliveryTimeAreaDeliveryTime[];
    /**
     * Required. The `id` of the product.
     */
    productId?: Schema$ProductId;
  }
  /**
   * A pairing of `DeliveryArea` associated with a `DeliveryTime` for this product.
   */
  export interface Schema$ProductDeliveryTimeAreaDeliveryTime {
    /**
     * Required. The delivery area associated with `deliveryTime` for this product.
     */
    deliveryArea?: Schema$DeliveryArea;
    /**
     * Required. The delivery time associated with `deliveryArea` for this product.
     */
    deliveryTime?: Schema$ProductDeliveryTimeAreaDeliveryTimeDeliveryTime;
  }
  /**
   * A delivery time for this product.
   */
  export interface Schema$ProductDeliveryTimeAreaDeliveryTimeDeliveryTime {
    /**
     * Required. The maximum number of business days (inclusive) between when an order is placed and when the product ships. If a product ships in the same day, set this value to 0.
     */
    maxHandlingTimeDays?: number | null;
    /**
     * Required. The maximum number of business days (inclusive) between when the product ships and when the product is delivered.
     */
    maxTransitTimeDays?: number | null;
    /**
     * Required. The minimum number of business days (inclusive) between when an order is placed and when the product ships. If a product ships in the same day, set this value to 0.
     */
    minHandlingTimeDays?: number | null;
    /**
     * Required. The minimum number of business days (inclusive) between when the product ships and when the product is delivered.
     */
    minTransitTimeDays?: number | null;
  }
  export interface Schema$ProductDimension {
    /**
     * Required. The length units. Acceptable values are: - "`in`" - "`cm`"
     */
    unit?: string | null;
    /**
     * Required. The length value represented as a number. The value can have a maximum precision of four decimal places.
     */
    value?: number | null;
  }
  /**
   * The Content API ID of the product.
   */
  export interface Schema$ProductId {
    /**
     * The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`.
     */
    productId?: string | null;
  }
  /**
   * An issue affecting specific product.
   */
  export interface Schema$ProductIssue {
    /**
     * A list of actionable steps that can be executed to solve the issue. An example is requesting a re-review or providing arguments when merchant disagrees with the issue. Actions that are supported in (your) third-party application can be rendered as buttons and should be available to merchant when they expand the issue.
     */
    actions?: Schema$Action[];
    /**
     * Clarifies the severity of the issue. The summarizing message, if present, should be shown right under the title for each issue. It helps merchants to quickly understand the impact of the issue. The detailed breakdown helps the merchant to fully understand the impact of the issue. It can be rendered as dialog that opens when the merchant mouse over the summarized impact statement. Issues with different severity can be styled differently. They may use a different color or icon to signal the difference between `ERROR`, `WARNING` and `INFO`.
     */
    impact?: Schema$ProductIssueImpact;
    /**
     * Details of the issue as a pre-rendered HTML. HTML elements contain CSS classes that can be used to customize the style of the content. Always sanitize the HTML before embedding it directly to your application. The sanitizer needs to allow basic HTML tags, such as: `div`, `span`, `p`, `a`, `ul`, `li`, `table`, `tr`, `td`. For example, you can use [DOMPurify](https://www.npmjs.com/package/dompurify). CSS classes: * `issue-detail` - top level container for the detail of the issue * `callout-banners` - section of the `issue-detail` with callout banners * `callout-banner` - single callout banner, inside `callout-banners` * `callout-banner-info` - callout with important information (default) * `callout-banner-warning` - callout with a warning * `callout-banner-error` - callout informing about an error (most severe) * `issue-content` - section of the `issue-detail`, contains multiple `content-element` * `content-element` - content element such as a list, link or paragraph, inside `issue-content` * `root-causes` - unordered list with items describing root causes of the issue, inside `issue-content` * `root-causes-intro` - intro text before the `root-causes` list, inside `issue-content` * `segment` - section of the text, `span` inside paragraph * `segment-attribute` - section of the text that represents a product attribute, for example 'image\_link' * `segment-literal` - section of the text that contains a special value, for example '0-1000 kg' * `segment-bold` - section of the text that should be rendered as bold * `segment-italic` - section of the text that should be rendered as italic * `tooltip` - used on paragraphs that should be rendered with a tooltip. A section of the text in such a paragraph will have a class `tooltip-text` and is intended to be shown in a mouse over dialog. If the style is not used, the `tooltip-text` section would be shown on a new line, after the main part of the text. * `tooltip-text` - marks a section of the text within a `tooltip`, that is intended to be shown in a mouse over dialog. * `tooltip-icon` - marks a section of the text within a `tooltip`, that can be replaced with a tooltip icon, for example '?' or 'i'. By default, this section contains a `br` tag, that is separating the main text and the tooltip text when the style is not used. * `tooltip-style-question` - the tooltip shows helpful information, can use the '?' as an icon. * `tooltip-style-info` - the tooltip adds additional information fitting to the context, can use the 'i' as an icon. * `content-moderation` - marks the paragraph that explains how the issue was identified. * `list-intro` - marks the paragraph that contains an intro for a list. This paragraph will be always followed by a list. * `new-element` - Present for new elements added to the pre-rendered content in the future. To make sure that a new content element does not break your style, you can hide everything with this class.
     */
    prerenderedContent?: string | null;
    /**
     * Title of the issue.
     */
    title?: string | null;
  }
  /**
   * Overall impact of product issue.
   */
  export interface Schema$ProductIssueImpact {
    /**
     * Detailed impact breakdown. Explains the types of restriction the issue has in different shopping destinations and territory. If present, it should be rendered to the merchant. Can be shown as a mouse over dropdown or a dialog. Each breakdown item represents a group of regions with the same impact details.
     */
    breakdowns?: Schema$Breakdown[];
    /**
     * Optional. Message summarizing the overall impact of the issue. If present, it should be rendered to the merchant. For example: "Limits visibility in France"
     */
    message?: string | null;
    /**
     * The severity of the issue.
     */
    severity?: string | null;
  }
  export interface Schema$ProductProductDetail {
    /**
     * The name of the product detail.
     */
    attributeName?: string | null;
    /**
     * The value of the product detail.
     */
    attributeValue?: string | null;
    /**
     * The section header used to group a set of product details.
     */
    sectionName?: string | null;
  }
  export interface Schema$ProductsCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$ProductsCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch products request.
   */
  export interface Schema$ProductsCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * The Content API Supplemental Feed ID. If present then product insertion or deletion applies to a supplemental feed instead of primary Content API feed.
     */
    feedId?: string | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" - "`update`"
     */
    method?: string | null;
    /**
     * The product to insert or update. Only required if the method is `insert` or `update`. If the `update` method is used with `updateMask` only to delete a field, then this isn't required. For example, setting `salePrice` on the `updateMask` and not providing a `product` will result in an existing sale price on the product specified by `productId` being deleted.
     */
    product?: Schema$Product;
    /**
     * The ID of the product to get or mutate. Only defined if the method is `get`, `delete`, or `update`.
     */
    productId?: string | null;
    /**
     * The comma-separated list of product attributes to be updated. Example: `"title,salePrice"`. Attributes specified in the update mask without a value specified in the body will be deleted from the product. *You must specify the update mask to delete attributes.* Only top-level product attributes can be updated. If not defined, product attributes with set values will be updated and other attributes will stay unchanged. Only defined if the method is `update`.
     */
    updateMask?: string | null;
  }
  export interface Schema$ProductsCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$ProductsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponse`".
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch products response.
   */
  export interface Schema$ProductsCustomBatchResponseEntry {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponseEntry`"
     */
    kind?: string | null;
    /**
     * The inserted product. Only defined if the method is `insert` and if the request was successful.
     */
    product?: Schema$Product;
  }
  export interface Schema$ProductShipping {
    /**
     * The CLDR territory code of the country to which an item will ship.
     */
    country?: string | null;
    /**
     * The location where the shipping is applicable, represented by a location group name.
     */
    locationGroupName?: string | null;
    /**
     * The numeric ID of a location that the shipping rate applies to as defined in the Google Ads API.
     */
    locationId?: string | null;
    /**
     * Maximum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it's received if it happens before the cut-off time. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds.
     */
    maxHandlingTime?: string | null;
    /**
     * Maximum transit time (inclusive) between when the order has shipped and when it's delivered in business days. 0 means that the order is delivered on the same day as it ships. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds.
     */
    maxTransitTime?: string | null;
    /**
     * Minimum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it's received if it happens before the cut-off time. minHandlingTime can only be present together with maxHandlingTime; but it's not required if maxHandlingTime is present.
     */
    minHandlingTime?: string | null;
    /**
     * Minimum transit time (inclusive) between when the order has shipped and when it's delivered in business days. 0 means that the order is delivered on the same day as it ships. minTransitTime can only be present together with maxTransitTime; but it's not required if maxTransitTime is present.
     */
    minTransitTime?: string | null;
    /**
     * The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a * wildcard, a range between two postal codes or two postal code prefixes of equal length.
     */
    postalCode?: string | null;
    /**
     * Fixed shipping price, represented as a number.
     */
    price?: Schema$Price;
    /**
     * The geographic region to which a shipping rate applies.
     */
    region?: string | null;
    /**
     * A free-form description of the service class or delivery speed.
     */
    service?: string | null;
  }
  export interface Schema$ProductShippingDimension {
    /**
     * The unit of value.
     */
    unit?: string | null;
    /**
     * The dimension of the product used to calculate the shipping cost of the item.
     */
    value?: number | null;
  }
  export interface Schema$ProductShippingWeight {
    /**
     * The unit of value.
     */
    unit?: string | null;
    /**
     * The weight of the product used to calculate the shipping cost of the item.
     */
    value?: number | null;
  }
  export interface Schema$ProductsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#productsListResponse`".
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of products.
     */
    nextPageToken?: string | null;
    resources?: Schema$Product[];
  }
  /**
   * The status of a product, that is, information about a product computed asynchronously.
   */
  export interface Schema$ProductStatus {
    /**
     * Date on which the item has been created, in ISO 8601 format.
     */
    creationDate?: string | null;
    /**
     * The intended destinations for the product.
     */
    destinationStatuses?: Schema$ProductStatusDestinationStatus[];
    /**
     * Date on which the item expires in Google Shopping, in ISO 8601 format.
     */
    googleExpirationDate?: string | null;
    /**
     * A list of all issues associated with the product.
     */
    itemLevelIssues?: Schema$ProductStatusItemLevelIssue[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#productStatus`"
     */
    kind?: string | null;
    /**
     * Date on which the item has been last updated, in ISO 8601 format.
     */
    lastUpdateDate?: string | null;
    /**
     * The link to the product.
     */
    link?: string | null;
    /**
     * The ID of the product for which status is reported.
     */
    productId?: string | null;
    /**
     * The title of the product.
     */
    title?: string | null;
  }
  export interface Schema$ProductStatusDestinationStatus {
    /**
     * List of country codes (ISO 3166-1 alpha-2) where the offer is approved.
     */
    approvedCountries?: string[] | null;
    /**
     * The name of the destination
     */
    destination?: string | null;
    /**
     * List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved.
     */
    disapprovedCountries?: string[] | null;
    /**
     * List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval.
     */
    pendingCountries?: string[] | null;
    /**
     * Deprecated. Destination approval status in `targetCountry` of the offer.
     */
    status?: string | null;
  }
  export interface Schema$ProductstatusesCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$ProductstatusesCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch productstatuses request.
   */
  export interface Schema$ProductstatusesCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     */
    destinations?: string[] | null;
    /**
     * Deprecated: Setting this field has no effect and attributes are never included.
     */
    includeAttributes?: boolean | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry. Acceptable values are: - "`get`"
     */
    method?: string | null;
    /**
     * The ID of the product whose status to get.
     */
    productId?: string | null;
  }
  export interface Schema$ProductstatusesCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$ProductstatusesCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponse`".
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch productstatuses response.
   */
  export interface Schema$ProductstatusesCustomBatchResponseEntry {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponseEntry`"
     */
    kind?: string | null;
    /**
     * The requested product status. Only defined if the request was successful.
     */
    productStatus?: Schema$ProductStatus;
  }
  export interface Schema$ProductstatusesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesListResponse`".
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of products statuses.
     */
    nextPageToken?: string | null;
    resources?: Schema$ProductStatus[];
  }
  export interface Schema$ProductStatusItemLevelIssue {
    /**
     * List of country codes (ISO 3166-1 alpha-2) where issue applies to the offer.
     */
    applicableCountries?: string[] | null;
    /**
     * The attribute's name, if the issue is caused by a single attribute.
     */
    attributeName?: string | null;
    /**
     * The error code of the issue.
     */
    code?: string | null;
    /**
     * A short issue description in English.
     */
    description?: string | null;
    /**
     * The destination the issue applies to.
     */
    destination?: string | null;
    /**
     * A detailed issue description in English.
     */
    detail?: string | null;
    /**
     * The URL of a web page to help with resolving this issue.
     */
    documentation?: string | null;
    /**
     * Whether the issue can be resolved by the merchant.
     */
    resolution?: string | null;
    /**
     * How this issue affects serving of the offer.
     */
    servability?: string | null;
  }
  /**
   * Structured description, for algorithmically (AI)-generated descriptions. See [description](https://support.google.com/merchants/answer/6324468#When_to_use) for more information.
   */
  export interface Schema$ProductStructuredDescription {
    /**
     * Required. The description text. Maximum length is 5000 characters.
     */
    content?: string | null;
    /**
     * Optional. The digital source type. Acceptable values are: - "`trained_algorithmic_media`" - "`default`"
     */
    digitalSourceType?: string | null;
  }
  /**
   * Structured title, for algorithmically (AI)-generated titles. See [title](https://support.google.com/merchants/answer/6324415#Whentouse) for more information.
   */
  export interface Schema$ProductStructuredTitle {
    /**
     * Required. The title text. Maximum length is 150 characters.
     */
    content?: string | null;
    /**
     * Optional. The digital source type. Acceptable values are: - "`trained_algorithmic_media`" - "`default`"
     */
    digitalSourceType?: string | null;
  }
  export interface Schema$ProductSubscriptionCost {
    /**
     * The amount the buyer has to pay per subscription period.
     */
    amount?: Schema$Price;
    /**
     * The type of subscription period. - "`month`" - "`year`"
     */
    period?: string | null;
    /**
     * The number of subscription periods the buyer has to pay.
     */
    periodLength?: string | null;
  }
  export interface Schema$ProductTax {
    /**
     * The country within which the item is taxed, specified as a CLDR territory code.
     */
    country?: string | null;
    /**
     * The numeric ID of a location that the tax rate applies to as defined in the Google Ads API.
     */
    locationId?: string | null;
    /**
     * The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using * wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460, 94*-95*.
     */
    postalCode?: string | null;
    /**
     * The percentage of tax rate that applies to the item price.
     */
    rate?: number | null;
    /**
     * The geographic region to which the tax rate applies.
     */
    region?: string | null;
    /**
     * Should be set to true if tax is charged on shipping.
     */
    taxShip?: boolean | null;
  }
  export interface Schema$ProductUnitPricingBaseMeasure {
    /**
     * The unit of the denominator.
     */
    unit?: string | null;
    /**
     * The denominator of the unit price.
     */
    value?: string | null;
  }
  export interface Schema$ProductUnitPricingMeasure {
    /**
     * The unit of the measure.
     */
    unit?: string | null;
    /**
     * The measure of an item.
     */
    value?: number | null;
  }
  /**
   * Product fields. Values are only set for fields requested explicitly in the request's search query.
   */
  export interface Schema$ProductView {
    /**
     * Aggregated destination status.
     */
    aggregatedDestinationStatus?: string | null;
    /**
     * Availability of the product.
     */
    availability?: string | null;
    /**
     * Brand of the product.
     */
    brand?: string | null;
    /**
     * First level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL1?: string | null;
    /**
     * Second level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL2?: string | null;
    /**
     * Third level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL3?: string | null;
    /**
     * Fourth level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL4?: string | null;
    /**
     * Fifth level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL5?: string | null;
    /**
     * Channel of the product (online versus local).
     */
    channel?: string | null;
    /**
     * Estimated performance potential compared to highest performing products of the merchant.
     */
    clickPotential?: string | null;
    /**
     * Rank of the product based on its click potential. A product with `click_potential_rank` 1 has the highest click potential among the merchant's products that fulfill the search query conditions.
     */
    clickPotentialRank?: string | null;
    /**
     * Condition of the product.
     */
    condition?: string | null;
    /**
     * The time the merchant created the product in timestamp seconds.
     */
    creationTime?: string | null;
    /**
     * Product price currency code (for example, ISO 4217). Absent if product price is not available.
     */
    currencyCode?: string | null;
    /**
     * Expiration date for the product. Specified on insertion.
     */
    expirationDate?: Schema$Date;
    /**
     * GTIN of the product.
     */
    gtin?: string[] | null;
    /**
     * The REST ID of the product, in the form of channel:contentLanguage:targetCountry:offerId. Content API methods that operate on products take this as their productId parameter. Should always be included in the SELECT clause.
     */
    id?: string | null;
    /**
     * Item group ID provided by the merchant for grouping variants together.
     */
    itemGroupId?: string | null;
    /**
     * List of item issues for the product.
     */
    itemIssues?: Schema$ProductViewItemIssue[];
    /**
     * Language code of the product in BCP 47 format.
     */
    languageCode?: string | null;
    /**
     * Merchant-provided id of the product.
     */
    offerId?: string | null;
    /**
     * Product price specified as micros (1 millionth of a standard unit, 1 USD = 1000000 micros) in the product currency. Absent in case the information about the price of the product is not available.
     */
    priceMicros?: string | null;
    /**
     * First level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    productTypeL1?: string | null;
    /**
     * Second level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    productTypeL2?: string | null;
    /**
     * Third level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    productTypeL3?: string | null;
    /**
     * Fourth level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    productTypeL4?: string | null;
    /**
     * Fifth level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    productTypeL5?: string | null;
    /**
     * The normalized shipping label specified in the feed
     */
    shippingLabel?: string | null;
    /**
     * Title of the product.
     */
    title?: string | null;
  }
  /**
   * Item issue associated with the product.
   */
  export interface Schema$ProductViewItemIssue {
    /**
     * Item issue type.
     */
    issueType?: Schema$ProductViewItemIssueItemIssueType;
    /**
     * Item issue resolution.
     */
    resolution?: string | null;
    /**
     * Item issue severity.
     */
    severity?: Schema$ProductViewItemIssueItemIssueSeverity;
  }
  /**
   * Issue severity for all affected regions in a destination.
   */
  export interface Schema$ProductViewItemIssueIssueSeverityPerDestination {
    /**
     * List of demoted countries in the destination.
     */
    demotedCountries?: string[] | null;
    /**
     * Issue destination.
     */
    destination?: string | null;
    /**
     * List of disapproved countries in the destination.
     */
    disapprovedCountries?: string[] | null;
  }
  /**
   * Severity of an issue per destination in a region, and aggregated severity.
   */
  export interface Schema$ProductViewItemIssueItemIssueSeverity {
    /**
     * Severity of an issue aggregated for destination.
     */
    aggregatedSeverity?: string | null;
    /**
     * Item issue severity for every destination.
     */
    severityPerDestination?: Schema$ProductViewItemIssueIssueSeverityPerDestination[];
  }
  /**
   * Type of the item issue.
   */
  export interface Schema$ProductViewItemIssueItemIssueType {
    /**
     * Canonical attribute name for attribute-specific issues.
     */
    canonicalAttribute?: string | null;
    /**
     * Error code of the issue.
     */
    code?: string | null;
  }
  export interface Schema$ProductWeight {
    /**
     * Required. The weight unit. Acceptable values are: - "`g`" - "`kg`" - "`oz`" - "`lb`"
     */
    unit?: string | null;
    /**
     * Required. The weight represented as a number. The weight can have a maximum precision of four decimal places.
     */
    value?: number | null;
  }
  /**
   * Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673)
   */
  export interface Schema$Promotion {
    /**
     * Product filter by brand for the promotion.
     */
    brand?: string[] | null;
    /**
     * Product filter by brand exclusion for the promotion.
     */
    brandExclusion?: string[] | null;
    /**
     * Required. The content language used as part of the unique identifier. `en` content language is available for all target countries. `fr` content language is available for `CA` and `FR` target countries. `de` content language is available for `DE` target country. `nl` content language is available for `NL` target country. `it` content language is available for `IT` target country. `pt` content language is available for `BR` target country. `ja` content language is available for `JP` target country. `ko` content language is available for `KR` target country.
     */
    contentLanguage?: string | null;
    /**
     * Required. Coupon value type for the promotion.
     */
    couponValueType?: string | null;
    /**
     * Free gift description for the promotion.
     */
    freeGiftDescription?: string | null;
    /**
     * Free gift item ID for the promotion.
     */
    freeGiftItemId?: string | null;
    /**
     * Free gift value for the promotion.
     */
    freeGiftValue?: Schema$PriceAmount;
    /**
     * Generic redemption code for the promotion. To be used with the `offerType` field.
     */
    genericRedemptionCode?: string | null;
    /**
     * The number of items discounted in the promotion.
     */
    getThisQuantityDiscounted?: number | null;
    /**
     * Output only. The REST promotion ID to uniquely identify the promotion. Content API methods that operate on promotions take this as their `promotionId` parameter. The REST ID for a promotion is of the form channel:contentLanguage:targetCountry:promotionId The `channel` field has a value of `"online"`, `"in_store"`, or `"online_in_store"`.
     */
    id?: string | null;
    /**
     * Product filter by item group ID for the promotion.
     */
    itemGroupId?: string[] | null;
    /**
     * Product filter by item group ID exclusion for the promotion.
     */
    itemGroupIdExclusion?: string[] | null;
    /**
     * Product filter by item ID for the promotion.
     */
    itemId?: string[] | null;
    /**
     * Product filter by item ID exclusion for the promotion.
     */
    itemIdExclusion?: string[] | null;
    /**
     * Maximum purchase quantity for the promotion.
     */
    limitQuantity?: number | null;
    /**
     * Maximum purchase value for the promotion.
     */
    limitValue?: Schema$PriceAmount;
    /**
     * Required. Long title for the promotion.
     */
    longTitle?: string | null;
    /**
     * Minimum purchase amount for the promotion.
     */
    minimumPurchaseAmount?: Schema$PriceAmount;
    /**
     * Minimum purchase quantity for the promotion.
     */
    minimumPurchaseQuantity?: number | null;
    /**
     * Cost cap for the promotion.
     */
    moneyBudget?: Schema$PriceAmount;
    /**
     * The money off amount offered in the promotion.
     */
    moneyOffAmount?: Schema$PriceAmount;
    /**
     * Required. Type of the promotion.
     */
    offerType?: string | null;
    /**
     * Order limit for the promotion.
     */
    orderLimit?: number | null;
    /**
     * The percentage discount offered in the promotion.
     */
    percentOff?: number | null;
    /**
     * Required. Applicability of the promotion to either all products or only specific products.
     */
    productApplicability?: string | null;
    /**
     * Product filter by product type for the promotion.
     */
    productType?: string[] | null;
    /**
     * Product filter by product type exclusion for the promotion.
     */
    productTypeExclusion?: string[] | null;
    /**
     * Destination ID for the promotion.
     */
    promotionDestinationIds?: string[] | null;
    /**
     * String representation of the promotion display dates. Deprecated. Use `promotion_display_time_period` instead.
     */
    promotionDisplayDates?: string | null;
    /**
     * `TimePeriod` representation of the promotion's display dates.
     */
    promotionDisplayTimePeriod?: Schema$TimePeriod;
    /**
     * String representation of the promotion effective dates. Deprecated. Use `promotion_effective_time_period` instead.
     */
    promotionEffectiveDates?: string | null;
    /**
     * Required. `TimePeriod` representation of the promotion's effective dates.
     */
    promotionEffectiveTimePeriod?: Schema$TimePeriod;
    /**
     * Required. The user provided promotion ID to uniquely identify the promotion.
     */
    promotionId?: string | null;
    /**
     * Output only. The current status of the promotion.
     */
    promotionStatus?: Schema$PromotionPromotionStatus;
    /**
     * URL to the page on the merchant's site where the promotion shows. Local Inventory ads promotions throw an error if no promo url is included. URL is used to confirm that the promotion is valid and can be redeemed.
     */
    promotionUrl?: string | null;
    /**
     * Required. Redemption channel for the promotion. At least one channel is required.
     */
    redemptionChannel?: string[] | null;
    /**
     * Shipping service names for the promotion.
     */
    shippingServiceNames?: string[] | null;
    /**
     * Whether the promotion applies to all stores, or only specified stores. Local Inventory ads promotions throw an error if no store applicability is included. An INVALID_ARGUMENT error is thrown if store_applicability is set to ALL_STORES and store_code or score_code_exclusion is set to a value.
     */
    storeApplicability?: string | null;
    /**
     * Store codes to include for the promotion.
     */
    storeCode?: string[] | null;
    /**
     * Store codes to exclude for the promotion.
     */
    storeCodeExclusion?: string[] | null;
    /**
     * Required. The target country used as part of the unique identifier. Can be `AU`, `CA`, `DE`, `FR`, `GB`, `IN`, `US`, `BR`, `ES`, `NL`, `JP`, `IT` or `KR`.
     */
    targetCountry?: string | null;
  }
  /**
   * The status of the promotion.
   */
  export interface Schema$PromotionPromotionStatus {
    /**
     * Date on which the promotion has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z"
     */
    creationDate?: string | null;
    /**
     * The intended destinations for the promotion.
     */
    destinationStatuses?: Schema$PromotionPromotionStatusDestinationStatus[];
    /**
     * Date on which the promotion status has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z"
     */
    lastUpdateDate?: string | null;
    /**
     * A list of issues associated with the promotion.
     */
    promotionIssue?: Schema$PromotionPromotionStatusPromotionIssue[];
  }
  /**
   * The destination status of the promotion.
   */
  export interface Schema$PromotionPromotionStatusDestinationStatus {
    /**
     * The name of the destination.
     */
    destination?: string | null;
    /**
     * The status for the specified destination.
     */
    status?: string | null;
  }
  /**
   * The issue associated with the promotion.
   */
  export interface Schema$PromotionPromotionStatusPromotionIssue {
    /**
     * Code of the issue.
     */
    code?: string | null;
    /**
     * Explanation of the issue.
     */
    detail?: string | null;
  }
  /**
   * Settings for Pub/Sub notifications, all methods require that the caller is a direct user of the merchant center account.
   */
  export interface Schema$PubsubNotificationSettings {
    /**
     * Cloud pub/sub topic to which notifications are sent (read-only).
     */
    cloudTopicName?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#pubsubNotificationSettings`"
     */
    kind?: string | null;
    /**
     * List of event types. Acceptable values are: - "`orderPendingShipment`"
     */
    registeredEvents?: string[] | null;
  }
  export interface Schema$RateGroup {
    /**
     * A list of shipping labels defining the products to which this rate group applies to. This is a disjunction: only one of the labels has to match for the rate group to apply. May only be empty for the last rate group of a service. Required.
     */
    applicableShippingLabels?: string[] | null;
    /**
     * A list of carrier rates that can be referred to by `mainTable` or `singleValue`.
     */
    carrierRates?: Schema$CarrierRate[];
    /**
     * A table defining the rate group, when `singleValue` is not expressive enough. Can only be set if `singleValue` is not set.
     */
    mainTable?: Schema$Table;
    /**
     * Name of the rate group. Optional. If set has to be unique within shipping service.
     */
    name?: string | null;
    /**
     * The value of the rate group (for example, flat rate $10). Can only be set if `mainTable` and `subtables` are not set.
     */
    singleValue?: Schema$Value;
    /**
     * A list of subtables referred to by `mainTable`. Can only be set if `mainTable` is set.
     */
    subtables?: Schema$Table[];
  }
  /**
   * Recommendations are suggested ways to improve your merchant account's performance. For example, to engage with a feature, or start using a new Google product.
   */
  export interface Schema$Recommendation {
    /**
     * Output only. CTAs of this recommendation. Repeated.
     */
    additionalCallToAction?: Schema$RecommendationCallToAction[];
    /**
     * Output only. List of additional localized descriptions for a recommendation. Localication uses the `languageCode` field in `GenerateRecommendations` requests. Not all description types are guaranteed to be present and we recommend to rely on default description.
     */
    additionalDescriptions?: Schema$RecommendationDescription[];
    /**
     * Output only. Any creatives attached to the recommendation. Repeated.
     */
    creative?: Schema$RecommendationCreative[];
    /**
     * Optional. Default CTA of the recommendation.
     */
    defaultCallToAction?: Schema$RecommendationCallToAction;
    /**
     * Optional. Localized recommendation description. The localization the {@link `GenerateRecommendationsRequest.language_code`\} field in {@link `GenerateRecommendationsRequest`\} requests.
     */
    defaultDescription?: string | null;
    /**
     * Optional. A numerical score of the impact from the recommendation's description. For example, a recommendation might suggest an upward trend in sales for a certain product. Higher number means larger impact.
     */
    numericalImpact?: number | null;
    /**
     * Optional. Indicates whether a user needs to pay when they complete the user journey suggested by the recommendation.
     */
    paid?: boolean | null;
    /**
     * Optional. Localized recommendation name. The localization uses the {@link `GenerateRecommendationsRequest.language_code`\} field in {@link `GenerateRecommendationsRequest`\} requests.
     */
    recommendationName?: string | null;
    /**
     * Optional. Subtype of the recommendations. Only applicable when multiple recommendations can be generated per type, and is used as an identifier of recommendation under the same recommendation type.
     */
    subType?: string | null;
    /**
     * Optional. Localized Recommendation Title. Localization uses the {@link `GenerateRecommendationsRequest.language_code`\} field in {@link `GenerateRecommendationsRequest`\} requests.
     */
    title?: string | null;
    /**
     * Output only. Type of the recommendation. List of currently available recommendation types: - OPPORTUNITY_CREATE_NEW_COLLECTION - OPPORTUNITY_CREATE_EMAIL_CAMPAIGN
     */
    type?: string | null;
  }
  /**
   * Call to action (CTA) that explains how a merchant can implement this recommendation
   */
  export interface Schema$RecommendationCallToAction {
    /**
     * Output only. Intent of the action. This value describes the intent (for example, `OPEN_CREATE_EMAIL_CAMPAIGN_FLOW`) and can vary from recommendation to recommendation. This value can change over time for the same recommendation. Currently available intent values: - OPEN_CREATE_EMAIL_CAMPAIGN_FLOW: Opens a user journey where they can create a marketing email campaign. (No default URL) - OPEN_CREATE_COLLECTION_TAB: Opens a user journey where they can [create a collection](https://support.google.com/merchants/answer/9703228) for their Merchant account. (No default URL)
     */
    intent?: string | null;
    /**
     * Output only. Localized text of the CTA. Optional.
     */
    localizedText?: string | null;
    /**
     * Optional. URL of the CTA. This field will only be set for some recommendations where there is a suggested landing URL. Otherwise it will be set to an empty string. We recommend developers to use their own custom landing page according to the description of the intent field above when this uri field is empty.
     */
    uri?: string | null;
  }
  /**
   * Creative is a multimedia attachment to recommendation that can be used on the frontend.
   */
  export interface Schema$RecommendationCreative {
    /**
     * Type of the creative.
     */
    type?: string | null;
    /**
     * URL of the creative.
     */
    uri?: string | null;
  }
  /**
   * Google-provided description for the recommendation.
   */
  export interface Schema$RecommendationDescription {
    /**
     * Output only. Text of the description.
     */
    text?: string | null;
    /**
     * Output only. Type of the description.
     */
    type?: string | null;
  }
  /**
   * Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
   */
  export interface Schema$Region {
    /**
     * The display name of the region.
     */
    displayName?: string | null;
    /**
     * A list of geotargets that defines the region area.
     */
    geotargetArea?: Schema$RegionGeoTargetArea;
    /**
     * Output only. Immutable. Merchant that owns the region.
     */
    merchantId?: string | null;
    /**
     * A list of postal codes that defines the region area.
     */
    postalCodeArea?: Schema$RegionPostalCodeArea;
    /**
     * Output only. Indicates if the region is eligible to use in the Regional Inventory configuration.
     */
    regionalInventoryEligible?: boolean | null;
    /**
     * Output only. Immutable. The ID uniquely identifying each region.
     */
    regionId?: string | null;
    /**
     * Output only. Indicates if the region is eligible to use in the Shipping Services configuration.
     */
    shippingEligible?: boolean | null;
  }
  /**
   * Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region.
   */
  export interface Schema$RegionalInventory {
    /**
     * The availability of the product.
     */
    availability?: string | null;
    /**
     * A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form.
     */
    customAttributes?: Schema$CustomAttribute[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#regionalInventory`".
     */
    kind?: string | null;
    /**
     * The price of the product.
     */
    price?: Schema$Price;
    /**
     * The ID uniquely identifying each region.
     */
    regionId?: string | null;
    /**
     * The sale price of the product. Mandatory if `sale_price_effective_date` is defined.
     */
    salePrice?: Schema$Price;
    /**
     * A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided.
     */
    salePriceEffectiveDate?: string | null;
  }
  export interface Schema$RegionalinventoryCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$RegionalinventoryCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch regional inventory request.
   */
  export interface Schema$RegionalinventoryCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * Method of the batch request entry. Acceptable values are: - "`insert`"
     */
    method?: string | null;
    /**
     * The ID of the product for which to update price and availability.
     */
    productId?: string | null;
    /**
     * Price and availability of the product.
     */
    regionalInventory?: Schema$RegionalInventory;
  }
  export interface Schema$RegionalinventoryCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$RegionalinventoryCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#regionalinventoryCustomBatchResponse`".
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch regional inventory response.
   */
  export interface Schema$RegionalinventoryCustomBatchResponseEntry {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number | null;
    /**
     * A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#regionalinventoryCustomBatchResponseEntry`".
     */
    kind?: string | null;
    /**
     * Price and availability of the product.
     */
    regionalInventory?: Schema$RegionalInventory;
  }
  /**
   * A list of geotargets that defines the region area.
   */
  export interface Schema$RegionGeoTargetArea {
    /**
     * Required. A non-empty list of [location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). They must all be of the same location type (e.g., state).
     */
    geotargetCriteriaIds?: string[] | null;
  }
  /**
   * A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource.
   */
  export interface Schema$RegionPostalCodeArea {
    /**
     * Required. A range of postal codes.
     */
    postalCodes?: Schema$RegionPostalCodeAreaPostalCodeRange[];
    /**
     * Required. CLDR territory code or the country the postal code group applies to.
     */
    regionCode?: string | null;
  }
  /**
   * A range of postal codes that defines the region area.
   */
  export interface Schema$RegionPostalCodeAreaPostalCodeRange {
    /**
     * Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: "94108", "9410*", "9*".
     */
    begin?: string | null;
    /**
     * Optional. A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area. It must have the same length as postalCodeRangeBegin: if postalCodeRangeBegin is a postal code then postalCodeRangeEnd must be a postal code too; if postalCodeRangeBegin is a pattern then postalCodeRangeEnd must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching postalCodeRangeBegin.
     */
    end?: string | null;
  }
  /**
   * The payload for configuring how the content should be rendered.
   */
  export interface Schema$RenderAccountIssuesRequestPayload {
    /**
     * Optional. How the detailed content should be returned. Default option is to return the content as a pre-rendered HTML text.
     */
    contentOption?: string | null;
    /**
     * Optional. How actions with user input form should be handled. If not provided, actions will be returned as links that points merchant to Merchant Center where they can request the action.
     */
    userInputActionOption?: string | null;
  }
  /**
   * Response containing support content and actions for listed account issues.
   */
  export interface Schema$RenderAccountIssuesResponse {
    /**
     * The Alternate Dispute Resolution (ADR) contains a link to a page where merchant can bring their appeal to an [external body](https://support.google.com/european-union-digital-services-act-redress-options/answer/13535501). If the ADR is present, it MUST be available to the merchant on the page that shows the list with their account issues.
     */
    alternateDisputeResolution?: Schema$AlternateDisputeResolution;
    /**
     * List of account issues for a given account. This list can be shown with compressed, expandable items. In the compressed form, the title and impact should be shown for each issue. Once the issue is expanded, the detailed content and available actions should be rendered.
     */
    issues?: Schema$AccountIssue[];
  }
  /**
   * The payload for configuring how the content should be rendered.
   */
  export interface Schema$RenderProductIssuesRequestPayload {
    /**
     * Optional. How the detailed content should be returned. Default option is to return the content as a pre-rendered HTML text.
     */
    contentOption?: string | null;
    /**
     * Optional. How actions with user input form should be handled. If not provided, actions will be returned as links that points merchant to Merchant Center where they can request the action.
     */
    userInputActionOption?: string | null;
  }
  /**
   * Response containing support content and actions for listed product issues.
   */
  export interface Schema$RenderProductIssuesResponse {
    /**
     * The Alternate Dispute Resolution (ADR) contains a link to a page where merchant can bring their appeal to an [external body](https://support.google.com/european-union-digital-services-act-redress-options/answer/13535501). If present, the link should be shown on the same page as the list of issues.
     */
    alternateDisputeResolution?: Schema$AlternateDisputeResolution;
    /**
     * List of issues for a given product. This list can be shown with compressed, expandable items. In the compressed form, the title and impact should be shown for each issue. Once the issue is expanded, the detailed content and available actions should be rendered.
     */
    issues?: Schema$ProductIssue[];
  }
  /**
   * Request to report interactions on a recommendation.
   */
  export interface Schema$ReportInteractionRequest {
    /**
     * Required. Type of the interaction that is reported, for example INTERACTION_CLICK.
     */
    interactionType?: string | null;
    /**
     * Required. Token of the response when recommendation was returned.
     */
    responseToken?: string | null;
    /**
     * Optional. Subtype of the recommendations this interaction happened on. This field must be set only to the value that is returned by {@link `RecommendationsService.GenerateRecommendations`\} call.
     */
    subtype?: string | null;
    /**
     * Required. Type of the recommendations on which this interaction happened. This field must be set only to the value that is returned by {@link `GenerateRecommendationsResponse`\} call.
     */
    type?: string | null;
  }
  /**
   * Result row returned from the search query.
   */
  export interface Schema$ReportRow {
    /**
     * Best sellers fields requested by the merchant in the query. Field values are only set if the merchant queries `BestSellersProductClusterView` or `BestSellersBrandView`.
     */
    bestSellers?: Schema$BestSellers;
    /**
     * Brand fields requested by the merchant in the query. Field values are only set if the merchant queries `BestSellersBrandView`.
     */
    brand?: Schema$Brand;
    /**
     * Competitive visibility fields requested by the merchant in the query. Field values are only set if the merchant queries `CompetitiveVisibilityTopMerchantView`, `CompetitiveVisibilityBenchmarkView` or `CompetitiveVisibilityCompetitorView`.
     */
    competitiveVisibility?: Schema$CompetitiveVisibility;
    /**
     * Metrics requested by the merchant in the query. Metric values are only set for metrics requested explicitly in the query.
     */
    metrics?: Schema$Metrics;
    /**
     * Price competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`.
     */
    priceCompetitiveness?: Schema$PriceCompetitiveness;
    /**
     * Price insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`.
     */
    priceInsights?: Schema$PriceInsights;
    /**
     * Product cluster fields requested by the merchant in the query. Field values are only set if the merchant queries `BestSellersProductClusterView`.
     */
    productCluster?: Schema$ProductCluster;
    /**
     * Product fields requested by the merchant in the query. Field values are only set if the merchant queries `ProductView`.
     */
    productView?: Schema$ProductView;
    /**
     * Segmentation dimensions requested by the merchant in the query. Dimension values are only set for dimensions requested explicitly in the query.
     */
    segments?: Schema$Segments;
    /**
     * [Topic trends](https://support.google.com/merchants/answer/13542370) fields requested by the merchant in the query. Field values are only set if the merchant queries `TopicTrendsView`.
     */
    topicTrends?: Schema$TopicTrends;
  }
  /**
   * Request message for the RequestPhoneVerification method.
   */
  export interface Schema$RequestPhoneVerificationRequest {
    /**
     * Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) (for example, en-US). Language code is used to provide localized `SMS` and `PHONE_CALL`. Default language used is en-US if not provided.
     */
    languageCode?: string | null;
    /**
     * Phone number to be verified.
     */
    phoneNumber?: string | null;
    /**
     * Required. Two letter country code for the phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes.
     */
    phoneRegionCode?: string | null;
    /**
     * Verification method to receive verification code.
     */
    phoneVerificationMethod?: string | null;
  }
  /**
   * Response message for the RequestPhoneVerification method.
   */
  export interface Schema$RequestPhoneVerificationResponse {
    /**
     * The verification ID to use in subsequent calls to `verifyphonenumber`.
     */
    verificationId?: string | null;
  }
  /**
   * Request message for the RequestReviewFreeListings Program method.
   */
  export interface Schema$RequestReviewFreeListingsRequest {
    /**
     * The code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country for which review is to be requested.
     */
    regionCode?: string | null;
  }
  /**
   * Request message for the RequestReviewShoppingAds program method.
   */
  export interface Schema$RequestReviewShoppingAdsRequest {
    /**
     * The code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country for which review is to be requested.
     */
    regionCode?: string | null;
  }
  /**
   * Return address resource.
   */
  export interface Schema$ReturnAddress {
    /**
     * Required. The address.
     */
    address?: Schema$ReturnAddressAddress;
    /**
     * Required. The country of sale where the return address is applicable.
     */
    country?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#returnAddress`"
     */
    kind?: string | null;
    /**
     * Required. The user-defined label of the return address. For the default address, use the label "default".
     */
    label?: string | null;
    /**
     * Required. The merchant's contact phone number regarding the return.
     */
    phoneNumber?: string | null;
    /**
     * Return address ID generated by Google.
     */
    returnAddressId?: string | null;
  }
  export interface Schema$ReturnAddressAddress {
    /**
     * CLDR country code (for example, "US").
     */
    country?: string | null;
    /**
     * City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs).
     */
    locality?: string | null;
    /**
     * Postal code or ZIP (for example, "94043").
     */
    postalCode?: string | null;
    /**
     * Name of the recipient to address returns to.
     */
    recipientName?: string | null;
    /**
     * Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
     */
    region?: string | null;
    /**
     * Street-level part of the address. May be up to two lines, each line specified as an array element.
     */
    streetAddress?: string[] | null;
  }
  export interface Schema$ReturnaddressCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$ReturnaddressCustomBatchRequestEntry[];
  }
  export interface Schema$ReturnaddressCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * The Merchant Center account ID.
     */
    merchantId?: string | null;
    /**
     * Method of the batch request entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`"
     */
    method?: string | null;
    /**
     * The return address to submit. This should be set only if the method is `insert`.
     */
    returnAddress?: Schema$ReturnAddress;
    /**
     * The return address ID. This should be set only if the method is `delete` or `get`.
     */
    returnAddressId?: string | null;
  }
  export interface Schema$ReturnaddressCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$ReturnaddressCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressCustomBatchResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$ReturnaddressCustomBatchResponseEntry {
    /**
     * The ID of the request entry to which this entry responds.
     */
    batchId?: number | null;
    /**
     * A list of errors defined if, and only if, the request failed.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressCustomBatchResponseEntry`"
     */
    kind?: string | null;
    /**
     * The retrieved return address.
     */
    returnAddress?: Schema$ReturnAddress;
  }
  export interface Schema$ReturnaddressListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressListResponse`".
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of addresses.
     */
    nextPageToken?: string | null;
    resources?: Schema$ReturnAddress[];
  }
  /**
   * Return policy resource.
   */
  export interface Schema$ReturnPolicy {
    /**
     * Required. The country of sale where the return policy is applicable.
     */
    country?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#returnPolicy`"
     */
    kind?: string | null;
    /**
     * Required. The user-defined label of the return policy. For the default policy, use the label "default".
     */
    label?: string | null;
    /**
     * Required. The name of the policy as shown in Merchant Center.
     */
    name?: string | null;
    /**
     * Return reasons that will incur return fees.
     */
    nonFreeReturnReasons?: string[] | null;
    /**
     * Required. The policy.
     */
    policy?: Schema$ReturnPolicyPolicy;
    /**
     * Return policy ID generated by Google.
     */
    returnPolicyId?: string | null;
    /**
     * The return shipping fee that will apply to non free return reasons.
     */
    returnShippingFee?: Schema$Price;
    /**
     * An optional list of seasonal overrides.
     */
    seasonalOverrides?: Schema$ReturnPolicySeasonalOverride[];
  }
  export interface Schema$ReturnpolicyCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$ReturnpolicyCustomBatchRequestEntry[];
  }
  export interface Schema$ReturnpolicyCustomBatchRequestEntry {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * The Merchant Center account ID.
     */
    merchantId?: string | null;
    /**
     * Method of the batch request entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`"
     */
    method?: string | null;
    /**
     * The return policy to submit. This should be set only if the method is `insert`.
     */
    returnPolicy?: Schema$ReturnPolicy;
    /**
     * The return policy ID. This should be set only if the method is `delete` or `get`.
     */
    returnPolicyId?: string | null;
  }
  export interface Schema$ReturnpolicyCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$ReturnpolicyCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyCustomBatchResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$ReturnpolicyCustomBatchResponseEntry {
    /**
     * The ID of the request entry to which this entry responds.
     */
    batchId?: number | null;
    /**
     * A list of errors defined if, and only if, the request failed.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyCustomBatchResponseEntry`"
     */
    kind?: string | null;
    /**
     * The retrieved return policy.
     */
    returnPolicy?: Schema$ReturnPolicy;
  }
  export interface Schema$ReturnpolicyListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyListResponse`".
     */
    kind?: string | null;
    resources?: Schema$ReturnPolicy[];
  }
  /**
   * Return policy online object. This is currently used to represent return policies for ads and free listings programs.
   */
  export interface Schema$ReturnPolicyOnline {
    /**
     * The countries of sale where the return policy is applicable. The values must be a valid 2 letter ISO 3166 code, e.g. "US".
     */
    countries?: string[] | null;
    /**
     * The item conditions that are accepted for returns. This is required to not be empty unless the type of return policy is noReturns.
     */
    itemConditions?: string[] | null;
    /**
     * The unique user-defined label of the return policy. The same label cannot be used in different return policies for the same country. Policies with the label 'default' will apply to all products, unless a product specifies a return_policy_label attribute.
     */
    label?: string | null;
    /**
     * The name of the policy as shown in Merchant Center.
     */
    name?: string | null;
    /**
     * The return policy.
     */
    policy?: Schema$ReturnPolicyOnlinePolicy;
    /**
     * The restocking fee that applies to all return reason categories. This would be treated as a free restocking fee if the value is not set.
     */
    restockingFee?: Schema$ReturnPolicyOnlineRestockingFee;
    /**
     * The return methods of how customers can return an item. This value is required to not be empty unless the type of return policy is noReturns.
     */
    returnMethods?: string[] | null;
    /**
     * Output only. Return policy ID generated by Google.
     */
    returnPolicyId?: string | null;
    /**
     * The return policy uri. This can used by Google to do a sanity check for the policy.
     */
    returnPolicyUri?: string | null;
    /**
     * The return reason category information. This required to not be empty unless the type of return policy is noReturns.
     */
    returnReasonCategoryInfo?: Schema$ReturnPolicyOnlineReturnReasonCategoryInfo[];
  }
  /**
   * The available policies.
   */
  export interface Schema$ReturnPolicyOnlinePolicy {
    /**
     * The number of days items can be returned after delivery, where one day is defined to be 24 hours after the delivery timestamp. Required for `numberOfDaysAfterDelivery` returns.
     */
    days?: string | null;
    /**
     * Policy type.
     */
    type?: string | null;
  }
  /**
   * The restocking fee. This can either be a fixed fee or a micro percent.
   */
  export interface Schema$ReturnPolicyOnlineRestockingFee {
    /**
     * Fixed restocking fee.
     */
    fixedFee?: Schema$PriceAmount;
    /**
     * Percent of total price in micros. 15,000,000 means 15% of the total price would be charged.
     */
    microPercent?: number | null;
  }
  /**
   * The return reason category info wrapper.
   */
  export interface Schema$ReturnPolicyOnlineReturnReasonCategoryInfo {
    /**
     * The corresponding return label source.
     */
    returnLabelSource?: string | null;
    /**
     * The return reason category.
     */
    returnReasonCategory?: string | null;
    /**
     * The corresponding return shipping fee. This is only applicable when returnLabelSource is not the customer's responsibility.
     */
    returnShippingFee?: Schema$ReturnPolicyOnlineReturnShippingFee;
  }
  /**
   * The return shipping fee. This can either be a fixed fee or a boolean to indicate that the customer pays the actual shipping cost.
   */
  export interface Schema$ReturnPolicyOnlineReturnShippingFee {
    /**
     * Fixed return shipping fee amount. This value is only applicable when type is FIXED. We will treat the return shipping fee as free if type is FIXED and this value is not set.
     */
    fixedFee?: Schema$PriceAmount;
    /**
     * Type of return shipping fee.
     */
    type?: string | null;
  }
  export interface Schema$ReturnPolicyPolicy {
    /**
     * Required. Last day for returning the items. In ISO 8601 format. When specifying the return window like this, set the policy type to "lastReturnDate". Use this for seasonal overrides only.
     */
    lastReturnDate?: string | null;
    /**
     * The number of days items can be returned after delivery, where one day is defined to be 24 hours after the delivery timestamp. When specifying the return window like this, set the policy type to "numberOfDaysAfterDelivery". Acceptable values are 30, 45, 60, 90, 100, 180, 270 and 365 for the default policy. Additional policies further allow 14, 15, 21 and 28 days, but note that for most items a minimum of 30 days is required for returns. Exceptions may be made for electronics. A policy of less than 30 days can only be applied to those items.
     */
    numberOfDays?: string | null;
    /**
     * Policy type. Use "lastReturnDate" for seasonal overrides only. Note that for most items a minimum of 30 days is required for returns. Exceptions may be made for electronics or non-returnable items such as food, perishables, and living things. A policy of less than 30 days can only be applied to those items. Acceptable values are: - "`lastReturnDate`" - "`lifetimeReturns`" - "`noReturns`" - "`numberOfDaysAfterDelivery`"
     */
    type?: string | null;
  }
  export interface Schema$ReturnPolicySeasonalOverride {
    /**
     * Required. Last day on which the override applies. In ISO 8601 format.
     */
    endDate?: string | null;
    /**
     * Required. The name of the seasonal override as shown in Merchant Center.
     */
    name?: string | null;
    /**
     * Required. The policy which is in effect during that time.
     */
    policy?: Schema$ReturnPolicyPolicy;
    /**
     * Required. First day on which the override applies. In ISO 8601 format.
     */
    startDate?: string | null;
  }
  export interface Schema$Row {
    /**
     * The list of cells that constitute the row. Must have the same length as `columnHeaders` for two-dimensional tables, a length of 1 for one-dimensional tables. Required.
     */
    cells?: Schema$Value[];
  }
  /**
   * Request message for the ReportService.Search method.
   */
  export interface Schema$SearchRequest {
    /**
     * Number of ReportRows to retrieve in a single page. Defaults to 1000. Values above 5000 are coerced to 5000.
     */
    pageSize?: number | null;
    /**
     * Token of the page to retrieve. If not specified, the first page of results is returned. In order to request the next page of results, the value obtained from `next_page_token` in the previous response should be used.
     */
    pageToken?: string | null;
    /**
     * Required. Query that defines performance metrics to retrieve and dimensions according to which the metrics are to be segmented. For details on how to construct your query, see the [Query Language guide](https://developers.google.com/shopping-content/guides/reports/query-language/overview).
     */
    query?: string | null;
  }
  /**
   * Response message for the ReportService.Search method.
   */
  export interface Schema$SearchResponse {
    /**
     * Token which can be sent as `page_token` to retrieve the next page. If omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Rows that matched the search query.
     */
    results?: Schema$ReportRow[];
  }
  /**
   * Dimensions according to which metrics are segmented in the response. Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the corresponding event, for example, impression or order. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for dimensions requested explicitly in the request's search query.
   */
  export interface Schema$Segments {
    /**
     * Brand of the product.
     */
    brand?: string | null;
    /**
     * [Product category (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.
     */
    categoryL1?: string | null;
    /**
     * [Product category (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.
     */
    categoryL2?: string | null;
    /**
     * [Product category (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.
     */
    categoryL3?: string | null;
    /**
     * [Product category (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.
     */
    categoryL4?: string | null;
    /**
     * [Product category (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.
     */
    categoryL5?: string | null;
    /**
     * Currency in which price metrics are represented, for example, if you select `ordered_item_sales_micros`, the returned value will be represented by this currency.
     */
    currencyCode?: string | null;
    /**
     * Code of the country where the customer is located at the time of the event. Represented in the ISO 3166 format. If the customer country cannot be determined, a special 'ZZ' code is returned.
     */
    customerCountryCode?: string | null;
    /**
     * Custom label 0 for custom grouping of products.
     */
    customLabel0?: string | null;
    /**
     * Custom label 1 for custom grouping of products.
     */
    customLabel1?: string | null;
    /**
     * Custom label 2 for custom grouping of products.
     */
    customLabel2?: string | null;
    /**
     * Custom label 3 for custom grouping of products.
     */
    customLabel3?: string | null;
    /**
     * Custom label 4 for custom grouping of products.
     */
    customLabel4?: string | null;
    /**
     * Date in the merchant timezone to which metrics apply.
     */
    date?: Schema$Date;
    /**
     * Merchant-provided id of the product.
     */
    offerId?: string | null;
    /**
     * [Product type (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.
     */
    productTypeL1?: string | null;
    /**
     * [Product type (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.
     */
    productTypeL2?: string | null;
    /**
     * [Product type (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.
     */
    productTypeL3?: string | null;
    /**
     * [Product type (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.
     */
    productTypeL4?: string | null;
    /**
     * [Product type (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.
     */
    productTypeL5?: string | null;
    /**
     * Program to which metrics apply, for example, Free Product Listing.
     */
    program?: string | null;
    /**
     * Title of the product.
     */
    title?: string | null;
    /**
     * First day of the week (Monday) of the metrics date in the merchant timezone.
     */
    week?: Schema$Date;
  }
  export interface Schema$Service {
    /**
     * A boolean exposing the active status of the shipping service. Required.
     */
    active?: boolean | null;
    /**
     * The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups.
     */
    currency?: string | null;
    /**
     * The CLDR territory code of the country to which the service applies. Required.
     */
    deliveryCountry?: string | null;
    /**
     * Time spent in various aspects from order to the delivery of the product. Required.
     */
    deliveryTime?: Schema$DeliveryTime;
    /**
     * Eligibility for this service. Acceptable values are: - "`All scenarios`" - "`All scenarios except Shopping Actions`" - "`Shopping Actions`"
     */
    eligibility?: string | null;
    /**
     * Minimum order value for this service. If set, indicates that customers will have to spend at least this amount. All prices within a service must have the same currency. Cannot be set together with minimum_order_value_table.
     */
    minimumOrderValue?: Schema$Price;
    /**
     * Table of per store minimum order values for the pickup fulfillment type. Cannot be set together with minimum_order_value.
     */
    minimumOrderValueTable?: Schema$MinimumOrderValueTable;
    /**
     * Free-form name of the service. Must be unique within target account. Required.
     */
    name?: string | null;
    /**
     * The carrier-service pair delivering items to collection points. The list of supported pickup services can be retrieved through the `getSupportedPickupServices` method. Required if and only if the service delivery type is `pickup`.
     */
    pickupService?: Schema$PickupCarrierService;
    /**
     * Shipping rate group definitions. Only the last one is allowed to have an empty `applicableShippingLabels`, which means "everything else". The other `applicableShippingLabels` must not overlap.
     */
    rateGroups?: Schema$RateGroup[];
    /**
     * Type of locations this service ships orders to. Acceptable values are: - "`delivery`" - "`pickup` (deprecated)" - "`local_delivery`" - "`collection_point`"
     */
    shipmentType?: string | null;
    /**
     * A list of stores your products are delivered from. This is only available for the local delivery shipment type.
     */
    storeConfig?: Schema$ServiceStoreConfig;
  }
  /**
   * Stores that provide local delivery. Only valid with local delivery fulfillment.
   */
  export interface Schema$ServiceStoreConfig {
    /**
     * Time local delivery ends for the day. This can be either `local_cutoff_time` or `store_close_offset_hours`, if both are provided an error is thrown.
     */
    cutoffConfig?: Schema$ServiceStoreConfigCutoffConfig;
    /**
     * Maximum delivery radius. Only needed for local delivery fulfillment type.
     */
    serviceRadius?: Schema$Distance;
    /**
     * A list of store codes that provide local delivery. If empty, then `store_service_type` must be `all_stores`, or an error is thrown. If not empty, then `store_service_type` must be `selected_stores`, or an error is thrown.
     */
    storeCodes?: string[] | null;
    /**
     * Indicates whether all stores listed by this merchant provide local delivery or not. Acceptable values are `all stores` and `selected stores`
     */
    storeServiceType?: string | null;
  }
  /**
   * Time local delivery ends for the day based on the local timezone of the store. `local_cutoff_time` and `store_close_offset_hours` are mutually exclusive.
   */
  export interface Schema$ServiceStoreConfigCutoffConfig {
    /**
     * Time in hours and minutes in the local timezone when local delivery ends.
     */
    localCutoffTime?: Schema$ServiceStoreConfigCutoffConfigLocalCutoffTime;
    /**
     * Merchants can opt-out of showing n+1 day local delivery when they have a shipping service configured to n day local delivery. For example, if the shipping service defines same-day delivery, and it's past the cut-off, setting this field to `true` results in the calculated shipping service rate returning `NO_DELIVERY_POST_CUTOFF`. In the same example, setting this field to `false` results in the calculated shipping time being one day. This is only for local delivery.
     */
    noDeliveryPostCutoff?: boolean | null;
    /**
     * Represents cutoff time as the number of hours before store closing. Mutually exclusive with other fields (hour and minute).
     */
    storeCloseOffsetHours?: string | null;
  }
  /**
   * Time in hours and minutes in the local timezone when local delivery ends.
   */
  export interface Schema$ServiceStoreConfigCutoffConfigLocalCutoffTime {
    /**
     * Hour local delivery orders must be placed by to process the same day.
     */
    hour?: string | null;
    /**
     * Minute local delivery orders must be placed by to process the same day.
     */
    minute?: string | null;
  }
  /**
   *  Settlement reports detail order-level and item-level credits and debits between you and Google.
   */
  export interface Schema$SettlementReport {
    /**
     * The end date on which all transactions are included in the report, in ISO 8601 format.
     */
    endDate?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#settlementReport`"
     */
    kind?: string | null;
    /**
     * The residual amount from the previous invoice. This is set only if the previous invoices are not paid because of negative balance.
     */
    previousBalance?: Schema$Price;
    /**
     * The ID of the settlement report.
     */
    settlementId?: string | null;
    /**
     * The start date on which all transactions are included in the report, in ISO 8601 format.
     */
    startDate?: string | null;
    /**
     * The money due to the merchant.
     */
    transferAmount?: Schema$Price;
    /**
     * Date on which transfer for this payment was initiated by Google, in ISO 8601 format.
     */
    transferDate?: string | null;
    /**
     * The list of bank identifiers used for the transfer. For example, Trace ID for Federal Automated Clearing House (ACH). This may also be known as the Wire ID.
     */
    transferIds?: string[] | null;
  }
  export interface Schema$SettlementreportsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#settlementreportsListResponse`".
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of returns.
     */
    nextPageToken?: string | null;
    resources?: Schema$SettlementReport[];
  }
  /**
   * Settlement transactions give a detailed breakdown of the settlement report.
   */
  export interface Schema$SettlementTransaction {
    /**
     * The amount for the transaction.
     */
    amount?: Schema$SettlementTransactionAmount;
    /**
     * Identifiers of the transaction.
     */
    identifiers?: Schema$SettlementTransactionIdentifiers;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#settlementTransaction`"
     */
    kind?: string | null;
    /**
     * Details of the transaction.
     */
    transaction?: Schema$SettlementTransactionTransaction;
  }
  export interface Schema$SettlementTransactionAmount {
    commission?: Schema$SettlementTransactionAmountCommission;
    /**
     * The description of the event. Acceptable values are: - "`taxWithhold`" - "`principal`" - "`principalAdjustment`" - "`shippingFee`" - "`merchantRemittedSalesTax`" - "`googleRemittedSalesTax`" - "`merchantCoupon`" - "`merchantCouponTax`" - "`merchantRemittedDisposalTax`" - "`googleRemittedDisposalTax`" - "`merchantRemittedRedemptionFee`" - "`googleRemittedRedemptionFee`" - "`eeeEcoFee`" - "`furnitureEcoFee`" - "`copyPrivateFee`" - "`eeeEcoFeeCommission`" - "`furnitureEcoFeeCommission`" - "`copyPrivateFeeCommission`" - "`principalRefund`" - "`principalRefundTax`" - "`itemCommission`" - "`adjustmentCommission`" - "`shippingFeeCommission`" - "`commissionRefund`" - "`damaged`" - "`damagedOrDefectiveItem`" - "`expiredItem`" - "`faultyItem`" - "`incorrectItemReceived`" - "`itemMissing`" - "`qualityNotExpected`" - "`receivedTooLate`" - "`storePackageMissing`" - "`transitPackageMissing`" - "`unsuccessfulDeliveryUndeliverable`" - "`wrongChargeInStore`" - "`wrongItem`" - "`returns`" - "`undeliverable`" - "`issueRelatedRefundAndReplacementAmountDescription`" - "`refundFromMerchant`" - "`returnLabelShippingFee`" - "`lumpSumCorrection`" - "`pspFee`" - "`principalRefundDoesNotFit`" - "`principalRefundOrderedWrongItem`" - "`principalRefundQualityNotExpected`" - "`principalRefundBetterPriceFound`" - "`principalRefundNoLongerNeeded`" - "`principalRefundChangedMind`" - "`principalRefundReceivedTooLate`" - "`principalRefundIncorrectItemReceived`" - "`principalRefundDamagedOrDefectiveItem`" - "`principalRefundDidNotMatchDescription`" - "`principalRefundExpiredItem`"
     */
    description?: string | null;
    /**
     * The amount that contributes to the line item price.
     */
    transactionAmount?: Schema$Price;
    /**
     * The type of the amount. Acceptable values are: - "`itemPrice`" - "`orderPrice`" - "`refund`" - "`earlyRefund`" - "`courtesyRefund`" - "`returnRefund`" - "`returnLabelShippingFeeAmount`" - "`lumpSumCorrectionAmount`"
     */
    type?: string | null;
  }
  export interface Schema$SettlementTransactionAmountCommission {
    /**
     * The category of the commission. Acceptable values are: - "`animalsAndPetSupplies`" - "`dogCatFoodAndCatLitter`" - "`apparelAndAccessories`" - "`shoesHandbagsAndSunglasses`" - "`costumesAndAccessories`" - "`jewelry`" - "`watches`" - "`hobbiesArtsAndCrafts`" - "`homeAndGarden`" - "`entertainmentCollectibles`" - "`collectibleCoins`" - "`sportsCollectibles`" - "`sportingGoods`" - "`toysAndGames`" - "`musicalInstruments`" - "`giftCards`" - "`babyAndToddler`" - "`babyFoodWipesAndDiapers`" - "`businessAndIndustrial`" - "`camerasOpticsAndPhotography`" - "`consumerElectronics`" - "`electronicsAccessories`" - "`personalComputers`" - "`videoGameConsoles`" - "`foodAndGrocery`" - "`beverages`" - "`tobaccoProducts`" - "`furniture`" - "`hardware`" - "`buildingMaterials`" - "`tools`" - "`healthAndPersonalCare`" - "`beauty`" - "`householdSupplies`" - "`kitchenAndDining`" - "`majorAppliances`" - "`luggageAndBags`" - "`media`" - "`officeSupplies`" - "`softwareAndVideoGames`" - "`vehiclePartsAndAccessories`" - "`vehicleTiresAndWheels`" - "`vehicles`" - "`everythingElse`"
     */
    category?: string | null;
    /**
     * Rate of the commission in percentage.
     */
    rate?: string | null;
  }
  export interface Schema$SettlementTransactionIdentifiers {
    /**
     * The identifier of the adjustments, if it's available.
     */
    adjustmentId?: string | null;
    /**
     * The merchant provided order ID.
     */
    merchantOrderId?: string | null;
    /**
     * The identifier of the item.
     */
    orderItemId?: string | null;
    /**
     * The unique ID of the settlement transaction entry.
     */
    settlementEntryId?: string | null;
    /**
     * The shipment ids for the item.
     */
    shipmentIds?: string[] | null;
    /**
     * The Google transaction ID.
     */
    transactionId?: string | null;
  }
  export interface Schema$SettlementtransactionsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#settlementtransactionsListResponse`".
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of returns.
     */
    nextPageToken?: string | null;
    resources?: Schema$SettlementTransaction[];
  }
  export interface Schema$SettlementTransactionTransaction {
    /**
     * The time on which the event occurred in ISO 8601 format.
     */
    postDate?: string | null;
    /**
     * The type of the transaction that occurred. Acceptable values are: - "`order`" - "`reversal`" - "`orderRefund`" - "`reversalRefund`" - "`issueRelatedRefundAndReplacement`" - "`returnLabelShippingFeeTransaction`" - "`reversalIssueRelatedRefundAndReplacement`" - "`reversalReturnLabelShippingFeeTransaction`" - "`lumpSumCorrectionTransaction`"
     */
    type?: string | null;
  }
  /**
   * The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.
   */
  export interface Schema$ShippingSettings {
    /**
     * The ID of the account to which these account shipping settings belong. Ignored upon update, always present in get request responses.
     */
    accountId?: string | null;
    /**
     * A list of postal code groups that can be referred to in `services`. Optional.
     */
    postalCodeGroups?: Schema$PostalCodeGroup[];
    /**
     * The target account's list of services. Optional.
     */
    services?: Schema$Service[];
    /**
     * Optional. A list of warehouses which can be referred to in `services`.
     */
    warehouses?: Schema$Warehouse[];
  }
  export interface Schema$ShippingsettingsCustomBatchRequest {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: Schema$ShippingsettingsCustomBatchRequestEntry[];
  }
  /**
   * A batch entry encoding a single non-batch shippingsettings request.
   */
  export interface Schema$ShippingsettingsCustomBatchRequestEntry {
    /**
     * The ID of the account for which to get/update account shipping settings.
     */
    accountId?: string | null;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number | null;
    /**
     * The ID of the managing account.
     */
    merchantId?: string | null;
    /**
     * The method of the batch entry. Acceptable values are: - "`get`" - "`update`"
     */
    method?: string | null;
    /**
     * The account shipping settings to update. Only defined if the method is `update`.
     */
    shippingSettings?: Schema$ShippingSettings;
  }
  export interface Schema$ShippingsettingsCustomBatchResponse {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: Schema$ShippingsettingsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsCustomBatchResponse`".
     */
    kind?: string | null;
  }
  /**
   * A batch entry encoding a single non-batch shipping settings response.
   */
  export interface Schema$ShippingsettingsCustomBatchResponseEntry {
    /**
     * The ID of the request entry to which this entry responds.
     */
    batchId?: number | null;
    /**
     * A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.
     */
    errors?: Schema$Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsCustomBatchResponseEntry`"
     */
    kind?: string | null;
    /**
     * The retrieved or updated account shipping settings.
     */
    shippingSettings?: Schema$ShippingSettings;
  }
  export interface Schema$ShippingsettingsGetSupportedCarriersResponse {
    /**
     * A list of supported carriers. May be empty.
     */
    carriers?: Schema$CarriersCarrier[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedCarriersResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$ShippingsettingsGetSupportedHolidaysResponse {
    /**
     * A list of holidays applicable for delivery guarantees. May be empty.
     */
    holidays?: Schema$HolidaysHoliday[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedHolidaysResponse`".
     */
    kind?: string | null;
  }
  export interface Schema$ShippingsettingsGetSupportedPickupServicesResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedPickupServicesResponse`".
     */
    kind?: string | null;
    /**
     * A list of supported pickup services. May be empty.
     */
    pickupServices?: Schema$PickupServicesPickupService[];
  }
  export interface Schema$ShippingsettingsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsListResponse`".
     */
    kind?: string | null;
    /**
     * The token for the retrieval of the next page of shipping settings.
     */
    nextPageToken?: string | null;
    resources?: Schema$ShippingSettings[];
  }
  /**
   * Response message for GetShoppingAdsProgramStatus.
   */
  export interface Schema$ShoppingAdsProgramStatus {
    /**
     * State of the program. `ENABLED` if there are offers for at least one region.
     */
    globalState?: string | null;
    /**
     * Status of the program in each region. Regions with the same status and review eligibility are grouped together in `regionCodes`.
     */
    regionStatuses?: Schema$ShoppingAdsProgramStatusRegionStatus[];
  }
  /**
   * Status of program and region.
   */
  export interface Schema$ShoppingAdsProgramStatusRegionStatus {
    /**
     * Date by which eligibilityStatus will go from `WARNING` to `DISAPPROVED`. Only visible when your eligibilityStatus is WARNING. In [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DD`.
     */
    disapprovalDate?: string | null;
    /**
     * Eligibility status of the Shopping Ads program.
     */
    eligibilityStatus?: string | null;
    /**
     * Issues that must be fixed to be eligible for review.
     */
    onboardingIssues?: string[] | null;
    /**
     * The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes for all the regions with the same `eligibilityStatus` and `reviewEligibility`.
     */
    regionCodes?: string[] | null;
    /**
     * If a program is eligible for review in a specific region. Only visible if `eligibilityStatus` is `DISAPPROVED`.
     */
    reviewEligibilityStatus?: string | null;
    /**
     * Review ineligibility reason if account is not eligible for review.
     */
    reviewIneligibilityReason?: string | null;
    /**
     * Reason a program in a specific region isn’t eligible for review. Only visible if `reviewEligibilityStatus` is `INELIGIBLE`.
     */
    reviewIneligibilityReasonDescription?: string | null;
    /**
     * Additional information for ineligibility. If `reviewIneligibilityReason` is `IN_COOLDOWN_PERIOD`, a timestamp for the end of the cooldown period is provided.
     */
    reviewIneligibilityReasonDetails?: Schema$ShoppingAdsProgramStatusReviewIneligibilityReasonDetails;
    /**
     * Issues evaluated in the review process. Fix all issues before requesting a review.
     */
    reviewIssues?: string[] | null;
  }
  /**
   * Additional details for review ineligibility reasons.
   */
  export interface Schema$ShoppingAdsProgramStatusReviewIneligibilityReasonDetails {
    /**
     * This timestamp represents end of cooldown period for review ineligbility reason `IN_COOLDOWN_PERIOD`.
     */
    cooldownTime?: string | null;
  }
  export interface Schema$Table {
    /**
     * Headers of the table's columns. Optional: if not set then the table has only one dimension.
     */
    columnHeaders?: Schema$Headers;
    /**
     * Name of the table. Required for subtables, ignored for the main table.
     */
    name?: string | null;
    /**
     * Headers of the table's rows. Required.
     */
    rowHeaders?: Schema$Headers;
    /**
     * The list of rows that constitute the table. Must have the same length as `rowHeaders`. Required.
     */
    rows?: Schema$Row[];
  }
  /**
   * Block of text that may contain a tooltip with more information.
   */
  export interface Schema$TextWithTooltip {
    /**
     * Value of the tooltip as a simple text.
     */
    simpleTooltipValue?: string | null;
    /**
     * Value of the message as a simple text.
     */
    simpleValue?: string | null;
    /**
     * The suggested type of an icon for tooltip, if a tooltip is present.
     */
    tooltipIconStyle?: string | null;
  }
  /**
   * A message that represents a time period.
   */
  export interface Schema$TimePeriod {
    /**
     * The ending timestamp.
     */
    endTime?: string | null;
    /**
     * The starting timestamp.
     */
    startTime?: string | null;
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
  /**
   * Topic trends fields requested by the merchant in the query. Field values are only set if the merchant queries `TopicTrendsView`. Forecast data can be queried up to 13 weeks by passing a future date in the `date` field. Historical data is measured daily, and forecasted data is projected weekly. All data points are normalized based on the highest data points returned in the response. If you make separate queries with different date ranges, you might see different values for the same date in each response. The recommended way to get a trend score of a topic is `last7_days_search_interest / last{$day\}_days_search_interest - 1`. You can view trends for up to eight topics at a time.
   */
  export interface Schema$TopicTrends {
    /**
     * Country trends are calculated for. Must be a two-letter country code (ISO 3166-1-alpha-2 code), for example, `“US”`.
     */
    customerCountryCode?: string | null;
    /**
     * Date the trend score was retrieved.
     */
    date?: Schema$Date;
    /**
     * Search interest in the last 120 days, with the same normalization as search_interest. This field is only present for a past date.
     */
    last120DaysSearchInterest?: number | null;
    /**
     * Search interest in the last 30 days, with the same normalization as search_interest. This field is only present for a past date.
     */
    last30DaysSearchInterest?: number | null;
    /**
     * Search interest in the last 7 days, with the same normalization as search_interest. This field is only present for a past date.
     */
    last7DaysSearchInterest?: number | null;
    /**
     * Search interest in the last 90 days, with the same normalization as search_interest. This field is only present for a past date.
     */
    last90DaysSearchInterest?: number | null;
    /**
     * Estimated search interest in the next 7 days, with the same normalization as search_interest. This field is only present for a future date.
     */
    next7DaysSearchInterest?: number | null;
    /**
     * Daily search interest, normalized to the time and country to make comparisons easier, with 100 representing peak popularity (from 0 to 100) for the requested time period and location.
     */
    searchInterest?: number | null;
    /**
     * Google-provided topic trends are calculated for. Only top eight topics are returned. Topic is what shoppers are searching for on Google, grouped by the same concept.
     */
    topic?: string | null;
  }
  export interface Schema$TransitTable {
    /**
     * A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service.
     */
    postalCodeGroupNames?: string[] | null;
    rows?: Schema$TransitTableTransitTimeRow[];
    /**
     * A list of transit time labels. The last value can be `"all other labels"`. Example: `["food", "electronics", "all other labels"]`.
     */
    transitTimeLabels?: string[] | null;
  }
  export interface Schema$TransitTableTransitTimeRow {
    values?: Schema$TransitTableTransitTimeRowTransitTimeValue[];
  }
  export interface Schema$TransitTableTransitTimeRowTransitTimeValue {
    /**
     * Must be greater than or equal to `minTransitTimeInDays`.
     */
    maxTransitTimeInDays?: number | null;
    /**
     * Transit time range (min-max) in business days. 0 means same day delivery, 1 means next day delivery.
     */
    minTransitTimeInDays?: number | null;
  }
  /**
   * The payload for the triggered action.
   */
  export interface Schema$TriggerActionPayload {
    /**
     * Required. The context from the selected action. The value is obtained from rendered issues and needs to be sent back to identify the action that is being triggered.
     */
    actionContext?: string | null;
    /**
     * Required. Input provided by the merchant.
     */
    actionInput?: Schema$ActionInput;
  }
  /**
   * Response informing about the started action.
   */
  export interface Schema$TriggerActionResponse {
    /**
     * The message for merchant.
     */
    message?: string | null;
  }
  /**
   * Request message for the UndeleteConversionSource method.
   */
  export interface Schema$UndeleteConversionSourceRequest {}
  /**
   * Specifications related to the `Checkout` URL. The `UriTemplate` is of the form `https://www.mystore.com/checkout?item_id={id\}` where `{id\}` will be automatically replaced with data from the merchant account with this attribute [offer_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.offer_id)
   */
  export interface Schema$UrlSettings {
    /**
     * URL template when the placeholders are expanded will redirect the buyer to the cart page on the merchant website with the selected item in cart.
     */
    cartUriTemplate?: string | null;
    /**
     * URL template when the placeholders are expanded will redirect the buyer to the merchant checkout page with the item in the cart.
     */
    checkoutUriTemplate?: string | null;
  }
  /**
   * The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set.
   */
  export interface Schema$Value {
    /**
     * The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set.
     */
    carrierRateName?: string | null;
    /**
     * A flat rate. Can only be set if all other fields are not set.
     */
    flatRate?: Schema$Price;
    /**
     * If true, then the product can't ship. Must be true when set, can only be set if all other fields are not set.
     */
    noShipping?: boolean | null;
    /**
     * A percentage of the price represented as a number in decimal notation (for example, `"5.4"`). Can only be set if all other fields are not set.
     */
    pricePercentage?: string | null;
    /**
     * The name of a subtable. Can only be set in table cells (not for single values), and only if all other fields are not set.
     */
    subtableName?: string | null;
  }
  /**
   * Request message for the VerifyPhoneNumber method.
   */
  export interface Schema$VerifyPhoneNumberRequest {
    /**
     * Verification method used to receive verification code.
     */
    phoneVerificationMethod?: string | null;
    /**
     * The verification code that was sent to the phone number for validation.
     */
    verificationCode?: string | null;
    /**
     * The verification ID returned by `requestphoneverification`.
     */
    verificationId?: string | null;
  }
  /**
   * Response message for the VerifyPhoneNumber method.
   */
  export interface Schema$VerifyPhoneNumberResponse {
    /**
     * Verified phone number if verification is successful. This phone number can only be replaced by another verified phone number.
     */
    verifiedPhoneNumber?: string | null;
  }
  /**
   * A fulfillment warehouse, which stores and handles inventory.
   */
  export interface Schema$Warehouse {
    /**
     * Business days of the warehouse. If not set, will be Monday to Friday by default.
     */
    businessDayConfig?: Schema$BusinessDayConfig;
    /**
     * Required. The latest time of day that an order can be accepted and begin processing. Later orders will be processed in the next day. The time is based on the warehouse postal code.
     */
    cutoffTime?: Schema$WarehouseCutoffTime;
    /**
     * Required. The number of days it takes for this warehouse to pack up and ship an item. This is on the warehouse level, but can be overridden on the offer level based on the attributes of an item.
     */
    handlingDays?: string | null;
    /**
     * Required. The name of the warehouse. Must be unique within account.
     */
    name?: string | null;
    /**
     * Required. Shipping address of the warehouse.
     */
    shippingAddress?: Schema$Address;
  }
  export interface Schema$WarehouseBasedDeliveryTime {
    /**
     * Required. Carrier, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved through the `listSupportedCarriers` method.
     */
    carrier?: string | null;
    /**
     * Required. Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved through the `listSupportedCarriers` method. The name of the service must be in the eddSupportedServices list.
     */
    carrierService?: string | null;
    /**
     * Shipping origin's state.
     */
    originAdministrativeArea?: string | null;
    /**
     * Shipping origin's city.
     */
    originCity?: string | null;
    /**
     * Shipping origin's country represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml).
     */
    originCountry?: string | null;
    /**
     * Shipping origin.
     */
    originPostalCode?: string | null;
    /**
     * Shipping origin's street address.
     */
    originStreetAddress?: string | null;
    /**
     * The name of the warehouse. Warehouse name need to be matched with name. If warehouseName is set, the below fields will be ignored. The warehouse info will be read from warehouse.
     */
    warehouseName?: string | null;
  }
  export interface Schema$WarehouseCutoffTime {
    /**
     * Required. Hour (24-hour clock) of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Hour is based on the timezone of warehouse.
     */
    hour?: number | null;
    /**
     * Required. Minute of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Minute is based on the timezone of warehouse.
     */
    minute?: number | null;
  }
  export interface Schema$Weight {
    /**
     * Required. The weight unit. Acceptable values are: - "`kg`" - "`lb`"
     */
    unit?: string | null;
    /**
     * Required. The weight represented as a number. The weight can have a maximum precision of four decimal places.
     */
    value?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    credentials: Resource$Accounts$Credentials;
    labels: Resource$Accounts$Labels;
    returncarrier: Resource$Accounts$Returncarrier;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.credentials = new Resource$Accounts$Credentials(this.context);
      this.labels = new Resource$Accounts$Labels(this.context);
      this.returncarrier = new Resource$Accounts$Returncarrier(this.context);
    }

    /**
     * Returns information about the authenticated user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    authinfo(
      params: Params$Resource$Accounts$Authinfo,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    authinfo(
      params?: Params$Resource$Accounts$Authinfo,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountsAuthInfoResponse>;
    authinfo(
      params: Params$Resource$Accounts$Authinfo,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    authinfo(
      params: Params$Resource$Accounts$Authinfo,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsAuthInfoResponse>,
      callback: BodyResponseCallback<Schema$AccountsAuthInfoResponse>
    ): void;
    authinfo(
      params: Params$Resource$Accounts$Authinfo,
      callback: BodyResponseCallback<Schema$AccountsAuthInfoResponse>
    ): void;
    authinfo(
      callback: BodyResponseCallback<Schema$AccountsAuthInfoResponse>
    ): void;
    authinfo(
      paramsOrCallback?:
        | Params$Resource$Accounts$Authinfo
        | BodyResponseCallback<Schema$AccountsAuthInfoResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountsAuthInfoResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountsAuthInfoResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountsAuthInfoResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Authinfo;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Authinfo;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/accounts/authinfo').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountsAuthInfoResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountsAuthInfoResponse>(parameters);
      }
    }

    /**
     * Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    claimwebsite(
      params: Params$Resource$Accounts$Claimwebsite,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    claimwebsite(
      params?: Params$Resource$Accounts$Claimwebsite,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountsClaimWebsiteResponse>;
    claimwebsite(
      params: Params$Resource$Accounts$Claimwebsite,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    claimwebsite(
      params: Params$Resource$Accounts$Claimwebsite,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>,
      callback: BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>
    ): void;
    claimwebsite(
      params: Params$Resource$Accounts$Claimwebsite,
      callback: BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>
    ): void;
    claimwebsite(
      callback: BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>
    ): void;
    claimwebsite(
      paramsOrCallback?:
        | Params$Resource$Accounts$Claimwebsite
        | BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountsClaimWebsiteResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountsClaimWebsiteResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Claimwebsite;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Claimwebsite;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/accounts/{accountId}/claimwebsite'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountsClaimWebsiteResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountsClaimWebsiteResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    custombatch(
      params: Params$Resource$Accounts$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Accounts$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountsCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Accounts$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Accounts$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$AccountsCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Accounts$Custombatch,
      callback: BodyResponseCallback<Schema$AccountsCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$AccountsCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Custombatch
        | BodyResponseCallback<Schema$AccountsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountsCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountsCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Custombatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/accounts/batch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountsCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountsCustomBatchResponse>(parameters);
      }
    }

    /**
     * Deletes a Merchant Center sub-account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Accounts$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/accounts/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(callback: BodyResponseCallback<Schema$Account>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Get
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Account> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/accounts/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * Creates a Merchant Center sub-account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Accounts$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Accounts$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    insert(
      params: Params$Resource$Accounts$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Accounts$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    insert(
      params: Params$Resource$Accounts$Insert,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Account>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Insert
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Account> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/accounts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    link(
      params: Params$Resource$Accounts$Link,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    link(
      params?: Params$Resource$Accounts$Link,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountsLinkResponse>;
    link(
      params: Params$Resource$Accounts$Link,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    link(
      params: Params$Resource$Accounts$Link,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsLinkResponse>,
      callback: BodyResponseCallback<Schema$AccountsLinkResponse>
    ): void;
    link(
      params: Params$Resource$Accounts$Link,
      callback: BodyResponseCallback<Schema$AccountsLinkResponse>
    ): void;
    link(callback: BodyResponseCallback<Schema$AccountsLinkResponse>): void;
    link(
      paramsOrCallback?:
        | Params$Resource$Accounts$Link
        | BodyResponseCallback<Schema$AccountsLinkResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountsLinkResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountsLinkResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountsLinkResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Link;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Link;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/accounts/{accountId}/link'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountsLinkResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountsLinkResponse>(parameters);
      }
    }

    /**
     * Lists the sub-accounts in your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountsListResponse>;
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsListResponse>,
      callback: BodyResponseCallback<Schema$AccountsListResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$AccountsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$AccountsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<Schema$AccountsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/accounts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountsListResponse>(parameters);
      }
    }

    /**
     * Returns the list of accounts linked to your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listlinks(
      params: Params$Resource$Accounts$Listlinks,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listlinks(
      params?: Params$Resource$Accounts$Listlinks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountsListLinksResponse>;
    listlinks(
      params: Params$Resource$Accounts$Listlinks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listlinks(
      params: Params$Resource$Accounts$Listlinks,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsListLinksResponse>,
      callback: BodyResponseCallback<Schema$AccountsListLinksResponse>
    ): void;
    listlinks(
      params: Params$Resource$Accounts$Listlinks,
      callback: BodyResponseCallback<Schema$AccountsListLinksResponse>
    ): void;
    listlinks(
      callback: BodyResponseCallback<Schema$AccountsListLinksResponse>
    ): void;
    listlinks(
      paramsOrCallback?:
        | Params$Resource$Accounts$Listlinks
        | BodyResponseCallback<Schema$AccountsListLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountsListLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountsListLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountsListLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Listlinks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Listlinks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/accounts/{accountId}/listlinks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountsListLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountsListLinksResponse>(parameters);
      }
    }

    /**
     * Request verification code to start phone verification.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    requestphoneverification(
      params: Params$Resource$Accounts$Requestphoneverification,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    requestphoneverification(
      params?: Params$Resource$Accounts$Requestphoneverification,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RequestPhoneVerificationResponse>;
    requestphoneverification(
      params: Params$Resource$Accounts$Requestphoneverification,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    requestphoneverification(
      params: Params$Resource$Accounts$Requestphoneverification,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RequestPhoneVerificationResponse>,
      callback: BodyResponseCallback<Schema$RequestPhoneVerificationResponse>
    ): void;
    requestphoneverification(
      params: Params$Resource$Accounts$Requestphoneverification,
      callback: BodyResponseCallback<Schema$RequestPhoneVerificationResponse>
    ): void;
    requestphoneverification(
      callback: BodyResponseCallback<Schema$RequestPhoneVerificationResponse>
    ): void;
    requestphoneverification(
      paramsOrCallback?:
        | Params$Resource$Accounts$Requestphoneverification
        | BodyResponseCallback<Schema$RequestPhoneVerificationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RequestPhoneVerificationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RequestPhoneVerificationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RequestPhoneVerificationResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Requestphoneverification;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Requestphoneverification;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/accounts/{accountId}/requestphoneverification'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RequestPhoneVerificationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RequestPhoneVerificationResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Accounts$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Accounts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    update(
      params: Params$Resource$Accounts$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Accounts$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    update(
      params: Params$Resource$Accounts$Update,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    update(callback: BodyResponseCallback<Schema$Account>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Update
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Account> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/accounts/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * Updates labels that are assigned to the Merchant Center account by CSS user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updatelabels(
      params: Params$Resource$Accounts$Updatelabels,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updatelabels(
      params?: Params$Resource$Accounts$Updatelabels,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountsUpdateLabelsResponse>;
    updatelabels(
      params: Params$Resource$Accounts$Updatelabels,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updatelabels(
      params: Params$Resource$Accounts$Updatelabels,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsUpdateLabelsResponse>,
      callback: BodyResponseCallback<Schema$AccountsUpdateLabelsResponse>
    ): void;
    updatelabels(
      params: Params$Resource$Accounts$Updatelabels,
      callback: BodyResponseCallback<Schema$AccountsUpdateLabelsResponse>
    ): void;
    updatelabels(
      callback: BodyResponseCallback<Schema$AccountsUpdateLabelsResponse>
    ): void;
    updatelabels(
      paramsOrCallback?:
        | Params$Resource$Accounts$Updatelabels
        | BodyResponseCallback<Schema$AccountsUpdateLabelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountsUpdateLabelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountsUpdateLabelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountsUpdateLabelsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Updatelabels;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Updatelabels;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/accounts/{accountId}/updatelabels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountsUpdateLabelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountsUpdateLabelsResponse>(
          parameters
        );
      }
    }

    /**
     * Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    verifyphonenumber(
      params: Params$Resource$Accounts$Verifyphonenumber,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    verifyphonenumber(
      params?: Params$Resource$Accounts$Verifyphonenumber,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VerifyPhoneNumberResponse>;
    verifyphonenumber(
      params: Params$Resource$Accounts$Verifyphonenumber,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    verifyphonenumber(
      params: Params$Resource$Accounts$Verifyphonenumber,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VerifyPhoneNumberResponse>,
      callback: BodyResponseCallback<Schema$VerifyPhoneNumberResponse>
    ): void;
    verifyphonenumber(
      params: Params$Resource$Accounts$Verifyphonenumber,
      callback: BodyResponseCallback<Schema$VerifyPhoneNumberResponse>
    ): void;
    verifyphonenumber(
      callback: BodyResponseCallback<Schema$VerifyPhoneNumberResponse>
    ): void;
    verifyphonenumber(
      paramsOrCallback?:
        | Params$Resource$Accounts$Verifyphonenumber
        | BodyResponseCallback<Schema$VerifyPhoneNumberResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VerifyPhoneNumberResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VerifyPhoneNumberResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VerifyPhoneNumberResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Verifyphonenumber;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Verifyphonenumber;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/accounts/{accountId}/verifyphonenumber'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VerifyPhoneNumberResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VerifyPhoneNumberResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Authinfo
    extends StandardParameters {}
  export interface Params$Resource$Accounts$Claimwebsite
    extends StandardParameters {
    /**
     * The ID of the account whose website is claimed.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
    /**
     * Only available to selected merchants, for example multi-client accounts (MCAs) and their sub-accounts. When set to `True`, this option removes any existing claim on the requested website and replaces it with a claim from the account that makes the request.
     */
    overwrite?: boolean;
  }
  export interface Params$Resource$Accounts$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountsCustomBatchRequest;
  }
  export interface Params$Resource$Accounts$Delete extends StandardParameters {
    /**
     * The ID of the account.
     */
    accountId?: string;
    /**
     * Option to delete sub-accounts with products. The default value is false.
     */
    force?: boolean;
    /**
     * The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * The ID of the account.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
    /**
     * Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant".
     */
    view?: string;
  }
  export interface Params$Resource$Accounts$Insert extends StandardParameters {
    /**
     * The ID of the managing account. This must be a multi-client account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }
  export interface Params$Resource$Accounts$Link extends StandardParameters {
    /**
     * The ID of the account that should be linked.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountsLinkRequest;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * If view is set to "css", only return accounts that are assigned label with given ID.
     */
    label?: string;
    /**
     * The maximum number of accounts to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the managing account. This must be a multi-client account.
     */
    merchantId?: string;
    /**
     * If set, only the accounts with the given name (case sensitive) will be returned.
     */
    name?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant".
     */
    view?: string;
  }
  export interface Params$Resource$Accounts$Listlinks
    extends StandardParameters {
    /**
     * The ID of the account for which to list links.
     */
    accountId?: string;
    /**
     * The maximum number of links to return in the response, used for pagination. The minimum allowed value is 5 results per page. If provided value is lower than 5, it will be automatically increased to 5.
     */
    maxResults?: number;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounts$Requestphoneverification
    extends StandardParameters {
    /**
     * Required. The ID of the account.
     */
    accountId?: string;
    /**
     * Required. The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RequestPhoneVerificationRequest;
  }
  export interface Params$Resource$Accounts$Update extends StandardParameters {
    /**
     * The ID of the account.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }
  export interface Params$Resource$Accounts$Updatelabels
    extends StandardParameters {
    /**
     * The ID of the account whose labels are updated.
     */
    accountId?: string;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountsUpdateLabelsRequest;
  }
  export interface Params$Resource$Accounts$Verifyphonenumber
    extends StandardParameters {
    /**
     * Required. The ID of the account.
     */
    accountId?: string;
    /**
     * Required. The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VerifyPhoneNumberRequest;
  }

  export class Resource$Accounts$Credentials {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Accounts$Credentials$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Credentials$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountCredentials>;
    create(
      params: Params$Resource$Accounts$Credentials$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Credentials$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AccountCredentials>,
      callback: BodyResponseCallback<Schema$AccountCredentials>
    ): void;
    create(
      params: Params$Resource$Accounts$Credentials$Create,
      callback: BodyResponseCallback<Schema$AccountCredentials>
    ): void;
    create(callback: BodyResponseCallback<Schema$AccountCredentials>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Credentials$Create
        | BodyResponseCallback<Schema$AccountCredentials>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountCredentials>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountCredentials>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountCredentials>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Credentials$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Credentials$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/accounts/{accountId}/credentials'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountCredentials>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountCredentials>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Credentials$Create
    extends StandardParameters {
    /**
     * Required. The merchant id of the account these credentials belong to.
     */
    accountId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountCredentials;
  }

  export class Resource$Accounts$Labels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new label, not assigned to any account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Accounts$Labels$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Labels$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountLabel>;
    create(
      params: Params$Resource$Accounts$Labels$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Labels$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AccountLabel>,
      callback: BodyResponseCallback<Schema$AccountLabel>
    ): void;
    create(
      params: Params$Resource$Accounts$Labels$Create,
      callback: BodyResponseCallback<Schema$AccountLabel>
    ): void;
    create(callback: BodyResponseCallback<Schema$AccountLabel>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Labels$Create
        | BodyResponseCallback<Schema$AccountLabel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountLabel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountLabel>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AccountLabel> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Labels$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Labels$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/accounts/{accountId}/labels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountLabel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountLabel>(parameters);
      }
    }

    /**
     * Deletes a label and removes it from all accounts to which it was assigned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Accounts$Labels$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Labels$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Labels$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Labels$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Labels$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Labels$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Labels$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Labels$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/accounts/{accountId}/labels/{labelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'labelId'],
        pathParams: ['accountId', 'labelId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Lists the labels assigned to an account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Labels$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Labels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAccountLabelsResponse>;
    list(
      params: Params$Resource$Accounts$Labels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Labels$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountLabelsResponse>,
      callback: BodyResponseCallback<Schema$ListAccountLabelsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Labels$List,
      callback: BodyResponseCallback<Schema$ListAccountLabelsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAccountLabelsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Labels$List
        | BodyResponseCallback<Schema$ListAccountLabelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAccountLabelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAccountLabelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAccountLabelsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Labels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Labels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/accounts/{accountId}/labels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAccountLabelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAccountLabelsResponse>(parameters);
      }
    }

    /**
     * Updates a label.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Accounts$Labels$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Labels$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountLabel>;
    patch(
      params: Params$Resource$Accounts$Labels$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Labels$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$AccountLabel>,
      callback: BodyResponseCallback<Schema$AccountLabel>
    ): void;
    patch(
      params: Params$Resource$Accounts$Labels$Patch,
      callback: BodyResponseCallback<Schema$AccountLabel>
    ): void;
    patch(callback: BodyResponseCallback<Schema$AccountLabel>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Labels$Patch
        | BodyResponseCallback<Schema$AccountLabel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountLabel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountLabel>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AccountLabel> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Labels$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Labels$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/accounts/{accountId}/labels/{labelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'labelId'],
        pathParams: ['accountId', 'labelId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountLabel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountLabel>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Labels$Create
    extends StandardParameters {
    /**
     * Required. The id of the account this label belongs to.
     */
    accountId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountLabel;
  }
  export interface Params$Resource$Accounts$Labels$Delete
    extends StandardParameters {
    /**
     * Required. The id of the account that owns the label.
     */
    accountId?: string;
    /**
     * Required. The id of the label to delete.
     */
    labelId?: string;
  }
  export interface Params$Resource$Accounts$Labels$List
    extends StandardParameters {
    /**
     * Required. The account id for whose labels are to be listed.
     */
    accountId?: string;
    /**
     * The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAccountLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLabels` must match the call that provided the page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounts$Labels$Patch
    extends StandardParameters {
    /**
     * Required. The id of the account this label belongs to.
     */
    accountId?: string;
    /**
     * Required. The id of the label to update.
     */
    labelId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountLabel;
  }

  export class Resource$Accounts$Returncarrier {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Links return carrier to a merchant account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Accounts$Returncarrier$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Returncarrier$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountReturnCarrier>;
    create(
      params: Params$Resource$Accounts$Returncarrier$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Returncarrier$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountReturnCarrier>,
      callback: BodyResponseCallback<Schema$AccountReturnCarrier>
    ): void;
    create(
      params: Params$Resource$Accounts$Returncarrier$Create,
      callback: BodyResponseCallback<Schema$AccountReturnCarrier>
    ): void;
    create(callback: BodyResponseCallback<Schema$AccountReturnCarrier>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Returncarrier$Create
        | BodyResponseCallback<Schema$AccountReturnCarrier>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountReturnCarrier>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountReturnCarrier>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountReturnCarrier>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Returncarrier$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Returncarrier$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/accounts/{accountId}/returncarrier'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountReturnCarrier>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountReturnCarrier>(parameters);
      }
    }

    /**
     * Delete a return carrier in the merchant account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Accounts$Returncarrier$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Returncarrier$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Accounts$Returncarrier$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Returncarrier$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Accounts$Returncarrier$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Returncarrier$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Returncarrier$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Returncarrier$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/accounts/{accountId}/returncarrier/{carrierAccountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'carrierAccountId'],
        pathParams: ['accountId', 'carrierAccountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Lists available return carriers in the merchant account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Returncarrier$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Returncarrier$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAccountReturnCarrierResponse>;
    list(
      params: Params$Resource$Accounts$Returncarrier$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Returncarrier$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountReturnCarrierResponse>,
      callback: BodyResponseCallback<Schema$ListAccountReturnCarrierResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Returncarrier$List,
      callback: BodyResponseCallback<Schema$ListAccountReturnCarrierResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAccountReturnCarrierResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Returncarrier$List
        | BodyResponseCallback<Schema$ListAccountReturnCarrierResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAccountReturnCarrierResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAccountReturnCarrierResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAccountReturnCarrierResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Returncarrier$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Returncarrier$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/accounts/{accountId}/returncarrier'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAccountReturnCarrierResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAccountReturnCarrierResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a return carrier in the merchant account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Accounts$Returncarrier$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Returncarrier$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountReturnCarrier>;
    patch(
      params: Params$Resource$Accounts$Returncarrier$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Returncarrier$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountReturnCarrier>,
      callback: BodyResponseCallback<Schema$AccountReturnCarrier>
    ): void;
    patch(
      params: Params$Resource$Accounts$Returncarrier$Patch,
      callback: BodyResponseCallback<Schema$AccountReturnCarrier>
    ): void;
    patch(callback: BodyResponseCallback<Schema$AccountReturnCarrier>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Returncarrier$Patch
        | BodyResponseCallback<Schema$AccountReturnCarrier>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountReturnCarrier>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountReturnCarrier>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountReturnCarrier>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Returncarrier$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Returncarrier$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/accounts/{accountId}/returncarrier/{carrierAccountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'carrierAccountId'],
        pathParams: ['accountId', 'carrierAccountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountReturnCarrier>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountReturnCarrier>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Returncarrier$Create
    extends StandardParameters {
    /**
     * Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
     */
    accountId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountReturnCarrier;
  }
  export interface Params$Resource$Accounts$Returncarrier$Delete
    extends StandardParameters {
    /**
     * Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
     */
    accountId?: string;
    /**
     * Required. The Google-provided unique carrier ID, used to update the resource.
     */
    carrierAccountId?: string;
  }
  export interface Params$Resource$Accounts$Returncarrier$List
    extends StandardParameters {
    /**
     * Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
     */
    accountId?: string;
  }
  export interface Params$Resource$Accounts$Returncarrier$Patch
    extends StandardParameters {
    /**
     * Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
     */
    accountId?: string;
    /**
     * Required. The Google-provided unique carrier ID, used to update the resource.
     */
    carrierAccountId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountReturnCarrier;
  }

  export class Resource$Accountstatuses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves multiple Merchant Center account statuses in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    custombatch(
      params: Params$Resource$Accountstatuses$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Accountstatuses$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountstatusesCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Accountstatuses$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Accountstatuses$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Accountstatuses$Custombatch,
      callback: BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Accountstatuses$Custombatch
        | BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountstatusesCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountstatuses$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountstatuses$Custombatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/accountstatuses/batch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountstatusesCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountstatusesCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accountstatuses$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accountstatuses$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountStatus>;
    get(
      params: Params$Resource$Accountstatuses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accountstatuses$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AccountStatus>,
      callback: BodyResponseCallback<Schema$AccountStatus>
    ): void;
    get(
      params: Params$Resource$Accountstatuses$Get,
      callback: BodyResponseCallback<Schema$AccountStatus>
    ): void;
    get(callback: BodyResponseCallback<Schema$AccountStatus>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accountstatuses$Get
        | BodyResponseCallback<Schema$AccountStatus>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountStatus>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountStatus>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AccountStatus> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountstatuses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountstatuses$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/accountstatuses/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountStatus>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountStatus>(parameters);
      }
    }

    /**
     * Lists the statuses of the sub-accounts in your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accountstatuses$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accountstatuses$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountstatusesListResponse>;
    list(
      params: Params$Resource$Accountstatuses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accountstatuses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountstatusesListResponse>,
      callback: BodyResponseCallback<Schema$AccountstatusesListResponse>
    ): void;
    list(
      params: Params$Resource$Accountstatuses$List,
      callback: BodyResponseCallback<Schema$AccountstatusesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$AccountstatusesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accountstatuses$List
        | BodyResponseCallback<Schema$AccountstatusesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountstatusesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountstatusesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountstatusesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountstatuses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountstatuses$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/accountstatuses'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountstatusesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountstatusesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accountstatuses$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountstatusesCustomBatchRequest;
  }
  export interface Params$Resource$Accountstatuses$Get
    extends StandardParameters {
    /**
     * The ID of the account.
     */
    accountId?: string;
    /**
     * If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     */
    destinations?: string[];
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Accountstatuses$List
    extends StandardParameters {
    /**
     * If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     */
    destinations?: string[];
    /**
     * The maximum number of account statuses to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the managing account. This must be a multi-client account.
     */
    merchantId?: string;
    /**
     * If set, only the accounts with the given name (case sensitive) will be returned.
     */
    name?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }

  export class Resource$Accounttax {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves and updates tax settings of multiple accounts in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    custombatch(
      params: Params$Resource$Accounttax$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Accounttax$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccounttaxCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Accounttax$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Accounttax$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Accounttax$Custombatch,
      callback: BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Accounttax$Custombatch
        | BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccounttaxCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccounttaxCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttax$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounttax$Custombatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/accounttax/batch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccounttaxCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccounttaxCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves the tax settings of the account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounttax$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounttax$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountTax>;
    get(
      params: Params$Resource$Accounttax$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounttax$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AccountTax>,
      callback: BodyResponseCallback<Schema$AccountTax>
    ): void;
    get(
      params: Params$Resource$Accounttax$Get,
      callback: BodyResponseCallback<Schema$AccountTax>
    ): void;
    get(callback: BodyResponseCallback<Schema$AccountTax>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounttax$Get
        | BodyResponseCallback<Schema$AccountTax>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountTax>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountTax>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AccountTax> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounttax$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounttax$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/accounttax/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountTax>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountTax>(parameters);
      }
    }

    /**
     * Lists the tax settings of the sub-accounts in your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounttax$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounttax$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccounttaxListResponse>;
    list(
      params: Params$Resource$Accounttax$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounttax$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccounttaxListResponse>,
      callback: BodyResponseCallback<Schema$AccounttaxListResponse>
    ): void;
    list(
      params: Params$Resource$Accounttax$List,
      callback: BodyResponseCallback<Schema$AccounttaxListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$AccounttaxListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounttax$List
        | BodyResponseCallback<Schema$AccounttaxListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccounttaxListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccounttaxListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccounttaxListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounttax$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounttax$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/accounttax').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccounttaxListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccounttaxListResponse>(parameters);
      }
    }

    /**
     * Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Accounttax$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Accounttax$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountTax>;
    update(
      params: Params$Resource$Accounttax$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Accounttax$Update,
      options: MethodOptions | BodyResponseCallback<Schema$AccountTax>,
      callback: BodyResponseCallback<Schema$AccountTax>
    ): void;
    update(
      params: Params$Resource$Accounttax$Update,
      callback: BodyResponseCallback<Schema$AccountTax>
    ): void;
    update(callback: BodyResponseCallback<Schema$AccountTax>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounttax$Update
        | BodyResponseCallback<Schema$AccountTax>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountTax>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountTax>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AccountTax> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttax$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounttax$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/accounttax/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountTax>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountTax>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounttax$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AccounttaxCustomBatchRequest;
  }
  export interface Params$Resource$Accounttax$Get extends StandardParameters {
    /**
     * The ID of the account for which to get/update account tax settings.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Accounttax$List extends StandardParameters {
    /**
     * The maximum number of tax settings to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the managing account. This must be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounttax$Update
    extends StandardParameters {
    /**
     * The ID of the account for which to get/update account tax settings.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountTax;
  }

  export class Resource$Collections {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Collections$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Collections$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Collection>;
    create(
      params: Params$Resource$Collections$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Collections$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Collection>,
      callback: BodyResponseCallback<Schema$Collection>
    ): void;
    create(
      params: Params$Resource$Collections$Create,
      callback: BodyResponseCallback<Schema$Collection>
    ): void;
    create(callback: BodyResponseCallback<Schema$Collection>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Collections$Create
        | BodyResponseCallback<Schema$Collection>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Collection>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Collection>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Collection> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Collections$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Collections$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/collections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Collection>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Collection>(parameters);
      }
    }

    /**
     * Deletes a collection from your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Collections$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Collections$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Collections$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Collections$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Collections$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Collections$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Collections$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Collections$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/collections/{collectionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'collectionId'],
        pathParams: ['collectionId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a collection from your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Collections$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Collections$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Collection>;
    get(
      params: Params$Resource$Collections$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Collections$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Collection>,
      callback: BodyResponseCallback<Schema$Collection>
    ): void;
    get(
      params: Params$Resource$Collections$Get,
      callback: BodyResponseCallback<Schema$Collection>
    ): void;
    get(callback: BodyResponseCallback<Schema$Collection>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Collections$Get
        | BodyResponseCallback<Schema$Collection>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Collection>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Collection>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Collection> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Collections$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Collections$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/collections/{collectionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'collectionId'],
        pathParams: ['collectionId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Collection>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Collection>(parameters);
      }
    }

    /**
     * Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Collections$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Collections$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCollectionsResponse>;
    list(
      params: Params$Resource$Collections$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Collections$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCollectionsResponse>,
      callback: BodyResponseCallback<Schema$ListCollectionsResponse>
    ): void;
    list(
      params: Params$Resource$Collections$List,
      callback: BodyResponseCallback<Schema$ListCollectionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCollectionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Collections$List
        | BodyResponseCallback<Schema$ListCollectionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCollectionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCollectionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCollectionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Collections$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Collections$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/collections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCollectionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCollectionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Collections$Create
    extends StandardParameters {
    /**
     * Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Collection;
  }
  export interface Params$Resource$Collections$Delete
    extends StandardParameters {
    /**
     * Required. The collectionId of the collection. CollectionId is the same as the REST ID of the collection.
     */
    collectionId?: string;
    /**
     * Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Collections$Get extends StandardParameters {
    /**
     * Required. The REST ID of the collection.
     */
    collectionId?: string;
    /**
     * Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Collections$List extends StandardParameters {
    /**
     * Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The maximum number of collections to return in the response, used for paging. Defaults to 50; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     */
    pageToken?: string;
  }

  export class Resource$Collectionstatuses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the status of a collection from your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Collectionstatuses$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Collectionstatuses$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CollectionStatus>;
    get(
      params: Params$Resource$Collectionstatuses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Collectionstatuses$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CollectionStatus>,
      callback: BodyResponseCallback<Schema$CollectionStatus>
    ): void;
    get(
      params: Params$Resource$Collectionstatuses$Get,
      callback: BodyResponseCallback<Schema$CollectionStatus>
    ): void;
    get(callback: BodyResponseCallback<Schema$CollectionStatus>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Collectionstatuses$Get
        | BodyResponseCallback<Schema$CollectionStatus>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CollectionStatus>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CollectionStatus>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CollectionStatus> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Collectionstatuses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Collectionstatuses$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/collectionstatuses/{collectionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'collectionId'],
        pathParams: ['collectionId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CollectionStatus>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CollectionStatus>(parameters);
      }
    }

    /**
     * Lists the statuses of the collections in your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Collectionstatuses$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Collectionstatuses$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCollectionStatusesResponse>;
    list(
      params: Params$Resource$Collectionstatuses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Collectionstatuses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCollectionStatusesResponse>,
      callback: BodyResponseCallback<Schema$ListCollectionStatusesResponse>
    ): void;
    list(
      params: Params$Resource$Collectionstatuses$List,
      callback: BodyResponseCallback<Schema$ListCollectionStatusesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCollectionStatusesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Collectionstatuses$List
        | BodyResponseCallback<Schema$ListCollectionStatusesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCollectionStatusesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCollectionStatusesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCollectionStatusesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Collectionstatuses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Collectionstatuses$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/collectionstatuses'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCollectionStatusesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCollectionStatusesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Collectionstatuses$Get
    extends StandardParameters {
    /**
     * Required. The collectionId of the collection. CollectionId is the same as the REST ID of the collection.
     */
    collectionId?: string;
    /**
     * Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Collectionstatuses$List
    extends StandardParameters {
    /**
     * Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The maximum number of collection statuses to return in the response, used for paging. Defaults to 50; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     */
    pageToken?: string;
  }

  export class Resource$Conversionsources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new conversion source.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Conversionsources$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Conversionsources$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConversionSource>;
    create(
      params: Params$Resource$Conversionsources$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Conversionsources$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ConversionSource>,
      callback: BodyResponseCallback<Schema$ConversionSource>
    ): void;
    create(
      params: Params$Resource$Conversionsources$Create,
      callback: BodyResponseCallback<Schema$ConversionSource>
    ): void;
    create(callback: BodyResponseCallback<Schema$ConversionSource>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Conversionsources$Create
        | BodyResponseCallback<Schema$ConversionSource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConversionSource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConversionSource>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ConversionSource> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conversionsources$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conversionsources$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/conversionsources'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ConversionSource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConversionSource>(parameters);
      }
    }

    /**
     * Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Conversionsources$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Conversionsources$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Conversionsources$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Conversionsources$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Conversionsources$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Conversionsources$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conversionsources$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conversionsources$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/conversionsources/{conversionSourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'conversionSourceId'],
        pathParams: ['conversionSourceId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Fetches a conversion source.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Conversionsources$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Conversionsources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConversionSource>;
    get(
      params: Params$Resource$Conversionsources$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Conversionsources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ConversionSource>,
      callback: BodyResponseCallback<Schema$ConversionSource>
    ): void;
    get(
      params: Params$Resource$Conversionsources$Get,
      callback: BodyResponseCallback<Schema$ConversionSource>
    ): void;
    get(callback: BodyResponseCallback<Schema$ConversionSource>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Conversionsources$Get
        | BodyResponseCallback<Schema$ConversionSource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConversionSource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConversionSource>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ConversionSource> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conversionsources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conversionsources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/conversionsources/{conversionSourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'conversionSourceId'],
        pathParams: ['conversionSourceId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ConversionSource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConversionSource>(parameters);
      }
    }

    /**
     * Retrieves the list of conversion sources the caller has access to.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Conversionsources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Conversionsources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConversionSourcesResponse>;
    list(
      params: Params$Resource$Conversionsources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Conversionsources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConversionSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListConversionSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Conversionsources$List,
      callback: BodyResponseCallback<Schema$ListConversionSourcesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConversionSourcesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Conversionsources$List
        | BodyResponseCallback<Schema$ListConversionSourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConversionSourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConversionSourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListConversionSourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conversionsources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conversionsources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/conversionsources'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListConversionSourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConversionSourcesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates information of an existing conversion source.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Conversionsources$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Conversionsources$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConversionSource>;
    patch(
      params: Params$Resource$Conversionsources$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Conversionsources$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ConversionSource>,
      callback: BodyResponseCallback<Schema$ConversionSource>
    ): void;
    patch(
      params: Params$Resource$Conversionsources$Patch,
      callback: BodyResponseCallback<Schema$ConversionSource>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ConversionSource>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Conversionsources$Patch
        | BodyResponseCallback<Schema$ConversionSource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConversionSource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConversionSource>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ConversionSource> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conversionsources$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conversionsources$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/conversionsources/{conversionSourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'conversionSourceId'],
        pathParams: ['conversionSourceId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ConversionSource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConversionSource>(parameters);
      }
    }

    /**
     * Re-enables an archived conversion source.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    undelete(
      params: Params$Resource$Conversionsources$Undelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    undelete(
      params?: Params$Resource$Conversionsources$Undelete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    undelete(
      params: Params$Resource$Conversionsources$Undelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undelete(
      params: Params$Resource$Conversionsources$Undelete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    undelete(
      params: Params$Resource$Conversionsources$Undelete,
      callback: BodyResponseCallback<void>
    ): void;
    undelete(callback: BodyResponseCallback<void>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Conversionsources$Undelete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conversionsources$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conversionsources$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/conversionsources/{conversionSourceId}:undelete'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'conversionSourceId'],
        pathParams: ['conversionSourceId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Conversionsources$Create
    extends StandardParameters {
    /**
     * Required. The ID of the account that owns the new conversion source.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConversionSource;
  }
  export interface Params$Resource$Conversionsources$Delete
    extends StandardParameters {
    /**
     * Required. The ID of the conversion source to be deleted.
     */
    conversionSourceId?: string;
    /**
     * Required. The ID of the account that owns the new conversion source.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Conversionsources$Get
    extends StandardParameters {
    /**
     * Required. The REST ID of the collection.
     */
    conversionSourceId?: string;
    /**
     * Required. The ID of the account that owns the new conversion source.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Conversionsources$List
    extends StandardParameters {
    /**
     * Required. The ID of the account that owns the new conversion source.
     */
    merchantId?: string;
    /**
     * The maximum number of conversion sources to return in a page. If no `page_size` is specified, `100` is used as the default value. The maximum value is `200`. Values above `200` will be coerced to `200`. Regardless of pagination, at most `200` conversion sources are returned in total.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * If true, also returns archived conversion sources.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Conversionsources$Patch
    extends StandardParameters {
    /**
     * Required. The ID of the conversion source to be updated.
     */
    conversionSourceId?: string;
    /**
     * Required. The ID of the account that owns the new conversion source.
     */
    merchantId?: string;
    /**
     * Required. List of fields being updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConversionSource;
  }
  export interface Params$Resource$Conversionsources$Undelete
    extends StandardParameters {
    /**
     * Required. The ID of the conversion source to be undeleted.
     */
    conversionSourceId?: string;
    /**
     * Required. The ID of the account that owns the new conversion source.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteConversionSourceRequest;
  }

  export class Resource$Csses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a single CSS domain by ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Csses$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Csses$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Css>;
    get(
      params: Params$Resource$Csses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Csses$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Css>,
      callback: BodyResponseCallback<Schema$Css>
    ): void;
    get(
      params: Params$Resource$Csses$Get,
      callback: BodyResponseCallback<Schema$Css>
    ): void;
    get(callback: BodyResponseCallback<Schema$Css>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Csses$Get
        | BodyResponseCallback<Schema$Css>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Css>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Css>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Css> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Csses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Csses$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{cssGroupId}/csses/{cssDomainId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['cssGroupId', 'cssDomainId'],
        pathParams: ['cssDomainId', 'cssGroupId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Css>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Css>(parameters);
      }
    }

    /**
     * Lists CSS domains affiliated with a CSS group.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Csses$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Csses$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCssesResponse>;
    list(
      params: Params$Resource$Csses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Csses$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListCssesResponse>,
      callback: BodyResponseCallback<Schema$ListCssesResponse>
    ): void;
    list(
      params: Params$Resource$Csses$List,
      callback: BodyResponseCallback<Schema$ListCssesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCssesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Csses$List
        | BodyResponseCallback<Schema$ListCssesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCssesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCssesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCssesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Csses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Csses$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{cssGroupId}/csses').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['cssGroupId'],
        pathParams: ['cssGroupId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCssesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCssesResponse>(parameters);
      }
    }

    /**
     * Updates labels that are assigned to a CSS domain by its CSS group.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updatelabels(
      params: Params$Resource$Csses$Updatelabels,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updatelabels(
      params?: Params$Resource$Csses$Updatelabels,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Css>;
    updatelabels(
      params: Params$Resource$Csses$Updatelabels,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updatelabels(
      params: Params$Resource$Csses$Updatelabels,
      options: MethodOptions | BodyResponseCallback<Schema$Css>,
      callback: BodyResponseCallback<Schema$Css>
    ): void;
    updatelabels(
      params: Params$Resource$Csses$Updatelabels,
      callback: BodyResponseCallback<Schema$Css>
    ): void;
    updatelabels(callback: BodyResponseCallback<Schema$Css>): void;
    updatelabels(
      paramsOrCallback?:
        | Params$Resource$Csses$Updatelabels
        | BodyResponseCallback<Schema$Css>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Css>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Css>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Css> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Csses$Updatelabels;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Csses$Updatelabels;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{cssGroupId}/csses/{cssDomainId}/updatelabels'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['cssGroupId', 'cssDomainId'],
        pathParams: ['cssDomainId', 'cssGroupId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Css>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Css>(parameters);
      }
    }
  }

  export interface Params$Resource$Csses$Get extends StandardParameters {
    /**
     * Required. The ID of the CSS domain to return.
     */
    cssDomainId?: string;
    /**
     * Required. The ID of the managing account. If this parameter is not the same as [cssDomainId](#cssDomainId), then this ID must be a CSS group ID and `cssDomainId` must be the ID of a CSS domain affiliated with this group.
     */
    cssGroupId?: string;
  }
  export interface Params$Resource$Csses$List extends StandardParameters {
    /**
     * Required. The CSS group ID of CSS domains to be listed.
     */
    cssGroupId?: string;
    /**
     * The maximum number of CSS domains to return. The service may return fewer than this value. If unspecified, at most 50 CSS domains will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListCsses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCsses` must match the call that provided the page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Csses$Updatelabels
    extends StandardParameters {
    /**
     * Required. The ID of the updated CSS domain.
     */
    cssDomainId?: string;
    /**
     * Required. The CSS group ID of the updated CSS domain.
     */
    cssGroupId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LabelIds;
  }

  export class Resource$Datafeeds {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    custombatch(
      params: Params$Resource$Datafeeds$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Datafeeds$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatafeedsCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Datafeeds$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Datafeeds$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Datafeeds$Custombatch,
      callback: BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Datafeeds$Custombatch
        | BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatafeedsCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DatafeedsCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Datafeeds$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeeds$Custombatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/datafeeds/batch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatafeedsCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DatafeedsCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes a datafeed configuration from your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Datafeeds$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Datafeeds$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Datafeeds$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Datafeeds$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Datafeeds$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Datafeeds$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datafeeds$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeeds$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/datafeeds/{datafeedId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchnow(
      params: Params$Resource$Datafeeds$Fetchnow,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchnow(
      params?: Params$Resource$Datafeeds$Fetchnow,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatafeedsFetchNowResponse>;
    fetchnow(
      params: Params$Resource$Datafeeds$Fetchnow,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchnow(
      params: Params$Resource$Datafeeds$Fetchnow,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DatafeedsFetchNowResponse>,
      callback: BodyResponseCallback<Schema$DatafeedsFetchNowResponse>
    ): void;
    fetchnow(
      params: Params$Resource$Datafeeds$Fetchnow,
      callback: BodyResponseCallback<Schema$DatafeedsFetchNowResponse>
    ): void;
    fetchnow(
      callback: BodyResponseCallback<Schema$DatafeedsFetchNowResponse>
    ): void;
    fetchnow(
      paramsOrCallback?:
        | Params$Resource$Datafeeds$Fetchnow
        | BodyResponseCallback<Schema$DatafeedsFetchNowResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatafeedsFetchNowResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatafeedsFetchNowResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DatafeedsFetchNowResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Datafeeds$Fetchnow;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeeds$Fetchnow;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/datafeeds/{datafeedId}/fetchNow'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatafeedsFetchNowResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DatafeedsFetchNowResponse>(parameters);
      }
    }

    /**
     * Retrieves a datafeed configuration from your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Datafeeds$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Datafeeds$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Datafeed>;
    get(
      params: Params$Resource$Datafeeds$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Datafeeds$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Datafeed>,
      callback: BodyResponseCallback<Schema$Datafeed>
    ): void;
    get(
      params: Params$Resource$Datafeeds$Get,
      callback: BodyResponseCallback<Schema$Datafeed>
    ): void;
    get(callback: BodyResponseCallback<Schema$Datafeed>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Datafeeds$Get
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Datafeed> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datafeeds$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeeds$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/datafeeds/{datafeedId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Datafeed>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Datafeed>(parameters);
      }
    }

    /**
     * Registers a datafeed configuration with your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Datafeeds$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Datafeeds$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Datafeed>;
    insert(
      params: Params$Resource$Datafeeds$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Datafeeds$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Datafeed>,
      callback: BodyResponseCallback<Schema$Datafeed>
    ): void;
    insert(
      params: Params$Resource$Datafeeds$Insert,
      callback: BodyResponseCallback<Schema$Datafeed>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Datafeed>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Datafeeds$Insert
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Datafeed> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datafeeds$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeeds$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/datafeeds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Datafeed>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Datafeed>(parameters);
      }
    }

    /**
     * Lists the configurations for datafeeds in your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Datafeeds$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Datafeeds$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatafeedsListResponse>;
    list(
      params: Params$Resource$Datafeeds$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Datafeeds$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DatafeedsListResponse>,
      callback: BodyResponseCallback<Schema$DatafeedsListResponse>
    ): void;
    list(
      params: Params$Resource$Datafeeds$List,
      callback: BodyResponseCallback<Schema$DatafeedsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$DatafeedsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Datafeeds$List
        | BodyResponseCallback<Schema$DatafeedsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatafeedsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatafeedsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DatafeedsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datafeeds$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeeds$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/datafeeds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatafeedsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DatafeedsListResponse>(parameters);
      }
    }

    /**
     * Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Datafeeds$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Datafeeds$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Datafeed>;
    update(
      params: Params$Resource$Datafeeds$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Datafeeds$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Datafeed>,
      callback: BodyResponseCallback<Schema$Datafeed>
    ): void;
    update(
      params: Params$Resource$Datafeeds$Update,
      callback: BodyResponseCallback<Schema$Datafeed>
    ): void;
    update(callback: BodyResponseCallback<Schema$Datafeed>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Datafeeds$Update
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Datafeed>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Datafeed> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datafeeds$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeeds$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/datafeeds/{datafeedId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Datafeed>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Datafeed>(parameters);
      }
    }
  }

  export interface Params$Resource$Datafeeds$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$DatafeedsCustomBatchRequest;
  }
  export interface Params$Resource$Datafeeds$Delete extends StandardParameters {
    /**
     * The ID of the datafeed.
     */
    datafeedId?: string;
    /**
     * The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Datafeeds$Fetchnow
    extends StandardParameters {
    /**
     * The ID of the datafeed to be fetched.
     */
    datafeedId?: string;
    /**
     * The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Datafeeds$Get extends StandardParameters {
    /**
     * The ID of the datafeed.
     */
    datafeedId?: string;
    /**
     * The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Datafeeds$Insert extends StandardParameters {
    /**
     * The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Datafeed;
  }
  export interface Params$Resource$Datafeeds$List extends StandardParameters {
    /**
     * The maximum number of products to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Datafeeds$Update extends StandardParameters {
    /**
     * The ID of the datafeed.
     */
    datafeedId?: string;
    /**
     * The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Datafeed;
  }

  export class Resource$Datafeedstatuses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets multiple Merchant Center datafeed statuses in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    custombatch(
      params: Params$Resource$Datafeedstatuses$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Datafeedstatuses$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatafeedstatusesCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Datafeedstatuses$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Datafeedstatuses$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Datafeedstatuses$Custombatch,
      callback: BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Datafeedstatuses$Custombatch
        | BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatafeedstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DatafeedstatusesCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Datafeedstatuses$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeedstatuses$Custombatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/datafeedstatuses/batch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatafeedstatusesCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DatafeedstatusesCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves the status of a datafeed from your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Datafeedstatuses$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Datafeedstatuses$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatafeedStatus>;
    get(
      params: Params$Resource$Datafeedstatuses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Datafeedstatuses$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DatafeedStatus>,
      callback: BodyResponseCallback<Schema$DatafeedStatus>
    ): void;
    get(
      params: Params$Resource$Datafeedstatuses$Get,
      callback: BodyResponseCallback<Schema$DatafeedStatus>
    ): void;
    get(callback: BodyResponseCallback<Schema$DatafeedStatus>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Datafeedstatuses$Get
        | BodyResponseCallback<Schema$DatafeedStatus>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatafeedStatus>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatafeedStatus>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DatafeedStatus> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Datafeedstatuses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeedstatuses$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/datafeedstatuses/{datafeedId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'datafeedId'],
        pathParams: ['datafeedId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatafeedStatus>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DatafeedStatus>(parameters);
      }
    }

    /**
     * Lists the statuses of the datafeeds in your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Datafeedstatuses$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Datafeedstatuses$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatafeedstatusesListResponse>;
    list(
      params: Params$Resource$Datafeedstatuses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Datafeedstatuses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DatafeedstatusesListResponse>,
      callback: BodyResponseCallback<Schema$DatafeedstatusesListResponse>
    ): void;
    list(
      params: Params$Resource$Datafeedstatuses$List,
      callback: BodyResponseCallback<Schema$DatafeedstatusesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$DatafeedstatusesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Datafeedstatuses$List
        | BodyResponseCallback<Schema$DatafeedstatusesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatafeedstatusesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatafeedstatusesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DatafeedstatusesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Datafeedstatuses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datafeedstatuses$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/datafeedstatuses'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatafeedstatusesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DatafeedstatusesListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Datafeedstatuses$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$DatafeedstatusesCustomBatchRequest;
  }
  export interface Params$Resource$Datafeedstatuses$Get
    extends StandardParameters {
    /**
     * Deprecated. Use `feedLabel` instead. The country to get the datafeed status for. If this parameter is provided then `language` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
     */
    country?: string;
    /**
     * The ID of the datafeed.
     */
    datafeedId?: string;
    /**
     * The feed label to get the datafeed status for. If this parameter is provided then `language` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
     */
    feedLabel?: string;
    /**
     * The language to get the datafeed status for. If this parameter is provided then `country` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
     */
    language?: string;
    /**
     * The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Datafeedstatuses$List
    extends StandardParameters {
    /**
     * The maximum number of products to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }

  export class Resource$Freelistingsprogram {
    context: APIRequestContext;
    checkoutsettings: Resource$Freelistingsprogram$Checkoutsettings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.checkoutsettings = new Resource$Freelistingsprogram$Checkoutsettings(
        this.context
      );
    }

    /**
     * Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Freelistingsprogram$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Freelistingsprogram$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FreeListingsProgramStatus>;
    get(
      params: Params$Resource$Freelistingsprogram$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Freelistingsprogram$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FreeListingsProgramStatus>,
      callback: BodyResponseCallback<Schema$FreeListingsProgramStatus>
    ): void;
    get(
      params: Params$Resource$Freelistingsprogram$Get,
      callback: BodyResponseCallback<Schema$FreeListingsProgramStatus>
    ): void;
    get(callback: BodyResponseCallback<Schema$FreeListingsProgramStatus>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Freelistingsprogram$Get
        | BodyResponseCallback<Schema$FreeListingsProgramStatus>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FreeListingsProgramStatus>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FreeListingsProgramStatus>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FreeListingsProgramStatus>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Freelistingsprogram$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Freelistingsprogram$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/freelistingsprogram'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FreeListingsProgramStatus>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FreeListingsProgramStatus>(parameters);
      }
    }

    /**
     * Requests a review of free listings in a specific region. This method deprecated. Use the `MerchantSupportService` to view product and account issues and request a review.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    requestreview(
      params: Params$Resource$Freelistingsprogram$Requestreview,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    requestreview(
      params?: Params$Resource$Freelistingsprogram$Requestreview,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    requestreview(
      params: Params$Resource$Freelistingsprogram$Requestreview,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    requestreview(
      params: Params$Resource$Freelistingsprogram$Requestreview,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    requestreview(
      params: Params$Resource$Freelistingsprogram$Requestreview,
      callback: BodyResponseCallback<void>
    ): void;
    requestreview(callback: BodyResponseCallback<void>): void;
    requestreview(
      paramsOrCallback?:
        | Params$Resource$Freelistingsprogram$Requestreview
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Freelistingsprogram$Requestreview;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Freelistingsprogram$Requestreview;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/freelistingsprogram/requestreview'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Freelistingsprogram$Get
    extends StandardParameters {
    /**
     * Required. The ID of the account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Freelistingsprogram$Requestreview
    extends StandardParameters {
    /**
     * Required. The ID of the account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RequestReviewFreeListingsRequest;
  }

  export class Resource$Freelistingsprogram$Checkoutsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes `Checkout` settings and unenrolls merchant from `Checkout` program.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Freelistingsprogram$Checkoutsettings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Freelistingsprogram$Checkoutsettings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Freelistingsprogram$Checkoutsettings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Freelistingsprogram$Checkoutsettings$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Freelistingsprogram$Checkoutsettings$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Freelistingsprogram$Checkoutsettings$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Freelistingsprogram$Checkoutsettings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Freelistingsprogram$Checkoutsettings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/freelistingsprogram/checkoutsettings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets Checkout settings for the given merchant. This includes information about review state, enrollment state and URL settings.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Freelistingsprogram$Checkoutsettings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Freelistingsprogram$Checkoutsettings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CheckoutSettings>;
    get(
      params: Params$Resource$Freelistingsprogram$Checkoutsettings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Freelistingsprogram$Checkoutsettings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CheckoutSettings>,
      callback: BodyResponseCallback<Schema$CheckoutSettings>
    ): void;
    get(
      params: Params$Resource$Freelistingsprogram$Checkoutsettings$Get,
      callback: BodyResponseCallback<Schema$CheckoutSettings>
    ): void;
    get(callback: BodyResponseCallback<Schema$CheckoutSettings>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Freelistingsprogram$Checkoutsettings$Get
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CheckoutSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Freelistingsprogram$Checkoutsettings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Freelistingsprogram$Checkoutsettings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/freelistingsprogram/checkoutsettings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CheckoutSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckoutSettings>(parameters);
      }
    }

    /**
     * Enrolls merchant in `Checkout` program.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Freelistingsprogram$Checkoutsettings$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Freelistingsprogram$Checkoutsettings$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CheckoutSettings>;
    insert(
      params: Params$Resource$Freelistingsprogram$Checkoutsettings$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Freelistingsprogram$Checkoutsettings$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$CheckoutSettings>,
      callback: BodyResponseCallback<Schema$CheckoutSettings>
    ): void;
    insert(
      params: Params$Resource$Freelistingsprogram$Checkoutsettings$Insert,
      callback: BodyResponseCallback<Schema$CheckoutSettings>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CheckoutSettings>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Freelistingsprogram$Checkoutsettings$Insert
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CheckoutSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Freelistingsprogram$Checkoutsettings$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Freelistingsprogram$Checkoutsettings$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/freelistingsprogram/checkoutsettings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CheckoutSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckoutSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Freelistingsprogram$Checkoutsettings$Delete
    extends StandardParameters {
    /**
     * Required. The ID of the account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Freelistingsprogram$Checkoutsettings$Get
    extends StandardParameters {
    /**
     * Required. The ID of the account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Freelistingsprogram$Checkoutsettings$Insert
    extends StandardParameters {
    /**
     * Required. The ID of the account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InsertCheckoutSettingsRequest;
  }

  export class Resource$Liasettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves and/or updates the LIA settings of multiple accounts in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    custombatch(
      params: Params$Resource$Liasettings$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Liasettings$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Liasettings$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Liasettings$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Liasettings$Custombatch,
      callback: BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Custombatch
        | BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiasettingsCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Custombatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/liasettings/batch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiasettingsCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiasettingsCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves the LIA settings of the account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Liasettings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Liasettings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiaSettings>;
    get(
      params: Params$Resource$Liasettings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Liasettings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LiaSettings>,
      callback: BodyResponseCallback<Schema$LiaSettings>
    ): void;
    get(
      params: Params$Resource$Liasettings$Get,
      callback: BodyResponseCallback<Schema$LiaSettings>
    ): void;
    get(callback: BodyResponseCallback<Schema$LiaSettings>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Get
        | BodyResponseCallback<Schema$LiaSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiaSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiaSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LiaSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Liasettings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/liasettings/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiaSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiaSettings>(parameters);
      }
    }

    /**
     * Retrieves the list of accessible Business Profiles.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getaccessiblegmbaccounts(
      params: Params$Resource$Liasettings$Getaccessiblegmbaccounts,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getaccessiblegmbaccounts(
      params?: Params$Resource$Liasettings$Getaccessiblegmbaccounts,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsGetAccessibleGmbAccountsResponse>;
    getaccessiblegmbaccounts(
      params: Params$Resource$Liasettings$Getaccessiblegmbaccounts,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getaccessiblegmbaccounts(
      params: Params$Resource$Liasettings$Getaccessiblegmbaccounts,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiasettingsGetAccessibleGmbAccountsResponse>,
      callback: BodyResponseCallback<Schema$LiasettingsGetAccessibleGmbAccountsResponse>
    ): void;
    getaccessiblegmbaccounts(
      params: Params$Resource$Liasettings$Getaccessiblegmbaccounts,
      callback: BodyResponseCallback<Schema$LiasettingsGetAccessibleGmbAccountsResponse>
    ): void;
    getaccessiblegmbaccounts(
      callback: BodyResponseCallback<Schema$LiasettingsGetAccessibleGmbAccountsResponse>
    ): void;
    getaccessiblegmbaccounts(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Getaccessiblegmbaccounts
        | BodyResponseCallback<Schema$LiasettingsGetAccessibleGmbAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiasettingsGetAccessibleGmbAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiasettingsGetAccessibleGmbAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsGetAccessibleGmbAccountsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Getaccessiblegmbaccounts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Getaccessiblegmbaccounts;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/liasettings/{accountId}/accessiblegmbaccounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiasettingsGetAccessibleGmbAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiasettingsGetAccessibleGmbAccountsResponse>(
          parameters
        );
      }
    }

    /**
     * Lists the LIA settings of the sub-accounts in your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Liasettings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Liasettings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsListResponse>;
    list(
      params: Params$Resource$Liasettings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Liasettings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiasettingsListResponse>,
      callback: BodyResponseCallback<Schema$LiasettingsListResponse>
    ): void;
    list(
      params: Params$Resource$Liasettings$List,
      callback: BodyResponseCallback<Schema$LiasettingsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$LiasettingsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Liasettings$List
        | BodyResponseCallback<Schema$LiasettingsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiasettingsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiasettingsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Liasettings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/liasettings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiasettingsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiasettingsListResponse>(parameters);
      }
    }

    /**
     * Retrieves the list of POS data providers that have active settings for the all eiligible countries.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listposdataproviders(
      params: Params$Resource$Liasettings$Listposdataproviders,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listposdataproviders(
      params?: Params$Resource$Liasettings$Listposdataproviders,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsListPosDataProvidersResponse>;
    listposdataproviders(
      params: Params$Resource$Liasettings$Listposdataproviders,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listposdataproviders(
      params: Params$Resource$Liasettings$Listposdataproviders,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>,
      callback: BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>
    ): void;
    listposdataproviders(
      params: Params$Resource$Liasettings$Listposdataproviders,
      callback: BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>
    ): void;
    listposdataproviders(
      callback: BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>
    ): void;
    listposdataproviders(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Listposdataproviders
        | BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiasettingsListPosDataProvidersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsListPosDataProvidersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Listposdataproviders;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Listposdataproviders;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/liasettings/posdataproviders'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiasettingsListPosDataProvidersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiasettingsListPosDataProvidersResponse>(
          parameters
        );
      }
    }

    /**
     * Requests access to a specified Business Profile.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    requestgmbaccess(
      params: Params$Resource$Liasettings$Requestgmbaccess,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    requestgmbaccess(
      params?: Params$Resource$Liasettings$Requestgmbaccess,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsRequestGmbAccessResponse>;
    requestgmbaccess(
      params: Params$Resource$Liasettings$Requestgmbaccess,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    requestgmbaccess(
      params: Params$Resource$Liasettings$Requestgmbaccess,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>,
      callback: BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>
    ): void;
    requestgmbaccess(
      params: Params$Resource$Liasettings$Requestgmbaccess,
      callback: BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>
    ): void;
    requestgmbaccess(
      callback: BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>
    ): void;
    requestgmbaccess(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Requestgmbaccess
        | BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiasettingsRequestGmbAccessResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsRequestGmbAccessResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Requestgmbaccess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Requestgmbaccess;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/liasettings/{accountId}/requestgmbaccess'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId', 'gmbEmail'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiasettingsRequestGmbAccessResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiasettingsRequestGmbAccessResponse>(
          parameters
        );
      }
    }

    /**
     * Requests inventory validation for the specified country.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    requestinventoryverification(
      params: Params$Resource$Liasettings$Requestinventoryverification,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    requestinventoryverification(
      params?: Params$Resource$Liasettings$Requestinventoryverification,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsRequestInventoryVerificationResponse>;
    requestinventoryverification(
      params: Params$Resource$Liasettings$Requestinventoryverification,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    requestinventoryverification(
      params: Params$Resource$Liasettings$Requestinventoryverification,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiasettingsRequestInventoryVerificationResponse>,
      callback: BodyResponseCallback<Schema$LiasettingsRequestInventoryVerificationResponse>
    ): void;
    requestinventoryverification(
      params: Params$Resource$Liasettings$Requestinventoryverification,
      callback: BodyResponseCallback<Schema$LiasettingsRequestInventoryVerificationResponse>
    ): void;
    requestinventoryverification(
      callback: BodyResponseCallback<Schema$LiasettingsRequestInventoryVerificationResponse>
    ): void;
    requestinventoryverification(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Requestinventoryverification
        | BodyResponseCallback<Schema$LiasettingsRequestInventoryVerificationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiasettingsRequestInventoryVerificationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiasettingsRequestInventoryVerificationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsRequestInventoryVerificationResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Requestinventoryverification;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Requestinventoryverification;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/liasettings/{accountId}/requestinventoryverification/{country}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId', 'country'],
        pathParams: ['accountId', 'country', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiasettingsRequestInventoryVerificationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiasettingsRequestInventoryVerificationResponse>(
          parameters
        );
      }
    }

    /**
     * Sets the inventory verification contract for the specified country.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setinventoryverificationcontact(
      params: Params$Resource$Liasettings$Setinventoryverificationcontact,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setinventoryverificationcontact(
      params?: Params$Resource$Liasettings$Setinventoryverificationcontact,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsSetInventoryVerificationContactResponse>;
    setinventoryverificationcontact(
      params: Params$Resource$Liasettings$Setinventoryverificationcontact,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setinventoryverificationcontact(
      params: Params$Resource$Liasettings$Setinventoryverificationcontact,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiasettingsSetInventoryVerificationContactResponse>,
      callback: BodyResponseCallback<Schema$LiasettingsSetInventoryVerificationContactResponse>
    ): void;
    setinventoryverificationcontact(
      params: Params$Resource$Liasettings$Setinventoryverificationcontact,
      callback: BodyResponseCallback<Schema$LiasettingsSetInventoryVerificationContactResponse>
    ): void;
    setinventoryverificationcontact(
      callback: BodyResponseCallback<Schema$LiasettingsSetInventoryVerificationContactResponse>
    ): void;
    setinventoryverificationcontact(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Setinventoryverificationcontact
        | BodyResponseCallback<Schema$LiasettingsSetInventoryVerificationContactResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiasettingsSetInventoryVerificationContactResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiasettingsSetInventoryVerificationContactResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsSetInventoryVerificationContactResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Setinventoryverificationcontact;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Liasettings$Setinventoryverificationcontact;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/liasettings/{accountId}/setinventoryverificationcontact'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [
          'merchantId',
          'accountId',
          'country',
          'language',
          'contactName',
          'contactEmail',
        ],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiasettingsSetInventoryVerificationContactResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiasettingsSetInventoryVerificationContactResponse>(
          parameters
        );
      }
    }

    /**
     * Sets the omnichannel experience for the specified country. Only supported for merchants whose POS data provider is trusted to enable the corresponding experience. For more context, see these help articles [about LFP](https://support.google.com/merchants/answer/7676652) and [how to get started](https://support.google.com/merchants/answer/7676578) with it.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setomnichannelexperience(
      params: Params$Resource$Liasettings$Setomnichannelexperience,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setomnichannelexperience(
      params?: Params$Resource$Liasettings$Setomnichannelexperience,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiaOmnichannelExperience>;
    setomnichannelexperience(
      params: Params$Resource$Liasettings$Setomnichannelexperience,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setomnichannelexperience(
      params: Params$Resource$Liasettings$Setomnichannelexperience,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiaOmnichannelExperience>,
      callback: BodyResponseCallback<Schema$LiaOmnichannelExperience>
    ): void;
    setomnichannelexperience(
      params: Params$Resource$Liasettings$Setomnichannelexperience,
      callback: BodyResponseCallback<Schema$LiaOmnichannelExperience>
    ): void;
    setomnichannelexperience(
      callback: BodyResponseCallback<Schema$LiaOmnichannelExperience>
    ): void;
    setomnichannelexperience(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Setomnichannelexperience
        | BodyResponseCallback<Schema$LiaOmnichannelExperience>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiaOmnichannelExperience>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiaOmnichannelExperience>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiaOmnichannelExperience>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Setomnichannelexperience;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Setomnichannelexperience;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/liasettings/{accountId}/setomnichannelexperience'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiaOmnichannelExperience>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiaOmnichannelExperience>(parameters);
      }
    }

    /**
     * Sets the POS data provider for the specified country.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setposdataprovider(
      params: Params$Resource$Liasettings$Setposdataprovider,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setposdataprovider(
      params?: Params$Resource$Liasettings$Setposdataprovider,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiasettingsSetPosDataProviderResponse>;
    setposdataprovider(
      params: Params$Resource$Liasettings$Setposdataprovider,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setposdataprovider(
      params: Params$Resource$Liasettings$Setposdataprovider,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>,
      callback: BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>
    ): void;
    setposdataprovider(
      params: Params$Resource$Liasettings$Setposdataprovider,
      callback: BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>
    ): void;
    setposdataprovider(
      callback: BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>
    ): void;
    setposdataprovider(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Setposdataprovider
        | BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiasettingsSetPosDataProviderResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiasettingsSetPosDataProviderResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Setposdataprovider;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Setposdataprovider;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/liasettings/{accountId}/setposdataprovider'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId', 'country'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiasettingsSetPosDataProviderResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiasettingsSetPosDataProviderResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Liasettings$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Liasettings$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiaSettings>;
    update(
      params: Params$Resource$Liasettings$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Liasettings$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LiaSettings>,
      callback: BodyResponseCallback<Schema$LiaSettings>
    ): void;
    update(
      params: Params$Resource$Liasettings$Update,
      callback: BodyResponseCallback<Schema$LiaSettings>
    ): void;
    update(callback: BodyResponseCallback<Schema$LiaSettings>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Liasettings$Update
        | BodyResponseCallback<Schema$LiaSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiaSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiaSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LiaSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Liasettings$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Liasettings$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/liasettings/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiaSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiaSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Liasettings$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$LiasettingsCustomBatchRequest;
  }
  export interface Params$Resource$Liasettings$Get extends StandardParameters {
    /**
     * The ID of the account for which to get or update LIA settings.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Liasettings$Getaccessiblegmbaccounts
    extends StandardParameters {
    /**
     * The ID of the account for which to retrieve accessible Business Profiles.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Liasettings$List extends StandardParameters {
    /**
     * The maximum number of LIA settings to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the managing account. This must be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Liasettings$Listposdataproviders
    extends StandardParameters {}
  export interface Params$Resource$Liasettings$Requestgmbaccess
    extends StandardParameters {
    /**
     * The ID of the account for which Business Profile access is requested.
     */
    accountId?: string;
    /**
     * The email of the Business Profile.
     */
    gmbEmail?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Liasettings$Requestinventoryverification
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    accountId?: string;
    /**
     * The country for which inventory validation is requested.
     */
    country?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Liasettings$Setinventoryverificationcontact
    extends StandardParameters {
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    accountId?: string;
    /**
     * The email of the inventory verification contact.
     */
    contactEmail?: string;
    /**
     * The name of the inventory verification contact.
     */
    contactName?: string;
    /**
     * The country for which inventory verification is requested.
     */
    country?: string;
    /**
     * The language for which inventory verification is requested.
     */
    language?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Liasettings$Setomnichannelexperience
    extends StandardParameters {
    /**
     * The ID of the account for which to retrieve accessible Business Profiles.
     */
    accountId?: string;
    /**
     * The CLDR country code (for example, "US") for which the omnichannel experience is selected.
     */
    country?: string;
    /**
     * The Local Store Front (LSF) type for this country. Acceptable values are: - "`ghlsf`" (Google-Hosted Local Store Front) - "`mhlsfBasic`" (Merchant-Hosted Local Store Front Basic) - "`mhlsfFull`" (Merchant-Hosted Local Store Front Full) More details about these types can be found here.
     */
    lsfType?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
    /**
     * The Pickup types for this country. Acceptable values are: - "`pickupToday`" - "`pickupLater`"
     */
    pickupTypes?: string[];
  }
  export interface Params$Resource$Liasettings$Setposdataprovider
    extends StandardParameters {
    /**
     * The ID of the account for which to retrieve accessible Business Profiles.
     */
    accountId?: string;
    /**
     * The country for which the POS data provider is selected.
     */
    country?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
    /**
     * The ID of POS data provider.
     */
    posDataProviderId?: string;
    /**
     * The account ID by which this merchant is known to the POS data provider.
     */
    posExternalAccountId?: string;
  }
  export interface Params$Resource$Liasettings$Update
    extends StandardParameters {
    /**
     * The ID of the account for which to get or update LIA settings.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiaSettings;
  }

  export class Resource$Localinventory {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Updates local inventory for multiple products or stores in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    custombatch(
      params: Params$Resource$Localinventory$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Localinventory$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LocalinventoryCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Localinventory$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Localinventory$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LocalinventoryCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$LocalinventoryCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Localinventory$Custombatch,
      callback: BodyResponseCallback<Schema$LocalinventoryCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$LocalinventoryCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Localinventory$Custombatch
        | BodyResponseCallback<Schema$LocalinventoryCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LocalinventoryCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LocalinventoryCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LocalinventoryCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Localinventory$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Localinventory$Custombatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/localinventory/batch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LocalinventoryCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LocalinventoryCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the local inventory of a product in your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Localinventory$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Localinventory$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LocalInventory>;
    insert(
      params: Params$Resource$Localinventory$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Localinventory$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LocalInventory>,
      callback: BodyResponseCallback<Schema$LocalInventory>
    ): void;
    insert(
      params: Params$Resource$Localinventory$Insert,
      callback: BodyResponseCallback<Schema$LocalInventory>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LocalInventory>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Localinventory$Insert
        | BodyResponseCallback<Schema$LocalInventory>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LocalInventory>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LocalInventory>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LocalInventory> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Localinventory$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Localinventory$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/products/{productId}/localinventory'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LocalInventory>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LocalInventory>(parameters);
      }
    }
  }

  export interface Params$Resource$Localinventory$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$LocalinventoryCustomBatchRequest;
  }
  export interface Params$Resource$Localinventory$Insert
    extends StandardParameters {
    /**
     * The ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The REST ID of the product for which to update local inventory.
     */
    productId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LocalInventory;
  }

  export class Resource$Merchantsupport {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Provide a list of merchant's issues with a support content and available actions. This content and actions are meant to be rendered and shown in third-party applications.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    renderaccountissues(
      params: Params$Resource$Merchantsupport$Renderaccountissues,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    renderaccountissues(
      params?: Params$Resource$Merchantsupport$Renderaccountissues,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RenderAccountIssuesResponse>;
    renderaccountissues(
      params: Params$Resource$Merchantsupport$Renderaccountissues,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    renderaccountissues(
      params: Params$Resource$Merchantsupport$Renderaccountissues,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RenderAccountIssuesResponse>,
      callback: BodyResponseCallback<Schema$RenderAccountIssuesResponse>
    ): void;
    renderaccountissues(
      params: Params$Resource$Merchantsupport$Renderaccountissues,
      callback: BodyResponseCallback<Schema$RenderAccountIssuesResponse>
    ): void;
    renderaccountissues(
      callback: BodyResponseCallback<Schema$RenderAccountIssuesResponse>
    ): void;
    renderaccountissues(
      paramsOrCallback?:
        | Params$Resource$Merchantsupport$Renderaccountissues
        | BodyResponseCallback<Schema$RenderAccountIssuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RenderAccountIssuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RenderAccountIssuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RenderAccountIssuesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Merchantsupport$Renderaccountissues;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Merchantsupport$Renderaccountissues;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/merchantsupport/renderaccountissues'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RenderAccountIssuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RenderAccountIssuesResponse>(parameters);
      }
    }

    /**
     * Provide a list of issues for merchant's product with a support content and available actions. This content and actions are meant to be rendered and shown in third-party applications.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    renderproductissues(
      params: Params$Resource$Merchantsupport$Renderproductissues,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    renderproductissues(
      params?: Params$Resource$Merchantsupport$Renderproductissues,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RenderProductIssuesResponse>;
    renderproductissues(
      params: Params$Resource$Merchantsupport$Renderproductissues,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    renderproductissues(
      params: Params$Resource$Merchantsupport$Renderproductissues,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RenderProductIssuesResponse>,
      callback: BodyResponseCallback<Schema$RenderProductIssuesResponse>
    ): void;
    renderproductissues(
      params: Params$Resource$Merchantsupport$Renderproductissues,
      callback: BodyResponseCallback<Schema$RenderProductIssuesResponse>
    ): void;
    renderproductissues(
      callback: BodyResponseCallback<Schema$RenderProductIssuesResponse>
    ): void;
    renderproductissues(
      paramsOrCallback?:
        | Params$Resource$Merchantsupport$Renderproductissues
        | BodyResponseCallback<Schema$RenderProductIssuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RenderProductIssuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RenderProductIssuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RenderProductIssuesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Merchantsupport$Renderproductissues;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Merchantsupport$Renderproductissues;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/merchantsupport/renderproductissues/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RenderProductIssuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RenderProductIssuesResponse>(parameters);
      }
    }

    /**
     * Start an action. The action can be requested by merchants in third-party application. Before merchants can request the action, the third-party application needs to show them action specific content and display a user input form. The action can be successfully started only once all `required` inputs are provided. If any `required` input is missing, or invalid value was provided, the service will return 400 error. Validation errors will contain Ids for all problematic field together with translated, human readable error messages that can be shown to the user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    triggeraction(
      params: Params$Resource$Merchantsupport$Triggeraction,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    triggeraction(
      params?: Params$Resource$Merchantsupport$Triggeraction,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TriggerActionResponse>;
    triggeraction(
      params: Params$Resource$Merchantsupport$Triggeraction,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    triggeraction(
      params: Params$Resource$Merchantsupport$Triggeraction,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TriggerActionResponse>,
      callback: BodyResponseCallback<Schema$TriggerActionResponse>
    ): void;
    triggeraction(
      params: Params$Resource$Merchantsupport$Triggeraction,
      callback: BodyResponseCallback<Schema$TriggerActionResponse>
    ): void;
    triggeraction(
      callback: BodyResponseCallback<Schema$TriggerActionResponse>
    ): void;
    triggeraction(
      paramsOrCallback?:
        | Params$Resource$Merchantsupport$Triggeraction
        | BodyResponseCallback<Schema$TriggerActionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TriggerActionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TriggerActionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TriggerActionResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Merchantsupport$Triggeraction;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Merchantsupport$Triggeraction;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/merchantsupport/triggeraction'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TriggerActionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TriggerActionResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Merchantsupport$Renderaccountissues
    extends StandardParameters {
    /**
     * Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize support content. If not set, the result will be in default language `en-US`.
     */
    languageCode?: string;
    /**
     * Required. The ID of the account to fetch issues for.
     */
    merchantId?: string;
    /**
     * Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in support content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC.
     */
    timeZone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RenderAccountIssuesRequestPayload;
  }
  export interface Params$Resource$Merchantsupport$Renderproductissues
    extends StandardParameters {
    /**
     * Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize support content. If not set, the result will be in default language `en-US`.
     */
    languageCode?: string;
    /**
     * Required. The ID of the account that contains the product.
     */
    merchantId?: string;
    /**
     * Required. The [REST_ID](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.id) of the product to fetch issues for.
     */
    productId?: string;
    /**
     * Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in support content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC.
     */
    timeZone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RenderProductIssuesRequestPayload;
  }
  export interface Params$Resource$Merchantsupport$Triggeraction
    extends StandardParameters {
    /**
     * Optional. Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) used to localize the response. If not set, the result will be in default language `en-US`.
     */
    languageCode?: string;
    /**
     * Required. The ID of the merchant's account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TriggerActionPayload;
  }

  export class Resource$Ordertrackingsignals {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates new order tracking signal.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Ordertrackingsignals$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Ordertrackingsignals$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrderTrackingSignal>;
    create(
      params: Params$Resource$Ordertrackingsignals$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Ordertrackingsignals$Create,
      options: MethodOptions | BodyResponseCallback<Schema$OrderTrackingSignal>,
      callback: BodyResponseCallback<Schema$OrderTrackingSignal>
    ): void;
    create(
      params: Params$Resource$Ordertrackingsignals$Create,
      callback: BodyResponseCallback<Schema$OrderTrackingSignal>
    ): void;
    create(callback: BodyResponseCallback<Schema$OrderTrackingSignal>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Ordertrackingsignals$Create
        | BodyResponseCallback<Schema$OrderTrackingSignal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrderTrackingSignal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrderTrackingSignal>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OrderTrackingSignal>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Ordertrackingsignals$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Ordertrackingsignals$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/ordertrackingsignals'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrderTrackingSignal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OrderTrackingSignal>(parameters);
      }
    }
  }

  export interface Params$Resource$Ordertrackingsignals$Create
    extends StandardParameters {
    /**
     * The ID of the merchant for which the order signal is created.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrderTrackingSignal;
  }

  export class Resource$Pos {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Batches multiple POS-related calls in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    custombatch(
      params: Params$Resource$Pos$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Pos$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PosCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Pos$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Pos$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PosCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$PosCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Pos$Custombatch,
      callback: BodyResponseCallback<Schema$PosCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$PosCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Pos$Custombatch
        | BodyResponseCallback<Schema$PosCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PosCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PosCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PosCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pos$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pos$Custombatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/pos/batch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PosCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PosCustomBatchResponse>(parameters);
      }
    }

    /**
     * Deletes a store for the given merchant.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Pos$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Pos$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Pos$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Pos$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Pos$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Pos$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pos$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pos$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/pos/{targetMerchantId}/store/{storeCode}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'targetMerchantId', 'storeCode'],
        pathParams: ['merchantId', 'storeCode', 'targetMerchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves information about the given store.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Pos$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Pos$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PosStore>;
    get(
      params: Params$Resource$Pos$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Pos$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PosStore>,
      callback: BodyResponseCallback<Schema$PosStore>
    ): void;
    get(
      params: Params$Resource$Pos$Get,
      callback: BodyResponseCallback<Schema$PosStore>
    ): void;
    get(callback: BodyResponseCallback<Schema$PosStore>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Pos$Get
        | BodyResponseCallback<Schema$PosStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PosStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PosStore>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PosStore> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pos$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pos$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/pos/{targetMerchantId}/store/{storeCode}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'targetMerchantId', 'storeCode'],
        pathParams: ['merchantId', 'storeCode', 'targetMerchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PosStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PosStore>(parameters);
      }
    }

    /**
     * Creates a store for the given merchant.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Pos$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Pos$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PosStore>;
    insert(
      params: Params$Resource$Pos$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Pos$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$PosStore>,
      callback: BodyResponseCallback<Schema$PosStore>
    ): void;
    insert(
      params: Params$Resource$Pos$Insert,
      callback: BodyResponseCallback<Schema$PosStore>
    ): void;
    insert(callback: BodyResponseCallback<Schema$PosStore>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Pos$Insert
        | BodyResponseCallback<Schema$PosStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PosStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PosStore>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PosStore> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pos$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pos$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/pos/{targetMerchantId}/store'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'targetMerchantId'],
        pathParams: ['merchantId', 'targetMerchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PosStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PosStore>(parameters);
      }
    }

    /**
     * Submit inventory for the given merchant.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    inventory(
      params: Params$Resource$Pos$Inventory,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    inventory(
      params?: Params$Resource$Pos$Inventory,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PosInventoryResponse>;
    inventory(
      params: Params$Resource$Pos$Inventory,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    inventory(
      params: Params$Resource$Pos$Inventory,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PosInventoryResponse>,
      callback: BodyResponseCallback<Schema$PosInventoryResponse>
    ): void;
    inventory(
      params: Params$Resource$Pos$Inventory,
      callback: BodyResponseCallback<Schema$PosInventoryResponse>
    ): void;
    inventory(
      callback: BodyResponseCallback<Schema$PosInventoryResponse>
    ): void;
    inventory(
      paramsOrCallback?:
        | Params$Resource$Pos$Inventory
        | BodyResponseCallback<Schema$PosInventoryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PosInventoryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PosInventoryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PosInventoryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pos$Inventory;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pos$Inventory;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/pos/{targetMerchantId}/inventory'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'targetMerchantId'],
        pathParams: ['merchantId', 'targetMerchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PosInventoryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PosInventoryResponse>(parameters);
      }
    }

    /**
     * Lists the stores of the target merchant.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Pos$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Pos$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PosListResponse>;
    list(
      params: Params$Resource$Pos$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Pos$List,
      options: MethodOptions | BodyResponseCallback<Schema$PosListResponse>,
      callback: BodyResponseCallback<Schema$PosListResponse>
    ): void;
    list(
      params: Params$Resource$Pos$List,
      callback: BodyResponseCallback<Schema$PosListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$PosListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Pos$List
        | BodyResponseCallback<Schema$PosListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PosListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PosListResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PosListResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pos$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pos$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/pos/{targetMerchantId}/store'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'targetMerchantId'],
        pathParams: ['merchantId', 'targetMerchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PosListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PosListResponse>(parameters);
      }
    }

    /**
     * Submit a sale event for the given merchant.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    sale(
      params: Params$Resource$Pos$Sale,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    sale(
      params?: Params$Resource$Pos$Sale,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PosSaleResponse>;
    sale(
      params: Params$Resource$Pos$Sale,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    sale(
      params: Params$Resource$Pos$Sale,
      options: MethodOptions | BodyResponseCallback<Schema$PosSaleResponse>,
      callback: BodyResponseCallback<Schema$PosSaleResponse>
    ): void;
    sale(
      params: Params$Resource$Pos$Sale,
      callback: BodyResponseCallback<Schema$PosSaleResponse>
    ): void;
    sale(callback: BodyResponseCallback<Schema$PosSaleResponse>): void;
    sale(
      paramsOrCallback?:
        | Params$Resource$Pos$Sale
        | BodyResponseCallback<Schema$PosSaleResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PosSaleResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PosSaleResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PosSaleResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pos$Sale;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pos$Sale;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/pos/{targetMerchantId}/sale'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'targetMerchantId'],
        pathParams: ['merchantId', 'targetMerchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PosSaleResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PosSaleResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Pos$Custombatch extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$PosCustomBatchRequest;
  }
  export interface Params$Resource$Pos$Delete extends StandardParameters {
    /**
     * The ID of the POS or inventory data provider.
     */
    merchantId?: string;
    /**
     * A store code that is unique per merchant.
     */
    storeCode?: string;
    /**
     * The ID of the target merchant.
     */
    targetMerchantId?: string;
  }
  export interface Params$Resource$Pos$Get extends StandardParameters {
    /**
     * The ID of the POS or inventory data provider.
     */
    merchantId?: string;
    /**
     * A store code that is unique per merchant.
     */
    storeCode?: string;
    /**
     * The ID of the target merchant.
     */
    targetMerchantId?: string;
  }
  export interface Params$Resource$Pos$Insert extends StandardParameters {
    /**
     * The ID of the POS or inventory data provider.
     */
    merchantId?: string;
    /**
     * The ID of the target merchant.
     */
    targetMerchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PosStore;
  }
  export interface Params$Resource$Pos$Inventory extends StandardParameters {
    /**
     * The ID of the POS or inventory data provider.
     */
    merchantId?: string;
    /**
     * The ID of the target merchant.
     */
    targetMerchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PosInventoryRequest;
  }
  export interface Params$Resource$Pos$List extends StandardParameters {
    /**
     * The ID of the POS or inventory data provider.
     */
    merchantId?: string;
    /**
     * The ID of the target merchant.
     */
    targetMerchantId?: string;
  }
  export interface Params$Resource$Pos$Sale extends StandardParameters {
    /**
     * The ID of the POS or inventory data provider.
     */
    merchantId?: string;
    /**
     * The ID of the target merchant.
     */
    targetMerchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PosSaleRequest;
  }

  export class Resource$Productdeliverytime {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates or updates the delivery time of a product.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Productdeliverytime$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Productdeliverytime$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductDeliveryTime>;
    create(
      params: Params$Resource$Productdeliverytime$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Productdeliverytime$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ProductDeliveryTime>,
      callback: BodyResponseCallback<Schema$ProductDeliveryTime>
    ): void;
    create(
      params: Params$Resource$Productdeliverytime$Create,
      callback: BodyResponseCallback<Schema$ProductDeliveryTime>
    ): void;
    create(callback: BodyResponseCallback<Schema$ProductDeliveryTime>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Productdeliverytime$Create
        | BodyResponseCallback<Schema$ProductDeliveryTime>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductDeliveryTime>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductDeliveryTime>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProductDeliveryTime>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Productdeliverytime$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Productdeliverytime$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/productdeliverytime'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProductDeliveryTime>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProductDeliveryTime>(parameters);
      }
    }

    /**
     * Deletes the delivery time of a product.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Productdeliverytime$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Productdeliverytime$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Productdeliverytime$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Productdeliverytime$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Productdeliverytime$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Productdeliverytime$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Productdeliverytime$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Productdeliverytime$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/productdeliverytime/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets `productDeliveryTime` by `productId`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Productdeliverytime$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Productdeliverytime$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductDeliveryTime>;
    get(
      params: Params$Resource$Productdeliverytime$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Productdeliverytime$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ProductDeliveryTime>,
      callback: BodyResponseCallback<Schema$ProductDeliveryTime>
    ): void;
    get(
      params: Params$Resource$Productdeliverytime$Get,
      callback: BodyResponseCallback<Schema$ProductDeliveryTime>
    ): void;
    get(callback: BodyResponseCallback<Schema$ProductDeliveryTime>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Productdeliverytime$Get
        | BodyResponseCallback<Schema$ProductDeliveryTime>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductDeliveryTime>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductDeliveryTime>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProductDeliveryTime>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Productdeliverytime$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Productdeliverytime$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/productdeliverytime/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProductDeliveryTime>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProductDeliveryTime>(parameters);
      }
    }
  }

  export interface Params$Resource$Productdeliverytime$Create
    extends StandardParameters {
    /**
     * The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProductDeliveryTime;
  }
  export interface Params$Resource$Productdeliverytime$Delete
    extends StandardParameters {
    /**
     * Required. The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * Required. The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`.
     */
    productId?: string;
  }
  export interface Params$Resource$Productdeliverytime$Get
    extends StandardParameters {
    /**
     * Required. The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * Required. The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`.
     */
    productId?: string;
  }

  export class Resource$Products {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves, inserts, and deletes multiple products in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    custombatch(
      params: Params$Resource$Products$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Products$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductsCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Products$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Products$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ProductsCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$ProductsCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Products$Custombatch,
      callback: BodyResponseCallback<Schema$ProductsCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$ProductsCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Products$Custombatch
        | BodyResponseCallback<Schema$ProductsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductsCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProductsCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Products$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Products$Custombatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/products/batch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProductsCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProductsCustomBatchResponse>(parameters);
      }
    }

    /**
     * Deletes a product from your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Products$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Products$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Products$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Products$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Products$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Products$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Products$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Products$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/products/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a product from your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Products$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Products$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Product>;
    get(
      params: Params$Resource$Products$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Products$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    get(
      params: Params$Resource$Products$Get,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    get(callback: BodyResponseCallback<Schema$Product>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Products$Get
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Product> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Products$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Products$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/products/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Product>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Product>(parameters);
      }
    }

    /**
     * Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Products$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Products$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Product>;
    insert(
      params: Params$Resource$Products$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Products$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    insert(
      params: Params$Resource$Products$Insert,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Product>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Products$Insert
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Product> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Products$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Products$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/products').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Product>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Product>(parameters);
      }
    }

    /**
     * Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Products$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Products$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductsListResponse>;
    list(
      params: Params$Resource$Products$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Products$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ProductsListResponse>,
      callback: BodyResponseCallback<Schema$ProductsListResponse>
    ): void;
    list(
      params: Params$Resource$Products$List,
      callback: BodyResponseCallback<Schema$ProductsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ProductsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Products$List
        | BodyResponseCallback<Schema$ProductsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProductsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Products$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Products$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/products').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProductsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProductsListResponse>(parameters);
      }
    }

    /**
     * Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Products$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Products$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Product>;
    update(
      params: Params$Resource$Products$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Products$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    update(
      params: Params$Resource$Products$Update,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    update(callback: BodyResponseCallback<Schema$Product>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Products$Update
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Product> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Products$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Products$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/products/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Product>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Product>(parameters);
      }
    }
  }

  export interface Params$Resource$Products$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ProductsCustomBatchRequest;
  }
  export interface Params$Resource$Products$Delete extends StandardParameters {
    /**
     * The Content API Supplemental Feed ID. If present then product deletion applies to the data in a supplemental feed. If absent, entire product will be deleted.
     */
    feedId?: string;
    /**
     * The ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The REST ID of the product.
     */
    productId?: string;
  }
  export interface Params$Resource$Products$Get extends StandardParameters {
    /**
     * The ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The REST ID of the product.
     */
    productId?: string;
  }
  export interface Params$Resource$Products$Insert extends StandardParameters {
    /**
     * The Content API Supplemental Feed ID. If present then product insertion applies to the data in a supplemental feed.
     */
    feedId?: string;
    /**
     * The ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Product;
  }
  export interface Params$Resource$Products$List extends StandardParameters {
    /**
     * The maximum number of products to return in the response, used for paging. The default value is 25. The maximum value is 250.
     */
    maxResults?: number;
    /**
     * The ID of the account that contains the products. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Products$Update extends StandardParameters {
    /**
     * The ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The REST ID of the product for which to update.
     */
    productId?: string;
    /**
     * The comma-separated list of product attributes to be updated. Example: `"title,salePrice"`. Attributes specified in the update mask without a value specified in the body will be deleted from the product. *You must specify the update mask to delete attributes.* Only top-level product attributes can be updated. If not defined, product attributes with set values will be updated and other attributes will stay unchanged.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Product;
  }

  export class Resource$Productstatuses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the statuses of multiple products in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    custombatch(
      params: Params$Resource$Productstatuses$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Productstatuses$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductstatusesCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Productstatuses$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Productstatuses$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Productstatuses$Custombatch,
      callback: BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Productstatuses$Custombatch
        | BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductstatusesCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProductstatusesCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Productstatuses$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Productstatuses$Custombatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/productstatuses/batch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProductstatusesCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProductstatusesCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * Gets the status of a product from your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Productstatuses$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Productstatuses$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductStatus>;
    get(
      params: Params$Resource$Productstatuses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Productstatuses$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ProductStatus>,
      callback: BodyResponseCallback<Schema$ProductStatus>
    ): void;
    get(
      params: Params$Resource$Productstatuses$Get,
      callback: BodyResponseCallback<Schema$ProductStatus>
    ): void;
    get(callback: BodyResponseCallback<Schema$ProductStatus>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Productstatuses$Get
        | BodyResponseCallback<Schema$ProductStatus>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductStatus>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductStatus>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ProductStatus> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Productstatuses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Productstatuses$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/productstatuses/{productId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProductStatus>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProductStatus>(parameters);
      }
    }

    /**
     * Lists the statuses of the products in your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Productstatuses$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Productstatuses$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductstatusesListResponse>;
    list(
      params: Params$Resource$Productstatuses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Productstatuses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ProductstatusesListResponse>,
      callback: BodyResponseCallback<Schema$ProductstatusesListResponse>
    ): void;
    list(
      params: Params$Resource$Productstatuses$List,
      callback: BodyResponseCallback<Schema$ProductstatusesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ProductstatusesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Productstatuses$List
        | BodyResponseCallback<Schema$ProductstatusesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductstatusesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductstatusesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProductstatusesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Productstatuses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Productstatuses$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/productstatuses'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProductstatusesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProductstatusesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Productstatuses$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ProductstatusesCustomBatchRequest;
  }
  export interface Params$Resource$Productstatuses$Get
    extends StandardParameters {
    /**
     * If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     */
    destinations?: string[];
    /**
     * The ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The REST ID of the product.
     */
    productId?: string;
  }
  export interface Params$Resource$Productstatuses$List
    extends StandardParameters {
    /**
     * If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     */
    destinations?: string[];
    /**
     * The maximum number of product statuses to return in the response, used for paging. The default value is 25. The maximum value is 250.
     */
    maxResults?: number;
    /**
     * The ID of the account that contains the products. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }

  export class Resource$Promotions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Promotions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Promotions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Promotion>;
    create(
      params: Params$Resource$Promotions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Promotions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Promotion>,
      callback: BodyResponseCallback<Schema$Promotion>
    ): void;
    create(
      params: Params$Resource$Promotions$Create,
      callback: BodyResponseCallback<Schema$Promotion>
    ): void;
    create(callback: BodyResponseCallback<Schema$Promotion>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Promotions$Create
        | BodyResponseCallback<Schema$Promotion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Promotion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Promotion>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Promotion> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Promotions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Promotions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/promotions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Promotion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Promotion>(parameters);
      }
    }

    /**
     * Retrieves a promotion from your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Promotions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Promotions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Promotion>;
    get(
      params: Params$Resource$Promotions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Promotions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Promotion>,
      callback: BodyResponseCallback<Schema$Promotion>
    ): void;
    get(
      params: Params$Resource$Promotions$Get,
      callback: BodyResponseCallback<Schema$Promotion>
    ): void;
    get(callback: BodyResponseCallback<Schema$Promotion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Promotions$Get
        | BodyResponseCallback<Schema$Promotion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Promotion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Promotion>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Promotion> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Promotions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Promotions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/promotions/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'id'],
        pathParams: ['id', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Promotion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Promotion>(parameters);
      }
    }

    /**
     * List all promotions from your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Promotions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Promotions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPromotionResponse>;
    list(
      params: Params$Resource$Promotions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Promotions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPromotionResponse>,
      callback: BodyResponseCallback<Schema$ListPromotionResponse>
    ): void;
    list(
      params: Params$Resource$Promotions$List,
      callback: BodyResponseCallback<Schema$ListPromotionResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPromotionResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Promotions$List
        | BodyResponseCallback<Schema$ListPromotionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPromotionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPromotionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPromotionResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Promotions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Promotions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/promotions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPromotionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPromotionResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Promotions$Create
    extends StandardParameters {
    /**
     * Required. The ID of the account that contains the collection.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Promotion;
  }
  export interface Params$Resource$Promotions$Get extends StandardParameters {
    /**
     * Required. REST ID of the promotion to retrieve.
     */
    id?: string;
    /**
     * Required. The ID of the account that contains the collection.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Promotions$List extends StandardParameters {
    /**
     * [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) (for example, "US"), used as a filter on promotions target country.
     */
    countryCode?: string;
    /**
     * The two-letter ISO 639-1 language code associated with the promotions, used as a filter.
     */
    languageCode?: string;
    /**
     * Required. The ID of the account that contains the collection.
     */
    merchantId?: string;
    /**
     * The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListPromotion` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotion` must match the call that provided the page token.
     */
    pageToken?: string;
  }

  export class Resource$Pubsubnotificationsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a Merchant Center account's pubsub notification settings.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Pubsubnotificationsettings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Pubsubnotificationsettings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PubsubNotificationSettings>;
    get(
      params: Params$Resource$Pubsubnotificationsettings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Pubsubnotificationsettings$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PubsubNotificationSettings>,
      callback: BodyResponseCallback<Schema$PubsubNotificationSettings>
    ): void;
    get(
      params: Params$Resource$Pubsubnotificationsettings$Get,
      callback: BodyResponseCallback<Schema$PubsubNotificationSettings>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$PubsubNotificationSettings>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Pubsubnotificationsettings$Get
        | BodyResponseCallback<Schema$PubsubNotificationSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PubsubNotificationSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PubsubNotificationSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PubsubNotificationSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Pubsubnotificationsettings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pubsubnotificationsettings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/pubsubnotificationsettings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PubsubNotificationSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PubsubNotificationSettings>(parameters);
      }
    }

    /**
     * Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Pubsubnotificationsettings$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Pubsubnotificationsettings$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PubsubNotificationSettings>;
    update(
      params: Params$Resource$Pubsubnotificationsettings$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Pubsubnotificationsettings$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PubsubNotificationSettings>,
      callback: BodyResponseCallback<Schema$PubsubNotificationSettings>
    ): void;
    update(
      params: Params$Resource$Pubsubnotificationsettings$Update,
      callback: BodyResponseCallback<Schema$PubsubNotificationSettings>
    ): void;
    update(
      callback: BodyResponseCallback<Schema$PubsubNotificationSettings>
    ): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Pubsubnotificationsettings$Update
        | BodyResponseCallback<Schema$PubsubNotificationSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PubsubNotificationSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PubsubNotificationSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PubsubNotificationSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Pubsubnotificationsettings$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pubsubnotificationsettings$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/pubsubnotificationsettings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PubsubNotificationSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PubsubNotificationSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Pubsubnotificationsettings$Get
    extends StandardParameters {
    /**
     * The ID of the account for which to get pubsub notification settings.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Pubsubnotificationsettings$Update
    extends StandardParameters {
    /**
     * The ID of the account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PubsubNotificationSettings;
  }

  export class Resource$Quotas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the daily call quota and usage per method for your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Quotas$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Quotas$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMethodQuotasResponse>;
    list(
      params: Params$Resource$Quotas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Quotas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMethodQuotasResponse>,
      callback: BodyResponseCallback<Schema$ListMethodQuotasResponse>
    ): void;
    list(
      params: Params$Resource$Quotas$List,
      callback: BodyResponseCallback<Schema$ListMethodQuotasResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMethodQuotasResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Quotas$List
        | BodyResponseCallback<Schema$ListMethodQuotasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMethodQuotasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMethodQuotasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMethodQuotasResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Quotas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Quotas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/quotas').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListMethodQuotasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMethodQuotasResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Quotas$List extends StandardParameters {
    /**
     * Required. The ID of the account that has quota. This account must be an admin.
     */
    merchantId?: string;
    /**
     * The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     */
    pageToken?: string;
  }

  export class Resource$Recommendations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates recommendations for a merchant.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generate(
      params: Params$Resource$Recommendations$Generate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generate(
      params?: Params$Resource$Recommendations$Generate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenerateRecommendationsResponse>;
    generate(
      params: Params$Resource$Recommendations$Generate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generate(
      params: Params$Resource$Recommendations$Generate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateRecommendationsResponse>,
      callback: BodyResponseCallback<Schema$GenerateRecommendationsResponse>
    ): void;
    generate(
      params: Params$Resource$Recommendations$Generate,
      callback: BodyResponseCallback<Schema$GenerateRecommendationsResponse>
    ): void;
    generate(
      callback: BodyResponseCallback<Schema$GenerateRecommendationsResponse>
    ): void;
    generate(
      paramsOrCallback?:
        | Params$Resource$Recommendations$Generate
        | BodyResponseCallback<Schema$GenerateRecommendationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateRecommendationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateRecommendationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GenerateRecommendationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Recommendations$Generate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Recommendations$Generate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/recommendations/generate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenerateRecommendationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateRecommendationsResponse>(
          parameters
        );
      }
    }

    /**
     * Reports an interaction on a recommendation for a merchant.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    reportInteraction(
      params: Params$Resource$Recommendations$Reportinteraction,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reportInteraction(
      params?: Params$Resource$Recommendations$Reportinteraction,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    reportInteraction(
      params: Params$Resource$Recommendations$Reportinteraction,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reportInteraction(
      params: Params$Resource$Recommendations$Reportinteraction,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    reportInteraction(
      params: Params$Resource$Recommendations$Reportinteraction,
      callback: BodyResponseCallback<void>
    ): void;
    reportInteraction(callback: BodyResponseCallback<void>): void;
    reportInteraction(
      paramsOrCallback?:
        | Params$Resource$Recommendations$Reportinteraction
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Recommendations$Reportinteraction;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Recommendations$Reportinteraction;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/recommendations/reportInteraction'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Recommendations$Generate
    extends StandardParameters {
    /**
     * Optional. List of allowed tags. Tags are a set of predefined strings that describe the category that individual recommendation types belong to. User can specify zero or more tags in this field to indicate what categories of recommendations they want to receive. Current list of supported tags: - TREND
     */
    allowedTag?: string[];
    /**
     * Optional. Language code of the client. If not set, the result will be in default language (English). This language code affects all fields prefixed with "localized". This should be set to ISO 639-1 country code. List of currently verified supported language code: en, fr, cs, da, de, es, it, nl, no, pl, pt, pt, fi, sv, vi, tr, th, ko, zh-CN, zh-TW, ja, id, hi
     */
    languageCode?: string;
    /**
     * Required. The ID of the account to fetch recommendations for.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Recommendations$Reportinteraction
    extends StandardParameters {
    /**
     * Required. The ID of the account that wants to report an interaction.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReportInteractionRequest;
  }

  export class Resource$Regionalinventory {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Updates regional inventory for multiple products or regions in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    custombatch(
      params: Params$Resource$Regionalinventory$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Regionalinventory$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RegionalinventoryCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Regionalinventory$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Regionalinventory$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RegionalinventoryCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$RegionalinventoryCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Regionalinventory$Custombatch,
      callback: BodyResponseCallback<Schema$RegionalinventoryCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$RegionalinventoryCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Regionalinventory$Custombatch
        | BodyResponseCallback<Schema$RegionalinventoryCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RegionalinventoryCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RegionalinventoryCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RegionalinventoryCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Regionalinventory$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regionalinventory$Custombatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/regionalinventory/batch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RegionalinventoryCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RegionalinventoryCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Regionalinventory$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Regionalinventory$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RegionalInventory>;
    insert(
      params: Params$Resource$Regionalinventory$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Regionalinventory$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$RegionalInventory>,
      callback: BodyResponseCallback<Schema$RegionalInventory>
    ): void;
    insert(
      params: Params$Resource$Regionalinventory$Insert,
      callback: BodyResponseCallback<Schema$RegionalInventory>
    ): void;
    insert(callback: BodyResponseCallback<Schema$RegionalInventory>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Regionalinventory$Insert
        | BodyResponseCallback<Schema$RegionalInventory>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RegionalInventory>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RegionalInventory>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RegionalInventory>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Regionalinventory$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regionalinventory$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/products/{productId}/regionalinventory'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'productId'],
        pathParams: ['merchantId', 'productId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RegionalInventory>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RegionalInventory>(parameters);
      }
    }
  }

  export interface Params$Resource$Regionalinventory$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$RegionalinventoryCustomBatchRequest;
  }
  export interface Params$Resource$Regionalinventory$Insert
    extends StandardParameters {
    /**
     * The ID of the account that contains the product. This account cannot be a multi-client account.
     */
    merchantId?: string;
    /**
     * The REST ID of the product for which to update the regional inventory.
     */
    productId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RegionalInventory;
  }

  export class Resource$Regions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a region definition in your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Regions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Regions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Region>;
    create(
      params: Params$Resource$Regions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Regions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Region>,
      callback: BodyResponseCallback<Schema$Region>
    ): void;
    create(
      params: Params$Resource$Regions$Create,
      callback: BodyResponseCallback<Schema$Region>
    ): void;
    create(callback: BodyResponseCallback<Schema$Region>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Regions$Create
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Region> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Regions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/regions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Region>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Region>(parameters);
      }
    }

    /**
     * Deletes a region definition from your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Regions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Regions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Regions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Regions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Regions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Regions$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Regions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/regions/{regionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'regionId'],
        pathParams: ['merchantId', 'regionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a region defined in your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Regions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Regions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Region>;
    get(
      params: Params$Resource$Regions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Regions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Region>,
      callback: BodyResponseCallback<Schema$Region>
    ): void;
    get(
      params: Params$Resource$Regions$Get,
      callback: BodyResponseCallback<Schema$Region>
    ): void;
    get(callback: BodyResponseCallback<Schema$Region>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Regions$Get
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Region> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Regions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/regions/{regionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'regionId'],
        pathParams: ['merchantId', 'regionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Region>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Region>(parameters);
      }
    }

    /**
     * Lists the regions in your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Regions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Regions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRegionsResponse>;
    list(
      params: Params$Resource$Regions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Regions$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRegionsResponse>,
      callback: BodyResponseCallback<Schema$ListRegionsResponse>
    ): void;
    list(
      params: Params$Resource$Regions$List,
      callback: BodyResponseCallback<Schema$ListRegionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRegionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Regions$List
        | BodyResponseCallback<Schema$ListRegionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRegionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRegionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRegionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Regions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/regions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRegionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRegionsResponse>(parameters);
      }
    }

    /**
     * Updates a region definition in your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Regions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Regions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Region>;
    patch(
      params: Params$Resource$Regions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Regions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Region>,
      callback: BodyResponseCallback<Schema$Region>
    ): void;
    patch(
      params: Params$Resource$Regions$Patch,
      callback: BodyResponseCallback<Schema$Region>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Region>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Regions$Patch
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Region> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Regions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/regions/{regionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'regionId'],
        pathParams: ['merchantId', 'regionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Region>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Region>(parameters);
      }
    }
  }

  export interface Params$Resource$Regions$Create extends StandardParameters {
    /**
     * Required. The id of the merchant for which to create region definition.
     */
    merchantId?: string;
    /**
     * Required. The id of the region to create.
     */
    regionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Region;
  }
  export interface Params$Resource$Regions$Delete extends StandardParameters {
    /**
     * Required. The id of the merchant for which to delete region definition.
     */
    merchantId?: string;
    /**
     * Required. The id of the region to delete.
     */
    regionId?: string;
  }
  export interface Params$Resource$Regions$Get extends StandardParameters {
    /**
     * Required. The id of the merchant for which to retrieve region definition.
     */
    merchantId?: string;
    /**
     * Required. The id of the region to retrieve.
     */
    regionId?: string;
  }
  export interface Params$Resource$Regions$List extends StandardParameters {
    /**
     * Required. The id of the merchant for which to list region definitions.
     */
    merchantId?: string;
    /**
     * The maximum number of regions to return. The service may return fewer than this value. If unspecified, at most 50 rules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListRegions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegions` must match the call that provided the page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Regions$Patch extends StandardParameters {
    /**
     * Required. The id of the merchant for which to update region definition.
     */
    merchantId?: string;
    /**
     * Required. The id of the region to update.
     */
    regionId?: string;
    /**
     * Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Region;
  }

  export class Resource$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves merchant performance metrics matching the search query and optionally segmented by selected dimensions.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    search(
      params: Params$Resource$Reports$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Reports$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchResponse>;
    search(
      params: Params$Resource$Reports$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Reports$Search,
      options: MethodOptions | BodyResponseCallback<Schema$SearchResponse>,
      callback: BodyResponseCallback<Schema$SearchResponse>
    ): void;
    search(
      params: Params$Resource$Reports$Search,
      callback: BodyResponseCallback<Schema$SearchResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$SearchResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Reports$Search
        | BodyResponseCallback<Schema$SearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SearchResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reports$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/reports/search'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Reports$Search extends StandardParameters {
    /**
     * Required. Id of the merchant making the call. Must be a standalone account or an MCA subaccount.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchRequest;
  }

  export class Resource$Returnaddress {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Batches multiple return address related calls in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    custombatch(
      params: Params$Resource$Returnaddress$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Returnaddress$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReturnaddressCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Returnaddress$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Returnaddress$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReturnaddressCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$ReturnaddressCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Returnaddress$Custombatch,
      callback: BodyResponseCallback<Schema$ReturnaddressCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$ReturnaddressCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Returnaddress$Custombatch
        | BodyResponseCallback<Schema$ReturnaddressCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReturnaddressCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReturnaddressCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReturnaddressCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Returnaddress$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnaddress$Custombatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/returnaddress/batch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReturnaddressCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReturnaddressCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes a return address for the given Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Returnaddress$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Returnaddress$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Returnaddress$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Returnaddress$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Returnaddress$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Returnaddress$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Returnaddress$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnaddress$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/returnaddress/{returnAddressId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'returnAddressId'],
        pathParams: ['merchantId', 'returnAddressId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets a return address of the Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Returnaddress$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Returnaddress$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReturnAddress>;
    get(
      params: Params$Resource$Returnaddress$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Returnaddress$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ReturnAddress>,
      callback: BodyResponseCallback<Schema$ReturnAddress>
    ): void;
    get(
      params: Params$Resource$Returnaddress$Get,
      callback: BodyResponseCallback<Schema$ReturnAddress>
    ): void;
    get(callback: BodyResponseCallback<Schema$ReturnAddress>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Returnaddress$Get
        | BodyResponseCallback<Schema$ReturnAddress>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReturnAddress>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReturnAddress>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ReturnAddress> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Returnaddress$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnaddress$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/returnaddress/{returnAddressId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'returnAddressId'],
        pathParams: ['merchantId', 'returnAddressId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReturnAddress>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReturnAddress>(parameters);
      }
    }

    /**
     * Inserts a return address for the Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Returnaddress$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Returnaddress$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReturnAddress>;
    insert(
      params: Params$Resource$Returnaddress$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Returnaddress$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ReturnAddress>,
      callback: BodyResponseCallback<Schema$ReturnAddress>
    ): void;
    insert(
      params: Params$Resource$Returnaddress$Insert,
      callback: BodyResponseCallback<Schema$ReturnAddress>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ReturnAddress>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Returnaddress$Insert
        | BodyResponseCallback<Schema$ReturnAddress>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReturnAddress>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReturnAddress>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ReturnAddress> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Returnaddress$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnaddress$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/returnaddress').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReturnAddress>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReturnAddress>(parameters);
      }
    }

    /**
     * Lists the return addresses of the Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Returnaddress$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Returnaddress$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReturnaddressListResponse>;
    list(
      params: Params$Resource$Returnaddress$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Returnaddress$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReturnaddressListResponse>,
      callback: BodyResponseCallback<Schema$ReturnaddressListResponse>
    ): void;
    list(
      params: Params$Resource$Returnaddress$List,
      callback: BodyResponseCallback<Schema$ReturnaddressListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ReturnaddressListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Returnaddress$List
        | BodyResponseCallback<Schema$ReturnaddressListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReturnaddressListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReturnaddressListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReturnaddressListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Returnaddress$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnaddress$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/returnaddress').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReturnaddressListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReturnaddressListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Returnaddress$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ReturnaddressCustomBatchRequest;
  }
  export interface Params$Resource$Returnaddress$Delete
    extends StandardParameters {
    /**
     * The Merchant Center account from which to delete the given return address.
     */
    merchantId?: string;
    /**
     * Return address ID generated by Google.
     */
    returnAddressId?: string;
  }
  export interface Params$Resource$Returnaddress$Get
    extends StandardParameters {
    /**
     * The Merchant Center account to get a return address for.
     */
    merchantId?: string;
    /**
     * Return address ID generated by Google.
     */
    returnAddressId?: string;
  }
  export interface Params$Resource$Returnaddress$Insert
    extends StandardParameters {
    /**
     * The Merchant Center account to insert a return address for.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReturnAddress;
  }
  export interface Params$Resource$Returnaddress$List
    extends StandardParameters {
    /**
     * List only return addresses applicable to the given country of sale. When omitted, all return addresses are listed.
     */
    country?: string;
    /**
     * The maximum number of addresses in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The Merchant Center account to list return addresses for.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }

  export class Resource$Returnpolicy {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Batches multiple return policy related calls in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    custombatch(
      params: Params$Resource$Returnpolicy$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Returnpolicy$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReturnpolicyCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Returnpolicy$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Returnpolicy$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReturnpolicyCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$ReturnpolicyCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Returnpolicy$Custombatch,
      callback: BodyResponseCallback<Schema$ReturnpolicyCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$ReturnpolicyCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Returnpolicy$Custombatch
        | BodyResponseCallback<Schema$ReturnpolicyCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReturnpolicyCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReturnpolicyCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReturnpolicyCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Returnpolicy$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnpolicy$Custombatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/returnpolicy/batch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReturnpolicyCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReturnpolicyCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes a return policy for the given Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Returnpolicy$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Returnpolicy$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Returnpolicy$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Returnpolicy$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Returnpolicy$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Returnpolicy$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Returnpolicy$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnpolicy$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/returnpolicy/{returnPolicyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'returnPolicyId'],
        pathParams: ['merchantId', 'returnPolicyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets a return policy of the Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Returnpolicy$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Returnpolicy$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReturnPolicy>;
    get(
      params: Params$Resource$Returnpolicy$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Returnpolicy$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ReturnPolicy>,
      callback: BodyResponseCallback<Schema$ReturnPolicy>
    ): void;
    get(
      params: Params$Resource$Returnpolicy$Get,
      callback: BodyResponseCallback<Schema$ReturnPolicy>
    ): void;
    get(callback: BodyResponseCallback<Schema$ReturnPolicy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Returnpolicy$Get
        | BodyResponseCallback<Schema$ReturnPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReturnPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReturnPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ReturnPolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Returnpolicy$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnpolicy$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/returnpolicy/{returnPolicyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'returnPolicyId'],
        pathParams: ['merchantId', 'returnPolicyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReturnPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReturnPolicy>(parameters);
      }
    }

    /**
     * Inserts a return policy for the Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Returnpolicy$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Returnpolicy$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReturnPolicy>;
    insert(
      params: Params$Resource$Returnpolicy$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Returnpolicy$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ReturnPolicy>,
      callback: BodyResponseCallback<Schema$ReturnPolicy>
    ): void;
    insert(
      params: Params$Resource$Returnpolicy$Insert,
      callback: BodyResponseCallback<Schema$ReturnPolicy>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ReturnPolicy>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Returnpolicy$Insert
        | BodyResponseCallback<Schema$ReturnPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReturnPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReturnPolicy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ReturnPolicy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Returnpolicy$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnpolicy$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/returnpolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReturnPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReturnPolicy>(parameters);
      }
    }

    /**
     * Lists the return policies of the Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Returnpolicy$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Returnpolicy$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReturnpolicyListResponse>;
    list(
      params: Params$Resource$Returnpolicy$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Returnpolicy$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReturnpolicyListResponse>,
      callback: BodyResponseCallback<Schema$ReturnpolicyListResponse>
    ): void;
    list(
      params: Params$Resource$Returnpolicy$List,
      callback: BodyResponseCallback<Schema$ReturnpolicyListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ReturnpolicyListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Returnpolicy$List
        | BodyResponseCallback<Schema$ReturnpolicyListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReturnpolicyListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReturnpolicyListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReturnpolicyListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Returnpolicy$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnpolicy$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/{merchantId}/returnpolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReturnpolicyListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReturnpolicyListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Returnpolicy$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ReturnpolicyCustomBatchRequest;
  }
  export interface Params$Resource$Returnpolicy$Delete
    extends StandardParameters {
    /**
     * The Merchant Center account from which to delete the given return policy.
     */
    merchantId?: string;
    /**
     * Return policy ID generated by Google.
     */
    returnPolicyId?: string;
  }
  export interface Params$Resource$Returnpolicy$Get extends StandardParameters {
    /**
     * The Merchant Center account to get a return policy for.
     */
    merchantId?: string;
    /**
     * Return policy ID generated by Google.
     */
    returnPolicyId?: string;
  }
  export interface Params$Resource$Returnpolicy$Insert
    extends StandardParameters {
    /**
     * The Merchant Center account to insert a return policy for.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReturnPolicy;
  }
  export interface Params$Resource$Returnpolicy$List
    extends StandardParameters {
    /**
     * The Merchant Center account to list return policies for.
     */
    merchantId?: string;
  }

  export class Resource$Returnpolicyonline {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new return policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Returnpolicyonline$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Returnpolicyonline$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReturnPolicyOnline>;
    create(
      params: Params$Resource$Returnpolicyonline$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Returnpolicyonline$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ReturnPolicyOnline>,
      callback: BodyResponseCallback<Schema$ReturnPolicyOnline>
    ): void;
    create(
      params: Params$Resource$Returnpolicyonline$Create,
      callback: BodyResponseCallback<Schema$ReturnPolicyOnline>
    ): void;
    create(callback: BodyResponseCallback<Schema$ReturnPolicyOnline>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Returnpolicyonline$Create
        | BodyResponseCallback<Schema$ReturnPolicyOnline>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReturnPolicyOnline>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReturnPolicyOnline>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReturnPolicyOnline>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Returnpolicyonline$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnpolicyonline$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/returnpolicyonline'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReturnPolicyOnline>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReturnPolicyOnline>(parameters);
      }
    }

    /**
     * Deletes an existing return policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Returnpolicyonline$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Returnpolicyonline$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Returnpolicyonline$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Returnpolicyonline$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Returnpolicyonline$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Returnpolicyonline$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Returnpolicyonline$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnpolicyonline$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/returnpolicyonline/{returnPolicyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'returnPolicyId'],
        pathParams: ['merchantId', 'returnPolicyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets an existing return policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Returnpolicyonline$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Returnpolicyonline$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReturnPolicyOnline>;
    get(
      params: Params$Resource$Returnpolicyonline$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Returnpolicyonline$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ReturnPolicyOnline>,
      callback: BodyResponseCallback<Schema$ReturnPolicyOnline>
    ): void;
    get(
      params: Params$Resource$Returnpolicyonline$Get,
      callback: BodyResponseCallback<Schema$ReturnPolicyOnline>
    ): void;
    get(callback: BodyResponseCallback<Schema$ReturnPolicyOnline>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Returnpolicyonline$Get
        | BodyResponseCallback<Schema$ReturnPolicyOnline>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReturnPolicyOnline>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReturnPolicyOnline>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReturnPolicyOnline>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Returnpolicyonline$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnpolicyonline$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/returnpolicyonline/{returnPolicyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'returnPolicyId'],
        pathParams: ['merchantId', 'returnPolicyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReturnPolicyOnline>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReturnPolicyOnline>(parameters);
      }
    }

    /**
     * Lists all existing return policies.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Returnpolicyonline$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Returnpolicyonline$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReturnPolicyOnlineResponse>;
    list(
      params: Params$Resource$Returnpolicyonline$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Returnpolicyonline$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReturnPolicyOnlineResponse>,
      callback: BodyResponseCallback<Schema$ListReturnPolicyOnlineResponse>
    ): void;
    list(
      params: Params$Resource$Returnpolicyonline$List,
      callback: BodyResponseCallback<Schema$ListReturnPolicyOnlineResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListReturnPolicyOnlineResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Returnpolicyonline$List
        | BodyResponseCallback<Schema$ListReturnPolicyOnlineResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReturnPolicyOnlineResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReturnPolicyOnlineResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListReturnPolicyOnlineResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Returnpolicyonline$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnpolicyonline$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/returnpolicyonline'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListReturnPolicyOnlineResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReturnPolicyOnlineResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing return policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Returnpolicyonline$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Returnpolicyonline$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReturnPolicyOnline>;
    patch(
      params: Params$Resource$Returnpolicyonline$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Returnpolicyonline$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ReturnPolicyOnline>,
      callback: BodyResponseCallback<Schema$ReturnPolicyOnline>
    ): void;
    patch(
      params: Params$Resource$Returnpolicyonline$Patch,
      callback: BodyResponseCallback<Schema$ReturnPolicyOnline>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ReturnPolicyOnline>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Returnpolicyonline$Patch
        | BodyResponseCallback<Schema$ReturnPolicyOnline>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReturnPolicyOnline>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReturnPolicyOnline>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ReturnPolicyOnline>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Returnpolicyonline$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Returnpolicyonline$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/returnpolicyonline/{returnPolicyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'returnPolicyId'],
        pathParams: ['merchantId', 'returnPolicyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReturnPolicyOnline>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReturnPolicyOnline>(parameters);
      }
    }
  }

  export interface Params$Resource$Returnpolicyonline$Create
    extends StandardParameters {
    /**
     * Required. The id of the merchant for which to retrieve the return policy online object.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReturnPolicyOnline;
  }
  export interface Params$Resource$Returnpolicyonline$Delete
    extends StandardParameters {
    /**
     * Required. The id of the merchant for which to retrieve the return policy online object.
     */
    merchantId?: string;
    /**
     * Required. The id of the return policy to delete.
     */
    returnPolicyId?: string;
  }
  export interface Params$Resource$Returnpolicyonline$Get
    extends StandardParameters {
    /**
     * Required. The id of the merchant for which to retrieve the return policy online object.
     */
    merchantId?: string;
    /**
     * Required. The id of the return policy to retrieve.
     */
    returnPolicyId?: string;
  }
  export interface Params$Resource$Returnpolicyonline$List
    extends StandardParameters {
    /**
     * Required. The id of the merchant for which to retrieve the return policy online object.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Returnpolicyonline$Patch
    extends StandardParameters {
    /**
     * Required. The id of the merchant for which to retrieve the return policy online object.
     */
    merchantId?: string;
    /**
     * Required. The id of the return policy to update.
     */
    returnPolicyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReturnPolicyOnline;
  }

  export class Resource$Settlementreports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a settlement report from your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Settlementreports$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Settlementreports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SettlementReport>;
    get(
      params: Params$Resource$Settlementreports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Settlementreports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SettlementReport>,
      callback: BodyResponseCallback<Schema$SettlementReport>
    ): void;
    get(
      params: Params$Resource$Settlementreports$Get,
      callback: BodyResponseCallback<Schema$SettlementReport>
    ): void;
    get(callback: BodyResponseCallback<Schema$SettlementReport>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Settlementreports$Get
        | BodyResponseCallback<Schema$SettlementReport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SettlementReport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SettlementReport>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SettlementReport> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settlementreports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settlementreports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/settlementreports/{settlementId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'settlementId'],
        pathParams: ['merchantId', 'settlementId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SettlementReport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SettlementReport>(parameters);
      }
    }

    /**
     * Retrieves a list of settlement reports from your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Settlementreports$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Settlementreports$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SettlementreportsListResponse>;
    list(
      params: Params$Resource$Settlementreports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Settlementreports$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SettlementreportsListResponse>,
      callback: BodyResponseCallback<Schema$SettlementreportsListResponse>
    ): void;
    list(
      params: Params$Resource$Settlementreports$List,
      callback: BodyResponseCallback<Schema$SettlementreportsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SettlementreportsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Settlementreports$List
        | BodyResponseCallback<Schema$SettlementreportsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SettlementreportsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SettlementreportsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SettlementreportsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settlementreports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settlementreports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/settlementreports'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SettlementreportsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SettlementreportsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Settlementreports$Get
    extends StandardParameters {
    /**
     * The Merchant Center account of the settlement report.
     */
    merchantId?: string;
    /**
     * The Google-provided ID of the settlement.
     */
    settlementId?: string;
  }
  export interface Params$Resource$Settlementreports$List
    extends StandardParameters {
    /**
     * The maximum number of settlements to return in the response, used for paging. The default value is 200 returns per page, and the maximum allowed value is 5000 returns per page.
     */
    maxResults?: number;
    /**
     * The Merchant Center account to list settlements for.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * Obtains settlements which have transactions before this date (inclusively), in ISO 8601 format.
     */
    transferEndDate?: string;
    /**
     * Obtains settlements which have transactions after this date (inclusively), in ISO 8601 format.
     */
    transferStartDate?: string;
  }

  export class Resource$Settlementtransactions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of transactions for the settlement.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Settlementtransactions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Settlementtransactions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SettlementtransactionsListResponse>;
    list(
      params: Params$Resource$Settlementtransactions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Settlementtransactions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SettlementtransactionsListResponse>,
      callback: BodyResponseCallback<Schema$SettlementtransactionsListResponse>
    ): void;
    list(
      params: Params$Resource$Settlementtransactions$List,
      callback: BodyResponseCallback<Schema$SettlementtransactionsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SettlementtransactionsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Settlementtransactions$List
        | BodyResponseCallback<Schema$SettlementtransactionsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SettlementtransactionsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SettlementtransactionsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SettlementtransactionsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Settlementtransactions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settlementtransactions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/settlementreports/{settlementId}/transactions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'settlementId'],
        pathParams: ['merchantId', 'settlementId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SettlementtransactionsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SettlementtransactionsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Settlementtransactions$List
    extends StandardParameters {
    /**
     * The maximum number of transactions to return in the response, used for paging. The default value is 200 transactions per page, and the maximum allowed value is 5000 transactions per page.
     */
    maxResults?: number;
    /**
     * The Merchant Center account to list transactions for.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * The Google-provided ID of the settlement.
     */
    settlementId?: string;
    /**
     * The list of transactions to return. If not set, all transactions will be returned.
     */
    transactionIds?: string[];
  }

  export class Resource$Shippingsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves and updates the shipping settings of multiple accounts in a single request.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    custombatch(
      params: Params$Resource$Shippingsettings$Custombatch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    custombatch(
      params?: Params$Resource$Shippingsettings$Custombatch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingsettingsCustomBatchResponse>;
    custombatch(
      params: Params$Resource$Shippingsettings$Custombatch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    custombatch(
      params: Params$Resource$Shippingsettings$Custombatch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>,
      callback: BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>
    ): void;
    custombatch(
      params: Params$Resource$Shippingsettings$Custombatch,
      callback: BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>
    ): void;
    custombatch(
      callback: BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>
    ): void;
    custombatch(
      paramsOrCallback?:
        | Params$Resource$Shippingsettings$Custombatch
        | BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShippingsettingsCustomBatchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ShippingsettingsCustomBatchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shippingsettings$Custombatch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shippingsettings$Custombatch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/content/v2.1/shippingsettings/batch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ShippingsettingsCustomBatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ShippingsettingsCustomBatchResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves the shipping settings of the account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Shippingsettings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Shippingsettings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingSettings>;
    get(
      params: Params$Resource$Shippingsettings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Shippingsettings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ShippingSettings>,
      callback: BodyResponseCallback<Schema$ShippingSettings>
    ): void;
    get(
      params: Params$Resource$Shippingsettings$Get,
      callback: BodyResponseCallback<Schema$ShippingSettings>
    ): void;
    get(callback: BodyResponseCallback<Schema$ShippingSettings>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Shippingsettings$Get
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ShippingSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shippingsettings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shippingsettings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/shippingsettings/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ShippingSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ShippingSettings>(parameters);
      }
    }

    /**
     * Retrieves supported carriers and carrier services for an account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getsupportedcarriers(
      params: Params$Resource$Shippingsettings$Getsupportedcarriers,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getsupportedcarriers(
      params?: Params$Resource$Shippingsettings$Getsupportedcarriers,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingsettingsGetSupportedCarriersResponse>;
    getsupportedcarriers(
      params: Params$Resource$Shippingsettings$Getsupportedcarriers,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getsupportedcarriers(
      params: Params$Resource$Shippingsettings$Getsupportedcarriers,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ShippingsettingsGetSupportedCarriersResponse>,
      callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedCarriersResponse>
    ): void;
    getsupportedcarriers(
      params: Params$Resource$Shippingsettings$Getsupportedcarriers,
      callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedCarriersResponse>
    ): void;
    getsupportedcarriers(
      callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedCarriersResponse>
    ): void;
    getsupportedcarriers(
      paramsOrCallback?:
        | Params$Resource$Shippingsettings$Getsupportedcarriers
        | BodyResponseCallback<Schema$ShippingsettingsGetSupportedCarriersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShippingsettingsGetSupportedCarriersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShippingsettingsGetSupportedCarriersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ShippingsettingsGetSupportedCarriersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shippingsettings$Getsupportedcarriers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shippingsettings$Getsupportedcarriers;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/supportedCarriers'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ShippingsettingsGetSupportedCarriersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ShippingsettingsGetSupportedCarriersResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves supported holidays for an account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getsupportedholidays(
      params: Params$Resource$Shippingsettings$Getsupportedholidays,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getsupportedholidays(
      params?: Params$Resource$Shippingsettings$Getsupportedholidays,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingsettingsGetSupportedHolidaysResponse>;
    getsupportedholidays(
      params: Params$Resource$Shippingsettings$Getsupportedholidays,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getsupportedholidays(
      params: Params$Resource$Shippingsettings$Getsupportedholidays,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ShippingsettingsGetSupportedHolidaysResponse>,
      callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedHolidaysResponse>
    ): void;
    getsupportedholidays(
      params: Params$Resource$Shippingsettings$Getsupportedholidays,
      callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedHolidaysResponse>
    ): void;
    getsupportedholidays(
      callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedHolidaysResponse>
    ): void;
    getsupportedholidays(
      paramsOrCallback?:
        | Params$Resource$Shippingsettings$Getsupportedholidays
        | BodyResponseCallback<Schema$ShippingsettingsGetSupportedHolidaysResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShippingsettingsGetSupportedHolidaysResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShippingsettingsGetSupportedHolidaysResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ShippingsettingsGetSupportedHolidaysResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shippingsettings$Getsupportedholidays;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shippingsettings$Getsupportedholidays;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/supportedHolidays'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ShippingsettingsGetSupportedHolidaysResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ShippingsettingsGetSupportedHolidaysResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves supported pickup services for an account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getsupportedpickupservices(
      params: Params$Resource$Shippingsettings$Getsupportedpickupservices,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getsupportedpickupservices(
      params?: Params$Resource$Shippingsettings$Getsupportedpickupservices,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingsettingsGetSupportedPickupServicesResponse>;
    getsupportedpickupservices(
      params: Params$Resource$Shippingsettings$Getsupportedpickupservices,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getsupportedpickupservices(
      params: Params$Resource$Shippingsettings$Getsupportedpickupservices,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ShippingsettingsGetSupportedPickupServicesResponse>,
      callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedPickupServicesResponse>
    ): void;
    getsupportedpickupservices(
      params: Params$Resource$Shippingsettings$Getsupportedpickupservices,
      callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedPickupServicesResponse>
    ): void;
    getsupportedpickupservices(
      callback: BodyResponseCallback<Schema$ShippingsettingsGetSupportedPickupServicesResponse>
    ): void;
    getsupportedpickupservices(
      paramsOrCallback?:
        | Params$Resource$Shippingsettings$Getsupportedpickupservices
        | BodyResponseCallback<Schema$ShippingsettingsGetSupportedPickupServicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShippingsettingsGetSupportedPickupServicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShippingsettingsGetSupportedPickupServicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ShippingsettingsGetSupportedPickupServicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shippingsettings$Getsupportedpickupservices;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Shippingsettings$Getsupportedpickupservices;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/supportedPickupServices'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ShippingsettingsGetSupportedPickupServicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ShippingsettingsGetSupportedPickupServicesResponse>(
          parameters
        );
      }
    }

    /**
     * Lists the shipping settings of the sub-accounts in your Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Shippingsettings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Shippingsettings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingsettingsListResponse>;
    list(
      params: Params$Resource$Shippingsettings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Shippingsettings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ShippingsettingsListResponse>,
      callback: BodyResponseCallback<Schema$ShippingsettingsListResponse>
    ): void;
    list(
      params: Params$Resource$Shippingsettings$List,
      callback: BodyResponseCallback<Schema$ShippingsettingsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ShippingsettingsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Shippingsettings$List
        | BodyResponseCallback<Schema$ShippingsettingsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShippingsettingsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShippingsettingsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ShippingsettingsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shippingsettings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shippingsettings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/shippingsettings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ShippingsettingsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ShippingsettingsListResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Shippingsettings$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Shippingsettings$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingSettings>;
    update(
      params: Params$Resource$Shippingsettings$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Shippingsettings$Update,
      options: MethodOptions | BodyResponseCallback<Schema$ShippingSettings>,
      callback: BodyResponseCallback<Schema$ShippingSettings>
    ): void;
    update(
      params: Params$Resource$Shippingsettings$Update,
      callback: BodyResponseCallback<Schema$ShippingSettings>
    ): void;
    update(callback: BodyResponseCallback<Schema$ShippingSettings>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Shippingsettings$Update
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ShippingSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shippingsettings$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shippingsettings$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/shippingsettings/{accountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId', 'accountId'],
        pathParams: ['accountId', 'merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ShippingSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ShippingSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Shippingsettings$Custombatch
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ShippingsettingsCustomBatchRequest;
  }
  export interface Params$Resource$Shippingsettings$Get
    extends StandardParameters {
    /**
     * The ID of the account for which to get/update shipping settings.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Shippingsettings$Getsupportedcarriers
    extends StandardParameters {
    /**
     * The ID of the account for which to retrieve the supported carriers.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Shippingsettings$Getsupportedholidays
    extends StandardParameters {
    /**
     * The ID of the account for which to retrieve the supported holidays.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Shippingsettings$Getsupportedpickupservices
    extends StandardParameters {
    /**
     * The ID of the account for which to retrieve the supported pickup services.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Shippingsettings$List
    extends StandardParameters {
    /**
     * The maximum number of shipping settings to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the managing account. This must be a multi-client account.
     */
    merchantId?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Shippingsettings$Update
    extends StandardParameters {
    /**
     * The ID of the account for which to get/update shipping settings.
     */
    accountId?: string;
    /**
     * The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ShippingSettings;
  }

  export class Resource$Shoppingadsprogram {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Shoppingadsprogram$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Shoppingadsprogram$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShoppingAdsProgramStatus>;
    get(
      params: Params$Resource$Shoppingadsprogram$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Shoppingadsprogram$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ShoppingAdsProgramStatus>,
      callback: BodyResponseCallback<Schema$ShoppingAdsProgramStatus>
    ): void;
    get(
      params: Params$Resource$Shoppingadsprogram$Get,
      callback: BodyResponseCallback<Schema$ShoppingAdsProgramStatus>
    ): void;
    get(callback: BodyResponseCallback<Schema$ShoppingAdsProgramStatus>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Shoppingadsprogram$Get
        | BodyResponseCallback<Schema$ShoppingAdsProgramStatus>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShoppingAdsProgramStatus>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShoppingAdsProgramStatus>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ShoppingAdsProgramStatus>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shoppingadsprogram$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shoppingadsprogram$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/content/v2.1/{merchantId}/shoppingadsprogram'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ShoppingAdsProgramStatus>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ShoppingAdsProgramStatus>(parameters);
      }
    }

    /**
     * Requests a review of Shopping ads in a specific region. This method deprecated. Use the `MerchantSupportService` to view product and account issues and request a review.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    requestreview(
      params: Params$Resource$Shoppingadsprogram$Requestreview,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    requestreview(
      params?: Params$Resource$Shoppingadsprogram$Requestreview,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    requestreview(
      params: Params$Resource$Shoppingadsprogram$Requestreview,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    requestreview(
      params: Params$Resource$Shoppingadsprogram$Requestreview,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    requestreview(
      params: Params$Resource$Shoppingadsprogram$Requestreview,
      callback: BodyResponseCallback<void>
    ): void;
    requestreview(callback: BodyResponseCallback<void>): void;
    requestreview(
      paramsOrCallback?:
        | Params$Resource$Shoppingadsprogram$Requestreview
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shoppingadsprogram$Requestreview;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shoppingadsprogram$Requestreview;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://shoppingcontent.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/content/v2.1/{merchantId}/shoppingadsprogram/requestreview'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['merchantId'],
        pathParams: ['merchantId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Shoppingadsprogram$Get
    extends StandardParameters {
    /**
     * Required. The ID of the account.
     */
    merchantId?: string;
  }
  export interface Params$Resource$Shoppingadsprogram$Requestreview
    extends StandardParameters {
    /**
     * Required. The ID of the account.
     */
    merchantId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RequestReviewShoppingAdsRequest;
  }
}

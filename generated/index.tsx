// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  I18NLocaleCode: any;
  JSON: any;
  NavbarNavLinksDynamicZoneInput: any;
  PageBlocksDynamicZoneInput: any;
  ServiceBlocksDynamicZoneInput: any;
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentAccordionFaq = {
  __typename?: 'ComponentAccordionFaq';
  content: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentAccordionFaqFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAccordionFaqFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAccordionFaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAccordionFaqFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksAccordion = {
  __typename?: 'ComponentBlocksAccordion';
  accordion: Array<Maybe<ComponentAccordionFaq>>;
  id: Scalars['ID'];
  title?: Maybe<ComponentTitleTitle>;
};


export type ComponentBlocksAccordionAccordionArgs = {
  filters?: InputMaybe<ComponentAccordionFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentBlocksContacts = {
  __typename?: 'ComponentBlocksContacts';
  id: Scalars['ID'];
};

export type ComponentBlocksDoubleSection = {
  __typename?: 'ComponentBlocksDoubleSection';
  id: Scalars['ID'];
  leftSection: Scalars['String'];
  rightSection: Scalars['String'];
  title?: Maybe<ComponentTitleTitle>;
};

export type ComponentBlocksHeading = {
  __typename?: 'ComponentBlocksHeading';
  background: UploadFileEntityResponse;
  contactButton?: Maybe<Scalars['Boolean']>;
  headingDescription?: Maybe<Scalars['String']>;
  headingTitle: Scalars['String'];
  id: Scalars['ID'];
};

export type ComponentBlocksHomeHero = {
  __typename?: 'ComponentBlocksHomeHero';
  dimensions?: Maybe<ComponentDimensionsDimensions>;
  heroDescription: Scalars['String'];
  heroTitle: Scalars['String'];
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
};

export type ComponentBlocksImagesGallery = {
  __typename?: 'ComponentBlocksImagesGallery';
  id: Scalars['ID'];
  images: UploadFileRelationResponseCollection;
  title?: Maybe<ComponentTitleTitle>;
};


export type ComponentBlocksImagesGalleryImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentBlocksPrices = {
  __typename?: 'ComponentBlocksPrices';
  id: Scalars['ID'];
  title?: Maybe<ComponentTitleTitle>;
};

export type ComponentBlocksSection = {
  __typename?: 'ComponentBlocksSection';
  content: Scalars['String'];
  id: Scalars['ID'];
  title?: Maybe<ComponentTitleTitle>;
};

export type ComponentBlocksServices = {
  __typename?: 'ComponentBlocksServices';
  id: Scalars['ID'];
  title?: Maybe<ComponentTitleTitle>;
};

export type ComponentContactsAddress = {
  __typename?: 'ComponentContactsAddress';
  address: Scalars['String'];
  googleMapLink: Scalars['String'];
  id: Scalars['ID'];
};

export type ComponentContactsAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  googleMapLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentContactsPhoneNumbers = {
  __typename?: 'ComponentContactsPhoneNumbers';
  id: Scalars['ID'];
  phone: Scalars['String'];
};

export type ComponentContactsPhoneNumbersFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContactsPhoneNumbersFiltersInput>>>;
  not?: InputMaybe<ComponentContactsPhoneNumbersFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContactsPhoneNumbersFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
};

export type ComponentContactsPhoneNumbersInput = {
  id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type ComponentContactsSocialNetworks = {
  __typename?: 'ComponentContactsSocialNetworks';
  icon: Enum_Componentcontactssocialnetworks_Icon;
  id: Scalars['ID'];
  link: Scalars['String'];
};

export type ComponentContactsSocialNetworksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContactsSocialNetworksFiltersInput>>>;
  icon?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentContactsSocialNetworksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContactsSocialNetworksFiltersInput>>>;
};

export type ComponentContactsSocialNetworksInput = {
  icon?: InputMaybe<Enum_Componentcontactssocialnetworks_Icon>;
  id?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
};

export type ComponentDimensionsDimensions = {
  __typename?: 'ComponentDimensionsDimensions';
  height: Scalars['String'];
  id: Scalars['ID'];
  length: Scalars['String'];
  width: Scalars['String'];
};

export type ComponentMenuDropdown = {
  __typename?: 'ComponentMenuDropdown';
  Link: Array<Maybe<ComponentMenuLink>>;
  id: Scalars['ID'];
  label: Scalars['String'];
};


export type ComponentMenuDropdownLinkArgs = {
  filters?: InputMaybe<ComponentMenuLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentMenuLink = {
  __typename?: 'ComponentMenuLink';
  id: Scalars['ID'];
  page?: Maybe<PageEntityResponse>;
  title: Scalars['String'];
};

export type ComponentMenuLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuLinkFiltersInput>>>;
  not?: InputMaybe<ComponentMenuLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMenuLinkFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentTitleTitle = {
  __typename?: 'ComponentTitleTitle';
  align?: Maybe<Enum_Componenttitletitle_Align>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Contact = {
  __typename?: 'Contact';
  address?: Maybe<ComponentContactsAddress>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  phoneNumbers: Array<Maybe<ComponentContactsPhoneNumbers>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  socialNetworks: Array<Maybe<ComponentContactsSocialNetworks>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  workTime?: Maybe<Scalars['String']>;
};


export type ContactPhoneNumbersArgs = {
  filters?: InputMaybe<ComponentContactsPhoneNumbersFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContactSocialNetworksArgs = {
  filters?: InputMaybe<ComponentContactsSocialNetworksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactInput = {
  address?: InputMaybe<ComponentContactsAddressInput>;
  email?: InputMaybe<Scalars['String']>;
  phoneNumbers?: InputMaybe<Array<InputMaybe<ComponentContactsPhoneNumbersInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  socialNetworks?: InputMaybe<Array<InputMaybe<ComponentContactsSocialNetworksInput>>>;
  workTime?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentcontactssocialnetworks_Icon {
  Facebook = 'facebook',
  Instagram = 'instagram',
  Telegram = 'telegram',
  Twitter = 'twitter',
  Viber = 'viber',
  Whatsapp = 'whatsapp'
}

export enum Enum_Componenttitletitle_Align {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type EzformsRecipient = {
  __typename?: 'EzformsRecipient';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EzformsRecipientEntity = {
  __typename?: 'EzformsRecipientEntity';
  attributes?: Maybe<EzformsRecipient>;
  id?: Maybe<Scalars['ID']>;
};

export type EzformsRecipientEntityResponse = {
  __typename?: 'EzformsRecipientEntityResponse';
  data?: Maybe<EzformsRecipientEntity>;
};

export type EzformsRecipientEntityResponseCollection = {
  __typename?: 'EzformsRecipientEntityResponseCollection';
  data: Array<EzformsRecipientEntity>;
  meta: ResponseCollectionMeta;
};

export type EzformsRecipientFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EzformsRecipientFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EzformsRecipientFiltersInput>;
  number?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<EzformsRecipientFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EzformsRecipientInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
};

export type EzformsSubmission = {
  __typename?: 'EzformsSubmission';
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<Scalars['JSON']>;
  score?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EzformsSubmissionEntity = {
  __typename?: 'EzformsSubmissionEntity';
  attributes?: Maybe<EzformsSubmission>;
  id?: Maybe<Scalars['ID']>;
};

export type EzformsSubmissionEntityResponse = {
  __typename?: 'EzformsSubmissionEntityResponse';
  data?: Maybe<EzformsSubmissionEntity>;
};

export type EzformsSubmissionEntityResponseCollection = {
  __typename?: 'EzformsSubmissionEntityResponseCollection';
  data: Array<EzformsSubmissionEntity>;
  meta: ResponseCollectionMeta;
};

export type EzformsSubmissionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EzformsSubmissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  data?: InputMaybe<JsonFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<EzformsSubmissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EzformsSubmissionFiltersInput>>>;
  score?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EzformsSubmissionInput = {
  data?: InputMaybe<Scalars['JSON']>;
  score?: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = ComponentAccordionFaq | ComponentBlocksAccordion | ComponentBlocksContacts | ComponentBlocksDoubleSection | ComponentBlocksHeading | ComponentBlocksHomeHero | ComponentBlocksImagesGallery | ComponentBlocksPrices | ComponentBlocksSection | ComponentBlocksServices | ComponentContactsAddress | ComponentContactsPhoneNumbers | ComponentContactsSocialNetworks | ComponentDimensionsDimensions | ComponentMenuDropdown | ComponentMenuLink | ComponentTitleTitle | Contact | EzformsRecipient | EzformsSubmission | Global | I18NLocale | Navbar | Page | Price | Service | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Global = {
  __typename?: 'Global';
  createdAt?: Maybe<Scalars['DateTime']>;
  darkLogo: UploadFileEntityResponse;
  googleAnalyticsTag: Scalars['String'];
  lightLogo: UploadFileEntityResponse;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GlobalEntity = {
  __typename?: 'GlobalEntity';
  attributes?: Maybe<Global>;
  id?: Maybe<Scalars['ID']>;
};

export type GlobalEntityResponse = {
  __typename?: 'GlobalEntityResponse';
  data?: Maybe<GlobalEntity>;
};

export type GlobalInput = {
  darkLogo?: InputMaybe<Scalars['ID']>;
  googleAnalyticsTag?: InputMaybe<Scalars['String']>;
  lightLogo?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  createEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  createNavbarLocalization?: Maybe<NavbarEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createPageLocalization?: Maybe<PageEntityResponse>;
  createPrice?: Maybe<PriceEntityResponse>;
  createPriceLocalization?: Maybe<PriceEntityResponse>;
  createService?: Maybe<ServiceEntityResponse>;
  createServiceLocalization?: Maybe<ServiceEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  deleteEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteNavbar?: Maybe<NavbarEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deletePrice?: Maybe<PriceEntityResponse>;
  deleteService?: Maybe<ServiceEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  updateEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  updateNavbar?: Maybe<NavbarEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updatePrice?: Maybe<PriceEntityResponse>;
  updateService?: Maybe<ServiceEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateEzformsRecipientArgs = {
  data: EzformsRecipientInput;
};


export type MutationCreateEzformsSubmissionArgs = {
  data: EzformsSubmissionInput;
};


export type MutationCreateNavbarLocalizationArgs = {
  data?: InputMaybe<NavbarInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePageLocalizationArgs = {
  data?: InputMaybe<PageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePriceArgs = {
  data: PriceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePriceLocalizationArgs = {
  data?: InputMaybe<PriceInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateServiceArgs = {
  data: ServiceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateServiceLocalizationArgs = {
  data?: InputMaybe<ServiceInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteEzformsRecipientArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEzformsSubmissionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNavbarArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePriceArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteServiceArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
};


export type MutationUpdateEzformsRecipientArgs = {
  data: EzformsRecipientInput;
  id: Scalars['ID'];
};


export type MutationUpdateEzformsSubmissionArgs = {
  data: EzformsSubmissionInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
};


export type MutationUpdateNavbarArgs = {
  data: NavbarInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePriceArgs = {
  data: PriceInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Navbar = {
  __typename?: 'Navbar';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<NavbarRelationResponseCollection>;
  navLinks: Array<Maybe<NavbarNavLinksDynamicZone>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NavbarLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type NavbarEntity = {
  __typename?: 'NavbarEntity';
  attributes?: Maybe<Navbar>;
  id?: Maybe<Scalars['ID']>;
};

export type NavbarEntityResponse = {
  __typename?: 'NavbarEntityResponse';
  data?: Maybe<NavbarEntity>;
};

export type NavbarInput = {
  navLinks?: InputMaybe<Array<Scalars['NavbarNavLinksDynamicZoneInput']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NavbarNavLinksDynamicZone = ComponentMenuDropdown | ComponentMenuLink | Error;

export type NavbarRelationResponseCollection = {
  __typename?: 'NavbarRelationResponseCollection';
  data: Array<NavbarEntity>;
};

export type Page = {
  __typename?: 'Page';
  blocks?: Maybe<Array<Maybe<PageBlocksDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageBlocksDynamicZone = ComponentBlocksAccordion | ComponentBlocksContacts | ComponentBlocksDoubleSection | ComponentBlocksHeading | ComponentBlocksHomeHero | ComponentBlocksImagesGallery | ComponentBlocksPrices | ComponentBlocksSection | ComponentBlocksServices | Error;

export type PageEntity = {
  __typename?: 'PageEntity';
  attributes?: Maybe<Page>;
  id?: Maybe<Scalars['ID']>;
};

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse';
  data?: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  blocks?: InputMaybe<Array<Scalars['PageBlocksDynamicZoneInput']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  data: Array<PageEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Price = {
  __typename?: 'Price';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PriceRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PriceLocalizationsArgs = {
  filters?: InputMaybe<PriceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PriceEntity = {
  __typename?: 'PriceEntity';
  attributes?: Maybe<Price>;
  id?: Maybe<Scalars['ID']>;
};

export type PriceEntityResponse = {
  __typename?: 'PriceEntityResponse';
  data?: Maybe<PriceEntity>;
};

export type PriceEntityResponseCollection = {
  __typename?: 'PriceEntityResponseCollection';
  data: Array<PriceEntity>;
  meta: ResponseCollectionMeta;
};

export type PriceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PriceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PriceFiltersInput>;
  not?: InputMaybe<PriceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PriceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PriceInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PriceRelationResponseCollection = {
  __typename?: 'PriceRelationResponseCollection';
  data: Array<PriceEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  contact?: Maybe<ContactEntityResponse>;
  ezformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  ezformsRecipients?: Maybe<EzformsRecipientEntityResponseCollection>;
  ezformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  ezformsSubmissions?: Maybe<EzformsSubmissionEntityResponseCollection>;
  global?: Maybe<GlobalEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  navbar?: Maybe<NavbarEntityResponse>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  price?: Maybe<PriceEntityResponse>;
  prices?: Maybe<PriceEntityResponseCollection>;
  service?: Maybe<ServiceEntityResponse>;
  services?: Maybe<ServiceEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryContactArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEzformsRecipientArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEzformsRecipientsArgs = {
  filters?: InputMaybe<EzformsRecipientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEzformsSubmissionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEzformsSubmissionsArgs = {
  filters?: InputMaybe<EzformsSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGlobalArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavbarArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPriceArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPricesArgs = {
  filters?: InputMaybe<PriceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Service = {
  __typename?: 'Service';
  blocks?: Maybe<Array<Maybe<ServiceBlocksDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  icon: UploadFileEntityResponse;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ServiceRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ServiceLocalizationsArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceBlocksDynamicZone = ComponentBlocksAccordion | ComponentBlocksHeading | ComponentBlocksImagesGallery | ComponentBlocksSection | ComponentBlocksServices | Error;

export type ServiceEntity = {
  __typename?: 'ServiceEntity';
  attributes?: Maybe<Service>;
  id?: Maybe<Scalars['ID']>;
};

export type ServiceEntityResponse = {
  __typename?: 'ServiceEntityResponse';
  data?: Maybe<ServiceEntity>;
};

export type ServiceEntityResponseCollection = {
  __typename?: 'ServiceEntityResponseCollection';
  data: Array<ServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type ServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ServiceFiltersInput>;
  not?: InputMaybe<ServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ServiceInput = {
  blocks?: InputMaybe<Array<Scalars['ServiceBlocksDynamicZoneInput']>>;
  icon?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ServiceRelationResponseCollection = {
  __typename?: 'ServiceRelationResponseCollection';
  data: Array<ServiceEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type InitialDataQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type InitialDataQuery = { __typename?: 'Query', navbar?: { __typename?: 'NavbarEntityResponse', data?: { __typename?: 'NavbarEntity', attributes?: { __typename?: 'Navbar', navLinks: Array<{ __typename: 'ComponentMenuDropdown', id: string, label: string, Link: Array<{ __typename?: 'ComponentMenuLink', id: string, title: string, page?: { __typename?: 'PageEntityResponse', data?: { __typename?: 'PageEntity', attributes?: { __typename?: 'Page', slug: string } | null } | null } | null } | null> } | { __typename: 'ComponentMenuLink', id: string, title: string, page?: { __typename?: 'PageEntityResponse', data?: { __typename?: 'PageEntity', attributes?: { __typename?: 'Page', slug: string } | null } | null } | null } | { __typename: 'Error' } | null> } | null } | null } | null, contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', email: string, workTime?: string | null, phoneNumbers: Array<{ __typename?: 'ComponentContactsPhoneNumbers', id: string, phone: string } | null>, address?: { __typename?: 'ComponentContactsAddress', address: string, googleMapLink: string } | null, socialNetworks: Array<{ __typename?: 'ComponentContactsSocialNetworks', id: string, link: string, icon: Enum_Componentcontactssocialnetworks_Icon } | null> } | null } | null } | null, global?: { __typename?: 'GlobalEntityResponse', data?: { __typename?: 'GlobalEntity', attributes?: { __typename?: 'Global', googleAnalyticsTag: string, lightLogo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null }, darkLogo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } } | null } | null } | null, services?: { __typename?: 'ServiceEntityResponseCollection', data: Array<{ __typename?: 'ServiceEntity', id?: string | null, attributes?: { __typename?: 'Service', title: string } | null }> } | null };

export type PageQueryVariables = Exact<{
  slug: Scalars['String'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type PageQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', blocks?: Array<{ __typename: 'ComponentBlocksAccordion', title?: { __typename?: 'ComponentTitleTitle', title: string, description?: string | null, align?: Enum_Componenttitletitle_Align | null } | null, accordion: Array<{ __typename?: 'ComponentAccordionFaq', id: string, title: string, content: string } | null> } | { __typename: 'ComponentBlocksContacts' } | { __typename: 'ComponentBlocksDoubleSection', leftSection: string, rightSection: string, title?: { __typename?: 'ComponentTitleTitle', title: string, description?: string | null, align?: Enum_Componenttitletitle_Align | null } | null } | { __typename: 'ComponentBlocksHeading', headingTitle: string, headingDescription?: string | null, contactButton?: boolean | null, background: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | { __typename: 'ComponentBlocksHomeHero', heroTitle: string, heroDescription: string, dimensions?: { __typename?: 'ComponentDimensionsDimensions', height: string, length: string, width: string } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | { __typename: 'ComponentBlocksImagesGallery', title?: { __typename?: 'ComponentTitleTitle', title: string, description?: string | null, align?: Enum_Componenttitletitle_Align | null } | null, images: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> } } | { __typename: 'ComponentBlocksPrices', title?: { __typename?: 'ComponentTitleTitle', title: string, align?: Enum_Componenttitletitle_Align | null, description?: string | null } | null } | { __typename: 'ComponentBlocksSection', content: string, title?: { __typename?: 'ComponentTitleTitle', title: string, description?: string | null, align?: Enum_Componenttitletitle_Align | null } | null } | { __typename: 'ComponentBlocksServices', title?: { __typename?: 'ComponentTitleTitle', title: string, description?: string | null, align?: Enum_Componenttitletitle_Align | null } | null } | { __typename: 'Error' } | null> | null } | null }> } | null };

export type ServiceQueryVariables = Exact<{
  slug: Scalars['String'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type ServiceQuery = { __typename?: 'Query', services?: { __typename?: 'ServiceEntityResponseCollection', data: Array<{ __typename?: 'ServiceEntity', id?: string | null, attributes?: { __typename?: 'Service', blocks?: Array<{ __typename: 'ComponentBlocksAccordion' } | { __typename: 'ComponentBlocksHeading', id: string, headingTitle: string, headingDescription?: string | null, contactButton?: boolean | null, background: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | { __typename: 'ComponentBlocksImagesGallery' } | { __typename: 'ComponentBlocksSection', content: string, title?: { __typename?: 'ComponentTitleTitle', title: string, align?: Enum_Componenttitletitle_Align | null } | null } | { __typename: 'ComponentBlocksServices' } | { __typename: 'Error' } | null> | null } | null }> } | null };

export type ServicesQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type ServicesQuery = { __typename?: 'Query', services?: { __typename?: 'ServiceEntityResponseCollection', data: Array<{ __typename?: 'ServiceEntity', id?: string | null, attributes?: { __typename?: 'Service', title: string, slug: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null };


export const InitialDataDocument = gql`
    query InitialData($locale: I18NLocaleCode) {
  navbar(locale: $locale) {
    data {
      attributes {
        navLinks {
          __typename
          ... on ComponentMenuLink {
            id
            title
            page {
              data {
                attributes {
                  slug
                }
              }
            }
          }
          ... on ComponentMenuDropdown {
            id
            label
            Link {
              id
              title
              page {
                data {
                  attributes {
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  contact {
    data {
      attributes {
        email
        phoneNumbers {
          id
          phone
        }
        address {
          address
          googleMapLink
        }
        workTime
        socialNetworks {
          id
          link
          icon
        }
      }
    }
  }
  global {
    data {
      attributes {
        lightLogo {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
        darkLogo {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
        googleAnalyticsTag
      }
    }
  }
  services {
    data {
      id
      attributes {
        title
      }
    }
  }
}
    `;

/**
 * __useInitialDataQuery__
 *
 * To run a query within a React component, call `useInitialDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useInitialDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInitialDataQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useInitialDataQuery(baseOptions?: Apollo.QueryHookOptions<InitialDataQuery, InitialDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InitialDataQuery, InitialDataQueryVariables>(InitialDataDocument, options);
      }
export function useInitialDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InitialDataQuery, InitialDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InitialDataQuery, InitialDataQueryVariables>(InitialDataDocument, options);
        }
export type InitialDataQueryHookResult = ReturnType<typeof useInitialDataQuery>;
export type InitialDataLazyQueryHookResult = ReturnType<typeof useInitialDataLazyQuery>;
export type InitialDataQueryResult = Apollo.QueryResult<InitialDataQuery, InitialDataQueryVariables>;
export const PageDocument = gql`
    query Page($slug: String!, $locale: I18NLocaleCode) {
  pages(filters: {slug: {eq: $slug}}, locale: $locale) {
    data {
      attributes {
        blocks {
          __typename
          ... on ComponentBlocksHomeHero {
            heroTitle
            heroDescription
            dimensions {
              height
              length
              width
            }
            image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          ... on ComponentBlocksHeading {
            headingTitle
            headingDescription
            background {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            contactButton
          }
          ... on ComponentBlocksServices {
            title {
              title
              description
              align
            }
          }
          ... on ComponentBlocksSection {
            title {
              title
              description
              align
            }
            content
          }
          ... on ComponentBlocksImagesGallery {
            title {
              title
              description
              align
            }
            images {
              data {
                id
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          ... on ComponentBlocksAccordion {
            title {
              title
              description
              align
            }
            accordion {
              id
              title
              content
            }
          }
          ... on ComponentBlocksDoubleSection {
            title {
              title
              description
              align
            }
            leftSection
            rightSection
          }
          ... on ComponentBlocksPrices {
            title {
              title
              align
              description
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __usePageQuery__
 *
 * To run a query within a React component, call `usePageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function usePageQuery(baseOptions: Apollo.QueryHookOptions<PageQuery, PageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageQuery, PageQueryVariables>(PageDocument, options);
      }
export function usePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageQuery, PageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageQuery, PageQueryVariables>(PageDocument, options);
        }
export type PageQueryHookResult = ReturnType<typeof usePageQuery>;
export type PageLazyQueryHookResult = ReturnType<typeof usePageLazyQuery>;
export type PageQueryResult = Apollo.QueryResult<PageQuery, PageQueryVariables>;
export const ServiceDocument = gql`
    query Service($slug: String!, $locale: I18NLocaleCode) {
  services(filters: {slug: {eq: $slug}}, locale: $locale) {
    data {
      id
      attributes {
        blocks {
          __typename
          ... on ComponentBlocksHeading {
            id
            headingTitle
            headingDescription
            background {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            contactButton
          }
          ... on ComponentBlocksSection {
            title {
              title
              align
            }
            content
          }
        }
      }
    }
  }
}
    `;

/**
 * __useServiceQuery__
 *
 * To run a query within a React component, call `useServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useServiceQuery(baseOptions: Apollo.QueryHookOptions<ServiceQuery, ServiceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServiceQuery, ServiceQueryVariables>(ServiceDocument, options);
      }
export function useServiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServiceQuery, ServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServiceQuery, ServiceQueryVariables>(ServiceDocument, options);
        }
export type ServiceQueryHookResult = ReturnType<typeof useServiceQuery>;
export type ServiceLazyQueryHookResult = ReturnType<typeof useServiceLazyQuery>;
export type ServiceQueryResult = Apollo.QueryResult<ServiceQuery, ServiceQueryVariables>;
export const ServicesDocument = gql`
    query Services($locale: I18NLocaleCode) {
  services(locale: $locale) {
    data {
      id
      attributes {
        title
        slug
        icon {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useServicesQuery__
 *
 * To run a query within a React component, call `useServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServicesQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useServicesQuery(baseOptions?: Apollo.QueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, options);
      }
export function useServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, options);
        }
export type ServicesQueryHookResult = ReturnType<typeof useServicesQuery>;
export type ServicesLazyQueryHookResult = ReturnType<typeof useServicesLazyQuery>;
export type ServicesQueryResult = Apollo.QueryResult<ServicesQuery, ServicesQueryVariables>;
declare class ClientConfiguration {
}
declare class ClientBase {
    constructor(configuration: ClientConfiguration);
    getBaseUrl(input: string, baseUrl?: string): string;
}
declare class AuthenticationTokenResponse {
    token?: string | undefined;
    constructor(data?: AuthenticationTokenResponse);
    init(_data?: any): void;
    static fromJS(data: any): AuthenticationTokenResponse;
    toJSON(data?: any): any;
}
declare class AddressViewModel {
    company?: string | undefined;
    name?: string | undefined;
    address?: string | undefined;
    address2?: string | undefined;
    zip?: string | undefined;
    city?: string | undefined;
    countryCode?: string | undefined;
    state?: string | undefined;
    phone?: string | undefined;
    mobile?: string | undefined;
    email?: string | undefined;
    isDefault?: boolean;
    constructor(data?: AddressViewModel);
    init(_data?: any): void;
    static fromJS(data: any): AddressViewModel;
    toJSON(data?: any): any;
}
declare abstract class ViewModelBase {
    constructor(data?: ViewModelBase);
    init(_data?: any): void;
    static fromJS(data: any): ViewModelBase;
    toJSON(data?: any): any;
}
declare abstract class FillableViewModelBase extends ViewModelBase {
    constructor(data?: FillableViewModelBase);
    init(_data?: any): void;
    static fromJS(data: any): FillableViewModelBase;
    toJSON(data?: any): any;
}
declare class GeoLocation {
    lat?: number;
    lng?: number;
    constructor(data?: GeoLocation);
    init(_data?: any): void;
    static fromJS(data: any): GeoLocation;
    toJSON(data?: any): any;
}
declare class Anonymous {
    dataType?: Types;
    defaultValue?: any | undefined;
    constructor(data?: Anonymous);
    init(_data?: any): void;
    static fromJS(data: any): Anonymous;
    toJSON(data?: any): any;
}
enum Types {
    Text = "Text",
    LongText = "LongText",
    RichEditor = "RichEditor",
    Number = "Number",
    Date = "Date",
    DateTime = "DateTime",
    File = "File",
    PageLink = "PageLink",
    Boolean = "Boolean",
    DropDown = "DropDown",
    RadioButtonGroup = "RadioButtonGroup",
    Integer = "Integer"
}
declare class CustomFieldOptions extends Anonymous {
    constructor(data?: CustomFieldOptions);
    init(_data?: any): void;
    static fromJS(data: any): CustomFieldOptions;
    toJSON(data?: any): any;
}
declare class CustomFieldValueViewModel extends ViewModelBase {
    systemName?: string | undefined;
    tableName?: string | undefined;
    fieldType?: Types;
    name?: string | undefined;
    options?: CustomFieldOptions | undefined;
    sort?: number;
    value?: any | undefined;
    constructor(data?: CustomFieldValueViewModel);
    init(_data?: any): void;
    static fromJS(data: any): CustomFieldValueViewModel;
    toJSON(data?: any): any;
}
declare class UserViewModel extends ViewModelBase {
    address?: string | undefined;
    address2?: string | undefined;
    location?: GeoLocation | undefined;
    city?: string | undefined;
    company?: string | undefined;
    country?: string | undefined;
    countryCode?: string | undefined;
    currency?: string | undefined;
    shopID?: string | undefined;
    stockLocationID?: number | undefined;
    customerNumber?: string | undefined;
    department?: string | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    houseNumber?: string | undefined;
    iD?: number;
    image?: string | undefined;
    jobTitle?: string | undefined;
    lastName?: string | undefined;
    middleName?: string | undefined;
    name?: string | undefined;
    phone?: string | undefined;
    phoneBusiness?: string | undefined;
    phoneMobile?: string | undefined;
    phonePrivate?: string | undefined;
    state?: string | undefined;
    title?: string | undefined;
    userName?: string | undefined;
    zip?: string | undefined;
    externalID?: string | undefined;
    customFields?: {
        [key: string]: CustomFieldValueViewModel;
    } | undefined;
    addressCustomFields?: {
        [key: string]: CustomFieldValueViewModel;
    } | undefined;
    constructor(data?: UserViewModel);
    init(_data?: any): void;
    static fromJS(data: any): UserViewModel;
    toJSON(data?: any): any;
}
declare class UsersClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    authenticate(userName: string | null, password: string | null, shopid: string | null | undefined, expirationInSeconds: number | undefined): Promise<AuthenticationTokenResponse>;
    protected processAuthenticate(response: Response): Promise<AuthenticationTokenResponse>;
    refresh(expirationInSeconds: number | undefined): Promise<AuthenticationTokenResponse>;
    protected processRefresh(response: Response): Promise<AuthenticationTokenResponse>;
    resetpassword(newPassword: string | null): Promise<void>;
    protected processResetpassword(response: Response): Promise<void>;
    getAddresses(): Promise<AddressViewModel>;
    protected processGetAddresses(response: Response): Promise<AddressViewModel>;
    getUserInfo(): Promise<UserViewModel>;
    protected processGetUserInfo(response: Response): Promise<UserViewModel>;
    patch(userModel: UserViewModel | null): Promise<UserViewModel>;
    protected processPatch(response: Response): Promise<UserViewModel>;
    put(userModel: UserViewModel | null): Promise<UserViewModel>;
    protected processPut(response: Response): Promise<UserViewModel>;
    create(userModel: UserViewModel | null): Promise<UserViewModel>;
    protected processCreate(response: Response): Promise<UserViewModel>;
    createRecipients(recipientEmails: string[] | null): Promise<string[]>;
    protected processCreateRecipients(response: Response): Promise<string[]>;
}
export const Authentication: {
    UsersClient: typeof UsersClient;
};
declare class PageReferenceViewModel extends ViewModelBase {
    iD?: number;
    name?: string | undefined;
    constructor(data?: PageReferenceViewModel);
    init(_data?: any): void;
    static fromJS(data: any): PageReferenceViewModel;
    toJSON(data?: any): any;
}
declare class AreaLanguageViewModel extends ViewModelBase {
    culture?: string | undefined;
    firstActivePage?: PageReferenceViewModel | undefined;
    firstPage?: PageReferenceViewModel | undefined;
    iD?: number;
    isCurrent?: boolean;
    isMaster?: boolean;
    name?: string | undefined;
    primaryDomain?: string | undefined;
    constructor(data?: AreaLanguageViewModel);
    init(_data?: any): void;
    static fromJS(data: any): AreaLanguageViewModel;
    toJSON(data?: any): any;
}
declare class ItemFieldViewModel extends ViewModelBase {
    name?: string | undefined;
    systemName?: string | undefined;
    value?: any | undefined;
    constructor(data?: ItemFieldViewModel);
    init(_data?: any): void;
    static fromJS(data: any): ItemFieldViewModel;
    toJSON(data?: any): any;
}
declare class ItemViewModel extends ViewModelBase {
    fields?: ItemFieldViewModel[] | undefined;
    id?: string | undefined;
    systemName?: string | undefined;
    pageID?: number;
    paragraphID?: number;
    link?: string | undefined;
    constructor(data?: ItemViewModel);
    init(_data?: any): void;
    static fromJS(data: any): ItemViewModel;
    toJSON(data?: any): any;
}
declare class AreaInfoViewModel extends ViewModelBase {
    iD?: number;
    name?: string | undefined;
    createdDate?: Date;
    updatedDate?: Date;
    item?: ItemViewModel | undefined;
    languages?: AreaLanguageViewModel[] | undefined;
    domains?: string[] | undefined;
    primaryDomain?: string | undefined;
    ecomCountryCode?: string | undefined;
    ecomCurrencyCode?: string | undefined;
    ecomLanguageId?: string | undefined;
    ecomPricesWithVat?: boolean;
    ecomShopId?: string | undefined;
    constructor(data?: AreaInfoViewModel);
    init(_data?: any): void;
    static fromJS(data: any): AreaInfoViewModel;
    toJSON(data?: any): any;
}
declare class AreasClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    getAll(): Promise<AreaInfoViewModel[]>;
    protected processGetAll(response: Response): Promise<AreaInfoViewModel[]>;
    getById(id: number): Promise<AreaInfoViewModel>;
    protected processGetById(response: Response): Promise<AreaInfoViewModel>;
    getByDomain(domain: string | null): Promise<AreaInfoViewModel[]>;
    protected processGetByDomain(response: Response): Promise<AreaInfoViewModel[]>;
}
enum DeviceType {
    Desktop = "Desktop",
    Mobile = "Mobile",
    Tablet = "Tablet",
    Bot = "Bot"
}
declare class GridRowDefinition {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    template?: string | undefined;
    columnCount?: number;
    itemType?: string | undefined;
    thumbnail?: string | undefined;
    constructor(data?: GridRowDefinition);
    init(_data?: any): void;
    static fromJS(data: any): GridRowDefinition;
    toJSON(data?: any): any;
}
declare class ParagraphInfoViewModel extends ViewModelBase {
    iD?: number;
    name?: string | undefined;
    createdDate?: Date;
    updatedDate?: Date;
    pageID?: number;
    globalID?: number;
    text?: string | undefined;
    item?: ItemViewModel | undefined;
    image?: string | undefined;
    imageFocalX?: number;
    imageFocalY?: number;
    imageHAlign?: string | undefined;
    imageVAlign?: string | undefined;
    imageLink?: string | undefined;
    imageAlt?: string | undefined;
    imageLinkTarget?: string | undefined;
    imageCaption?: string | undefined;
    constructor(data?: ParagraphInfoViewModel);
    init(_data?: any): void;
    static fromJS(data: any): ParagraphInfoViewModel;
    toJSON(data?: any): any;
}
declare class GridColumnViewModel extends ViewModelBase {
    columnNumber?: number;
    rowColumnCount?: number;
    paragraphId?: number;
    paragraph?: ParagraphInfoViewModel | undefined;
    constructor(data?: GridColumnViewModel);
    init(_data?: any): void;
    static fromJS(data: any): GridColumnViewModel;
    toJSON(data?: any): any;
}
declare class GridRowViewModel extends ViewModelBase {
    id?: number;
    definition?: GridRowDefinition | undefined;
    columns?: GridColumnViewModel[] | undefined;
    templatePath?: string | undefined;
    item?: ItemViewModel | undefined;
    constructor(data?: GridRowViewModel);
    init(_data?: any): void;
    static fromJS(data: any): GridRowViewModel;
    toJSON(data?: any): any;
}
declare class GridRowClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    getById(pageId: number, device: DeviceType | null | undefined): Promise<GridRowViewModel[]>;
    protected processGetById(response: Response): Promise<GridRowViewModel[]>;
    getByUrl(url: string | null, hostname: string | null | undefined): Promise<GridRowViewModel[]>;
    protected processGetByUrl(response: Response): Promise<GridRowViewModel[]>;
}
declare class NavigationTreeNodeViewModel extends ViewModelBase {
    pageId?: number;
    groupId?: string | undefined;
    name?: string | undefined;
    link?: string | undefined;
    level?: number;
    isClickable?: boolean;
    inPath?: boolean;
    isActive?: boolean;
    showInSitemap?: boolean;
    showInBreadcrumb?: boolean;
    showInMenu?: boolean;
    nodes?: NavigationTreeNodeViewModel[] | undefined;
    constructor(data?: NavigationTreeNodeViewModel);
    init(_data?: any): void;
    static fromJS(data: any): NavigationTreeNodeViewModel;
    toJSON(data?: any): any;
}
declare class NavigationTreeViewModel extends ViewModelBase {
    nodes?: NavigationTreeNodeViewModel[] | undefined;
    parameters?: {
        [key: string]: any;
    } | undefined;
    constructor(data?: NavigationTreeViewModel);
    init(_data?: any): void;
    static fromJS(data: any): NavigationTreeViewModel;
    toJSON(data?: any): any;
}
declare class NavigationsClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    getById(areaId: number, pageId: number | undefined, expandMode: ExpandMode | undefined, startLevel: number | undefined, stopLevel: number | undefined, includeFoldersAndHidden: boolean | undefined, rootAreaId: number | undefined, rootPageId: number | undefined, rootNavigationTag: string | null | undefined, parameters: {
        [key: string]: any;
    } | null | undefined): Promise<NavigationTreeViewModel>;
    protected processGetById(response: Response): Promise<NavigationTreeViewModel>;
}
enum ExpandMode {
    None = "None",
    All = "All",
    Path = "Path",
    PathOnly = "PathOnly"
}
declare class PageLanguageViewModel extends ViewModelBase {
    iD?: number;
    name?: string | undefined;
    culture?: string | undefined;
    primaryDomain?: string | undefined;
    isCurrent?: boolean;
    isMaster?: boolean;
    page?: PageReferenceViewModel | undefined;
    pageIsHidden?: boolean;
    pageIsPublished?: boolean;
    firstPage?: PageReferenceViewModel | undefined;
    firstActivePage?: PageReferenceViewModel | undefined;
    constructor(data?: PageLanguageViewModel);
    init(_data?: any): void;
    static fromJS(data: any): PageLanguageViewModel;
    toJSON(data?: any): any;
}
declare class PageInfoViewModel extends ViewModelBase {
    iD?: number;
    name?: string | undefined;
    createdDate?: Date;
    updatedDate?: Date;
    title?: string | undefined;
    description?: string | undefined;
    keywords?: string | undefined;
    areaID?: number;
    path?: PageReferenceViewModel[] | undefined;
    languages?: PageLanguageViewModel[] | undefined;
    item?: ItemViewModel | undefined;
    propertyItem?: ItemViewModel | undefined;
    constructor(data?: PageInfoViewModel);
    init(_data?: any): void;
    static fromJS(data: any): PageInfoViewModel;
    toJSON(data?: any): any;
}
declare class PagesClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    getAll(areaId: number | null | undefined, pageId: number | null | undefined, itemType: string | null | undefined): Promise<PageInfoViewModel[]>;
    protected processGetAll(response: Response): Promise<PageInfoViewModel[]>;
    getById(id: number): Promise<PageInfoViewModel>;
    protected processGetById(response: Response): Promise<PageInfoViewModel>;
    getByUrl(url: string | null, hostname: string | null | undefined): Promise<PageInfoViewModel>;
    protected processGetByUrl(response: Response): Promise<PageInfoViewModel>;
}
declare class AreaViewModel extends ViewModelBase {
    cartPage?: PageReferenceViewModel | undefined;
    createdDate?: Date;
    dateFormat?: string | undefined;
    firstActivePage?: PageReferenceViewModel | undefined;
    firstPage?: PageReferenceViewModel | undefined;
    iD?: number;
    item?: ItemViewModel | undefined;
    itemId?: string | undefined;
    itemType?: string | undefined;
    languages?: AreaLanguageViewModel[] | undefined;
    name?: string | undefined;
    searchPage?: PageReferenceViewModel | undefined;
    updatedDate?: Date;
    constructor(data?: AreaViewModel);
    init(_data?: any): void;
    static fromJS(data: any): AreaViewModel;
    toJSON(data?: any): any;
}
enum LogOnFailedReason {
    Undefined = "Undefined",
    IncorrectLogin = "IncorrectLogin",
    PasswordLengthInvalid = "PasswordLengthInvalid",
    PasswordExpired = "PasswordExpired",
    ExceededFailedLogOnLimit = "ExceededFailedLogOnLimit",
    LoginLocked = "LoginLocked"
}
declare class PriceInfo {
    value?: number;
    formatted?: string | undefined;
    formattedNoSymbol?: string | undefined;
    constructor(data?: PriceInfo);
    init(_data?: any): void;
    static fromJS(data: any): PriceInfo;
    toJSON(data?: any): any;
}
declare class VatInfo {
    percent?: number;
    percentFormatted?: string | undefined;
    constructor(data?: VatInfo);
    init(_data?: any): void;
    static fromJS(data: any): VatInfo;
    toJSON(data?: any): any;
}
declare class CurrencyInfo {
    symbol?: string | undefined;
    name?: string | undefined;
    rate?: number;
    constructor(data?: CurrencyInfo);
    init(_data?: any): void;
    static fromJS(data: any): CurrencyInfo;
    toJSON(data?: any): any;
}
declare class PriceViewModel2 {
    price?: PriceInfo | undefined;
    priceWithVat?: PriceInfo | undefined;
    priceWithoutVat?: PriceInfo | undefined;
    vat?: PriceInfo | undefined;
    vatPercent?: VatInfo | undefined;
    currency?: CurrencyInfo | undefined;
    constructor(data?: PriceViewModel2);
    init(_data?: any): void;
    static fromJS(data: any): PriceViewModel2;
    toJSON(data?: any): any;
}
declare class CartViewModel extends ViewModelBase {
    iD?: string | undefined;
    productsCount?: number;
    totalProductsCount?: number;
    orderlinesCount?: number;
    cartOrderlines?: CartOrderlineViewModel[] | undefined;
    totalPrice?: PriceViewModel2 | undefined;
    totalDiscount?: PriceViewModel2 | undefined;
    totalPriceWithoutDiscounts?: PriceViewModel2 | undefined;
    totalPriceWithoutFees?: PriceViewModel2 | undefined;
    paymentMethod?: string | undefined;
    paymentFee?: PriceViewModel2 | undefined;
    shippingMethod?: string | undefined;
    shippingFee?: PriceViewModel2 | undefined;
    isEmpty?: boolean;
    constructor(data?: CartViewModel);
    init(_data?: any): void;
    static fromJS(data: any): CartViewModel;
    toJSON(data?: any): any;
}
declare class CartOrderlineViewModel extends ViewModelBase {
    productID?: string | undefined;
    productNumber?: string | undefined;
    productName?: string | undefined;
    productGroupID?: string | undefined;
    isProduct?: boolean;
    isDiscount?: boolean;
    isTax?: boolean;
    quantity?: number;
    productVariantID?: string | undefined;
    productVariantText?: string | undefined;
    productLink?: string | undefined;
    productImage?: string | undefined;
    unitPrice?: PriceViewModel2 | undefined;
    unitPriceBeforeDiscount?: PriceViewModel2 | undefined;
    totalPrice?: PriceViewModel2 | undefined;
    totalDiscount?: PriceViewModel2 | undefined;
    unitId?: string | undefined;
    unitName?: string | undefined;
    pointsTotal?: number;
    pointPrice?: number;
    iD?: string | undefined;
    constructor(data?: CartOrderlineViewModel);
    init(_data?: any): void;
    static fromJS(data: any): CartOrderlineViewModel;
    toJSON(data?: any): any;
}
declare class PageViewModel extends ViewModelBase {
    area?: AreaViewModel | undefined;
    createdDate?: Date;
    currentSecondaryUser?: UserViewModel | undefined;
    currentUser?: UserViewModel | undefined;
    isCurrentUserAllowed?: boolean;
    cart?: CartViewModel | undefined;
    content?: {
        [key: string]: string;
    } | undefined;
    gridContent?: {
        [key: string]: string;
    } | undefined;
    description?: string | undefined;
    iD?: number;
    item?: ItemViewModel | undefined;
    itemId?: string | undefined;
    itemType?: string | undefined;
    keywords?: string | undefined;
    metaTags?: string | undefined;
    languages?: PageLanguageViewModel[] | undefined;
    name?: string | undefined;
    path?: PageReferenceViewModel[] | undefined;
    propertyItem?: ItemViewModel | undefined;
    propertyItemId?: string | undefined;
    propertyItemType?: string | undefined;
    showUpdatedDate?: boolean;
    title?: string | undefined;
    topPage?: PageReferenceViewModel | undefined;
    updatedDate?: Date;
    secondaryUsers?: UserViewModel[] | undefined;
    hasSecondaryUsers?: boolean;
    logOnFailed?: boolean;
    logOnFailedReason?: LogOnFailedReason;
    constructor(data?: PageViewModel);
    init(_data?: any): void;
    static fromJS(data: any): PageViewModel;
    toJSON(data?: any): any;
}
declare class PageViewsClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    getById(id: number): Promise<PageViewModel>;
    protected processGetById(response: Response): Promise<PageViewModel>;
    getByUrl(url: string | null, hostname: string | null | undefined): Promise<PageViewModel>;
    protected processGetByUrl(response: Response): Promise<PageViewModel>;
}
declare class ParagraphsClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    getAll(areaId: number | null | undefined, pageId: number | null | undefined, itemType: string | null | undefined): Promise<ParagraphInfoViewModel[]>;
    protected processGetAll(response: Response): Promise<ParagraphInfoViewModel[]>;
    getById(id: number): Promise<ParagraphInfoViewModel>;
    protected processGetById(response: Response): Promise<ParagraphInfoViewModel>;
    getByUrl(url: string | null, hostname: string | null | undefined): Promise<ParagraphInfoViewModel[]>;
    protected processGetByUrl(response: Response): Promise<ParagraphInfoViewModel[]>;
}
declare class Key {
    name?: string | undefined;
    scope?: KeyScope;
    defaultValue?: string | undefined;
    translations?: TranslationEntryCollection | undefined;
    tagDefinitions?: string[] | undefined;
    constructor(data?: Key);
    init(_data?: any): void;
    static fromJS(data: any): Key;
    toJSON(data?: any): any;
}
enum KeyScope {
    DesignsShared = "DesignsShared",
    DesignsLocal = "DesignsLocal",
    Global = "Global",
    Local = "Local",
    Backend = "Backend"
}
declare class TranslationEntryCollection {
    [key: string]: TranslationEntry | any;
    constructor(data?: TranslationEntryCollection);
    init(_data?: any): void;
    static fromJS(data: any): TranslationEntryCollection;
    toJSON(data?: any): any;
}
declare class TranslationEntry {
    cultureName?: string | undefined;
    value?: string | undefined;
    constructor(data?: TranslationEntry);
    init(_data?: any): void;
    static fromJS(data: any): TranslationEntry;
    toJSON(data?: any): any;
}
declare class Translation {
    key?: string | undefined;
    defaultValue?: string | undefined;
    value?: string | undefined;
    constructor(data?: Translation);
    init(_data?: any): void;
    static fromJS(data: any): Translation;
    toJSON(data?: any): any;
}
declare class TranslationsClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    getAll(areaid: number): Promise<{
        [key: string]: Key;
    }>;
    protected processGetAll(response: Response): Promise<{
        [key: string]: Key;
    }>;
    getAll2(designname: string | null): Promise<{
        [key: string]: Key;
    }>;
    protected processGetAll2(response: Response): Promise<{
        [key: string]: Key;
    }>;
    getAllAll(designname: string | null, culture: string | null): Promise<Translation[]>;
    protected processGetAllAll(response: Response): Promise<Translation[]>;
}
export const Content: {
    AreasClient: typeof AreasClient;
    GridRowClient: typeof GridRowClient;
    NavigationsClient: typeof NavigationsClient;
    PagesClient: typeof PagesClient;
    PageViewsClient: typeof PageViewsClient;
    ParagraphsClient: typeof ParagraphsClient;
    TranslationsClient: typeof TranslationsClient;
};
declare class FieldValueViewModel extends FillableViewModelBase {
    systemName?: string | undefined;
    name?: string | undefined;
    type?: string | undefined;
    value?: any | undefined;
    listType?: number;
    constructor(data?: FieldValueViewModel);
    init(_data?: any): void;
    static fromJS(data: any): FieldValueViewModel;
    toJSON(data?: any): any;
}
declare class GroupInfoViewModel extends FillableViewModelBase {
    id?: string | undefined;
    name?: string | undefined;
    sorting?: number | undefined;
    primaryPageId?: number;
    constructor(data?: GroupInfoViewModel);
    init(_data?: any): void;
    static fromJS(data: any): GroupInfoViewModel;
    toJSON(data?: any): any;
}
declare class PaymentViewModel extends ViewModelBase {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    icon?: string | undefined;
    code?: string | undefined;
    termsCode?: string | undefined;
    termsDescription?: string | undefined;
    constructor(data?: PaymentViewModel);
    init(_data?: any): void;
    static fromJS(data: any): PaymentViewModel;
    toJSON(data?: any): any;
}
declare class PriceViewModel extends FillableViewModelBase {
    showPricesWithVat?: boolean;
    price?: number;
    priceFormatted?: string | undefined;
    priceWithoutVat?: number;
    priceWithoutVatFormatted?: string | undefined;
    priceWithVat?: number;
    priceWithVatFormatted?: string | undefined;
    vat?: number;
    vatFormatted?: string | undefined;
    vATPercent?: number;
    vATPercentFormatted?: string | undefined;
    currencyCode?: string | undefined;
    constructor(data?: PriceViewModel);
    init(_data?: any): void;
    static fromJS(data: any): PriceViewModel;
    toJSON(data?: any): any;
}
declare class ShippingViewModel extends ViewModelBase {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    icon?: string | undefined;
    priceOverMaxWeight?: number;
    freeFeeAmount?: number;
    code?: string | undefined;
    agentCode?: string | undefined;
    agentName?: string | undefined;
    agentServiceCode?: string | undefined;
    agentServiceDescription?: string | undefined;
    constructor(data?: ShippingViewModel);
    init(_data?: any): void;
    static fromJS(data: any): ShippingViewModel;
    toJSON(data?: any): any;
}
declare class OrderViewModel extends FillableViewModelBase {
    id?: string | undefined;
    parentOrderId?: string | undefined;
    secondaryUserId?: number;
    secondaryUserName?: string | undefined;
    secret?: string | undefined;
    shopId?: string | undefined;
    displayName?: string | undefined;
    voucherCode?: string | undefined;
    weight?: number;
    volume?: number;
    createdAt?: Date;
    modified?: Date;
    completedDate?: Date | undefined;
    completed?: boolean | undefined;
    ledgerType?: string | undefined;
    stateId?: string | undefined;
    stateName?: string | undefined;
    stateDescription?: string | undefined;
    integrationOrderId?: string | undefined;
    recurringOrderId?: number | undefined;
    customerUserId?: number;
    customerNumber?: string | undefined;
    customerEan?: string | undefined;
    customerRefId?: string | undefined;
    customerCompany?: string | undefined;
    customerTitle?: string | undefined;
    customerName?: string | undefined;
    customerFirstName?: string | undefined;
    customerSurname?: string | undefined;
    customerMiddleName?: string | undefined;
    customerHouseNumber?: string | undefined;
    customerInitials?: string | undefined;
    customerPrefix?: string | undefined;
    customerAddress?: string | undefined;
    customerAddress2?: string | undefined;
    customerAddressId?: number;
    customerZip?: string | undefined;
    customerCity?: string | undefined;
    customerCountry?: string | undefined;
    customerCountryCode?: string | undefined;
    customerRegion?: string | undefined;
    customerPhone?: string | undefined;
    customerEmail?: string | undefined;
    customerCell?: string | undefined;
    customerAccepted?: boolean | undefined;
    customerComment?: string | undefined;
    deliveryCompany?: string | undefined;
    deliveryName?: string | undefined;
    deliveryFirstName?: string | undefined;
    deliverySurname?: string | undefined;
    deliveryMiddleName?: string | undefined;
    deliveryTitle?: string | undefined;
    deliveryHouseNumber?: string | undefined;
    deliveryInitials?: string | undefined;
    deliveryPrefix?: string | undefined;
    deliveryAddress?: string | undefined;
    deliveryAddress2?: string | undefined;
    deliveryAddressId?: number;
    deliveryZip?: string | undefined;
    deliveryCity?: string | undefined;
    deliveryCountry?: string | undefined;
    deliveryCountryCode?: string | undefined;
    deliveryRegion?: string | undefined;
    deliveryPhone?: string | undefined;
    deliveryEmail?: string | undefined;
    deliveryCell?: string | undefined;
    reference?: string | undefined;
    newsletterSubscribe?: boolean;
    transactionCardnumber?: string | undefined;
    transactionCardType?: string | undefined;
    transactionNumber?: string | undefined;
    transactionStatus?: string | undefined;
    shippingDate?: Date | undefined;
    trackAndTraceName?: string | undefined;
    trackAndTraceURL?: string | undefined;
    trackAndTraceNumber?: string | undefined;
    orderLines?: OrderLineViewModel[] | undefined;
    orderFields?: {
        [key: string]: FieldValueViewModel;
    } | undefined;
    totalDiscount?: PriceViewModel | undefined;
    totalProductDiscount?: PriceViewModel | undefined;
    totalOrderDiscount?: PriceViewModel | undefined;
    price?: PriceViewModel | undefined;
    priceBeforeFees?: PriceViewModel | undefined;
    totalPriceBeforeFeesAndTaxes?: PriceViewModel | undefined;
    totalTaxes?: PriceViewModel | undefined;
    shippingFee?: PriceViewModel | undefined;
    shippingMethod?: ShippingViewModel | undefined;
    paymentMethod?: PaymentViewModel | undefined;
    paymentFee?: PriceViewModel | undefined;
    constructor(data?: OrderViewModel);
    init(_data?: any): void;
    static fromJS(data: any): OrderViewModel;
    toJSON(data?: any): any;
}
declare class OrderLineViewModel extends FillableViewModelBase {
    id?: string | undefined;
    productId?: string | undefined;
    productVariantId?: string | undefined;
    productLanguageId?: string | undefined;
    productName?: string | undefined;
    productNumber?: string | undefined;
    productVariantName?: string | undefined;
    productImage?: string | undefined;
    primaryOrDefaultGroup?: GroupInfoViewModel | undefined;
    reference?: string | undefined;
    quantity?: number;
    weight?: number;
    volume?: number;
    unitId?: string | undefined;
    unitName?: string | undefined;
    stockLocationId?: number;
    orderLineType?: OrderLineType;
    orderLineFields?: {
        [key: string]: FieldValueViewModel;
    } | undefined;
    price?: PriceViewModel | undefined;
    unitPrice?: PriceViewModel | undefined;
    unitPriceBeforeDiscount?: PriceViewModel | undefined;
    totalDiscount?: PriceViewModel | undefined;
    bomOrderLines?: OrderLineViewModel[] | undefined;
    constructor(data?: OrderLineViewModel);
    init(_data?: any): void;
    static fromJS(data: any): OrderLineViewModel;
    toJSON(data?: any): any;
}
enum OrderLineType {
    Product = "Product",
    Discount = "Discount",
    Fixed = "Fixed",
    ProductDiscount = "ProductDiscount",
    Tax = "Tax",
    PointProduct = "PointProduct",
    GiftCard = "GiftCard"
}
declare class UserCartsResponse {
    cartSecret?: string | undefined;
    displayName?: string | undefined;
    createdAt?: Date;
    modified?: Date;
    shopId?: string | undefined;
    id?: string | undefined;
    constructor(data?: UserCartsResponse);
    init(_data?: any): void;
    static fromJS(data: any): UserCartsResponse;
    toJSON(data?: any): any;
}
declare class CartsClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    createCart(currencyCode: string | null, countryCode: string | null, languageId: string | null, id: string | null | undefined, parentOrderId: string | null | undefined, secondaryUserId: number | undefined, secondaryUserName: string | null | undefined, secret: string | null | undefined, shopId: string | null | undefined, displayName: string | null | undefined, voucherCode: string | null | undefined, weight: number | undefined, volume: number | undefined, createdAt: Date | undefined, modified: Date | undefined, completedDate: Date | null | undefined, completed: boolean | null | undefined, ledgerType: string | null | undefined, stateId: string | null | undefined, stateName: string | null | undefined, stateDescription: string | null | undefined, integrationOrderId: string | null | undefined, recurringOrderId: number | null | undefined, customerUserId: number | undefined, customerNumber: string | null | undefined, customerEan: string | null | undefined, customerRefId: string | null | undefined, customerCompany: string | null | undefined, customerTitle: string | null | undefined, customerName: string | null | undefined, customerFirstName: string | null | undefined, customerSurname: string | null | undefined, customerMiddleName: string | null | undefined, customerHouseNumber: string | null | undefined, customerInitials: string | null | undefined, customerPrefix: string | null | undefined, customerAddress: string | null | undefined, customerAddress2: string | null | undefined, customerAddressId: number | undefined, customerZip: string | null | undefined, customerCity: string | null | undefined, customerCountry: string | null | undefined, customerCountryCode: string | null | undefined, customerRegion: string | null | undefined, customerPhone: string | null | undefined, customerEmail: string | null | undefined, customerCell: string | null | undefined, customerAccepted: boolean | null | undefined, customerComment: string | null | undefined, deliveryCompany: string | null | undefined, deliveryName: string | null | undefined, deliveryFirstName: string | null | undefined, deliverySurname: string | null | undefined, deliveryMiddleName: string | null | undefined, deliveryTitle: string | null | undefined, deliveryHouseNumber: string | null | undefined, deliveryInitials: string | null | undefined, deliveryPrefix: string | null | undefined, deliveryAddress: string | null | undefined, deliveryAddress2: string | null | undefined, deliveryAddressId: number | undefined, deliveryZip: string | null | undefined, deliveryCity: string | null | undefined, deliveryCountry: string | null | undefined, deliveryCountryCode: string | null | undefined, deliveryRegion: string | null | undefined, deliveryPhone: string | null | undefined, deliveryEmail: string | null | undefined, deliveryCell: string | null | undefined, reference: string | null | undefined, newsletterSubscribe: boolean | undefined, transactionCardnumber: string | null | undefined, transactionCardType: string | null | undefined, transactionNumber: string | null | undefined, transactionStatus: string | null | undefined, shippingDate: Date | null | undefined, trackAndTraceName: string | null | undefined, trackAndTraceURL: string | null | undefined, trackAndTraceNumber: string | null | undefined, orderLines: OrderLineViewModel[] | null | undefined, orderFields: {
        [key: string]: FieldValueViewModel;
    } | null | undefined, totalDiscount: PriceViewModel | null | undefined, totalProductDiscount: PriceViewModel | null | undefined, totalOrderDiscount: PriceViewModel | null | undefined, price: PriceViewModel | null | undefined, priceBeforeFees: PriceViewModel | null | undefined, totalPriceBeforeFeesAndTaxes: PriceViewModel | null | undefined, totalTaxes: PriceViewModel | null | undefined, shippingFee: PriceViewModel | null | undefined, shippingMethod: ShippingViewModel | null | undefined, paymentMethod: PaymentViewModel | null | undefined, paymentFee: PriceViewModel | null | undefined): Promise<OrderViewModel>;
    protected processCreateCart(response: Response): Promise<OrderViewModel>;
    getCarts(pageSize: number | undefined, currentPage: number | undefined): Promise<UserCartsResponse[]>;
    protected processGetCarts(response: Response): Promise<UserCartsResponse[]>;
    getCart(secret: string | null): Promise<OrderViewModel>;
    protected processGetCart(response: Response): Promise<OrderViewModel>;
    updateCart(secret: string | null, cartModel: OrderViewModel | null): Promise<OrderViewModel>;
    protected processUpdateCart(response: Response): Promise<OrderViewModel>;
    deleteCart(secret: string | null): Promise<void>;
    protected processDeleteCart(response: Response): Promise<void>;
    updateShipping(secret: string | null, shippingId: string | null): Promise<OrderViewModel>;
    protected processUpdateShipping(response: Response): Promise<OrderViewModel>;
    updatePayment(secret: string | null, paymentId: string | null): Promise<OrderViewModel>;
    protected processUpdatePayment(response: Response): Promise<OrderViewModel>;
    addLineToCart(secret: string | null, cartItem: OrderLineViewModel | null): Promise<void>;
    protected processAddLineToCart(response: Response): Promise<void>;
    emptyCart(secret: string | null): Promise<void>;
    protected processEmptyCart(response: Response): Promise<void>;
    removeLineFromCart(secret: string | null, itemId: string | null): Promise<void>;
    protected processRemoveLineFromCart(response: Response): Promise<void>;
    updateCartLine(secret: string | null, itemId: string | null, cartItem: OrderLineViewModel | null): Promise<void>;
    protected processUpdateCartLine(response: Response): Promise<void>;
    createOrder(secret: string | null, cartModel: OrderViewModel | null): Promise<void>;
    protected processCreateOrder(response: Response): Promise<void>;
}
interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: {
        [name: string]: any;
    };
}
declare class FeedClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    verifyConnection(): Promise<boolean>;
    protected processVerifyConnection(response: Response): Promise<boolean>;
    getFeedOutput(id: number, languageId: string | null | undefined, currencyId: string | null | undefined, shopId: string | null | undefined, userId: string | null | undefined, loadVariantInfoOnVariants: boolean | undefined): Promise<FileResponse>;
    protected processGetFeedOutput(response: Response): Promise<FileResponse>;
}
declare abstract class ViewSettingsBase<T> {
    filledProperties?: string[] | undefined;
    constructor(data?: T);
    init(_data?: any): void;
    toJSON(data?: any): any;
}
declare class MediaViewModelSettings extends ViewSettingsBase<MediaViewModelSettings> {
    constructor(data?: MediaViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): MediaViewModelSettings;
    toJSON(data?: any): any;
}
declare class FieldValueViewModelSetting extends ViewSettingsBase<FieldValueViewModelSetting> {
    constructor(data?: FieldValueViewModelSetting);
    init(_data?: any): void;
    static fromJS(data: any): FieldValueViewModelSetting;
    toJSON(data?: any): any;
}
declare class GroupsClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    getAll(parentId: string | null | undefined, shopId: string | null | undefined, mediaSettings: MediaViewModelSettings | null | undefined, fieldSettings: FieldValueViewModelSetting | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<FileResponse>;
    protected processGetAll(response: Response): Promise<FileResponse>;
    getGroup(groupId: string | null, parentId: string | null | undefined, shopId: string | null | undefined, mediaSettings: MediaViewModelSettings | null | undefined, fieldSettings: FieldValueViewModelSetting | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<FileResponse>;
    protected processGetGroup(response: Response): Promise<FileResponse>;
}
declare class CountryViewModel extends ViewModelBase {
    code2?: string | undefined;
    code3?: string | undefined;
    regionCode?: string | undefined;
    culture?: string | undefined;
    name?: string | undefined;
    vat?: number;
    constructor(data?: CountryViewModel);
    init(_data?: any): void;
    static fromJS(data: any): CountryViewModel;
    toJSON(data?: any): any;
}
declare class CurrencyViewModel extends ViewModelBase {
    symbol?: string | undefined;
    name?: string | undefined;
    rate?: number;
    code?: string | undefined;
    default?: boolean;
    constructor(data?: CurrencyViewModel);
    init(_data?: any): void;
    static fromJS(data: any): CurrencyViewModel;
    toJSON(data?: any): any;
}
declare class InternationalClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    getCountries(languageId: string | null | undefined): Promise<CountryViewModel[]>;
    protected processGetCountries(response: Response): Promise<CountryViewModel[]>;
    getCurrencies(languageId: string | null | undefined): Promise<CurrencyViewModel[]>;
    protected processGetCurrencies(response: Response): Promise<CurrencyViewModel[]>;
}
declare class ViewSettingsLanguageBase<T> extends ViewSettingsBase<T> {
    languageId?: string | undefined;
    constructor(data?: T);
    init(_data?: any): void;
    toJSON(data?: any): any;
}
declare abstract class ViewSettingsBaseCurrencyBase<T> extends ViewSettingsLanguageBase<T> {
    userId?: number;
    showPricesWithVat?: boolean;
    currencyCode?: string | undefined;
    countryCode?: string | undefined;
    shopId?: string | undefined;
    constructor(data?: T);
    init(_data?: any): void;
    toJSON(data?: any): any;
}
declare class PriceViewModelSettings extends ViewSettingsBaseCurrencyBase<PriceViewModelSettings> {
    constructor(data?: PriceViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): PriceViewModelSettings;
    toJSON(data?: any): any;
}
declare class GroupInfoViewModelSettings extends ViewSettingsBaseCurrencyBase<GroupInfoViewModelSettings> {
    constructor(data?: GroupInfoViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): GroupInfoViewModelSettings;
    toJSON(data?: any): any;
}
declare class OrderLineViewModelSettings extends ViewSettingsBaseCurrencyBase<OrderLineViewModelSettings> {
    priceSettings?: PriceViewModelSettings | undefined;
    orderLineFieldSettings?: FieldValueViewModelSetting | undefined;
    groupInfoSettings?: GroupInfoViewModelSettings | undefined;
    constructor(data?: OrderLineViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): OrderLineViewModelSettings;
    toJSON(data?: any): any;
}
declare class OrderClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    getOrders(pageSize: number | undefined, pageCount: number | undefined, currentPage: number | undefined, totalOrdersCount: number | undefined, showPricesWithVat: boolean | undefined, filledProperties: string[] | null | undefined): Promise<OrderViewModel>;
    protected processGetOrders(response: Response): Promise<OrderViewModel>;
    getOrder(secret: string | null, priceSettings: PriceViewModelSettings | null | undefined, orderFieldSettings: FieldValueViewModelSetting | null | undefined, orderLineSettings: OrderLineViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<OrderViewModel>;
    protected processGetOrder(response: Response): Promise<OrderViewModel>;
}
declare class PaymentsClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    getPayments(languageId: string | null | undefined, countryCode: string | null | undefined, regionCode: string | null | undefined): Promise<PaymentViewModel[]>;
    protected processGetPayments(response: Response): Promise<PaymentViewModel[]>;
}
enum ExportFormat {
    CSV = "CSV",
    JSON = "JSON",
    XML = "XML"
}
declare class StockUnitViewModel extends FillableViewModelBase {
    unitId?: string | undefined;
    unitName?: string | undefined;
    variantId?: string | undefined;
    stockLocationId?: number;
    stockLocationName?: string | undefined;
    stockLocationCategory?: string | undefined;
    stockLocationAddress?: AddressViewModel | undefined;
    stockLevel?: number;
    stockStatus?: string | undefined;
    weight?: number;
    volume?: number;
    description?: string | undefined;
    constructor(data?: StockUnitViewModel);
    init(_data?: any): void;
    static fromJS(data: any): StockUnitViewModel;
    toJSON(data?: any): any;
}
declare class MediaViewModel extends FillableViewModelBase {
    value?: string | undefined;
    name?: string | undefined;
    keywords?: string | undefined;
    displayName?: string | undefined;
    constructor(data?: MediaViewModel);
    init(_data?: any): void;
    static fromJS(data: any): MediaViewModel;
    toJSON(data?: any): any;
}
declare class UnitOptionViewModel extends FillableViewModelBase {
    id?: string | undefined;
    name?: string | undefined;
    image?: MediaViewModel | undefined;
    constructor(data?: UnitOptionViewModel);
    init(_data?: any): void;
    static fromJS(data: any): UnitOptionViewModel;
    toJSON(data?: any): any;
}
declare class VariantInfoViewModel extends FillableViewModelBase {
    productID?: string | undefined;
    variantID?: string | undefined;
    optionID?: string | undefined;
    optionName?: string | undefined;
    optionColor?: string | undefined;
    optionSort?: number;
    productName?: string | undefined;
    productNumber?: string | undefined;
    productStock?: number;
    variantInfoGroupId?: string | undefined;
    variantInfoGroupName?: string | undefined;
    variantInfoGroupDescription?: string | undefined;
    optionImage?: MediaViewModel | undefined;
    image?: MediaViewModel | undefined;
    price?: PriceViewModel | undefined;
    priceMin?: PriceViewModel | undefined;
    priceMax?: PriceViewModel | undefined;
    stock?: number;
    variantInfo?: VariantInfoViewModel[] | undefined;
    constructor(data?: VariantInfoViewModel);
    init(_data?: any): void;
    static fromJS(data: any): VariantInfoViewModel;
    toJSON(data?: any): any;
}
declare class ProductInfoViewModel extends FillableViewModelBase {
    productId?: string | undefined;
    variantId?: string | undefined;
    constructor(data?: ProductInfoViewModel);
    init(_data?: any): void;
    static fromJS(data: any): ProductInfoViewModel;
    toJSON(data?: any): any;
}
declare class DiscountViewModel extends FillableViewModelBase {
    name?: string | undefined;
    campaignName?: string | undefined;
    campagnDescription?: string | undefined;
    campaignColor?: string | undefined;
    amount?: number;
    percentage?: number;
    currencyCode?: string | undefined;
    voucherCode?: string | undefined;
    voucherListId?: number | undefined;
    validFrom?: Date | undefined;
    validTo?: Date | undefined;
    campaignImage?: MediaViewModel | undefined;
    constructor(data?: DiscountViewModel);
    init(_data?: any): void;
    static fromJS(data: any): DiscountViewModel;
    toJSON(data?: any): any;
}
declare class PriceListViewModel extends FillableViewModelBase {
    quantity?: number;
    price?: PriceViewModel | undefined;
    constructor(data?: PriceListViewModel);
    init(_data?: any): void;
    static fromJS(data: any): PriceListViewModel;
    toJSON(data?: any): any;
}
declare class CategoryFieldViewModel extends FillableViewModelBase {
    id?: string | undefined;
    name?: string | undefined;
    fields?: {
        [key: string]: FieldValueViewModel;
    } | undefined;
    constructor(data?: CategoryFieldViewModel);
    init(_data?: any): void;
    static fromJS(data: any): CategoryFieldViewModel;
    toJSON(data?: any): any;
}
declare class ManufacturerViewModel extends FillableViewModelBase {
    id?: string | undefined;
    name?: string | undefined;
    address?: string | undefined;
    zipCode?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
    phone?: string | undefined;
    fax?: string | undefined;
    email?: string | undefined;
    web?: string | undefined;
    logo?: string | undefined;
    description?: string | undefined;
    constructor(data?: ManufacturerViewModel);
    init(_data?: any): void;
    static fromJS(data: any): ManufacturerViewModel;
    toJSON(data?: any): any;
}
declare class AssetCategoryViewModel extends FillableViewModelBase implements AssetCategoryViewModel {
    name?: string | undefined;
    systemName?: string | undefined;
    assets?: MediaViewModel[] | undefined;
    constructor(data?: AssetCategoryViewModel);
    init(_data?: any): void;
    static fromJS(data: any): AssetCategoryViewModel;
    toJSON(data?: any): any;
}
declare class RelatedGroupViewModel extends FillableViewModelBase {
    id?: string | undefined;
    name?: string | undefined;
    products?: ProductInfoViewModel[] | undefined;
    constructor(data?: RelatedGroupViewModel);
    init(_data?: any): void;
    static fromJS(data: any): RelatedGroupViewModel;
    toJSON(data?: any): any;
}
declare class ProductViewModel extends FillableViewModelBase {
    id?: string | undefined;
    variantId?: string | undefined;
    languageId?: string | undefined;
    name?: string | undefined;
    title?: string | undefined;
    shortDescription?: string | undefined;
    longDescription?: string | undefined;
    metaDescription?: string | undefined;
    metaTitle?: string | undefined;
    metaKeywords?: string | undefined;
    number?: string | undefined;
    created?: Date | undefined;
    updated?: Date | undefined;
    keywords?: string | undefined;
    weight?: number | undefined;
    stockLevel?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    depth?: number | undefined;
    purchaseMinimumQuantity?: number | undefined;
    purchaseQuantityStep?: number | undefined;
    cost?: number | undefined;
    eAN?: string | undefined;
    expectedDelivery?: Date | undefined;
    discontinued?: boolean;
    discontinuedAction?: number;
    pointPrice?: number | undefined;
    defaultVariantId?: string | undefined;
    defaultUnitId?: string | undefined;
    variantName?: string | undefined;
    active?: boolean;
    rating?: number | undefined;
    replacementProduct?: ProductInfoViewModel | undefined;
    price?: PriceViewModel | undefined;
    priceInformative?: PriceViewModel | undefined;
    priceBeforeDiscount?: PriceViewModel | undefined;
    discount?: PriceViewModel | undefined;
    productDiscounts?: DiscountViewModel[] | undefined;
    prices?: PriceListViewModel[] | undefined;
    standardFields?: {
        [key: string]: FieldValueViewModel;
    } | undefined;
    productFields?: {
        [key: string]: FieldValueViewModel;
    } | undefined;
    productCategories?: {
        [key: string]: CategoryFieldViewModel;
    } | undefined;
    fieldDisplayGroups?: {
        [key: string]: CategoryFieldViewModel;
    } | undefined;
    groups?: GroupInfoViewModel[] | undefined;
    primaryOrDefaultGroup?: GroupInfoViewModel | undefined;
    variantInfo?: VariantInfoViewModel | undefined;
    defaultImage?: MediaViewModel | undefined;
    groupPaths?: GroupInfoViewModel[][] | undefined;
    imagePatternImages?: MediaViewModel[] | undefined;
    manufacturer?: ManufacturerViewModel | undefined;
    assetCategories?: AssetCategoryViewModel[] | undefined;
    neverOutOfstock?: boolean;
    stockUnits?: StockUnitViewModel[] | undefined;
    unitOptions?: UnitOptionViewModel[] | undefined;
    relatedGroups?: RelatedGroupViewModel[] | undefined;
    constructor(data?: ProductViewModel);
    init(_data?: any): void;
    static fromJS(data: any): ProductViewModel;
    toJSON(data?: any): any;
}
declare class ProductGroupViewModel extends GroupInfoViewModel {
    id?: string | undefined;
    name?: string | undefined;
    title?: string | undefined;
    number?: string | undefined;
    description?: string | undefined;
    categorySystemName?: string | undefined;
    categoryName?: string | undefined;
    groupFields?: FieldValueViewModel[] | undefined;
    assets?: MediaViewModel[] | undefined;
    constructor(data?: ProductGroupViewModel);
    init(_data?: any): void;
    static fromJS(data: any): ProductGroupViewModel;
    toJSON(data?: any): any;
}
declare class FacetOptionViewModel extends FillableViewModelBase {
    name?: string | undefined;
    label?: string | undefined;
    value?: string | undefined;
    sort?: number;
    selected?: boolean;
    count?: number;
    constructor(data?: FacetOptionViewModel);
    init(_data?: any): void;
    static fromJS(data: any): FacetOptionViewModel;
    toJSON(data?: any): any;
}
declare class FacetViewModel extends FillableViewModelBase {
    name?: string | undefined;
    queryParameter?: string | undefined;
    queryParameterType?: string | undefined;
    queryParameterDefaultValue?: string | undefined;
    renderType?: string | undefined;
    facetField?: string | undefined;
    facetType?: string | undefined;
    facetValue?: string | undefined;
    options?: FacetOptionViewModel[] | undefined;
    optionCount?: number;
    optionActiveCount?: number;
    optionResultTotalCount?: number;
    minimumFacetValue?: number;
    maximumFacetValue?: number;
    constructor(data?: FacetViewModel);
    init(_data?: any): void;
    static fromJS(data: any): FacetViewModel;
    toJSON(data?: any): any;
}
declare class FacetGroupViewModel extends FillableViewModelBase {
    name?: string | undefined;
    facetGroupType?: string | undefined;
    description?: string | undefined;
    facets?: FacetViewModel[] | undefined;
    constructor(data?: FacetGroupViewModel);
    init(_data?: any): void;
    static fromJS(data: any): FacetGroupViewModel;
    toJSON(data?: any): any;
}
declare class ProductListViewModel extends FillableViewModelBase {
    group?: ProductGroupViewModel | undefined;
    subGroups?: ProductGroupViewModel[] | undefined;
    products?: ProductViewModel[] | undefined;
    pageSize?: number;
    pageCount?: number;
    currentPage?: number;
    totalProductsCount?: number;
    sortBy?: string | undefined;
    sortOrder?: string | undefined;
    spellCheckerSuggestions?: string[] | undefined;
    facetGroups?: FacetGroupViewModel[] | undefined;
    constructor(data?: ProductListViewModel);
    init(_data?: any): void;
    static fromJS(data: any): ProductListViewModel;
    toJSON(data?: any): any;
}
declare class ManufacturerViewModelSettings extends ViewSettingsLanguageBase<ManufacturerViewModelSettings> {
    constructor(data?: ManufacturerViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): ManufacturerViewModelSettings;
    toJSON(data?: any): any;
}
declare class CategoryFieldViewModelSetting extends ViewSettingsBase<CategoryFieldViewModelSetting> {
    constructor(data?: CategoryFieldViewModelSetting);
    init(_data?: any): void;
    static fromJS(data: any): CategoryFieldViewModelSetting;
    toJSON(data?: any): any;
}
declare class VariantInfoViewModelSettings extends ViewSettingsBaseCurrencyBase<VariantInfoViewModelSettings> {
    priceSettings?: PriceViewModelSettings | undefined;
    mediaSettings?: MediaViewModelSettings | undefined;
    constructor(data?: VariantInfoViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): VariantInfoViewModelSettings;
    toJSON(data?: any): any;
}
declare class AssetCategoryViewModelSettings extends ViewSettingsLanguageBase<AssetCategoryViewModelSettings> {
    mediaSettings?: MediaViewModelSettings | undefined;
    constructor(data?: AssetCategoryViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): AssetCategoryViewModelSettings;
    toJSON(data?: any): any;
}
declare class StockUnitViewModelSettings extends ViewSettingsLanguageBase<StockUnitViewModelSettings> {
    constructor(data?: StockUnitViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): StockUnitViewModelSettings;
    toJSON(data?: any): any;
}
declare class UnitOptionViewModelSettings extends ViewSettingsLanguageBase<UnitOptionViewModelSettings> {
    constructor(data?: UnitOptionViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): UnitOptionViewModelSettings;
    toJSON(data?: any): any;
}
declare class ProductViewModelSettings extends ViewSettingsBaseCurrencyBase<ProductViewModelSettings> {
    loadVariantInfoOnVariants?: boolean;
    priceSettings?: PriceViewModelSettings | undefined;
    mediaSettings?: MediaViewModelSettings | undefined;
    manufacturerSettings?: ManufacturerViewModelSettings | undefined;
    categoryFieldSettings?: CategoryFieldViewModelSetting | undefined;
    productFieldSettings?: FieldValueViewModelSetting | undefined;
    variantInfoSettings?: VariantInfoViewModelSettings | undefined;
    groupInfoSettings?: GroupInfoViewModelSettings | undefined;
    assetCategorySettings?: AssetCategoryViewModelSettings | undefined;
    stockUnitSettings?: StockUnitViewModelSettings | undefined;
    unitOptionSettings?: UnitOptionViewModelSettings | undefined;
    constructor(data?: ProductViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): ProductViewModelSettings;
    toJSON(data?: any): any;
}
declare class ProductGroupViewModelSettings extends ViewSettingsBaseCurrencyBase<ProductGroupViewModelSettings> {
    mediaSettings?: MediaViewModelSettings | undefined;
    fieldSettings?: FieldValueViewModelSetting | undefined;
    constructor(data?: ProductGroupViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): ProductGroupViewModelSettings;
    toJSON(data?: any): any;
}
declare class FacetOptionViewModelSettings extends ViewSettingsBaseCurrencyBase<FacetOptionViewModelSettings> {
    constructor(data?: FacetOptionViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): FacetOptionViewModelSettings;
    toJSON(data?: any): any;
}
declare class FacetViewModelSettings extends ViewSettingsBaseCurrencyBase<FacetViewModelSettings> {
    facetOptionSettings?: FacetOptionViewModelSettings | undefined;
    constructor(data?: FacetViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): FacetViewModelSettings;
    toJSON(data?: any): any;
}
declare class FacetGroupViewModelSettings extends ViewSettingsBaseCurrencyBase<FacetGroupViewModelSettings> {
    facetSettings?: FacetViewModelSettings | undefined;
    facetGroupNames?: string[] | undefined;
    constructor(data?: FacetGroupViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): FacetGroupViewModelSettings;
    toJSON(data?: any): any;
}
declare class ProductListViewModelSettings extends ViewSettingsBaseCurrencyBase<ProductListViewModelSettings> {
    productSettings?: ProductViewModelSettings | undefined;
    groupSettings?: ProductGroupViewModelSettings | undefined;
    facetGroupSettings?: FacetGroupViewModelSettings | undefined;
    parameters?: {
        [key: string]: string;
    } | undefined;
    pageSize?: number;
    currentPage?: number;
    mediaSettings?: MediaViewModelSettings | undefined;
    constructor(data?: ProductListViewModelSettings);
    init(_data?: any): void;
    static fromJS(data: any): ProductListViewModelSettings;
    toJSON(data?: any): any;
}
declare class ProductsClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    getAll(repositoryName: string | null | undefined, queryName: string | null | undefined, groupId: string | null | undefined, productIds: string[] | null | undefined, sortBy: string | null | undefined, sortOrder: string | null | undefined, request: ProductListViewModelSettings | null): Promise<ProductListViewModel>;
    protected processGetAll(response: Response): Promise<ProductListViewModel>;
    search(repositoryName: string | null | undefined, queryName: string | null | undefined, groupId: string | null | undefined, productIds: string[] | null | undefined, sortBy: string | null | undefined, sortOrder: string | null | undefined, productSettings: ProductViewModelSettings | null | undefined, groupSettings: ProductGroupViewModelSettings | null | undefined, facetGroupSettings: FacetGroupViewModelSettings | null | undefined, parameters: {
        [key: string]: string;
    } | null | undefined, pageSize: number | undefined, currentPage: number | undefined, mediaSettings: MediaViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<ProductListViewModel>;
    protected processSearch(response: Response): Promise<ProductListViewModel>;
    getProduct(id: string | null, loadVariantInfoOnVariants: boolean | undefined, priceSettings: PriceViewModelSettings | null | undefined, mediaSettings: MediaViewModelSettings | null | undefined, manufacturerSettings: ManufacturerViewModelSettings | null | undefined, categoryFieldSettings: CategoryFieldViewModelSetting | null | undefined, productFieldSettings: FieldValueViewModelSetting | null | undefined, variantInfoSettings: VariantInfoViewModelSettings | null | undefined, groupInfoSettings: GroupInfoViewModelSettings | null | undefined, assetCategorySettings: AssetCategoryViewModelSettings | null | undefined, stockUnitSettings: StockUnitViewModelSettings | null | undefined, unitOptionSettings: UnitOptionViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<ProductViewModel>;
    protected processGetProduct(response: Response): Promise<ProductViewModel>;
    getProduct2(id: string | null, variantId: string | null, loadVariantInfoOnVariants: boolean | undefined, priceSettings: PriceViewModelSettings | null | undefined, mediaSettings: MediaViewModelSettings | null | undefined, manufacturerSettings: ManufacturerViewModelSettings | null | undefined, categoryFieldSettings: CategoryFieldViewModelSetting | null | undefined, productFieldSettings: FieldValueViewModelSetting | null | undefined, variantInfoSettings: VariantInfoViewModelSettings | null | undefined, groupInfoSettings: GroupInfoViewModelSettings | null | undefined, assetCategorySettings: AssetCategoryViewModelSettings | null | undefined, stockUnitSettings: StockUnitViewModelSettings | null | undefined, unitOptionSettings: UnitOptionViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<ProductViewModel>;
    protected processGetProduct2(response: Response): Promise<ProductViewModel>;
    related(id: string | null, productSettings: ProductViewModelSettings | null | undefined, groupSettings: ProductGroupViewModelSettings | null | undefined, facetGroupSettings: FacetGroupViewModelSettings | null | undefined, parameters: {
        [key: string]: string;
    } | null | undefined, pageSize: number | undefined, currentPage: number | undefined, mediaSettings: MediaViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<ProductListViewModel>;
    protected processRelated(response: Response): Promise<ProductListViewModel>;
    related2(id: string | null, variantId: string | null, productSettings: ProductViewModelSettings | null | undefined, groupSettings: ProductGroupViewModelSettings | null | undefined, facetGroupSettings: FacetGroupViewModelSettings | null | undefined, parameters: {
        [key: string]: string;
    } | null | undefined, pageSize: number | undefined, currentPage: number | undefined, mediaSettings: MediaViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<ProductListViewModel>;
    protected processRelated2(response: Response): Promise<ProductListViewModel>;
    exportProducts(repositoryName: string | null | undefined, queryName: string | null | undefined, groupId: string | null | undefined, productIds: string[] | null | undefined, sortBy: string | null | undefined, sortOrder: string | null | undefined, productSettings: ProductViewModelSettings | null | undefined, groupSettings: ProductGroupViewModelSettings | null | undefined, facetGroupSettings: FacetGroupViewModelSettings | null | undefined, parameters: {
        [key: string]: string;
    } | null | undefined, pageSize: number | undefined, currentPage: number | undefined, mediaSettings: MediaViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined, fileName: string | null | undefined, exportFormat: ExportFormat | undefined, senderName: string | null | undefined, senderEmail: string | null | undefined, recipientTokens: string[] | null | undefined, subject: string | null | undefined, templatePath: string | null | undefined, dpi: number | undefined, imageFormat: string | null | undefined, height: number | undefined, width: number | undefined, embedProfile: boolean | undefined, assetCategories: string[] | null | undefined): Promise<void>;
    protected processExportProducts(response: Response): Promise<void>;
}
declare class ShippingClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    findServicePoints(shippingId: string | null, languageId: string | null, countryCode: string | null | undefined, zipCode: string | null | undefined, address: string | null | undefined, numberOfServicePoints: number | undefined): Promise<FileResponse>;
    protected processFindServicePoints(response: Response): Promise<FileResponse>;
    getShippings(languageId: string | null | undefined, countryCode: string | null | undefined, regionCode: string | null | undefined): Promise<ShippingViewModel[]>;
    protected processGetShippings(response: Response): Promise<ShippingViewModel[]>;
}
declare class VariantsClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    getVariantInfo(productId: string | null, loadVariantInfoOnVariants: boolean | undefined, priceSettings: PriceViewModelSettings | null | undefined, mediaSettings: MediaViewModelSettings | null | undefined, manufacturerSettings: ManufacturerViewModelSettings | null | undefined, categoryFieldSettings: CategoryFieldViewModelSetting | null | undefined, productFieldSettings: FieldValueViewModelSetting | null | undefined, variantInfoSettings: VariantInfoViewModelSettings | null | undefined, groupInfoSettings: GroupInfoViewModelSettings | null | undefined, assetCategorySettings: AssetCategoryViewModelSettings | null | undefined, stockUnitSettings: StockUnitViewModelSettings | null | undefined, unitOptionSettings: UnitOptionViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<VariantInfoViewModel>;
    protected processGetVariantInfo(response: Response): Promise<VariantInfoViewModel>;
}
export const Ecommerce: {
    CartsClient: typeof CartsClient;
    FeedClient: typeof FeedClient;
    GroupsClient: typeof GroupsClient;
    InternationalClient: typeof InternationalClient;
    OrderClient: typeof OrderClient;
    PaymentsClient: typeof PaymentsClient;
    ProductsClient: typeof ProductsClient;
    ShippingClient: typeof ShippingClient;
    VariantsClient: typeof VariantsClient;
};

//# sourceMappingURL=index.d.ts.map

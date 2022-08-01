import { FillableViewModelBase } from "../Shared/ViewModel";
import { FieldValueViewModel } from "./FieldValueViewModel";
import { GroupInfoViewModel } from "./GroupInfoViewModel";
import { PaymentViewModel } from "./PaymentViewModel";
import { PriceViewModel } from "./PriceViewModel";
import { ShippingViewModel } from "./ShippingViewModel";

export class OrderViewModel extends FillableViewModelBase {
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
    orderFields?: { [key: string]: FieldValueViewModel; } | undefined;
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

    constructor(data?: OrderViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.parentOrderId = _data["ParentOrderId"];
            this.secondaryUserId = _data["SecondaryUserId"];
            this.secondaryUserName = _data["SecondaryUserName"];
            this.secret = _data["Secret"];
            this.shopId = _data["ShopId"];
            this.displayName = _data["DisplayName"];
            this.voucherCode = _data["VoucherCode"];
            this.weight = _data["Weight"];
            this.volume = _data["Volume"];
            this.createdAt = _data["CreatedAt"] ? new Date(_data["CreatedAt"].toString()) : <any>undefined;
            this.modified = _data["Modified"] ? new Date(_data["Modified"].toString()) : <any>undefined;
            this.completedDate = _data["CompletedDate"] ? new Date(_data["CompletedDate"].toString()) : <any>undefined;
            this.completed = _data["Completed"];
            this.ledgerType = _data["LedgerType"];
            this.stateId = _data["StateId"];
            this.stateName = _data["StateName"];
            this.stateDescription = _data["StateDescription"];
            this.integrationOrderId = _data["IntegrationOrderId"];
            this.recurringOrderId = _data["RecurringOrderId"];
            this.customerUserId = _data["CustomerUserId"];
            this.customerNumber = _data["CustomerNumber"];
            this.customerEan = _data["CustomerEan"];
            this.customerRefId = _data["CustomerRefId"];
            this.customerCompany = _data["CustomerCompany"];
            this.customerTitle = _data["CustomerTitle"];
            this.customerName = _data["CustomerName"];
            this.customerFirstName = _data["CustomerFirstName"];
            this.customerSurname = _data["CustomerSurname"];
            this.customerMiddleName = _data["CustomerMiddleName"];
            this.customerHouseNumber = _data["CustomerHouseNumber"];
            this.customerInitials = _data["CustomerInitials"];
            this.customerPrefix = _data["CustomerPrefix"];
            this.customerAddress = _data["CustomerAddress"];
            this.customerAddress2 = _data["CustomerAddress2"];
            this.customerAddressId = _data["CustomerAddressId"];
            this.customerZip = _data["CustomerZip"];
            this.customerCity = _data["CustomerCity"];
            this.customerCountry = _data["CustomerCountry"];
            this.customerCountryCode = _data["CustomerCountryCode"];
            this.customerRegion = _data["CustomerRegion"];
            this.customerPhone = _data["CustomerPhone"];
            this.customerEmail = _data["CustomerEmail"];
            this.customerCell = _data["CustomerCell"];
            this.customerAccepted = _data["CustomerAccepted"];
            this.customerComment = _data["CustomerComment"];
            this.deliveryCompany = _data["DeliveryCompany"];
            this.deliveryName = _data["DeliveryName"];
            this.deliveryFirstName = _data["DeliveryFirstName"];
            this.deliverySurname = _data["DeliverySurname"];
            this.deliveryMiddleName = _data["DeliveryMiddleName"];
            this.deliveryTitle = _data["DeliveryTitle"];
            this.deliveryHouseNumber = _data["DeliveryHouseNumber"];
            this.deliveryInitials = _data["DeliveryInitials"];
            this.deliveryPrefix = _data["DeliveryPrefix"];
            this.deliveryAddress = _data["DeliveryAddress"];
            this.deliveryAddress2 = _data["DeliveryAddress2"];
            this.deliveryAddressId = _data["DeliveryAddressId"];
            this.deliveryZip = _data["DeliveryZip"];
            this.deliveryCity = _data["DeliveryCity"];
            this.deliveryCountry = _data["DeliveryCountry"];
            this.deliveryCountryCode = _data["DeliveryCountryCode"];
            this.deliveryRegion = _data["DeliveryRegion"];
            this.deliveryPhone = _data["DeliveryPhone"];
            this.deliveryEmail = _data["DeliveryEmail"];
            this.deliveryCell = _data["DeliveryCell"];
            this.reference = _data["Reference"];
            this.newsletterSubscribe = _data["NewsletterSubscribe"];
            this.transactionCardnumber = _data["TransactionCardnumber"];
            this.transactionCardType = _data["TransactionCardType"];
            this.transactionNumber = _data["TransactionNumber"];
            this.transactionStatus = _data["TransactionStatus"];
            this.shippingDate = _data["ShippingDate"] ? new Date(_data["ShippingDate"].toString()) : <any>undefined;
            this.trackAndTraceName = _data["TrackAndTraceName"];
            this.trackAndTraceURL = _data["TrackAndTraceURL"];
            this.trackAndTraceNumber = _data["TrackAndTraceNumber"];
            if (Array.isArray(_data["OrderLines"])) {
                this.orderLines = [] as any;
                for (let item of _data["OrderLines"])
                    this.orderLines!.push(OrderLineViewModel.fromJS(item));
            }
            if (_data["OrderFields"]) {
                this.orderFields = {} as any;
                for (let key in _data["OrderFields"]) {
                    if (_data["OrderFields"].hasOwnProperty(key))
                        (<any>this.orderFields)![key] = _data["OrderFields"][key] ? FieldValueViewModel.fromJS(_data["OrderFields"][key]) : new FieldValueViewModel();
                }
            }
            this.totalDiscount = _data["TotalDiscount"] ? PriceViewModel.fromJS(_data["TotalDiscount"]) : <any>undefined;
            this.totalProductDiscount = _data["TotalProductDiscount"] ? PriceViewModel.fromJS(_data["TotalProductDiscount"]) : <any>undefined;
            this.totalOrderDiscount = _data["TotalOrderDiscount"] ? PriceViewModel.fromJS(_data["TotalOrderDiscount"]) : <any>undefined;
            this.price = _data["Price"] ? PriceViewModel.fromJS(_data["Price"]) : <any>undefined;
            this.priceBeforeFees = _data["PriceBeforeFees"] ? PriceViewModel.fromJS(_data["PriceBeforeFees"]) : <any>undefined;
            this.totalPriceBeforeFeesAndTaxes = _data["TotalPriceBeforeFeesAndTaxes"] ? PriceViewModel.fromJS(_data["TotalPriceBeforeFeesAndTaxes"]) : <any>undefined;
            this.totalTaxes = _data["TotalTaxes"] ? PriceViewModel.fromJS(_data["TotalTaxes"]) : <any>undefined;
            this.shippingFee = _data["ShippingFee"] ? PriceViewModel.fromJS(_data["ShippingFee"]) : <any>undefined;
            this.shippingMethod = _data["ShippingMethod"] ? ShippingViewModel.fromJS(_data["ShippingMethod"]) : <any>undefined;
            this.paymentMethod = _data["PaymentMethod"] ? PaymentViewModel.fromJS(_data["PaymentMethod"]) : <any>undefined;
            this.paymentFee = _data["PaymentFee"] ? PriceViewModel.fromJS(_data["PaymentFee"]) : <any>undefined;
        }
    }

    static override fromJS(data: any): OrderViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new OrderViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["ParentOrderId"] = this.parentOrderId;
        data["SecondaryUserId"] = this.secondaryUserId;
        data["SecondaryUserName"] = this.secondaryUserName;
        data["Secret"] = this.secret;
        data["ShopId"] = this.shopId;
        data["DisplayName"] = this.displayName;
        data["VoucherCode"] = this.voucherCode;
        data["Weight"] = this.weight;
        data["Volume"] = this.volume;
        data["CreatedAt"] = this.createdAt ? this.createdAt.toISOString() : <any>undefined;
        data["Modified"] = this.modified ? this.modified.toISOString() : <any>undefined;
        data["CompletedDate"] = this.completedDate ? this.completedDate.toISOString() : <any>undefined;
        data["Completed"] = this.completed;
        data["LedgerType"] = this.ledgerType;
        data["StateId"] = this.stateId;
        data["StateName"] = this.stateName;
        data["StateDescription"] = this.stateDescription;
        data["IntegrationOrderId"] = this.integrationOrderId;
        data["RecurringOrderId"] = this.recurringOrderId;
        data["CustomerUserId"] = this.customerUserId;
        data["CustomerNumber"] = this.customerNumber;
        data["CustomerEan"] = this.customerEan;
        data["CustomerRefId"] = this.customerRefId;
        data["CustomerCompany"] = this.customerCompany;
        data["CustomerTitle"] = this.customerTitle;
        data["CustomerName"] = this.customerName;
        data["CustomerFirstName"] = this.customerFirstName;
        data["CustomerSurname"] = this.customerSurname;
        data["CustomerMiddleName"] = this.customerMiddleName;
        data["CustomerHouseNumber"] = this.customerHouseNumber;
        data["CustomerInitials"] = this.customerInitials;
        data["CustomerPrefix"] = this.customerPrefix;
        data["CustomerAddress"] = this.customerAddress;
        data["CustomerAddress2"] = this.customerAddress2;
        data["CustomerAddressId"] = this.customerAddressId;
        data["CustomerZip"] = this.customerZip;
        data["CustomerCity"] = this.customerCity;
        data["CustomerCountry"] = this.customerCountry;
        data["CustomerCountryCode"] = this.customerCountryCode;
        data["CustomerRegion"] = this.customerRegion;
        data["CustomerPhone"] = this.customerPhone;
        data["CustomerEmail"] = this.customerEmail;
        data["CustomerCell"] = this.customerCell;
        data["CustomerAccepted"] = this.customerAccepted;
        data["CustomerComment"] = this.customerComment;
        data["DeliveryCompany"] = this.deliveryCompany;
        data["DeliveryName"] = this.deliveryName;
        data["DeliveryFirstName"] = this.deliveryFirstName;
        data["DeliverySurname"] = this.deliverySurname;
        data["DeliveryMiddleName"] = this.deliveryMiddleName;
        data["DeliveryTitle"] = this.deliveryTitle;
        data["DeliveryHouseNumber"] = this.deliveryHouseNumber;
        data["DeliveryInitials"] = this.deliveryInitials;
        data["DeliveryPrefix"] = this.deliveryPrefix;
        data["DeliveryAddress"] = this.deliveryAddress;
        data["DeliveryAddress2"] = this.deliveryAddress2;
        data["DeliveryAddressId"] = this.deliveryAddressId;
        data["DeliveryZip"] = this.deliveryZip;
        data["DeliveryCity"] = this.deliveryCity;
        data["DeliveryCountry"] = this.deliveryCountry;
        data["DeliveryCountryCode"] = this.deliveryCountryCode;
        data["DeliveryRegion"] = this.deliveryRegion;
        data["DeliveryPhone"] = this.deliveryPhone;
        data["DeliveryEmail"] = this.deliveryEmail;
        data["DeliveryCell"] = this.deliveryCell;
        data["Reference"] = this.reference;
        data["NewsletterSubscribe"] = this.newsletterSubscribe;
        data["TransactionCardnumber"] = this.transactionCardnumber;
        data["TransactionCardType"] = this.transactionCardType;
        data["TransactionNumber"] = this.transactionNumber;
        data["TransactionStatus"] = this.transactionStatus;
        data["ShippingDate"] = this.shippingDate ? this.shippingDate.toISOString() : <any>undefined;
        data["TrackAndTraceName"] = this.trackAndTraceName;
        data["TrackAndTraceURL"] = this.trackAndTraceURL;
        data["TrackAndTraceNumber"] = this.trackAndTraceNumber;
        if (Array.isArray(this.orderLines)) {
            data["OrderLines"] = [];
            for (let item of this.orderLines)
                data["OrderLines"].push(item.toJSON());
        }
        if (this.orderFields) {
            data["OrderFields"] = {};
            for (let key in this.orderFields) {
                if (this.orderFields.hasOwnProperty(key))
                    (<any>data["OrderFields"])[key] = this.orderFields[key] ? this.orderFields[key].toJSON() : <any>undefined;
            }
        }
        data["TotalDiscount"] = this.totalDiscount ? this.totalDiscount.toJSON() : <any>undefined;
        data["TotalProductDiscount"] = this.totalProductDiscount ? this.totalProductDiscount.toJSON() : <any>undefined;
        data["TotalOrderDiscount"] = this.totalOrderDiscount ? this.totalOrderDiscount.toJSON() : <any>undefined;
        data["Price"] = this.price ? this.price.toJSON() : <any>undefined;
        data["PriceBeforeFees"] = this.priceBeforeFees ? this.priceBeforeFees.toJSON() : <any>undefined;
        data["TotalPriceBeforeFeesAndTaxes"] = this.totalPriceBeforeFeesAndTaxes ? this.totalPriceBeforeFeesAndTaxes.toJSON() : <any>undefined;
        data["TotalTaxes"] = this.totalTaxes ? this.totalTaxes.toJSON() : <any>undefined;
        data["ShippingFee"] = this.shippingFee ? this.shippingFee.toJSON() : <any>undefined;
        data["ShippingMethod"] = this.shippingMethod ? this.shippingMethod.toJSON() : <any>undefined;
        data["PaymentMethod"] = this.paymentMethod ? this.paymentMethod.toJSON() : <any>undefined;
        data["PaymentFee"] = this.paymentFee ? this.paymentFee.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

export class OrderLineViewModel extends FillableViewModelBase {
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
    orderLineFields?: { [key: string]: FieldValueViewModel; } | undefined;
    price?: PriceViewModel | undefined;
    unitPrice?: PriceViewModel | undefined;
    unitPriceBeforeDiscount?: PriceViewModel | undefined;
    totalDiscount?: PriceViewModel | undefined;
    bomOrderLines?: OrderLineViewModel[] | undefined;

    constructor(data?: OrderLineViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.productId = _data["ProductId"];
            this.productVariantId = _data["ProductVariantId"];
            this.productLanguageId = _data["ProductLanguageId"];
            this.productName = _data["ProductName"];
            this.productNumber = _data["ProductNumber"];
            this.productVariantName = _data["ProductVariantName"];
            this.productImage = _data["ProductImage"];
            this.primaryOrDefaultGroup = _data["PrimaryOrDefaultGroup"] ? GroupInfoViewModel.fromJS(_data["PrimaryOrDefaultGroup"]) : <any>undefined;
            this.reference = _data["Reference"];
            this.quantity = _data["Quantity"];
            this.weight = _data["Weight"];
            this.volume = _data["Volume"];
            this.unitId = _data["UnitId"];
            this.unitName = _data["UnitName"];
            this.stockLocationId = _data["StockLocationId"];
            this.orderLineType = _data["OrderLineType"];
            if (_data["OrderLineFields"]) {
                this.orderLineFields = {} as any;
                for (let key in _data["OrderLineFields"]) {
                    if (_data["OrderLineFields"].hasOwnProperty(key))
                        (<any>this.orderLineFields)![key] = _data["OrderLineFields"][key] ? FieldValueViewModel.fromJS(_data["OrderLineFields"][key]) : new FieldValueViewModel();
                }
            }
            this.price = _data["Price"] ? PriceViewModel.fromJS(_data["Price"]) : <any>undefined;
            this.unitPrice = _data["UnitPrice"] ? PriceViewModel.fromJS(_data["UnitPrice"]) : <any>undefined;
            this.unitPriceBeforeDiscount = _data["UnitPriceBeforeDiscount"] ? PriceViewModel.fromJS(_data["UnitPriceBeforeDiscount"]) : <any>undefined;
            this.totalDiscount = _data["TotalDiscount"] ? PriceViewModel.fromJS(_data["TotalDiscount"]) : <any>undefined;
            if (Array.isArray(_data["BomOrderLines"])) {
                this.bomOrderLines = [] as any;
                for (let item of _data["BomOrderLines"])
                    this.bomOrderLines!.push(OrderLineViewModel.fromJS(item));
            }
        }
    }

    static override fromJS(data: any): OrderLineViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new OrderLineViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["ProductId"] = this.productId;
        data["ProductVariantId"] = this.productVariantId;
        data["ProductLanguageId"] = this.productLanguageId;
        data["ProductName"] = this.productName;
        data["ProductNumber"] = this.productNumber;
        data["ProductVariantName"] = this.productVariantName;
        data["ProductImage"] = this.productImage;
        data["PrimaryOrDefaultGroup"] = this.primaryOrDefaultGroup ? this.primaryOrDefaultGroup.toJSON() : <any>undefined;
        data["Reference"] = this.reference;
        data["Quantity"] = this.quantity;
        data["Weight"] = this.weight;
        data["Volume"] = this.volume;
        data["UnitId"] = this.unitId;
        data["UnitName"] = this.unitName;
        data["StockLocationId"] = this.stockLocationId;
        data["OrderLineType"] = this.orderLineType;
        if (this.orderLineFields) {
            data["OrderLineFields"] = {};
            for (let key in this.orderLineFields) {
                if (this.orderLineFields.hasOwnProperty(key))
                    (<any>data["OrderLineFields"])[key] = this.orderLineFields[key] ? this.orderLineFields[key].toJSON() : <any>undefined;
            }
        }
        data["Price"] = this.price ? this.price.toJSON() : <any>undefined;
        data["UnitPrice"] = this.unitPrice ? this.unitPrice.toJSON() : <any>undefined;
        data["UnitPriceBeforeDiscount"] = this.unitPriceBeforeDiscount ? this.unitPriceBeforeDiscount.toJSON() : <any>undefined;
        data["TotalDiscount"] = this.totalDiscount ? this.totalDiscount.toJSON() : <any>undefined;
        if (Array.isArray(this.bomOrderLines)) {
            data["BomOrderLines"] = [];
            for (let item of this.bomOrderLines)
                data["BomOrderLines"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}

export enum OrderLineType {
    Product = "Product",
    Discount = "Discount",
    Fixed = "Fixed",
    ProductDiscount = "ProductDiscount",
    Tax = "Tax",
    PointProduct = "PointProduct",
    GiftCard = "GiftCard",
}

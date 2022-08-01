import { ViewModelBase } from "../Shared/ViewModel";
import { PriceViewModel2 } from "./PriceViewModel2";

export class CartViewModel extends ViewModelBase {
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

    constructor(data?: CartViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.iD = _data["ID"];
            this.productsCount = _data["ProductsCount"];
            this.totalProductsCount = _data["TotalProductsCount"];
            this.orderlinesCount = _data["OrderlinesCount"];
            if (Array.isArray(_data["CartOrderlines"])) {
                this.cartOrderlines = [] as any;
                for (let item of _data["CartOrderlines"])
                    this.cartOrderlines!.push(CartOrderlineViewModel.fromJS(item));
            }
            this.totalPrice = _data["TotalPrice"] ? PriceViewModel2.fromJS(_data["TotalPrice"]) : <any>undefined;
            this.totalDiscount = _data["TotalDiscount"] ? PriceViewModel2.fromJS(_data["TotalDiscount"]) : <any>undefined;
            this.totalPriceWithoutDiscounts = _data["TotalPriceWithoutDiscounts"] ? PriceViewModel2.fromJS(_data["TotalPriceWithoutDiscounts"]) : <any>undefined;
            this.totalPriceWithoutFees = _data["TotalPriceWithoutFees"] ? PriceViewModel2.fromJS(_data["TotalPriceWithoutFees"]) : <any>undefined;
            this.paymentMethod = _data["PaymentMethod"];
            this.paymentFee = _data["PaymentFee"] ? PriceViewModel2.fromJS(_data["PaymentFee"]) : <any>undefined;
            this.shippingMethod = _data["ShippingMethod"];
            this.shippingFee = _data["ShippingFee"] ? PriceViewModel2.fromJS(_data["ShippingFee"]) : <any>undefined;
            this.isEmpty = _data["IsEmpty"];
        }
    }

    static override fromJS(data: any): CartViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new CartViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ID"] = this.iD;
        data["ProductsCount"] = this.productsCount;
        data["TotalProductsCount"] = this.totalProductsCount;
        data["OrderlinesCount"] = this.orderlinesCount;
        if (Array.isArray(this.cartOrderlines)) {
            data["CartOrderlines"] = [];
            for (let item of this.cartOrderlines)
                data["CartOrderlines"].push(item.toJSON());
        }
        data["TotalPrice"] = this.totalPrice ? this.totalPrice.toJSON() : <any>undefined;
        data["TotalDiscount"] = this.totalDiscount ? this.totalDiscount.toJSON() : <any>undefined;
        data["TotalPriceWithoutDiscounts"] = this.totalPriceWithoutDiscounts ? this.totalPriceWithoutDiscounts.toJSON() : <any>undefined;
        data["TotalPriceWithoutFees"] = this.totalPriceWithoutFees ? this.totalPriceWithoutFees.toJSON() : <any>undefined;
        data["PaymentMethod"] = this.paymentMethod;
        data["PaymentFee"] = this.paymentFee ? this.paymentFee.toJSON() : <any>undefined;
        data["ShippingMethod"] = this.shippingMethod;
        data["ShippingFee"] = this.shippingFee ? this.shippingFee.toJSON() : <any>undefined;
        data["IsEmpty"] = this.isEmpty;
        super.toJSON(data);
        return data;
    }
}

export class CartOrderlineViewModel extends ViewModelBase {
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

    constructor(data?: CartOrderlineViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.productID = _data["ProductID"];
            this.productNumber = _data["ProductNumber"];
            this.productName = _data["ProductName"];
            this.productGroupID = _data["ProductGroupID"];
            this.isProduct = _data["IsProduct"];
            this.isDiscount = _data["IsDiscount"];
            this.isTax = _data["IsTax"];
            this.quantity = _data["Quantity"];
            this.productVariantID = _data["ProductVariantID"];
            this.productVariantText = _data["ProductVariantText"];
            this.productLink = _data["ProductLink"];
            this.productImage = _data["ProductImage"];
            this.unitPrice = _data["UnitPrice"] ? PriceViewModel2.fromJS(_data["UnitPrice"]) : <any>undefined;
            this.unitPriceBeforeDiscount = _data["UnitPriceBeforeDiscount"] ? PriceViewModel2.fromJS(_data["UnitPriceBeforeDiscount"]) : <any>undefined;
            this.totalPrice = _data["TotalPrice"] ? PriceViewModel2.fromJS(_data["TotalPrice"]) : <any>undefined;
            this.totalDiscount = _data["TotalDiscount"] ? PriceViewModel2.fromJS(_data["TotalDiscount"]) : <any>undefined;
            this.unitId = _data["UnitId"];
            this.unitName = _data["UnitName"];
            this.pointsTotal = _data["PointsTotal"];
            this.pointPrice = _data["PointPrice"];
            this.iD = _data["ID"];
        }
    }

    static override fromJS(data: any): CartOrderlineViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new CartOrderlineViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ProductID"] = this.productID;
        data["ProductNumber"] = this.productNumber;
        data["ProductName"] = this.productName;
        data["ProductGroupID"] = this.productGroupID;
        data["IsProduct"] = this.isProduct;
        data["IsDiscount"] = this.isDiscount;
        data["IsTax"] = this.isTax;
        data["Quantity"] = this.quantity;
        data["ProductVariantID"] = this.productVariantID;
        data["ProductVariantText"] = this.productVariantText;
        data["ProductLink"] = this.productLink;
        data["ProductImage"] = this.productImage;
        data["UnitPrice"] = this.unitPrice ? this.unitPrice.toJSON() : <any>undefined;
        data["UnitPriceBeforeDiscount"] = this.unitPriceBeforeDiscount ? this.unitPriceBeforeDiscount.toJSON() : <any>undefined;
        data["TotalPrice"] = this.totalPrice ? this.totalPrice.toJSON() : <any>undefined;
        data["TotalDiscount"] = this.totalDiscount ? this.totalDiscount.toJSON() : <any>undefined;
        data["UnitId"] = this.unitId;
        data["UnitName"] = this.unitName;
        data["PointsTotal"] = this.pointsTotal;
        data["PointPrice"] = this.pointPrice;
        data["ID"] = this.iD;
        super.toJSON(data);
        return data;
    }
}

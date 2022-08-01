import { StockUnitViewModel } from '../Ecommerce/StockUnitViewModel';
import { UnitOptionViewModel } from '../Ecommerce/UnitOptionViewModel';
import { FillableViewModelBase } from '../Shared/ViewModel';
import { VariantInfoViewModel } from './VariantInfoViewModel';
import { ProductInfoViewModel } from './ProductInfoViewModel';
import { PriceViewModel } from '../Ecommerce/PriceViewModel';
import { DiscountViewModel } from '../Ecommerce/DiscountViewModel';
import { PriceListViewModel } from '../Ecommerce/PriceListViewModel';
import { FieldValueViewModel } from '../Ecommerce/FieldValueViewModel';
import { CategoryFieldViewModel } from './CategoryFieldViewModel';
import { GroupInfoViewModel } from '../Ecommerce/GroupInfoViewModel';
import { MediaViewModel } from './MediaViewModel';
import { ManufacturerViewModel } from './ManufacturerViewModel';
import { AssetCategoryViewModel } from './AssetCategoryViewModel';
import { RelatedGroupViewModel } from './RelatedGroupViewModel';

export class ProductViewModel extends FillableViewModelBase {
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
    standardFields?: { [key: string]: FieldValueViewModel; } | undefined;
    productFields?: { [key: string]: FieldValueViewModel; } | undefined;
    productCategories?: { [key: string]: CategoryFieldViewModel; } | undefined;
    fieldDisplayGroups?: { [key: string]: CategoryFieldViewModel; } | undefined;
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

    constructor(data?: ProductViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.variantId = _data["VariantId"];
            this.languageId = _data["LanguageId"];
            this.name = _data["Name"];
            this.title = _data["Title"];
            this.shortDescription = _data["ShortDescription"];
            this.longDescription = _data["LongDescription"];
            this.metaDescription = _data["MetaDescription"];
            this.metaTitle = _data["MetaTitle"];
            this.metaKeywords = _data["MetaKeywords"];
            this.number = _data["Number"];
            this.created = _data["Created"] ? new Date(_data["Created"].toString()) : <any>undefined;
            this.updated = _data["Updated"] ? new Date(_data["Updated"].toString()) : <any>undefined;
            this.keywords = _data["Keywords"];
            this.weight = _data["Weight"];
            this.stockLevel = _data["StockLevel"];
            this.width = _data["Width"];
            this.height = _data["Height"];
            this.depth = _data["Depth"];
            this.purchaseMinimumQuantity = _data["PurchaseMinimumQuantity"];
            this.purchaseQuantityStep = _data["PurchaseQuantityStep"];
            this.cost = _data["Cost"];
            this.eAN = _data["EAN"];
            this.expectedDelivery = _data["ExpectedDelivery"] ? new Date(_data["ExpectedDelivery"].toString()) : <any>undefined;
            this.discontinued = _data["Discontinued"];
            this.discontinuedAction = _data["DiscontinuedAction"];
            this.pointPrice = _data["PointPrice"];
            this.defaultVariantId = _data["DefaultVariantId"];
            this.defaultUnitId = _data["DefaultUnitId"];
            this.variantName = _data["VariantName"];
            this.active = _data["Active"];
            this.rating = _data["Rating"];
            this.replacementProduct = _data["ReplacementProduct"] ? ProductInfoViewModel.fromJS(_data["ReplacementProduct"]) : <any>undefined;
            this.price = _data["Price"] ? PriceViewModel.fromJS(_data["Price"]) : <any>undefined;
            this.priceInformative = _data["PriceInformative"] ? PriceViewModel.fromJS(_data["PriceInformative"]) : <any>undefined;
            this.priceBeforeDiscount = _data["PriceBeforeDiscount"] ? PriceViewModel.fromJS(_data["PriceBeforeDiscount"]) : <any>undefined;
            this.discount = _data["Discount"] ? PriceViewModel.fromJS(_data["Discount"]) : <any>undefined;
            if (Array.isArray(_data["ProductDiscounts"])) {
                this.productDiscounts = [] as any;
                for (let item of _data["ProductDiscounts"])
                    this.productDiscounts!.push(DiscountViewModel.fromJS(item));
            }
            if (Array.isArray(_data["Prices"])) {
                this.prices = [] as any;
                for (let item of _data["Prices"])
                    this.prices!.push(PriceListViewModel.fromJS(item));
            }
            if (_data["StandardFields"]) {
                this.standardFields = {} as any;
                for (let key in _data["StandardFields"]) {
                    if (_data["StandardFields"].hasOwnProperty(key))
                        (<any>this.standardFields)![key] = _data["StandardFields"][key] ? FieldValueViewModel.fromJS(_data["StandardFields"][key]) : new FieldValueViewModel();
                }
            }
            if (_data["ProductFields"]) {
                this.productFields = {} as any;
                for (let key in _data["ProductFields"]) {
                    if (_data["ProductFields"].hasOwnProperty(key))
                        (<any>this.productFields)![key] = _data["ProductFields"][key] ? FieldValueViewModel.fromJS(_data["ProductFields"][key]) : new FieldValueViewModel();
                }
            }
            if (_data["ProductCategories"]) {
                this.productCategories = {} as any;
                for (let key in _data["ProductCategories"]) {
                    if (_data["ProductCategories"].hasOwnProperty(key))
                        (<any>this.productCategories)![key] = _data["ProductCategories"][key] ? CategoryFieldViewModel.fromJS(_data["ProductCategories"][key]) : new CategoryFieldViewModel();
                }
            }
            if (_data["FieldDisplayGroups"]) {
                this.fieldDisplayGroups = {} as any;
                for (let key in _data["FieldDisplayGroups"]) {
                    if (_data["FieldDisplayGroups"].hasOwnProperty(key))
                        (<any>this.fieldDisplayGroups)![key] = _data["FieldDisplayGroups"][key] ? CategoryFieldViewModel.fromJS(_data["FieldDisplayGroups"][key]) : new CategoryFieldViewModel();
                }
            }
            if (Array.isArray(_data["Groups"])) {
                this.groups = [] as any;
                for (let item of _data["Groups"])
                    this.groups!.push(GroupInfoViewModel.fromJS(item));
            }
            this.primaryOrDefaultGroup = _data["PrimaryOrDefaultGroup"] ? GroupInfoViewModel.fromJS(_data["PrimaryOrDefaultGroup"]) : <any>undefined;
            this.variantInfo = _data["VariantInfo"] ? VariantInfoViewModel.fromJS(_data["VariantInfo"]) : <any>undefined;
            this.defaultImage = _data["DefaultImage"] ? MediaViewModel.fromJS(_data["DefaultImage"]) : <any>undefined;
            if (Array.isArray(_data["GroupPaths"])) {
                this.groupPaths = [] as any;
                for (let item of _data["GroupPaths"])
                    this.groupPaths!.push(item);
            }
            if (Array.isArray(_data["ImagePatternImages"])) {
                this.imagePatternImages = [] as any;
                for (let item of _data["ImagePatternImages"])
                    this.imagePatternImages!.push(MediaViewModel.fromJS(item));
            }
            this.manufacturer = _data["Manufacturer"] ? ManufacturerViewModel.fromJS(_data["Manufacturer"]) : <any>undefined;
            if (Array.isArray(_data["AssetCategories"])) {
                this.assetCategories = [] as any;
                for (let item of _data["AssetCategories"])
                    this.assetCategories!.push(AssetCategoryViewModel.fromJS(item));
            }
            this.neverOutOfstock = _data["NeverOutOfstock"];
            if (Array.isArray(_data["StockUnits"])) {
                this.stockUnits = [] as any;
                for (let item of _data["StockUnits"])
                    this.stockUnits!.push(StockUnitViewModel.fromJS(item));
            }
            if (Array.isArray(_data["UnitOptions"])) {
                this.unitOptions = [] as any;
                for (let item of _data["UnitOptions"])
                    this.unitOptions!.push(UnitOptionViewModel.fromJS(item));
            }
            if (Array.isArray(_data["RelatedGroups"])) {
                this.relatedGroups = [] as any;
                for (let item of _data["RelatedGroups"])
                    this.relatedGroups!.push(RelatedGroupViewModel.fromJS(item));
            }
        }
    }

    static override fromJS(data: any): ProductViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new ProductViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["VariantId"] = this.variantId;
        data["LanguageId"] = this.languageId;
        data["Name"] = this.name;
        data["Title"] = this.title;
        data["ShortDescription"] = this.shortDescription;
        data["LongDescription"] = this.longDescription;
        data["MetaDescription"] = this.metaDescription;
        data["MetaTitle"] = this.metaTitle;
        data["MetaKeywords"] = this.metaKeywords;
        data["Number"] = this.number;
        data["Created"] = this.created ? this.created.toISOString() : <any>undefined;
        data["Updated"] = this.updated ? this.updated.toISOString() : <any>undefined;
        data["Keywords"] = this.keywords;
        data["Weight"] = this.weight;
        data["StockLevel"] = this.stockLevel;
        data["Width"] = this.width;
        data["Height"] = this.height;
        data["Depth"] = this.depth;
        data["PurchaseMinimumQuantity"] = this.purchaseMinimumQuantity;
        data["PurchaseQuantityStep"] = this.purchaseQuantityStep;
        data["Cost"] = this.cost;
        data["EAN"] = this.eAN;
        data["ExpectedDelivery"] = this.expectedDelivery ? this.expectedDelivery.toISOString() : <any>undefined;
        data["Discontinued"] = this.discontinued;
        data["DiscontinuedAction"] = this.discontinuedAction;
        data["PointPrice"] = this.pointPrice;
        data["DefaultVariantId"] = this.defaultVariantId;
        data["DefaultUnitId"] = this.defaultUnitId;
        data["VariantName"] = this.variantName;
        data["Active"] = this.active;
        data["Rating"] = this.rating;
        data["ReplacementProduct"] = this.replacementProduct ? this.replacementProduct.toJSON() : <any>undefined;
        data["Price"] = this.price ? this.price.toJSON() : <any>undefined;
        data["PriceInformative"] = this.priceInformative ? this.priceInformative.toJSON() : <any>undefined;
        data["PriceBeforeDiscount"] = this.priceBeforeDiscount ? this.priceBeforeDiscount.toJSON() : <any>undefined;
        data["Discount"] = this.discount ? this.discount.toJSON() : <any>undefined;
        if (Array.isArray(this.productDiscounts)) {
            data["ProductDiscounts"] = [];
            for (let item of this.productDiscounts)
                data["ProductDiscounts"].push(item.toJSON());
        }
        if (Array.isArray(this.prices)) {
            data["Prices"] = [];
            for (let item of this.prices)
                data["Prices"].push(item.toJSON());
        }
        if (this.standardFields) {
            data["StandardFields"] = {};
            for (let key in this.standardFields) {
                if (this.standardFields.hasOwnProperty(key))
                    (<any>data["StandardFields"])[key] = this.standardFields[key] ? this.standardFields[key].toJSON() : <any>undefined;
            }
        }
        if (this.productFields) {
            data["ProductFields"] = {};
            for (let key in this.productFields) {
                if (this.productFields.hasOwnProperty(key))
                    (<any>data["ProductFields"])[key] = this.productFields[key] ? this.productFields[key].toJSON() : <any>undefined;
            }
        }
        if (this.productCategories) {
            data["ProductCategories"] = {};
            for (let key in this.productCategories) {
                if (this.productCategories.hasOwnProperty(key))
                    (<any>data["ProductCategories"])[key] = this.productCategories[key] ? this.productCategories[key].toJSON() : <any>undefined;
            }
        }
        if (this.fieldDisplayGroups) {
            data["FieldDisplayGroups"] = {};
            for (let key in this.fieldDisplayGroups) {
                if (this.fieldDisplayGroups.hasOwnProperty(key))
                    (<any>data["FieldDisplayGroups"])[key] = this.fieldDisplayGroups[key] ? this.fieldDisplayGroups[key].toJSON() : <any>undefined;
            }
        }
        if (Array.isArray(this.groups)) {
            data["Groups"] = [];
            for (let item of this.groups)
                data["Groups"].push(item.toJSON());
        }
        data["PrimaryOrDefaultGroup"] = this.primaryOrDefaultGroup ? this.primaryOrDefaultGroup.toJSON() : <any>undefined;
        data["VariantInfo"] = this.variantInfo ? this.variantInfo.toJSON() : <any>undefined;
        data["DefaultImage"] = this.defaultImage ? this.defaultImage.toJSON() : <any>undefined;
        if (Array.isArray(this.groupPaths)) {
            data["GroupPaths"] = [];
            for (let item of this.groupPaths)
                data["GroupPaths"].push(item);
        }
        if (Array.isArray(this.imagePatternImages)) {
            data["ImagePatternImages"] = [];
            for (let item of this.imagePatternImages)
                data["ImagePatternImages"].push(item.toJSON());
        }
        data["Manufacturer"] = this.manufacturer ? this.manufacturer.toJSON() : <any>undefined;
        if (Array.isArray(this.assetCategories)) {
            data["AssetCategories"] = [];
            for (let item of this.assetCategories)
                data["AssetCategories"].push(item.toJSON());
        }
        data["NeverOutOfstock"] = this.neverOutOfstock;
        if (Array.isArray(this.stockUnits)) {
            data["StockUnits"] = [];
            for (let item of this.stockUnits)
                data["StockUnits"].push(item.toJSON());
        }
        if (Array.isArray(this.unitOptions)) {
            data["UnitOptions"] = [];
            for (let item of this.unitOptions)
                data["UnitOptions"].push(item.toJSON());
        }
        if (Array.isArray(this.relatedGroups)) {
            data["RelatedGroups"] = [];
            for (let item of this.relatedGroups)
                data["RelatedGroups"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}

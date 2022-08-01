import { FillableViewModelBase } from '../Shared/ViewModel';
import { MediaViewModel } from './MediaViewModel';
import { PriceViewModel } from './PriceViewModel';

export class VariantInfoViewModel extends FillableViewModelBase {
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

    constructor(data?: VariantInfoViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.productID = _data["ProductID"];
            this.variantID = _data["VariantID"];
            this.optionID = _data["OptionID"];
            this.optionName = _data["OptionName"];
            this.optionColor = _data["OptionColor"];
            this.optionSort = _data["OptionSort"];
            this.productName = _data["ProductName"];
            this.productNumber = _data["ProductNumber"];
            this.productStock = _data["ProductStock"];
            this.variantInfoGroupId = _data["VariantInfoGroupId"];
            this.variantInfoGroupName = _data["VariantInfoGroupName"];
            this.variantInfoGroupDescription = _data["VariantInfoGroupDescription"];
            this.optionImage = _data["OptionImage"] ? MediaViewModel.fromJS(_data["OptionImage"]) : <any>undefined;
            this.image = _data["Image"] ? MediaViewModel.fromJS(_data["Image"]) : <any>undefined;
            this.price = _data["Price"] ? PriceViewModel.fromJS(_data["Price"]) : <any>undefined;
            this.priceMin = _data["PriceMin"] ? PriceViewModel.fromJS(_data["PriceMin"]) : <any>undefined;
            this.priceMax = _data["PriceMax"] ? PriceViewModel.fromJS(_data["PriceMax"]) : <any>undefined;
            this.stock = _data["Stock"];
            if (Array.isArray(_data["VariantInfo"])) {
                this.variantInfo = [] as any;
                for (let item of _data["VariantInfo"])
                    this.variantInfo!.push(VariantInfoViewModel.fromJS(item));
            }
        }
    }

    static override fromJS(data: any): VariantInfoViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new VariantInfoViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ProductID"] = this.productID;
        data["VariantID"] = this.variantID;
        data["OptionID"] = this.optionID;
        data["OptionName"] = this.optionName;
        data["OptionColor"] = this.optionColor;
        data["OptionSort"] = this.optionSort;
        data["ProductName"] = this.productName;
        data["ProductNumber"] = this.productNumber;
        data["ProductStock"] = this.productStock;
        data["VariantInfoGroupId"] = this.variantInfoGroupId;
        data["VariantInfoGroupName"] = this.variantInfoGroupName;
        data["VariantInfoGroupDescription"] = this.variantInfoGroupDescription;
        data["OptionImage"] = this.optionImage ? this.optionImage.toJSON() : <any>undefined;
        data["Image"] = this.image ? this.image.toJSON() : <any>undefined;
        data["Price"] = this.price ? this.price.toJSON() : <any>undefined;
        data["PriceMin"] = this.priceMin ? this.priceMin.toJSON() : <any>undefined;
        data["PriceMax"] = this.priceMax ? this.priceMax.toJSON() : <any>undefined;
        data["Stock"] = this.stock;
        if (Array.isArray(this.variantInfo)) {
            data["VariantInfo"] = [];
            for (let item of this.variantInfo)
                data["VariantInfo"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}

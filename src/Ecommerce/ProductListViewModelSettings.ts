import { ProductViewModelSettings } from './ProductViewModelSettings';
import { ProductGroupViewModelSettings } from './ProductGroupViewModelSettings';
import { MediaViewModelSettings } from './MediaViewModelSettings';
import { FacetGroupViewModelSettings } from '../Shared/FacetGroupViewModelSettings';
import { ViewSettingsBaseCurrencyBase } from './ViewSettingsCurrencyBase';

export class ProductListViewModelSettings extends ViewSettingsBaseCurrencyBase<ProductListViewModelSettings> {
    productSettings?: ProductViewModelSettings | undefined;
    groupSettings?: ProductGroupViewModelSettings | undefined;
    facetGroupSettings?: FacetGroupViewModelSettings | undefined;
    parameters?: { [key: string]: string; } | undefined;
    pageSize?: number;
    currentPage?: number;
    mediaSettings?: MediaViewModelSettings | undefined;

    constructor(data?: ProductListViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.productSettings = _data["ProductSettings"] ? ProductViewModelSettings.fromJS(_data["ProductSettings"]) : <any>undefined;
            this.groupSettings = _data["GroupSettings"] ? ProductGroupViewModelSettings.fromJS(_data["GroupSettings"]) : <any>undefined;
            this.facetGroupSettings = _data["FacetGroupSettings"] ? FacetGroupViewModelSettings.fromJS(_data["FacetGroupSettings"]) : <any>undefined;
            if (_data["Parameters"]) {
                this.parameters = {} as any;
                for (let key in _data["Parameters"]) {
                    if (_data["Parameters"].hasOwnProperty(key))
                        (<any>this.parameters)![key] = _data["Parameters"][key];
                }
            }
            this.pageSize = _data["PageSize"];
            this.currentPage = _data["CurrentPage"];
            this.mediaSettings = _data["MediaSettings"] ? MediaViewModelSettings.fromJS(_data["MediaSettings"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ProductListViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new ProductListViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ProductSettings"] = this.productSettings ? this.productSettings.toJSON() : <any>undefined;
        data["GroupSettings"] = this.groupSettings ? this.groupSettings.toJSON() : <any>undefined;
        data["FacetGroupSettings"] = this.facetGroupSettings ? this.facetGroupSettings.toJSON() : <any>undefined;
        if (this.parameters) {
            data["Parameters"] = {};
            for (let key in this.parameters) {
                if (this.parameters.hasOwnProperty(key))
                    (<any>data["Parameters"])[key] = (<any>this.parameters)[key];
            }
        }
        data["PageSize"] = this.pageSize;
        data["CurrentPage"] = this.currentPage;
        data["MediaSettings"] = this.mediaSettings ? this.mediaSettings.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

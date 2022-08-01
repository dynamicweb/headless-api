import { ViewSettingsBaseCurrencyBase } from '../Ecommerce/ViewSettingsCurrencyBase';
import { FacetViewModelSettings } from './FacetViewModelSettings';

export class FacetGroupViewModelSettings extends ViewSettingsBaseCurrencyBase<FacetGroupViewModelSettings> {
    facetSettings?: FacetViewModelSettings | undefined;
    facetGroupNames?: string[] | undefined;

    constructor(data?: FacetGroupViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.facetSettings = _data["FacetSettings"] ? FacetViewModelSettings.fromJS(_data["FacetSettings"]) : <any>undefined;
            if (Array.isArray(_data["FacetGroupNames"])) {
                this.facetGroupNames = [] as any;
                for (let item of _data["FacetGroupNames"])
                    this.facetGroupNames!.push(item);
            }
        }
    }

    static fromJS(data: any): FacetGroupViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new FacetGroupViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["FacetSettings"] = this.facetSettings ? this.facetSettings.toJSON() : <any>undefined;
        if (Array.isArray(this.facetGroupNames)) {
            data["FacetGroupNames"] = [];
            for (let item of this.facetGroupNames)
                data["FacetGroupNames"].push(item);
        }
        return data;
    }
}

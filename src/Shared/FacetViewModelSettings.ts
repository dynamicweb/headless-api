import { ViewSettingsBaseCurrencyBase } from '../Ecommerce/ViewSettingsCurrencyBase';
import { FacetOptionViewModelSettings } from './FacetOptionViewModelSettings';

export class FacetViewModelSettings extends ViewSettingsBaseCurrencyBase<FacetViewModelSettings> {
    facetOptionSettings?: FacetOptionViewModelSettings | undefined;

    constructor(data?: FacetViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.facetOptionSettings = _data["FacetOptionSettings"] ? FacetOptionViewModelSettings.fromJS(_data["FacetOptionSettings"]) : <any>undefined;
        }
    }

    static fromJS(data: any): FacetViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new FacetViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["FacetOptionSettings"] = this.facetOptionSettings ? this.facetOptionSettings.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

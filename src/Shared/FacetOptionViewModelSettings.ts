import { ViewSettingsBaseCurrencyBase } from "../Ecommerce/ViewSettingsCurrencyBase";

export class FacetOptionViewModelSettings extends ViewSettingsBaseCurrencyBase<FacetOptionViewModelSettings> {

    constructor(data?: FacetOptionViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
    }

    static fromJS(data: any): FacetOptionViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new FacetOptionViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data;
    }
}

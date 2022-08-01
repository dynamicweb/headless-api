import { ViewSettingsBaseCurrencyBase } from "./ViewSettingsCurrencyBase";

export class PriceViewModelSettings extends ViewSettingsBaseCurrencyBase<PriceViewModelSettings> {

    constructor(data?: PriceViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
    }

    static fromJS(data: any): PriceViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new PriceViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data;
    }
}

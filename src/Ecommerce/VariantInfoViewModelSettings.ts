import { PriceViewModelSettings } from './PriceViewModelSettings';
import { MediaViewModelSettings } from './MediaViewModelSettings';
import { ViewSettingsBaseCurrencyBase } from './ViewSettingsCurrencyBase';

export class VariantInfoViewModelSettings extends ViewSettingsBaseCurrencyBase<VariantInfoViewModelSettings> {
    priceSettings?: PriceViewModelSettings | undefined;
    mediaSettings?: MediaViewModelSettings | undefined;

    constructor(data?: VariantInfoViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.priceSettings = _data["PriceSettings"] ? PriceViewModelSettings.fromJS(_data["PriceSettings"]) : <any>undefined;
            this.mediaSettings = _data["MediaSettings"] ? MediaViewModelSettings.fromJS(_data["MediaSettings"]) : <any>undefined;
        }
    }

    static fromJS(data: any): VariantInfoViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new VariantInfoViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["PriceSettings"] = this.priceSettings ? this.priceSettings.toJSON() : <any>undefined;
        data["MediaSettings"] = this.mediaSettings ? this.mediaSettings.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

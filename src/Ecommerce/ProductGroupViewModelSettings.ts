import { MediaViewModelSettings } from './MediaViewModelSettings';
import { FieldValueViewModelSetting } from './FieldValueViewModelSettings';
import { ViewSettingsBaseCurrencyBase } from './ViewSettingsCurrencyBase';

export class ProductGroupViewModelSettings extends ViewSettingsBaseCurrencyBase<ProductGroupViewModelSettings> {
    mediaSettings?: MediaViewModelSettings | undefined;
    fieldSettings?: FieldValueViewModelSetting | undefined;

    constructor(data?: ProductGroupViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.mediaSettings = _data["MediaSettings"] ? MediaViewModelSettings.fromJS(_data["MediaSettings"]) : <any>undefined;
            this.fieldSettings = _data["FieldSettings"] ? FieldValueViewModelSetting.fromJS(_data["FieldSettings"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ProductGroupViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new ProductGroupViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["MediaSettings"] = this.mediaSettings ? this.mediaSettings.toJSON() : <any>undefined;
        data["FieldSettings"] = this.fieldSettings ? this.fieldSettings.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

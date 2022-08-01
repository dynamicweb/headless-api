import { ViewSettingsLanguageBase } from "./ViewSettingsLanguageBase";

export class ManufacturerViewModelSettings extends ViewSettingsLanguageBase<ManufacturerViewModelSettings> {

    constructor(data?: ManufacturerViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
    }

    static fromJS(data: any): ManufacturerViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new ManufacturerViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data;
    }
}

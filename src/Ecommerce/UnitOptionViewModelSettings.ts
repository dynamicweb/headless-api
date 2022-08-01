import { ViewSettingsLanguageBase } from "./ViewSettingsLanguageBase";

export class UnitOptionViewModelSettings extends ViewSettingsLanguageBase<UnitOptionViewModelSettings> {

    constructor(data?: UnitOptionViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
    }

    static fromJS(data: any): UnitOptionViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new UnitOptionViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data;
    }
}

import { ViewSettingsBaseCurrencyBase } from "./ViewSettingsCurrencyBase";

export class GroupInfoViewModelSettings extends ViewSettingsBaseCurrencyBase<GroupInfoViewModelSettings> {

    constructor(data?: GroupInfoViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
    }

    static fromJS(data: any): GroupInfoViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new GroupInfoViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data;
    }
}

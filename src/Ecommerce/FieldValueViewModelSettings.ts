import { ViewSettingsBase } from "../Shared/ViewSettingsBase";

export class FieldValueViewModelSetting extends ViewSettingsBase<FieldValueViewModelSetting> {

    constructor(data?: FieldValueViewModelSetting) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
    }

    static fromJS(data: any): FieldValueViewModelSetting {
        data = typeof data === 'object' ? data : {};
        let result = new FieldValueViewModelSetting();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data;
    }
}

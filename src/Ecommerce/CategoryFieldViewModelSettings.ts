import { ViewSettingsBase } from "../Shared/ViewSettingsBase";

export class CategoryFieldViewModelSetting extends ViewSettingsBase<CategoryFieldViewModelSetting> {

    constructor(data?: CategoryFieldViewModelSetting) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
    }

    static fromJS(data: any): CategoryFieldViewModelSetting {
        data = typeof data === 'object' ? data : {};
        let result = new CategoryFieldViewModelSetting();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data;
    }
}

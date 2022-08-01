import { ViewSettingsBase } from "../Shared/ViewSettingsBase";

export class ViewSettingsLanguageBase<T> extends ViewSettingsBase<T> {
    languageId?: string | undefined;

    constructor(data?: T) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.languageId = _data["LanguageId"];
        }
    }

    // static override fromJS(data: any): ViewSettingsLanguageBase<T> {
    //     data = typeof data === 'object' ? data : {};
    //     let result = new ViewSettingsLanguageBase<T>();
    //     result.init(data);
    //     return result;
    // }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["LanguageId"] = this.languageId;
        super.toJSON(data);
        return data;
    }
}

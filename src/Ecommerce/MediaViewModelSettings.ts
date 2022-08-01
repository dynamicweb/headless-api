import { ViewSettingsBase } from "../Shared/ViewSettingsBase";

export class MediaViewModelSettings extends ViewSettingsBase<MediaViewModelSettings> {

    constructor(data?: MediaViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
    }

    static fromJS(data: any): MediaViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new MediaViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data;
    }
}

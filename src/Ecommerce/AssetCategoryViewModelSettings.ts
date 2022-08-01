import { MediaViewModelSettings } from './MediaViewModelSettings';
import { ViewSettingsLanguageBase } from './ViewSettingsLanguageBase';

export class AssetCategoryViewModelSettings extends ViewSettingsLanguageBase<AssetCategoryViewModelSettings> {
    mediaSettings?: MediaViewModelSettings | undefined;

    constructor(data?: AssetCategoryViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.mediaSettings = _data["MediaSettings"] ? MediaViewModelSettings.fromJS(_data["MediaSettings"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AssetCategoryViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new AssetCategoryViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["MediaSettings"] = this.mediaSettings ? this.mediaSettings.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

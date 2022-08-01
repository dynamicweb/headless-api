import { FillableViewModelBase } from '../Shared/ViewModel';

export class MediaViewModel extends FillableViewModelBase {
    value?: string | undefined;
    name?: string | undefined;
    keywords?: string | undefined;
    displayName?: string | undefined;

    constructor(data?: MediaViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.value = _data["Value"];
            this.name = _data["Name"];
            this.keywords = _data["Keywords"];
            this.displayName = _data["DisplayName"];
        }
    }

    static override fromJS(data: any): MediaViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new MediaViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Value"] = this.value;
        data["Name"] = this.name;
        data["Keywords"] = this.keywords;
        data["DisplayName"] = this.displayName;
        super.toJSON(data);
        return data;
    }
}

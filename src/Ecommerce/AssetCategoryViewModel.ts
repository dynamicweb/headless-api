import { FillableViewModelBase } from "../Shared/ViewModel";
import { MediaViewModel } from './MediaViewModel';

export class AssetCategoryViewModel extends FillableViewModelBase implements AssetCategoryViewModel {
    name?: string | undefined;
    systemName?: string | undefined;
    assets?: MediaViewModel[] | undefined;

    constructor(data?: AssetCategoryViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.name = _data["Name"];
            this.systemName = _data["SystemName"];
            if (Array.isArray(_data["Assets"])) {
                this.assets = [] as any;
                for (let item of _data["Assets"])
                    this.assets!.push(MediaViewModel.fromJS(item));
            }
        }
    }

    static override fromJS(data: any): AssetCategoryViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new AssetCategoryViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Name"] = this.name;
        data["SystemName"] = this.systemName;
        if (Array.isArray(this.assets)) {
            data["Assets"] = [];
            for (let item of this.assets)
                data["Assets"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}

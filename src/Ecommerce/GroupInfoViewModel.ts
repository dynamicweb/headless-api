import { FillableViewModelBase } from "../Shared/ViewModel";

export class GroupInfoViewModel extends FillableViewModelBase {
    id?: string | undefined;
    name?: string | undefined;
    sorting?: number | undefined;
    primaryPageId?: number;

    constructor(data?: GroupInfoViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            this.sorting = _data["Sorting"];
            this.primaryPageId = _data["PrimaryPageId"];
        }
    }

    static override fromJS(data: any): GroupInfoViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new GroupInfoViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["Sorting"] = this.sorting;
        data["PrimaryPageId"] = this.primaryPageId;
        super.toJSON(data);
        return data;
    }
}

import { ViewModelBase } from "../Shared/ViewModel";

export class ItemFieldViewModel extends ViewModelBase {
    name?: string | undefined;
    systemName?: string | undefined;
    value?: any | undefined;

    constructor(data?: ItemFieldViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.name = _data["Name"];
            this.systemName = _data["SystemName"];
            this.value = _data["Value"];
        }
    }

    static override fromJS(data: any): ItemFieldViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new ItemFieldViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Name"] = this.name;
        data["SystemName"] = this.systemName;
        data["Value"] = this.value;
        super.toJSON(data);
        return data;
    }
}

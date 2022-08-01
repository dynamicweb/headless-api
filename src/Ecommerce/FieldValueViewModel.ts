import { FillableViewModelBase } from "../Shared/ViewModel";

export class FieldValueViewModel extends FillableViewModelBase {
    systemName?: string | undefined;
    name?: string | undefined;
    type?: string | undefined;
    value?: any | undefined;
    listType?: number;

    constructor(data?: FieldValueViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.systemName = _data["SystemName"];
            this.name = _data["Name"];
            this.type = _data["Type"];
            this.value = _data["Value"];
            this.listType = _data["ListType"];
        }
    }

    static override fromJS(data: any): FieldValueViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new FieldValueViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["SystemName"] = this.systemName;
        data["Name"] = this.name;
        data["Type"] = this.type;
        data["Value"] = this.value;
        data["ListType"] = this.listType;
        super.toJSON(data);
        return data;
    }
}

export class FieldOptionValueViewModel extends FillableViewModelBase {
    name?: string | undefined;
    value?: string | undefined;

    constructor(data?: FieldOptionValueViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.name = _data["Name"];
            this.value = _data["Value"];
        }
    }

    static override fromJS(data: any): FieldOptionValueViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new FieldOptionValueViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Name"] = this.name;
        data["Value"] = this.value;
        super.toJSON(data);
        return data;
    }
}

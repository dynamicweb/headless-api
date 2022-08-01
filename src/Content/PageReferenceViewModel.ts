import { ViewModelBase } from "../Shared/ViewModel";

export class PageReferenceViewModel extends ViewModelBase {
    iD?: number;
    name?: string | undefined;

    constructor(data?: PageReferenceViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.iD = _data["ID"];
            this.name = _data["Name"];
        }
    }

    static override fromJS(data: any): PageReferenceViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new PageReferenceViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ID"] = this.iD;
        data["Name"] = this.name;
        super.toJSON(data);
        return data;
    }
}

import { FillableViewModelBase } from '../Shared/ViewModel';

export class FacetOptionViewModel extends FillableViewModelBase {
    name?: string | undefined;
    label?: string | undefined;
    value?: string | undefined;
    sort?: number;
    selected?: boolean;
    count?: number;

    constructor(data?: FacetOptionViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.name = _data["Name"];
            this.label = _data["Label"];
            this.value = _data["Value"];
            this.sort = _data["Sort"];
            this.selected = _data["Selected"];
            this.count = _data["Count"];
        }
    }

    static override fromJS(data: any): FacetOptionViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new FacetOptionViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Name"] = this.name;
        data["Label"] = this.label;
        data["Value"] = this.value;
        data["Sort"] = this.sort;
        data["Selected"] = this.selected;
        data["Count"] = this.count;
        super.toJSON(data);
        return data;
    }
}

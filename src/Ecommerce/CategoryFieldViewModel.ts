import { FillableViewModelBase } from '../Shared/ViewModel';
import { FieldValueViewModel } from '../Ecommerce/FieldValueViewModel';

export class CategoryFieldViewModel extends FillableViewModelBase {
    id?: string | undefined;
    name?: string | undefined;
    fields?: { [key: string]: FieldValueViewModel; } | undefined;

    constructor(data?: CategoryFieldViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            if (_data["Fields"]) {
                this.fields = {} as any;
                for (let key in _data["Fields"]) {
                    if (_data["Fields"].hasOwnProperty(key))
                        (<any>this.fields)![key] = _data["Fields"][key] ? FieldValueViewModel.fromJS(_data["Fields"][key]) : new FieldValueViewModel();
                }
            }
        }
    }

    static override fromJS(data: any): CategoryFieldViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new CategoryFieldViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        if (this.fields) {
            data["Fields"] = {};
            for (let key in this.fields) {
                if (this.fields.hasOwnProperty(key))
                    (<any>data["Fields"])[key] = this.fields[key] ? this.fields[key].toJSON() : <any>undefined;
            }
        }
        super.toJSON(data);
        return data;
    }
}

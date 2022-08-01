import { ViewModelBase } from "../Shared/ViewModel";
import { Types } from '../Authentication/Anonymous';
import { CustomFieldOptions } from "./CustomFieldOptions";

export class CustomFieldValueViewModel extends ViewModelBase {
    systemName?: string | undefined;
    tableName?: string | undefined;
    fieldType?: Types;
    name?: string | undefined;
    options?: CustomFieldOptions | undefined;
    sort?: number;
    value?: any | undefined;

    constructor(data?: CustomFieldValueViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.systemName = _data["SystemName"];
            this.tableName = _data["TableName"];
            this.fieldType = _data["FieldType"];
            this.name = _data["Name"];
            this.options = _data["Options"] ? CustomFieldOptions.fromJS(_data["Options"]) : <any>undefined;
            this.sort = _data["Sort"];
            this.value = _data["Value"];
        }
    }

    static override fromJS(data: any): CustomFieldValueViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new CustomFieldValueViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["SystemName"] = this.systemName;
        data["TableName"] = this.tableName;
        data["FieldType"] = this.fieldType;
        data["Name"] = this.name;
        data["Options"] = this.options ? this.options.toJSON() : <any>undefined;
        data["Sort"] = this.sort;
        data["Value"] = this.value;
        super.toJSON(data);
        return data;
    }
}

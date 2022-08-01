import { ViewModelBase } from "../Shared/ViewModel";
import { ItemViewModel } from './ItemViewModel';
import { GridRowDefinition } from "./GridRowDefinition";
import { GridColumnViewModel } from "./GridColumnViewModel";

export class GridRowViewModel extends ViewModelBase {
    id?: number;
    definition?: GridRowDefinition | undefined;
    columns?: GridColumnViewModel[] | undefined;
    templatePath?: string | undefined;
    item?: ItemViewModel | undefined;

    constructor(data?: GridRowViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.definition = _data["Definition"] ? GridRowDefinition.fromJS(_data["Definition"]) : <any>undefined;
            if (Array.isArray(_data["Columns"])) {
                this.columns = [] as any;
                for (let item of _data["Columns"])
                    this.columns!.push(GridColumnViewModel.fromJS(item));
            }
            this.templatePath = _data["TemplatePath"];
            this.item = _data["Item"] ? ItemViewModel.fromJS(_data["Item"]) : <any>undefined;
        }
    }

    static override fromJS(data: any): GridRowViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new GridRowViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["Definition"] = this.definition ? this.definition.toJSON() : <any>undefined;
        if (Array.isArray(this.columns)) {
            data["Columns"] = [];
            for (let item of this.columns)
                data["Columns"].push(item.toJSON());
        }
        data["TemplatePath"] = this.templatePath;
        data["Item"] = this.item ? this.item.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

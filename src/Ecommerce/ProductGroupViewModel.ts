import { GroupInfoViewModel } from '../Ecommerce/GroupInfoViewModel';
import { FieldValueViewModel } from './FieldValueViewModel';
import { MediaViewModel } from './MediaViewModel';

export class ProductGroupViewModel extends GroupInfoViewModel {
    id?: string | undefined;
    name?: string | undefined;
    title?: string | undefined;
    number?: string | undefined;
    description?: string | undefined;
    categorySystemName?: string | undefined;
    categoryName?: string | undefined;
    groupFields?: FieldValueViewModel[] | undefined;
    assets?: MediaViewModel[] | undefined;

    constructor(data?: ProductGroupViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            this.title = _data["Title"];
            this.number = _data["Number"];
            this.description = _data["Description"];
            this.categorySystemName = _data["CategorySystemName"];
            this.categoryName = _data["CategoryName"];
            if (Array.isArray(_data["GroupFields"])) {
                this.groupFields = [] as any;
                for (let item of _data["GroupFields"])
                    this.groupFields!.push(FieldValueViewModel.fromJS(item));
            }
            if (Array.isArray(_data["Assets"])) {
                this.assets = [] as any;
                for (let item of _data["Assets"])
                    this.assets!.push(MediaViewModel.fromJS(item));
            }
        }
    }

    static override fromJS(data: any): ProductGroupViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new ProductGroupViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["Title"] = this.title;
        data["Number"] = this.number;
        data["Description"] = this.description;
        data["CategorySystemName"] = this.categorySystemName;
        data["CategoryName"] = this.categoryName;
        if (Array.isArray(this.groupFields)) {
            data["GroupFields"] = [];
            for (let item of this.groupFields)
                data["GroupFields"].push(item.toJSON());
        }
        if (Array.isArray(this.assets)) {
            data["Assets"] = [];
            for (let item of this.assets)
                data["Assets"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}

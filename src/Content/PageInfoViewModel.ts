import { ViewModelBase } from "../Shared/ViewModel";
import { ItemViewModel } from "./ItemViewModel";
import { PageReferenceViewModel } from "./PageReferenceViewModel";
import { PageLanguageViewModel } from "./PageLanguageViewModel";

export class PageInfoViewModel extends ViewModelBase {
    iD?: number;
    name?: string | undefined;
    createdDate?: Date;
    updatedDate?: Date;
    title?: string | undefined;
    description?: string | undefined;
    keywords?: string | undefined;
    areaID?: number;
    path?: PageReferenceViewModel[] | undefined;
    languages?: PageLanguageViewModel[] | undefined;
    item?: ItemViewModel | undefined;
    propertyItem?: ItemViewModel | undefined;

    constructor(data?: PageInfoViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.iD = _data["ID"];
            this.name = _data["Name"];
            this.createdDate = _data["CreatedDate"] ? new Date(_data["CreatedDate"].toString()) : <any>undefined;
            this.updatedDate = _data["UpdatedDate"] ? new Date(_data["UpdatedDate"].toString()) : <any>undefined;
            this.title = _data["Title"];
            this.description = _data["Description"];
            this.keywords = _data["Keywords"];
            this.areaID = _data["AreaID"];
            if (Array.isArray(_data["Path"])) {
                this.path = [] as any;
                for (let item of _data["Path"])
                    this.path!.push(PageReferenceViewModel.fromJS(item));
            }
            if (Array.isArray(_data["Languages"])) {
                this.languages = [] as any;
                for (let item of _data["Languages"])
                    this.languages!.push(PageLanguageViewModel.fromJS(item));
            }
            this.item = _data["Item"] ? ItemViewModel.fromJS(_data["Item"]) : <any>undefined;
            this.propertyItem = _data["PropertyItem"] ? ItemViewModel.fromJS(_data["PropertyItem"]) : <any>undefined;
        }
    }

    static override fromJS(data: any): PageInfoViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new PageInfoViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ID"] = this.iD;
        data["Name"] = this.name;
        data["CreatedDate"] = this.createdDate ? this.createdDate.toISOString() : <any>undefined;
        data["UpdatedDate"] = this.updatedDate ? this.updatedDate.toISOString() : <any>undefined;
        data["Title"] = this.title;
        data["Description"] = this.description;
        data["Keywords"] = this.keywords;
        data["AreaID"] = this.areaID;
        if (Array.isArray(this.path)) {
            data["Path"] = [];
            for (let item of this.path)
                data["Path"].push(item.toJSON());
        }
        if (Array.isArray(this.languages)) {
            data["Languages"] = [];
            for (let item of this.languages)
                data["Languages"].push(item.toJSON());
        }
        data["Item"] = this.item ? this.item.toJSON() : <any>undefined;
        data["PropertyItem"] = this.propertyItem ? this.propertyItem.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

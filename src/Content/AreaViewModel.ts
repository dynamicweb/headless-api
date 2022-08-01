import { ViewModelBase } from "../Shared/ViewModel";
import { AreaLanguageViewModel } from "./AreaLanguageViewModel";
import { ItemViewModel } from "./ItemViewModel";
import { PageReferenceViewModel } from './PageReferenceViewModel';

export class AreaViewModel extends ViewModelBase {
    cartPage?: PageReferenceViewModel | undefined;
    createdDate?: Date;
    dateFormat?: string | undefined;
    firstActivePage?: PageReferenceViewModel | undefined;
    firstPage?: PageReferenceViewModel | undefined;
    iD?: number;
    item?: ItemViewModel | undefined;
    itemId?: string | undefined;
    itemType?: string | undefined;
    languages?: AreaLanguageViewModel[] | undefined;
    name?: string | undefined;
    searchPage?: PageReferenceViewModel | undefined;
    updatedDate?: Date;

    constructor(data?: AreaViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.cartPage = _data["CartPage"] ? PageReferenceViewModel.fromJS(_data["CartPage"]) : <any>undefined;
            this.createdDate = _data["CreatedDate"] ? new Date(_data["CreatedDate"].toString()) : <any>undefined;
            this.dateFormat = _data["DateFormat"];
            this.firstActivePage = _data["FirstActivePage"] ? PageReferenceViewModel.fromJS(_data["FirstActivePage"]) : <any>undefined;
            this.firstPage = _data["FirstPage"] ? PageReferenceViewModel.fromJS(_data["FirstPage"]) : <any>undefined;
            this.iD = _data["ID"];
            this.item = _data["Item"] ? ItemViewModel.fromJS(_data["Item"]) : <any>undefined;
            this.itemId = _data["ItemId"];
            this.itemType = _data["ItemType"];
            if (Array.isArray(_data["Languages"])) {
                this.languages = [] as any;
                for (let item of _data["Languages"])
                    this.languages!.push(AreaLanguageViewModel.fromJS(item));
            }
            this.name = _data["Name"];
            this.searchPage = _data["SearchPage"] ? PageReferenceViewModel.fromJS(_data["SearchPage"]) : <any>undefined;
            this.updatedDate = _data["UpdatedDate"] ? new Date(_data["UpdatedDate"].toString()) : <any>undefined;
        }
    }

    static override fromJS(data: any): AreaViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new AreaViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["CartPage"] = this.cartPage ? this.cartPage.toJSON() : <any>undefined;
        data["CreatedDate"] = this.createdDate ? this.createdDate.toISOString() : <any>undefined;
        data["DateFormat"] = this.dateFormat;
        data["FirstActivePage"] = this.firstActivePage ? this.firstActivePage.toJSON() : <any>undefined;
        data["FirstPage"] = this.firstPage ? this.firstPage.toJSON() : <any>undefined;
        data["ID"] = this.iD;
        data["Item"] = this.item ? this.item.toJSON() : <any>undefined;
        data["ItemId"] = this.itemId;
        data["ItemType"] = this.itemType;
        if (Array.isArray(this.languages)) {
            data["Languages"] = [];
            for (let item of this.languages)
                data["Languages"].push(item.toJSON());
        }
        data["Name"] = this.name;
        data["SearchPage"] = this.searchPage ? this.searchPage.toJSON() : <any>undefined;
        data["UpdatedDate"] = this.updatedDate ? this.updatedDate.toISOString() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

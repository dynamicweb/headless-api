import { ViewModelBase } from "../Shared/ViewModel";
import { PageReferenceViewModel } from "./PageReferenceViewModel";

export class PageLanguageViewModel extends ViewModelBase {
    iD?: number;
    name?: string | undefined;
    culture?: string | undefined;
    primaryDomain?: string | undefined;
    isCurrent?: boolean;
    isMaster?: boolean;
    page?: PageReferenceViewModel | undefined;
    pageIsHidden?: boolean;
    pageIsPublished?: boolean;
    firstPage?: PageReferenceViewModel | undefined;
    firstActivePage?: PageReferenceViewModel | undefined;

    constructor(data?: PageLanguageViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.iD = _data["ID"];
            this.name = _data["Name"];
            this.culture = _data["Culture"];
            this.primaryDomain = _data["PrimaryDomain"];
            this.isCurrent = _data["IsCurrent"];
            this.isMaster = _data["IsMaster"];
            this.page = _data["Page"] ? PageReferenceViewModel.fromJS(_data["Page"]) : <any>undefined;
            this.pageIsHidden = _data["PageIsHidden"];
            this.pageIsPublished = _data["PageIsPublished"];
            this.firstPage = _data["FirstPage"] ? PageReferenceViewModel.fromJS(_data["FirstPage"]) : <any>undefined;
            this.firstActivePage = _data["FirstActivePage"] ? PageReferenceViewModel.fromJS(_data["FirstActivePage"]) : <any>undefined;
        }
    }

    static override fromJS(data: any): PageLanguageViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new PageLanguageViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ID"] = this.iD;
        data["Name"] = this.name;
        data["Culture"] = this.culture;
        data["PrimaryDomain"] = this.primaryDomain;
        data["IsCurrent"] = this.isCurrent;
        data["IsMaster"] = this.isMaster;
        data["Page"] = this.page ? this.page.toJSON() : <any>undefined;
        data["PageIsHidden"] = this.pageIsHidden;
        data["PageIsPublished"] = this.pageIsPublished;
        data["FirstPage"] = this.firstPage ? this.firstPage.toJSON() : <any>undefined;
        data["FirstActivePage"] = this.firstActivePage ? this.firstActivePage.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

import { ViewModelBase } from "../Shared/ViewModel";
import { PageReferenceViewModel } from "./PageReferenceViewModel";

export class AreaLanguageViewModel extends ViewModelBase {
    culture?: string | undefined;
    firstActivePage?: PageReferenceViewModel | undefined;
    firstPage?: PageReferenceViewModel | undefined;
    iD?: number;
    isCurrent?: boolean;
    isMaster?: boolean;
    name?: string | undefined;
    primaryDomain?: string | undefined;

    constructor(data?: AreaLanguageViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.culture = _data["Culture"];
            this.firstActivePage = _data["FirstActivePage"] ? PageReferenceViewModel.fromJS(_data["FirstActivePage"]) : <any>undefined;
            this.firstPage = _data["FirstPage"] ? PageReferenceViewModel.fromJS(_data["FirstPage"]) : <any>undefined;
            this.iD = _data["ID"];
            this.isCurrent = _data["IsCurrent"];
            this.isMaster = _data["IsMaster"];
            this.name = _data["Name"];
            this.primaryDomain = _data["PrimaryDomain"];
        }
    }

    static override fromJS(data: any): AreaLanguageViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new AreaLanguageViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Culture"] = this.culture;
        data["FirstActivePage"] = this.firstActivePage ? this.firstActivePage.toJSON() : <any>undefined;
        data["FirstPage"] = this.firstPage ? this.firstPage.toJSON() : <any>undefined;
        data["ID"] = this.iD;
        data["IsCurrent"] = this.isCurrent;
        data["IsMaster"] = this.isMaster;
        data["Name"] = this.name;
        data["PrimaryDomain"] = this.primaryDomain;
        super.toJSON(data);
        return data;
    }
}

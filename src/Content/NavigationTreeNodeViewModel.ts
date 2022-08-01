import { ViewModelBase } from "../Shared/ViewModel";

export class NavigationTreeNodeViewModel extends ViewModelBase {
    pageId?: number;
    groupId?: string | undefined;
    name?: string | undefined;
    link?: string | undefined;
    level?: number;
    isClickable?: boolean;
    inPath?: boolean;
    isActive?: boolean;
    showInSitemap?: boolean;
    showInBreadcrumb?: boolean;
    showInMenu?: boolean;
    nodes?: NavigationTreeNodeViewModel[] | undefined;

    constructor(data?: NavigationTreeNodeViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.pageId = _data["PageId"];
            this.groupId = _data["GroupId"];
            this.name = _data["Name"];
            this.link = _data["Link"];
            this.level = _data["Level"];
            this.isClickable = _data["IsClickable"];
            this.inPath = _data["InPath"];
            this.isActive = _data["IsActive"];
            this.showInSitemap = _data["ShowInSitemap"];
            this.showInBreadcrumb = _data["ShowInBreadcrumb"];
            this.showInMenu = _data["ShowInMenu"];
            if (Array.isArray(_data["Nodes"])) {
                this.nodes = [] as any;
                for (let item of _data["Nodes"])
                    this.nodes!.push(NavigationTreeNodeViewModel.fromJS(item));
            }
        }
    }

    static override fromJS(data: any): NavigationTreeNodeViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new NavigationTreeNodeViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["PageId"] = this.pageId;
        data["GroupId"] = this.groupId;
        data["Name"] = this.name;
        data["Link"] = this.link;
        data["Level"] = this.level;
        data["IsClickable"] = this.isClickable;
        data["InPath"] = this.inPath;
        data["IsActive"] = this.isActive;
        data["ShowInSitemap"] = this.showInSitemap;
        data["ShowInBreadcrumb"] = this.showInBreadcrumb;
        data["ShowInMenu"] = this.showInMenu;
        if (Array.isArray(this.nodes)) {
            data["Nodes"] = [];
            for (let item of this.nodes)
                data["Nodes"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}

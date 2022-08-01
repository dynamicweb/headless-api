import { ViewModelBase } from "../Shared/ViewModel";
import { NavigationTreeNodeViewModel } from "./NavigationTreeNodeViewModel";

export class NavigationTreeViewModel extends ViewModelBase {
    nodes?: NavigationTreeNodeViewModel[] | undefined;
    parameters?: { [key: string]: any; } | undefined;

    constructor(data?: NavigationTreeViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            if (Array.isArray(_data["Nodes"])) {
                this.nodes = [] as any;
                for (let item of _data["Nodes"])
                    this.nodes!.push(NavigationTreeNodeViewModel.fromJS(item));
            }
            if (_data["Parameters"]) {
                this.parameters = {} as any;
                for (let key in _data["Parameters"]) {
                    if (_data["Parameters"].hasOwnProperty(key))
                        (<any>this.parameters)![key] = _data["Parameters"][key];
                }
            }
        }
    }

    static override fromJS(data: any): NavigationTreeViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new NavigationTreeViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.nodes)) {
            data["Nodes"] = [];
            for (let item of this.nodes)
                data["Nodes"].push(item.toJSON());
        }
        if (this.parameters) {
            data["Parameters"] = {};
            for (let key in this.parameters) {
                if (this.parameters.hasOwnProperty(key))
                    (<any>data["Parameters"])[key] = (<any>this.parameters)[key];
            }
        }
        super.toJSON(data);
        return data;
    }
}

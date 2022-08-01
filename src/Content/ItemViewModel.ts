import { ViewModelBase } from "../Shared/ViewModel";
import { ItemFieldViewModel } from "./ItemFieldViewModel";

export class ItemViewModel extends ViewModelBase {
    fields?: ItemFieldViewModel[] | undefined;
    id?: string | undefined;
    systemName?: string | undefined;
    pageID?: number;
    paragraphID?: number;
    link?: string | undefined;

    constructor(data?: ItemViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            if (Array.isArray(_data["Fields"])) {
                this.fields = [] as any;
                for (let item of _data["Fields"])
                    this.fields!.push(ItemFieldViewModel.fromJS(item));
            }
            this.id = _data["Id"];
            this.systemName = _data["SystemName"];
            this.pageID = _data["PageID"];
            this.paragraphID = _data["ParagraphID"];
            this.link = _data["Link"];
        }
    }

    static override fromJS(data: any): ItemViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new ItemViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.fields)) {
            data["Fields"] = [];
            for (let item of this.fields)
                data["Fields"].push(item.toJSON());
        }
        data["Id"] = this.id;
        data["SystemName"] = this.systemName;
        data["PageID"] = this.pageID;
        data["ParagraphID"] = this.paragraphID;
        data["Link"] = this.link;
        super.toJSON(data);
        return data;
    }
}

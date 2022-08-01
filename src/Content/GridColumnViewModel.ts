import { ViewModelBase } from "../Shared/ViewModel";
import { ParagraphInfoViewModel } from "./ParagraphInfoViewModel";

export class GridColumnViewModel extends ViewModelBase {
    columnNumber?: number;
    rowColumnCount?: number;
    paragraphId?: number;
    paragraph?: ParagraphInfoViewModel | undefined;

    constructor(data?: GridColumnViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.columnNumber = _data["ColumnNumber"];
            this.rowColumnCount = _data["RowColumnCount"];
            this.paragraphId = _data["ParagraphId"];
            this.paragraph = _data["Paragraph"] ? ParagraphInfoViewModel.fromJS(_data["Paragraph"]) : <any>undefined;
        }
    }

    static override fromJS(data: any): GridColumnViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new GridColumnViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ColumnNumber"] = this.columnNumber;
        data["RowColumnCount"] = this.rowColumnCount;
        data["ParagraphId"] = this.paragraphId;
        data["Paragraph"] = this.paragraph ? this.paragraph.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

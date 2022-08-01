export class GridRowDefinition {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    template?: string | undefined;
    columnCount?: number;
    itemType?: string | undefined;
    thumbnail?: string | undefined;

    constructor(data?: GridRowDefinition) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            this.description = _data["Description"];
            this.template = _data["Template"];
            this.columnCount = _data["ColumnCount"];
            this.itemType = _data["ItemType"];
            this.thumbnail = _data["Thumbnail"];
        }
    }

    static fromJS(data: any): GridRowDefinition {
        data = typeof data === 'object' ? data : {};
        let result = new GridRowDefinition();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["Description"] = this.description;
        data["Template"] = this.template;
        data["ColumnCount"] = this.columnCount;
        data["ItemType"] = this.itemType;
        data["Thumbnail"] = this.thumbnail;
        return data;
    }
}

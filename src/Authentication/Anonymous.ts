export class Anonymous {
    dataType?: Types;
    defaultValue?: any | undefined;

    constructor(data?: Anonymous) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.dataType = _data["DataType"];
            this.defaultValue = _data["DefaultValue"];
        }
    }

    static fromJS(data: any): Anonymous {
        data = typeof data === 'object' ? data : {};
        let result = new Anonymous();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["DataType"] = this.dataType;
        data["DefaultValue"] = this.defaultValue;
        return data;
    }
}

export enum Types {
    Text = "Text",
    LongText = "LongText",
    RichEditor = "RichEditor",
    Number = "Number",
    Date = "Date",
    DateTime = "DateTime",
    File = "File",
    PageLink = "PageLink",
    Boolean = "Boolean",
    DropDown = "DropDown",
    RadioButtonGroup = "RadioButtonGroup",
    Integer = "Integer",
}

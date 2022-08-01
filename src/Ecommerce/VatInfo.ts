export class VatInfo {
    percent?: number;
    percentFormatted?: string | undefined;

    constructor(data?: VatInfo) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.percent = _data["Percent"];
            this.percentFormatted = _data["PercentFormatted"];
        }
    }

    static fromJS(data: any): VatInfo {
        data = typeof data === 'object' ? data : {};
        let result = new VatInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Percent"] = this.percent;
        data["PercentFormatted"] = this.percentFormatted;
        return data;
    }
}

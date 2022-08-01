export class CurrencyInfo {
    symbol?: string | undefined;
    name?: string | undefined;
    rate?: number;

    constructor(data?: CurrencyInfo) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.symbol = _data["Symbol"];
            this.name = _data["Name"];
            this.rate = _data["Rate"];
        }
    }

    static fromJS(data: any): CurrencyInfo {
        data = typeof data === 'object' ? data : {};
        let result = new CurrencyInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Symbol"] = this.symbol;
        data["Name"] = this.name;
        data["Rate"] = this.rate;
        return data;
    }
}

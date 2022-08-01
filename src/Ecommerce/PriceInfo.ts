export class PriceInfo {
    value?: number;
    formatted?: string | undefined;
    formattedNoSymbol?: string | undefined;

    constructor(data?: PriceInfo) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.value = _data["Value"];
            this.formatted = _data["Formatted"];
            this.formattedNoSymbol = _data["FormattedNoSymbol"];
        }
    }

    static fromJS(data: any): PriceInfo {
        data = typeof data === 'object' ? data : {};
        let result = new PriceInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Value"] = this.value;
        data["Formatted"] = this.formatted;
        data["FormattedNoSymbol"] = this.formattedNoSymbol;
        return data;
    }
}

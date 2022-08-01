import { ViewModelBase } from "../Shared/ViewModel";

export class CurrencyViewModel extends ViewModelBase {
    symbol?: string | undefined;
    name?: string | undefined;
    rate?: number;
    code?: string | undefined;
    default?: boolean;

    constructor(data?: CurrencyViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.symbol = _data["Symbol"];
            this.name = _data["Name"];
            this.rate = _data["Rate"];
            this.code = _data["Code"];
            this.default = _data["Default"];
        }
    }

    static override fromJS(data: any): CurrencyViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new CurrencyViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Symbol"] = this.symbol;
        data["Name"] = this.name;
        data["Rate"] = this.rate;
        data["Code"] = this.code;
        data["Default"] = this.default;
        super.toJSON(data);
        return data;
    }
}

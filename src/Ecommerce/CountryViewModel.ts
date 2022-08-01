import { ViewModelBase } from "../Shared/ViewModel";

export class CountryViewModel extends ViewModelBase {
    code2?: string | undefined;
    code3?: string | undefined;
    regionCode?: string | undefined;
    culture?: string | undefined;
    name?: string | undefined;
    vat?: number;

    constructor(data?: CountryViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.code2 = _data["Code2"];
            this.code3 = _data["Code3"];
            this.regionCode = _data["RegionCode"];
            this.culture = _data["Culture"];
            this.name = _data["Name"];
            this.vat = _data["Vat"];
        }
    }

    static override fromJS(data: any): CountryViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new CountryViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Code2"] = this.code2;
        data["Code3"] = this.code3;
        data["RegionCode"] = this.regionCode;
        data["Culture"] = this.culture;
        data["Name"] = this.name;
        data["Vat"] = this.vat;
        super.toJSON(data);
        return data;
    }
}

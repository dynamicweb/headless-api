import { ViewModelBase } from "../Shared/ViewModel";

export class PaymentViewModel extends ViewModelBase {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    icon?: string | undefined;
    code?: string | undefined;
    termsCode?: string | undefined;
    termsDescription?: string | undefined;

    constructor(data?: PaymentViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            this.description = _data["Description"];
            this.icon = _data["Icon"];
            this.code = _data["Code"];
            this.termsCode = _data["TermsCode"];
            this.termsDescription = _data["TermsDescription"];
        }
    }

    static override fromJS(data: any): PaymentViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new PaymentViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["Description"] = this.description;
        data["Icon"] = this.icon;
        data["Code"] = this.code;
        data["TermsCode"] = this.termsCode;
        data["TermsDescription"] = this.termsDescription;
        super.toJSON(data);
        return data;
    }
}

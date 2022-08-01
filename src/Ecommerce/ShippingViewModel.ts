import { ViewModelBase } from "../Shared/ViewModel";

export class ShippingViewModel extends ViewModelBase {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    icon?: string | undefined;
    priceOverMaxWeight?: number;
    freeFeeAmount?: number;
    code?: string | undefined;
    agentCode?: string | undefined;
    agentName?: string | undefined;
    agentServiceCode?: string | undefined;
    agentServiceDescription?: string | undefined;

    constructor(data?: ShippingViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            this.description = _data["Description"];
            this.icon = _data["Icon"];
            this.priceOverMaxWeight = _data["PriceOverMaxWeight"];
            this.freeFeeAmount = _data["FreeFeeAmount"];
            this.code = _data["Code"];
            this.agentCode = _data["AgentCode"];
            this.agentName = _data["AgentName"];
            this.agentServiceCode = _data["AgentServiceCode"];
            this.agentServiceDescription = _data["AgentServiceDescription"];
        }
    }

    static override fromJS(data: any): ShippingViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new ShippingViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["Description"] = this.description;
        data["Icon"] = this.icon;
        data["PriceOverMaxWeight"] = this.priceOverMaxWeight;
        data["FreeFeeAmount"] = this.freeFeeAmount;
        data["Code"] = this.code;
        data["AgentCode"] = this.agentCode;
        data["AgentName"] = this.agentName;
        data["AgentServiceCode"] = this.agentServiceCode;
        data["AgentServiceDescription"] = this.agentServiceDescription;
        super.toJSON(data);
        return data;
    }
}

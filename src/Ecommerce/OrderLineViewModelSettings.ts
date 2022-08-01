import { PriceViewModelSettings } from './PriceViewModelSettings';
import { FieldValueViewModelSetting } from './FieldValueViewModelSettings';
import { GroupInfoViewModelSettings } from './GroupInfoViewModelSettings';
import { ViewSettingsBaseCurrencyBase } from './ViewSettingsCurrencyBase';

export class OrderLineViewModelSettings extends ViewSettingsBaseCurrencyBase<OrderLineViewModelSettings> {
    priceSettings?: PriceViewModelSettings | undefined;
    orderLineFieldSettings?: FieldValueViewModelSetting | undefined;
    groupInfoSettings?: GroupInfoViewModelSettings | undefined;

    constructor(data?: OrderLineViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.priceSettings = _data["PriceSettings"] ? PriceViewModelSettings.fromJS(_data["PriceSettings"]) : <any>undefined;
            this.orderLineFieldSettings = _data["OrderLineFieldSettings"] ? FieldValueViewModelSetting.fromJS(_data["OrderLineFieldSettings"]) : <any>undefined;
            this.groupInfoSettings = _data["GroupInfoSettings"] ? GroupInfoViewModelSettings.fromJS(_data["GroupInfoSettings"]) : <any>undefined;
        }
    }

    static fromJS(data: any): OrderLineViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new OrderLineViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["PriceSettings"] = this.priceSettings ? this.priceSettings.toJSON() : <any>undefined;
        data["OrderLineFieldSettings"] = this.orderLineFieldSettings ? this.orderLineFieldSettings.toJSON() : <any>undefined;
        data["GroupInfoSettings"] = this.groupInfoSettings ? this.groupInfoSettings.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

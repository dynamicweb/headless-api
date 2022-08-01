import { FillableViewModelBase } from "../Shared/ViewModel";
import { MediaViewModel } from "./MediaViewModel";

export class DiscountViewModel extends FillableViewModelBase {
    name?: string | undefined;
    campaignName?: string | undefined;
    campagnDescription?: string | undefined;
    campaignColor?: string | undefined;
    amount?: number;
    percentage?: number;
    currencyCode?: string | undefined;
    voucherCode?: string | undefined;
    voucherListId?: number | undefined;
    validFrom?: Date | undefined;
    validTo?: Date | undefined;
    campaignImage?: MediaViewModel | undefined;

    constructor(data?: DiscountViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.name = _data["Name"];
            this.campaignName = _data["CampaignName"];
            this.campagnDescription = _data["CampagnDescription"];
            this.campaignColor = _data["CampaignColor"];
            this.amount = _data["Amount"];
            this.percentage = _data["Percentage"];
            this.currencyCode = _data["CurrencyCode"];
            this.voucherCode = _data["VoucherCode"];
            this.voucherListId = _data["VoucherListId"];
            this.validFrom = _data["ValidFrom"] ? new Date(_data["ValidFrom"].toString()) : <any>undefined;
            this.validTo = _data["ValidTo"] ? new Date(_data["ValidTo"].toString()) : <any>undefined;
            this.campaignImage = _data["CampaignImage"] ? MediaViewModel.fromJS(_data["CampaignImage"]) : <any>undefined;
        }
    }

    static override fromJS(data: any): DiscountViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new DiscountViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Name"] = this.name;
        data["CampaignName"] = this.campaignName;
        data["CampagnDescription"] = this.campagnDescription;
        data["CampaignColor"] = this.campaignColor;
        data["Amount"] = this.amount;
        data["Percentage"] = this.percentage;
        data["CurrencyCode"] = this.currencyCode;
        data["VoucherCode"] = this.voucherCode;
        data["VoucherListId"] = this.voucherListId;
        data["ValidFrom"] = this.validFrom ? this.validFrom.toISOString() : <any>undefined;
        data["ValidTo"] = this.validTo ? this.validTo.toISOString() : <any>undefined;
        data["CampaignImage"] = this.campaignImage ? this.campaignImage.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

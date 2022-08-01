import { ViewSettingsLanguageBase } from "./ViewSettingsLanguageBase";

export abstract class ViewSettingsBaseCurrencyBase<T> extends ViewSettingsLanguageBase<T> {
    userId?: number;
    showPricesWithVat?: boolean;
    currencyCode?: string | undefined;
    countryCode?: string | undefined;
    shopId?: string | undefined;

    constructor(data?: T) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.userId = _data["UserId"];
            this.showPricesWithVat = _data["ShowPricesWithVat"];
            this.currencyCode = _data["CurrencyCode"];
            this.countryCode = _data["CountryCode"];
            this.shopId = _data["ShopId"];
        }
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["UserId"] = this.userId;
        data["ShowPricesWithVat"] = this.showPricesWithVat;
        data["CurrencyCode"] = this.currencyCode;
        data["CountryCode"] = this.countryCode;
        data["ShopId"] = this.shopId;
        super.toJSON(data);
        return data;
    }
}
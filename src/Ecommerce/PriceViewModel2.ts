import { PriceInfo } from './PriceInfo'
import { VatInfo } from './VatInfo'
import { CurrencyInfo } from './CurrencyInfo'

export class PriceViewModel2 {
    price?: PriceInfo | undefined;
    priceWithVat?: PriceInfo | undefined;
    priceWithoutVat?: PriceInfo | undefined;
    vat?: PriceInfo | undefined;
    vatPercent?: VatInfo | undefined;
    currency?: CurrencyInfo | undefined;

    constructor(data?: PriceViewModel2) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.price = _data["Price"] ? PriceInfo.fromJS(_data["Price"]) : <any>undefined;
            this.priceWithVat = _data["PriceWithVat"] ? PriceInfo.fromJS(_data["PriceWithVat"]) : <any>undefined;
            this.priceWithoutVat = _data["PriceWithoutVat"] ? PriceInfo.fromJS(_data["PriceWithoutVat"]) : <any>undefined;
            this.vat = _data["Vat"] ? PriceInfo.fromJS(_data["Vat"]) : <any>undefined;
            this.vatPercent = _data["VatPercent"] ? VatInfo.fromJS(_data["VatPercent"]) : <any>undefined;
            this.currency = _data["Currency"] ? CurrencyInfo.fromJS(_data["Currency"]) : <any>undefined;
        }
    }

    static fromJS(data: any): PriceViewModel2 {
        data = typeof data === 'object' ? data : {};
        let result = new PriceViewModel2();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Price"] = this.price ? this.price.toJSON() : <any>undefined;
        data["PriceWithVat"] = this.priceWithVat ? this.priceWithVat.toJSON() : <any>undefined;
        data["PriceWithoutVat"] = this.priceWithoutVat ? this.priceWithoutVat.toJSON() : <any>undefined;
        data["Vat"] = this.vat ? this.vat.toJSON() : <any>undefined;
        data["VatPercent"] = this.vatPercent ? this.vatPercent.toJSON() : <any>undefined;
        data["Currency"] = this.currency ? this.currency.toJSON() : <any>undefined;
        return data;
    }
}

import { FillableViewModelBase } from "../Shared/ViewModel";

export class PriceViewModel extends FillableViewModelBase {
    showPricesWithVat?: boolean;
    price?: number;
    priceFormatted?: string | undefined;
    priceWithoutVat?: number;
    priceWithoutVatFormatted?: string | undefined;
    priceWithVat?: number;
    priceWithVatFormatted?: string | undefined;
    vat?: number;
    vatFormatted?: string | undefined;
    vATPercent?: number;
    vATPercentFormatted?: string | undefined;
    currencyCode?: string | undefined;

    constructor(data?: PriceViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.showPricesWithVat = _data["ShowPricesWithVat"];
            this.price = _data["Price"];
            this.priceFormatted = _data["PriceFormatted"];
            this.priceWithoutVat = _data["PriceWithoutVat"];
            this.priceWithoutVatFormatted = _data["PriceWithoutVatFormatted"];
            this.priceWithVat = _data["PriceWithVat"];
            this.priceWithVatFormatted = _data["PriceWithVatFormatted"];
            this.vat = _data["Vat"];
            this.vatFormatted = _data["VatFormatted"];
            this.vATPercent = _data["VATPercent"];
            this.vATPercentFormatted = _data["VATPercentFormatted"];
            this.currencyCode = _data["CurrencyCode"];
        }
    }

    static override fromJS(data: any): PriceViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new PriceViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ShowPricesWithVat"] = this.showPricesWithVat;
        data["Price"] = this.price;
        data["PriceFormatted"] = this.priceFormatted;
        data["PriceWithoutVat"] = this.priceWithoutVat;
        data["PriceWithoutVatFormatted"] = this.priceWithoutVatFormatted;
        data["PriceWithVat"] = this.priceWithVat;
        data["PriceWithVatFormatted"] = this.priceWithVatFormatted;
        data["Vat"] = this.vat;
        data["VatFormatted"] = this.vatFormatted;
        data["VATPercent"] = this.vATPercent;
        data["VATPercentFormatted"] = this.vATPercentFormatted;
        data["CurrencyCode"] = this.currencyCode;
        super.toJSON(data);
        return data;
    }
}

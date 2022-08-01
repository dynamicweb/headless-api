import { ViewModelBase } from "../Shared/ViewModel";
import { AreaLanguageViewModel } from "./AreaLanguageViewModel";
import { ItemViewModel } from "./ItemViewModel";

export class AreaInfoViewModel extends ViewModelBase {
    iD?: number;
    name?: string | undefined;
    createdDate?: Date;
    updatedDate?: Date;
    item?: ItemViewModel | undefined;
    languages?: AreaLanguageViewModel[] | undefined;
    domains?: string[] | undefined;
    primaryDomain?: string | undefined;
    ecomCountryCode?: string | undefined;
    ecomCurrencyCode?: string | undefined;
    ecomLanguageId?: string | undefined;
    ecomPricesWithVat?: boolean;
    ecomShopId?: string | undefined;

    constructor(data?: AreaInfoViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.iD = _data["ID"];
            this.name = _data["Name"];
            this.createdDate = _data["CreatedDate"] ? new Date(_data["CreatedDate"].toString()) : <any>undefined;
            this.updatedDate = _data["UpdatedDate"] ? new Date(_data["UpdatedDate"].toString()) : <any>undefined;
            this.item = _data["Item"] ? ItemViewModel.fromJS(_data["Item"]) : <any>undefined;
            if (Array.isArray(_data["Languages"])) {
                this.languages = [] as any;
                for (let item of _data["Languages"])
                    this.languages!.push(AreaLanguageViewModel.fromJS(item));
            }
            if (Array.isArray(_data["Domains"])) {
                this.domains = [] as any;
                for (let item of _data["Domains"])
                    this.domains!.push(item);
            }
            this.primaryDomain = _data["PrimaryDomain"];
            this.ecomCountryCode = _data["EcomCountryCode"];
            this.ecomCurrencyCode = _data["EcomCurrencyCode"];
            this.ecomLanguageId = _data["EcomLanguageId"];
            this.ecomPricesWithVat = _data["EcomPricesWithVat"];
            this.ecomShopId = _data["EcomShopId"];
        }
    }

    static override fromJS(data: any): AreaInfoViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new AreaInfoViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ID"] = this.iD;
        data["Name"] = this.name;
        data["CreatedDate"] = this.createdDate ? this.createdDate.toISOString() : <any>undefined;
        data["UpdatedDate"] = this.updatedDate ? this.updatedDate.toISOString() : <any>undefined;
        data["Item"] = this.item ? this.item.toJSON() : <any>undefined;
        if (Array.isArray(this.languages)) {
            data["Languages"] = [];
            for (let item of this.languages)
                data["Languages"].push(item.toJSON());
        }
        if (Array.isArray(this.domains)) {
            data["Domains"] = [];
            for (let item of this.domains)
                data["Domains"].push(item);
        }
        data["PrimaryDomain"] = this.primaryDomain;
        data["EcomCountryCode"] = this.ecomCountryCode;
        data["EcomCurrencyCode"] = this.ecomCurrencyCode;
        data["EcomLanguageId"] = this.ecomLanguageId;
        data["EcomPricesWithVat"] = this.ecomPricesWithVat;
        data["EcomShopId"] = this.ecomShopId;
        super.toJSON(data);
        return data;
    }
}

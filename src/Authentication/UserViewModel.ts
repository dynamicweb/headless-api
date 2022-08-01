import { ViewModelBase } from "../Shared/ViewModel";
import { GeoLocation } from '../Shared/GeoLocation';
import { CustomFieldValueViewModel } from "./CustomFieldValueViewModel";

export class UserViewModel extends ViewModelBase {
    address?: string | undefined;
    address2?: string | undefined;
    location?: GeoLocation | undefined;
    city?: string | undefined;
    company?: string | undefined;
    country?: string | undefined;
    countryCode?: string | undefined;
    currency?: string | undefined;
    shopID?: string | undefined;
    stockLocationID?: number | undefined;
    customerNumber?: string | undefined;
    department?: string | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    houseNumber?: string | undefined;
    iD?: number;
    image?: string | undefined;
    jobTitle?: string | undefined;
    lastName?: string | undefined;
    middleName?: string | undefined;
    name?: string | undefined;
    phone?: string | undefined;
    phoneBusiness?: string | undefined;
    phoneMobile?: string | undefined;
    phonePrivate?: string | undefined;
    state?: string | undefined;
    title?: string | undefined;
    userName?: string | undefined;
    zip?: string | undefined;
    externalID?: string | undefined;
    customFields?: { [key: string]: CustomFieldValueViewModel; } | undefined;
    addressCustomFields?: { [key: string]: CustomFieldValueViewModel; } | undefined;

    constructor(data?: UserViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.address = _data["Address"];
            this.address2 = _data["Address2"];
            this.location = _data["Location"] ? GeoLocation.fromJS(_data["Location"]) : <any>undefined;
            this.city = _data["City"];
            this.company = _data["Company"];
            this.country = _data["Country"];
            this.countryCode = _data["CountryCode"];
            this.currency = _data["Currency"];
            this.shopID = _data["ShopID"];
            this.stockLocationID = _data["StockLocationID"];
            this.customerNumber = _data["CustomerNumber"];
            this.department = _data["Department"];
            this.email = _data["Email"];
            this.firstName = _data["FirstName"];
            this.houseNumber = _data["HouseNumber"];
            this.iD = _data["ID"];
            this.image = _data["Image"];
            this.jobTitle = _data["JobTitle"];
            this.lastName = _data["LastName"];
            this.middleName = _data["MiddleName"];
            this.name = _data["Name"];
            this.phone = _data["Phone"];
            this.phoneBusiness = _data["PhoneBusiness"];
            this.phoneMobile = _data["PhoneMobile"];
            this.phonePrivate = _data["PhonePrivate"];
            this.state = _data["State"];
            this.title = _data["Title"];
            this.userName = _data["UserName"];
            this.zip = _data["Zip"];
            this.externalID = _data["ExternalID"];
            if (_data["CustomFields"]) {
                this.customFields = {} as any;
                for (let key in _data["CustomFields"]) {
                    if (_data["CustomFields"].hasOwnProperty(key))
                        (<any>this.customFields)![key] = _data["CustomFields"][key] ? CustomFieldValueViewModel.fromJS(_data["CustomFields"][key]) : new CustomFieldValueViewModel();
                }
            }
            if (_data["AddressCustomFields"]) {
                this.addressCustomFields = {} as any;
                for (let key in _data["AddressCustomFields"]) {
                    if (_data["AddressCustomFields"].hasOwnProperty(key))
                        (<any>this.addressCustomFields)![key] = _data["AddressCustomFields"][key] ? CustomFieldValueViewModel.fromJS(_data["AddressCustomFields"][key]) : new CustomFieldValueViewModel();
                }
            }
        }
    }

    static override fromJS(data: any): UserViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new UserViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Address"] = this.address;
        data["Address2"] = this.address2;
        data["Location"] = this.location ? this.location.toJSON() : <any>undefined;
        data["City"] = this.city;
        data["Company"] = this.company;
        data["Country"] = this.country;
        data["CountryCode"] = this.countryCode;
        data["Currency"] = this.currency;
        data["ShopID"] = this.shopID;
        data["StockLocationID"] = this.stockLocationID;
        data["CustomerNumber"] = this.customerNumber;
        data["Department"] = this.department;
        data["Email"] = this.email;
        data["FirstName"] = this.firstName;
        data["HouseNumber"] = this.houseNumber;
        data["ID"] = this.iD;
        data["Image"] = this.image;
        data["JobTitle"] = this.jobTitle;
        data["LastName"] = this.lastName;
        data["MiddleName"] = this.middleName;
        data["Name"] = this.name;
        data["Phone"] = this.phone;
        data["PhoneBusiness"] = this.phoneBusiness;
        data["PhoneMobile"] = this.phoneMobile;
        data["PhonePrivate"] = this.phonePrivate;
        data["State"] = this.state;
        data["Title"] = this.title;
        data["UserName"] = this.userName;
        data["Zip"] = this.zip;
        data["ExternalID"] = this.externalID;
        if (this.customFields) {
            data["CustomFields"] = {};
            for (let key in this.customFields) {
                if (this.customFields.hasOwnProperty(key))
                    (<any>data["CustomFields"])[key] = this.customFields[key] ? this.customFields[key].toJSON() : <any>undefined;
            }
        }
        if (this.addressCustomFields) {
            data["AddressCustomFields"] = {};
            for (let key in this.addressCustomFields) {
                if (this.addressCustomFields.hasOwnProperty(key))
                    (<any>data["AddressCustomFields"])[key] = this.addressCustomFields[key] ? this.addressCustomFields[key].toJSON() : <any>undefined;
            }
        }
        super.toJSON(data);
        return data;
    }
}

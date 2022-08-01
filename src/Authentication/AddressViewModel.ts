export class AddressViewModel {
    company?: string | undefined;
    name?: string | undefined;
    address?: string | undefined;
    address2?: string | undefined;
    zip?: string | undefined;
    city?: string | undefined;
    countryCode?: string | undefined;
    state?: string | undefined;
    phone?: string | undefined;
    mobile?: string | undefined;
    email?: string | undefined;
    isDefault?: boolean;

    constructor(data?: AddressViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.company = _data["Company"];
            this.name = _data["Name"];
            this.address = _data["Address"];
            this.address2 = _data["Address2"];
            this.zip = _data["Zip"];
            this.city = _data["City"];
            this.countryCode = _data["CountryCode"];
            this.state = _data["State"];
            this.phone = _data["Phone"];
            this.mobile = _data["Mobile"];
            this.email = _data["Email"];
            this.isDefault = _data["IsDefault"];
        }
    }

    static fromJS(data: any): AddressViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new AddressViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Company"] = this.company;
        data["Name"] = this.name;
        data["Address"] = this.address;
        data["Address2"] = this.address2;
        data["Zip"] = this.zip;
        data["City"] = this.city;
        data["CountryCode"] = this.countryCode;
        data["State"] = this.state;
        data["Phone"] = this.phone;
        data["Mobile"] = this.mobile;
        data["Email"] = this.email;
        data["IsDefault"] = this.isDefault;
        return data;
    }
}

import { FillableViewModelBase } from '../Shared/ViewModel';

export class ManufacturerViewModel extends FillableViewModelBase {
    id?: string | undefined;
    name?: string | undefined;
    address?: string | undefined;
    zipCode?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
    phone?: string | undefined;
    fax?: string | undefined;
    email?: string | undefined;
    web?: string | undefined;
    logo?: string | undefined;
    description?: string | undefined;

    constructor(data?: ManufacturerViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            this.address = _data["Address"];
            this.zipCode = _data["ZipCode"];
            this.city = _data["City"];
            this.country = _data["Country"];
            this.phone = _data["Phone"];
            this.fax = _data["Fax"];
            this.email = _data["Email"];
            this.web = _data["Web"];
            this.logo = _data["Logo"];
            this.description = _data["Description"];
        }
    }

    static override fromJS(data: any): ManufacturerViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new ManufacturerViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["Address"] = this.address;
        data["ZipCode"] = this.zipCode;
        data["City"] = this.city;
        data["Country"] = this.country;
        data["Phone"] = this.phone;
        data["Fax"] = this.fax;
        data["Email"] = this.email;
        data["Web"] = this.web;
        data["Logo"] = this.logo;
        data["Description"] = this.description;
        super.toJSON(data);
        return data;
    }
}

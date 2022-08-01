export class GeoLocation {
    lat?: number;
    lng?: number;

    constructor(data?: GeoLocation) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.lat = _data["Lat"];
            this.lng = _data["Lng"];
        }
    }

    static fromJS(data: any): GeoLocation {
        data = typeof data === 'object' ? data : {};
        let result = new GeoLocation();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Lat"] = this.lat;
        data["Lng"] = this.lng;
        return data;
    }
}

export abstract class ViewSettingsBase<T> {
    filledProperties?: string[] | undefined;

    constructor(data?: T) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["FilledProperties"])) {
                this.filledProperties = [] as any;
                for (let item of _data["FilledProperties"])
                    this.filledProperties!.push(item);
            }
        }
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.filledProperties)) {
            data["FilledProperties"] = [];
            for (let item of this.filledProperties)
                data["FilledProperties"].push(item);
        }
        return data;
    }
}

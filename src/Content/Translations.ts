export class KeyCollection {

    [key: string]: Key | any;

    constructor(data?: KeyCollection) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
        }
    }

    static fromJS(data: any): KeyCollection {
        data = typeof data === 'object' ? data : {};
        let result = new KeyCollection();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        return data;
    }
}

export class Key {
    name?: string | undefined;
    scope?: KeyScope;
    defaultValue?: string | undefined;
    translations?: TranslationEntryCollection | undefined;
    tagDefinitions?: string[] | undefined;

    constructor(data?: Key) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["Name"];
            this.scope = _data["Scope"];
            this.defaultValue = _data["DefaultValue"];
            this.translations = _data["Translations"] ? TranslationEntryCollection.fromJS(_data["Translations"]) : <any>undefined;
            if (Array.isArray(_data["TagDefinitions"])) {
                this.tagDefinitions = [] as any;
                for (let item of _data["TagDefinitions"])
                    this.tagDefinitions!.push(item);
            }
        }
    }

    static fromJS(data: any): Key {
        data = typeof data === 'object' ? data : {};
        let result = new Key();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Name"] = this.name;
        data["Scope"] = this.scope;
        data["DefaultValue"] = this.defaultValue;
        data["Translations"] = this.translations ? this.translations.toJSON() : <any>undefined;
        if (Array.isArray(this.tagDefinitions)) {
            data["TagDefinitions"] = [];
            for (let item of this.tagDefinitions)
                data["TagDefinitions"].push(item);
        }
        return data;
    }
}

export enum KeyScope {
    DesignsShared = "DesignsShared",
    DesignsLocal = "DesignsLocal",
    Global = "Global",
    Local = "Local",
    Backend = "Backend",
}

export class TranslationEntryCollection {

    [key: string]: TranslationEntry | any;

    constructor(data?: TranslationEntryCollection) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
        }
    }

    static fromJS(data: any): TranslationEntryCollection {
        data = typeof data === 'object' ? data : {};
        let result = new TranslationEntryCollection();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        return data;
    }
}

export class TranslationEntry {
    cultureName?: string | undefined;
    value?: string | undefined;

    constructor(data?: TranslationEntry) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.cultureName = _data["CultureName"];
            this.value = _data["Value"];
        }
    }

    static fromJS(data: any): TranslationEntry {
        data = typeof data === 'object' ? data : {};
        let result = new TranslationEntry();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["CultureName"] = this.cultureName;
        data["Value"] = this.value;
        return data;
    }
}

/** Represents a translation of a key and its default fallback value */
export class Translation {
    /** The translation key */
    key?: string | undefined;
    /** The default value to use if no translation (value) exists */
    defaultValue?: string | undefined;
    /** The translation for the culture of the specified key */
    value?: string | undefined;

    constructor(data?: Translation) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.key = _data["Key"];
            this.defaultValue = _data["DefaultValue"];
            this.value = _data["Value"];
        }
    }

    static fromJS(data: any): Translation {
        data = typeof data === 'object' ? data : {};
        let result = new Translation();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Key"] = this.key;
        data["DefaultValue"] = this.defaultValue;
        data["Value"] = this.value;
        return data;
    }
}

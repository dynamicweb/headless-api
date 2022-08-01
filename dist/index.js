function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Authentication", () => $914fbfe7c704099f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Content", () => $762b8804f5fc49b5$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Ecommerce", () => $129fc47832c86555$export$2e2bcd8739ae039);
class $b61db8281f049cc2$export$8f6e4be34af2779b {
    constructor(configuration){}
    getBaseUrl(input, baseUrl) {
        return baseUrl || "";
    }
}


function $b483d2957f8ca2c2$export$de0c4a986b439e52(message, status, response, headers, result) {
    if (result !== null && result !== undefined) throw result;
    else throw new $b483d2957f8ca2c2$export$96fc0f3bebede439(message, status, response, headers, null);
}
class $b483d2957f8ca2c2$export$96fc0f3bebede439 extends Error {
    constructor(message, status, response, headers, result){
        super();
        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }
    isApiException = true;
    static isApiException(obj) {
        return obj.isApiException === true;
    }
}


class $21e84c49e74cfc72$export$a66da012ed2ad4db {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
        if (_data) this.token = _data["Token"];
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $21e84c49e74cfc72$export$a66da012ed2ad4db();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Token"] = this.token;
        return data;
    }
}


class $e51021a3000cb610$export$86cdebf7c744b08f {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
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
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $e51021a3000cb610$export$86cdebf7c744b08f();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
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


class $0b2832c981de5e4c$export$9081fc5a5abbafb5 {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {}
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        throw new Error("The abstract class 'ViewModelBase' cannot be instantiated.");
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        return data;
    }
}
class $0b2832c981de5e4c$export$56d724b3d6ab4309 extends $0b2832c981de5e4c$export$9081fc5a5abbafb5 {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        throw new Error("The abstract class 'FillableViewModelBase' cannot be instantiated.");
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        super.toJSON(data);
        return data;
    }
}


class $002506f51e284177$export$476ba50ca24afb42 {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
        if (_data) {
            this.lat = _data["Lat"];
            this.lng = _data["Lng"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $002506f51e284177$export$476ba50ca24afb42();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Lat"] = this.lat;
        data["Lng"] = this.lng;
        return data;
    }
}



class $b326634bfc3c4d43$export$e1bb774e9664e700 {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
        if (_data) {
            this.dataType = _data["DataType"];
            this.defaultValue = _data["DefaultValue"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $b326634bfc3c4d43$export$e1bb774e9664e700();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["DataType"] = this.dataType;
        data["DefaultValue"] = this.defaultValue;
        return data;
    }
}
let $b326634bfc3c4d43$export$4624c240901a6889;
(function(Types1) {
    Types1["Text"] = "Text";
    Types1["LongText"] = "LongText";
    Types1["RichEditor"] = "RichEditor";
    Types1["Number"] = "Number";
    Types1["Date"] = "Date";
    Types1["DateTime"] = "DateTime";
    Types1["File"] = "File";
    Types1["PageLink"] = "PageLink";
    Types1["Boolean"] = "Boolean";
    Types1["DropDown"] = "DropDown";
    Types1["RadioButtonGroup"] = "RadioButtonGroup";
    Types1["Integer"] = "Integer";
})($b326634bfc3c4d43$export$4624c240901a6889 || ($b326634bfc3c4d43$export$4624c240901a6889 = {}));


class $ab9b8c7e4821f6a2$export$91675e6589fc4da7 extends (0, $b326634bfc3c4d43$export$e1bb774e9664e700) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $ab9b8c7e4821f6a2$export$91675e6589fc4da7();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        super.toJSON(data);
        return data;
    }
}


class $4bf4961f2cfdbdaf$export$e949d48bc8e11763 extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.systemName = _data["SystemName"];
            this.tableName = _data["TableName"];
            this.fieldType = _data["FieldType"];
            this.name = _data["Name"];
            this.options = _data["Options"] ? (0, $ab9b8c7e4821f6a2$export$91675e6589fc4da7).fromJS(_data["Options"]) : undefined;
            this.sort = _data["Sort"];
            this.value = _data["Value"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $4bf4961f2cfdbdaf$export$e949d48bc8e11763();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["SystemName"] = this.systemName;
        data["TableName"] = this.tableName;
        data["FieldType"] = this.fieldType;
        data["Name"] = this.name;
        data["Options"] = this.options ? this.options.toJSON() : undefined;
        data["Sort"] = this.sort;
        data["Value"] = this.value;
        super.toJSON(data);
        return data;
    }
}


class $c2ce1d25998eb389$export$88f615852494efb2 extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.address = _data["Address"];
            this.address2 = _data["Address2"];
            this.location = _data["Location"] ? (0, $002506f51e284177$export$476ba50ca24afb42).fromJS(_data["Location"]) : undefined;
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
                this.customFields = {};
                for(let key in _data["CustomFields"])if (_data["CustomFields"].hasOwnProperty(key)) this.customFields[key] = _data["CustomFields"][key] ? (0, $4bf4961f2cfdbdaf$export$e949d48bc8e11763).fromJS(_data["CustomFields"][key]) : new (0, $4bf4961f2cfdbdaf$export$e949d48bc8e11763)();
            }
            if (_data["AddressCustomFields"]) {
                this.addressCustomFields = {};
                for(let key in _data["AddressCustomFields"])if (_data["AddressCustomFields"].hasOwnProperty(key)) this.addressCustomFields[key] = _data["AddressCustomFields"][key] ? (0, $4bf4961f2cfdbdaf$export$e949d48bc8e11763).fromJS(_data["AddressCustomFields"][key]) : new (0, $4bf4961f2cfdbdaf$export$e949d48bc8e11763)();
            }
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $c2ce1d25998eb389$export$88f615852494efb2();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Address"] = this.address;
        data["Address2"] = this.address2;
        data["Location"] = this.location ? this.location.toJSON() : undefined;
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
            for(let key in this.customFields)if (this.customFields.hasOwnProperty(key)) data["CustomFields"][key] = this.customFields[key] ? this.customFields[key].toJSON() : undefined;
        }
        if (this.addressCustomFields) {
            data["AddressCustomFields"] = {};
            for(let key in this.addressCustomFields)if (this.addressCustomFields.hasOwnProperty(key)) data["AddressCustomFields"][key] = this.addressCustomFields[key] ? this.addressCustomFields[key].toJSON() : undefined;
        }
        super.toJSON(data);
        return data;
    }
}


class $ae89b328a625b57e$export$e3378d92d7ea84e extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Gets authenticates the user and returns a token for further access - the token has a default expiration of 1800 seconds/30 minutes
     * @param shopid (optional) 
     * @param expirationInSeconds (optional) 
     * @return User authenticated
     */ authenticate(userName, password, shopid, expirationInSeconds) {
        let url_ = this.baseUrl + "/dwapi/users/authenticate?";
        if (userName === undefined) throw new Error("The parameter 'userName' must be defined.");
        else if (userName !== null) url_ += "userName=" + encodeURIComponent("" + userName) + "&";
        if (password === undefined) throw new Error("The parameter 'password' must be defined.");
        else if (password !== null) url_ += "password=" + encodeURIComponent("" + password) + "&";
        if (shopid !== undefined && shopid !== null) url_ += "shopid=" + encodeURIComponent("" + shopid) + "&";
        if (expirationInSeconds === null) throw new Error("The parameter 'expirationInSeconds' cannot be null.");
        else if (expirationInSeconds !== undefined) url_ += "expirationInSeconds=" + encodeURIComponent("" + expirationInSeconds) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processAuthenticate(_response);
        });
    }
    processAuthenticate(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $21e84c49e74cfc72$export$a66da012ed2ad4db).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Username or password is not valid", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Unable to create JWT for user", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Refreshses the authentication token from a previoues authentication. Send the initial token as a bearer token. The returned renewed token has a default expiration of 1800 seconds/30 minutes
     * @param expirationInSeconds (optional) 
     * @return User authenticated
     */ refresh(expirationInSeconds) {
        let url_ = this.baseUrl + "/dwapi/users/authenticate/refresh?";
        if (expirationInSeconds === null) throw new Error("The parameter 'expirationInSeconds' cannot be null.");
        else if (expirationInSeconds !== undefined) url_ += "expirationInSeconds=" + encodeURIComponent("" + expirationInSeconds) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processRefresh(_response);
        });
    }
    processRefresh(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $21e84c49e74cfc72$export$a66da012ed2ad4db).fromJS(resultData200);
            return result200;
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Token could not be authorized\nor\nToken expired", status, _responseText, _headers);
        });
        else if (status === 400) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Something is wrong with the JWT string", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Changes the password of the current logged in user. Password will be hashed and fail if password requirements are not met.
     * @param newPassword The new password for the user
     * @return Password changed
     */ resetpassword(newPassword) {
        let url_ = this.baseUrl + "/dwapi/users/password/reset?";
        if (newPassword === undefined) throw new Error("The parameter 'newPassword' must be defined.");
        else if (newPassword !== null) url_ += "newPassword=" + encodeURIComponent("" + newPassword) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "PATCH",
            headers: {}
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processResetpassword(_response);
        });
    }
    processResetpassword(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            return;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The user is not found.", status, _responseText, _headers);
        });
        else if (status === 400) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Password not accepted: {reason}", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Get adresses for the currently logged in user
     * @return OK
     */ getAddresses() {
        let url_ = this.baseUrl + "/dwapi/users/addresses";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetAddresses(_response);
        });
    }
    processGetAddresses(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $e51021a3000cb610$export$86cdebf7c744b08f).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The user is not found.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Get user info of the currently logged in user
     * @return OK
     */ getUserInfo() {
        let url_ = this.baseUrl + "/dwapi/users/info";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetUserInfo(_response);
        });
    }
    processGetUserInfo(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $c2ce1d25998eb389$export$88f615852494efb2).fromJS(resultData200);
            return result200;
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The user could not be saved. Username or email has to be specified. If username is specified, it has to be unique. Password requirements must be met.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Updates the current logged in user. The update is partial so only submitted properties are updated
     * @param userModel Parameters for the cart, see UserViewModel
     * @return OK
     */ patch(userModel) {
        let url_ = this.baseUrl + "/dwapi/users/info";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(userModel);
        let options_ = {
            body: content_,
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processPatch(_response);
        });
    }
    processPatch(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $c2ce1d25998eb389$export$88f615852494efb2).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The user is not found.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The user could not be saved. Username or email has to be specified. If username is specified, it has to be unique. Password requirements must be met.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Updates the current logged in user. The update is a full update so all properties of the user will be overriden.
     * @param userModel Parameters for the cart, see UserViewModel
     * @return OK
     */ put(userModel) {
        let url_ = this.baseUrl + "/dwapi/users/info";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(userModel);
        let options_ = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processPut(_response);
        });
    }
    processPut(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $c2ce1d25998eb389$export$88f615852494efb2).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The user is not found.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Updates the current logged in user. The update is partial so only submitted properties are updated
     * @param userModel Parameters for the cart, see UserViewModel
     * @return User created
     */ create(userModel) {
        let url_ = this.baseUrl + "/dwapi/users/create";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(userModel);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processCreate(_response);
        });
    }
    processCreate(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $c2ce1d25998eb389$export$88f615852494efb2).fromJS(resultData200);
            return result200;
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The user could not be saved. Username or email has to be specified. If username is specified, it has to be unique. Password requirements must be met.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Creates recipient tokens for specified recipient emails.
     * @param recipientEmails The list of email addresses to be used for sending exported products for  and
     * @return Tokens created
     */ createRecipients(recipientEmails) {
        let url_ = this.baseUrl + "/dwapi/users/createRecipients";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(recipientEmails);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processCreateRecipients(_response);
        });
    }
    processCreateRecipients(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [];
                for (let item of resultData200)result200.push(item);
            } else result200 = null;
            return result200;
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}


var $914fbfe7c704099f$export$2e2bcd8739ae039 = {
    UsersClient: $ae89b328a625b57e$export$e3378d92d7ea84e
};







class $c66a426275fe261c$export$c78ffd8783cb7b2c extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.iD = _data["ID"];
            this.name = _data["Name"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $c66a426275fe261c$export$c78ffd8783cb7b2c();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["ID"] = this.iD;
        data["Name"] = this.name;
        super.toJSON(data);
        return data;
    }
}


class $6bda2d71703cb2a5$export$9bebe57d18a7d1f6 extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.culture = _data["Culture"];
            this.firstActivePage = _data["FirstActivePage"] ? (0, $c66a426275fe261c$export$c78ffd8783cb7b2c).fromJS(_data["FirstActivePage"]) : undefined;
            this.firstPage = _data["FirstPage"] ? (0, $c66a426275fe261c$export$c78ffd8783cb7b2c).fromJS(_data["FirstPage"]) : undefined;
            this.iD = _data["ID"];
            this.isCurrent = _data["IsCurrent"];
            this.isMaster = _data["IsMaster"];
            this.name = _data["Name"];
            this.primaryDomain = _data["PrimaryDomain"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $6bda2d71703cb2a5$export$9bebe57d18a7d1f6();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Culture"] = this.culture;
        data["FirstActivePage"] = this.firstActivePage ? this.firstActivePage.toJSON() : undefined;
        data["FirstPage"] = this.firstPage ? this.firstPage.toJSON() : undefined;
        data["ID"] = this.iD;
        data["IsCurrent"] = this.isCurrent;
        data["IsMaster"] = this.isMaster;
        data["Name"] = this.name;
        data["PrimaryDomain"] = this.primaryDomain;
        super.toJSON(data);
        return data;
    }
}




class $d563023b1714f363$export$be87d9e401b80f33 extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.name = _data["Name"];
            this.systemName = _data["SystemName"];
            this.value = _data["Value"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $d563023b1714f363$export$be87d9e401b80f33();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Name"] = this.name;
        data["SystemName"] = this.systemName;
        data["Value"] = this.value;
        super.toJSON(data);
        return data;
    }
}


class $0779da14532307cc$export$7edd97445626b06b extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            if (Array.isArray(_data["Fields"])) {
                this.fields = [];
                for (let item of _data["Fields"])this.fields.push((0, $d563023b1714f363$export$be87d9e401b80f33).fromJS(item));
            }
            this.id = _data["Id"];
            this.systemName = _data["SystemName"];
            this.pageID = _data["PageID"];
            this.paragraphID = _data["ParagraphID"];
            this.link = _data["Link"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $0779da14532307cc$export$7edd97445626b06b();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        if (Array.isArray(this.fields)) {
            data["Fields"] = [];
            for (let item of this.fields)data["Fields"].push(item.toJSON());
        }
        data["Id"] = this.id;
        data["SystemName"] = this.systemName;
        data["PageID"] = this.pageID;
        data["ParagraphID"] = this.paragraphID;
        data["Link"] = this.link;
        super.toJSON(data);
        return data;
    }
}


class $4778102b8b734b92$export$5d48c2587cd93482 extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.iD = _data["ID"];
            this.name = _data["Name"];
            this.createdDate = _data["CreatedDate"] ? new Date(_data["CreatedDate"].toString()) : undefined;
            this.updatedDate = _data["UpdatedDate"] ? new Date(_data["UpdatedDate"].toString()) : undefined;
            this.item = _data["Item"] ? (0, $0779da14532307cc$export$7edd97445626b06b).fromJS(_data["Item"]) : undefined;
            if (Array.isArray(_data["Languages"])) {
                this.languages = [];
                for (let item of _data["Languages"])this.languages.push((0, $6bda2d71703cb2a5$export$9bebe57d18a7d1f6).fromJS(item));
            }
            if (Array.isArray(_data["Domains"])) {
                this.domains = [];
                for (let item of _data["Domains"])this.domains.push(item);
            }
            this.primaryDomain = _data["PrimaryDomain"];
            this.ecomCountryCode = _data["EcomCountryCode"];
            this.ecomCurrencyCode = _data["EcomCurrencyCode"];
            this.ecomLanguageId = _data["EcomLanguageId"];
            this.ecomPricesWithVat = _data["EcomPricesWithVat"];
            this.ecomShopId = _data["EcomShopId"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $4778102b8b734b92$export$5d48c2587cd93482();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["ID"] = this.iD;
        data["Name"] = this.name;
        data["CreatedDate"] = this.createdDate ? this.createdDate.toISOString() : undefined;
        data["UpdatedDate"] = this.updatedDate ? this.updatedDate.toISOString() : undefined;
        data["Item"] = this.item ? this.item.toJSON() : undefined;
        if (Array.isArray(this.languages)) {
            data["Languages"] = [];
            for (let item of this.languages)data["Languages"].push(item.toJSON());
        }
        if (Array.isArray(this.domains)) {
            data["Domains"] = [];
            for (let item of this.domains)data["Domains"].push(item);
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


class $69a251b68a6ea141$export$df76c3bacd435747 extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Gets all areas
     * @return OK
     */ getAll() {
        let url_ = this.baseUrl + "/dwapi/content/areas";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetAll(_response);
        });
    }
    processGetAll(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [];
                for (let item of resultData200)result200.push((0, $4778102b8b734b92$export$5d48c2587cd93482).fromJS(item));
            } else result200 = null;
            return result200;
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets an area by id
     * @param id Id of the area
     * @return OK
     */ getById(id) {
        let url_ = this.baseUrl + "/dwapi/content/areas/{id}";
        if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetById(_response);
        });
    }
    processGetById(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $4778102b8b734b92$export$5d48c2587cd93482).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Not found\nor\nThe area is not published.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The current user does not have the needed permissions to view the area.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets areas by host name.
     * @param domain The hostname to get areas by, i.e. www.dynamicweb.com
     * @return OK
     */ getByDomain(domain) {
        let url_ = this.baseUrl + "/dwapi/content/areas/domain/{domain}";
        if (domain === undefined || domain === null) throw new Error("The parameter 'domain' must be defined.");
        url_ = url_.replace("{domain}", encodeURIComponent("" + domain));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetByDomain(_response);
        });
    }
    processGetByDomain(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [];
                for (let item of resultData200)result200.push((0, $4778102b8b734b92$export$5d48c2587cd93482).fromJS(item));
            } else result200 = null;
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("No areas found for the given domain", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}






class $52b81f3ad84ab4fd$export$aaa95e14a6481fff {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            this.description = _data["Description"];
            this.template = _data["Template"];
            this.columnCount = _data["ColumnCount"];
            this.itemType = _data["ItemType"];
            this.thumbnail = _data["Thumbnail"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $52b81f3ad84ab4fd$export$aaa95e14a6481fff();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["Description"] = this.description;
        data["Template"] = this.template;
        data["ColumnCount"] = this.columnCount;
        data["ItemType"] = this.itemType;
        data["Thumbnail"] = this.thumbnail;
        return data;
    }
}





class $0c842e52b6a3d989$export$cf52083a8935362b extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.iD = _data["ID"];
            this.name = _data["Name"];
            this.createdDate = _data["CreatedDate"] ? new Date(_data["CreatedDate"].toString()) : undefined;
            this.updatedDate = _data["UpdatedDate"] ? new Date(_data["UpdatedDate"].toString()) : undefined;
            this.pageID = _data["PageID"];
            this.globalID = _data["GlobalID"];
            this.text = _data["Text"];
            this.item = _data["Item"] ? (0, $0779da14532307cc$export$7edd97445626b06b).fromJS(_data["Item"]) : undefined;
            this.image = _data["Image"];
            this.imageFocalX = _data["ImageFocalX"];
            this.imageFocalY = _data["ImageFocalY"];
            this.imageHAlign = _data["ImageHAlign"];
            this.imageVAlign = _data["ImageVAlign"];
            this.imageLink = _data["ImageLink"];
            this.imageAlt = _data["ImageAlt"];
            this.imageLinkTarget = _data["ImageLinkTarget"];
            this.imageCaption = _data["ImageCaption"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $0c842e52b6a3d989$export$cf52083a8935362b();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["ID"] = this.iD;
        data["Name"] = this.name;
        data["CreatedDate"] = this.createdDate ? this.createdDate.toISOString() : undefined;
        data["UpdatedDate"] = this.updatedDate ? this.updatedDate.toISOString() : undefined;
        data["PageID"] = this.pageID;
        data["GlobalID"] = this.globalID;
        data["Text"] = this.text;
        data["Item"] = this.item ? this.item.toJSON() : undefined;
        data["Image"] = this.image;
        data["ImageFocalX"] = this.imageFocalX;
        data["ImageFocalY"] = this.imageFocalY;
        data["ImageHAlign"] = this.imageHAlign;
        data["ImageVAlign"] = this.imageVAlign;
        data["ImageLink"] = this.imageLink;
        data["ImageAlt"] = this.imageAlt;
        data["ImageLinkTarget"] = this.imageLinkTarget;
        data["ImageCaption"] = this.imageCaption;
        super.toJSON(data);
        return data;
    }
}


class $ff79f822961c4785$export$7e303fa979f8a332 extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.columnNumber = _data["ColumnNumber"];
            this.rowColumnCount = _data["RowColumnCount"];
            this.paragraphId = _data["ParagraphId"];
            this.paragraph = _data["Paragraph"] ? (0, $0c842e52b6a3d989$export$cf52083a8935362b).fromJS(_data["Paragraph"]) : undefined;
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $ff79f822961c4785$export$7e303fa979f8a332();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["ColumnNumber"] = this.columnNumber;
        data["RowColumnCount"] = this.rowColumnCount;
        data["ParagraphId"] = this.paragraphId;
        data["Paragraph"] = this.paragraph ? this.paragraph.toJSON() : undefined;
        super.toJSON(data);
        return data;
    }
}


class $21986d3c2ce0bf68$export$f63e98f49938fb87 extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.definition = _data["Definition"] ? (0, $52b81f3ad84ab4fd$export$aaa95e14a6481fff).fromJS(_data["Definition"]) : undefined;
            if (Array.isArray(_data["Columns"])) {
                this.columns = [];
                for (let item of _data["Columns"])this.columns.push((0, $ff79f822961c4785$export$7e303fa979f8a332).fromJS(item));
            }
            this.templatePath = _data["TemplatePath"];
            this.item = _data["Item"] ? (0, $0779da14532307cc$export$7edd97445626b06b).fromJS(_data["Item"]) : undefined;
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $21986d3c2ce0bf68$export$f63e98f49938fb87();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Id"] = this.id;
        data["Definition"] = this.definition ? this.definition.toJSON() : undefined;
        if (Array.isArray(this.columns)) {
            data["Columns"] = [];
            for (let item of this.columns)data["Columns"].push(item.toJSON());
        }
        data["TemplatePath"] = this.templatePath;
        data["Item"] = this.item ? this.item.toJSON() : undefined;
        super.toJSON(data);
        return data;
    }
}



class $f611b94d3fd43f9d$export$5cfee608d429befb extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Gets page grid rows
     * @param pageId Id of the page - the page id has to be a page that has grid rows
     * @param device (optional) The device type - one of 'Desktop' (default), 'Mobile', 'Tablet'
     * @return OK
     */ getById(pageId, device) {
        let url_ = this.baseUrl + "/dwapi/content/rows/{pageId}?";
        if (pageId === undefined || pageId === null) throw new Error("The parameter 'pageId' must be defined.");
        url_ = url_.replace("{pageId}", encodeURIComponent("" + pageId));
        if (device !== undefined && device !== null) url_ += "device=" + encodeURIComponent("" + device) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetById(_response);
        });
    }
    processGetById(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $21986d3c2ce0bf68$export$f63e98f49938fb87).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Not found.\nor\nThe page is not found.\nor\nThe page is not published.\nor\nThe area is not published.\nor\nThe page does not contain any grid rows.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Page is password protected and cannot be accessed using this endpoint.\nor\nThe current user does not have the needed permissions to view the page.\nor\nThe current user does not have the needed permissions to view the area.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets page grid rows by url
     * @param url The path of the page, i.e. /page/subpage/page
     * @param hostname (optional) Specify the hostname setup on the website to match with. If none is specified, the request hostname is used for lookup
     * @return OK
     */ getByUrl(url, hostname) {
        let url_ = this.baseUrl + "/dwapi/content/rows/url?";
        if (url === undefined) throw new Error("The parameter 'url' must be defined.");
        else if (url !== null) url_ += "url=" + encodeURIComponent("" + url) + "&";
        if (hostname !== undefined && hostname !== null) url_ += "hostname=" + encodeURIComponent("" + hostname) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetByUrl(_response);
        });
    }
    processGetByUrl(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [];
                for (let item of resultData200)result200.push((0, $0c842e52b6a3d989$export$cf52083a8935362b).fromJS(item));
            } else result200 = null;
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Not found.\nor\nThe page is not published.\nor\nThe area is not published.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Page is password protected and cannot be accessed using this endpoint.\nor\nThe current user does not have the needed permissions to view the page.\nor\nThe current user does not have the needed permissions to view the area.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}






class $a6f512f54756fe07$export$f847c61fd47190b3 extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.pageId = _data["PageId"];
            this.groupId = _data["GroupId"];
            this.name = _data["Name"];
            this.link = _data["Link"];
            this.level = _data["Level"];
            this.isClickable = _data["IsClickable"];
            this.inPath = _data["InPath"];
            this.isActive = _data["IsActive"];
            this.showInSitemap = _data["ShowInSitemap"];
            this.showInBreadcrumb = _data["ShowInBreadcrumb"];
            this.showInMenu = _data["ShowInMenu"];
            if (Array.isArray(_data["Nodes"])) {
                this.nodes = [];
                for (let item of _data["Nodes"])this.nodes.push($a6f512f54756fe07$export$f847c61fd47190b3.fromJS(item));
            }
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $a6f512f54756fe07$export$f847c61fd47190b3();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["PageId"] = this.pageId;
        data["GroupId"] = this.groupId;
        data["Name"] = this.name;
        data["Link"] = this.link;
        data["Level"] = this.level;
        data["IsClickable"] = this.isClickable;
        data["InPath"] = this.inPath;
        data["IsActive"] = this.isActive;
        data["ShowInSitemap"] = this.showInSitemap;
        data["ShowInBreadcrumb"] = this.showInBreadcrumb;
        data["ShowInMenu"] = this.showInMenu;
        if (Array.isArray(this.nodes)) {
            data["Nodes"] = [];
            for (let item of this.nodes)data["Nodes"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}


class $31d06c909744645d$export$d7f927033ffdf23f extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            if (Array.isArray(_data["Nodes"])) {
                this.nodes = [];
                for (let item of _data["Nodes"])this.nodes.push((0, $a6f512f54756fe07$export$f847c61fd47190b3).fromJS(item));
            }
            if (_data["Parameters"]) {
                this.parameters = {};
                for(let key in _data["Parameters"])if (_data["Parameters"].hasOwnProperty(key)) this.parameters[key] = _data["Parameters"][key];
            }
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $31d06c909744645d$export$d7f927033ffdf23f();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        if (Array.isArray(this.nodes)) {
            data["Nodes"] = [];
            for (let item of this.nodes)data["Nodes"].push(item.toJSON());
        }
        if (this.parameters) {
            data["Parameters"] = {};
            for(let key in this.parameters)if (this.parameters.hasOwnProperty(key)) data["Parameters"][key] = this.parameters[key];
        }
        super.toJSON(data);
        return data;
    }
}


class $414fd9914bd1a806$export$4b77aa913f68641f extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Gets a navigation for a given area.
     * @param areaId Id of the area
     * @param pageId (optional) Id of the page
     * @param expandMode (optional) 
     * @param startLevel (optional) 
     * @param stopLevel (optional) 
     * @param includeFoldersAndHidden (optional) 
     * @param rootAreaId (optional) 
     * @param rootPageId (optional) 
     * @param rootNavigationTag (optional) 
     * @param parameters (optional) 
     * @return OK
     */ getById(areaId, pageId, expandMode, startLevel, stopLevel, includeFoldersAndHidden, rootAreaId, rootPageId, rootNavigationTag, parameters) {
        let url_ = this.baseUrl + "/dwapi/frontend/navigations/{areaId}?";
        if (areaId === undefined || areaId === null) throw new Error("The parameter 'areaId' must be defined.");
        url_ = url_.replace("{areaId}", encodeURIComponent("" + areaId));
        if (pageId === null) throw new Error("The parameter 'pageId' cannot be null.");
        else if (pageId !== undefined) url_ += "pageId=" + encodeURIComponent("" + pageId) + "&";
        if (expandMode === null) throw new Error("The parameter 'expandMode' cannot be null.");
        else if (expandMode !== undefined) url_ += "ExpandMode=" + encodeURIComponent("" + expandMode) + "&";
        if (startLevel === null) throw new Error("The parameter 'startLevel' cannot be null.");
        else if (startLevel !== undefined) url_ += "StartLevel=" + encodeURIComponent("" + startLevel) + "&";
        if (stopLevel === null) throw new Error("The parameter 'stopLevel' cannot be null.");
        else if (stopLevel !== undefined) url_ += "StopLevel=" + encodeURIComponent("" + stopLevel) + "&";
        if (includeFoldersAndHidden === null) throw new Error("The parameter 'includeFoldersAndHidden' cannot be null.");
        else if (includeFoldersAndHidden !== undefined) url_ += "IncludeFoldersAndHidden=" + encodeURIComponent("" + includeFoldersAndHidden) + "&";
        if (rootAreaId === null) throw new Error("The parameter 'rootAreaId' cannot be null.");
        else if (rootAreaId !== undefined) url_ += "RootAreaId=" + encodeURIComponent("" + rootAreaId) + "&";
        if (rootPageId === null) throw new Error("The parameter 'rootPageId' cannot be null.");
        else if (rootPageId !== undefined) url_ += "RootPageId=" + encodeURIComponent("" + rootPageId) + "&";
        if (rootNavigationTag !== undefined && rootNavigationTag !== null) url_ += "RootNavigationTag=" + encodeURIComponent("" + rootNavigationTag) + "&";
        if (parameters !== undefined && parameters !== null) url_ += "Parameters=" + encodeURIComponent("" + parameters) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetById(_response);
        });
    }
    processGetById(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $31d06c909744645d$export$d7f927033ffdf23f).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Not found\nor\nThe page is not published.\nor\nThe area is not published.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Page is password protected and cannot be accessed using this endpoint.\nor\nThe current user does not have the needed permissions to view the page.\nor\nThe current user does not have the needed permissions to view the area.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}
let $414fd9914bd1a806$export$58103b785ab8fcf8;
(function(ExpandMode1) {
    ExpandMode1["None"] = "None";
    ExpandMode1["All"] = "All";
    ExpandMode1["Path"] = "Path";
    ExpandMode1["PathOnly"] = "PathOnly";
})($414fd9914bd1a806$export$58103b785ab8fcf8 || ($414fd9914bd1a806$export$58103b785ab8fcf8 = {}));









class $a91c9b9346d57165$export$18ddf593de07da32 extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.iD = _data["ID"];
            this.name = _data["Name"];
            this.culture = _data["Culture"];
            this.primaryDomain = _data["PrimaryDomain"];
            this.isCurrent = _data["IsCurrent"];
            this.isMaster = _data["IsMaster"];
            this.page = _data["Page"] ? (0, $c66a426275fe261c$export$c78ffd8783cb7b2c).fromJS(_data["Page"]) : undefined;
            this.pageIsHidden = _data["PageIsHidden"];
            this.pageIsPublished = _data["PageIsPublished"];
            this.firstPage = _data["FirstPage"] ? (0, $c66a426275fe261c$export$c78ffd8783cb7b2c).fromJS(_data["FirstPage"]) : undefined;
            this.firstActivePage = _data["FirstActivePage"] ? (0, $c66a426275fe261c$export$c78ffd8783cb7b2c).fromJS(_data["FirstActivePage"]) : undefined;
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $a91c9b9346d57165$export$18ddf593de07da32();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["ID"] = this.iD;
        data["Name"] = this.name;
        data["Culture"] = this.culture;
        data["PrimaryDomain"] = this.primaryDomain;
        data["IsCurrent"] = this.isCurrent;
        data["IsMaster"] = this.isMaster;
        data["Page"] = this.page ? this.page.toJSON() : undefined;
        data["PageIsHidden"] = this.pageIsHidden;
        data["PageIsPublished"] = this.pageIsPublished;
        data["FirstPage"] = this.firstPage ? this.firstPage.toJSON() : undefined;
        data["FirstActivePage"] = this.firstActivePage ? this.firstActivePage.toJSON() : undefined;
        super.toJSON(data);
        return data;
    }
}


class $77e4cced26253376$export$4ce9f6c7bfdcec1b extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.iD = _data["ID"];
            this.name = _data["Name"];
            this.createdDate = _data["CreatedDate"] ? new Date(_data["CreatedDate"].toString()) : undefined;
            this.updatedDate = _data["UpdatedDate"] ? new Date(_data["UpdatedDate"].toString()) : undefined;
            this.title = _data["Title"];
            this.description = _data["Description"];
            this.keywords = _data["Keywords"];
            this.areaID = _data["AreaID"];
            if (Array.isArray(_data["Path"])) {
                this.path = [];
                for (let item of _data["Path"])this.path.push((0, $c66a426275fe261c$export$c78ffd8783cb7b2c).fromJS(item));
            }
            if (Array.isArray(_data["Languages"])) {
                this.languages = [];
                for (let item of _data["Languages"])this.languages.push((0, $a91c9b9346d57165$export$18ddf593de07da32).fromJS(item));
            }
            this.item = _data["Item"] ? (0, $0779da14532307cc$export$7edd97445626b06b).fromJS(_data["Item"]) : undefined;
            this.propertyItem = _data["PropertyItem"] ? (0, $0779da14532307cc$export$7edd97445626b06b).fromJS(_data["PropertyItem"]) : undefined;
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $77e4cced26253376$export$4ce9f6c7bfdcec1b();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["ID"] = this.iD;
        data["Name"] = this.name;
        data["CreatedDate"] = this.createdDate ? this.createdDate.toISOString() : undefined;
        data["UpdatedDate"] = this.updatedDate ? this.updatedDate.toISOString() : undefined;
        data["Title"] = this.title;
        data["Description"] = this.description;
        data["Keywords"] = this.keywords;
        data["AreaID"] = this.areaID;
        if (Array.isArray(this.path)) {
            data["Path"] = [];
            for (let item of this.path)data["Path"].push(item.toJSON());
        }
        if (Array.isArray(this.languages)) {
            data["Languages"] = [];
            for (let item of this.languages)data["Languages"].push(item.toJSON());
        }
        data["Item"] = this.item ? this.item.toJSON() : undefined;
        data["PropertyItem"] = this.propertyItem ? this.propertyItem.toJSON() : undefined;
        super.toJSON(data);
        return data;
    }
}


class $34031120fcb21d69$export$427a4a73e42a637a extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Gets pages by query
     * @param areaId (optional) 
     * @param pageId (optional) 
     * @param itemType (optional) 
     * @return OK
     */ getAll(areaId, pageId, itemType) {
        let url_ = this.baseUrl + "/dwapi/content/pages?";
        if (areaId !== undefined && areaId !== null) url_ += "AreaId=" + encodeURIComponent("" + areaId) + "&";
        if (pageId !== undefined && pageId !== null) url_ += "PageId=" + encodeURIComponent("" + pageId) + "&";
        if (itemType !== undefined && itemType !== null) url_ += "ItemType=" + encodeURIComponent("" + itemType) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetAll(_response);
        });
    }
    processGetAll(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [];
                for (let item of resultData200)result200.push((0, $77e4cced26253376$export$4ce9f6c7bfdcec1b).fromJS(item));
            } else result200 = null;
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The area is not found.\nor\nThe area is not published.\nor\nThe query returned no pages.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets a page by id
     * @param id Id of the page
     * @return OK
     */ getById(id) {
        let url_ = this.baseUrl + "/dwapi/content/pages/{id}";
        if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetById(_response);
        });
    }
    processGetById(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $77e4cced26253376$export$4ce9f6c7bfdcec1b).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Not found.\nor\nThe page is not published.\nor\nThe area is not published.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Page is password protected and cannot be accessed using this endpoint.\nor\nThe current user does not have the needed permissions to view the page.\nor\nThe current user does not have the needed permissions to view the area.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets a page by url
     * @param url The path of the page, i.e. /page/subpage/page
     * @param hostname (optional) Specify the hostname setup on the website to match with. If none is specified, the request hostname is used for lookup
     * @return OK
     */ getByUrl(url, hostname) {
        let url_ = this.baseUrl + "/dwapi/content/pages/url?";
        if (url === undefined) throw new Error("The parameter 'url' must be defined.");
        else if (url !== null) url_ += "url=" + encodeURIComponent("" + url) + "&";
        if (hostname !== undefined && hostname !== null) url_ += "hostname=" + encodeURIComponent("" + hostname) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetByUrl(_response);
        });
    }
    processGetByUrl(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $77e4cced26253376$export$4ce9f6c7bfdcec1b).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Not found.\nor\nThe page is not published.\nor\nThe area is not published.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Page is password protected and cannot be accessed using this endpoint.\nor\nThe current user does not have the needed permissions to view the page.\nor\nThe current user does not have the needed permissions to view the area.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}










class $76bdb84e93347c12$export$493d4972488c639c extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.cartPage = _data["CartPage"] ? (0, $c66a426275fe261c$export$c78ffd8783cb7b2c).fromJS(_data["CartPage"]) : undefined;
            this.createdDate = _data["CreatedDate"] ? new Date(_data["CreatedDate"].toString()) : undefined;
            this.dateFormat = _data["DateFormat"];
            this.firstActivePage = _data["FirstActivePage"] ? (0, $c66a426275fe261c$export$c78ffd8783cb7b2c).fromJS(_data["FirstActivePage"]) : undefined;
            this.firstPage = _data["FirstPage"] ? (0, $c66a426275fe261c$export$c78ffd8783cb7b2c).fromJS(_data["FirstPage"]) : undefined;
            this.iD = _data["ID"];
            this.item = _data["Item"] ? (0, $0779da14532307cc$export$7edd97445626b06b).fromJS(_data["Item"]) : undefined;
            this.itemId = _data["ItemId"];
            this.itemType = _data["ItemType"];
            if (Array.isArray(_data["Languages"])) {
                this.languages = [];
                for (let item of _data["Languages"])this.languages.push((0, $6bda2d71703cb2a5$export$9bebe57d18a7d1f6).fromJS(item));
            }
            this.name = _data["Name"];
            this.searchPage = _data["SearchPage"] ? (0, $c66a426275fe261c$export$c78ffd8783cb7b2c).fromJS(_data["SearchPage"]) : undefined;
            this.updatedDate = _data["UpdatedDate"] ? new Date(_data["UpdatedDate"].toString()) : undefined;
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $76bdb84e93347c12$export$493d4972488c639c();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["CartPage"] = this.cartPage ? this.cartPage.toJSON() : undefined;
        data["CreatedDate"] = this.createdDate ? this.createdDate.toISOString() : undefined;
        data["DateFormat"] = this.dateFormat;
        data["FirstActivePage"] = this.firstActivePage ? this.firstActivePage.toJSON() : undefined;
        data["FirstPage"] = this.firstPage ? this.firstPage.toJSON() : undefined;
        data["ID"] = this.iD;
        data["Item"] = this.item ? this.item.toJSON() : undefined;
        data["ItemId"] = this.itemId;
        data["ItemType"] = this.itemType;
        if (Array.isArray(this.languages)) {
            data["Languages"] = [];
            for (let item of this.languages)data["Languages"].push(item.toJSON());
        }
        data["Name"] = this.name;
        data["SearchPage"] = this.searchPage ? this.searchPage.toJSON() : undefined;
        data["UpdatedDate"] = this.updatedDate ? this.updatedDate.toISOString() : undefined;
        super.toJSON(data);
        return data;
    }
}




class $f855b978e71052e5$export$d9c3b87812883495 {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
        if (_data) {
            this.value = _data["Value"];
            this.formatted = _data["Formatted"];
            this.formattedNoSymbol = _data["FormattedNoSymbol"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $f855b978e71052e5$export$d9c3b87812883495();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Value"] = this.value;
        data["Formatted"] = this.formatted;
        data["FormattedNoSymbol"] = this.formattedNoSymbol;
        return data;
    }
}


class $262f9405de5b42bb$export$f90500b8ef904c9f {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
        if (_data) {
            this.percent = _data["Percent"];
            this.percentFormatted = _data["PercentFormatted"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $262f9405de5b42bb$export$f90500b8ef904c9f();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Percent"] = this.percent;
        data["PercentFormatted"] = this.percentFormatted;
        return data;
    }
}


class $d3a2c6932ef6ab1e$export$1c8dced55726649b {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
        if (_data) {
            this.symbol = _data["Symbol"];
            this.name = _data["Name"];
            this.rate = _data["Rate"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $d3a2c6932ef6ab1e$export$1c8dced55726649b();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Symbol"] = this.symbol;
        data["Name"] = this.name;
        data["Rate"] = this.rate;
        return data;
    }
}


class $a12ac5e371a416f5$export$f7966fe22473d337 {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
        if (_data) {
            this.price = _data["Price"] ? (0, $f855b978e71052e5$export$d9c3b87812883495).fromJS(_data["Price"]) : undefined;
            this.priceWithVat = _data["PriceWithVat"] ? (0, $f855b978e71052e5$export$d9c3b87812883495).fromJS(_data["PriceWithVat"]) : undefined;
            this.priceWithoutVat = _data["PriceWithoutVat"] ? (0, $f855b978e71052e5$export$d9c3b87812883495).fromJS(_data["PriceWithoutVat"]) : undefined;
            this.vat = _data["Vat"] ? (0, $f855b978e71052e5$export$d9c3b87812883495).fromJS(_data["Vat"]) : undefined;
            this.vatPercent = _data["VatPercent"] ? (0, $262f9405de5b42bb$export$f90500b8ef904c9f).fromJS(_data["VatPercent"]) : undefined;
            this.currency = _data["Currency"] ? (0, $d3a2c6932ef6ab1e$export$1c8dced55726649b).fromJS(_data["Currency"]) : undefined;
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $a12ac5e371a416f5$export$f7966fe22473d337();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Price"] = this.price ? this.price.toJSON() : undefined;
        data["PriceWithVat"] = this.priceWithVat ? this.priceWithVat.toJSON() : undefined;
        data["PriceWithoutVat"] = this.priceWithoutVat ? this.priceWithoutVat.toJSON() : undefined;
        data["Vat"] = this.vat ? this.vat.toJSON() : undefined;
        data["VatPercent"] = this.vatPercent ? this.vatPercent.toJSON() : undefined;
        data["Currency"] = this.currency ? this.currency.toJSON() : undefined;
        return data;
    }
}


class $29bf46a859f5bbae$export$12f8875581f71705 extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.iD = _data["ID"];
            this.productsCount = _data["ProductsCount"];
            this.totalProductsCount = _data["TotalProductsCount"];
            this.orderlinesCount = _data["OrderlinesCount"];
            if (Array.isArray(_data["CartOrderlines"])) {
                this.cartOrderlines = [];
                for (let item of _data["CartOrderlines"])this.cartOrderlines.push($29bf46a859f5bbae$export$c243f24fb0bd73d8.fromJS(item));
            }
            this.totalPrice = _data["TotalPrice"] ? (0, $a12ac5e371a416f5$export$f7966fe22473d337).fromJS(_data["TotalPrice"]) : undefined;
            this.totalDiscount = _data["TotalDiscount"] ? (0, $a12ac5e371a416f5$export$f7966fe22473d337).fromJS(_data["TotalDiscount"]) : undefined;
            this.totalPriceWithoutDiscounts = _data["TotalPriceWithoutDiscounts"] ? (0, $a12ac5e371a416f5$export$f7966fe22473d337).fromJS(_data["TotalPriceWithoutDiscounts"]) : undefined;
            this.totalPriceWithoutFees = _data["TotalPriceWithoutFees"] ? (0, $a12ac5e371a416f5$export$f7966fe22473d337).fromJS(_data["TotalPriceWithoutFees"]) : undefined;
            this.paymentMethod = _data["PaymentMethod"];
            this.paymentFee = _data["PaymentFee"] ? (0, $a12ac5e371a416f5$export$f7966fe22473d337).fromJS(_data["PaymentFee"]) : undefined;
            this.shippingMethod = _data["ShippingMethod"];
            this.shippingFee = _data["ShippingFee"] ? (0, $a12ac5e371a416f5$export$f7966fe22473d337).fromJS(_data["ShippingFee"]) : undefined;
            this.isEmpty = _data["IsEmpty"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $29bf46a859f5bbae$export$12f8875581f71705();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["ID"] = this.iD;
        data["ProductsCount"] = this.productsCount;
        data["TotalProductsCount"] = this.totalProductsCount;
        data["OrderlinesCount"] = this.orderlinesCount;
        if (Array.isArray(this.cartOrderlines)) {
            data["CartOrderlines"] = [];
            for (let item of this.cartOrderlines)data["CartOrderlines"].push(item.toJSON());
        }
        data["TotalPrice"] = this.totalPrice ? this.totalPrice.toJSON() : undefined;
        data["TotalDiscount"] = this.totalDiscount ? this.totalDiscount.toJSON() : undefined;
        data["TotalPriceWithoutDiscounts"] = this.totalPriceWithoutDiscounts ? this.totalPriceWithoutDiscounts.toJSON() : undefined;
        data["TotalPriceWithoutFees"] = this.totalPriceWithoutFees ? this.totalPriceWithoutFees.toJSON() : undefined;
        data["PaymentMethod"] = this.paymentMethod;
        data["PaymentFee"] = this.paymentFee ? this.paymentFee.toJSON() : undefined;
        data["ShippingMethod"] = this.shippingMethod;
        data["ShippingFee"] = this.shippingFee ? this.shippingFee.toJSON() : undefined;
        data["IsEmpty"] = this.isEmpty;
        super.toJSON(data);
        return data;
    }
}
class $29bf46a859f5bbae$export$c243f24fb0bd73d8 extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.productID = _data["ProductID"];
            this.productNumber = _data["ProductNumber"];
            this.productName = _data["ProductName"];
            this.productGroupID = _data["ProductGroupID"];
            this.isProduct = _data["IsProduct"];
            this.isDiscount = _data["IsDiscount"];
            this.isTax = _data["IsTax"];
            this.quantity = _data["Quantity"];
            this.productVariantID = _data["ProductVariantID"];
            this.productVariantText = _data["ProductVariantText"];
            this.productLink = _data["ProductLink"];
            this.productImage = _data["ProductImage"];
            this.unitPrice = _data["UnitPrice"] ? (0, $a12ac5e371a416f5$export$f7966fe22473d337).fromJS(_data["UnitPrice"]) : undefined;
            this.unitPriceBeforeDiscount = _data["UnitPriceBeforeDiscount"] ? (0, $a12ac5e371a416f5$export$f7966fe22473d337).fromJS(_data["UnitPriceBeforeDiscount"]) : undefined;
            this.totalPrice = _data["TotalPrice"] ? (0, $a12ac5e371a416f5$export$f7966fe22473d337).fromJS(_data["TotalPrice"]) : undefined;
            this.totalDiscount = _data["TotalDiscount"] ? (0, $a12ac5e371a416f5$export$f7966fe22473d337).fromJS(_data["TotalDiscount"]) : undefined;
            this.unitId = _data["UnitId"];
            this.unitName = _data["UnitName"];
            this.pointsTotal = _data["PointsTotal"];
            this.pointPrice = _data["PointPrice"];
            this.iD = _data["ID"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $29bf46a859f5bbae$export$c243f24fb0bd73d8();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["ProductID"] = this.productID;
        data["ProductNumber"] = this.productNumber;
        data["ProductName"] = this.productName;
        data["ProductGroupID"] = this.productGroupID;
        data["IsProduct"] = this.isProduct;
        data["IsDiscount"] = this.isDiscount;
        data["IsTax"] = this.isTax;
        data["Quantity"] = this.quantity;
        data["ProductVariantID"] = this.productVariantID;
        data["ProductVariantText"] = this.productVariantText;
        data["ProductLink"] = this.productLink;
        data["ProductImage"] = this.productImage;
        data["UnitPrice"] = this.unitPrice ? this.unitPrice.toJSON() : undefined;
        data["UnitPriceBeforeDiscount"] = this.unitPriceBeforeDiscount ? this.unitPriceBeforeDiscount.toJSON() : undefined;
        data["TotalPrice"] = this.totalPrice ? this.totalPrice.toJSON() : undefined;
        data["TotalDiscount"] = this.totalDiscount ? this.totalDiscount.toJSON() : undefined;
        data["UnitId"] = this.unitId;
        data["UnitName"] = this.unitName;
        data["PointsTotal"] = this.pointsTotal;
        data["PointPrice"] = this.pointPrice;
        data["ID"] = this.iD;
        super.toJSON(data);
        return data;
    }
}




class $c360920c42094f26$export$e288868a4b2c3c3 extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.area = _data["Area"] ? (0, $76bdb84e93347c12$export$493d4972488c639c).fromJS(_data["Area"]) : undefined;
            this.createdDate = _data["CreatedDate"] ? new Date(_data["CreatedDate"].toString()) : undefined;
            this.currentSecondaryUser = _data["CurrentSecondaryUser"] ? (0, $c2ce1d25998eb389$export$88f615852494efb2).fromJS(_data["CurrentSecondaryUser"]) : undefined;
            this.currentUser = _data["CurrentUser"] ? (0, $c2ce1d25998eb389$export$88f615852494efb2).fromJS(_data["CurrentUser"]) : undefined;
            this.isCurrentUserAllowed = _data["IsCurrentUserAllowed"];
            this.cart = _data["Cart"] ? (0, $29bf46a859f5bbae$export$12f8875581f71705).fromJS(_data["Cart"]) : undefined;
            if (_data["Content"]) {
                this.content = {};
                for(let key in _data["Content"])if (_data["Content"].hasOwnProperty(key)) this.content[key] = _data["Content"][key];
            }
            if (_data["GridContent"]) {
                this.gridContent = {};
                for(let key in _data["GridContent"])if (_data["GridContent"].hasOwnProperty(key)) this.gridContent[key] = _data["GridContent"][key];
            }
            this.description = _data["Description"];
            this.iD = _data["ID"];
            this.item = _data["Item"] ? (0, $0779da14532307cc$export$7edd97445626b06b).fromJS(_data["Item"]) : undefined;
            this.itemId = _data["ItemId"];
            this.itemType = _data["ItemType"];
            this.keywords = _data["Keywords"];
            this.metaTags = _data["MetaTags"];
            if (Array.isArray(_data["Languages"])) {
                this.languages = [];
                for (let item of _data["Languages"])this.languages.push((0, $a91c9b9346d57165$export$18ddf593de07da32).fromJS(item));
            }
            this.name = _data["Name"];
            if (Array.isArray(_data["Path"])) {
                this.path = [];
                for (let item of _data["Path"])this.path.push((0, $c66a426275fe261c$export$c78ffd8783cb7b2c).fromJS(item));
            }
            this.propertyItem = _data["PropertyItem"] ? (0, $0779da14532307cc$export$7edd97445626b06b).fromJS(_data["PropertyItem"]) : undefined;
            this.propertyItemId = _data["PropertyItemId"];
            this.propertyItemType = _data["PropertyItemType"];
            this.showUpdatedDate = _data["ShowUpdatedDate"];
            this.title = _data["Title"];
            this.topPage = _data["TopPage"] ? (0, $c66a426275fe261c$export$c78ffd8783cb7b2c).fromJS(_data["TopPage"]) : undefined;
            this.updatedDate = _data["UpdatedDate"] ? new Date(_data["UpdatedDate"].toString()) : undefined;
            if (Array.isArray(_data["SecondaryUsers"])) {
                this.secondaryUsers = [];
                for (let item of _data["SecondaryUsers"])this.secondaryUsers.push((0, $c2ce1d25998eb389$export$88f615852494efb2).fromJS(item));
            }
            this.hasSecondaryUsers = _data["HasSecondaryUsers"];
            this.logOnFailed = _data["LogOnFailed"];
            this.logOnFailedReason = _data["LogOnFailedReason"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $c360920c42094f26$export$e288868a4b2c3c3();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Area"] = this.area ? this.area.toJSON() : undefined;
        data["CreatedDate"] = this.createdDate ? this.createdDate.toISOString() : undefined;
        data["CurrentSecondaryUser"] = this.currentSecondaryUser ? this.currentSecondaryUser.toJSON() : undefined;
        data["CurrentUser"] = this.currentUser ? this.currentUser.toJSON() : undefined;
        data["IsCurrentUserAllowed"] = this.isCurrentUserAllowed;
        data["Cart"] = this.cart ? this.cart.toJSON() : undefined;
        if (this.content) {
            data["Content"] = {};
            for(let key in this.content)if (this.content.hasOwnProperty(key)) data["Content"][key] = this.content[key];
        }
        if (this.gridContent) {
            data["GridContent"] = {};
            for(let key in this.gridContent)if (this.gridContent.hasOwnProperty(key)) data["GridContent"][key] = this.gridContent[key];
        }
        data["Description"] = this.description;
        data["ID"] = this.iD;
        data["Item"] = this.item ? this.item.toJSON() : undefined;
        data["ItemId"] = this.itemId;
        data["ItemType"] = this.itemType;
        data["Keywords"] = this.keywords;
        data["MetaTags"] = this.metaTags;
        if (Array.isArray(this.languages)) {
            data["Languages"] = [];
            for (let item of this.languages)data["Languages"].push(item.toJSON());
        }
        data["Name"] = this.name;
        if (Array.isArray(this.path)) {
            data["Path"] = [];
            for (let item of this.path)data["Path"].push(item.toJSON());
        }
        data["PropertyItem"] = this.propertyItem ? this.propertyItem.toJSON() : undefined;
        data["PropertyItemId"] = this.propertyItemId;
        data["PropertyItemType"] = this.propertyItemType;
        data["ShowUpdatedDate"] = this.showUpdatedDate;
        data["Title"] = this.title;
        data["TopPage"] = this.topPage ? this.topPage.toJSON() : undefined;
        data["UpdatedDate"] = this.updatedDate ? this.updatedDate.toISOString() : undefined;
        if (Array.isArray(this.secondaryUsers)) {
            data["SecondaryUsers"] = [];
            for (let item of this.secondaryUsers)data["SecondaryUsers"].push(item.toJSON());
        }
        data["HasSecondaryUsers"] = this.hasSecondaryUsers;
        data["LogOnFailed"] = this.logOnFailed;
        data["LogOnFailedReason"] = this.logOnFailedReason;
        super.toJSON(data);
        return data;
    }
}


class $7167873f46ace7b6$export$8625a278c3202ff9 extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Get a full pageview with content and items for the specified page id
     * @param id Page id to create pageview for.
     * @return OK
     */ getById(id) {
        let url_ = this.baseUrl + "/dwapi/frontend/pageviews/{id}";
        if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetById(_response);
        });
    }
    processGetById(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $c360920c42094f26$export$e288868a4b2c3c3).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Not found\nor\nThe page is not published.\nor\nThe area is not published.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Page is password protected and cannot be accessed using this endpoint.\nor\nThe current user does not have the needed permissions to view the page.\nor\nThe current user does not have the needed permissions to view the area.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets a Pageview by url
     * @param url The path of the page, i.e. /page/subpage/page
     * @param hostname (optional) Specify the hostname setup on the website to match with. If none is specified, the request hostname is used for lookup
     * @return OK
     */ getByUrl(url, hostname) {
        let url_ = this.baseUrl + "/dwapi/frontend/pageviews/url?";
        if (url === undefined) throw new Error("The parameter 'url' must be defined.");
        else if (url !== null) url_ += "url=" + encodeURIComponent("" + url) + "&";
        if (hostname !== undefined && hostname !== null) url_ += "hostname=" + encodeURIComponent("" + hostname) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetByUrl(_response);
        });
    }
    processGetByUrl(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $c360920c42094f26$export$e288868a4b2c3c3).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Not found.\nor\nThe page is not published.\nor\nThe area is not published.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Page is password protected and cannot be accessed using this endpoint.\nor\nThe current user does not have the needed permissions to view the page.\nor\nThe current user does not have the needed permissions to view the area.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}





class $b99939f383558bb0$export$5b316b7b8ac649a8 extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Gets paragraphs by query
     * @param areaId (optional) 
     * @param pageId (optional) 
     * @param itemType (optional) 
     * @return OK
     */ getAll(areaId, pageId, itemType) {
        let url_ = this.baseUrl + "/dwapi/content/paragraphs?";
        if (areaId !== undefined && areaId !== null) url_ += "AreaId=" + encodeURIComponent("" + areaId) + "&";
        if (pageId !== undefined && pageId !== null) url_ += "PageId=" + encodeURIComponent("" + pageId) + "&";
        if (itemType !== undefined && itemType !== null) url_ += "ItemType=" + encodeURIComponent("" + itemType) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetAll(_response);
        });
    }
    processGetAll(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [];
                for (let item of resultData200)result200.push((0, $0c842e52b6a3d989$export$cf52083a8935362b).fromJS(item));
            } else result200 = null;
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The page is not published.\nor\nThe area is not published.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Page is password protected and cannot be accessed using this endpoint.\nor\nThe current user does not have the needed permissions to view the page.\nor\nThe current user does not have the needed permissions to view the area.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets a paragraph by id
     * @param id Id of the paragraph
     * @return OK
     */ getById(id) {
        let url_ = this.baseUrl + "/dwapi/content/paragraphs/{id}";
        if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetById(_response);
        });
    }
    processGetById(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $0c842e52b6a3d989$export$cf52083a8935362b).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Not found\nor\nThe paragraph is not published.\nor\nThe page is not published.\nor\nThe area is not published.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The current user does not have permissions to access this paragraph.\nor\nThe current user does not have permissions to access this page.\nor\nThe current user does not have permissions to access this area.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets paragraphs by url
     * @param url The path of the page, i.e. /page/subpage/page
     * @param hostname (optional) Specify the hostname setup on the website to match with. If none is specified, the request hostname is used for lookup
     * @return OK
     */ getByUrl(url, hostname) {
        let url_ = this.baseUrl + "/dwapi/content/paragraphs/url?";
        if (url === undefined) throw new Error("The parameter 'url' must be defined.");
        else if (url !== null) url_ += "url=" + encodeURIComponent("" + url) + "&";
        if (hostname !== undefined && hostname !== null) url_ += "hostname=" + encodeURIComponent("" + hostname) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetByUrl(_response);
        });
    }
    processGetByUrl(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [];
                for (let item of resultData200)result200.push((0, $0c842e52b6a3d989$export$cf52083a8935362b).fromJS(item));
            } else result200 = null;
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Not found.\nor\nThe page is not published.\nor\nThe area is not published.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Page is password protected and cannot be accessed using this endpoint.\nor\nThe current user does not have the needed permissions to view the page.\nor\nThe current user does not have the needed permissions to view the area.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}




class $841145c549ae15cb$export$f290bb1bb2a6eae1 {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
        if (_data) {
            for(var property in _data)if (_data.hasOwnProperty(property)) this[property] = _data[property];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $841145c549ae15cb$export$f290bb1bb2a6eae1();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        for(var property in this)if (this.hasOwnProperty(property)) data[property] = this[property];
        return data;
    }
}
class $841145c549ae15cb$export$cd0f44441c3b7719 {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
        if (_data) {
            this.name = _data["Name"];
            this.scope = _data["Scope"];
            this.defaultValue = _data["DefaultValue"];
            this.translations = _data["Translations"] ? $841145c549ae15cb$export$c7d6e25184a84001.fromJS(_data["Translations"]) : undefined;
            if (Array.isArray(_data["TagDefinitions"])) {
                this.tagDefinitions = [];
                for (let item of _data["TagDefinitions"])this.tagDefinitions.push(item);
            }
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $841145c549ae15cb$export$cd0f44441c3b7719();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Name"] = this.name;
        data["Scope"] = this.scope;
        data["DefaultValue"] = this.defaultValue;
        data["Translations"] = this.translations ? this.translations.toJSON() : undefined;
        if (Array.isArray(this.tagDefinitions)) {
            data["TagDefinitions"] = [];
            for (let item of this.tagDefinitions)data["TagDefinitions"].push(item);
        }
        return data;
    }
}
let $841145c549ae15cb$export$a0295b5f8707aed7;
(function(KeyScope1) {
    KeyScope1["DesignsShared"] = "DesignsShared";
    KeyScope1["DesignsLocal"] = "DesignsLocal";
    KeyScope1["Global"] = "Global";
    KeyScope1["Local"] = "Local";
    KeyScope1["Backend"] = "Backend";
})($841145c549ae15cb$export$a0295b5f8707aed7 || ($841145c549ae15cb$export$a0295b5f8707aed7 = {}));
class $841145c549ae15cb$export$c7d6e25184a84001 {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
        if (_data) {
            for(var property in _data)if (_data.hasOwnProperty(property)) this[property] = _data[property];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $841145c549ae15cb$export$c7d6e25184a84001();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        for(var property in this)if (this.hasOwnProperty(property)) data[property] = this[property];
        return data;
    }
}
class $841145c549ae15cb$export$8ab6ae76ba4fc0ef {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
        if (_data) {
            this.cultureName = _data["CultureName"];
            this.value = _data["Value"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $841145c549ae15cb$export$8ab6ae76ba4fc0ef();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["CultureName"] = this.cultureName;
        data["Value"] = this.value;
        return data;
    }
}
class $841145c549ae15cb$export$b63289fbda65eed1 {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
        if (_data) {
            this.key = _data["Key"];
            this.defaultValue = _data["DefaultValue"];
            this.value = _data["Value"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $841145c549ae15cb$export$b63289fbda65eed1();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Key"] = this.key;
        data["DefaultValue"] = this.defaultValue;
        data["Value"] = this.value;
        return data;
    }
}


class $3103ed6b4e390509$export$9e45ef366e845f2f extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Gets all translations for a design
     * @return OK
     */ getAll(areaid) {
        let url_ = this.baseUrl + "/dwapi/translations/area/{areaid}";
        if (areaid === undefined || areaid === null) throw new Error("The parameter 'areaid' must be defined.");
        url_ = url_.replace("{areaid}", encodeURIComponent("" + areaid));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetAll(_response);
        });
    }
    processGetAll(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $841145c549ae15cb$export$f290bb1bb2a6eae1).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The specified area was not found\nor\nLayout not specified on area", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets all translations for a design
     * @return OK
     */ getAll2(designname) {
        let url_ = this.baseUrl + "/dwapi/translations/{designname}";
        if (designname === undefined || designname === null) throw new Error("The parameter 'designname' must be defined.");
        url_ = url_.replace("{designname}", encodeURIComponent("" + designname));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetAll2(_response);
        });
    }
    processGetAll2(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $841145c549ae15cb$export$f290bb1bb2a6eae1).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The specified design was not found", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets all translations for a design in a given culture
     * @return OK
     */ getAllAll(designname, culture) {
        let url_ = this.baseUrl + "/dwapi/translations/{designname}/{culture}";
        if (designname === undefined || designname === null) throw new Error("The parameter 'designname' must be defined.");
        url_ = url_.replace("{designname}", encodeURIComponent("" + designname));
        if (culture === undefined || culture === null) throw new Error("The parameter 'culture' must be defined.");
        url_ = url_.replace("{culture}", encodeURIComponent("" + culture));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetAllAll(_response);
        });
    }
    processGetAllAll(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [];
                for (let item of resultData200)result200.push((0, $841145c549ae15cb$export$b63289fbda65eed1).fromJS(item));
            } else result200 = null;
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The specified design was not found", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}


var $762b8804f5fc49b5$export$2e2bcd8739ae039 = {
    AreasClient: $69a251b68a6ea141$export$df76c3bacd435747,
    GridRowClient: $f611b94d3fd43f9d$export$5cfee608d429befb,
    NavigationsClient: $414fd9914bd1a806$export$4b77aa913f68641f,
    PagesClient: $34031120fcb21d69$export$427a4a73e42a637a,
    PageViewsClient: $7167873f46ace7b6$export$8625a278c3202ff9,
    ParagraphsClient: $b99939f383558bb0$export$5b316b7b8ac649a8,
    TranslationsClient: $3103ed6b4e390509$export$9e45ef366e845f2f
};






class $f9145ea729ce503f$export$4fa50a4986ae6cc1 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.systemName = _data["SystemName"];
            this.name = _data["Name"];
            this.type = _data["Type"];
            this.value = _data["Value"];
            this.listType = _data["ListType"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $f9145ea729ce503f$export$4fa50a4986ae6cc1();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["SystemName"] = this.systemName;
        data["Name"] = this.name;
        data["Type"] = this.type;
        data["Value"] = this.value;
        data["ListType"] = this.listType;
        super.toJSON(data);
        return data;
    }
}
class $f9145ea729ce503f$export$23e546e5a70ef637 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.name = _data["Name"];
            this.value = _data["Value"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $f9145ea729ce503f$export$23e546e5a70ef637();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Name"] = this.name;
        data["Value"] = this.value;
        super.toJSON(data);
        return data;
    }
}



class $0641c3524cf23552$export$314c028c62371730 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            this.sorting = _data["Sorting"];
            this.primaryPageId = _data["PrimaryPageId"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $0641c3524cf23552$export$314c028c62371730();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["Sorting"] = this.sorting;
        data["PrimaryPageId"] = this.primaryPageId;
        super.toJSON(data);
        return data;
    }
}



class $35e32989c9fcaf61$export$721ac1d6252bcdb extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            this.description = _data["Description"];
            this.icon = _data["Icon"];
            this.code = _data["Code"];
            this.termsCode = _data["TermsCode"];
            this.termsDescription = _data["TermsDescription"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $35e32989c9fcaf61$export$721ac1d6252bcdb();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["Description"] = this.description;
        data["Icon"] = this.icon;
        data["Code"] = this.code;
        data["TermsCode"] = this.termsCode;
        data["TermsDescription"] = this.termsDescription;
        super.toJSON(data);
        return data;
    }
}



class $3892ab379664e5e8$export$8d3c15329cf77c26 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
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
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $3892ab379664e5e8$export$8d3c15329cf77c26();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
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



class $00084699b66c2cef$export$eed10c966122c057 extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            this.description = _data["Description"];
            this.icon = _data["Icon"];
            this.priceOverMaxWeight = _data["PriceOverMaxWeight"];
            this.freeFeeAmount = _data["FreeFeeAmount"];
            this.code = _data["Code"];
            this.agentCode = _data["AgentCode"];
            this.agentName = _data["AgentName"];
            this.agentServiceCode = _data["AgentServiceCode"];
            this.agentServiceDescription = _data["AgentServiceDescription"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $00084699b66c2cef$export$eed10c966122c057();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["Description"] = this.description;
        data["Icon"] = this.icon;
        data["PriceOverMaxWeight"] = this.priceOverMaxWeight;
        data["FreeFeeAmount"] = this.freeFeeAmount;
        data["Code"] = this.code;
        data["AgentCode"] = this.agentCode;
        data["AgentName"] = this.agentName;
        data["AgentServiceCode"] = this.agentServiceCode;
        data["AgentServiceDescription"] = this.agentServiceDescription;
        super.toJSON(data);
        return data;
    }
}


class $58c2b9dbb18f0b8b$export$6f32a34769e7c3bf extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.parentOrderId = _data["ParentOrderId"];
            this.secondaryUserId = _data["SecondaryUserId"];
            this.secondaryUserName = _data["SecondaryUserName"];
            this.secret = _data["Secret"];
            this.shopId = _data["ShopId"];
            this.displayName = _data["DisplayName"];
            this.voucherCode = _data["VoucherCode"];
            this.weight = _data["Weight"];
            this.volume = _data["Volume"];
            this.createdAt = _data["CreatedAt"] ? new Date(_data["CreatedAt"].toString()) : undefined;
            this.modified = _data["Modified"] ? new Date(_data["Modified"].toString()) : undefined;
            this.completedDate = _data["CompletedDate"] ? new Date(_data["CompletedDate"].toString()) : undefined;
            this.completed = _data["Completed"];
            this.ledgerType = _data["LedgerType"];
            this.stateId = _data["StateId"];
            this.stateName = _data["StateName"];
            this.stateDescription = _data["StateDescription"];
            this.integrationOrderId = _data["IntegrationOrderId"];
            this.recurringOrderId = _data["RecurringOrderId"];
            this.customerUserId = _data["CustomerUserId"];
            this.customerNumber = _data["CustomerNumber"];
            this.customerEan = _data["CustomerEan"];
            this.customerRefId = _data["CustomerRefId"];
            this.customerCompany = _data["CustomerCompany"];
            this.customerTitle = _data["CustomerTitle"];
            this.customerName = _data["CustomerName"];
            this.customerFirstName = _data["CustomerFirstName"];
            this.customerSurname = _data["CustomerSurname"];
            this.customerMiddleName = _data["CustomerMiddleName"];
            this.customerHouseNumber = _data["CustomerHouseNumber"];
            this.customerInitials = _data["CustomerInitials"];
            this.customerPrefix = _data["CustomerPrefix"];
            this.customerAddress = _data["CustomerAddress"];
            this.customerAddress2 = _data["CustomerAddress2"];
            this.customerAddressId = _data["CustomerAddressId"];
            this.customerZip = _data["CustomerZip"];
            this.customerCity = _data["CustomerCity"];
            this.customerCountry = _data["CustomerCountry"];
            this.customerCountryCode = _data["CustomerCountryCode"];
            this.customerRegion = _data["CustomerRegion"];
            this.customerPhone = _data["CustomerPhone"];
            this.customerEmail = _data["CustomerEmail"];
            this.customerCell = _data["CustomerCell"];
            this.customerAccepted = _data["CustomerAccepted"];
            this.customerComment = _data["CustomerComment"];
            this.deliveryCompany = _data["DeliveryCompany"];
            this.deliveryName = _data["DeliveryName"];
            this.deliveryFirstName = _data["DeliveryFirstName"];
            this.deliverySurname = _data["DeliverySurname"];
            this.deliveryMiddleName = _data["DeliveryMiddleName"];
            this.deliveryTitle = _data["DeliveryTitle"];
            this.deliveryHouseNumber = _data["DeliveryHouseNumber"];
            this.deliveryInitials = _data["DeliveryInitials"];
            this.deliveryPrefix = _data["DeliveryPrefix"];
            this.deliveryAddress = _data["DeliveryAddress"];
            this.deliveryAddress2 = _data["DeliveryAddress2"];
            this.deliveryAddressId = _data["DeliveryAddressId"];
            this.deliveryZip = _data["DeliveryZip"];
            this.deliveryCity = _data["DeliveryCity"];
            this.deliveryCountry = _data["DeliveryCountry"];
            this.deliveryCountryCode = _data["DeliveryCountryCode"];
            this.deliveryRegion = _data["DeliveryRegion"];
            this.deliveryPhone = _data["DeliveryPhone"];
            this.deliveryEmail = _data["DeliveryEmail"];
            this.deliveryCell = _data["DeliveryCell"];
            this.reference = _data["Reference"];
            this.newsletterSubscribe = _data["NewsletterSubscribe"];
            this.transactionCardnumber = _data["TransactionCardnumber"];
            this.transactionCardType = _data["TransactionCardType"];
            this.transactionNumber = _data["TransactionNumber"];
            this.transactionStatus = _data["TransactionStatus"];
            this.shippingDate = _data["ShippingDate"] ? new Date(_data["ShippingDate"].toString()) : undefined;
            this.trackAndTraceName = _data["TrackAndTraceName"];
            this.trackAndTraceURL = _data["TrackAndTraceURL"];
            this.trackAndTraceNumber = _data["TrackAndTraceNumber"];
            if (Array.isArray(_data["OrderLines"])) {
                this.orderLines = [];
                for (let item of _data["OrderLines"])this.orderLines.push($58c2b9dbb18f0b8b$export$8894df4b1b22f35e.fromJS(item));
            }
            if (_data["OrderFields"]) {
                this.orderFields = {};
                for(let key in _data["OrderFields"])if (_data["OrderFields"].hasOwnProperty(key)) this.orderFields[key] = _data["OrderFields"][key] ? (0, $f9145ea729ce503f$export$4fa50a4986ae6cc1).fromJS(_data["OrderFields"][key]) : new (0, $f9145ea729ce503f$export$4fa50a4986ae6cc1)();
            }
            this.totalDiscount = _data["TotalDiscount"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["TotalDiscount"]) : undefined;
            this.totalProductDiscount = _data["TotalProductDiscount"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["TotalProductDiscount"]) : undefined;
            this.totalOrderDiscount = _data["TotalOrderDiscount"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["TotalOrderDiscount"]) : undefined;
            this.price = _data["Price"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["Price"]) : undefined;
            this.priceBeforeFees = _data["PriceBeforeFees"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["PriceBeforeFees"]) : undefined;
            this.totalPriceBeforeFeesAndTaxes = _data["TotalPriceBeforeFeesAndTaxes"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["TotalPriceBeforeFeesAndTaxes"]) : undefined;
            this.totalTaxes = _data["TotalTaxes"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["TotalTaxes"]) : undefined;
            this.shippingFee = _data["ShippingFee"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["ShippingFee"]) : undefined;
            this.shippingMethod = _data["ShippingMethod"] ? (0, $00084699b66c2cef$export$eed10c966122c057).fromJS(_data["ShippingMethod"]) : undefined;
            this.paymentMethod = _data["PaymentMethod"] ? (0, $35e32989c9fcaf61$export$721ac1d6252bcdb).fromJS(_data["PaymentMethod"]) : undefined;
            this.paymentFee = _data["PaymentFee"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["PaymentFee"]) : undefined;
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $58c2b9dbb18f0b8b$export$6f32a34769e7c3bf();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Id"] = this.id;
        data["ParentOrderId"] = this.parentOrderId;
        data["SecondaryUserId"] = this.secondaryUserId;
        data["SecondaryUserName"] = this.secondaryUserName;
        data["Secret"] = this.secret;
        data["ShopId"] = this.shopId;
        data["DisplayName"] = this.displayName;
        data["VoucherCode"] = this.voucherCode;
        data["Weight"] = this.weight;
        data["Volume"] = this.volume;
        data["CreatedAt"] = this.createdAt ? this.createdAt.toISOString() : undefined;
        data["Modified"] = this.modified ? this.modified.toISOString() : undefined;
        data["CompletedDate"] = this.completedDate ? this.completedDate.toISOString() : undefined;
        data["Completed"] = this.completed;
        data["LedgerType"] = this.ledgerType;
        data["StateId"] = this.stateId;
        data["StateName"] = this.stateName;
        data["StateDescription"] = this.stateDescription;
        data["IntegrationOrderId"] = this.integrationOrderId;
        data["RecurringOrderId"] = this.recurringOrderId;
        data["CustomerUserId"] = this.customerUserId;
        data["CustomerNumber"] = this.customerNumber;
        data["CustomerEan"] = this.customerEan;
        data["CustomerRefId"] = this.customerRefId;
        data["CustomerCompany"] = this.customerCompany;
        data["CustomerTitle"] = this.customerTitle;
        data["CustomerName"] = this.customerName;
        data["CustomerFirstName"] = this.customerFirstName;
        data["CustomerSurname"] = this.customerSurname;
        data["CustomerMiddleName"] = this.customerMiddleName;
        data["CustomerHouseNumber"] = this.customerHouseNumber;
        data["CustomerInitials"] = this.customerInitials;
        data["CustomerPrefix"] = this.customerPrefix;
        data["CustomerAddress"] = this.customerAddress;
        data["CustomerAddress2"] = this.customerAddress2;
        data["CustomerAddressId"] = this.customerAddressId;
        data["CustomerZip"] = this.customerZip;
        data["CustomerCity"] = this.customerCity;
        data["CustomerCountry"] = this.customerCountry;
        data["CustomerCountryCode"] = this.customerCountryCode;
        data["CustomerRegion"] = this.customerRegion;
        data["CustomerPhone"] = this.customerPhone;
        data["CustomerEmail"] = this.customerEmail;
        data["CustomerCell"] = this.customerCell;
        data["CustomerAccepted"] = this.customerAccepted;
        data["CustomerComment"] = this.customerComment;
        data["DeliveryCompany"] = this.deliveryCompany;
        data["DeliveryName"] = this.deliveryName;
        data["DeliveryFirstName"] = this.deliveryFirstName;
        data["DeliverySurname"] = this.deliverySurname;
        data["DeliveryMiddleName"] = this.deliveryMiddleName;
        data["DeliveryTitle"] = this.deliveryTitle;
        data["DeliveryHouseNumber"] = this.deliveryHouseNumber;
        data["DeliveryInitials"] = this.deliveryInitials;
        data["DeliveryPrefix"] = this.deliveryPrefix;
        data["DeliveryAddress"] = this.deliveryAddress;
        data["DeliveryAddress2"] = this.deliveryAddress2;
        data["DeliveryAddressId"] = this.deliveryAddressId;
        data["DeliveryZip"] = this.deliveryZip;
        data["DeliveryCity"] = this.deliveryCity;
        data["DeliveryCountry"] = this.deliveryCountry;
        data["DeliveryCountryCode"] = this.deliveryCountryCode;
        data["DeliveryRegion"] = this.deliveryRegion;
        data["DeliveryPhone"] = this.deliveryPhone;
        data["DeliveryEmail"] = this.deliveryEmail;
        data["DeliveryCell"] = this.deliveryCell;
        data["Reference"] = this.reference;
        data["NewsletterSubscribe"] = this.newsletterSubscribe;
        data["TransactionCardnumber"] = this.transactionCardnumber;
        data["TransactionCardType"] = this.transactionCardType;
        data["TransactionNumber"] = this.transactionNumber;
        data["TransactionStatus"] = this.transactionStatus;
        data["ShippingDate"] = this.shippingDate ? this.shippingDate.toISOString() : undefined;
        data["TrackAndTraceName"] = this.trackAndTraceName;
        data["TrackAndTraceURL"] = this.trackAndTraceURL;
        data["TrackAndTraceNumber"] = this.trackAndTraceNumber;
        if (Array.isArray(this.orderLines)) {
            data["OrderLines"] = [];
            for (let item of this.orderLines)data["OrderLines"].push(item.toJSON());
        }
        if (this.orderFields) {
            data["OrderFields"] = {};
            for(let key in this.orderFields)if (this.orderFields.hasOwnProperty(key)) data["OrderFields"][key] = this.orderFields[key] ? this.orderFields[key].toJSON() : undefined;
        }
        data["TotalDiscount"] = this.totalDiscount ? this.totalDiscount.toJSON() : undefined;
        data["TotalProductDiscount"] = this.totalProductDiscount ? this.totalProductDiscount.toJSON() : undefined;
        data["TotalOrderDiscount"] = this.totalOrderDiscount ? this.totalOrderDiscount.toJSON() : undefined;
        data["Price"] = this.price ? this.price.toJSON() : undefined;
        data["PriceBeforeFees"] = this.priceBeforeFees ? this.priceBeforeFees.toJSON() : undefined;
        data["TotalPriceBeforeFeesAndTaxes"] = this.totalPriceBeforeFeesAndTaxes ? this.totalPriceBeforeFeesAndTaxes.toJSON() : undefined;
        data["TotalTaxes"] = this.totalTaxes ? this.totalTaxes.toJSON() : undefined;
        data["ShippingFee"] = this.shippingFee ? this.shippingFee.toJSON() : undefined;
        data["ShippingMethod"] = this.shippingMethod ? this.shippingMethod.toJSON() : undefined;
        data["PaymentMethod"] = this.paymentMethod ? this.paymentMethod.toJSON() : undefined;
        data["PaymentFee"] = this.paymentFee ? this.paymentFee.toJSON() : undefined;
        super.toJSON(data);
        return data;
    }
}
class $58c2b9dbb18f0b8b$export$8894df4b1b22f35e extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.productId = _data["ProductId"];
            this.productVariantId = _data["ProductVariantId"];
            this.productLanguageId = _data["ProductLanguageId"];
            this.productName = _data["ProductName"];
            this.productNumber = _data["ProductNumber"];
            this.productVariantName = _data["ProductVariantName"];
            this.productImage = _data["ProductImage"];
            this.primaryOrDefaultGroup = _data["PrimaryOrDefaultGroup"] ? (0, $0641c3524cf23552$export$314c028c62371730).fromJS(_data["PrimaryOrDefaultGroup"]) : undefined;
            this.reference = _data["Reference"];
            this.quantity = _data["Quantity"];
            this.weight = _data["Weight"];
            this.volume = _data["Volume"];
            this.unitId = _data["UnitId"];
            this.unitName = _data["UnitName"];
            this.stockLocationId = _data["StockLocationId"];
            this.orderLineType = _data["OrderLineType"];
            if (_data["OrderLineFields"]) {
                this.orderLineFields = {};
                for(let key in _data["OrderLineFields"])if (_data["OrderLineFields"].hasOwnProperty(key)) this.orderLineFields[key] = _data["OrderLineFields"][key] ? (0, $f9145ea729ce503f$export$4fa50a4986ae6cc1).fromJS(_data["OrderLineFields"][key]) : new (0, $f9145ea729ce503f$export$4fa50a4986ae6cc1)();
            }
            this.price = _data["Price"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["Price"]) : undefined;
            this.unitPrice = _data["UnitPrice"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["UnitPrice"]) : undefined;
            this.unitPriceBeforeDiscount = _data["UnitPriceBeforeDiscount"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["UnitPriceBeforeDiscount"]) : undefined;
            this.totalDiscount = _data["TotalDiscount"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["TotalDiscount"]) : undefined;
            if (Array.isArray(_data["BomOrderLines"])) {
                this.bomOrderLines = [];
                for (let item of _data["BomOrderLines"])this.bomOrderLines.push($58c2b9dbb18f0b8b$export$8894df4b1b22f35e.fromJS(item));
            }
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $58c2b9dbb18f0b8b$export$8894df4b1b22f35e();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Id"] = this.id;
        data["ProductId"] = this.productId;
        data["ProductVariantId"] = this.productVariantId;
        data["ProductLanguageId"] = this.productLanguageId;
        data["ProductName"] = this.productName;
        data["ProductNumber"] = this.productNumber;
        data["ProductVariantName"] = this.productVariantName;
        data["ProductImage"] = this.productImage;
        data["PrimaryOrDefaultGroup"] = this.primaryOrDefaultGroup ? this.primaryOrDefaultGroup.toJSON() : undefined;
        data["Reference"] = this.reference;
        data["Quantity"] = this.quantity;
        data["Weight"] = this.weight;
        data["Volume"] = this.volume;
        data["UnitId"] = this.unitId;
        data["UnitName"] = this.unitName;
        data["StockLocationId"] = this.stockLocationId;
        data["OrderLineType"] = this.orderLineType;
        if (this.orderLineFields) {
            data["OrderLineFields"] = {};
            for(let key in this.orderLineFields)if (this.orderLineFields.hasOwnProperty(key)) data["OrderLineFields"][key] = this.orderLineFields[key] ? this.orderLineFields[key].toJSON() : undefined;
        }
        data["Price"] = this.price ? this.price.toJSON() : undefined;
        data["UnitPrice"] = this.unitPrice ? this.unitPrice.toJSON() : undefined;
        data["UnitPriceBeforeDiscount"] = this.unitPriceBeforeDiscount ? this.unitPriceBeforeDiscount.toJSON() : undefined;
        data["TotalDiscount"] = this.totalDiscount ? this.totalDiscount.toJSON() : undefined;
        if (Array.isArray(this.bomOrderLines)) {
            data["BomOrderLines"] = [];
            for (let item of this.bomOrderLines)data["BomOrderLines"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}
let $58c2b9dbb18f0b8b$export$ebabf1f6e8484fd8;
(function(OrderLineType1) {
    OrderLineType1["Product"] = "Product";
    OrderLineType1["Discount"] = "Discount";
    OrderLineType1["Fixed"] = "Fixed";
    OrderLineType1["ProductDiscount"] = "ProductDiscount";
    OrderLineType1["Tax"] = "Tax";
    OrderLineType1["PointProduct"] = "PointProduct";
    OrderLineType1["GiftCard"] = "GiftCard";
})($58c2b9dbb18f0b8b$export$ebabf1f6e8484fd8 || ($58c2b9dbb18f0b8b$export$ebabf1f6e8484fd8 = {}));


class $4dc04e9fd447520a$export$851d109e5e4aef3d {
    constructor(data){
        if (data) {
            for(var property in data)if (data.hasOwnProperty(property)) this[property] = data[property];
        }
    }
    init(_data) {
        if (_data) {
            this.cartSecret = _data["CartSecret"];
            this.displayName = _data["DisplayName"];
            this.createdAt = _data["CreatedAt"] ? new Date(_data["CreatedAt"].toString()) : undefined;
            this.modified = _data["Modified"] ? new Date(_data["Modified"].toString()) : undefined;
            this.shopId = _data["ShopId"];
            this.id = _data["Id"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $4dc04e9fd447520a$export$851d109e5e4aef3d();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["CartSecret"] = this.cartSecret;
        data["DisplayName"] = this.displayName;
        data["CreatedAt"] = this.createdAt ? this.createdAt.toISOString() : undefined;
        data["Modified"] = this.modified ? this.modified.toISOString() : undefined;
        data["ShopId"] = this.shopId;
        data["Id"] = this.id;
        return data;
    }
}


class $54bc93fc8f89c610$export$33ee60cc95d2cb98 extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Create cart
     * @param currencyCode The currency code to create the order in - i.e. EUR
     * @param countryCode The country code to use for VAT, shipping and payment fees and rules, i.e. DE
     * @param languageId The language to use for product data, i.e. LANG1
     * @param id (optional) 
     * @param parentOrderId (optional) 
     * @param secondaryUserId (optional) 
     * @param secondaryUserName (optional) 
     * @param secret (optional) 
     * @param shopId (optional) 
     * @param displayName (optional) 
     * @param voucherCode (optional) 
     * @param weight (optional) 
     * @param volume (optional) 
     * @param createdAt (optional) 
     * @param modified (optional) 
     * @param completedDate (optional) 
     * @param completed (optional) 
     * @param ledgerType (optional) 
     * @param stateId (optional) 
     * @param stateName (optional) 
     * @param stateDescription (optional) 
     * @param integrationOrderId (optional) 
     * @param recurringOrderId (optional) 
     * @param customerUserId (optional) 
     * @param customerNumber (optional) 
     * @param customerEan (optional) 
     * @param customerRefId (optional) 
     * @param customerCompany (optional) 
     * @param customerTitle (optional) 
     * @param customerName (optional) 
     * @param customerFirstName (optional) 
     * @param customerSurname (optional) 
     * @param customerMiddleName (optional) 
     * @param customerHouseNumber (optional) 
     * @param customerInitials (optional) 
     * @param customerPrefix (optional) 
     * @param customerAddress (optional) 
     * @param customerAddress2 (optional) 
     * @param customerAddressId (optional) 
     * @param customerZip (optional) 
     * @param customerCity (optional) 
     * @param customerCountry (optional) 
     * @param customerCountryCode (optional) 
     * @param customerRegion (optional) 
     * @param customerPhone (optional) 
     * @param customerEmail (optional) 
     * @param customerCell (optional) 
     * @param customerAccepted (optional) 
     * @param customerComment (optional) 
     * @param deliveryCompany (optional) 
     * @param deliveryName (optional) 
     * @param deliveryFirstName (optional) 
     * @param deliverySurname (optional) 
     * @param deliveryMiddleName (optional) 
     * @param deliveryTitle (optional) 
     * @param deliveryHouseNumber (optional) 
     * @param deliveryInitials (optional) 
     * @param deliveryPrefix (optional) 
     * @param deliveryAddress (optional) 
     * @param deliveryAddress2 (optional) 
     * @param deliveryAddressId (optional) 
     * @param deliveryZip (optional) 
     * @param deliveryCity (optional) 
     * @param deliveryCountry (optional) 
     * @param deliveryCountryCode (optional) 
     * @param deliveryRegion (optional) 
     * @param deliveryPhone (optional) 
     * @param deliveryEmail (optional) 
     * @param deliveryCell (optional) 
     * @param reference (optional) 
     * @param newsletterSubscribe (optional) 
     * @param transactionCardnumber (optional) 
     * @param transactionCardType (optional) 
     * @param transactionNumber (optional) 
     * @param transactionStatus (optional) 
     * @param shippingDate (optional) 
     * @param trackAndTraceName (optional) 
     * @param trackAndTraceURL (optional) 
     * @param trackAndTraceNumber (optional) 
     * @param orderLines (optional) 
     * @param orderFields (optional) 
     * @param totalDiscount (optional) 
     * @param totalProductDiscount (optional) 
     * @param totalOrderDiscount (optional) 
     * @param price (optional) 
     * @param priceBeforeFees (optional) 
     * @param totalPriceBeforeFeesAndTaxes (optional) 
     * @param totalTaxes (optional) 
     * @param shippingFee (optional) 
     * @param shippingMethod (optional) 
     * @param paymentMethod (optional) 
     * @param paymentFee (optional) 
     * @return Created cart view model
     */ createCart(currencyCode, countryCode, languageId, id, parentOrderId, secondaryUserId, secondaryUserName, secret, shopId, displayName, voucherCode, weight, volume, createdAt, modified, completedDate, completed, ledgerType, stateId, stateName, stateDescription, integrationOrderId, recurringOrderId, customerUserId, customerNumber, customerEan, customerRefId, customerCompany, customerTitle, customerName, customerFirstName, customerSurname, customerMiddleName, customerHouseNumber, customerInitials, customerPrefix, customerAddress, customerAddress2, customerAddressId, customerZip, customerCity, customerCountry, customerCountryCode, customerRegion, customerPhone, customerEmail, customerCell, customerAccepted, customerComment, deliveryCompany, deliveryName, deliveryFirstName, deliverySurname, deliveryMiddleName, deliveryTitle, deliveryHouseNumber, deliveryInitials, deliveryPrefix, deliveryAddress, deliveryAddress2, deliveryAddressId, deliveryZip, deliveryCity, deliveryCountry, deliveryCountryCode, deliveryRegion, deliveryPhone, deliveryEmail, deliveryCell, reference, newsletterSubscribe, transactionCardnumber, transactionCardType, transactionNumber, transactionStatus, shippingDate, trackAndTraceName, trackAndTraceURL, trackAndTraceNumber, orderLines, orderFields, totalDiscount, totalProductDiscount, totalOrderDiscount, price, priceBeforeFees, totalPriceBeforeFeesAndTaxes, totalTaxes, shippingFee, shippingMethod, paymentMethod, paymentFee) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts?";
        if (currencyCode === undefined) throw new Error("The parameter 'currencyCode' must be defined.");
        else if (currencyCode !== null) url_ += "currencyCode=" + encodeURIComponent("" + currencyCode) + "&";
        if (countryCode === undefined) throw new Error("The parameter 'countryCode' must be defined.");
        else if (countryCode !== null) url_ += "countryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (languageId === undefined) throw new Error("The parameter 'languageId' must be defined.");
        else if (languageId !== null) url_ += "languageId=" + encodeURIComponent("" + languageId) + "&";
        if (id !== undefined && id !== null) url_ += "Id=" + encodeURIComponent("" + id) + "&";
        if (parentOrderId !== undefined && parentOrderId !== null) url_ += "ParentOrderId=" + encodeURIComponent("" + parentOrderId) + "&";
        if (secondaryUserId === null) throw new Error("The parameter 'secondaryUserId' cannot be null.");
        else if (secondaryUserId !== undefined) url_ += "SecondaryUserId=" + encodeURIComponent("" + secondaryUserId) + "&";
        if (secondaryUserName !== undefined && secondaryUserName !== null) url_ += "SecondaryUserName=" + encodeURIComponent("" + secondaryUserName) + "&";
        if (secret !== undefined && secret !== null) url_ += "Secret=" + encodeURIComponent("" + secret) + "&";
        if (shopId !== undefined && shopId !== null) url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (displayName !== undefined && displayName !== null) url_ += "DisplayName=" + encodeURIComponent("" + displayName) + "&";
        if (voucherCode !== undefined && voucherCode !== null) url_ += "VoucherCode=" + encodeURIComponent("" + voucherCode) + "&";
        if (weight === null) throw new Error("The parameter 'weight' cannot be null.");
        else if (weight !== undefined) url_ += "Weight=" + encodeURIComponent("" + weight) + "&";
        if (volume === null) throw new Error("The parameter 'volume' cannot be null.");
        else if (volume !== undefined) url_ += "Volume=" + encodeURIComponent("" + volume) + "&";
        if (createdAt === null) throw new Error("The parameter 'createdAt' cannot be null.");
        else if (createdAt !== undefined) url_ += "CreatedAt=" + encodeURIComponent(createdAt ? "" + createdAt.toISOString() : "") + "&";
        if (modified === null) throw new Error("The parameter 'modified' cannot be null.");
        else if (modified !== undefined) url_ += "Modified=" + encodeURIComponent(modified ? "" + modified.toISOString() : "") + "&";
        if (completedDate !== undefined && completedDate !== null) url_ += "CompletedDate=" + encodeURIComponent(completedDate ? "" + completedDate.toISOString() : "") + "&";
        if (completed !== undefined && completed !== null) url_ += "Completed=" + encodeURIComponent("" + completed) + "&";
        if (ledgerType !== undefined && ledgerType !== null) url_ += "LedgerType=" + encodeURIComponent("" + ledgerType) + "&";
        if (stateId !== undefined && stateId !== null) url_ += "StateId=" + encodeURIComponent("" + stateId) + "&";
        if (stateName !== undefined && stateName !== null) url_ += "StateName=" + encodeURIComponent("" + stateName) + "&";
        if (stateDescription !== undefined && stateDescription !== null) url_ += "StateDescription=" + encodeURIComponent("" + stateDescription) + "&";
        if (integrationOrderId !== undefined && integrationOrderId !== null) url_ += "IntegrationOrderId=" + encodeURIComponent("" + integrationOrderId) + "&";
        if (recurringOrderId !== undefined && recurringOrderId !== null) url_ += "RecurringOrderId=" + encodeURIComponent("" + recurringOrderId) + "&";
        if (customerUserId === null) throw new Error("The parameter 'customerUserId' cannot be null.");
        else if (customerUserId !== undefined) url_ += "CustomerUserId=" + encodeURIComponent("" + customerUserId) + "&";
        if (customerNumber !== undefined && customerNumber !== null) url_ += "CustomerNumber=" + encodeURIComponent("" + customerNumber) + "&";
        if (customerEan !== undefined && customerEan !== null) url_ += "CustomerEan=" + encodeURIComponent("" + customerEan) + "&";
        if (customerRefId !== undefined && customerRefId !== null) url_ += "CustomerRefId=" + encodeURIComponent("" + customerRefId) + "&";
        if (customerCompany !== undefined && customerCompany !== null) url_ += "CustomerCompany=" + encodeURIComponent("" + customerCompany) + "&";
        if (customerTitle !== undefined && customerTitle !== null) url_ += "CustomerTitle=" + encodeURIComponent("" + customerTitle) + "&";
        if (customerName !== undefined && customerName !== null) url_ += "CustomerName=" + encodeURIComponent("" + customerName) + "&";
        if (customerFirstName !== undefined && customerFirstName !== null) url_ += "CustomerFirstName=" + encodeURIComponent("" + customerFirstName) + "&";
        if (customerSurname !== undefined && customerSurname !== null) url_ += "CustomerSurname=" + encodeURIComponent("" + customerSurname) + "&";
        if (customerMiddleName !== undefined && customerMiddleName !== null) url_ += "CustomerMiddleName=" + encodeURIComponent("" + customerMiddleName) + "&";
        if (customerHouseNumber !== undefined && customerHouseNumber !== null) url_ += "CustomerHouseNumber=" + encodeURIComponent("" + customerHouseNumber) + "&";
        if (customerInitials !== undefined && customerInitials !== null) url_ += "CustomerInitials=" + encodeURIComponent("" + customerInitials) + "&";
        if (customerPrefix !== undefined && customerPrefix !== null) url_ += "CustomerPrefix=" + encodeURIComponent("" + customerPrefix) + "&";
        if (customerAddress !== undefined && customerAddress !== null) url_ += "CustomerAddress=" + encodeURIComponent("" + customerAddress) + "&";
        if (customerAddress2 !== undefined && customerAddress2 !== null) url_ += "CustomerAddress2=" + encodeURIComponent("" + customerAddress2) + "&";
        if (customerAddressId === null) throw new Error("The parameter 'customerAddressId' cannot be null.");
        else if (customerAddressId !== undefined) url_ += "CustomerAddressId=" + encodeURIComponent("" + customerAddressId) + "&";
        if (customerZip !== undefined && customerZip !== null) url_ += "CustomerZip=" + encodeURIComponent("" + customerZip) + "&";
        if (customerCity !== undefined && customerCity !== null) url_ += "CustomerCity=" + encodeURIComponent("" + customerCity) + "&";
        if (customerCountry !== undefined && customerCountry !== null) url_ += "CustomerCountry=" + encodeURIComponent("" + customerCountry) + "&";
        if (customerCountryCode !== undefined && customerCountryCode !== null) url_ += "CustomerCountryCode=" + encodeURIComponent("" + customerCountryCode) + "&";
        if (customerRegion !== undefined && customerRegion !== null) url_ += "CustomerRegion=" + encodeURIComponent("" + customerRegion) + "&";
        if (customerPhone !== undefined && customerPhone !== null) url_ += "CustomerPhone=" + encodeURIComponent("" + customerPhone) + "&";
        if (customerEmail !== undefined && customerEmail !== null) url_ += "CustomerEmail=" + encodeURIComponent("" + customerEmail) + "&";
        if (customerCell !== undefined && customerCell !== null) url_ += "CustomerCell=" + encodeURIComponent("" + customerCell) + "&";
        if (customerAccepted !== undefined && customerAccepted !== null) url_ += "CustomerAccepted=" + encodeURIComponent("" + customerAccepted) + "&";
        if (customerComment !== undefined && customerComment !== null) url_ += "CustomerComment=" + encodeURIComponent("" + customerComment) + "&";
        if (deliveryCompany !== undefined && deliveryCompany !== null) url_ += "DeliveryCompany=" + encodeURIComponent("" + deliveryCompany) + "&";
        if (deliveryName !== undefined && deliveryName !== null) url_ += "DeliveryName=" + encodeURIComponent("" + deliveryName) + "&";
        if (deliveryFirstName !== undefined && deliveryFirstName !== null) url_ += "DeliveryFirstName=" + encodeURIComponent("" + deliveryFirstName) + "&";
        if (deliverySurname !== undefined && deliverySurname !== null) url_ += "DeliverySurname=" + encodeURIComponent("" + deliverySurname) + "&";
        if (deliveryMiddleName !== undefined && deliveryMiddleName !== null) url_ += "DeliveryMiddleName=" + encodeURIComponent("" + deliveryMiddleName) + "&";
        if (deliveryTitle !== undefined && deliveryTitle !== null) url_ += "DeliveryTitle=" + encodeURIComponent("" + deliveryTitle) + "&";
        if (deliveryHouseNumber !== undefined && deliveryHouseNumber !== null) url_ += "DeliveryHouseNumber=" + encodeURIComponent("" + deliveryHouseNumber) + "&";
        if (deliveryInitials !== undefined && deliveryInitials !== null) url_ += "DeliveryInitials=" + encodeURIComponent("" + deliveryInitials) + "&";
        if (deliveryPrefix !== undefined && deliveryPrefix !== null) url_ += "DeliveryPrefix=" + encodeURIComponent("" + deliveryPrefix) + "&";
        if (deliveryAddress !== undefined && deliveryAddress !== null) url_ += "DeliveryAddress=" + encodeURIComponent("" + deliveryAddress) + "&";
        if (deliveryAddress2 !== undefined && deliveryAddress2 !== null) url_ += "DeliveryAddress2=" + encodeURIComponent("" + deliveryAddress2) + "&";
        if (deliveryAddressId === null) throw new Error("The parameter 'deliveryAddressId' cannot be null.");
        else if (deliveryAddressId !== undefined) url_ += "DeliveryAddressId=" + encodeURIComponent("" + deliveryAddressId) + "&";
        if (deliveryZip !== undefined && deliveryZip !== null) url_ += "DeliveryZip=" + encodeURIComponent("" + deliveryZip) + "&";
        if (deliveryCity !== undefined && deliveryCity !== null) url_ += "DeliveryCity=" + encodeURIComponent("" + deliveryCity) + "&";
        if (deliveryCountry !== undefined && deliveryCountry !== null) url_ += "DeliveryCountry=" + encodeURIComponent("" + deliveryCountry) + "&";
        if (deliveryCountryCode !== undefined && deliveryCountryCode !== null) url_ += "DeliveryCountryCode=" + encodeURIComponent("" + deliveryCountryCode) + "&";
        if (deliveryRegion !== undefined && deliveryRegion !== null) url_ += "DeliveryRegion=" + encodeURIComponent("" + deliveryRegion) + "&";
        if (deliveryPhone !== undefined && deliveryPhone !== null) url_ += "DeliveryPhone=" + encodeURIComponent("" + deliveryPhone) + "&";
        if (deliveryEmail !== undefined && deliveryEmail !== null) url_ += "DeliveryEmail=" + encodeURIComponent("" + deliveryEmail) + "&";
        if (deliveryCell !== undefined && deliveryCell !== null) url_ += "DeliveryCell=" + encodeURIComponent("" + deliveryCell) + "&";
        if (reference !== undefined && reference !== null) url_ += "Reference=" + encodeURIComponent("" + reference) + "&";
        if (newsletterSubscribe === null) throw new Error("The parameter 'newsletterSubscribe' cannot be null.");
        else if (newsletterSubscribe !== undefined) url_ += "NewsletterSubscribe=" + encodeURIComponent("" + newsletterSubscribe) + "&";
        if (transactionCardnumber !== undefined && transactionCardnumber !== null) url_ += "TransactionCardnumber=" + encodeURIComponent("" + transactionCardnumber) + "&";
        if (transactionCardType !== undefined && transactionCardType !== null) url_ += "TransactionCardType=" + encodeURIComponent("" + transactionCardType) + "&";
        if (transactionNumber !== undefined && transactionNumber !== null) url_ += "TransactionNumber=" + encodeURIComponent("" + transactionNumber) + "&";
        if (transactionStatus !== undefined && transactionStatus !== null) url_ += "TransactionStatus=" + encodeURIComponent("" + transactionStatus) + "&";
        if (shippingDate !== undefined && shippingDate !== null) url_ += "ShippingDate=" + encodeURIComponent(shippingDate ? "" + shippingDate.toISOString() : "") + "&";
        if (trackAndTraceName !== undefined && trackAndTraceName !== null) url_ += "TrackAndTraceName=" + encodeURIComponent("" + trackAndTraceName) + "&";
        if (trackAndTraceURL !== undefined && trackAndTraceURL !== null) url_ += "TrackAndTraceURL=" + encodeURIComponent("" + trackAndTraceURL) + "&";
        if (trackAndTraceNumber !== undefined && trackAndTraceNumber !== null) url_ += "TrackAndTraceNumber=" + encodeURIComponent("" + trackAndTraceNumber) + "&";
        if (orderLines !== undefined && orderLines !== null) orderLines && orderLines.forEach((item)=>{
            url_ += "OrderLines=" + encodeURIComponent("" + item) + "&";
        });
        if (orderFields !== undefined && orderFields !== null) url_ += "OrderFields=" + encodeURIComponent("" + orderFields) + "&";
        if (totalDiscount !== undefined && totalDiscount !== null) url_ += "TotalDiscount=" + encodeURIComponent("" + totalDiscount) + "&";
        if (totalProductDiscount !== undefined && totalProductDiscount !== null) url_ += "TotalProductDiscount=" + encodeURIComponent("" + totalProductDiscount) + "&";
        if (totalOrderDiscount !== undefined && totalOrderDiscount !== null) url_ += "TotalOrderDiscount=" + encodeURIComponent("" + totalOrderDiscount) + "&";
        if (price !== undefined && price !== null) url_ += "Price=" + encodeURIComponent("" + price) + "&";
        if (priceBeforeFees !== undefined && priceBeforeFees !== null) url_ += "PriceBeforeFees=" + encodeURIComponent("" + priceBeforeFees) + "&";
        if (totalPriceBeforeFeesAndTaxes !== undefined && totalPriceBeforeFeesAndTaxes !== null) url_ += "TotalPriceBeforeFeesAndTaxes=" + encodeURIComponent("" + totalPriceBeforeFeesAndTaxes) + "&";
        if (totalTaxes !== undefined && totalTaxes !== null) url_ += "TotalTaxes=" + encodeURIComponent("" + totalTaxes) + "&";
        if (shippingFee !== undefined && shippingFee !== null) url_ += "ShippingFee=" + encodeURIComponent("" + shippingFee) + "&";
        if (shippingMethod !== undefined && shippingMethod !== null) url_ += "ShippingMethod=" + encodeURIComponent("" + shippingMethod) + "&";
        if (paymentMethod !== undefined && paymentMethod !== null) url_ += "PaymentMethod=" + encodeURIComponent("" + paymentMethod) + "&";
        if (paymentFee !== undefined && paymentFee !== null) url_ += "PaymentFee=" + encodeURIComponent("" + paymentFee) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "POST",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processCreateCart(_response);
        });
    }
    processCreateCart(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $58c2b9dbb18f0b8b$export$6f32a34769e7c3bf).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The currency is not found.\nor\nThe country is not found.\nor\nThe language is not found.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The current user does not have permissions to create a cart.\nor\nThe current user does not have permissions to create a cart to specified user.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets a list of cart secrets for the athenticated user
     * @param pageSize (optional) Max number of secrets to return. Default is 50
     * @param currentPage (optional) The page number. Default is 1
     * @return OK
     */ getCarts(pageSize, currentPage) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts?";
        if (pageSize === null) throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined) url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (currentPage === null) throw new Error("The parameter 'currentPage' cannot be null.");
        else if (currentPage !== undefined) url_ += "CurrentPage=" + encodeURIComponent("" + currentPage) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetCarts(_response);
        });
    }
    processGetCarts(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [];
                for (let item of resultData200)result200.push((0, $4dc04e9fd447520a$export$851d109e5e4aef3d).fromJS(item));
            } else result200 = null;
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("No carts found for the user", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Get a cart for the specified secret
     * @param secret Cart secret.
     * @return OK
     */ getCart(secret) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}";
        if (secret === undefined || secret === null) throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetCart(_response);
        });
    }
    processGetCart(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $58c2b9dbb18f0b8b$export$6f32a34769e7c3bf).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is not found.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Update specified cart
     * @param secret Cart secret.
     * @param cartModel Parameters for the cart, see OrderViewModel
     * @return OK
     */ updateCart(secret, cartModel) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}";
        if (secret === undefined || secret === null) throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(cartModel);
        let options_ = {
            body: content_,
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processUpdateCart(_response);
        });
    }
    processUpdateCart(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $58c2b9dbb18f0b8b$export$6f32a34769e7c3bf).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is not found.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Delete a cart with the specified secret
     * @param secret Cart secret.
     * @return OK
     */ deleteCart(secret) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}";
        if (secret === undefined || secret === null) throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "DELETE",
            headers: {}
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processDeleteCart(_response);
        });
    }
    processDeleteCart(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            return;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is not found.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Update shipping for the specified cart
     * @param secret Cart secret.
     * @param shippingId The new shipping method id
     * @return OK
     */ updateShipping(secret, shippingId) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}/shipping/{shippingId}";
        if (secret === undefined || secret === null) throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        if (shippingId === undefined || shippingId === null) throw new Error("The parameter 'shippingId' must be defined.");
        url_ = url_.replace("{shippingId}", encodeURIComponent("" + shippingId));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "PATCH",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processUpdateShipping(_response);
        });
    }
    processUpdateShipping(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $58c2b9dbb18f0b8b$export$6f32a34769e7c3bf).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is not found.\nor\nShipping with the specified id not found.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Update payment for the specified cart
     * @param secret Cart secret.
     * @param paymentId The new payment method id
     * @return OK
     */ updatePayment(secret, paymentId) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}/payment/{paymentId}";
        if (secret === undefined || secret === null) throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        if (paymentId === undefined || paymentId === null) throw new Error("The parameter 'paymentId' must be defined.");
        url_ = url_.replace("{paymentId}", encodeURIComponent("" + paymentId));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "PATCH",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processUpdatePayment(_response);
        });
    }
    processUpdatePayment(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $58c2b9dbb18f0b8b$export$6f32a34769e7c3bf).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is not found.\nor\nPayment with the specified id not found.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Add the specified line to the cart
     * @param secret Cart secret.
     * @param cartItem Cart item.
     * @return OK
     */ addLineToCart(secret, cartItem) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}/items";
        if (secret === undefined || secret === null) throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(cartItem);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processAddLineToCart(_response);
        });
    }
    processAddLineToCart(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            return;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is not found.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is completed.\nor\nThe product does not exist.\nor\nThe current user does not have permissions to access this cart.\nor\nThe current user does not have permissions to add this product (probably because of assortments).", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Empty a cart with the specified secret
     * @param secret Cart secret.
     * @return OK
     */ emptyCart(secret) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}/items";
        if (secret === undefined || secret === null) throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "DELETE",
            headers: {}
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processEmptyCart(_response);
        });
    }
    processEmptyCart(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            return;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is not found.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Remove a specified cart item
     * @param secret Cart secret.
     * @param itemId The cart item id.
     * @return OK
     */ removeLineFromCart(secret, itemId) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}/items/{itemId}";
        if (secret === undefined || secret === null) throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        if (itemId === undefined || itemId === null) throw new Error("The parameter 'itemId' must be defined.");
        url_ = url_.replace("{itemId}", encodeURIComponent("" + itemId));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "DELETE",
            headers: {}
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processRemoveLineFromCart(_response);
        });
    }
    processRemoveLineFromCart(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            return;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is not found.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Update a cart item
     * @param secret Cart secret.
     * @param itemId The cart item id.
     * @param cartItem Cart item.
     * @return OK
     */ updateCartLine(secret, itemId, cartItem) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}/items/{itemId}";
        if (secret === undefined || secret === null) throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        if (itemId === undefined || itemId === null) throw new Error("The parameter 'itemId' must be defined.");
        url_ = url_.replace("{itemId}", encodeURIComponent("" + itemId));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(cartItem);
        let options_ = {
            body: content_,
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processUpdateCartLine(_response);
        });
    }
    processUpdateCartLine(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            return;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is not found.\nor\nThe cart line is not found.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Convert a cart into an order
     * @return OK
     */ createOrder(secret, cartModel) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}/createorder";
        if (secret === undefined || secret === null) throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(cartModel);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processCreateOrder(_response);
        });
    }
    processCreateOrder(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            return;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is not found.", status, _responseText, _headers);
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}




class $32d74205d8489bdb$export$a7828f465fa73b14 extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    verifyConnection() {
        let url_ = this.baseUrl + "/dwapi/feeds/VerifyConnection";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processVerifyConnection(_response);
        });
    }
    processVerifyConnection(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : null;
            return result200;
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    getFeedOutput(id, languageId, currencyId, shopId, userId, loadVariantInfoOnVariants) {
        let url_ = this.baseUrl + "/dwapi/feeds/GetFeedOutput?";
        if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined and cannot be null.");
        else url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (languageId !== undefined && languageId !== null) url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (currencyId !== undefined && currencyId !== null) url_ += "CurrencyId=" + encodeURIComponent("" + currencyId) + "&";
        if (shopId !== undefined && shopId !== null) url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (userId !== undefined && userId !== null) url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (loadVariantInfoOnVariants === null) throw new Error("The parameter 'loadVariantInfoOnVariants' cannot be null.");
        else if (loadVariantInfoOnVariants !== undefined) url_ += "LoadVariantInfoOnVariants=" + encodeURIComponent("" + loadVariantInfoOnVariants) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetFeedOutput(_response);
        });
    }
    processGetFeedOutput(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then((blob)=>{
                return {
                    fileName: fileName,
                    data: blob,
                    status: status,
                    headers: _headers
                };
            });
        } else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}




class $3d3f95904efb6413$export$f40d29ef16d78592 extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Gets all groups for a shop or a parent group
     * @param parentId (optional) To get subgroups of a specific group, use parent id to specify the parent of the children needed
     * @param shopId (optional) Get all the top level groups in the shop of the specified shopid
     * @param mediaSettings (optional) 
     * @param fieldSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     */ getAll(parentId, shopId, mediaSettings, fieldSettings, userId, showPricesWithVat, currencyCode, countryCode, languageId, filledProperties) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/groups?";
        if (parentId !== undefined && parentId !== null) url_ += "ParentId=" + encodeURIComponent("" + parentId) + "&";
        if (shopId !== undefined && shopId !== null) url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null) url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
        if (fieldSettings !== undefined && fieldSettings !== null) url_ += "FieldSettings=" + encodeURIComponent("" + fieldSettings) + "&";
        if (userId === null) throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined) url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (showPricesWithVat === null) throw new Error("The parameter 'showPricesWithVat' cannot be null.");
        else if (showPricesWithVat !== undefined) url_ += "ShowPricesWithVat=" + encodeURIComponent("" + showPricesWithVat) + "&";
        if (currencyCode !== undefined && currencyCode !== null) url_ += "CurrencyCode=" + encodeURIComponent("" + currencyCode) + "&";
        if (countryCode !== undefined && countryCode !== null) url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (languageId !== undefined && languageId !== null) url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (filledProperties !== undefined && filledProperties !== null) filledProperties && filledProperties.forEach((item)=>{
            url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&";
        });
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetAll(_response);
        });
    }
    processGetAll(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then((blob)=>{
                return {
                    fileName: fileName,
                    data: blob,
                    status: status,
                    headers: _headers
                };
            });
        } else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets a group by its group id
     * @param groupId Specify groupid of the group to return
     * @param parentId (optional) To get subgroups of a specific group, use parent id to specify the parent of the children needed
     * @param shopId (optional) Get all the top level groups in the shop of the specified shopid
     * @param mediaSettings (optional) 
     * @param fieldSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     */ getGroup(groupId, parentId, shopId, mediaSettings, fieldSettings, userId, showPricesWithVat, currencyCode, countryCode, languageId, filledProperties) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/groups/{groupId}?";
        if (groupId === undefined || groupId === null) throw new Error("The parameter 'groupId' must be defined.");
        url_ = url_.replace("{groupId}", encodeURIComponent("" + groupId));
        if (parentId !== undefined && parentId !== null) url_ += "ParentId=" + encodeURIComponent("" + parentId) + "&";
        if (shopId !== undefined && shopId !== null) url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null) url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
        if (fieldSettings !== undefined && fieldSettings !== null) url_ += "FieldSettings=" + encodeURIComponent("" + fieldSettings) + "&";
        if (userId === null) throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined) url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (showPricesWithVat === null) throw new Error("The parameter 'showPricesWithVat' cannot be null.");
        else if (showPricesWithVat !== undefined) url_ += "ShowPricesWithVat=" + encodeURIComponent("" + showPricesWithVat) + "&";
        if (currencyCode !== undefined && currencyCode !== null) url_ += "CurrencyCode=" + encodeURIComponent("" + currencyCode) + "&";
        if (countryCode !== undefined && countryCode !== null) url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (languageId !== undefined && languageId !== null) url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (filledProperties !== undefined && filledProperties !== null) filledProperties && filledProperties.forEach((item)=>{
            url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&";
        });
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetGroup(_response);
        });
    }
    processGetGroup(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then((blob)=>{
                return {
                    fileName: fileName,
                    data: blob,
                    status: status,
                    headers: _headers
                };
            });
        } else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}





class $77d82c73cfa0616b$export$ee448072d182df2e extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.code2 = _data["Code2"];
            this.code3 = _data["Code3"];
            this.regionCode = _data["RegionCode"];
            this.culture = _data["Culture"];
            this.name = _data["Name"];
            this.vat = _data["Vat"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $77d82c73cfa0616b$export$ee448072d182df2e();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Code2"] = this.code2;
        data["Code3"] = this.code3;
        data["RegionCode"] = this.regionCode;
        data["Culture"] = this.culture;
        data["Name"] = this.name;
        data["Vat"] = this.vat;
        super.toJSON(data);
        return data;
    }
}



class $71ed1e9d9d3886a4$export$3f4b75158903cae7 extends (0, $0b2832c981de5e4c$export$9081fc5a5abbafb5) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.symbol = _data["Symbol"];
            this.name = _data["Name"];
            this.rate = _data["Rate"];
            this.code = _data["Code"];
            this.default = _data["Default"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $71ed1e9d9d3886a4$export$3f4b75158903cae7();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Symbol"] = this.symbol;
        data["Name"] = this.name;
        data["Rate"] = this.rate;
        data["Code"] = this.code;
        data["Default"] = this.default;
        super.toJSON(data);
        return data;
    }
}


class $cf8394eefb9dbefe$export$ee2fa6182b3b0170 extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Get countries
     * @param languageId (optional) ID of language to use for names of the returned countries
     * @return A list of countries
     */ getCountries(languageId) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/international/countries?";
        if (languageId !== undefined && languageId !== null) url_ += "languageId=" + encodeURIComponent("" + languageId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetCountries(_response);
        });
    }
    processGetCountries(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [];
                for (let item of resultData200)result200.push((0, $77d82c73cfa0616b$export$ee448072d182df2e).fromJS(item));
            } else result200 = null;
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("No countries found", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Get currencies
     * @param languageId (optional) ID of language to use for names of the returned currencies
     * @return A list of currencies
     */ getCurrencies(languageId) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/international/currencies?";
        if (languageId !== undefined && languageId !== null) url_ += "languageId=" + encodeURIComponent("" + languageId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetCurrencies(_response);
        });
    }
    processGetCurrencies(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [];
                for (let item of resultData200)result200.push((0, $71ed1e9d9d3886a4$export$3f4b75158903cae7).fromJS(item));
            } else result200 = null;
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("No currencies found", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}





class $5e087e3f6724c25b$export$33d379092842afb2 extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Get current customer orders
     * @param pageSize (optional) 
     * @param pageCount (optional) 
     * @param currentPage (optional) 
     * @param totalOrdersCount (optional) 
     * @param showPricesWithVat (optional) 
     * @param filledProperties (optional) 
     * @return OK
     */ getOrders(pageSize, pageCount, currentPage, totalOrdersCount, showPricesWithVat, filledProperties) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/orders?";
        if (pageSize === null) throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined) url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (pageCount === null) throw new Error("The parameter 'pageCount' cannot be null.");
        else if (pageCount !== undefined) url_ += "PageCount=" + encodeURIComponent("" + pageCount) + "&";
        if (currentPage === null) throw new Error("The parameter 'currentPage' cannot be null.");
        else if (currentPage !== undefined) url_ += "CurrentPage=" + encodeURIComponent("" + currentPage) + "&";
        if (totalOrdersCount === null) throw new Error("The parameter 'totalOrdersCount' cannot be null.");
        else if (totalOrdersCount !== undefined) url_ += "TotalOrdersCount=" + encodeURIComponent("" + totalOrdersCount) + "&";
        if (showPricesWithVat === null) throw new Error("The parameter 'showPricesWithVat' cannot be null.");
        else if (showPricesWithVat !== undefined) url_ += "ShowPricesWithVat=" + encodeURIComponent("" + showPricesWithVat) + "&";
        if (filledProperties !== undefined && filledProperties !== null) filledProperties && filledProperties.forEach((item)=>{
            url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&";
        });
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetOrders(_response);
        });
    }
    processGetOrders(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $58c2b9dbb18f0b8b$export$6f32a34769e7c3bf).fromJS(resultData200);
            return result200;
        });
        else if (status === 403) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The current user does not have permissions to access orders.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Get an order for the specified secret
     * @param secret Order secret.
     * @param priceSettings (optional) 
     * @param orderFieldSettings (optional) 
     * @param orderLineSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @return OK
     */ getOrder(secret, priceSettings, orderFieldSettings, orderLineSettings, userId, showPricesWithVat, currencyCode, countryCode, shopId, languageId, filledProperties) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/orders/{secret}?";
        if (secret === undefined || secret === null) throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        if (priceSettings !== undefined && priceSettings !== null) url_ += "PriceSettings=" + encodeURIComponent("" + priceSettings) + "&";
        if (orderFieldSettings !== undefined && orderFieldSettings !== null) url_ += "OrderFieldSettings=" + encodeURIComponent("" + orderFieldSettings) + "&";
        if (orderLineSettings !== undefined && orderLineSettings !== null) url_ += "OrderLineSettings=" + encodeURIComponent("" + orderLineSettings) + "&";
        if (userId === null) throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined) url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (showPricesWithVat === null) throw new Error("The parameter 'showPricesWithVat' cannot be null.");
        else if (showPricesWithVat !== undefined) url_ += "ShowPricesWithVat=" + encodeURIComponent("" + showPricesWithVat) + "&";
        if (currencyCode !== undefined && currencyCode !== null) url_ += "CurrencyCode=" + encodeURIComponent("" + currencyCode) + "&";
        if (countryCode !== undefined && countryCode !== null) url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (shopId !== undefined && shopId !== null) url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (languageId !== undefined && languageId !== null) url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (filledProperties !== undefined && filledProperties !== null) filledProperties && filledProperties.forEach((item)=>{
            url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&";
        });
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetOrder(_response);
        });
    }
    processGetOrder(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $58c2b9dbb18f0b8b$export$6f32a34769e7c3bf).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The order is not found.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}





class $99c32a708c896722$export$914c60b88733f0a0 extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Get payments
     * @param languageId (optional) The language id
     * @param countryCode (optional) The country code
     * @param regionCode (optional) The region code
     * @return The collection of payment view model
     */ getPayments(languageId, countryCode, regionCode) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/payments?";
        if (languageId !== undefined && languageId !== null) url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (countryCode !== undefined && countryCode !== null) url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (regionCode !== undefined && regionCode !== null) url_ += "RegionCode=" + encodeURIComponent("" + regionCode) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetPayments(_response);
        });
    }
    processGetPayments(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [];
                for (let item of resultData200)result200.push((0, $35e32989c9fcaf61$export$721ac1d6252bcdb).fromJS(item));
            } else result200 = null;
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("The language is not found.", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}






class $6e067f0b8276b505$export$c495c97236bab9a2 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.unitId = _data["UnitId"];
            this.unitName = _data["UnitName"];
            this.variantId = _data["VariantId"];
            this.stockLocationId = _data["StockLocationId"];
            this.stockLocationName = _data["StockLocationName"];
            this.stockLocationCategory = _data["StockLocationCategory"];
            this.stockLocationAddress = _data["StockLocationAddress"] ? (0, $e51021a3000cb610$export$86cdebf7c744b08f).fromJS(_data["StockLocationAddress"]) : undefined;
            this.stockLevel = _data["StockLevel"];
            this.stockStatus = _data["StockStatus"];
            this.weight = _data["Weight"];
            this.volume = _data["Volume"];
            this.description = _data["Description"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $6e067f0b8276b505$export$c495c97236bab9a2();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["UnitId"] = this.unitId;
        data["UnitName"] = this.unitName;
        data["VariantId"] = this.variantId;
        data["StockLocationId"] = this.stockLocationId;
        data["StockLocationName"] = this.stockLocationName;
        data["StockLocationCategory"] = this.stockLocationCategory;
        data["StockLocationAddress"] = this.stockLocationAddress ? this.stockLocationAddress.toJSON() : undefined;
        data["StockLevel"] = this.stockLevel;
        data["StockStatus"] = this.stockStatus;
        data["Weight"] = this.weight;
        data["Volume"] = this.volume;
        data["Description"] = this.description;
        super.toJSON(data);
        return data;
    }
}




class $437a94e2c89781ef$export$6e811e2ad18ece64 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.value = _data["Value"];
            this.name = _data["Name"];
            this.keywords = _data["Keywords"];
            this.displayName = _data["DisplayName"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $437a94e2c89781ef$export$6e811e2ad18ece64();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Value"] = this.value;
        data["Name"] = this.name;
        data["Keywords"] = this.keywords;
        data["DisplayName"] = this.displayName;
        super.toJSON(data);
        return data;
    }
}


class $dd4771ec27e00eef$export$1a87ce0f97b8b4b9 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            this.image = _data["Image"] ? (0, $437a94e2c89781ef$export$6e811e2ad18ece64).fromJS(_data["Image"]) : undefined;
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $dd4771ec27e00eef$export$1a87ce0f97b8b4b9();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["Image"] = this.image ? this.image.toJSON() : undefined;
        super.toJSON(data);
        return data;
    }
}






class $e999603af4250d61$export$9efab29e747eddcb extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.productID = _data["ProductID"];
            this.variantID = _data["VariantID"];
            this.optionID = _data["OptionID"];
            this.optionName = _data["OptionName"];
            this.optionColor = _data["OptionColor"];
            this.optionSort = _data["OptionSort"];
            this.productName = _data["ProductName"];
            this.productNumber = _data["ProductNumber"];
            this.productStock = _data["ProductStock"];
            this.variantInfoGroupId = _data["VariantInfoGroupId"];
            this.variantInfoGroupName = _data["VariantInfoGroupName"];
            this.variantInfoGroupDescription = _data["VariantInfoGroupDescription"];
            this.optionImage = _data["OptionImage"] ? (0, $437a94e2c89781ef$export$6e811e2ad18ece64).fromJS(_data["OptionImage"]) : undefined;
            this.image = _data["Image"] ? (0, $437a94e2c89781ef$export$6e811e2ad18ece64).fromJS(_data["Image"]) : undefined;
            this.price = _data["Price"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["Price"]) : undefined;
            this.priceMin = _data["PriceMin"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["PriceMin"]) : undefined;
            this.priceMax = _data["PriceMax"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["PriceMax"]) : undefined;
            this.stock = _data["Stock"];
            if (Array.isArray(_data["VariantInfo"])) {
                this.variantInfo = [];
                for (let item of _data["VariantInfo"])this.variantInfo.push($e999603af4250d61$export$9efab29e747eddcb.fromJS(item));
            }
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $e999603af4250d61$export$9efab29e747eddcb();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["ProductID"] = this.productID;
        data["VariantID"] = this.variantID;
        data["OptionID"] = this.optionID;
        data["OptionName"] = this.optionName;
        data["OptionColor"] = this.optionColor;
        data["OptionSort"] = this.optionSort;
        data["ProductName"] = this.productName;
        data["ProductNumber"] = this.productNumber;
        data["ProductStock"] = this.productStock;
        data["VariantInfoGroupId"] = this.variantInfoGroupId;
        data["VariantInfoGroupName"] = this.variantInfoGroupName;
        data["VariantInfoGroupDescription"] = this.variantInfoGroupDescription;
        data["OptionImage"] = this.optionImage ? this.optionImage.toJSON() : undefined;
        data["Image"] = this.image ? this.image.toJSON() : undefined;
        data["Price"] = this.price ? this.price.toJSON() : undefined;
        data["PriceMin"] = this.priceMin ? this.priceMin.toJSON() : undefined;
        data["PriceMax"] = this.priceMax ? this.priceMax.toJSON() : undefined;
        data["Stock"] = this.stock;
        if (Array.isArray(this.variantInfo)) {
            data["VariantInfo"] = [];
            for (let item of this.variantInfo)data["VariantInfo"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}



class $411b7fbce84c82f4$export$448cb7f028c976c5 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.productId = _data["ProductId"];
            this.variantId = _data["VariantId"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $411b7fbce84c82f4$export$448cb7f028c976c5();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["ProductId"] = this.productId;
        data["VariantId"] = this.variantId;
        super.toJSON(data);
        return data;
    }
}





class $30beae0994948294$export$1436641fd0c7edb7 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.name = _data["Name"];
            this.campaignName = _data["CampaignName"];
            this.campagnDescription = _data["CampagnDescription"];
            this.campaignColor = _data["CampaignColor"];
            this.amount = _data["Amount"];
            this.percentage = _data["Percentage"];
            this.currencyCode = _data["CurrencyCode"];
            this.voucherCode = _data["VoucherCode"];
            this.voucherListId = _data["VoucherListId"];
            this.validFrom = _data["ValidFrom"] ? new Date(_data["ValidFrom"].toString()) : undefined;
            this.validTo = _data["ValidTo"] ? new Date(_data["ValidTo"].toString()) : undefined;
            this.campaignImage = _data["CampaignImage"] ? (0, $437a94e2c89781ef$export$6e811e2ad18ece64).fromJS(_data["CampaignImage"]) : undefined;
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $30beae0994948294$export$1436641fd0c7edb7();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Name"] = this.name;
        data["CampaignName"] = this.campaignName;
        data["CampagnDescription"] = this.campagnDescription;
        data["CampaignColor"] = this.campaignColor;
        data["Amount"] = this.amount;
        data["Percentage"] = this.percentage;
        data["CurrencyCode"] = this.currencyCode;
        data["VoucherCode"] = this.voucherCode;
        data["VoucherListId"] = this.voucherListId;
        data["ValidFrom"] = this.validFrom ? this.validFrom.toISOString() : undefined;
        data["ValidTo"] = this.validTo ? this.validTo.toISOString() : undefined;
        data["CampaignImage"] = this.campaignImage ? this.campaignImage.toJSON() : undefined;
        super.toJSON(data);
        return data;
    }
}




class $556096c099aeb32c$export$143ffe92f84f2111 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.quantity = _data["Quantity"];
            this.price = _data["Price"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["Price"]) : undefined;
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $556096c099aeb32c$export$143ffe92f84f2111();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Quantity"] = this.quantity;
        data["Price"] = this.price ? this.price.toJSON() : undefined;
        super.toJSON(data);
        return data;
    }
}





class $2b166900db980b96$export$d71270591c88ca89 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            if (_data["Fields"]) {
                this.fields = {};
                for(let key in _data["Fields"])if (_data["Fields"].hasOwnProperty(key)) this.fields[key] = _data["Fields"][key] ? (0, $f9145ea729ce503f$export$4fa50a4986ae6cc1).fromJS(_data["Fields"][key]) : new (0, $f9145ea729ce503f$export$4fa50a4986ae6cc1)();
            }
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $2b166900db980b96$export$d71270591c88ca89();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        if (this.fields) {
            data["Fields"] = {};
            for(let key in this.fields)if (this.fields.hasOwnProperty(key)) data["Fields"][key] = this.fields[key] ? this.fields[key].toJSON() : undefined;
        }
        super.toJSON(data);
        return data;
    }
}





class $66b4d0965a9875b3$export$23dda9229cb1ccc3 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
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
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $66b4d0965a9875b3$export$23dda9229cb1ccc3();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
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




class $8089837b60187001$export$c93b1a947817bc89 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.name = _data["Name"];
            this.systemName = _data["SystemName"];
            if (Array.isArray(_data["Assets"])) {
                this.assets = [];
                for (let item of _data["Assets"])this.assets.push((0, $437a94e2c89781ef$export$6e811e2ad18ece64).fromJS(item));
            }
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $8089837b60187001$export$c93b1a947817bc89();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Name"] = this.name;
        data["SystemName"] = this.systemName;
        if (Array.isArray(this.assets)) {
            data["Assets"] = [];
            for (let item of this.assets)data["Assets"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}




class $341e031402e9ce42$export$1d5a04157e1500a3 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            if (Array.isArray(_data["Products"])) {
                this.products = [];
                for (let item of _data["Products"])this.products.push((0, $411b7fbce84c82f4$export$448cb7f028c976c5).fromJS(item));
            }
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $341e031402e9ce42$export$1d5a04157e1500a3();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        if (Array.isArray(this.products)) {
            data["Products"] = [];
            for (let item of this.products)data["Products"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}


class $8da05be43277adcd$export$4705ae49e99a5fff extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.variantId = _data["VariantId"];
            this.languageId = _data["LanguageId"];
            this.name = _data["Name"];
            this.title = _data["Title"];
            this.shortDescription = _data["ShortDescription"];
            this.longDescription = _data["LongDescription"];
            this.metaDescription = _data["MetaDescription"];
            this.metaTitle = _data["MetaTitle"];
            this.metaKeywords = _data["MetaKeywords"];
            this.number = _data["Number"];
            this.created = _data["Created"] ? new Date(_data["Created"].toString()) : undefined;
            this.updated = _data["Updated"] ? new Date(_data["Updated"].toString()) : undefined;
            this.keywords = _data["Keywords"];
            this.weight = _data["Weight"];
            this.stockLevel = _data["StockLevel"];
            this.width = _data["Width"];
            this.height = _data["Height"];
            this.depth = _data["Depth"];
            this.purchaseMinimumQuantity = _data["PurchaseMinimumQuantity"];
            this.purchaseQuantityStep = _data["PurchaseQuantityStep"];
            this.cost = _data["Cost"];
            this.eAN = _data["EAN"];
            this.expectedDelivery = _data["ExpectedDelivery"] ? new Date(_data["ExpectedDelivery"].toString()) : undefined;
            this.discontinued = _data["Discontinued"];
            this.discontinuedAction = _data["DiscontinuedAction"];
            this.pointPrice = _data["PointPrice"];
            this.defaultVariantId = _data["DefaultVariantId"];
            this.defaultUnitId = _data["DefaultUnitId"];
            this.variantName = _data["VariantName"];
            this.active = _data["Active"];
            this.rating = _data["Rating"];
            this.replacementProduct = _data["ReplacementProduct"] ? (0, $411b7fbce84c82f4$export$448cb7f028c976c5).fromJS(_data["ReplacementProduct"]) : undefined;
            this.price = _data["Price"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["Price"]) : undefined;
            this.priceInformative = _data["PriceInformative"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["PriceInformative"]) : undefined;
            this.priceBeforeDiscount = _data["PriceBeforeDiscount"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["PriceBeforeDiscount"]) : undefined;
            this.discount = _data["Discount"] ? (0, $3892ab379664e5e8$export$8d3c15329cf77c26).fromJS(_data["Discount"]) : undefined;
            if (Array.isArray(_data["ProductDiscounts"])) {
                this.productDiscounts = [];
                for (let item of _data["ProductDiscounts"])this.productDiscounts.push((0, $30beae0994948294$export$1436641fd0c7edb7).fromJS(item));
            }
            if (Array.isArray(_data["Prices"])) {
                this.prices = [];
                for (let item of _data["Prices"])this.prices.push((0, $556096c099aeb32c$export$143ffe92f84f2111).fromJS(item));
            }
            if (_data["StandardFields"]) {
                this.standardFields = {};
                for(let key in _data["StandardFields"])if (_data["StandardFields"].hasOwnProperty(key)) this.standardFields[key] = _data["StandardFields"][key] ? (0, $f9145ea729ce503f$export$4fa50a4986ae6cc1).fromJS(_data["StandardFields"][key]) : new (0, $f9145ea729ce503f$export$4fa50a4986ae6cc1)();
            }
            if (_data["ProductFields"]) {
                this.productFields = {};
                for(let key in _data["ProductFields"])if (_data["ProductFields"].hasOwnProperty(key)) this.productFields[key] = _data["ProductFields"][key] ? (0, $f9145ea729ce503f$export$4fa50a4986ae6cc1).fromJS(_data["ProductFields"][key]) : new (0, $f9145ea729ce503f$export$4fa50a4986ae6cc1)();
            }
            if (_data["ProductCategories"]) {
                this.productCategories = {};
                for(let key in _data["ProductCategories"])if (_data["ProductCategories"].hasOwnProperty(key)) this.productCategories[key] = _data["ProductCategories"][key] ? (0, $2b166900db980b96$export$d71270591c88ca89).fromJS(_data["ProductCategories"][key]) : new (0, $2b166900db980b96$export$d71270591c88ca89)();
            }
            if (_data["FieldDisplayGroups"]) {
                this.fieldDisplayGroups = {};
                for(let key in _data["FieldDisplayGroups"])if (_data["FieldDisplayGroups"].hasOwnProperty(key)) this.fieldDisplayGroups[key] = _data["FieldDisplayGroups"][key] ? (0, $2b166900db980b96$export$d71270591c88ca89).fromJS(_data["FieldDisplayGroups"][key]) : new (0, $2b166900db980b96$export$d71270591c88ca89)();
            }
            if (Array.isArray(_data["Groups"])) {
                this.groups = [];
                for (let item of _data["Groups"])this.groups.push((0, $0641c3524cf23552$export$314c028c62371730).fromJS(item));
            }
            this.primaryOrDefaultGroup = _data["PrimaryOrDefaultGroup"] ? (0, $0641c3524cf23552$export$314c028c62371730).fromJS(_data["PrimaryOrDefaultGroup"]) : undefined;
            this.variantInfo = _data["VariantInfo"] ? (0, $e999603af4250d61$export$9efab29e747eddcb).fromJS(_data["VariantInfo"]) : undefined;
            this.defaultImage = _data["DefaultImage"] ? (0, $437a94e2c89781ef$export$6e811e2ad18ece64).fromJS(_data["DefaultImage"]) : undefined;
            if (Array.isArray(_data["GroupPaths"])) {
                this.groupPaths = [];
                for (let item of _data["GroupPaths"])this.groupPaths.push(item);
            }
            if (Array.isArray(_data["ImagePatternImages"])) {
                this.imagePatternImages = [];
                for (let item of _data["ImagePatternImages"])this.imagePatternImages.push((0, $437a94e2c89781ef$export$6e811e2ad18ece64).fromJS(item));
            }
            this.manufacturer = _data["Manufacturer"] ? (0, $66b4d0965a9875b3$export$23dda9229cb1ccc3).fromJS(_data["Manufacturer"]) : undefined;
            if (Array.isArray(_data["AssetCategories"])) {
                this.assetCategories = [];
                for (let item of _data["AssetCategories"])this.assetCategories.push((0, $8089837b60187001$export$c93b1a947817bc89).fromJS(item));
            }
            this.neverOutOfstock = _data["NeverOutOfstock"];
            if (Array.isArray(_data["StockUnits"])) {
                this.stockUnits = [];
                for (let item of _data["StockUnits"])this.stockUnits.push((0, $6e067f0b8276b505$export$c495c97236bab9a2).fromJS(item));
            }
            if (Array.isArray(_data["UnitOptions"])) {
                this.unitOptions = [];
                for (let item of _data["UnitOptions"])this.unitOptions.push((0, $dd4771ec27e00eef$export$1a87ce0f97b8b4b9).fromJS(item));
            }
            if (Array.isArray(_data["RelatedGroups"])) {
                this.relatedGroups = [];
                for (let item of _data["RelatedGroups"])this.relatedGroups.push((0, $341e031402e9ce42$export$1d5a04157e1500a3).fromJS(item));
            }
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $8da05be43277adcd$export$4705ae49e99a5fff();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Id"] = this.id;
        data["VariantId"] = this.variantId;
        data["LanguageId"] = this.languageId;
        data["Name"] = this.name;
        data["Title"] = this.title;
        data["ShortDescription"] = this.shortDescription;
        data["LongDescription"] = this.longDescription;
        data["MetaDescription"] = this.metaDescription;
        data["MetaTitle"] = this.metaTitle;
        data["MetaKeywords"] = this.metaKeywords;
        data["Number"] = this.number;
        data["Created"] = this.created ? this.created.toISOString() : undefined;
        data["Updated"] = this.updated ? this.updated.toISOString() : undefined;
        data["Keywords"] = this.keywords;
        data["Weight"] = this.weight;
        data["StockLevel"] = this.stockLevel;
        data["Width"] = this.width;
        data["Height"] = this.height;
        data["Depth"] = this.depth;
        data["PurchaseMinimumQuantity"] = this.purchaseMinimumQuantity;
        data["PurchaseQuantityStep"] = this.purchaseQuantityStep;
        data["Cost"] = this.cost;
        data["EAN"] = this.eAN;
        data["ExpectedDelivery"] = this.expectedDelivery ? this.expectedDelivery.toISOString() : undefined;
        data["Discontinued"] = this.discontinued;
        data["DiscontinuedAction"] = this.discontinuedAction;
        data["PointPrice"] = this.pointPrice;
        data["DefaultVariantId"] = this.defaultVariantId;
        data["DefaultUnitId"] = this.defaultUnitId;
        data["VariantName"] = this.variantName;
        data["Active"] = this.active;
        data["Rating"] = this.rating;
        data["ReplacementProduct"] = this.replacementProduct ? this.replacementProduct.toJSON() : undefined;
        data["Price"] = this.price ? this.price.toJSON() : undefined;
        data["PriceInformative"] = this.priceInformative ? this.priceInformative.toJSON() : undefined;
        data["PriceBeforeDiscount"] = this.priceBeforeDiscount ? this.priceBeforeDiscount.toJSON() : undefined;
        data["Discount"] = this.discount ? this.discount.toJSON() : undefined;
        if (Array.isArray(this.productDiscounts)) {
            data["ProductDiscounts"] = [];
            for (let item of this.productDiscounts)data["ProductDiscounts"].push(item.toJSON());
        }
        if (Array.isArray(this.prices)) {
            data["Prices"] = [];
            for (let item of this.prices)data["Prices"].push(item.toJSON());
        }
        if (this.standardFields) {
            data["StandardFields"] = {};
            for(let key in this.standardFields)if (this.standardFields.hasOwnProperty(key)) data["StandardFields"][key] = this.standardFields[key] ? this.standardFields[key].toJSON() : undefined;
        }
        if (this.productFields) {
            data["ProductFields"] = {};
            for(let key in this.productFields)if (this.productFields.hasOwnProperty(key)) data["ProductFields"][key] = this.productFields[key] ? this.productFields[key].toJSON() : undefined;
        }
        if (this.productCategories) {
            data["ProductCategories"] = {};
            for(let key in this.productCategories)if (this.productCategories.hasOwnProperty(key)) data["ProductCategories"][key] = this.productCategories[key] ? this.productCategories[key].toJSON() : undefined;
        }
        if (this.fieldDisplayGroups) {
            data["FieldDisplayGroups"] = {};
            for(let key in this.fieldDisplayGroups)if (this.fieldDisplayGroups.hasOwnProperty(key)) data["FieldDisplayGroups"][key] = this.fieldDisplayGroups[key] ? this.fieldDisplayGroups[key].toJSON() : undefined;
        }
        if (Array.isArray(this.groups)) {
            data["Groups"] = [];
            for (let item of this.groups)data["Groups"].push(item.toJSON());
        }
        data["PrimaryOrDefaultGroup"] = this.primaryOrDefaultGroup ? this.primaryOrDefaultGroup.toJSON() : undefined;
        data["VariantInfo"] = this.variantInfo ? this.variantInfo.toJSON() : undefined;
        data["DefaultImage"] = this.defaultImage ? this.defaultImage.toJSON() : undefined;
        if (Array.isArray(this.groupPaths)) {
            data["GroupPaths"] = [];
            for (let item of this.groupPaths)data["GroupPaths"].push(item);
        }
        if (Array.isArray(this.imagePatternImages)) {
            data["ImagePatternImages"] = [];
            for (let item of this.imagePatternImages)data["ImagePatternImages"].push(item.toJSON());
        }
        data["Manufacturer"] = this.manufacturer ? this.manufacturer.toJSON() : undefined;
        if (Array.isArray(this.assetCategories)) {
            data["AssetCategories"] = [];
            for (let item of this.assetCategories)data["AssetCategories"].push(item.toJSON());
        }
        data["NeverOutOfstock"] = this.neverOutOfstock;
        if (Array.isArray(this.stockUnits)) {
            data["StockUnits"] = [];
            for (let item of this.stockUnits)data["StockUnits"].push(item.toJSON());
        }
        if (Array.isArray(this.unitOptions)) {
            data["UnitOptions"] = [];
            for (let item of this.unitOptions)data["UnitOptions"].push(item.toJSON());
        }
        if (Array.isArray(this.relatedGroups)) {
            data["RelatedGroups"] = [];
            for (let item of this.relatedGroups)data["RelatedGroups"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}






class $16fbb37060c0213e$export$c2e82715bf48e18f extends (0, $0641c3524cf23552$export$314c028c62371730) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            this.title = _data["Title"];
            this.number = _data["Number"];
            this.description = _data["Description"];
            this.categorySystemName = _data["CategorySystemName"];
            this.categoryName = _data["CategoryName"];
            if (Array.isArray(_data["GroupFields"])) {
                this.groupFields = [];
                for (let item of _data["GroupFields"])this.groupFields.push((0, $f9145ea729ce503f$export$4fa50a4986ae6cc1).fromJS(item));
            }
            if (Array.isArray(_data["Assets"])) {
                this.assets = [];
                for (let item of _data["Assets"])this.assets.push((0, $437a94e2c89781ef$export$6e811e2ad18ece64).fromJS(item));
            }
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $16fbb37060c0213e$export$c2e82715bf48e18f();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["Title"] = this.title;
        data["Number"] = this.number;
        data["Description"] = this.description;
        data["CategorySystemName"] = this.categorySystemName;
        data["CategoryName"] = this.categoryName;
        if (Array.isArray(this.groupFields)) {
            data["GroupFields"] = [];
            for (let item of this.groupFields)data["GroupFields"].push(item.toJSON());
        }
        if (Array.isArray(this.assets)) {
            data["Assets"] = [];
            for (let item of this.assets)data["Assets"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}






class $79da53cb335edd65$export$bc672b9cbce29635 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.name = _data["Name"];
            this.label = _data["Label"];
            this.value = _data["Value"];
            this.sort = _data["Sort"];
            this.selected = _data["Selected"];
            this.count = _data["Count"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $79da53cb335edd65$export$bc672b9cbce29635();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Name"] = this.name;
        data["Label"] = this.label;
        data["Value"] = this.value;
        data["Sort"] = this.sort;
        data["Selected"] = this.selected;
        data["Count"] = this.count;
        super.toJSON(data);
        return data;
    }
}


class $8af940ce36f95e44$export$d12ee91cd036f400 extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.name = _data["Name"];
            this.queryParameter = _data["QueryParameter"];
            this.queryParameterType = _data["QueryParameterType"];
            this.queryParameterDefaultValue = _data["QueryParameterDefaultValue"];
            this.renderType = _data["RenderType"];
            this.facetField = _data["FacetField"];
            this.facetType = _data["FacetType"];
            this.facetValue = _data["FacetValue"];
            if (Array.isArray(_data["Options"])) {
                this.options = [];
                for (let item of _data["Options"])this.options.push((0, $79da53cb335edd65$export$bc672b9cbce29635).fromJS(item));
            }
            this.optionCount = _data["OptionCount"];
            this.optionActiveCount = _data["OptionActiveCount"];
            this.optionResultTotalCount = _data["OptionResultTotalCount"];
            this.minimumFacetValue = _data["MinimumFacetValue"];
            this.maximumFacetValue = _data["MaximumFacetValue"];
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $8af940ce36f95e44$export$d12ee91cd036f400();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Name"] = this.name;
        data["QueryParameter"] = this.queryParameter;
        data["QueryParameterType"] = this.queryParameterType;
        data["QueryParameterDefaultValue"] = this.queryParameterDefaultValue;
        data["RenderType"] = this.renderType;
        data["FacetField"] = this.facetField;
        data["FacetType"] = this.facetType;
        data["FacetValue"] = this.facetValue;
        if (Array.isArray(this.options)) {
            data["Options"] = [];
            for (let item of this.options)data["Options"].push(item.toJSON());
        }
        data["OptionCount"] = this.optionCount;
        data["OptionActiveCount"] = this.optionActiveCount;
        data["OptionResultTotalCount"] = this.optionResultTotalCount;
        data["MinimumFacetValue"] = this.minimumFacetValue;
        data["MaximumFacetValue"] = this.maximumFacetValue;
        super.toJSON(data);
        return data;
    }
}


class $b9e30bc39a11bbe0$export$fdf398ed99472cfe extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.name = _data["Name"];
            this.facetGroupType = _data["FacetGroupType"];
            this.description = _data["Description"];
            if (Array.isArray(_data["Facets"])) {
                this.facets = [];
                for (let item of _data["Facets"])this.facets.push((0, $8af940ce36f95e44$export$d12ee91cd036f400).fromJS(item));
            }
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $b9e30bc39a11bbe0$export$fdf398ed99472cfe();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Name"] = this.name;
        data["FacetGroupType"] = this.facetGroupType;
        data["Description"] = this.description;
        if (Array.isArray(this.facets)) {
            data["Facets"] = [];
            for (let item of this.facets)data["Facets"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}


class $1eb99885af038d5c$export$c23b750e5a0f6dff extends (0, $0b2832c981de5e4c$export$56d724b3d6ab4309) {
    constructor(data){
        super(data);
    }
    init(_data) {
        super.init(_data);
        if (_data) {
            this.group = _data["Group"] ? (0, $16fbb37060c0213e$export$c2e82715bf48e18f).fromJS(_data["Group"]) : undefined;
            if (Array.isArray(_data["SubGroups"])) {
                this.subGroups = [];
                for (let item of _data["SubGroups"])this.subGroups.push((0, $16fbb37060c0213e$export$c2e82715bf48e18f).fromJS(item));
            }
            if (Array.isArray(_data["Products"])) {
                this.products = [];
                for (let item of _data["Products"])this.products.push((0, $8da05be43277adcd$export$4705ae49e99a5fff).fromJS(item));
            }
            this.pageSize = _data["PageSize"];
            this.pageCount = _data["PageCount"];
            this.currentPage = _data["CurrentPage"];
            this.totalProductsCount = _data["TotalProductsCount"];
            this.sortBy = _data["SortBy"];
            this.sortOrder = _data["SortOrder"];
            if (Array.isArray(_data["SpellCheckerSuggestions"])) {
                this.spellCheckerSuggestions = [];
                for (let item of _data["SpellCheckerSuggestions"])this.spellCheckerSuggestions.push(item);
            }
            if (Array.isArray(_data["FacetGroups"])) {
                this.facetGroups = [];
                for (let item of _data["FacetGroups"])this.facetGroups.push((0, $b9e30bc39a11bbe0$export$fdf398ed99472cfe).fromJS(item));
            }
        }
    }
    static fromJS(data) {
        data = typeof data === "object" ? data : {};
        let result = new $1eb99885af038d5c$export$c23b750e5a0f6dff();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === "object" ? data : {};
        data["Group"] = this.group ? this.group.toJSON() : undefined;
        if (Array.isArray(this.subGroups)) {
            data["SubGroups"] = [];
            for (let item of this.subGroups)data["SubGroups"].push(item.toJSON());
        }
        if (Array.isArray(this.products)) {
            data["Products"] = [];
            for (let item of this.products)data["Products"].push(item.toJSON());
        }
        data["PageSize"] = this.pageSize;
        data["PageCount"] = this.pageCount;
        data["CurrentPage"] = this.currentPage;
        data["TotalProductsCount"] = this.totalProductsCount;
        data["SortBy"] = this.sortBy;
        data["SortOrder"] = this.sortOrder;
        if (Array.isArray(this.spellCheckerSuggestions)) {
            data["SpellCheckerSuggestions"] = [];
            for (let item of this.spellCheckerSuggestions)data["SpellCheckerSuggestions"].push(item);
        }
        if (Array.isArray(this.facetGroups)) {
            data["FacetGroups"] = [];
            for (let item of this.facetGroups)data["FacetGroups"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}


class $8cded0cc25cfb2cf$export$c7599661db785dae extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Gets products filtered by query parameters
     * @param repositoryName (optional) Parameter that is used with the query name to do a search
     * @param queryName (optional) Parameter that is used with the repository name to do a search
     * @param groupId (optional) Parameter that can be used for getting all products in a specific group
     * @param productIds (optional) Parameter that can be used for getting all products with the specified ids
     * @param sortBy (optional) Sets the field to sort by, i.e. ProductPrice
     * @param sortOrder (optional) Sets the sort direction. ASC (default) or DESC
     * @param request Parameters for the product list, see ProductListViewModelSettings
     * @return Products matching the parameters
     */ getAll(repositoryName, queryName, groupId, productIds, sortBy, sortOrder, request) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/products?";
        if (repositoryName !== undefined && repositoryName !== null) url_ += "RepositoryName=" + encodeURIComponent("" + repositoryName) + "&";
        if (queryName !== undefined && queryName !== null) url_ += "QueryName=" + encodeURIComponent("" + queryName) + "&";
        if (groupId !== undefined && groupId !== null) url_ += "GroupId=" + encodeURIComponent("" + groupId) + "&";
        if (productIds !== undefined && productIds !== null) productIds && productIds.forEach((item)=>{
            url_ += "ProductIds=" + encodeURIComponent("" + item) + "&";
        });
        if (sortBy !== undefined && sortBy !== null) url_ += "SortBy=" + encodeURIComponent("" + sortBy) + "&";
        if (sortOrder !== undefined && sortOrder !== null) url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(request);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetAll(_response);
        });
    }
    processGetAll(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $1eb99885af038d5c$export$c23b750e5a0f6dff).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("No matching products found", status, _responseText, _headers);
        });
        else if (status === 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("No products match the parameters", status, _responseText, _headers);
        });
        else if (status === 400) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Invalid parameters. Specify Repository and Queryname or specify a group id", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets products filtered by query parameters
     * @param repositoryName (optional) Parameter that is used with the query name to do a search
     * @param queryName (optional) Parameter that is used with the repository name to do a search
     * @param groupId (optional) Parameter that can be used for getting all products in a specific group
     * @param productIds (optional) Parameter that can be used for getting all products with the specified ids
     * @param sortBy (optional) Sets the field to sort by, i.e. ProductPrice
     * @param sortOrder (optional) Sets the sort direction. ASC (default) or DESC
     * @param productSettings (optional) 
     * @param groupSettings (optional) 
     * @param facetGroupSettings (optional) 
     * @param parameters (optional) 
     * @param pageSize (optional) 
     * @param currentPage (optional) 
     * @param mediaSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @return Products matching the parameters
     */ search(repositoryName, queryName, groupId, productIds, sortBy, sortOrder, productSettings, groupSettings, facetGroupSettings, parameters, pageSize, currentPage, mediaSettings, userId, showPricesWithVat, currencyCode, countryCode, shopId, languageId, filledProperties) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/products/search?";
        if (repositoryName !== undefined && repositoryName !== null) url_ += "RepositoryName=" + encodeURIComponent("" + repositoryName) + "&";
        if (queryName !== undefined && queryName !== null) url_ += "QueryName=" + encodeURIComponent("" + queryName) + "&";
        if (groupId !== undefined && groupId !== null) url_ += "GroupId=" + encodeURIComponent("" + groupId) + "&";
        if (productIds !== undefined && productIds !== null) productIds && productIds.forEach((item)=>{
            url_ += "ProductIds=" + encodeURIComponent("" + item) + "&";
        });
        if (sortBy !== undefined && sortBy !== null) url_ += "SortBy=" + encodeURIComponent("" + sortBy) + "&";
        if (sortOrder !== undefined && sortOrder !== null) url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
        if (productSettings !== undefined && productSettings !== null) url_ += "ProductSettings=" + encodeURIComponent("" + productSettings) + "&";
        if (groupSettings !== undefined && groupSettings !== null) url_ += "GroupSettings=" + encodeURIComponent("" + groupSettings) + "&";
        if (facetGroupSettings !== undefined && facetGroupSettings !== null) url_ += "FacetGroupSettings=" + encodeURIComponent("" + facetGroupSettings) + "&";
        if (parameters !== undefined && parameters !== null) url_ += "Parameters=" + encodeURIComponent("" + parameters) + "&";
        if (pageSize === null) throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined) url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (currentPage === null) throw new Error("The parameter 'currentPage' cannot be null.");
        else if (currentPage !== undefined) url_ += "CurrentPage=" + encodeURIComponent("" + currentPage) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null) url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
        if (userId === null) throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined) url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (showPricesWithVat === null) throw new Error("The parameter 'showPricesWithVat' cannot be null.");
        else if (showPricesWithVat !== undefined) url_ += "ShowPricesWithVat=" + encodeURIComponent("" + showPricesWithVat) + "&";
        if (currencyCode !== undefined && currencyCode !== null) url_ += "CurrencyCode=" + encodeURIComponent("" + currencyCode) + "&";
        if (countryCode !== undefined && countryCode !== null) url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (shopId !== undefined && shopId !== null) url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (languageId !== undefined && languageId !== null) url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (filledProperties !== undefined && filledProperties !== null) filledProperties && filledProperties.forEach((item)=>{
            url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&";
        });
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processSearch(_response);
        });
    }
    processSearch(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $1eb99885af038d5c$export$c23b750e5a0f6dff).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("No matching products found", status, _responseText, _headers);
        });
        else if (status === 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("No products match the parameters", status, _responseText, _headers);
        });
        else if (status === 400) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Invalid parameters. Specify Repository and Queryname or specify a group id", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets a product by it's id.
     * @param id ProductId for the product to get
     * @param loadVariantInfoOnVariants (optional) 
     * @param priceSettings (optional) 
     * @param mediaSettings (optional) 
     * @param manufacturerSettings (optional) 
     * @param categoryFieldSettings (optional) 
     * @param productFieldSettings (optional) 
     * @param variantInfoSettings (optional) 
     * @param groupInfoSettings (optional) 
     * @param assetCategorySettings (optional) 
     * @param stockUnitSettings (optional) 
     * @param unitOptionSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @return Product matching the id
     */ getProduct(id, loadVariantInfoOnVariants, priceSettings, mediaSettings, manufacturerSettings, categoryFieldSettings, productFieldSettings, variantInfoSettings, groupInfoSettings, assetCategorySettings, stockUnitSettings, unitOptionSettings, userId, showPricesWithVat, currencyCode, countryCode, shopId, languageId, filledProperties) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/products/{id}?";
        if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (loadVariantInfoOnVariants === null) throw new Error("The parameter 'loadVariantInfoOnVariants' cannot be null.");
        else if (loadVariantInfoOnVariants !== undefined) url_ += "LoadVariantInfoOnVariants=" + encodeURIComponent("" + loadVariantInfoOnVariants) + "&";
        if (priceSettings !== undefined && priceSettings !== null) url_ += "PriceSettings=" + encodeURIComponent("" + priceSettings) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null) url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
        if (manufacturerSettings !== undefined && manufacturerSettings !== null) url_ += "ManufacturerSettings=" + encodeURIComponent("" + manufacturerSettings) + "&";
        if (categoryFieldSettings !== undefined && categoryFieldSettings !== null) url_ += "CategoryFieldSettings=" + encodeURIComponent("" + categoryFieldSettings) + "&";
        if (productFieldSettings !== undefined && productFieldSettings !== null) url_ += "ProductFieldSettings=" + encodeURIComponent("" + productFieldSettings) + "&";
        if (variantInfoSettings !== undefined && variantInfoSettings !== null) url_ += "VariantInfoSettings=" + encodeURIComponent("" + variantInfoSettings) + "&";
        if (groupInfoSettings !== undefined && groupInfoSettings !== null) url_ += "GroupInfoSettings=" + encodeURIComponent("" + groupInfoSettings) + "&";
        if (assetCategorySettings !== undefined && assetCategorySettings !== null) url_ += "AssetCategorySettings=" + encodeURIComponent("" + assetCategorySettings) + "&";
        if (stockUnitSettings !== undefined && stockUnitSettings !== null) url_ += "StockUnitSettings=" + encodeURIComponent("" + stockUnitSettings) + "&";
        if (unitOptionSettings !== undefined && unitOptionSettings !== null) url_ += "UnitOptionSettings=" + encodeURIComponent("" + unitOptionSettings) + "&";
        if (userId === null) throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined) url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (showPricesWithVat === null) throw new Error("The parameter 'showPricesWithVat' cannot be null.");
        else if (showPricesWithVat !== undefined) url_ += "ShowPricesWithVat=" + encodeURIComponent("" + showPricesWithVat) + "&";
        if (currencyCode !== undefined && currencyCode !== null) url_ += "CurrencyCode=" + encodeURIComponent("" + currencyCode) + "&";
        if (countryCode !== undefined && countryCode !== null) url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (shopId !== undefined && shopId !== null) url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (languageId !== undefined && languageId !== null) url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (filledProperties !== undefined && filledProperties !== null) filledProperties && filledProperties.forEach((item)=>{
            url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&";
        });
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetProduct(_response);
        });
    }
    processGetProduct(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $8da05be43277adcd$export$4705ae49e99a5fff).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("No matching product found", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets a product by it's id and variantid.
     * @param id ProductId for the product to get
     * @param variantId VariantId for the variant to get - master if not specified
     * @param loadVariantInfoOnVariants (optional) 
     * @param priceSettings (optional) 
     * @param mediaSettings (optional) 
     * @param manufacturerSettings (optional) 
     * @param categoryFieldSettings (optional) 
     * @param productFieldSettings (optional) 
     * @param variantInfoSettings (optional) 
     * @param groupInfoSettings (optional) 
     * @param assetCategorySettings (optional) 
     * @param stockUnitSettings (optional) 
     * @param unitOptionSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @return Product matching the id and variantid
     */ getProduct2(id, variantId, loadVariantInfoOnVariants, priceSettings, mediaSettings, manufacturerSettings, categoryFieldSettings, productFieldSettings, variantInfoSettings, groupInfoSettings, assetCategorySettings, stockUnitSettings, unitOptionSettings, userId, showPricesWithVat, currencyCode, countryCode, shopId, languageId, filledProperties) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/products/{id}/{variantId}?";
        if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (variantId === undefined || variantId === null) throw new Error("The parameter 'variantId' must be defined.");
        url_ = url_.replace("{variantId}", encodeURIComponent("" + variantId));
        if (loadVariantInfoOnVariants === null) throw new Error("The parameter 'loadVariantInfoOnVariants' cannot be null.");
        else if (loadVariantInfoOnVariants !== undefined) url_ += "LoadVariantInfoOnVariants=" + encodeURIComponent("" + loadVariantInfoOnVariants) + "&";
        if (priceSettings !== undefined && priceSettings !== null) url_ += "PriceSettings=" + encodeURIComponent("" + priceSettings) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null) url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
        if (manufacturerSettings !== undefined && manufacturerSettings !== null) url_ += "ManufacturerSettings=" + encodeURIComponent("" + manufacturerSettings) + "&";
        if (categoryFieldSettings !== undefined && categoryFieldSettings !== null) url_ += "CategoryFieldSettings=" + encodeURIComponent("" + categoryFieldSettings) + "&";
        if (productFieldSettings !== undefined && productFieldSettings !== null) url_ += "ProductFieldSettings=" + encodeURIComponent("" + productFieldSettings) + "&";
        if (variantInfoSettings !== undefined && variantInfoSettings !== null) url_ += "VariantInfoSettings=" + encodeURIComponent("" + variantInfoSettings) + "&";
        if (groupInfoSettings !== undefined && groupInfoSettings !== null) url_ += "GroupInfoSettings=" + encodeURIComponent("" + groupInfoSettings) + "&";
        if (assetCategorySettings !== undefined && assetCategorySettings !== null) url_ += "AssetCategorySettings=" + encodeURIComponent("" + assetCategorySettings) + "&";
        if (stockUnitSettings !== undefined && stockUnitSettings !== null) url_ += "StockUnitSettings=" + encodeURIComponent("" + stockUnitSettings) + "&";
        if (unitOptionSettings !== undefined && unitOptionSettings !== null) url_ += "UnitOptionSettings=" + encodeURIComponent("" + unitOptionSettings) + "&";
        if (userId === null) throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined) url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (showPricesWithVat === null) throw new Error("The parameter 'showPricesWithVat' cannot be null.");
        else if (showPricesWithVat !== undefined) url_ += "ShowPricesWithVat=" + encodeURIComponent("" + showPricesWithVat) + "&";
        if (currencyCode !== undefined && currencyCode !== null) url_ += "CurrencyCode=" + encodeURIComponent("" + currencyCode) + "&";
        if (countryCode !== undefined && countryCode !== null) url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (shopId !== undefined && shopId !== null) url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (languageId !== undefined && languageId !== null) url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (filledProperties !== undefined && filledProperties !== null) filledProperties && filledProperties.forEach((item)=>{
            url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&";
        });
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetProduct2(_response);
        });
    }
    processGetProduct2(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $8da05be43277adcd$export$4705ae49e99a5fff).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("No matching product found", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets all related products of a product filtered by query parameters.
     * @param id ProductId for the product to get related products for
     * @param productSettings (optional) 
     * @param groupSettings (optional) 
     * @param facetGroupSettings (optional) 
     * @param parameters (optional) 
     * @param pageSize (optional) 
     * @param currentPage (optional) 
     * @param mediaSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @return Related products of the product matching the id
     */ related(id, productSettings, groupSettings, facetGroupSettings, parameters, pageSize, currentPage, mediaSettings, userId, showPricesWithVat, currencyCode, countryCode, shopId, languageId, filledProperties) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/products/{id}/related?";
        if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (productSettings !== undefined && productSettings !== null) url_ += "ProductSettings=" + encodeURIComponent("" + productSettings) + "&";
        if (groupSettings !== undefined && groupSettings !== null) url_ += "GroupSettings=" + encodeURIComponent("" + groupSettings) + "&";
        if (facetGroupSettings !== undefined && facetGroupSettings !== null) url_ += "FacetGroupSettings=" + encodeURIComponent("" + facetGroupSettings) + "&";
        if (parameters !== undefined && parameters !== null) url_ += "Parameters=" + encodeURIComponent("" + parameters) + "&";
        if (pageSize === null) throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined) url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (currentPage === null) throw new Error("The parameter 'currentPage' cannot be null.");
        else if (currentPage !== undefined) url_ += "CurrentPage=" + encodeURIComponent("" + currentPage) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null) url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
        if (userId === null) throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined) url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (showPricesWithVat === null) throw new Error("The parameter 'showPricesWithVat' cannot be null.");
        else if (showPricesWithVat !== undefined) url_ += "ShowPricesWithVat=" + encodeURIComponent("" + showPricesWithVat) + "&";
        if (currencyCode !== undefined && currencyCode !== null) url_ += "CurrencyCode=" + encodeURIComponent("" + currencyCode) + "&";
        if (countryCode !== undefined && countryCode !== null) url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (shopId !== undefined && shopId !== null) url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (languageId !== undefined && languageId !== null) url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (filledProperties !== undefined && filledProperties !== null) filledProperties && filledProperties.forEach((item)=>{
            url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&";
        });
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processRelated(_response);
        });
    }
    processRelated(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $1eb99885af038d5c$export$c23b750e5a0f6dff).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("No matching related products found", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Gets related products of a product filtered by query parameters.
     * @param id ProductId for the product to get related products for
     * @param variantId VariantId for the variant to get - master if not specified
     * @param productSettings (optional) 
     * @param groupSettings (optional) 
     * @param facetGroupSettings (optional) 
     * @param parameters (optional) 
     * @param pageSize (optional) 
     * @param currentPage (optional) 
     * @param mediaSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @return Related products of the product matching the id
     */ related2(id, variantId, productSettings, groupSettings, facetGroupSettings, parameters, pageSize, currentPage, mediaSettings, userId, showPricesWithVat, currencyCode, countryCode, shopId, languageId, filledProperties) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/products/{id}/{variantId}/related?";
        if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (variantId === undefined || variantId === null) throw new Error("The parameter 'variantId' must be defined.");
        url_ = url_.replace("{variantId}", encodeURIComponent("" + variantId));
        if (productSettings !== undefined && productSettings !== null) url_ += "ProductSettings=" + encodeURIComponent("" + productSettings) + "&";
        if (groupSettings !== undefined && groupSettings !== null) url_ += "GroupSettings=" + encodeURIComponent("" + groupSettings) + "&";
        if (facetGroupSettings !== undefined && facetGroupSettings !== null) url_ += "FacetGroupSettings=" + encodeURIComponent("" + facetGroupSettings) + "&";
        if (parameters !== undefined && parameters !== null) url_ += "Parameters=" + encodeURIComponent("" + parameters) + "&";
        if (pageSize === null) throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined) url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (currentPage === null) throw new Error("The parameter 'currentPage' cannot be null.");
        else if (currentPage !== undefined) url_ += "CurrentPage=" + encodeURIComponent("" + currentPage) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null) url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
        if (userId === null) throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined) url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (showPricesWithVat === null) throw new Error("The parameter 'showPricesWithVat' cannot be null.");
        else if (showPricesWithVat !== undefined) url_ += "ShowPricesWithVat=" + encodeURIComponent("" + showPricesWithVat) + "&";
        if (currencyCode !== undefined && currencyCode !== null) url_ += "CurrencyCode=" + encodeURIComponent("" + currencyCode) + "&";
        if (countryCode !== undefined && countryCode !== null) url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (shopId !== undefined && shopId !== null) url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (languageId !== undefined && languageId !== null) url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (filledProperties !== undefined && filledProperties !== null) filledProperties && filledProperties.forEach((item)=>{
            url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&";
        });
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processRelated2(_response);
        });
    }
    processRelated2(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $1eb99885af038d5c$export$c23b750e5a0f6dff).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("No matching related products found", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Exports products. Send download link for zip archive containing file with specified format to email.
     * @param repositoryName (optional) Parameter that is used with the query name to do a search
     * @param queryName (optional) Parameter that is used with the repository name to do a search
     * @param groupId (optional) Parameter that can be used for getting all products in a specific group
     * @param productIds (optional) Parameter that can be used for getting all products with the specified ids
     * @param sortBy (optional) Sets the field to sort by, i.e. ProductPrice
     * @param sortOrder (optional) Sets the sort direction. ASC (default) or DESC
     * @param productSettings (optional) 
     * @param groupSettings (optional) 
     * @param facetGroupSettings (optional) 
     * @param parameters (optional) 
     * @param pageSize (optional) 
     * @param currentPage (optional) 
     * @param mediaSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @param fileName (optional) Gets or sets name of file for export. If not specified file name will be $"export_{DateTime.Now}".
     * @param exportFormat (optional) Gets or sets the format for export. If not specified CSV format is used.
     * @param senderName (optional) Gets or sets sender name. If not specified SenderEmail will be used.
     * @param senderEmail (optional) Gets or sets sender email. If not specified SystemMailAddress will be used.
     * @param recipientTokens (optional) Gets or sets recipient tokens recieved from UsersController.CreateRecipients(IEnumerable{string}). Required.
     * @param subject (optional) Gets or sets subject. If not specified "Export products" will be used.
     * @param templatePath (optional) Gets or sets template path. If not specified "eCom/ProductCatalog/ExportProductsMail.cshtml" will be used.
     * @param dpi (optional) 
     * @param imageFormat (optional) 
     * @param height (optional) 
     * @param width (optional) 
     * @param embedProfile (optional) 
     * @param assetCategories (optional) 
     * @return Products exported successfully
     */ exportProducts(repositoryName, queryName, groupId, productIds, sortBy, sortOrder, productSettings, groupSettings, facetGroupSettings, parameters, pageSize, currentPage, mediaSettings, userId, showPricesWithVat, currencyCode, countryCode, shopId, languageId, filledProperties, fileName, exportFormat, senderName, senderEmail, recipientTokens, subject, templatePath, dpi, imageFormat, height, width, embedProfile, assetCategories) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/products/export?";
        if (repositoryName !== undefined && repositoryName !== null) url_ += "RepositoryName=" + encodeURIComponent("" + repositoryName) + "&";
        if (queryName !== undefined && queryName !== null) url_ += "QueryName=" + encodeURIComponent("" + queryName) + "&";
        if (groupId !== undefined && groupId !== null) url_ += "GroupId=" + encodeURIComponent("" + groupId) + "&";
        if (productIds !== undefined && productIds !== null) productIds && productIds.forEach((item)=>{
            url_ += "ProductIds=" + encodeURIComponent("" + item) + "&";
        });
        if (sortBy !== undefined && sortBy !== null) url_ += "SortBy=" + encodeURIComponent("" + sortBy) + "&";
        if (sortOrder !== undefined && sortOrder !== null) url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
        if (productSettings !== undefined && productSettings !== null) url_ += "ProductSettings=" + encodeURIComponent("" + productSettings) + "&";
        if (groupSettings !== undefined && groupSettings !== null) url_ += "GroupSettings=" + encodeURIComponent("" + groupSettings) + "&";
        if (facetGroupSettings !== undefined && facetGroupSettings !== null) url_ += "FacetGroupSettings=" + encodeURIComponent("" + facetGroupSettings) + "&";
        if (parameters !== undefined && parameters !== null) url_ += "Parameters=" + encodeURIComponent("" + parameters) + "&";
        if (pageSize === null) throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined) url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (currentPage === null) throw new Error("The parameter 'currentPage' cannot be null.");
        else if (currentPage !== undefined) url_ += "CurrentPage=" + encodeURIComponent("" + currentPage) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null) url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
        if (userId === null) throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined) url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (showPricesWithVat === null) throw new Error("The parameter 'showPricesWithVat' cannot be null.");
        else if (showPricesWithVat !== undefined) url_ += "ShowPricesWithVat=" + encodeURIComponent("" + showPricesWithVat) + "&";
        if (currencyCode !== undefined && currencyCode !== null) url_ += "CurrencyCode=" + encodeURIComponent("" + currencyCode) + "&";
        if (countryCode !== undefined && countryCode !== null) url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (shopId !== undefined && shopId !== null) url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (languageId !== undefined && languageId !== null) url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (filledProperties !== undefined && filledProperties !== null) filledProperties && filledProperties.forEach((item)=>{
            url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&";
        });
        if (fileName !== undefined && fileName !== null) url_ += "FileName=" + encodeURIComponent("" + fileName) + "&";
        if (exportFormat === null) throw new Error("The parameter 'exportFormat' cannot be null.");
        else if (exportFormat !== undefined) url_ += "ExportFormat=" + encodeURIComponent("" + exportFormat) + "&";
        if (senderName !== undefined && senderName !== null) url_ += "SenderName=" + encodeURIComponent("" + senderName) + "&";
        if (senderEmail !== undefined && senderEmail !== null) url_ += "SenderEmail=" + encodeURIComponent("" + senderEmail) + "&";
        if (recipientTokens !== undefined && recipientTokens !== null) recipientTokens && recipientTokens.forEach((item)=>{
            url_ += "RecipientTokens=" + encodeURIComponent("" + item) + "&";
        });
        if (subject !== undefined && subject !== null) url_ += "Subject=" + encodeURIComponent("" + subject) + "&";
        if (templatePath !== undefined && templatePath !== null) url_ += "TemplatePath=" + encodeURIComponent("" + templatePath) + "&";
        if (dpi === null) throw new Error("The parameter 'dpi' cannot be null.");
        else if (dpi !== undefined) url_ += "Dpi=" + encodeURIComponent("" + dpi) + "&";
        if (imageFormat !== undefined && imageFormat !== null) url_ += "ImageFormat=" + encodeURIComponent("" + imageFormat) + "&";
        if (height === null) throw new Error("The parameter 'height' cannot be null.");
        else if (height !== undefined) url_ += "Height=" + encodeURIComponent("" + height) + "&";
        if (width === null) throw new Error("The parameter 'width' cannot be null.");
        else if (width !== undefined) url_ += "Width=" + encodeURIComponent("" + width) + "&";
        if (embedProfile === null) throw new Error("The parameter 'embedProfile' cannot be null.");
        else if (embedProfile !== undefined) url_ += "EmbedProfile=" + encodeURIComponent("" + embedProfile) + "&";
        if (assetCategories !== undefined && assetCategories !== null) assetCategories && assetCategories.forEach((item)=>{
            url_ += "AssetCategories=" + encodeURIComponent("" + item) + "&";
        });
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {}
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processExportProducts(_response);
        });
    }
    processExportProducts(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            return;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("No matching products found", status, _responseText, _headers);
        });
        else if (status === 204) return response.text().then((_responseText)=>{
            return;
        });
        else if (status === 400) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("Invalid parameters. Missing required parameters.", status, _responseText, _headers);
        });
        else if (status === 402) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("You don't have a proper license to support this feature", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}





class $a449a2222a229851$export$22ecf64bbb48d645 extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Find service points for speccified shipping by address or zip code
     * @param shippingId The shipping Id.
     * @param languageId The language Id.
     * @param countryCode (optional) The country code
     * @param zipCode (optional) The zip code
     * @param address (optional) The address
     * @param numberOfServicePoints (optional) The number of service points to return
     * @return Returns service point addresses serialized to JSON.
     */ findServicePoints(shippingId, languageId, countryCode, zipCode, address, numberOfServicePoints) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/shippings/FindServicePoints?";
        if (shippingId === undefined) throw new Error("The parameter 'shippingId' must be defined.");
        else if (shippingId !== null) url_ += "shippingId=" + encodeURIComponent("" + shippingId) + "&";
        if (languageId === undefined) throw new Error("The parameter 'languageId' must be defined.");
        else if (languageId !== null) url_ += "languageId=" + encodeURIComponent("" + languageId) + "&";
        if (countryCode !== undefined && countryCode !== null) url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (zipCode !== undefined && zipCode !== null) url_ += "ZipCode=" + encodeURIComponent("" + zipCode) + "&";
        if (address !== undefined && address !== null) url_ += "Address=" + encodeURIComponent("" + address) + "&";
        if (numberOfServicePoints === null) throw new Error("The parameter 'numberOfServicePoints' cannot be null.");
        else if (numberOfServicePoints !== undefined) url_ += "NumberOfServicePoints=" + encodeURIComponent("" + numberOfServicePoints) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processFindServicePoints(_response);
        });
    }
    processFindServicePoints(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then((blob)=>{
                return {
                    fileName: fileName,
                    data: blob,
                    status: status,
                    headers: _headers
                };
            });
        } else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
    /**
     * Get shippings
     * @param languageId (optional) The language id
     * @param countryCode (optional) The country code
     * @param regionCode (optional) The region code
     * @return The collection of shipping view model
     */ getShippings(languageId, countryCode, regionCode) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/shippings?";
        if (languageId !== undefined && languageId !== null) url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (countryCode !== undefined && countryCode !== null) url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (regionCode !== undefined && regionCode !== null) url_ += "RegionCode=" + encodeURIComponent("" + regionCode) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetShippings(_response);
        });
    }
    processGetShippings(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [];
                for (let item of resultData200)result200.push((0, $00084699b66c2cef$export$eed10c966122c057).fromJS(item));
            } else result200 = null;
            return result200;
        });
        else if (status === 400) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("A language id must be specified", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}





class $ffe584783dfb3dd0$export$ff39e19587dd8c73 extends (0, $b61db8281f049cc2$export$8f6e4be34af2779b) {
    jsonParseReviver = undefined;
    constructor(configuration, baseUrl, http){
        super(configuration);
        this.http = http ? http : window;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    /**
     * Returns variant information for the specified product
     * @param productId The product to return variant info for
     * @param loadVariantInfoOnVariants (optional) 
     * @param priceSettings (optional) 
     * @param mediaSettings (optional) 
     * @param manufacturerSettings (optional) 
     * @param categoryFieldSettings (optional) 
     * @param productFieldSettings (optional) 
     * @param variantInfoSettings (optional) 
     * @param groupInfoSettings (optional) 
     * @param assetCategorySettings (optional) 
     * @param stockUnitSettings (optional) 
     * @param unitOptionSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @return Variant info model for the specified id
     */ getVariantInfo(productId, loadVariantInfoOnVariants, priceSettings, mediaSettings, manufacturerSettings, categoryFieldSettings, productFieldSettings, variantInfoSettings, groupInfoSettings, assetCategorySettings, stockUnitSettings, unitOptionSettings, userId, showPricesWithVat, currencyCode, countryCode, shopId, languageId, filledProperties) {
        let url_ = this.baseUrl + "/dwapi/ecommerce/variants/{productId}?";
        if (productId === undefined || productId === null) throw new Error("The parameter 'productId' must be defined.");
        url_ = url_.replace("{productId}", encodeURIComponent("" + productId));
        if (loadVariantInfoOnVariants === null) throw new Error("The parameter 'loadVariantInfoOnVariants' cannot be null.");
        else if (loadVariantInfoOnVariants !== undefined) url_ += "LoadVariantInfoOnVariants=" + encodeURIComponent("" + loadVariantInfoOnVariants) + "&";
        if (priceSettings !== undefined && priceSettings !== null) url_ += "PriceSettings=" + encodeURIComponent("" + priceSettings) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null) url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
        if (manufacturerSettings !== undefined && manufacturerSettings !== null) url_ += "ManufacturerSettings=" + encodeURIComponent("" + manufacturerSettings) + "&";
        if (categoryFieldSettings !== undefined && categoryFieldSettings !== null) url_ += "CategoryFieldSettings=" + encodeURIComponent("" + categoryFieldSettings) + "&";
        if (productFieldSettings !== undefined && productFieldSettings !== null) url_ += "ProductFieldSettings=" + encodeURIComponent("" + productFieldSettings) + "&";
        if (variantInfoSettings !== undefined && variantInfoSettings !== null) url_ += "VariantInfoSettings=" + encodeURIComponent("" + variantInfoSettings) + "&";
        if (groupInfoSettings !== undefined && groupInfoSettings !== null) url_ += "GroupInfoSettings=" + encodeURIComponent("" + groupInfoSettings) + "&";
        if (assetCategorySettings !== undefined && assetCategorySettings !== null) url_ += "AssetCategorySettings=" + encodeURIComponent("" + assetCategorySettings) + "&";
        if (stockUnitSettings !== undefined && stockUnitSettings !== null) url_ += "StockUnitSettings=" + encodeURIComponent("" + stockUnitSettings) + "&";
        if (unitOptionSettings !== undefined && unitOptionSettings !== null) url_ += "UnitOptionSettings=" + encodeURIComponent("" + unitOptionSettings) + "&";
        if (userId === null) throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined) url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (showPricesWithVat === null) throw new Error("The parameter 'showPricesWithVat' cannot be null.");
        else if (showPricesWithVat !== undefined) url_ += "ShowPricesWithVat=" + encodeURIComponent("" + showPricesWithVat) + "&";
        if (currencyCode !== undefined && currencyCode !== null) url_ += "CurrencyCode=" + encodeURIComponent("" + currencyCode) + "&";
        if (countryCode !== undefined && countryCode !== null) url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (shopId !== undefined && shopId !== null) url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (languageId !== undefined && languageId !== null) url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (filledProperties !== undefined && filledProperties !== null) filledProperties && filledProperties.forEach((item)=>{
            url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&";
        });
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then((_response)=>{
            return this.processGetVariantInfo(_response);
        });
    }
    processGetVariantInfo(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) response.headers.forEach((v, k)=>_headers[k] = v);
        if (status === 200) return response.text().then((_responseText)=>{
            let result200 = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = (0, $e999603af4250d61$export$9efab29e747eddcb).fromJS(resultData200);
            return result200;
        });
        else if (status === 404) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("No matching product found", status, _responseText, _headers);
        });
        else if (status !== 200 && status !== 204) return response.text().then((_responseText)=>{
            return (0, $b483d2957f8ca2c2$export$de0c4a986b439e52)("An unexpected server error occurred.", status, _responseText, _headers);
        });
        return Promise.resolve(null);
    }
}


var $129fc47832c86555$export$2e2bcd8739ae039 = {
    CartsClient: $54bc93fc8f89c610$export$33ee60cc95d2cb98,
    FeedClient: $32d74205d8489bdb$export$a7828f465fa73b14,
    GroupsClient: $3d3f95904efb6413$export$f40d29ef16d78592,
    InternationalClient: $cf8394eefb9dbefe$export$ee2fa6182b3b0170,
    OrderClient: $5e087e3f6724c25b$export$33d379092842afb2,
    PaymentsClient: $99c32a708c896722$export$914c60b88733f0a0,
    ProductsClient: $8cded0cc25cfb2cf$export$c7599661db785dae,
    ShippingClient: $a449a2222a229851$export$22ecf64bbb48d645,
    VariantsClient: $ffe584783dfb3dd0$export$ff39e19587dd8c73
};




//# sourceMappingURL=index.js.map

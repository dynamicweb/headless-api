import { ClientBase } from '../Shared/ClientBase';
import { throwException } from '../Helpers/ExceptionHelper';
import { Key, KeyCollection, Translation } from './Translations';

export class TranslationsClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, token?: string) {
        super(baseUrl, token);
    }

    /**
     * Gets all translations for a design
     * @return OK
     */
    getAll(areaid: number): Promise<{ [key: string]: Key; }> {
        let url_ = this.baseUrl + "/dwapi/translations/area/{areaid}";
        if (areaid === undefined || areaid === null)
            throw new Error("The parameter 'areaid' must be defined.");
        url_ = url_.replace("{areaid}", encodeURIComponent("" + areaid));
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<{ [key: string]: Key; }> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = KeyCollection.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The specified area was not found\nor\nLayout not specified on area", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<{ [key: string]: Key; }>(null as any);
    }

    /**
     * Gets all translations for a design
     * @return OK
     */
    getAll2(designname: string | null): Promise<{ [key: string]: Key; }> {
        let url_ = this.baseUrl + "/dwapi/translations/{designname}";
        if (designname === undefined || designname === null)
            throw new Error("The parameter 'designname' must be defined.");
        url_ = url_.replace("{designname}", encodeURIComponent("" + designname));
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll2(_response);
        });
    }

    protected processGetAll2(response: Response): Promise<{ [key: string]: Key; }> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = KeyCollection.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The specified design was not found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<{ [key: string]: Key; }>(null as any);
    }

    /**
     * Gets all translations for a design in a given culture
     * @return OK
     */
    getAllAll(designname: string | null, culture: string | null): Promise<Translation[]> {
        let url_ = this.baseUrl + "/dwapi/translations/{designname}/{culture}";
        if (designname === undefined || designname === null)
            throw new Error("The parameter 'designname' must be defined.");
        url_ = url_.replace("{designname}", encodeURIComponent("" + designname));
        if (culture === undefined || culture === null)
            throw new Error("The parameter 'culture' must be defined.");
        url_ = url_.replace("{culture}", encodeURIComponent("" + culture));
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllAll(_response);
        });
    }

    protected processGetAllAll(response: Response): Promise<Translation[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Translation.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The specified design was not found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Translation[]>(null as any);
    }
}

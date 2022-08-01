import { ClientBase } from '../Shared/ClientBase';
import { ClientConfiguration } from '../Shared/ClientConfiguration';
import { throwException } from '../Helpers/ExceptionHelper';
import { CountryViewModel } from './CountryViewModel';
import { CurrencyViewModel } from './CurrencyViewModel';

export class InternationalClient extends ClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : window as any;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
     * Get countries
     * @param languageId (optional) ID of language to use for names of the returned countries
     * @return A list of countries
     */
    getCountries(languageId: string | null | undefined): Promise<CountryViewModel[]> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/international/countries?";
        if (languageId !== undefined && languageId !== null)
            url_ += "languageId=" + encodeURIComponent("" + languageId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetCountries(_response);
        });
    }

    protected processGetCountries(response: Response): Promise<CountryViewModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CountryViewModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("No countries found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CountryViewModel[]>(null as any);
    }

    /**
     * Get currencies
     * @param languageId (optional) ID of language to use for names of the returned currencies
     * @return A list of currencies
     */
    getCurrencies(languageId: string | null | undefined): Promise<CurrencyViewModel[]> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/international/currencies?";
        if (languageId !== undefined && languageId !== null)
            url_ += "languageId=" + encodeURIComponent("" + languageId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetCurrencies(_response);
        });
    }

    protected processGetCurrencies(response: Response): Promise<CurrencyViewModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CurrencyViewModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("No currencies found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CurrencyViewModel[]>(null as any);
    }
}

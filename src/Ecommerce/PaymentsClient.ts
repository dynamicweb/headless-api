import { ClientBase } from '../Shared/ClientBase';
import { ClientConfiguration } from '../Shared/ClientConfiguration';
import { throwException } from '../Helpers/ExceptionHelper';
import { PaymentViewModel } from './PaymentViewModel';

export class PaymentsClient extends ClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : window as any;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
     * Get payments
     * @param languageId (optional) The language id
     * @param countryCode (optional) The country code
     * @param regionCode (optional) The region code
     * @return The collection of payment view model
     */
    getPayments(languageId: string | null | undefined, countryCode: string | null | undefined, regionCode: string | null | undefined): Promise<PaymentViewModel[]> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/payments?";
        if (languageId !== undefined && languageId !== null)
            url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (countryCode !== undefined && countryCode !== null)
            url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (regionCode !== undefined && regionCode !== null)
            url_ += "RegionCode=" + encodeURIComponent("" + regionCode) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetPayments(_response);
        });
    }

    protected processGetPayments(response: Response): Promise<PaymentViewModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(PaymentViewModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The language is not found.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PaymentViewModel[]>(null as any);
    }
}

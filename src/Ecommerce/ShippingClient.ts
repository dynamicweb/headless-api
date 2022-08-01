import { ClientBase } from '../Shared/ClientBase';
import { ClientConfiguration } from '../Shared/ClientConfiguration';
import { throwException } from '../Helpers/ExceptionHelper';
import { FileResponse } from '../Shared/FileResponse';
import { ShippingViewModel } from './ShippingViewModel';

export class ShippingClient extends ClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : window as any;
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
     */
    findServicePoints(shippingId: string | null, languageId: string | null, countryCode: string | null | undefined, zipCode: string | null | undefined, address: string | null | undefined, numberOfServicePoints: number | undefined): Promise<FileResponse> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/shippings/FindServicePoints?";
        if (shippingId === undefined)
            throw new Error("The parameter 'shippingId' must be defined.");
        else if(shippingId !== null)
            url_ += "shippingId=" + encodeURIComponent("" + shippingId) + "&";
        if (languageId === undefined)
            throw new Error("The parameter 'languageId' must be defined.");
        else if(languageId !== null)
            url_ += "languageId=" + encodeURIComponent("" + languageId) + "&";
        if (countryCode !== undefined && countryCode !== null)
            url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (zipCode !== undefined && zipCode !== null)
            url_ += "ZipCode=" + encodeURIComponent("" + zipCode) + "&";
        if (address !== undefined && address !== null)
            url_ += "Address=" + encodeURIComponent("" + address) + "&";
        if (numberOfServicePoints === null)
            throw new Error("The parameter 'numberOfServicePoints' cannot be null.");
        else if (numberOfServicePoints !== undefined)
            url_ += "NumberOfServicePoints=" + encodeURIComponent("" + numberOfServicePoints) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processFindServicePoints(_response);
        });
    }

    protected processFindServicePoints(response: Response): Promise<FileResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse>(null as any);
    }

    /**
     * Get shippings
     * @param languageId (optional) The language id
     * @param countryCode (optional) The country code
     * @param regionCode (optional) The region code
     * @return The collection of shipping view model
     */
    getShippings(languageId: string | null | undefined, countryCode: string | null | undefined, regionCode: string | null | undefined): Promise<ShippingViewModel[]> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/shippings?";
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
            return this.processGetShippings(_response);
        });
    }

    protected processGetShippings(response: Response): Promise<ShippingViewModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(ShippingViewModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A language id must be specified", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ShippingViewModel[]>(null as any);
    }
}

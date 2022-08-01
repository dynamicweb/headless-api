import { ClientBase } from '../Shared/ClientBase';
import { ClientConfiguration } from '../Shared/ClientConfiguration';
import { throwException } from '../Helpers/ExceptionHelper';
import { PageInfoViewModel } from './PageInfoViewModel';

export class PagesClient extends ClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : window as any;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
     * Gets pages by query
     * @param areaId (optional) 
     * @param pageId (optional) 
     * @param itemType (optional) 
     * @return OK
     */
    getAll(areaId: number | null | undefined, pageId: number | null | undefined, itemType: string | null | undefined): Promise<PageInfoViewModel[]> {
        let url_ = this.baseUrl + "/dwapi/content/pages?";
        if (areaId !== undefined && areaId !== null)
            url_ += "AreaId=" + encodeURIComponent("" + areaId) + "&";
        if (pageId !== undefined && pageId !== null)
            url_ += "PageId=" + encodeURIComponent("" + pageId) + "&";
        if (itemType !== undefined && itemType !== null)
            url_ += "ItemType=" + encodeURIComponent("" + itemType) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<PageInfoViewModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(PageInfoViewModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The area is not found.\nor\nThe area is not published.\nor\nThe query returned no pages.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PageInfoViewModel[]>(null as any);
    }

    /**
     * Gets a page by id
     * @param id Id of the page
     * @return OK
     */
    getById(id: number): Promise<PageInfoViewModel> {
        let url_ = this.baseUrl + "/dwapi/content/pages/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetById(_response);
        });
    }

    protected processGetById(response: Response): Promise<PageInfoViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = PageInfoViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("Not found.\nor\nThe page is not published.\nor\nThe area is not published.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("Page is password protected and cannot be accessed using this endpoint.\nor\nThe current user does not have the needed permissions to view the page.\nor\nThe current user does not have the needed permissions to view the area.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PageInfoViewModel>(null as any);
    }

    /**
     * Gets a page by url
     * @param url The path of the page, i.e. /page/subpage/page
     * @param hostname (optional) Specify the hostname setup on the website to match with. If none is specified, the request hostname is used for lookup
     * @return OK
     */
    getByUrl(url: string | null, hostname: string | null | undefined): Promise<PageInfoViewModel> {
        let url_ = this.baseUrl + "/dwapi/content/pages/url?";
        if (url === undefined)
            throw new Error("The parameter 'url' must be defined.");
        else if(url !== null)
            url_ += "url=" + encodeURIComponent("" + url) + "&";
        if (hostname !== undefined && hostname !== null)
            url_ += "hostname=" + encodeURIComponent("" + hostname) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetByUrl(_response);
        });
    }

    protected processGetByUrl(response: Response): Promise<PageInfoViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = PageInfoViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("Not found.\nor\nThe page is not published.\nor\nThe area is not published.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("Page is password protected and cannot be accessed using this endpoint.\nor\nThe current user does not have the needed permissions to view the page.\nor\nThe current user does not have the needed permissions to view the area.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PageInfoViewModel>(null as any);
    }
}

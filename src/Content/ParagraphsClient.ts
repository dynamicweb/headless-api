import { ClientBase } from '../Shared/ClientBase';
import { throwException } from '../Helpers/ExceptionHelper';
import { ParagraphInfoViewModel } from './ParagraphInfoViewModel';

export class ParagraphsClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, token?: string) {
        super(baseUrl, token);
    }

    /**
     * Gets paragraphs by query
     * @param areaId (optional) 
     * @param pageId (optional) 
     * @param itemType (optional) 
     * @return OK
     */
    getAll(areaId: number | null | undefined, pageId: number | null | undefined, itemType: string | null | undefined): Promise<ParagraphInfoViewModel[]> {
        let url_ = this.baseUrl + "/dwapi/content/paragraphs?";
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

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<ParagraphInfoViewModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(ParagraphInfoViewModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The page is not published.\nor\nThe area is not published.", status, _responseText, _headers);
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
        return Promise.resolve<ParagraphInfoViewModel[]>(null as any);
    }

    /**
     * Gets a paragraph by id
     * @param id Id of the paragraph
     * @return OK
     */
    getById(id: number): Promise<ParagraphInfoViewModel> {
        let url_ = this.baseUrl + "/dwapi/content/paragraphs/{id}";
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

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processGetById(_response);
        });
    }

    protected processGetById(response: Response): Promise<ParagraphInfoViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ParagraphInfoViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("Not found\nor\nThe paragraph is not published.\nor\nThe page is not published.\nor\nThe area is not published.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The current user does not have permissions to access this paragraph.\nor\nThe current user does not have permissions to access this page.\nor\nThe current user does not have permissions to access this area.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ParagraphInfoViewModel>(null as any);
    }

    /**
     * Gets paragraphs by url
     * @param url The path of the page, i.e. /page/subpage/page
     * @param hostname (optional) Specify the hostname setup on the website to match with. If none is specified, the request hostname is used for lookup
     * @return OK
     */
    getByUrl(url: string | null, hostname: string | null | undefined): Promise<ParagraphInfoViewModel[]> {
        let url_ = this.baseUrl + "/dwapi/content/paragraphs/url?";
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

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processGetByUrl(_response);
        });
    }

    protected processGetByUrl(response: Response): Promise<ParagraphInfoViewModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(ParagraphInfoViewModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
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
        return Promise.resolve<ParagraphInfoViewModel[]>(null as any);
    }
}

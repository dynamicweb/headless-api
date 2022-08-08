import { ClientBase } from '../Shared/ClientBase';
import { DeviceType } from './DeviceTypes';
import { throwException } from '../Helpers/ExceptionHelper';
import { GridRowViewModel } from './GridRowViewModel';

export class GridRowClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, token?: string) {
        super(baseUrl, token);
    }

    /**
     * Gets page grid rows
     * @param pageId Id of the page - the page id has to be a page that has grid rows
     * @param device (optional) The device type - one of 'Desktop' (default), 'Mobile', 'Tablet'
     * @return OK
     */
    getById(pageId: number, device: DeviceType | null | undefined): Promise<GridRowViewModel[]> {
        let url_ = this.baseUrl + "/dwapi/content/rows/{pageId}?";
        if (pageId === undefined || pageId === null)
            throw new Error("The parameter 'pageId' must be defined.");
        url_ = url_.replace("{pageId}", encodeURIComponent("" + pageId));
        if (device !== undefined && device !== null)
            url_ += "device=" + encodeURIComponent("" + device) + "&";
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

    protected processGetById(response: Response): Promise<GridRowViewModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(GridRowViewModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("Not found.\nor\nThe page is not found.\nor\nThe page is not published.\nor\nThe area is not published.\nor\nThe page does not contain any grid rows.", status, _responseText, _headers);
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
        return Promise.resolve<GridRowViewModel[]>(null as any);
    }

    /**
     * Gets page grid rows by url
     * @param url The path of the page, i.e. /page/subpage/page
     * @param hostname (optional) Specify the hostname setup on the website to match with. If none is specified, the request hostname is used for lookup
     * @return OK
     */
    getByUrl(url: string | null, hostname: string | null | undefined): Promise<GridRowViewModel[]> {
        let url_ = this.baseUrl + "/dwapi/content/rows/url?";
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

    protected processGetByUrl(response: Response): Promise<GridRowViewModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(GridRowViewModel.fromJS(item));
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
        return Promise.resolve<GridRowViewModel[]>(null as any);
    }
}

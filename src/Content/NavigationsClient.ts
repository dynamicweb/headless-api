import { ClientBase } from '../Shared/ClientBase';
import { ClientConfiguration } from '../Shared/ClientConfiguration';
import { throwException } from '../Helpers/ExceptionHelper';
import { NavigationTreeViewModel } from './NavigationTreeViewModel';

export class NavigationsClient extends ClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : window as any;
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
     */
    getById(areaId: number, pageId: number | undefined, expandMode: ExpandMode | undefined, startLevel: number | undefined, stopLevel: number | undefined, includeFoldersAndHidden: boolean | undefined, rootAreaId: number | undefined, rootPageId: number | undefined, rootNavigationTag: string | null | undefined, parameters: { [key: string]: any; } | null | undefined): Promise<NavigationTreeViewModel> {
        let url_ = this.baseUrl + "/dwapi/frontend/navigations/{areaId}?";
        if (areaId === undefined || areaId === null)
            throw new Error("The parameter 'areaId' must be defined.");
        url_ = url_.replace("{areaId}", encodeURIComponent("" + areaId));
        if (pageId === null)
            throw new Error("The parameter 'pageId' cannot be null.");
        else if (pageId !== undefined)
            url_ += "pageId=" + encodeURIComponent("" + pageId) + "&";
        if (expandMode === null)
            throw new Error("The parameter 'expandMode' cannot be null.");
        else if (expandMode !== undefined)
            url_ += "ExpandMode=" + encodeURIComponent("" + expandMode) + "&";
        if (startLevel === null)
            throw new Error("The parameter 'startLevel' cannot be null.");
        else if (startLevel !== undefined)
            url_ += "StartLevel=" + encodeURIComponent("" + startLevel) + "&";
        if (stopLevel === null)
            throw new Error("The parameter 'stopLevel' cannot be null.");
        else if (stopLevel !== undefined)
            url_ += "StopLevel=" + encodeURIComponent("" + stopLevel) + "&";
        if (includeFoldersAndHidden === null)
            throw new Error("The parameter 'includeFoldersAndHidden' cannot be null.");
        else if (includeFoldersAndHidden !== undefined)
            url_ += "IncludeFoldersAndHidden=" + encodeURIComponent("" + includeFoldersAndHidden) + "&";
        if (rootAreaId === null)
            throw new Error("The parameter 'rootAreaId' cannot be null.");
        else if (rootAreaId !== undefined)
            url_ += "RootAreaId=" + encodeURIComponent("" + rootAreaId) + "&";
        if (rootPageId === null)
            throw new Error("The parameter 'rootPageId' cannot be null.");
        else if (rootPageId !== undefined)
            url_ += "RootPageId=" + encodeURIComponent("" + rootPageId) + "&";
        if (rootNavigationTag !== undefined && rootNavigationTag !== null)
            url_ += "RootNavigationTag=" + encodeURIComponent("" + rootNavigationTag) + "&";
        if (parameters !== undefined && parameters !== null)
            url_ += "Parameters=" + encodeURIComponent("" + parameters) + "&";
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

    protected processGetById(response: Response): Promise<NavigationTreeViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = NavigationTreeViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("Not found\nor\nThe page is not published.\nor\nThe area is not published.", status, _responseText, _headers);
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
        return Promise.resolve<NavigationTreeViewModel>(null as any);
    }
}

export enum ExpandMode {
    None = "None",
    All = "All",
    Path = "Path",
    PathOnly = "PathOnly",
}

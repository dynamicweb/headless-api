import { ClientBase } from '../Shared/ClientBase';
import { ClientConfiguration } from '../Shared/ClientConfiguration';
import { throwException } from '../Helpers/ExceptionHelper';
import { FileResponse } from '../Shared/FileResponse';

import { MediaViewModelSettings } from './MediaViewModelSettings';
import { FieldValueViewModelSetting } from './FieldValueViewModelSettings';

export class GroupsClient extends ClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : window as any;
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
     */
    getAll(parentId: string | null | undefined, shopId: string | null | undefined, mediaSettings: MediaViewModelSettings | null | undefined, fieldSettings: FieldValueViewModelSetting | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<FileResponse> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/groups?";
        if (parentId !== undefined && parentId !== null)
            url_ += "ParentId=" + encodeURIComponent("" + parentId) + "&";
        if (shopId !== undefined && shopId !== null)
            url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null)
            url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
        if (fieldSettings !== undefined && fieldSettings !== null)
            url_ += "FieldSettings=" + encodeURIComponent("" + fieldSettings) + "&";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (showPricesWithVat === null)
            throw new Error("The parameter 'showPricesWithVat' cannot be null.");
        else if (showPricesWithVat !== undefined)
            url_ += "ShowPricesWithVat=" + encodeURIComponent("" + showPricesWithVat) + "&";
        if (currencyCode !== undefined && currencyCode !== null)
            url_ += "CurrencyCode=" + encodeURIComponent("" + currencyCode) + "&";
        if (countryCode !== undefined && countryCode !== null)
            url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (languageId !== undefined && languageId !== null)
            url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (filledProperties !== undefined && filledProperties !== null)
            filledProperties && filledProperties.forEach(item => { url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<FileResponse> {
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
     */
    getGroup(groupId: string | null, parentId: string | null | undefined, shopId: string | null | undefined, mediaSettings: MediaViewModelSettings | null | undefined, fieldSettings: FieldValueViewModelSetting | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<FileResponse> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/groups/{groupId}?";
        if (groupId === undefined || groupId === null)
            throw new Error("The parameter 'groupId' must be defined.");
        url_ = url_.replace("{groupId}", encodeURIComponent("" + groupId));
        if (parentId !== undefined && parentId !== null)
            url_ += "ParentId=" + encodeURIComponent("" + parentId) + "&";
        if (shopId !== undefined && shopId !== null)
            url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null)
            url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
        if (fieldSettings !== undefined && fieldSettings !== null)
            url_ += "FieldSettings=" + encodeURIComponent("" + fieldSettings) + "&";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (showPricesWithVat === null)
            throw new Error("The parameter 'showPricesWithVat' cannot be null.");
        else if (showPricesWithVat !== undefined)
            url_ += "ShowPricesWithVat=" + encodeURIComponent("" + showPricesWithVat) + "&";
        if (currencyCode !== undefined && currencyCode !== null)
            url_ += "CurrencyCode=" + encodeURIComponent("" + currencyCode) + "&";
        if (countryCode !== undefined && countryCode !== null)
            url_ += "CountryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (languageId !== undefined && languageId !== null)
            url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (filledProperties !== undefined && filledProperties !== null)
            filledProperties && filledProperties.forEach(item => { url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetGroup(_response);
        });
    }

    protected processGetGroup(response: Response): Promise<FileResponse> {
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
}

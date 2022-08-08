import { ClientBase } from '../Shared/ClientBase';
import { throwException } from '../Helpers/ExceptionHelper';
import { FileResponse } from '../Shared/FileResponse';

export class FeedClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, token?: string) {
        super(baseUrl, token);
    }

    verifyConnection(): Promise<boolean> {
        let url_ = this.baseUrl + "/dwapi/feeds/VerifyConnection";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processVerifyConnection(_response);
        });
    }

    protected processVerifyConnection(response: Response): Promise<boolean> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<boolean>(null as any);
    }

    getFeedOutput(id: number, languageId: string | null | undefined, currencyId: string | null | undefined, shopId: string | null | undefined, userId: string | null | undefined, loadVariantInfoOnVariants: boolean | undefined): Promise<FileResponse> {
        let url_ = this.baseUrl + "/dwapi/feeds/GetFeedOutput?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (languageId !== undefined && languageId !== null)
            url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (currencyId !== undefined && currencyId !== null)
            url_ += "CurrencyId=" + encodeURIComponent("" + currencyId) + "&";
        if (shopId !== undefined && shopId !== null)
            url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (userId !== undefined && userId !== null)
            url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (loadVariantInfoOnVariants === null)
            throw new Error("The parameter 'loadVariantInfoOnVariants' cannot be null.");
        else if (loadVariantInfoOnVariants !== undefined)
            url_ += "LoadVariantInfoOnVariants=" + encodeURIComponent("" + loadVariantInfoOnVariants) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processGetFeedOutput(_response);
        });
    }

    protected processGetFeedOutput(response: Response): Promise<FileResponse> {
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

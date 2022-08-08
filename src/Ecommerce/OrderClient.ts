import { ClientBase } from '../Shared/ClientBase';
import { throwException } from '../Helpers/ExceptionHelper';
import { OrderViewModel } from './OrderViewModel';
import { PriceViewModelSettings } from './PriceViewModelSettings';
import { FieldValueViewModelSetting } from './FieldValueViewModelSettings';
import { OrderLineViewModelSettings } from './OrderLineViewModelSettings';

export class OrderClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, token?: string) {
        super(baseUrl, token);
    }

    /**
     * Get current customer orders
     * @param pageSize (optional) 
     * @param pageCount (optional) 
     * @param currentPage (optional) 
     * @param totalOrdersCount (optional) 
     * @param showPricesWithVat (optional) 
     * @param filledProperties (optional) 
     * @return OK
     */
    getOrders(pageSize: number | undefined, pageCount: number | undefined, currentPage: number | undefined, totalOrdersCount: number | undefined, showPricesWithVat: boolean | undefined, filledProperties: string[] | null | undefined): Promise<OrderViewModel> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/orders?";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (pageCount === null)
            throw new Error("The parameter 'pageCount' cannot be null.");
        else if (pageCount !== undefined)
            url_ += "PageCount=" + encodeURIComponent("" + pageCount) + "&";
        if (currentPage === null)
            throw new Error("The parameter 'currentPage' cannot be null.");
        else if (currentPage !== undefined)
            url_ += "CurrentPage=" + encodeURIComponent("" + currentPage) + "&";
        if (totalOrdersCount === null)
            throw new Error("The parameter 'totalOrdersCount' cannot be null.");
        else if (totalOrdersCount !== undefined)
            url_ += "TotalOrdersCount=" + encodeURIComponent("" + totalOrdersCount) + "&";
        if (showPricesWithVat === null)
            throw new Error("The parameter 'showPricesWithVat' cannot be null.");
        else if (showPricesWithVat !== undefined)
            url_ += "ShowPricesWithVat=" + encodeURIComponent("" + showPricesWithVat) + "&";
        if (filledProperties !== undefined && filledProperties !== null)
            filledProperties && filledProperties.forEach(item => { url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processGetOrders(_response);
        });
    }

    protected processGetOrders(response: Response): Promise<OrderViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = OrderViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The current user does not have permissions to access orders.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OrderViewModel>(null as any);
    }

    /**
     * Get an order for the specified secret
     * @param secret Order secret.
     * @param priceSettings (optional) 
     * @param orderFieldSettings (optional) 
     * @param orderLineSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @return OK
     */
    getOrder(secret: string | null, priceSettings: PriceViewModelSettings | null | undefined, orderFieldSettings: FieldValueViewModelSetting | null | undefined, orderLineSettings: OrderLineViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<OrderViewModel> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/orders/{secret}?";
        if (secret === undefined || secret === null)
            throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        if (priceSettings !== undefined && priceSettings !== null)
            url_ += "PriceSettings=" + encodeURIComponent("" + priceSettings) + "&";
        if (orderFieldSettings !== undefined && orderFieldSettings !== null)
            url_ += "OrderFieldSettings=" + encodeURIComponent("" + orderFieldSettings) + "&";
        if (orderLineSettings !== undefined && orderLineSettings !== null)
            url_ += "OrderLineSettings=" + encodeURIComponent("" + orderLineSettings) + "&";
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
        if (shopId !== undefined && shopId !== null)
            url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (languageId !== undefined && languageId !== null)
            url_ += "LanguageId=" + encodeURIComponent("" + languageId) + "&";
        if (filledProperties !== undefined && filledProperties !== null)
            filledProperties && filledProperties.forEach(item => { url_ += "FilledProperties=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processGetOrder(_response);
        });
    }

    protected processGetOrder(response: Response): Promise<OrderViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = OrderViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The order is not found.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OrderViewModel>(null as any);
    }
}

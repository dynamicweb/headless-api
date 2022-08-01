import { ClientBase } from '../Shared/ClientBase';
import { ClientConfiguration } from '../Shared/ClientConfiguration';
import { throwException } from '../Helpers/ExceptionHelper';
import { OrderLineViewModel, OrderViewModel } from "./OrderViewModel";
import { UserCartsResponse } from "./UserCartsResponse";
import { PriceViewModel } from './PriceViewModel';
import { FieldValueViewModel } from './FieldValueViewModel';
import { ShippingViewModel } from './ShippingViewModel';
import { PaymentViewModel } from './PaymentViewModel';

export class CartsClient extends ClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: ClientConfiguration, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : window as any;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
     * Create cart
     * @param currencyCode The currency code to create the order in - i.e. EUR
     * @param countryCode The country code to use for VAT, shipping and payment fees and rules, i.e. DE
     * @param languageId The language to use for product data, i.e. LANG1
     * @param id (optional) 
     * @param parentOrderId (optional) 
     * @param secondaryUserId (optional) 
     * @param secondaryUserName (optional) 
     * @param secret (optional) 
     * @param shopId (optional) 
     * @param displayName (optional) 
     * @param voucherCode (optional) 
     * @param weight (optional) 
     * @param volume (optional) 
     * @param createdAt (optional) 
     * @param modified (optional) 
     * @param completedDate (optional) 
     * @param completed (optional) 
     * @param ledgerType (optional) 
     * @param stateId (optional) 
     * @param stateName (optional) 
     * @param stateDescription (optional) 
     * @param integrationOrderId (optional) 
     * @param recurringOrderId (optional) 
     * @param customerUserId (optional) 
     * @param customerNumber (optional) 
     * @param customerEan (optional) 
     * @param customerRefId (optional) 
     * @param customerCompany (optional) 
     * @param customerTitle (optional) 
     * @param customerName (optional) 
     * @param customerFirstName (optional) 
     * @param customerSurname (optional) 
     * @param customerMiddleName (optional) 
     * @param customerHouseNumber (optional) 
     * @param customerInitials (optional) 
     * @param customerPrefix (optional) 
     * @param customerAddress (optional) 
     * @param customerAddress2 (optional) 
     * @param customerAddressId (optional) 
     * @param customerZip (optional) 
     * @param customerCity (optional) 
     * @param customerCountry (optional) 
     * @param customerCountryCode (optional) 
     * @param customerRegion (optional) 
     * @param customerPhone (optional) 
     * @param customerEmail (optional) 
     * @param customerCell (optional) 
     * @param customerAccepted (optional) 
     * @param customerComment (optional) 
     * @param deliveryCompany (optional) 
     * @param deliveryName (optional) 
     * @param deliveryFirstName (optional) 
     * @param deliverySurname (optional) 
     * @param deliveryMiddleName (optional) 
     * @param deliveryTitle (optional) 
     * @param deliveryHouseNumber (optional) 
     * @param deliveryInitials (optional) 
     * @param deliveryPrefix (optional) 
     * @param deliveryAddress (optional) 
     * @param deliveryAddress2 (optional) 
     * @param deliveryAddressId (optional) 
     * @param deliveryZip (optional) 
     * @param deliveryCity (optional) 
     * @param deliveryCountry (optional) 
     * @param deliveryCountryCode (optional) 
     * @param deliveryRegion (optional) 
     * @param deliveryPhone (optional) 
     * @param deliveryEmail (optional) 
     * @param deliveryCell (optional) 
     * @param reference (optional) 
     * @param newsletterSubscribe (optional) 
     * @param transactionCardnumber (optional) 
     * @param transactionCardType (optional) 
     * @param transactionNumber (optional) 
     * @param transactionStatus (optional) 
     * @param shippingDate (optional) 
     * @param trackAndTraceName (optional) 
     * @param trackAndTraceURL (optional) 
     * @param trackAndTraceNumber (optional) 
     * @param orderLines (optional) 
     * @param orderFields (optional) 
     * @param totalDiscount (optional) 
     * @param totalProductDiscount (optional) 
     * @param totalOrderDiscount (optional) 
     * @param price (optional) 
     * @param priceBeforeFees (optional) 
     * @param totalPriceBeforeFeesAndTaxes (optional) 
     * @param totalTaxes (optional) 
     * @param shippingFee (optional) 
     * @param shippingMethod (optional) 
     * @param paymentMethod (optional) 
     * @param paymentFee (optional) 
     * @return Created cart view model
     */
    createCart(currencyCode: string | null, countryCode: string | null, languageId: string | null, id: string | null | undefined, parentOrderId: string | null | undefined, secondaryUserId: number | undefined, secondaryUserName: string | null | undefined, secret: string | null | undefined, shopId: string | null | undefined, displayName: string | null | undefined, voucherCode: string | null | undefined, weight: number | undefined, volume: number | undefined, createdAt: Date | undefined, modified: Date | undefined, completedDate: Date | null | undefined, completed: boolean | null | undefined, ledgerType: string | null | undefined, stateId: string | null | undefined, stateName: string | null | undefined, stateDescription: string | null | undefined, integrationOrderId: string | null | undefined, recurringOrderId: number | null | undefined, customerUserId: number | undefined, customerNumber: string | null | undefined, customerEan: string | null | undefined, customerRefId: string | null | undefined, customerCompany: string | null | undefined, customerTitle: string | null | undefined, customerName: string | null | undefined, customerFirstName: string | null | undefined, customerSurname: string | null | undefined, customerMiddleName: string | null | undefined, customerHouseNumber: string | null | undefined, customerInitials: string | null | undefined, customerPrefix: string | null | undefined, customerAddress: string | null | undefined, customerAddress2: string | null | undefined, customerAddressId: number | undefined, customerZip: string | null | undefined, customerCity: string | null | undefined, customerCountry: string | null | undefined, customerCountryCode: string | null | undefined, customerRegion: string | null | undefined, customerPhone: string | null | undefined, customerEmail: string | null | undefined, customerCell: string | null | undefined, customerAccepted: boolean | null | undefined, customerComment: string | null | undefined, deliveryCompany: string | null | undefined, deliveryName: string | null | undefined, deliveryFirstName: string | null | undefined, deliverySurname: string | null | undefined, deliveryMiddleName: string | null | undefined, deliveryTitle: string | null | undefined, deliveryHouseNumber: string | null | undefined, deliveryInitials: string | null | undefined, deliveryPrefix: string | null | undefined, deliveryAddress: string | null | undefined, deliveryAddress2: string | null | undefined, deliveryAddressId: number | undefined, deliveryZip: string | null | undefined, deliveryCity: string | null | undefined, deliveryCountry: string | null | undefined, deliveryCountryCode: string | null | undefined, deliveryRegion: string | null | undefined, deliveryPhone: string | null | undefined, deliveryEmail: string | null | undefined, deliveryCell: string | null | undefined, reference: string | null | undefined, newsletterSubscribe: boolean | undefined, transactionCardnumber: string | null | undefined, transactionCardType: string | null | undefined, transactionNumber: string | null | undefined, transactionStatus: string | null | undefined, shippingDate: Date | null | undefined, trackAndTraceName: string | null | undefined, trackAndTraceURL: string | null | undefined, trackAndTraceNumber: string | null | undefined, orderLines: OrderLineViewModel[] | null | undefined, orderFields: { [key: string]: FieldValueViewModel; } | null | undefined, totalDiscount: PriceViewModel | null | undefined, totalProductDiscount: PriceViewModel | null | undefined, totalOrderDiscount: PriceViewModel | null | undefined, price: PriceViewModel | null | undefined, priceBeforeFees: PriceViewModel | null | undefined, totalPriceBeforeFeesAndTaxes: PriceViewModel | null | undefined, totalTaxes: PriceViewModel | null | undefined, shippingFee: PriceViewModel | null | undefined, shippingMethod: ShippingViewModel | null | undefined, paymentMethod: PaymentViewModel | null | undefined, paymentFee: PriceViewModel | null | undefined): Promise<OrderViewModel> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts?";
        if (currencyCode === undefined)
            throw new Error("The parameter 'currencyCode' must be defined.");
        else if(currencyCode !== null)
            url_ += "currencyCode=" + encodeURIComponent("" + currencyCode) + "&";
        if (countryCode === undefined)
            throw new Error("The parameter 'countryCode' must be defined.");
        else if(countryCode !== null)
            url_ += "countryCode=" + encodeURIComponent("" + countryCode) + "&";
        if (languageId === undefined)
            throw new Error("The parameter 'languageId' must be defined.");
        else if(languageId !== null)
            url_ += "languageId=" + encodeURIComponent("" + languageId) + "&";
        if (id !== undefined && id !== null)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        if (parentOrderId !== undefined && parentOrderId !== null)
            url_ += "ParentOrderId=" + encodeURIComponent("" + parentOrderId) + "&";
        if (secondaryUserId === null)
            throw new Error("The parameter 'secondaryUserId' cannot be null.");
        else if (secondaryUserId !== undefined)
            url_ += "SecondaryUserId=" + encodeURIComponent("" + secondaryUserId) + "&";
        if (secondaryUserName !== undefined && secondaryUserName !== null)
            url_ += "SecondaryUserName=" + encodeURIComponent("" + secondaryUserName) + "&";
        if (secret !== undefined && secret !== null)
            url_ += "Secret=" + encodeURIComponent("" + secret) + "&";
        if (shopId !== undefined && shopId !== null)
            url_ += "ShopId=" + encodeURIComponent("" + shopId) + "&";
        if (displayName !== undefined && displayName !== null)
            url_ += "DisplayName=" + encodeURIComponent("" + displayName) + "&";
        if (voucherCode !== undefined && voucherCode !== null)
            url_ += "VoucherCode=" + encodeURIComponent("" + voucherCode) + "&";
        if (weight === null)
            throw new Error("The parameter 'weight' cannot be null.");
        else if (weight !== undefined)
            url_ += "Weight=" + encodeURIComponent("" + weight) + "&";
        if (volume === null)
            throw new Error("The parameter 'volume' cannot be null.");
        else if (volume !== undefined)
            url_ += "Volume=" + encodeURIComponent("" + volume) + "&";
        if (createdAt === null)
            throw new Error("The parameter 'createdAt' cannot be null.");
        else if (createdAt !== undefined)
            url_ += "CreatedAt=" + encodeURIComponent(createdAt ? "" + createdAt.toISOString() : "") + "&";
        if (modified === null)
            throw new Error("The parameter 'modified' cannot be null.");
        else if (modified !== undefined)
            url_ += "Modified=" + encodeURIComponent(modified ? "" + modified.toISOString() : "") + "&";
        if (completedDate !== undefined && completedDate !== null)
            url_ += "CompletedDate=" + encodeURIComponent(completedDate ? "" + completedDate.toISOString() : "") + "&";
        if (completed !== undefined && completed !== null)
            url_ += "Completed=" + encodeURIComponent("" + completed) + "&";
        if (ledgerType !== undefined && ledgerType !== null)
            url_ += "LedgerType=" + encodeURIComponent("" + ledgerType) + "&";
        if (stateId !== undefined && stateId !== null)
            url_ += "StateId=" + encodeURIComponent("" + stateId) + "&";
        if (stateName !== undefined && stateName !== null)
            url_ += "StateName=" + encodeURIComponent("" + stateName) + "&";
        if (stateDescription !== undefined && stateDescription !== null)
            url_ += "StateDescription=" + encodeURIComponent("" + stateDescription) + "&";
        if (integrationOrderId !== undefined && integrationOrderId !== null)
            url_ += "IntegrationOrderId=" + encodeURIComponent("" + integrationOrderId) + "&";
        if (recurringOrderId !== undefined && recurringOrderId !== null)
            url_ += "RecurringOrderId=" + encodeURIComponent("" + recurringOrderId) + "&";
        if (customerUserId === null)
            throw new Error("The parameter 'customerUserId' cannot be null.");
        else if (customerUserId !== undefined)
            url_ += "CustomerUserId=" + encodeURIComponent("" + customerUserId) + "&";
        if (customerNumber !== undefined && customerNumber !== null)
            url_ += "CustomerNumber=" + encodeURIComponent("" + customerNumber) + "&";
        if (customerEan !== undefined && customerEan !== null)
            url_ += "CustomerEan=" + encodeURIComponent("" + customerEan) + "&";
        if (customerRefId !== undefined && customerRefId !== null)
            url_ += "CustomerRefId=" + encodeURIComponent("" + customerRefId) + "&";
        if (customerCompany !== undefined && customerCompany !== null)
            url_ += "CustomerCompany=" + encodeURIComponent("" + customerCompany) + "&";
        if (customerTitle !== undefined && customerTitle !== null)
            url_ += "CustomerTitle=" + encodeURIComponent("" + customerTitle) + "&";
        if (customerName !== undefined && customerName !== null)
            url_ += "CustomerName=" + encodeURIComponent("" + customerName) + "&";
        if (customerFirstName !== undefined && customerFirstName !== null)
            url_ += "CustomerFirstName=" + encodeURIComponent("" + customerFirstName) + "&";
        if (customerSurname !== undefined && customerSurname !== null)
            url_ += "CustomerSurname=" + encodeURIComponent("" + customerSurname) + "&";
        if (customerMiddleName !== undefined && customerMiddleName !== null)
            url_ += "CustomerMiddleName=" + encodeURIComponent("" + customerMiddleName) + "&";
        if (customerHouseNumber !== undefined && customerHouseNumber !== null)
            url_ += "CustomerHouseNumber=" + encodeURIComponent("" + customerHouseNumber) + "&";
        if (customerInitials !== undefined && customerInitials !== null)
            url_ += "CustomerInitials=" + encodeURIComponent("" + customerInitials) + "&";
        if (customerPrefix !== undefined && customerPrefix !== null)
            url_ += "CustomerPrefix=" + encodeURIComponent("" + customerPrefix) + "&";
        if (customerAddress !== undefined && customerAddress !== null)
            url_ += "CustomerAddress=" + encodeURIComponent("" + customerAddress) + "&";
        if (customerAddress2 !== undefined && customerAddress2 !== null)
            url_ += "CustomerAddress2=" + encodeURIComponent("" + customerAddress2) + "&";
        if (customerAddressId === null)
            throw new Error("The parameter 'customerAddressId' cannot be null.");
        else if (customerAddressId !== undefined)
            url_ += "CustomerAddressId=" + encodeURIComponent("" + customerAddressId) + "&";
        if (customerZip !== undefined && customerZip !== null)
            url_ += "CustomerZip=" + encodeURIComponent("" + customerZip) + "&";
        if (customerCity !== undefined && customerCity !== null)
            url_ += "CustomerCity=" + encodeURIComponent("" + customerCity) + "&";
        if (customerCountry !== undefined && customerCountry !== null)
            url_ += "CustomerCountry=" + encodeURIComponent("" + customerCountry) + "&";
        if (customerCountryCode !== undefined && customerCountryCode !== null)
            url_ += "CustomerCountryCode=" + encodeURIComponent("" + customerCountryCode) + "&";
        if (customerRegion !== undefined && customerRegion !== null)
            url_ += "CustomerRegion=" + encodeURIComponent("" + customerRegion) + "&";
        if (customerPhone !== undefined && customerPhone !== null)
            url_ += "CustomerPhone=" + encodeURIComponent("" + customerPhone) + "&";
        if (customerEmail !== undefined && customerEmail !== null)
            url_ += "CustomerEmail=" + encodeURIComponent("" + customerEmail) + "&";
        if (customerCell !== undefined && customerCell !== null)
            url_ += "CustomerCell=" + encodeURIComponent("" + customerCell) + "&";
        if (customerAccepted !== undefined && customerAccepted !== null)
            url_ += "CustomerAccepted=" + encodeURIComponent("" + customerAccepted) + "&";
        if (customerComment !== undefined && customerComment !== null)
            url_ += "CustomerComment=" + encodeURIComponent("" + customerComment) + "&";
        if (deliveryCompany !== undefined && deliveryCompany !== null)
            url_ += "DeliveryCompany=" + encodeURIComponent("" + deliveryCompany) + "&";
        if (deliveryName !== undefined && deliveryName !== null)
            url_ += "DeliveryName=" + encodeURIComponent("" + deliveryName) + "&";
        if (deliveryFirstName !== undefined && deliveryFirstName !== null)
            url_ += "DeliveryFirstName=" + encodeURIComponent("" + deliveryFirstName) + "&";
        if (deliverySurname !== undefined && deliverySurname !== null)
            url_ += "DeliverySurname=" + encodeURIComponent("" + deliverySurname) + "&";
        if (deliveryMiddleName !== undefined && deliveryMiddleName !== null)
            url_ += "DeliveryMiddleName=" + encodeURIComponent("" + deliveryMiddleName) + "&";
        if (deliveryTitle !== undefined && deliveryTitle !== null)
            url_ += "DeliveryTitle=" + encodeURIComponent("" + deliveryTitle) + "&";
        if (deliveryHouseNumber !== undefined && deliveryHouseNumber !== null)
            url_ += "DeliveryHouseNumber=" + encodeURIComponent("" + deliveryHouseNumber) + "&";
        if (deliveryInitials !== undefined && deliveryInitials !== null)
            url_ += "DeliveryInitials=" + encodeURIComponent("" + deliveryInitials) + "&";
        if (deliveryPrefix !== undefined && deliveryPrefix !== null)
            url_ += "DeliveryPrefix=" + encodeURIComponent("" + deliveryPrefix) + "&";
        if (deliveryAddress !== undefined && deliveryAddress !== null)
            url_ += "DeliveryAddress=" + encodeURIComponent("" + deliveryAddress) + "&";
        if (deliveryAddress2 !== undefined && deliveryAddress2 !== null)
            url_ += "DeliveryAddress2=" + encodeURIComponent("" + deliveryAddress2) + "&";
        if (deliveryAddressId === null)
            throw new Error("The parameter 'deliveryAddressId' cannot be null.");
        else if (deliveryAddressId !== undefined)
            url_ += "DeliveryAddressId=" + encodeURIComponent("" + deliveryAddressId) + "&";
        if (deliveryZip !== undefined && deliveryZip !== null)
            url_ += "DeliveryZip=" + encodeURIComponent("" + deliveryZip) + "&";
        if (deliveryCity !== undefined && deliveryCity !== null)
            url_ += "DeliveryCity=" + encodeURIComponent("" + deliveryCity) + "&";
        if (deliveryCountry !== undefined && deliveryCountry !== null)
            url_ += "DeliveryCountry=" + encodeURIComponent("" + deliveryCountry) + "&";
        if (deliveryCountryCode !== undefined && deliveryCountryCode !== null)
            url_ += "DeliveryCountryCode=" + encodeURIComponent("" + deliveryCountryCode) + "&";
        if (deliveryRegion !== undefined && deliveryRegion !== null)
            url_ += "DeliveryRegion=" + encodeURIComponent("" + deliveryRegion) + "&";
        if (deliveryPhone !== undefined && deliveryPhone !== null)
            url_ += "DeliveryPhone=" + encodeURIComponent("" + deliveryPhone) + "&";
        if (deliveryEmail !== undefined && deliveryEmail !== null)
            url_ += "DeliveryEmail=" + encodeURIComponent("" + deliveryEmail) + "&";
        if (deliveryCell !== undefined && deliveryCell !== null)
            url_ += "DeliveryCell=" + encodeURIComponent("" + deliveryCell) + "&";
        if (reference !== undefined && reference !== null)
            url_ += "Reference=" + encodeURIComponent("" + reference) + "&";
        if (newsletterSubscribe === null)
            throw new Error("The parameter 'newsletterSubscribe' cannot be null.");
        else if (newsletterSubscribe !== undefined)
            url_ += "NewsletterSubscribe=" + encodeURIComponent("" + newsletterSubscribe) + "&";
        if (transactionCardnumber !== undefined && transactionCardnumber !== null)
            url_ += "TransactionCardnumber=" + encodeURIComponent("" + transactionCardnumber) + "&";
        if (transactionCardType !== undefined && transactionCardType !== null)
            url_ += "TransactionCardType=" + encodeURIComponent("" + transactionCardType) + "&";
        if (transactionNumber !== undefined && transactionNumber !== null)
            url_ += "TransactionNumber=" + encodeURIComponent("" + transactionNumber) + "&";
        if (transactionStatus !== undefined && transactionStatus !== null)
            url_ += "TransactionStatus=" + encodeURIComponent("" + transactionStatus) + "&";
        if (shippingDate !== undefined && shippingDate !== null)
            url_ += "ShippingDate=" + encodeURIComponent(shippingDate ? "" + shippingDate.toISOString() : "") + "&";
        if (trackAndTraceName !== undefined && trackAndTraceName !== null)
            url_ += "TrackAndTraceName=" + encodeURIComponent("" + trackAndTraceName) + "&";
        if (trackAndTraceURL !== undefined && trackAndTraceURL !== null)
            url_ += "TrackAndTraceURL=" + encodeURIComponent("" + trackAndTraceURL) + "&";
        if (trackAndTraceNumber !== undefined && trackAndTraceNumber !== null)
            url_ += "TrackAndTraceNumber=" + encodeURIComponent("" + trackAndTraceNumber) + "&";
        if (orderLines !== undefined && orderLines !== null)
            orderLines && orderLines.forEach(item => { url_ += "OrderLines=" + encodeURIComponent("" + item) + "&"; });
        if (orderFields !== undefined && orderFields !== null)
            url_ += "OrderFields=" + encodeURIComponent("" + orderFields) + "&";
        if (totalDiscount !== undefined && totalDiscount !== null)
            url_ += "TotalDiscount=" + encodeURIComponent("" + totalDiscount) + "&";
        if (totalProductDiscount !== undefined && totalProductDiscount !== null)
            url_ += "TotalProductDiscount=" + encodeURIComponent("" + totalProductDiscount) + "&";
        if (totalOrderDiscount !== undefined && totalOrderDiscount !== null)
            url_ += "TotalOrderDiscount=" + encodeURIComponent("" + totalOrderDiscount) + "&";
        if (price !== undefined && price !== null)
            url_ += "Price=" + encodeURIComponent("" + price) + "&";
        if (priceBeforeFees !== undefined && priceBeforeFees !== null)
            url_ += "PriceBeforeFees=" + encodeURIComponent("" + priceBeforeFees) + "&";
        if (totalPriceBeforeFeesAndTaxes !== undefined && totalPriceBeforeFeesAndTaxes !== null)
            url_ += "TotalPriceBeforeFeesAndTaxes=" + encodeURIComponent("" + totalPriceBeforeFeesAndTaxes) + "&";
        if (totalTaxes !== undefined && totalTaxes !== null)
            url_ += "TotalTaxes=" + encodeURIComponent("" + totalTaxes) + "&";
        if (shippingFee !== undefined && shippingFee !== null)
            url_ += "ShippingFee=" + encodeURIComponent("" + shippingFee) + "&";
        if (shippingMethod !== undefined && shippingMethod !== null)
            url_ += "ShippingMethod=" + encodeURIComponent("" + shippingMethod) + "&";
        if (paymentMethod !== undefined && paymentMethod !== null)
            url_ += "PaymentMethod=" + encodeURIComponent("" + paymentMethod) + "&";
        if (paymentFee !== undefined && paymentFee !== null)
            url_ += "PaymentFee=" + encodeURIComponent("" + paymentFee) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "POST",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCreateCart(_response);
        });
    }

    protected processCreateCart(response: Response): Promise<OrderViewModel> {
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
            return throwException("The currency is not found.\nor\nThe country is not found.\nor\nThe language is not found.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The current user does not have permissions to create a cart.\nor\nThe current user does not have permissions to create a cart to specified user.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OrderViewModel>(null as any);
    }

    /**
     * Gets a list of cart secrets for the athenticated user
     * @param pageSize (optional) Max number of secrets to return. Default is 50
     * @param currentPage (optional) The page number. Default is 1
     * @return OK
     */
    getCarts(pageSize: number | undefined, currentPage: number | undefined): Promise<UserCartsResponse[]> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts?";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (currentPage === null)
            throw new Error("The parameter 'currentPage' cannot be null.");
        else if (currentPage !== undefined)
            url_ += "CurrentPage=" + encodeURIComponent("" + currentPage) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetCarts(_response);
        });
    }

    protected processGetCarts(response: Response): Promise<UserCartsResponse[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UserCartsResponse.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("No carts found for the user", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserCartsResponse[]>(null as any);
    }

    /**
     * Get a cart for the specified secret
     * @param secret Cart secret.
     * @return OK
     */
    getCart(secret: string | null): Promise<OrderViewModel> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}";
        if (secret === undefined || secret === null)
            throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetCart(_response);
        });
    }

    protected processGetCart(response: Response): Promise<OrderViewModel> {
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
            return throwException("The cart is not found.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OrderViewModel>(null as any);
    }

    /**
     * Update specified cart
     * @param secret Cart secret.
     * @param cartModel Parameters for the cart, see OrderViewModel
     * @return OK
     */
    updateCart(secret: string | null, cartModel: OrderViewModel | null): Promise<OrderViewModel> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}";
        if (secret === undefined || secret === null)
            throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(cartModel);

        let options_: RequestInit = {
            body: content_,
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdateCart(_response);
        });
    }

    protected processUpdateCart(response: Response): Promise<OrderViewModel> {
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
            return throwException("The cart is not found.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OrderViewModel>(null as any);
    }

    /**
     * Delete a cart with the specified secret
     * @param secret Cart secret.
     * @return OK
     */
    deleteCart(secret: string | null): Promise<void> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}";
        if (secret === undefined || secret === null)
            throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "DELETE",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDeleteCart(_response);
        });
    }

    protected processDeleteCart(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The cart is not found.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }

    /**
     * Update shipping for the specified cart
     * @param secret Cart secret.
     * @param shippingId The new shipping method id
     * @return OK
     */
    updateShipping(secret: string | null, shippingId: string | null): Promise<OrderViewModel> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}/shipping/{shippingId}";
        if (secret === undefined || secret === null)
            throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        if (shippingId === undefined || shippingId === null)
            throw new Error("The parameter 'shippingId' must be defined.");
        url_ = url_.replace("{shippingId}", encodeURIComponent("" + shippingId));
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "PATCH",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdateShipping(_response);
        });
    }

    protected processUpdateShipping(response: Response): Promise<OrderViewModel> {
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
            return throwException("The cart is not found.\nor\nShipping with the specified id not found.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OrderViewModel>(null as any);
    }

    /**
     * Update payment for the specified cart
     * @param secret Cart secret.
     * @param paymentId The new payment method id
     * @return OK
     */
    updatePayment(secret: string | null, paymentId: string | null): Promise<OrderViewModel> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}/payment/{paymentId}";
        if (secret === undefined || secret === null)
            throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        if (paymentId === undefined || paymentId === null)
            throw new Error("The parameter 'paymentId' must be defined.");
        url_ = url_.replace("{paymentId}", encodeURIComponent("" + paymentId));
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "PATCH",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdatePayment(_response);
        });
    }

    protected processUpdatePayment(response: Response): Promise<OrderViewModel> {
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
            return throwException("The cart is not found.\nor\nPayment with the specified id not found.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OrderViewModel>(null as any);
    }

    /**
     * Add the specified line to the cart
     * @param secret Cart secret.
     * @param cartItem Cart item.
     * @return OK
     */
    addLineToCart(secret: string | null, cartItem: OrderLineViewModel | null): Promise<void> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}/items";
        if (secret === undefined || secret === null)
            throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(cartItem);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAddLineToCart(_response);
        });
    }

    protected processAddLineToCart(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The cart is not found.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The cart is completed.\nor\nThe product does not exist.\nor\nThe current user does not have permissions to access this cart.\nor\nThe current user does not have permissions to add this product (probably because of assortments).", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }

    /**
     * Empty a cart with the specified secret
     * @param secret Cart secret.
     * @return OK
     */
    emptyCart(secret: string | null): Promise<void> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}/items";
        if (secret === undefined || secret === null)
            throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "DELETE",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processEmptyCart(_response);
        });
    }

    protected processEmptyCart(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The cart is not found.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }

    /**
     * Remove a specified cart item
     * @param secret Cart secret.
     * @param itemId The cart item id.
     * @return OK
     */
    removeLineFromCart(secret: string | null, itemId: string | null): Promise<void> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}/items/{itemId}";
        if (secret === undefined || secret === null)
            throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        if (itemId === undefined || itemId === null)
            throw new Error("The parameter 'itemId' must be defined.");
        url_ = url_.replace("{itemId}", encodeURIComponent("" + itemId));
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "DELETE",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processRemoveLineFromCart(_response);
        });
    }

    protected processRemoveLineFromCart(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The cart is not found.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }

    /**
     * Update a cart item
     * @param secret Cart secret.
     * @param itemId The cart item id.
     * @param cartItem Cart item.
     * @return OK
     */
    updateCartLine(secret: string | null, itemId: string | null, cartItem: OrderLineViewModel | null): Promise<void> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}/items/{itemId}";
        if (secret === undefined || secret === null)
            throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        if (itemId === undefined || itemId === null)
            throw new Error("The parameter 'itemId' must be defined.");
        url_ = url_.replace("{itemId}", encodeURIComponent("" + itemId));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(cartItem);

        let options_: RequestInit = {
            body: content_,
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdateCartLine(_response);
        });
    }

    protected processUpdateCartLine(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The cart is not found.\nor\nThe cart line is not found.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }

    /**
     * Convert a cart into an order
     * @return OK
     */
    createOrder(secret: string | null, cartModel: OrderViewModel | null): Promise<void> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/carts/{secret}/createorder";
        if (secret === undefined || secret === null)
            throw new Error("The parameter 'secret' must be defined.");
        url_ = url_.replace("{secret}", encodeURIComponent("" + secret));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(cartModel);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCreateOrder(_response);
        });
    }

    protected processCreateOrder(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The cart is not found.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The cart is completed.\nor\nThe current user does not have permissions to access this cart.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }
}

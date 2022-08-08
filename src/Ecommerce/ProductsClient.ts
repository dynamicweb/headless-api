import { ClientBase } from '../Shared/ClientBase';
import { throwException } from '../Helpers/ExceptionHelper';
import { ExportFormat } from '../Shared/ExportFormat';
import { ProductViewModel } from './ProductViewModel';
import { ProductListViewModel } from './ProductListViewModel';
import { PriceViewModelSettings } from './PriceViewModelSettings';
import { MediaViewModelSettings } from './MediaViewModelSettings';
import { ManufacturerViewModelSettings } from './ManufacturerViewModelSettings';
import { CategoryFieldViewModelSetting } from './CategoryFieldViewModelSettings';
import { FieldValueViewModelSetting } from './FieldValueViewModelSettings';
import { VariantInfoViewModelSettings } from './VariantInfoViewModelSettings';
import { GroupInfoViewModelSettings } from './GroupInfoViewModelSettings';
import { AssetCategoryViewModelSettings } from './AssetCategoryViewModelSettings';
import { StockUnitViewModelSettings } from './StockUnitViewModelSettings';
import { UnitOptionViewModelSettings } from './UnitOptionViewModelSettings';
import { ProductListViewModelSettings } from './ProductListViewModelSettings';
import { ProductViewModelSettings } from './ProductViewModelSettings';
import { ProductGroupViewModelSettings } from './ProductGroupViewModelSettings';
import { FacetGroupViewModelSettings } from '../Shared/FacetGroupViewModelSettings';

export class ProductsClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, token?: string) {
        super(baseUrl, token);
    }

    /**
     * Gets products filtered by query parameters
     * @param repositoryName (optional) Parameter that is used with the query name to do a search
     * @param queryName (optional) Parameter that is used with the repository name to do a search
     * @param groupId (optional) Parameter that can be used for getting all products in a specific group
     * @param productIds (optional) Parameter that can be used for getting all products with the specified ids
     * @param sortBy (optional) Sets the field to sort by, i.e. ProductPrice
     * @param sortOrder (optional) Sets the sort direction. ASC (default) or DESC
     * @param request Parameters for the product list, see ProductListViewModelSettings
     * @return Products matching the parameters
     */
    getAll(repositoryName: string | null | undefined, queryName: string | null | undefined, groupId: string | null | undefined, productIds: string[] | null | undefined, sortBy: string | null | undefined, sortOrder: string | null | undefined, request: ProductListViewModelSettings | null): Promise<ProductListViewModel> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/products?";
        if (repositoryName !== undefined && repositoryName !== null)
            url_ += "RepositoryName=" + encodeURIComponent("" + repositoryName) + "&";
        if (queryName !== undefined && queryName !== null)
            url_ += "QueryName=" + encodeURIComponent("" + queryName) + "&";
        if (groupId !== undefined && groupId !== null)
            url_ += "GroupId=" + encodeURIComponent("" + groupId) + "&";
        if (productIds !== undefined && productIds !== null)
            productIds && productIds.forEach(item => { url_ += "ProductIds=" + encodeURIComponent("" + item) + "&"; });
        if (sortBy !== undefined && sortBy !== null)
            url_ += "SortBy=" + encodeURIComponent("" + sortBy) + "&";
        if (sortOrder !== undefined && sortOrder !== null)
            url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<ProductListViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductListViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("No matching products found", status, _responseText, _headers);
            });
        } else if (status === 204) {
            return response.text().then((_responseText) => {
            return throwException("No products match the parameters", status, _responseText, _headers);
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("Invalid parameters. Specify Repository and Queryname or specify a group id", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductListViewModel>(null as any);
    }

    /**
     * Gets products filtered by query parameters
     * @param repositoryName (optional) Parameter that is used with the query name to do a search
     * @param queryName (optional) Parameter that is used with the repository name to do a search
     * @param groupId (optional) Parameter that can be used for getting all products in a specific group
     * @param productIds (optional) Parameter that can be used for getting all products with the specified ids
     * @param sortBy (optional) Sets the field to sort by, i.e. ProductPrice
     * @param sortOrder (optional) Sets the sort direction. ASC (default) or DESC
     * @param productSettings (optional) 
     * @param groupSettings (optional) 
     * @param facetGroupSettings (optional) 
     * @param parameters (optional) 
     * @param pageSize (optional) 
     * @param currentPage (optional) 
     * @param mediaSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @return Products matching the parameters
     */
    search(repositoryName: string | null | undefined, queryName: string | null | undefined, groupId: string | null | undefined, productIds: string[] | null | undefined, sortBy: string | null | undefined, sortOrder: string | null | undefined, productSettings: ProductViewModelSettings | null | undefined, groupSettings: ProductGroupViewModelSettings | null | undefined, facetGroupSettings: FacetGroupViewModelSettings | null | undefined, parameters: { [key: string]: string; } | null | undefined, pageSize: number | undefined, currentPage: number | undefined, mediaSettings: MediaViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<ProductListViewModel> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/products/search?";
        if (repositoryName !== undefined && repositoryName !== null)
            url_ += "RepositoryName=" + encodeURIComponent("" + repositoryName) + "&";
        if (queryName !== undefined && queryName !== null)
            url_ += "QueryName=" + encodeURIComponent("" + queryName) + "&";
        if (groupId !== undefined && groupId !== null)
            url_ += "GroupId=" + encodeURIComponent("" + groupId) + "&";
        if (productIds !== undefined && productIds !== null)
            productIds && productIds.forEach(item => { url_ += "ProductIds=" + encodeURIComponent("" + item) + "&"; });
        if (sortBy !== undefined && sortBy !== null)
            url_ += "SortBy=" + encodeURIComponent("" + sortBy) + "&";
        if (sortOrder !== undefined && sortOrder !== null)
            url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
        if (productSettings !== undefined && productSettings !== null)
            url_ += "ProductSettings=" + encodeURIComponent("" + productSettings) + "&";
        if (groupSettings !== undefined && groupSettings !== null)
            url_ += "GroupSettings=" + encodeURIComponent("" + groupSettings) + "&";
        if (facetGroupSettings !== undefined && facetGroupSettings !== null)
            url_ += "FacetGroupSettings=" + encodeURIComponent("" + facetGroupSettings) + "&";
        if (parameters !== undefined && parameters !== null)
            url_ += "Parameters=" + encodeURIComponent("" + parameters) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (currentPage === null)
            throw new Error("The parameter 'currentPage' cannot be null.");
        else if (currentPage !== undefined)
            url_ += "CurrentPage=" + encodeURIComponent("" + currentPage) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null)
            url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
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
            return this.processSearch(_response);
        });
    }

    protected processSearch(response: Response): Promise<ProductListViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductListViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("No matching products found", status, _responseText, _headers);
            });
        } else if (status === 204) {
            return response.text().then((_responseText) => {
            return throwException("No products match the parameters", status, _responseText, _headers);
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("Invalid parameters. Specify Repository and Queryname or specify a group id", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductListViewModel>(null as any);
    }

    /**
     * Gets a product by it's id.
     * @param id ProductId for the product to get
     * @param loadVariantInfoOnVariants (optional) 
     * @param priceSettings (optional) 
     * @param mediaSettings (optional) 
     * @param manufacturerSettings (optional) 
     * @param categoryFieldSettings (optional) 
     * @param productFieldSettings (optional) 
     * @param variantInfoSettings (optional) 
     * @param groupInfoSettings (optional) 
     * @param assetCategorySettings (optional) 
     * @param stockUnitSettings (optional) 
     * @param unitOptionSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @return Product matching the id
     */
    getProduct(id: string | null, loadVariantInfoOnVariants: boolean | undefined, priceSettings: PriceViewModelSettings | null | undefined, mediaSettings: MediaViewModelSettings | null | undefined, manufacturerSettings: ManufacturerViewModelSettings | null | undefined, categoryFieldSettings: CategoryFieldViewModelSetting | null | undefined, productFieldSettings: FieldValueViewModelSetting | null | undefined, variantInfoSettings: VariantInfoViewModelSettings | null | undefined, groupInfoSettings: GroupInfoViewModelSettings | null | undefined, assetCategorySettings: AssetCategoryViewModelSettings | null | undefined, stockUnitSettings: StockUnitViewModelSettings | null | undefined, unitOptionSettings: UnitOptionViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<ProductViewModel> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/products/{id}?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (loadVariantInfoOnVariants === null)
            throw new Error("The parameter 'loadVariantInfoOnVariants' cannot be null.");
        else if (loadVariantInfoOnVariants !== undefined)
            url_ += "LoadVariantInfoOnVariants=" + encodeURIComponent("" + loadVariantInfoOnVariants) + "&";
        if (priceSettings !== undefined && priceSettings !== null)
            url_ += "PriceSettings=" + encodeURIComponent("" + priceSettings) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null)
            url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
        if (manufacturerSettings !== undefined && manufacturerSettings !== null)
            url_ += "ManufacturerSettings=" + encodeURIComponent("" + manufacturerSettings) + "&";
        if (categoryFieldSettings !== undefined && categoryFieldSettings !== null)
            url_ += "CategoryFieldSettings=" + encodeURIComponent("" + categoryFieldSettings) + "&";
        if (productFieldSettings !== undefined && productFieldSettings !== null)
            url_ += "ProductFieldSettings=" + encodeURIComponent("" + productFieldSettings) + "&";
        if (variantInfoSettings !== undefined && variantInfoSettings !== null)
            url_ += "VariantInfoSettings=" + encodeURIComponent("" + variantInfoSettings) + "&";
        if (groupInfoSettings !== undefined && groupInfoSettings !== null)
            url_ += "GroupInfoSettings=" + encodeURIComponent("" + groupInfoSettings) + "&";
        if (assetCategorySettings !== undefined && assetCategorySettings !== null)
            url_ += "AssetCategorySettings=" + encodeURIComponent("" + assetCategorySettings) + "&";
        if (stockUnitSettings !== undefined && stockUnitSettings !== null)
            url_ += "StockUnitSettings=" + encodeURIComponent("" + stockUnitSettings) + "&";
        if (unitOptionSettings !== undefined && unitOptionSettings !== null)
            url_ += "UnitOptionSettings=" + encodeURIComponent("" + unitOptionSettings) + "&";
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
            return this.processGetProduct(_response);
        });
    }

    protected processGetProduct(response: Response): Promise<ProductViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("No matching product found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductViewModel>(null as any);
    }

    /**
     * Gets a product by it's id and variantid.
     * @param id ProductId for the product to get
     * @param variantId VariantId for the variant to get - master if not specified
     * @param loadVariantInfoOnVariants (optional) 
     * @param priceSettings (optional) 
     * @param mediaSettings (optional) 
     * @param manufacturerSettings (optional) 
     * @param categoryFieldSettings (optional) 
     * @param productFieldSettings (optional) 
     * @param variantInfoSettings (optional) 
     * @param groupInfoSettings (optional) 
     * @param assetCategorySettings (optional) 
     * @param stockUnitSettings (optional) 
     * @param unitOptionSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @return Product matching the id and variantid
     */
    getProduct2(id: string | null, variantId: string | null, loadVariantInfoOnVariants: boolean | undefined, priceSettings: PriceViewModelSettings | null | undefined, mediaSettings: MediaViewModelSettings | null | undefined, manufacturerSettings: ManufacturerViewModelSettings | null | undefined, categoryFieldSettings: CategoryFieldViewModelSetting | null | undefined, productFieldSettings: FieldValueViewModelSetting | null | undefined, variantInfoSettings: VariantInfoViewModelSettings | null | undefined, groupInfoSettings: GroupInfoViewModelSettings | null | undefined, assetCategorySettings: AssetCategoryViewModelSettings | null | undefined, stockUnitSettings: StockUnitViewModelSettings | null | undefined, unitOptionSettings: UnitOptionViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<ProductViewModel> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/products/{id}/{variantId}?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (variantId === undefined || variantId === null)
            throw new Error("The parameter 'variantId' must be defined.");
        url_ = url_.replace("{variantId}", encodeURIComponent("" + variantId));
        if (loadVariantInfoOnVariants === null)
            throw new Error("The parameter 'loadVariantInfoOnVariants' cannot be null.");
        else if (loadVariantInfoOnVariants !== undefined)
            url_ += "LoadVariantInfoOnVariants=" + encodeURIComponent("" + loadVariantInfoOnVariants) + "&";
        if (priceSettings !== undefined && priceSettings !== null)
            url_ += "PriceSettings=" + encodeURIComponent("" + priceSettings) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null)
            url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
        if (manufacturerSettings !== undefined && manufacturerSettings !== null)
            url_ += "ManufacturerSettings=" + encodeURIComponent("" + manufacturerSettings) + "&";
        if (categoryFieldSettings !== undefined && categoryFieldSettings !== null)
            url_ += "CategoryFieldSettings=" + encodeURIComponent("" + categoryFieldSettings) + "&";
        if (productFieldSettings !== undefined && productFieldSettings !== null)
            url_ += "ProductFieldSettings=" + encodeURIComponent("" + productFieldSettings) + "&";
        if (variantInfoSettings !== undefined && variantInfoSettings !== null)
            url_ += "VariantInfoSettings=" + encodeURIComponent("" + variantInfoSettings) + "&";
        if (groupInfoSettings !== undefined && groupInfoSettings !== null)
            url_ += "GroupInfoSettings=" + encodeURIComponent("" + groupInfoSettings) + "&";
        if (assetCategorySettings !== undefined && assetCategorySettings !== null)
            url_ += "AssetCategorySettings=" + encodeURIComponent("" + assetCategorySettings) + "&";
        if (stockUnitSettings !== undefined && stockUnitSettings !== null)
            url_ += "StockUnitSettings=" + encodeURIComponent("" + stockUnitSettings) + "&";
        if (unitOptionSettings !== undefined && unitOptionSettings !== null)
            url_ += "UnitOptionSettings=" + encodeURIComponent("" + unitOptionSettings) + "&";
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
            return this.processGetProduct2(_response);
        });
    }

    protected processGetProduct2(response: Response): Promise<ProductViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("No matching product found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductViewModel>(null as any);
    }

    /**
     * Gets all related products of a product filtered by query parameters.
     * @param id ProductId for the product to get related products for
     * @param productSettings (optional) 
     * @param groupSettings (optional) 
     * @param facetGroupSettings (optional) 
     * @param parameters (optional) 
     * @param pageSize (optional) 
     * @param currentPage (optional) 
     * @param mediaSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @return Related products of the product matching the id
     */
    related(id: string | null, productSettings: ProductViewModelSettings | null | undefined, groupSettings: ProductGroupViewModelSettings | null | undefined, facetGroupSettings: FacetGroupViewModelSettings | null | undefined, parameters: { [key: string]: string; } | null | undefined, pageSize: number | undefined, currentPage: number | undefined, mediaSettings: MediaViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<ProductListViewModel> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/products/{id}/related?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (productSettings !== undefined && productSettings !== null)
            url_ += "ProductSettings=" + encodeURIComponent("" + productSettings) + "&";
        if (groupSettings !== undefined && groupSettings !== null)
            url_ += "GroupSettings=" + encodeURIComponent("" + groupSettings) + "&";
        if (facetGroupSettings !== undefined && facetGroupSettings !== null)
            url_ += "FacetGroupSettings=" + encodeURIComponent("" + facetGroupSettings) + "&";
        if (parameters !== undefined && parameters !== null)
            url_ += "Parameters=" + encodeURIComponent("" + parameters) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (currentPage === null)
            throw new Error("The parameter 'currentPage' cannot be null.");
        else if (currentPage !== undefined)
            url_ += "CurrentPage=" + encodeURIComponent("" + currentPage) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null)
            url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
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
            return this.processRelated(_response);
        });
    }

    protected processRelated(response: Response): Promise<ProductListViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductListViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("No matching related products found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductListViewModel>(null as any);
    }

    /**
     * Gets related products of a product filtered by query parameters.
     * @param id ProductId for the product to get related products for
     * @param variantId VariantId for the variant to get - master if not specified
     * @param productSettings (optional) 
     * @param groupSettings (optional) 
     * @param facetGroupSettings (optional) 
     * @param parameters (optional) 
     * @param pageSize (optional) 
     * @param currentPage (optional) 
     * @param mediaSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @return Related products of the product matching the id
     */
    related2(id: string | null, variantId: string | null, productSettings: ProductViewModelSettings | null | undefined, groupSettings: ProductGroupViewModelSettings | null | undefined, facetGroupSettings: FacetGroupViewModelSettings | null | undefined, parameters: { [key: string]: string; } | null | undefined, pageSize: number | undefined, currentPage: number | undefined, mediaSettings: MediaViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<ProductListViewModel> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/products/{id}/{variantId}/related?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (variantId === undefined || variantId === null)
            throw new Error("The parameter 'variantId' must be defined.");
        url_ = url_.replace("{variantId}", encodeURIComponent("" + variantId));
        if (productSettings !== undefined && productSettings !== null)
            url_ += "ProductSettings=" + encodeURIComponent("" + productSettings) + "&";
        if (groupSettings !== undefined && groupSettings !== null)
            url_ += "GroupSettings=" + encodeURIComponent("" + groupSettings) + "&";
        if (facetGroupSettings !== undefined && facetGroupSettings !== null)
            url_ += "FacetGroupSettings=" + encodeURIComponent("" + facetGroupSettings) + "&";
        if (parameters !== undefined && parameters !== null)
            url_ += "Parameters=" + encodeURIComponent("" + parameters) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (currentPage === null)
            throw new Error("The parameter 'currentPage' cannot be null.");
        else if (currentPage !== undefined)
            url_ += "CurrentPage=" + encodeURIComponent("" + currentPage) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null)
            url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
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
            return this.processRelated2(_response);
        });
    }

    protected processRelated2(response: Response): Promise<ProductListViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductListViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("No matching related products found", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductListViewModel>(null as any);
    }

    /**
     * Exports products. Send download link for zip archive containing file with specified format to email.
     * @param repositoryName (optional) Parameter that is used with the query name to do a search
     * @param queryName (optional) Parameter that is used with the repository name to do a search
     * @param groupId (optional) Parameter that can be used for getting all products in a specific group
     * @param productIds (optional) Parameter that can be used for getting all products with the specified ids
     * @param sortBy (optional) Sets the field to sort by, i.e. ProductPrice
     * @param sortOrder (optional) Sets the sort direction. ASC (default) or DESC
     * @param productSettings (optional) 
     * @param groupSettings (optional) 
     * @param facetGroupSettings (optional) 
     * @param parameters (optional) 
     * @param pageSize (optional) 
     * @param currentPage (optional) 
     * @param mediaSettings (optional) 
     * @param userId (optional) 
     * @param showPricesWithVat (optional) 
     * @param currencyCode (optional) 
     * @param countryCode (optional) 
     * @param shopId (optional) 
     * @param languageId (optional) 
     * @param filledProperties (optional) 
     * @param fileName (optional) Gets or sets name of file for export. If not specified file name will be $"export_{DateTime.Now}".
     * @param exportFormat (optional) Gets or sets the format for export. If not specified CSV format is used.
     * @param senderName (optional) Gets or sets sender name. If not specified SenderEmail will be used.
     * @param senderEmail (optional) Gets or sets sender email. If not specified SystemMailAddress will be used.
     * @param recipientTokens (optional) Gets or sets recipient tokens recieved from UsersController.CreateRecipients(IEnumerable{string}). Required.
     * @param subject (optional) Gets or sets subject. If not specified "Export products" will be used.
     * @param templatePath (optional) Gets or sets template path. If not specified "eCom/ProductCatalog/ExportProductsMail.cshtml" will be used.
     * @param dpi (optional) 
     * @param imageFormat (optional) 
     * @param height (optional) 
     * @param width (optional) 
     * @param embedProfile (optional) 
     * @param assetCategories (optional) 
     * @return Products exported successfully
     */
    exportProducts(repositoryName: string | null | undefined, queryName: string | null | undefined, groupId: string | null | undefined, productIds: string[] | null | undefined, sortBy: string | null | undefined, sortOrder: string | null | undefined, productSettings: ProductViewModelSettings | null | undefined, groupSettings: ProductGroupViewModelSettings | null | undefined, facetGroupSettings: FacetGroupViewModelSettings | null | undefined, parameters: { [key: string]: string; } | null | undefined, pageSize: number | undefined, currentPage: number | undefined, mediaSettings: MediaViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined, fileName: string | null | undefined, exportFormat: ExportFormat | undefined, senderName: string | null | undefined, senderEmail: string | null | undefined, recipientTokens: string[] | null | undefined, subject: string | null | undefined, templatePath: string | null | undefined, dpi: number | undefined, imageFormat: string | null | undefined, height: number | undefined, width: number | undefined, embedProfile: boolean | undefined, assetCategories: string[] | null | undefined): Promise<void> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/products/export?";
        if (repositoryName !== undefined && repositoryName !== null)
            url_ += "RepositoryName=" + encodeURIComponent("" + repositoryName) + "&";
        if (queryName !== undefined && queryName !== null)
            url_ += "QueryName=" + encodeURIComponent("" + queryName) + "&";
        if (groupId !== undefined && groupId !== null)
            url_ += "GroupId=" + encodeURIComponent("" + groupId) + "&";
        if (productIds !== undefined && productIds !== null)
            productIds && productIds.forEach(item => { url_ += "ProductIds=" + encodeURIComponent("" + item) + "&"; });
        if (sortBy !== undefined && sortBy !== null)
            url_ += "SortBy=" + encodeURIComponent("" + sortBy) + "&";
        if (sortOrder !== undefined && sortOrder !== null)
            url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
        if (productSettings !== undefined && productSettings !== null)
            url_ += "ProductSettings=" + encodeURIComponent("" + productSettings) + "&";
        if (groupSettings !== undefined && groupSettings !== null)
            url_ += "GroupSettings=" + encodeURIComponent("" + groupSettings) + "&";
        if (facetGroupSettings !== undefined && facetGroupSettings !== null)
            url_ += "FacetGroupSettings=" + encodeURIComponent("" + facetGroupSettings) + "&";
        if (parameters !== undefined && parameters !== null)
            url_ += "Parameters=" + encodeURIComponent("" + parameters) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (currentPage === null)
            throw new Error("The parameter 'currentPage' cannot be null.");
        else if (currentPage !== undefined)
            url_ += "CurrentPage=" + encodeURIComponent("" + currentPage) + "&";
        if (mediaSettings !== undefined && mediaSettings !== null)
            url_ += "MediaSettings=" + encodeURIComponent("" + mediaSettings) + "&";
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
        if (fileName !== undefined && fileName !== null)
            url_ += "FileName=" + encodeURIComponent("" + fileName) + "&";
        if (exportFormat === null)
            throw new Error("The parameter 'exportFormat' cannot be null.");
        else if (exportFormat !== undefined)
            url_ += "ExportFormat=" + encodeURIComponent("" + exportFormat) + "&";
        if (senderName !== undefined && senderName !== null)
            url_ += "SenderName=" + encodeURIComponent("" + senderName) + "&";
        if (senderEmail !== undefined && senderEmail !== null)
            url_ += "SenderEmail=" + encodeURIComponent("" + senderEmail) + "&";
        if (recipientTokens !== undefined && recipientTokens !== null)
            recipientTokens && recipientTokens.forEach(item => { url_ += "RecipientTokens=" + encodeURIComponent("" + item) + "&"; });
        if (subject !== undefined && subject !== null)
            url_ += "Subject=" + encodeURIComponent("" + subject) + "&";
        if (templatePath !== undefined && templatePath !== null)
            url_ += "TemplatePath=" + encodeURIComponent("" + templatePath) + "&";
        if (dpi === null)
            throw new Error("The parameter 'dpi' cannot be null.");
        else if (dpi !== undefined)
            url_ += "Dpi=" + encodeURIComponent("" + dpi) + "&";
        if (imageFormat !== undefined && imageFormat !== null)
            url_ += "ImageFormat=" + encodeURIComponent("" + imageFormat) + "&";
        if (height === null)
            throw new Error("The parameter 'height' cannot be null.");
        else if (height !== undefined)
            url_ += "Height=" + encodeURIComponent("" + height) + "&";
        if (width === null)
            throw new Error("The parameter 'width' cannot be null.");
        else if (width !== undefined)
            url_ += "Width=" + encodeURIComponent("" + width) + "&";
        if (embedProfile === null)
            throw new Error("The parameter 'embedProfile' cannot be null.");
        else if (embedProfile !== undefined)
            url_ += "EmbedProfile=" + encodeURIComponent("" + embedProfile) + "&";
        if (assetCategories !== undefined && assetCategories !== null)
            assetCategories && assetCategories.forEach(item => { url_ += "AssetCategories=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processExportProducts(_response);
        });
    }

    protected processExportProducts(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("No matching products found", status, _responseText, _headers);
            });
        } else if (status === 204) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("Invalid parameters. Missing required parameters.", status, _responseText, _headers);
            });
        } else if (status === 402) {
            return response.text().then((_responseText) => {
            return throwException("You don\'t have a proper license to support this feature", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }
}

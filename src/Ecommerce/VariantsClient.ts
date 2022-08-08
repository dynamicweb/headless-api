import { ClientBase } from '../Shared/ClientBase';
import { throwException } from '../Helpers/ExceptionHelper';
import { VariantInfoViewModel } from './VariantInfoViewModel';
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

export class VariantsClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, token?: string) {
        super(baseUrl, token);
    }

    /**
     * Returns variant information for the specified product
     * @param productId The product to return variant info for
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
     * @return Variant info model for the specified id
     */
    getVariantInfo(productId: string | null, loadVariantInfoOnVariants: boolean | undefined, priceSettings: PriceViewModelSettings | null | undefined, mediaSettings: MediaViewModelSettings | null | undefined, manufacturerSettings: ManufacturerViewModelSettings | null | undefined, categoryFieldSettings: CategoryFieldViewModelSetting | null | undefined, productFieldSettings: FieldValueViewModelSetting | null | undefined, variantInfoSettings: VariantInfoViewModelSettings | null | undefined, groupInfoSettings: GroupInfoViewModelSettings | null | undefined, assetCategorySettings: AssetCategoryViewModelSettings | null | undefined, stockUnitSettings: StockUnitViewModelSettings | null | undefined, unitOptionSettings: UnitOptionViewModelSettings | null | undefined, userId: number | undefined, showPricesWithVat: boolean | undefined, currencyCode: string | null | undefined, countryCode: string | null | undefined, shopId: string | null | undefined, languageId: string | null | undefined, filledProperties: string[] | null | undefined): Promise<VariantInfoViewModel> {
        let url_ = this.baseUrl + "/dwapi/ecommerce/variants/{productId}?";
        if (productId === undefined || productId === null)
            throw new Error("The parameter 'productId' must be defined.");
        url_ = url_.replace("{productId}", encodeURIComponent("" + productId));
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
            return this.processGetVariantInfo(_response);
        });
    }

    protected processGetVariantInfo(response: Response): Promise<VariantInfoViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = VariantInfoViewModel.fromJS(resultData200);
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
        return Promise.resolve<VariantInfoViewModel>(null as any);
    }
}

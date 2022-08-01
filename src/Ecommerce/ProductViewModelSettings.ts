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
import { ViewSettingsBaseCurrencyBase } from './ViewSettingsCurrencyBase';

export class ProductViewModelSettings extends ViewSettingsBaseCurrencyBase<ProductViewModelSettings> {
    loadVariantInfoOnVariants?: boolean;
    priceSettings?: PriceViewModelSettings | undefined;
    mediaSettings?: MediaViewModelSettings | undefined;
    manufacturerSettings?: ManufacturerViewModelSettings | undefined;
    categoryFieldSettings?: CategoryFieldViewModelSetting | undefined;
    productFieldSettings?: FieldValueViewModelSetting | undefined;
    variantInfoSettings?: VariantInfoViewModelSettings | undefined;
    groupInfoSettings?: GroupInfoViewModelSettings | undefined;
    assetCategorySettings?: AssetCategoryViewModelSettings | undefined;
    stockUnitSettings?: StockUnitViewModelSettings | undefined;
    unitOptionSettings?: UnitOptionViewModelSettings | undefined;

    constructor(data?: ProductViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.loadVariantInfoOnVariants = _data["LoadVariantInfoOnVariants"];
            this.priceSettings = _data["PriceSettings"] ? PriceViewModelSettings.fromJS(_data["PriceSettings"]) : <any>undefined;
            this.mediaSettings = _data["MediaSettings"] ? MediaViewModelSettings.fromJS(_data["MediaSettings"]) : <any>undefined;
            this.manufacturerSettings = _data["ManufacturerSettings"] ? ManufacturerViewModelSettings.fromJS(_data["ManufacturerSettings"]) : <any>undefined;
            this.categoryFieldSettings = _data["CategoryFieldSettings"] ? CategoryFieldViewModelSetting.fromJS(_data["CategoryFieldSettings"]) : <any>undefined;
            this.productFieldSettings = _data["ProductFieldSettings"] ? FieldValueViewModelSetting.fromJS(_data["ProductFieldSettings"]) : <any>undefined;
            this.variantInfoSettings = _data["VariantInfoSettings"] ? VariantInfoViewModelSettings.fromJS(_data["VariantInfoSettings"]) : <any>undefined;
            this.groupInfoSettings = _data["GroupInfoSettings"] ? GroupInfoViewModelSettings.fromJS(_data["GroupInfoSettings"]) : <any>undefined;
            this.assetCategorySettings = _data["AssetCategorySettings"] ? AssetCategoryViewModelSettings.fromJS(_data["AssetCategorySettings"]) : <any>undefined;
            this.stockUnitSettings = _data["StockUnitSettings"] ? StockUnitViewModelSettings.fromJS(_data["StockUnitSettings"]) : <any>undefined;
            this.unitOptionSettings = _data["UnitOptionSettings"] ? UnitOptionViewModelSettings.fromJS(_data["UnitOptionSettings"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ProductViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new ProductViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["LoadVariantInfoOnVariants"] = this.loadVariantInfoOnVariants;
        data["PriceSettings"] = this.priceSettings ? this.priceSettings.toJSON() : <any>undefined;
        data["MediaSettings"] = this.mediaSettings ? this.mediaSettings.toJSON() : <any>undefined;
        data["ManufacturerSettings"] = this.manufacturerSettings ? this.manufacturerSettings.toJSON() : <any>undefined;
        data["CategoryFieldSettings"] = this.categoryFieldSettings ? this.categoryFieldSettings.toJSON() : <any>undefined;
        data["ProductFieldSettings"] = this.productFieldSettings ? this.productFieldSettings.toJSON() : <any>undefined;
        data["VariantInfoSettings"] = this.variantInfoSettings ? this.variantInfoSettings.toJSON() : <any>undefined;
        data["GroupInfoSettings"] = this.groupInfoSettings ? this.groupInfoSettings.toJSON() : <any>undefined;
        data["AssetCategorySettings"] = this.assetCategorySettings ? this.assetCategorySettings.toJSON() : <any>undefined;
        data["StockUnitSettings"] = this.stockUnitSettings ? this.stockUnitSettings.toJSON() : <any>undefined;
        data["UnitOptionSettings"] = this.unitOptionSettings ? this.unitOptionSettings.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

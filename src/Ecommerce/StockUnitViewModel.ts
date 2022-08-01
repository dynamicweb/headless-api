import { FillableViewModelBase } from '../Shared/ViewModel';
import { AddressViewModel } from '../Authentication/AddressViewModel';

export class StockUnitViewModel extends FillableViewModelBase {
    unitId?: string | undefined;
    unitName?: string | undefined;
    variantId?: string | undefined;
    stockLocationId?: number;
    stockLocationName?: string | undefined;
    stockLocationCategory?: string | undefined;
    stockLocationAddress?: AddressViewModel | undefined;
    stockLevel?: number;
    stockStatus?: string | undefined;
    weight?: number;
    volume?: number;
    description?: string | undefined;

    constructor(data?: StockUnitViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.unitId = _data["UnitId"];
            this.unitName = _data["UnitName"];
            this.variantId = _data["VariantId"];
            this.stockLocationId = _data["StockLocationId"];
            this.stockLocationName = _data["StockLocationName"];
            this.stockLocationCategory = _data["StockLocationCategory"];
            this.stockLocationAddress = _data["StockLocationAddress"] ? AddressViewModel.fromJS(_data["StockLocationAddress"]) : <any>undefined;
            this.stockLevel = _data["StockLevel"];
            this.stockStatus = _data["StockStatus"];
            this.weight = _data["Weight"];
            this.volume = _data["Volume"];
            this.description = _data["Description"];
        }
    }

    static override fromJS(data: any): StockUnitViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new StockUnitViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["UnitId"] = this.unitId;
        data["UnitName"] = this.unitName;
        data["VariantId"] = this.variantId;
        data["StockLocationId"] = this.stockLocationId;
        data["StockLocationName"] = this.stockLocationName;
        data["StockLocationCategory"] = this.stockLocationCategory;
        data["StockLocationAddress"] = this.stockLocationAddress ? this.stockLocationAddress.toJSON() : <any>undefined;
        data["StockLevel"] = this.stockLevel;
        data["StockStatus"] = this.stockStatus;
        data["Weight"] = this.weight;
        data["Volume"] = this.volume;
        data["Description"] = this.description;
        super.toJSON(data);
        return data;
    }
}

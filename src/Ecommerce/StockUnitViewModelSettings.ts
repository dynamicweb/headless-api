import { ViewSettingsLanguageBase } from "./ViewSettingsLanguageBase";

export class StockUnitViewModelSettings extends ViewSettingsLanguageBase<StockUnitViewModelSettings> {

    constructor(data?: StockUnitViewModelSettings) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
    }

    static fromJS(data: any): StockUnitViewModelSettings {
        data = typeof data === 'object' ? data : {};
        let result = new StockUnitViewModelSettings();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data;
    }
}

import { FillableViewModelBase } from '../Shared/ViewModel';
import { PriceViewModel } from './PriceViewModel';

export class PriceListViewModel extends FillableViewModelBase {
    quantity?: number;
    price?: PriceViewModel | undefined;

    constructor(data?: PriceListViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.quantity = _data["Quantity"];
            this.price = _data["Price"] ? PriceViewModel.fromJS(_data["Price"]) : <any>undefined;
        }
    }

    static override fromJS(data: any): PriceListViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new PriceListViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Quantity"] = this.quantity;
        data["Price"] = this.price ? this.price.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

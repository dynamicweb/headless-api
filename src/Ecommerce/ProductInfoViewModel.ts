import { FillableViewModelBase } from '../Shared/ViewModel';

export class ProductInfoViewModel extends FillableViewModelBase {
    productId?: string | undefined;
    variantId?: string | undefined;

    constructor(data?: ProductInfoViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.productId = _data["ProductId"];
            this.variantId = _data["VariantId"];
        }
    }

    static override fromJS(data: any): ProductInfoViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new ProductInfoViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ProductId"] = this.productId;
        data["VariantId"] = this.variantId;
        super.toJSON(data);
        return data;
    }
}

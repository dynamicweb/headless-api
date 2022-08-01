import { FillableViewModelBase } from '../Shared/ViewModel';
import { ProductInfoViewModel } from './ProductInfoViewModel'

export class RelatedGroupViewModel extends FillableViewModelBase {
    id?: string | undefined;
    name?: string | undefined;
    products?: ProductInfoViewModel[] | undefined;

    constructor(data?: RelatedGroupViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            if (Array.isArray(_data["Products"])) {
                this.products = [] as any;
                for (let item of _data["Products"])
                    this.products!.push(ProductInfoViewModel.fromJS(item));
            }
        }
    }

    static override fromJS(data: any): RelatedGroupViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new RelatedGroupViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        if (Array.isArray(this.products)) {
            data["Products"] = [];
            for (let item of this.products)
                data["Products"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}

import { FillableViewModelBase } from '../Shared/ViewModel';
import { FacetViewModel } from './FacetViewModel';

export class FacetGroupViewModel extends FillableViewModelBase {
    name?: string | undefined;
    facetGroupType?: string | undefined;
    description?: string | undefined;
    facets?: FacetViewModel[] | undefined;

    constructor(data?: FacetGroupViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.name = _data["Name"];
            this.facetGroupType = _data["FacetGroupType"];
            this.description = _data["Description"];
            if (Array.isArray(_data["Facets"])) {
                this.facets = [] as any;
                for (let item of _data["Facets"])
                    this.facets!.push(FacetViewModel.fromJS(item));
            }
        }
    }

    static override fromJS(data: any): FacetGroupViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new FacetGroupViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Name"] = this.name;
        data["FacetGroupType"] = this.facetGroupType;
        data["Description"] = this.description;
        if (Array.isArray(this.facets)) {
            data["Facets"] = [];
            for (let item of this.facets)
                data["Facets"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}

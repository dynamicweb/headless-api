import { FillableViewModelBase } from '../Shared/ViewModel';
import { FacetOptionViewModel } from './FacetOptionViewModel';

export class FacetViewModel extends FillableViewModelBase {
    name?: string | undefined;
    queryParameter?: string | undefined;
    queryParameterType?: string | undefined;
    queryParameterDefaultValue?: string | undefined;
    renderType?: string | undefined;
    facetField?: string | undefined;
    facetType?: string | undefined;
    facetValue?: string | undefined;
    options?: FacetOptionViewModel[] | undefined;
    optionCount?: number;
    optionActiveCount?: number;
    optionResultTotalCount?: number;
    minimumFacetValue?: number;
    maximumFacetValue?: number;

    constructor(data?: FacetViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.name = _data["Name"];
            this.queryParameter = _data["QueryParameter"];
            this.queryParameterType = _data["QueryParameterType"];
            this.queryParameterDefaultValue = _data["QueryParameterDefaultValue"];
            this.renderType = _data["RenderType"];
            this.facetField = _data["FacetField"];
            this.facetType = _data["FacetType"];
            this.facetValue = _data["FacetValue"];
            if (Array.isArray(_data["Options"])) {
                this.options = [] as any;
                for (let item of _data["Options"])
                    this.options!.push(FacetOptionViewModel.fromJS(item));
            }
            this.optionCount = _data["OptionCount"];
            this.optionActiveCount = _data["OptionActiveCount"];
            this.optionResultTotalCount = _data["OptionResultTotalCount"];
            this.minimumFacetValue = _data["MinimumFacetValue"];
            this.maximumFacetValue = _data["MaximumFacetValue"];
        }
    }

    static override fromJS(data: any): FacetViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new FacetViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Name"] = this.name;
        data["QueryParameter"] = this.queryParameter;
        data["QueryParameterType"] = this.queryParameterType;
        data["QueryParameterDefaultValue"] = this.queryParameterDefaultValue;
        data["RenderType"] = this.renderType;
        data["FacetField"] = this.facetField;
        data["FacetType"] = this.facetType;
        data["FacetValue"] = this.facetValue;
        if (Array.isArray(this.options)) {
            data["Options"] = [];
            for (let item of this.options)
                data["Options"].push(item.toJSON());
        }
        data["OptionCount"] = this.optionCount;
        data["OptionActiveCount"] = this.optionActiveCount;
        data["OptionResultTotalCount"] = this.optionResultTotalCount;
        data["MinimumFacetValue"] = this.minimumFacetValue;
        data["MaximumFacetValue"] = this.maximumFacetValue;
        super.toJSON(data);
        return data;
    }
}

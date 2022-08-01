import { FillableViewModelBase } from '../Shared/ViewModel';
import { ProductGroupViewModel } from './ProductGroupViewModel';
import { ProductViewModel } from './ProductViewModel';
import { FacetGroupViewModel } from '../Shared/FacetGroupViewModel';

export class ProductListViewModel extends FillableViewModelBase {
    group?: ProductGroupViewModel | undefined;
    subGroups?: ProductGroupViewModel[] | undefined;
    products?: ProductViewModel[] | undefined;
    pageSize?: number;
    pageCount?: number;
    currentPage?: number;
    totalProductsCount?: number;
    sortBy?: string | undefined;
    sortOrder?: string | undefined;
    spellCheckerSuggestions?: string[] | undefined;
    facetGroups?: FacetGroupViewModel[] | undefined;

    constructor(data?: ProductListViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.group = _data["Group"] ? ProductGroupViewModel.fromJS(_data["Group"]) : <any>undefined;
            if (Array.isArray(_data["SubGroups"])) {
                this.subGroups = [] as any;
                for (let item of _data["SubGroups"])
                    this.subGroups!.push(ProductGroupViewModel.fromJS(item));
            }
            if (Array.isArray(_data["Products"])) {
                this.products = [] as any;
                for (let item of _data["Products"])
                    this.products!.push(ProductViewModel.fromJS(item));
            }
            this.pageSize = _data["PageSize"];
            this.pageCount = _data["PageCount"];
            this.currentPage = _data["CurrentPage"];
            this.totalProductsCount = _data["TotalProductsCount"];
            this.sortBy = _data["SortBy"];
            this.sortOrder = _data["SortOrder"];
            if (Array.isArray(_data["SpellCheckerSuggestions"])) {
                this.spellCheckerSuggestions = [] as any;
                for (let item of _data["SpellCheckerSuggestions"])
                    this.spellCheckerSuggestions!.push(item);
            }
            if (Array.isArray(_data["FacetGroups"])) {
                this.facetGroups = [] as any;
                for (let item of _data["FacetGroups"])
                    this.facetGroups!.push(FacetGroupViewModel.fromJS(item));
            }
        }
    }

    static override fromJS(data: any): ProductListViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new ProductListViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Group"] = this.group ? this.group.toJSON() : <any>undefined;
        if (Array.isArray(this.subGroups)) {
            data["SubGroups"] = [];
            for (let item of this.subGroups)
                data["SubGroups"].push(item.toJSON());
        }
        if (Array.isArray(this.products)) {
            data["Products"] = [];
            for (let item of this.products)
                data["Products"].push(item.toJSON());
        }
        data["PageSize"] = this.pageSize;
        data["PageCount"] = this.pageCount;
        data["CurrentPage"] = this.currentPage;
        data["TotalProductsCount"] = this.totalProductsCount;
        data["SortBy"] = this.sortBy;
        data["SortOrder"] = this.sortOrder;
        if (Array.isArray(this.spellCheckerSuggestions)) {
            data["SpellCheckerSuggestions"] = [];
            for (let item of this.spellCheckerSuggestions)
                data["SpellCheckerSuggestions"].push(item);
        }
        if (Array.isArray(this.facetGroups)) {
            data["FacetGroups"] = [];
            for (let item of this.facetGroups)
                data["FacetGroups"].push(item.toJSON());
        }
        super.toJSON(data);
        return data;
    }
}

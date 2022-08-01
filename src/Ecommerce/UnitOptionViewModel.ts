import { FillableViewModelBase } from '../Shared/ViewModel';
import { MediaViewModel } from './MediaViewModel';

export class UnitOptionViewModel extends FillableViewModelBase {
    id?: string | undefined;
    name?: string | undefined;
    image?: MediaViewModel | undefined;

    constructor(data?: UnitOptionViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["Id"];
            this.name = _data["Name"];
            this.image = _data["Image"] ? MediaViewModel.fromJS(_data["Image"]) : <any>undefined;
        }
    }

    static override fromJS(data: any): UnitOptionViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new UnitOptionViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["Image"] = this.image ? this.image.toJSON() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

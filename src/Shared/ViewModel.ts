export abstract class ViewModelBase {

    constructor(data?: ViewModelBase) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
    }

    static fromJS(data: any): ViewModelBase {
        data = typeof data === 'object' ? data : {};
        throw new Error("The abstract class 'ViewModelBase' cannot be instantiated.");
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        return data;
    }
}

export abstract class FillableViewModelBase extends ViewModelBase {

    constructor(data?: FillableViewModelBase) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
    }

    static override fromJS(data: any): FillableViewModelBase {
        data = typeof data === 'object' ? data : {};
        throw new Error("The abstract class 'FillableViewModelBase' cannot be instantiated.");
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data;
    }
}

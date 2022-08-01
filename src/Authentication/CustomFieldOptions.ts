import { Anonymous } from "./Anonymous";

export class CustomFieldOptions extends Anonymous {

    constructor(data?: CustomFieldOptions) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
    }

    static override fromJS(data: any): CustomFieldOptions {
        data = typeof data === 'object' ? data : {};
        let result = new CustomFieldOptions();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data;
    }
}

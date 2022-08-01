/** Returns the cart secret or list of cart secrets for an authenticated user */
export class UserCartsResponse {
    /** Secretid of cart for the users */
    cartSecret?: string | undefined;
    /** Gets or sets the order display name. */
    displayName?: string | undefined;
    /** Gets or sets the order record creation date. */
    createdAt?: Date;
    /** Gets or sets the order record modified date. */
    modified?: Date;
    /** Gets or sets the order shop id. */
    shopId?: string | undefined;
    /** Gets or sets the order Id. */
    id?: string | undefined;

    constructor(data?: UserCartsResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.cartSecret = _data["CartSecret"];
            this.displayName = _data["DisplayName"];
            this.createdAt = _data["CreatedAt"] ? new Date(_data["CreatedAt"].toString()) : <any>undefined;
            this.modified = _data["Modified"] ? new Date(_data["Modified"].toString()) : <any>undefined;
            this.shopId = _data["ShopId"];
            this.id = _data["Id"];
        }
    }

    static fromJS(data: any): UserCartsResponse {
        data = typeof data === 'object' ? data : {};
        let result = new UserCartsResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["CartSecret"] = this.cartSecret;
        data["DisplayName"] = this.displayName;
        data["CreatedAt"] = this.createdAt ? this.createdAt.toISOString() : <any>undefined;
        data["Modified"] = this.modified ? this.modified.toISOString() : <any>undefined;
        data["ShopId"] = this.shopId;
        data["Id"] = this.id;
        return data;
    }
}

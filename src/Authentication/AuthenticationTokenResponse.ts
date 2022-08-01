/** Returns the authentication token for a user that passes the authentication. The token is valid for 45 minutes and then needs to be refreshed. */
export class AuthenticationTokenResponse {
    /** Jwt token that authorises a user after they have been logged in. Send in the authentication header */
    token?: string | undefined;

    constructor(data?: AuthenticationTokenResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.token = _data["Token"];
        }
    }

    static fromJS(data: any): AuthenticationTokenResponse {
        data = typeof data === 'object' ? data : {};
        let result = new AuthenticationTokenResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Token"] = this.token;
        return data;
    }
}

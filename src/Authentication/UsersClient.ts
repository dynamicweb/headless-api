import { ClientBase } from '../Shared/ClientBase';
import { throwException } from '../Helpers/ExceptionHelper';
import { AuthenticationTokenResponse } from './AuthenticationTokenResponse';
import { AddressViewModel } from './AddressViewModel';
import { UserViewModel } from './UserViewModel';

export class UsersClient extends ClientBase {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, token?: string) {
        super(baseUrl, token);
    }

    /**
     * Gets authenticates the user and returns a token for further access - the token has a default expiration of 1800 seconds/30 minutes
     * @param shopid (optional) 
     * @param expirationInSeconds (optional) 
     * @return User authenticated
     */
    authenticate(userName: string | null, password: string | null, shopid: string | null | undefined, expirationInSeconds: number | undefined): Promise<AuthenticationTokenResponse> {
        let url_ = this.baseUrl + "/dwapi/users/authenticate?";
        if (userName === undefined)
            throw new Error("The parameter 'userName' must be defined.");
        else if(userName !== null)
            url_ += "userName=" + encodeURIComponent("" + userName) + "&";
        if (password === undefined)
            throw new Error("The parameter 'password' must be defined.");
        else if(password !== null)
            url_ += "password=" + encodeURIComponent("" + password) + "&";
        if (shopid !== undefined && shopid !== null)
            url_ += "shopid=" + encodeURIComponent("" + shopid) + "&";
        if (expirationInSeconds === null)
            throw new Error("The parameter 'expirationInSeconds' cannot be null.");
        else if (expirationInSeconds !== undefined)
            url_ += "expirationInSeconds=" + encodeURIComponent("" + expirationInSeconds) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processAuthenticate(_response);
        });
    }

    protected processAuthenticate(response: Response): Promise<AuthenticationTokenResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = AuthenticationTokenResponse.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("Username or password is not valid", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("Unable to create JWT for user", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AuthenticationTokenResponse>(null as any);
    }

    /**
     * Refreshses the authentication token from a previoues authentication. Send the initial token as a bearer token. The returned renewed token has a default expiration of 1800 seconds/30 minutes
     * @param expirationInSeconds (optional) 
     * @return User authenticated
     */
    refresh(expirationInSeconds: number | undefined): Promise<AuthenticationTokenResponse> {
        let url_ = this.baseUrl + "/dwapi/users/authenticate/refresh?";
        if (expirationInSeconds === null)
            throw new Error("The parameter 'expirationInSeconds' cannot be null.");
        else if (expirationInSeconds !== undefined)
            url_ += "expirationInSeconds=" + encodeURIComponent("" + expirationInSeconds) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processRefresh(_response);
        });
    }

    protected processRefresh(response: Response): Promise<AuthenticationTokenResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = AuthenticationTokenResponse.fromJS(resultData200);
            return result200;
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("Token could not be authorized\nor\nToken expired", status, _responseText, _headers);
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("Something is wrong with the JWT string", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AuthenticationTokenResponse>(null as any);
    }

    /**
     * Changes the password of the current logged in user. Password will be hashed and fail if password requirements are not met.
     * @param newPassword The new password for the user
     * @return Password changed
     */
    resetpassword(newPassword: string | null): Promise<void> {
        let url_ = this.baseUrl + "/dwapi/users/password/reset?";
        if (newPassword === undefined)
            throw new Error("The parameter 'newPassword' must be defined.");
        else if(newPassword !== null)
            url_ += "newPassword=" + encodeURIComponent("" + newPassword) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "PATCH",
            headers: {
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processResetpassword(_response);
        });
    }

    protected processResetpassword(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The user is not found.", status, _responseText, _headers);
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("Password not accepted: {reason}", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }

    /**
     * Get adresses for the currently logged in user
     * @return OK
     */
    getAddresses(): Promise<AddressViewModel> {
        let url_ = this.baseUrl + "/dwapi/users/addresses";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAddresses(_response);
        });
    }

    protected processGetAddresses(response: Response): Promise<AddressViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = AddressViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The user is not found.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AddressViewModel>(null as any);
    }

    /**
     * Get user info of the currently logged in user
     * @return OK
     */
    getUserInfo(): Promise<UserViewModel> {
        let url_ = this.baseUrl + "/dwapi/users/info";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processGetUserInfo(_response);
        });
    }

    protected processGetUserInfo(response: Response): Promise<UserViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UserViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The user could not be saved. Username or email has to be specified. If username is specified, it has to be unique. Password requirements must be met.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserViewModel>(null as any);
    }

    /**
     * Updates the current logged in user. The update is partial so only submitted properties are updated
     * @param userModel Parameters for the cart, see UserViewModel
     * @return OK
     */
    patch(userModel: UserViewModel | null): Promise<UserViewModel> {
        let url_ = this.baseUrl + "/dwapi/users/info";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(userModel);

        let options_: RequestInit = {
            body: content_,
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processPatch(_response);
        });
    }

    protected processPatch(response: Response): Promise<UserViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UserViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The user is not found.", status, _responseText, _headers);
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The user could not be saved. Username or email has to be specified. If username is specified, it has to be unique. Password requirements must be met.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserViewModel>(null as any);
    }

    /**
     * Updates the current logged in user. The update is a full update so all properties of the user will be overriden.
     * @param userModel Parameters for the cart, see UserViewModel
     * @return OK
     */
    put(userModel: UserViewModel | null): Promise<UserViewModel> {
        let url_ = this.baseUrl + "/dwapi/users/info";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(userModel);

        let options_: RequestInit = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processPut(_response);
        });
    }

    protected processPut(response: Response): Promise<UserViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UserViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("The user is not found.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserViewModel>(null as any);
    }

    /**
     * Updates the current logged in user. The update is partial so only submitted properties are updated
     * @param userModel Parameters for the cart, see UserViewModel
     * @return User created
     */
    create(userModel: UserViewModel | null): Promise<UserViewModel> {
        let url_ = this.baseUrl + "/dwapi/users/create";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(userModel);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processCreate(_response);
        });
    }

    protected processCreate(response: Response): Promise<UserViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UserViewModel.fromJS(resultData200);
            return result200;
            });
        } else if (status === 403) {
            return response.text().then((_responseText) => {
            return throwException("The user could not be saved. Username or email has to be specified. If username is specified, it has to be unique. Password requirements must be met.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserViewModel>(null as any);
    }

    /**
     * Creates recipient tokens for specified recipient emails.
     * @param recipientEmails The list of email addresses to be used for sending exported products for  and
     * @return Tokens created
     */
    createRecipients(recipientEmails: string[] | null): Promise<string[]> {
        let url_ = this.baseUrl + "/dwapi/users/createRecipients";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(recipientEmails);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.fetch(url_, options_).then((_response: Response) => {
            return this.processCreateRecipients(_response);
        });
    }

    protected processCreateRecipients(response: Response): Promise<string[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(item);
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<string[]>(null as any);
    }
}

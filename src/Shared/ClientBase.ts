export class ClientBase {
    private token: string;
    protected baseUrl: string | undefined;
    
    constructor(baseUrl?: string, token?: string) {
        this.baseUrl = baseUrl;
        this.token = token;
    }

    protected fetch(url: RequestInfo, init?: RequestInit): Promise<Response> {
        if (this.token) {
            init = {
                ...init,
                headers: {
                    ...init.headers,
                    "Authorization": `Bearer ${this.token}`
                }
            }
        }
        return window.fetch(url, init);
    }
}
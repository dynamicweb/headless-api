import { ClientConfiguration } from "./ClientConfiguration";

export class ClientBase {
    constructor(configuration: ClientConfiguration) {}

    getBaseUrl(input: string, baseUrl?: string){
        return baseUrl || "";
    }
}
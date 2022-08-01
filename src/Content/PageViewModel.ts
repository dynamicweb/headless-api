import { ViewModelBase } from "../Shared/ViewModel";
import { PageReferenceViewModel } from './PageReferenceViewModel';
import { AreaViewModel } from './AreaViewModel';
import { UserViewModel } from '../Authentication/UserViewModel';
import { LogOnFailedReason } from '../Authentication/LogOnFailedReason';
import { CartViewModel } from "../Ecommerce/CartViewModel";
import { ItemViewModel } from "./ItemViewModel";
import { PageLanguageViewModel } from "./PageLanguageViewModel";

export class PageViewModel extends ViewModelBase {
    area?: AreaViewModel | undefined;
    createdDate?: Date;
    currentSecondaryUser?: UserViewModel | undefined;
    currentUser?: UserViewModel | undefined;
    isCurrentUserAllowed?: boolean;
    cart?: CartViewModel | undefined;
    content?: { [key: string]: string; } | undefined;
    gridContent?: { [key: string]: string; } | undefined;
    description?: string | undefined;
    iD?: number;
    item?: ItemViewModel | undefined;
    itemId?: string | undefined;
    itemType?: string | undefined;
    keywords?: string | undefined;
    metaTags?: string | undefined;
    languages?: PageLanguageViewModel[] | undefined;
    name?: string | undefined;
    path?: PageReferenceViewModel[] | undefined;
    propertyItem?: ItemViewModel | undefined;
    propertyItemId?: string | undefined;
    propertyItemType?: string | undefined;
    showUpdatedDate?: boolean;
    title?: string | undefined;
    topPage?: PageReferenceViewModel | undefined;
    updatedDate?: Date;
    secondaryUsers?: UserViewModel[] | undefined;
    hasSecondaryUsers?: boolean;
    logOnFailed?: boolean;
    logOnFailedReason?: LogOnFailedReason;

    constructor(data?: PageViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.area = _data["Area"] ? AreaViewModel.fromJS(_data["Area"]) : <any>undefined;
            this.createdDate = _data["CreatedDate"] ? new Date(_data["CreatedDate"].toString()) : <any>undefined;
            this.currentSecondaryUser = _data["CurrentSecondaryUser"] ? UserViewModel.fromJS(_data["CurrentSecondaryUser"]) : <any>undefined;
            this.currentUser = _data["CurrentUser"] ? UserViewModel.fromJS(_data["CurrentUser"]) : <any>undefined;
            this.isCurrentUserAllowed = _data["IsCurrentUserAllowed"];
            this.cart = _data["Cart"] ? CartViewModel.fromJS(_data["Cart"]) : <any>undefined;
            if (_data["Content"]) {
                this.content = {} as any;
                for (let key in _data["Content"]) {
                    if (_data["Content"].hasOwnProperty(key))
                        (<any>this.content)![key] = _data["Content"][key];
                }
            }
            if (_data["GridContent"]) {
                this.gridContent = {} as any;
                for (let key in _data["GridContent"]) {
                    if (_data["GridContent"].hasOwnProperty(key))
                        (<any>this.gridContent)![key] = _data["GridContent"][key];
                }
            }
            this.description = _data["Description"];
            this.iD = _data["ID"];
            this.item = _data["Item"] ? ItemViewModel.fromJS(_data["Item"]) : <any>undefined;
            this.itemId = _data["ItemId"];
            this.itemType = _data["ItemType"];
            this.keywords = _data["Keywords"];
            this.metaTags = _data["MetaTags"];
            if (Array.isArray(_data["Languages"])) {
                this.languages = [] as any;
                for (let item of _data["Languages"])
                    this.languages!.push(PageLanguageViewModel.fromJS(item));
            }
            this.name = _data["Name"];
            if (Array.isArray(_data["Path"])) {
                this.path = [] as any;
                for (let item of _data["Path"])
                    this.path!.push(PageReferenceViewModel.fromJS(item));
            }
            this.propertyItem = _data["PropertyItem"] ? ItemViewModel.fromJS(_data["PropertyItem"]) : <any>undefined;
            this.propertyItemId = _data["PropertyItemId"];
            this.propertyItemType = _data["PropertyItemType"];
            this.showUpdatedDate = _data["ShowUpdatedDate"];
            this.title = _data["Title"];
            this.topPage = _data["TopPage"] ? PageReferenceViewModel.fromJS(_data["TopPage"]) : <any>undefined;
            this.updatedDate = _data["UpdatedDate"] ? new Date(_data["UpdatedDate"].toString()) : <any>undefined;
            if (Array.isArray(_data["SecondaryUsers"])) {
                this.secondaryUsers = [] as any;
                for (let item of _data["SecondaryUsers"])
                    this.secondaryUsers!.push(UserViewModel.fromJS(item));
            }
            this.hasSecondaryUsers = _data["HasSecondaryUsers"];
            this.logOnFailed = _data["LogOnFailed"];
            this.logOnFailedReason = _data["LogOnFailedReason"];
        }
    }

    static override fromJS(data: any): PageViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new PageViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Area"] = this.area ? this.area.toJSON() : <any>undefined;
        data["CreatedDate"] = this.createdDate ? this.createdDate.toISOString() : <any>undefined;
        data["CurrentSecondaryUser"] = this.currentSecondaryUser ? this.currentSecondaryUser.toJSON() : <any>undefined;
        data["CurrentUser"] = this.currentUser ? this.currentUser.toJSON() : <any>undefined;
        data["IsCurrentUserAllowed"] = this.isCurrentUserAllowed;
        data["Cart"] = this.cart ? this.cart.toJSON() : <any>undefined;
        if (this.content) {
            data["Content"] = {};
            for (let key in this.content) {
                if (this.content.hasOwnProperty(key))
                    (<any>data["Content"])[key] = (<any>this.content)[key];
            }
        }
        if (this.gridContent) {
            data["GridContent"] = {};
            for (let key in this.gridContent) {
                if (this.gridContent.hasOwnProperty(key))
                    (<any>data["GridContent"])[key] = (<any>this.gridContent)[key];
            }
        }
        data["Description"] = this.description;
        data["ID"] = this.iD;
        data["Item"] = this.item ? this.item.toJSON() : <any>undefined;
        data["ItemId"] = this.itemId;
        data["ItemType"] = this.itemType;
        data["Keywords"] = this.keywords;
        data["MetaTags"] = this.metaTags;
        if (Array.isArray(this.languages)) {
            data["Languages"] = [];
            for (let item of this.languages)
                data["Languages"].push(item.toJSON());
        }
        data["Name"] = this.name;
        if (Array.isArray(this.path)) {
            data["Path"] = [];
            for (let item of this.path)
                data["Path"].push(item.toJSON());
        }
        data["PropertyItem"] = this.propertyItem ? this.propertyItem.toJSON() : <any>undefined;
        data["PropertyItemId"] = this.propertyItemId;
        data["PropertyItemType"] = this.propertyItemType;
        data["ShowUpdatedDate"] = this.showUpdatedDate;
        data["Title"] = this.title;
        data["TopPage"] = this.topPage ? this.topPage.toJSON() : <any>undefined;
        data["UpdatedDate"] = this.updatedDate ? this.updatedDate.toISOString() : <any>undefined;
        if (Array.isArray(this.secondaryUsers)) {
            data["SecondaryUsers"] = [];
            for (let item of this.secondaryUsers)
                data["SecondaryUsers"].push(item.toJSON());
        }
        data["HasSecondaryUsers"] = this.hasSecondaryUsers;
        data["LogOnFailed"] = this.logOnFailed;
        data["LogOnFailedReason"] = this.logOnFailedReason;
        super.toJSON(data);
        return data;
    }
}

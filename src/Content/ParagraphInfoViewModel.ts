import { ViewModelBase } from "../Shared/ViewModel";
import { ItemViewModel } from './ItemViewModel';

export class ParagraphInfoViewModel extends ViewModelBase {
    iD?: number;
    name?: string | undefined;
    createdDate?: Date;
    updatedDate?: Date;
    pageID?: number;
    globalID?: number;
    text?: string | undefined;
    item?: ItemViewModel | undefined;
    image?: string | undefined;
    imageFocalX?: number;
    imageFocalY?: number;
    imageHAlign?: string | undefined;
    imageVAlign?: string | undefined;
    imageLink?: string | undefined;
    imageAlt?: string | undefined;
    imageLinkTarget?: string | undefined;
    imageCaption?: string | undefined;

    constructor(data?: ParagraphInfoViewModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.iD = _data["ID"];
            this.name = _data["Name"];
            this.createdDate = _data["CreatedDate"] ? new Date(_data["CreatedDate"].toString()) : <any>undefined;
            this.updatedDate = _data["UpdatedDate"] ? new Date(_data["UpdatedDate"].toString()) : <any>undefined;
            this.pageID = _data["PageID"];
            this.globalID = _data["GlobalID"];
            this.text = _data["Text"];
            this.item = _data["Item"] ? ItemViewModel.fromJS(_data["Item"]) : <any>undefined;
            this.image = _data["Image"];
            this.imageFocalX = _data["ImageFocalX"];
            this.imageFocalY = _data["ImageFocalY"];
            this.imageHAlign = _data["ImageHAlign"];
            this.imageVAlign = _data["ImageVAlign"];
            this.imageLink = _data["ImageLink"];
            this.imageAlt = _data["ImageAlt"];
            this.imageLinkTarget = _data["ImageLinkTarget"];
            this.imageCaption = _data["ImageCaption"];
        }
    }

    static override fromJS(data: any): ParagraphInfoViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new ParagraphInfoViewModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ID"] = this.iD;
        data["Name"] = this.name;
        data["CreatedDate"] = this.createdDate ? this.createdDate.toISOString() : <any>undefined;
        data["UpdatedDate"] = this.updatedDate ? this.updatedDate.toISOString() : <any>undefined;
        data["PageID"] = this.pageID;
        data["GlobalID"] = this.globalID;
        data["Text"] = this.text;
        data["Item"] = this.item ? this.item.toJSON() : <any>undefined;
        data["Image"] = this.image;
        data["ImageFocalX"] = this.imageFocalX;
        data["ImageFocalY"] = this.imageFocalY;
        data["ImageHAlign"] = this.imageHAlign;
        data["ImageVAlign"] = this.imageVAlign;
        data["ImageLink"] = this.imageLink;
        data["ImageAlt"] = this.imageAlt;
        data["ImageLinkTarget"] = this.imageLinkTarget;
        data["ImageCaption"] = this.imageCaption;
        super.toJSON(data);
        return data;
    }
}

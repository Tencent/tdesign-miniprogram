import { SuperComponent } from '../common/src/index';
export default class Image extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdImageProps;
    data: {
        isLoading: boolean;
        isFailed: boolean;
        widthStyle: string;
        classPrefix: string;
    };
    preSrc: string;
    lifetimes: {
        attached(this: Image): void;
    };
    observers: {
        src(): void;
    };
    onLoaded(e: any): void;
    onLoadError(e: any): void;
    update(): void;
}

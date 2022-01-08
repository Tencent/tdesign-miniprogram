import { SuperComponent } from '../common/src/index';
export default class Loading extends SuperComponent {
    externalClasses: string[];
    data: {
        prefix: string;
        classPrefix: string;
        show: boolean;
    };
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdLoadingProps;
    timer: any;
    observers: {
        loading(this: any, cur: any): void;
    };
    lifetimes: {
        detached(): void;
    };
    refreshPage(): void;
}

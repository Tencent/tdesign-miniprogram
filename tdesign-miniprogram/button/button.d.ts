import { SuperComponent } from '../common/src/index';
export default class Button extends SuperComponent {
    externalClasses: string[];
    behaviors: string[];
    properties: import("./type").TdButtonProps;
    data: {
        prefix: string;
        className: string;
        classPrefix: string;
    };
    observers: {
        'theme, size, plain, block, shape, disabled, loading'(): void;
    };
    lifetimes: {
        attached(): void;
    };
    methods: {
        setClass(): void;
        getuserinfo(e: any): void;
        contact(e: any): void;
        getphonenumber(e: any): void;
        error(e: any): void;
        opensetting(e: any): void;
        launchapp(e: any): void;
        handleTap(e: any): void;
    };
}

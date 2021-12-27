import { SuperComponent } from '../common/src/index';
export default class Navbar extends SuperComponent {
    externalClasses: string[];
    timer: any;
    options: {
        addGlobalClass: boolean;
        multipleSlots: boolean;
    };
    properties: import("./type").TdNavbarProps;
    observers: {
        visible(this: Navbar, visible: any): void;
        fixed(this: Navbar, fixed: any): void;
        background(this: Navbar, background: any): void;
        'homeIcon, leftIcon'(this: Navbar): void;
        'title,titleMaxLength'(this: any): void;
    };
    data: {
        hasHomeIcon: boolean;
        hasBackIcon: boolean;
        classPrefix: string;
        fixedClass: string;
        contentStyle: string;
        boxStyle: string;
        opacity: number;
        ios: boolean;
        delta: number;
        showTitle: string;
    };
    attached(): void;
    calcLeftBtn(): void;
    goHome(): void;
    goBack(): void;
}

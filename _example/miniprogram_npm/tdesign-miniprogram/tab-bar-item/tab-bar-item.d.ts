import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class TabBarItem extends SuperComponent {
    externalClasses: string[];
    parent: any;
    relations: RelationsOptions;
    options: {
        multipleSlots: boolean;
    };
    data: {
        prefix: string;
        classPrefix: string;
        isSpread: boolean;
        isChecked: boolean;
        hasChildren: boolean;
        currentName: string;
        split: boolean;
        iconOnly: boolean;
        theme: string;
        crowded: boolean;
        shape: string;
    };
    properties: import("./type").TdTabBarItemProps;
    observers: {
        subTabBar(value: Record<string, any>[]): void;
        icon(v: any): void;
    };
    lifetimes: {
        attached(): Promise<void>;
    };
    methods: {
        showSpread(): void;
        toggle(): void;
        selectChild(event: any): void;
        checkActive(value: any): void;
        closeSpread(): void;
    };
}

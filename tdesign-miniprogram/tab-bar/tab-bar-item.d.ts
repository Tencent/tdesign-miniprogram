import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class TabbarItem extends SuperComponent {
    relations: RelationsOptions;
    data: {
        prefix: string;
        classPrefix: string;
        isSpread: boolean;
        isChecked: boolean;
        parent: any;
        hasChildren: boolean;
        currentName: string;
        color: string;
        activeColor: string;
        split: boolean;
    };
    properties: import("./type").TdTabBarItemProps;
    observers: {
        subTabBar(value: Record<string, any>[]): void;
    };
    methods: {
        showSpread(): void;
        toggle(): void;
        selectChild(event: any): void;
        checkActive(value: any): boolean;
        closeSpread(): void;
    };
}

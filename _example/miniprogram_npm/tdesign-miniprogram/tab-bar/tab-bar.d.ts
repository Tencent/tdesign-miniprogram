import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class Tabbar extends SuperComponent {
    relations: RelationsOptions;
    externalClasses: string[];
    backupValue: number;
    data: {
        prefix: string;
        classPrefix: string;
        placeholderHeight: number;
        safeAreaBottomHeight: number;
        safeAreaBottomReady: boolean;
    };
    properties: import("./type").TdTabBarProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        value(): void;
        'fixed, placeholder, shape, safeAreaInsetBottom'(): void;
        safeAreaInsetBottom(): void;
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        setSafeAreaBottomHeight(): void;
        setPlaceholderHeight(): void;
        showChildren(): void;
        updateChildren(): void;
        updateValue(value: any): void;
        changeOtherSpread(value: any): void;
        initName(): any;
    };
}

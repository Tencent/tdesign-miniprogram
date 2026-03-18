import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class Tabbar extends SuperComponent {
    relations: RelationsOptions;
    externalClasses: string[];
    backupValue: number;
    data: {
        prefix: string;
        classPrefix: string;
        placeholderHeight: number;
    };
    properties: import("./type").TdTabBarProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        value(): void;
        'fixed, placeholder'(): void;
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        setPlaceholderHeight(): void;
        showChildren(): void;
        updateChildren(): void;
        updateValue(value: any): void;
        changeOtherSpread(value: any): void;
        initName(): any;
    };
}

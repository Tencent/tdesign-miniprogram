import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class Tabbar extends SuperComponent {
    relations: RelationsOptions;
    externalClasses: string[];
    data: {
        classPrefix: string;
        defaultNameIndex: number;
    };
    properties: import("./type").TdTabBarProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        value(): void;
    };
    /**
     * value设置为多层级标签，需要展开
     */
    ready(): void;
    methods: {
        showChildren(): void;
        updateChildren(): void;
        updateValue(value: any): void;
        changeOtherSpread(value: any): void;
        /**
         * 对于没有 name 的 item 生成一个 name
         */
        initName(): any;
    };
}

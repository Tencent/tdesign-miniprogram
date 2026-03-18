import { SuperComponent } from '../common/src/index';
import type { TreeOptionData } from '../common/common';
export default class TreeSelect extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    data: {
        prefix: string;
        classPrefix: string;
        scrollIntoView: any;
    };
    properties: import("./type").TdTreeSelectProps<TreeOptionData<string | number>>;
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        'value, customValue, options, keys, multiple'(): void;
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        buildTreeOptions(): void;
        getScrollIntoView(status: string): void;
        onRootChange(e: any): void;
        handleTreeClick(e: any): void;
        handleChange(e: any): void;
    };
}

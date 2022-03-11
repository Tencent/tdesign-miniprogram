import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class StepItem extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    relations: RelationsOptions;
    externalClasses: string[];
    properties: import("./type").TdStepItemProps;
    data: {
        classPrefix: string;
        prefix: string;
        rootClassName: string;
        parent: any;
        index: number;
        isDot: boolean;
        curStatus: string;
        layout: string;
        type: string;
        isLastChild: boolean;
        isLarge: boolean;
        readonly: boolean;
        computedIcon: string;
    };
    observers: {
        icon(val: any): void;
        curStatus(val: any): void;
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        updateStatus(current: any, index: any, theme: any, layout: any, steps: any, readonly: any): void;
        click(): void;
    };
}

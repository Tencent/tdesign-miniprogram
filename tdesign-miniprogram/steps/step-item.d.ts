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
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        updateStatus(current: any, index: any, theme: any, layout: any, steps: any): void;
        click(): void;
    };
}

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
        index: number;
        isDot: boolean;
        curStatus: string;
        layout: string;
        isLastChild: boolean;
        sequence: string;
    };
    observers: {
        status(value: any): void;
    };
    methods: {
        updateStatus({ current, currentStatus, index, theme, layout, items, sequence }: {
            current: any;
            currentStatus: any;
            index: any;
            theme: any;
            layout: any;
            items: any;
            sequence: any;
        }): void;
        onTap(): void;
    };
}

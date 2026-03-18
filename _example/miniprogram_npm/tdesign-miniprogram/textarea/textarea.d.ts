import { SuperComponent } from '../common/src/index';
export default class Textarea extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    behaviors: string[];
    externalClasses: string[];
    properties: import("./type").TdTextareaProps;
    data: {
        prefix: string;
        classPrefix: string;
        count: number;
    };
    observers: {
        value(val: any): void;
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        updateCount(val: any): void;
        updateValue(val: any): void;
        calculateValue(value: any, maxcharacter: any, maxlength: any): {
            value: any;
            count: number;
        };
        onInput(event: any): void;
        onFocus(event: any): void;
        onBlur(event: any): void;
        onConfirm(event: any): void;
        onLineChange(event: any): void;
        onKeyboardHeightChange(e: any): void;
    };
}

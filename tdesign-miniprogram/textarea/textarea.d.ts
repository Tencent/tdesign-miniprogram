import { SuperComponent } from '../common/src/index';
export default class Textarea extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    externalClasses: string[];
    properties: import("./type").TdTextareaProps;
    data: {
        inputValue: string;
        classPrefix: string;
        characterLength: number;
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        onInput(event: any): void;
        onFocus(event: any): void;
        onBlur(event: any): void;
        onConfirm(event: any): void;
        onLineChange(event: any): void;
    };
}

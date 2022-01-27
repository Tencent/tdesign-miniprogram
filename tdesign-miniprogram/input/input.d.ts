import { SuperComponent } from '../common/src/index';
export default class Input extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    externalClasses: string[];
    properties: import("./type").TdInputProps;
    data: {
        inputValue: string;
        classPrefix: string;
        classBasePrefix: string;
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
        clearInput(event: any): void;
    };
}

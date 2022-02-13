import { SuperComponent } from '../common/src/index';
export default class Input extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    externalClasses: string[];
    properties: import("./type").TdInputProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    data: {
        classPrefix: string;
        classBasePrefix: string;
        characterLength: number;
    };
    methods: {
        onInput(event: any): void;
        onFocus(event: any): void;
        onBlur(event: any): void;
        onConfirm(event: any): void;
        clearInput(event: any): void;
    };
}

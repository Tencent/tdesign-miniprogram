import { SuperComponent } from '../common/src/index';
export default class Search extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdSearchProps;
    observers: {
        focus(this: Search, nextValue: boolean): void;
    };
    data: {
        classPrefix: string;
        prefix: string;
        localValue: {
            focus: boolean;
        };
    };
    onInput(e: any): void;
    onFocus(e: any): void;
    onBlur(e: any): void;
    handleClear(): void;
    onConfirm(e: any): void;
    onCancel(): void;
}

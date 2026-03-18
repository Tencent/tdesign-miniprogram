export interface TdTextareaProps {
    adjustPosition?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    allowInputOverMax?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    autofocus?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    autosize?: {
        type: null;
        value?: boolean | {
            maxHeight?: number;
            minHeight?: number;
        };
    };
    bordered?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    confirmHold?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    confirmType?: {
        type: StringConstructor;
        value?: 'return' | 'send' | 'search' | 'next' | 'go' | 'done';
    };
    cursor?: {
        type: NumberConstructor;
        value?: number;
    };
    cursorColor?: {
        type: StringConstructor;
        value?: string;
    };
    cursorSpacing?: {
        type: NumberConstructor;
        value?: number;
    };
    disableDefaultPadding?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    fixed?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    focus?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    holdKeyboard?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    indicator?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    label?: {
        type: StringConstructor;
        value?: string;
    };
    maxcharacter?: {
        type: NumberConstructor;
        value?: number;
    };
    maxlength?: {
        type: NumberConstructor;
        value?: number;
    };
    placeholder?: {
        type: StringConstructor;
        value?: string;
    };
    placeholderClass?: {
        type: StringConstructor;
        value?: string;
    };
    placeholderStyle?: {
        type: StringConstructor;
        value?: string;
    };
    readonly?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    selectionEnd?: {
        type: NumberConstructor;
        value?: number;
    };
    selectionStart?: {
        type: NumberConstructor;
        value?: number;
    };
    showConfirmBar?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    value?: {
        type: null;
        value?: TextareaValue;
    };
    defaultValue?: {
        type: null;
        value?: TextareaValue;
    };
}
export declare type TextareaValue = string | number;

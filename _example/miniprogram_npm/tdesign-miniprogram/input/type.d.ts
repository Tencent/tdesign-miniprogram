export interface TdInputProps {
    adjustPosition?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    align?: {
        type: StringConstructor;
        value?: 'left' | 'center' | 'right';
    };
    allowInputOverMax?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    alwaysEmbed?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    autoFocus?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    borderless?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    clearTrigger?: {
        type: StringConstructor;
        value?: 'always' | 'focus';
    };
    clearable?: {
        type: null;
        value?: boolean | object;
    };
    confirmHold?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    confirmType?: {
        type: StringConstructor;
        value?: 'send' | 'search' | 'next' | 'go' | 'done';
    };
    cursor: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    cursorColor?: {
        type: StringConstructor;
        value?: string;
    };
    cursorSpacing?: {
        type: NumberConstructor;
        value?: number;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    focus?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    format?: {
        type: undefined;
        value?: InputFormatType;
    };
    holdKeyboard?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    label?: {
        type: StringConstructor;
        value?: string;
    };
    layout?: {
        type: StringConstructor;
        value?: 'vertical' | 'horizontal';
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
    placeholderStyle: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    prefixIcon?: {
        type: null;
        value?: string | object;
    };
    readonly?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    safePasswordCertPath?: {
        type: StringConstructor;
        value?: string;
    };
    safePasswordCustomHash?: {
        type: StringConstructor;
        value?: string;
    };
    safePasswordLength?: {
        type: NumberConstructor;
        value?: number;
    };
    safePasswordNonce?: {
        type: StringConstructor;
        value?: string;
    };
    safePasswordSalt?: {
        type: StringConstructor;
        value?: string;
    };
    safePasswordTimeStamp?: {
        type: NumberConstructor;
        value?: number;
    };
    selectionEnd?: {
        type: NumberConstructor;
        value?: number;
    };
    selectionStart?: {
        type: NumberConstructor;
        value?: number;
    };
    status?: {
        type: StringConstructor;
        value?: 'default' | 'success' | 'warning' | 'error';
    };
    suffix?: {
        type: StringConstructor;
        value?: string;
    };
    suffixIcon?: {
        type: null;
        value?: string | object;
    };
    tips?: {
        type: StringConstructor;
        value?: string;
    };
    type?: {
        type: StringConstructor;
        value?: 'text' | 'number' | 'idcard' | 'digit' | 'safe-password' | 'password' | 'nickname';
    };
    value?: {
        type: null;
        value?: InputValue;
    };
}
export declare type InputFormatType = (value: InputValue) => string;
export declare type InputValue = string | number;

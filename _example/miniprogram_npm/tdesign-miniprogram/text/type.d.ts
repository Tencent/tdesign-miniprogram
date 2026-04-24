export interface TdTextProps {
    code?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    content?: {
        type: StringConstructor;
        value?: string;
    };
    copyable?: {
        type: null;
        value?: boolean | TypographyCopyable;
    };
    delete?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    ellipsis?: {
        type: null;
        value?: boolean | TypographyEllipsis;
    };
    italic?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    keyboard?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    mark?: {
        type: null;
        value?: string | boolean;
    };
    strong?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    };
    underline?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export interface TypographyCopyable {
    text?: string;
    suffix?: boolean;
}
export interface TypographyEllipsis {
    collapsible?: boolean;
    expandable?: boolean;
    row?: number;
    suffix?: boolean;
}

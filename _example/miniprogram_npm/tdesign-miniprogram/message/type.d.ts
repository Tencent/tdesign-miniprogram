export interface TdMessageProps {
    align?: {
        type: StringConstructor;
        value?: MessageAlignType;
    };
    closeBtn?: {
        type: null;
        value?: string | boolean | object;
    };
    content?: {
        type: StringConstructor;
        value?: string;
    };
    duration?: {
        type: NumberConstructor;
        value?: number;
    };
    gap?: {
        type: null;
        value?: string | number | boolean;
    };
    icon?: {
        type: null;
        value?: string | boolean | object;
    };
    link?: {
        type: null;
        value?: string | object;
    };
    marquee?: {
        type: null;
        value?: boolean | MessageMarquee;
    };
    offset?: {
        type: ArrayConstructor;
        value?: Array<string | number>;
    };
    single?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: MessageThemeList;
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    defaultVisible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    zIndex?: {
        type: NumberConstructor;
        value?: number;
    };
}
export declare type MessageAlignType = 'left' | 'center';
export interface MessageMarquee {
    speed?: number;
    loop?: number;
    delay?: number;
}
export declare type MessageThemeList = 'info' | 'success' | 'warning' | 'error';

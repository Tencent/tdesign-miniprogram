export interface TdNoticeBarProps {
    content?: {
        type: null;
        value?: string | string[];
    };
    direction?: {
        type: StringConstructor;
        value?: 'horizontal' | 'vertical';
    };
    interval?: {
        type: NumberConstructor;
        value?: number;
    };
    marquee?: {
        type: null;
        value?: boolean | NoticeBarMarquee;
    };
    operation?: {
        type: StringConstructor;
        value?: string;
    };
    prefixIcon?: {
        type: null;
        value?: string | boolean | object;
    };
    suffixIcon?: {
        type: null;
        value?: string | object;
    };
    theme?: {
        type: StringConstructor;
        value?: 'info' | 'success' | 'warning' | 'error';
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    defaultVisible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export interface NoticeBarMarquee {
    speed?: number;
    loop?: number;
    delay?: number;
}

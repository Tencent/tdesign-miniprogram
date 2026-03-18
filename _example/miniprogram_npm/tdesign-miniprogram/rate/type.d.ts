export interface TdRateProps {
    allowHalf?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    color?: {
        type: null;
        value?: string | Array<string>;
    };
    count?: {
        type: NumberConstructor;
        value?: number;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    gap?: {
        type: null;
        value?: string | number;
    };
    icon?: {
        type: null;
        value?: string | string[];
    };
    iconPrefix?: {
        type: StringConstructor;
        value?: string;
    };
    placement?: {
        type: StringConstructor;
        value?: 'top' | 'bottom' | '';
    };
    showText?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    size?: {
        type: StringConstructor;
        value?: string;
    };
    texts?: {
        type: ArrayConstructor;
        value?: Array<string>;
    };
    value?: {
        type: NumberConstructor;
        value?: number;
    };
    defaultValue?: {
        type: NumberConstructor;
        value?: number;
    };
    variant?: {
        type: StringConstructor;
        value?: 'outline' | 'filled';
    };
}

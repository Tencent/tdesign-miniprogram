export interface TdTabBarProps {
    bordered?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    fixed?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    placeholder?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    safeAreaInsetBottom?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    shape?: {
        type: StringConstructor;
        value?: 'normal' | 'round';
    };
    split?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'normal' | 'tag';
    };
    value?: {
        type: null;
        value?: string | number | Array<string | number>;
    };
    defaultValue?: {
        type: null;
        value?: string | number | Array<string | number>;
    };
    zIndex?: {
        type: NumberConstructor;
        value?: number;
    };
}

export interface TdStepsProps {
    current?: {
        type: null;
        value?: string | number;
    };
    defaultCurrent?: {
        type: null;
        value?: string | number;
    };
    currentStatus?: {
        type: StringConstructor;
        value?: 'default' | 'process' | 'finish' | 'error';
    };
    layout?: {
        type: StringConstructor;
        value?: 'horizontal' | 'vertical';
    };
    readonly?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    sequence?: {
        type: StringConstructor;
        value?: 'positive' | 'reverse';
    };
    theme?: {
        type: StringConstructor;
        value?: 'default' | 'dot';
    };
}

export interface TdBackTopProps {
    fixed?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    icon?: {
        type: null;
        value?: string | boolean | object;
    };
    scrollTop?: {
        type: NumberConstructor;
        value?: number;
    };
    text?: {
        type: StringConstructor;
        value?: string;
    };
    theme?: {
        type: StringConstructor;
        value?: 'round' | 'half-round' | 'round-dark' | 'half-round-dark';
    };
    visibilityHeight?: {
        type: NumberConstructor;
        value?: number;
    };
}

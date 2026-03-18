export interface TdProgressProps {
    color?: {
        type: null;
        value?: string | Array<string> | Record<string, string>;
    };
    label?: {
        type: null;
        value?: string | boolean;
    };
    percentage?: {
        type: NumberConstructor;
        value?: number;
    };
    size?: {
        type: null;
        value?: string | number;
    };
    status?: {
        type: StringConstructor;
        value?: ProgressStatus;
    };
    strokeWidth?: {
        type: null;
        value?: string | number;
    };
    theme?: {
        type: StringConstructor;
        value?: ProgressTheme;
    };
    trackColor?: {
        type: StringConstructor;
        value?: string;
    };
}
export declare type ProgressStatus = 'success' | 'error' | 'warning' | 'active';
export declare type ProgressTheme = 'line' | 'plump' | 'circle';

export interface TdStepItemProps {
    content?: {
        type: StringConstructor;
        value?: string;
    };
    extra?: {
        type: StringConstructor;
        value?: string;
    };
    icon?: {
        type: StringConstructor;
        value?: string;
    };
    status?: {
        type: StringConstructor;
        value?: StepStatus;
    };
    title?: {
        type: StringConstructor;
        value?: string;
    };
}
export declare type StepStatus = 'default' | 'process' | 'finish' | 'error';

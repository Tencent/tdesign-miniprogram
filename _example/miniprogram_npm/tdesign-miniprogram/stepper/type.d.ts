import { SizeEnum } from '../common/common';
export interface TdStepperProps {
    disableInput?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    inputWidth?: {
        type: NumberConstructor;
        value?: number;
    };
    integer?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    max?: {
        type: NumberConstructor;
        value?: number;
    };
    min?: {
        type: NumberConstructor;
        value?: number;
    };
    size?: {
        type: StringConstructor;
        value?: SizeEnum;
    };
    step?: {
        type: NumberConstructor;
        value?: number;
    };
    theme?: {
        type: StringConstructor;
        value?: 'normal' | 'filled' | 'outline';
    };
    value?: {
        type: null;
        value?: string | number;
    };
    defaultValue?: {
        type: null;
        value?: string | number;
    };
}

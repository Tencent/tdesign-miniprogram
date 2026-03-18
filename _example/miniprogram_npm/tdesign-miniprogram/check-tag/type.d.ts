import { SizeEnum } from '../common/common';
export interface TdCheckTagProps {
    checked?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    defaultChecked?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    closable?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    content?: {
        type: null;
        value?: string | number | string[];
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    icon?: {
        type: null;
        value?: string | object;
    };
    shape?: {
        type: StringConstructor;
        value?: 'square' | 'round' | 'mark';
    };
    size?: {
        type: StringConstructor;
        value?: SizeEnum;
    };
    variant?: {
        type: StringConstructor;
        value?: 'dark' | 'light' | 'outline' | 'light-outline';
    };
}

import { FormRule } from '../form/index';
export interface TdFormItemProps {
    arrow?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    help?: {
        type: StringConstructor;
        value?: string;
    };
    label?: {
        type: StringConstructor;
        value?: string;
    };
    labelAlign?: {
        type: StringConstructor;
        value?: 'left' | 'right' | 'top';
    };
    labelWidth?: {
        type: null;
        value?: string | number;
    };
    name?: {
        type: StringConstructor;
        value?: string;
    };
    requiredMark?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    rules?: {
        type: ArrayConstructor;
        value?: Array<FormRule>;
    };
    showErrorMessage?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}

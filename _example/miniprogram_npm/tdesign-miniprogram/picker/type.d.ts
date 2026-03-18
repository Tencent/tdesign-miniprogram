import { PopupProps } from '../popup/index';
import { KeysType } from '../common/common';
export interface TdPickerProps {
    autoClose?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    cancelBtn?: {
        type: null;
        value?: boolean | string;
    };
    confirmBtn?: {
        type: null;
        value?: boolean | string;
    };
    header?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    itemHeight?: {
        type: NumberConstructor;
        value?: number;
    };
    keys?: {
        type: ObjectConstructor;
        value?: KeysType;
    };
    popupProps?: {
        type: ObjectConstructor;
        value?: PopupProps;
    };
    title?: {
        type: StringConstructor;
        value?: string;
    };
    usePopup?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    usingCustomNavbar?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    value?: {
        type: ArrayConstructor;
        value?: Array<PickerValue>;
    };
    defaultValue?: {
        type: ArrayConstructor;
        value?: Array<PickerValue>;
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    visibleItemCount?: {
        type: NumberConstructor;
        value?: number;
    };
}
export declare type PickerValue = string | number;

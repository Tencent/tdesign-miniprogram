import { PopupProps } from '../popup/index';
export interface TdActionSheetProps {
    align?: {
        type: StringConstructor;
        value?: 'center' | 'left';
    };
    cancelText?: {
        type: StringConstructor;
        value?: string;
    };
    count?: {
        type: NumberConstructor;
        value?: number;
    };
    description?: {
        type: StringConstructor;
        value?: string;
    };
    items: {
        type: ArrayConstructor;
        value?: Array<string | ActionSheetItem>;
        required?: boolean;
    };
    popupProps?: {
        type: ObjectConstructor;
        value?: PopupProps;
    };
    showCancel?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    showOverlay?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'list' | 'grid';
    };
    usingCustomNavbar?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    defaultVisible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export interface ActionSheetItem {
    label: string;
    description?: string;
    color?: string;
    disabled?: boolean;
    icon?: string | object;
    suffixIcon?: string | object;
}

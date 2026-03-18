import { ButtonProps } from '../button/index';
import { OverlayProps } from '../overlay/index';
export interface TdDialogProps {
    actions?: {
        type: ArrayConstructor;
        value?: Array<ButtonProps>;
    };
    buttonLayout?: {
        type: StringConstructor;
        value?: 'horizontal' | 'vertical';
    };
    cancelBtn?: {
        type: null;
        value?: string | ButtonProps | null;
    };
    closeBtn?: {
        type: null;
        value?: boolean | ButtonProps | null;
    };
    closeOnOverlayClick?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    confirmBtn?: {
        type: null;
        value?: string | ButtonProps | null;
    };
    content?: {
        type: StringConstructor;
        value?: string;
    };
    overlayProps?: {
        type: ObjectConstructor;
        value?: OverlayProps;
    };
    preventScrollThrough?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    showOverlay?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    title?: {
        type: StringConstructor;
        value?: string;
    };
    usingCustomNavbar?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    zIndex?: {
        type: NumberConstructor;
        value?: number;
    };
}

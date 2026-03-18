import { OverlayProps } from '../overlay/index';
export interface TdPopupProps {
    closeBtn?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    closeOnOverlayClick?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    content?: {
        type: StringConstructor;
        value?: string;
    };
    duration?: {
        type: NumberConstructor;
        value?: number;
    };
    overlayProps?: {
        type: ObjectConstructor;
        value?: OverlayProps;
    };
    placement?: {
        type: StringConstructor;
        value?: 'top' | 'left' | 'right' | 'bottom' | 'center';
    };
    preventScrollThrough?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    showOverlay?: {
        type: BooleanConstructor;
        value?: boolean;
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
    zIndex?: {
        type: NumberConstructor;
        value?: number;
    };
}

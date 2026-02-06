import { OverlayProps } from '../overlay/index';
export interface TdDrawerProps {
    closeOnOverlayClick?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    destroyOnClose?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    items?: {
        type: ArrayConstructor;
        value?: DrawerItem[];
    };
    overlayProps?: {
        type: ObjectConstructor;
        value?: OverlayProps;
    };
    placement?: {
        type: StringConstructor;
        value?: 'left' | 'right';
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
export interface DrawerItem {
    title: string;
    icon: string;
}

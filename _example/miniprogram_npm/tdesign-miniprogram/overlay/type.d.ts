export interface TdOverlayProps {
    backgroundColor?: {
        type: StringConstructor;
        value?: string;
    };
    duration?: {
        type: NumberConstructor;
        value?: number;
    };
    preventScrollThrough?: {
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
    zIndex?: {
        type: NumberConstructor;
        value?: number;
    };
}

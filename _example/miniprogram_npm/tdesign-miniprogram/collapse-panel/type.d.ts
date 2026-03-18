export interface TdCollapsePanelProps {
    content?: {
        type: StringConstructor;
        value?: string;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    expandIcon?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    header?: {
        type: StringConstructor;
        value?: string;
    };
    headerLeftIcon?: {
        type: StringConstructor;
        value?: string;
    };
    headerRightContent?: {
        type: StringConstructor;
        value?: string;
    };
    placement?: {
        type: StringConstructor;
        value?: 'bottom' | 'top';
    };
    value?: {
        type: null;
        value?: string | number;
    };
}

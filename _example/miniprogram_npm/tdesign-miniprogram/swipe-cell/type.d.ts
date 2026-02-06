export interface TdSwipeCellProps {
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    left?: {
        type: ArrayConstructor;
        value?: Array<SwipeActionItem>;
    };
    opened?: {
        type: null;
        value?: boolean | Array<boolean>;
    };
    right?: {
        type: ArrayConstructor;
        value?: Array<SwipeActionItem>;
    };
}
export interface SwipeActionItem {
    text?: string;
    icon?: string | object;
    className?: string;
    style?: string;
    onClick?: () => void;
    [key: string]: any;
}

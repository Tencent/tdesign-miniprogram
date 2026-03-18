export interface TdTransitionProps {
    appear?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    destoryOnHide?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    durations?: {
        type: null;
        value?: number | number[];
    };
    name?: {
        type: StringConstructor;
        value?: string;
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}

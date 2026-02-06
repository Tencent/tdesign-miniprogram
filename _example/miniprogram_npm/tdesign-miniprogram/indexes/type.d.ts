export interface TdIndexesProps {
    current?: {
        type: null;
        value?: string | number;
    };
    defaultCurrent?: {
        type: null;
        value?: string | number;
    };
    indexList?: {
        type: ArrayConstructor;
        value?: Array<string | number>;
    };
    sticky?: {
        type: BooleanConstructor;
        value?: Boolean;
    };
    stickyOffset?: {
        type: NumberConstructor;
        value?: number;
    };
}

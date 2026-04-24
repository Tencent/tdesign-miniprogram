export interface TdSegmentedProps {
    block?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    options?: {
        type: ObjectConstructor;
        value?: string[] | number[] | SegmentedItem[];
    };
    value?: {
        type: null;
        value?: string | number;
    };
    defaultValue?: {
        type: null;
        value?: string | number;
    };
}
export interface SegmentedItem {
    value: string | number;
    label?: string;
    icon?: string | object;
    disabled?: boolean;
}

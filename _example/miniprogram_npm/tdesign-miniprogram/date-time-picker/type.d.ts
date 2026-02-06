import { PopupProps } from '../popup/index';
export interface TdDateTimePickerProps {
    autoClose?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    cancelBtn?: {
        type: StringConstructor;
        value?: string;
    };
    confirmBtn?: {
        type: StringConstructor;
        value?: string;
    };
    customLocale?: {
        type: StringConstructor;
        value?: string;
    };
    end?: {
        type: null;
        value?: string | number;
    };
    filter?: {
        type: undefined;
        value?: (type: TimeModeValues, columns: DateTimePickerColumn) => DateTimePickerColumn;
    };
    format?: {
        type: StringConstructor;
        value?: string;
    };
    formatter?: {
        type: undefined;
        value?: (option: DateTimePickerColumnItem, columnIndex: number) => DateTimePickerColumnItem;
    };
    header?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    mode?: {
        type: null;
        value?: DateTimePickerMode;
    };
    popupProps?: {
        type: ObjectConstructor;
        value?: PopupProps;
    };
    showWeek?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    start?: {
        type: null;
        value?: string | number;
    };
    steps?: {
        type: ObjectConstructor;
        value?: {
            [key in TimeModeValues]?: number;
        };
    };
    title?: {
        type: StringConstructor;
        value?: string;
    };
    usePopup?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    value?: {
        type: null;
        value?: DateValue;
    };
    defaultValue?: {
        type: null;
        value?: DateValue;
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export declare type DateTimePickerColumn = DateTimePickerColumnItem[];
export interface DateTimePickerColumnItem {
    label: string;
    value: string;
}
export declare type DateTimePickerMode = TimeModeValues | Array<TimeModeValues>;
export declare type TimeModeValues = 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second';
export declare type DateValue = string | number;

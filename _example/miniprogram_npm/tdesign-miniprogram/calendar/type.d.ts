import { ButtonProps } from '../button/index';
export interface TdCalendarProps {
    allowSameDay?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    autoClose?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    confirmBtn?: {
        type: null;
        value?: string | ButtonProps | null;
    };
    firstDayOfWeek?: {
        type: NumberConstructor;
        value?: number;
    };
    format?: {
        type: undefined;
        value?: CalendarFormatType;
    };
    localeText?: {
        type: ObjectConstructor;
        value?: CalendarLocaleText;
    };
    maxDate?: {
        type: NumberConstructor;
        value?: number;
    };
    minDate?: {
        type: NumberConstructor;
        value?: number;
    };
    readonly?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    switchMode?: {
        type: StringConstructor;
        value?: 'none' | 'month' | 'year-month';
    };
    title?: {
        type: StringConstructor;
        value?: string;
    };
    type?: {
        type: StringConstructor;
        value?: 'single' | 'multiple' | 'range';
    };
    usePopup?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    usingCustomNavbar?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    value?: {
        type: null;
        value?: number | number[];
    };
    defaultValue?: {
        type: null;
        value?: number | number[];
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export declare type CalendarFormatType = (day: TDate) => TDate;
export declare type TDateType = 'selected' | 'disabled' | 'start' | 'start-end' | 'centre' | 'end' | '';
export interface TDate {
    date: Date;
    day: number;
    type: TDateType;
    className?: string;
    prefix?: string;
    suffix?: string;
}
export interface CalendarLocaleText {
    title?: string;
    weekdays?: string[];
    monthTitle?: string;
    months?: string[];
    confirm?: string;
}

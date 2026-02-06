import type { Dayjs } from 'dayjs';
import { SuperComponent } from '../common/src/index';
declare enum ModeItem {
    YEAR = "year",
    MONTH = "month",
    DATE = "date",
    HOUR = "hour",
    MINUTE = "minute",
    SECOND = "second"
}
interface ColumnItemValue {
    value: string | number;
    label: string | number;
}
export default class DateTimePicker extends SuperComponent {
    properties: import("./type").TdDateTimePickerProps;
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    observers: {
        'start, end, value': () => void;
        customLocale(v: any): void;
        mode(m: any): void;
    };
    date: any;
    data: {
        prefix: string;
        classPrefix: string;
        columns: any[];
        columnsValue: any[];
        fullModes: any[];
        locale: any;
        dayjsLocale: any;
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    methods: {
        updateColumns(): void;
        getDaysOfWeekInMonth(date: Dayjs, type: string): Array<{
            value: string;
            label: string;
        }>;
        getParseDate(): Dayjs;
        normalize(val: string | number, defaultDay: Dayjs): Dayjs;
        getMinDate(): Dayjs;
        getMaxDate(): Dayjs;
        getDateRect(type?: string): any[];
        getDate(): Dayjs;
        clipDate(date: Dayjs): Dayjs;
        setYear(date: Dayjs, year: number): Dayjs;
        setMonth(date: Dayjs, month: number): Dayjs;
        getColumnOptions(): any[];
        getOptionByType(type: string): any;
        getYearOptions(dateParams: any): ColumnItemValue[];
        getOptionEdge(minOrMax: 'min' | 'max', type: any): any;
        getMonthOptions(): ColumnItemValue[];
        getDayOptions(): ColumnItemValue[];
        getHourOptions(): ColumnItemValue[];
        getMinuteOptions(): ColumnItemValue[];
        getValueCols(this: DateTimePicker): {
            columns: any;
            columnsValue: any;
        };
        getColumnsValue(): string[];
        getNewDate(value: number, type: ModeItem): Dayjs;
        onColumnChange(e: WechatMiniprogram.CustomEvent): void;
        onConfirm(): void;
        onCancel(): void;
        onVisibleChange(e: any): void;
        onClose(e: any): void;
        resetColumns(): void;
    };
    getFullModeArray(mode: any): any;
    getFullModeByModeString(modeString: any, matchModes: any): any;
    isTimeMode(): boolean;
}
export {};

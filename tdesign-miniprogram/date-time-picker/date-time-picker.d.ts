import type { Dayjs } from 'dayjs';
import { SuperComponent } from '../common/src/index';
/**
 *
mode 数组 [日期选择器的最后一个时间点，时间选择器的最后一个时间点]
[year] ------ 年
[month] ------ 年/月
[date] ------ 年/月/日
[hour] ------ 年/月/日/小时
[minute] ------ 年/月/日/小时/分钟

[year, hour] ------ 年/小时
[year, minute] ------ 年/小时/分钟
[month, hour] ------ 年/月/小时
[month, minute] ------ 年/月/小时/分钟
[date, hour] ------ 年/月/日/小时
[date, minute] ------ 年/月/日/小时/分钟
 */
declare enum ModeType {
    YEAR = "year",
    MONTH = "month",
    DATE = "date",
    HOUR = "hour",
    MINUTE = "minute",
    YEAR_ADD_HOUR = "year+hour",
    YEAR_ADD_MINUTE = "year+minute",
    MONTH_ADD_HOUR = "month+hour",
    MONTH_ADD_MINUTE = "month+minute",
    MONTH_ADD_DATE = "month+date",
    DATE_ADD_HOUR = "date+hour",
    DATE_ADD_MINUTE = "date+minute",
    NULL_HOUR = "null+hour",
    NULL_MINUTE = "null+minute"
}
interface ColumnItemValue {
    type: string;
    value: string | number;
    label: string | number;
}
export default class DateTimePicker extends SuperComponent {
    properties: import("./type").TdDateTimePickerProps;
    externalClasses: string[];
    observers: {
        value(): void;
        mode(m: any): void;
    };
    data: {
        date: any;
        columns: any[];
        columnsValue: any[];
        modeName: string;
        locale: {
            year: string;
            month: string;
            day: string;
            hour: string;
            minute: string;
            am: string;
            pm: string;
            confirm: string;
            cancel: string;
        };
    };
    methods: {
        updateColumns(): void;
        getModeNameByPropsMode(mode: any): ModeType;
        getMinDate(): Dayjs;
        getMaxDate(): Dayjs;
        getMinYear(): number;
        getMaxYear(): number;
        getMinMonth(): number;
        getMaxMonth(): number;
        getMinDay(): number;
        getMaxDay(): number;
        getMinHour(): number;
        getMaxHour(): number;
        getMinMinute(): number;
        getMaxMinute(): number;
        getDate(): Dayjs;
        clipDate(date: any): Dayjs;
        setYear(date: Dayjs, year: number): Dayjs;
        setMonth(date: Dayjs, month: number): Dayjs;
        getDateData(): Array<ColumnItemValue[]>;
        getValueCols(this: DateTimePicker): {
            columns: any;
            columnsValue: any;
        };
        getColumnsValue(): string[];
        getNewDate(value: number, type: ModeType): Dayjs;
        onColumnChange(e: WechatMiniprogram.CustomEvent): void;
        onConfirm(): void;
        onCancel(): void;
    };
}
export {};

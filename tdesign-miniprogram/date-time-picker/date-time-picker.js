var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import dayjs from 'dayjs';
import { SuperComponent, wxComponent } from '../common/src/index';
import defaultLocale from './locale/zh';
import props from './props';
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
var ModeType;
(function (ModeType) {
    ModeType["YEAR"] = "year";
    ModeType["MONTH"] = "month";
    ModeType["DATE"] = "date";
    ModeType["HOUR"] = "hour";
    ModeType["MINUTE"] = "minute";
    ModeType["YEAR_ADD_HOUR"] = "year+hour";
    ModeType["YEAR_ADD_MINUTE"] = "year+minute";
    ModeType["MONTH_ADD_HOUR"] = "month+hour";
    ModeType["MONTH_ADD_MINUTE"] = "month+minute";
    ModeType["MONTH_ADD_DATE"] = "month+date";
    ModeType["DATE_ADD_HOUR"] = "date+hour";
    ModeType["DATE_ADD_MINUTE"] = "date+minute";
    ModeType["NULL_HOUR"] = "null+hour";
    ModeType["NULL_MINUTE"] = "null+minute";
})(ModeType || (ModeType = {}));
const DEFAULT_MIN_DATE = dayjs('2000-01-01 00:00:00');
const DEFAULT_MAX_DATE = dayjs('2030-12-31 23:59:59');
let DateTimePicker = class DateTimePicker extends SuperComponent {
    constructor() {
        super(...arguments);
        this.properties = props;
        this.externalClasses = ['t-class', 't-class-confirm', 't-class-cancel', 't-class-title'];
        this.observers = {
            // value 变化需要同步 内部 date 实现受控属性
            value() {
                this.updateColumns();
            },
            mode(m) {
                const modeName = this.getModeNameByPropsMode(m);
                this.setData({
                    modeName,
                });
                this.updateColumns();
            },
        };
        this.data = {
            date: null,
            columns: [],
            columnsValue: [],
            modeName: 'date',
            locale: defaultLocale,
        };
        this.methods = {
            updateColumns() {
                const { value } = this.properties;
                const parseDate = dayjs(value || DEFAULT_MIN_DATE);
                this.setData({
                    date: parseDate,
                });
                const { columns, columnsValue } = this.getValueCols();
                this.setData({
                    columns,
                    columnsValue,
                });
            },
            getModeNameByPropsMode(mode) {
                return mode.join('+');
            },
            getMinDate() {
                const { disableDate } = this.properties;
                const startDate = disableDate === null || disableDate === void 0 ? void 0 : disableDate.before;
                return startDate ? dayjs(startDate) : DEFAULT_MIN_DATE;
            },
            getMaxDate() {
                const { disableDate } = this.properties;
                const endDate = disableDate === null || disableDate === void 0 ? void 0 : disableDate.after;
                return endDate ? dayjs(endDate) : DEFAULT_MAX_DATE;
            },
            getMinYear() {
                return this.getMinDate().year();
            },
            getMaxYear() {
                return this.getMaxDate().year();
            },
            getMinMonth() {
                return this.getMinDate().month();
            },
            getMaxMonth() {
                return this.getMaxDate().month();
            },
            getMinDay() {
                return this.getMinDate().date();
            },
            getMaxDay() {
                return this.getMaxDate().date();
            },
            getMinHour() {
                return this.getMinDate().hour();
            },
            getMaxHour() {
                return this.getMaxDate().hour();
            },
            getMinMinute() {
                return this.getMinDate().minute();
            },
            getMaxMinute() {
                return this.getMaxDate().minute();
            },
            getDate() {
                var _a;
                return this.clipDate(((_a = this.data) === null || _a === void 0 ? void 0 : _a.date) || DEFAULT_MIN_DATE);
            },
            // 数据裁减 确保数据不越界
            clipDate(date) {
                const minDate = this.getMinDate();
                const maxDate = this.getMaxDate();
                return dayjs(Math.min(Math.max(minDate.valueOf(), date.valueOf()), maxDate.valueOf()));
            },
            // 年变化时 需要修正 日数据  例如 2 月的 28 | 29
            setYear(date, year) {
                const beforeMonthDays = date.date();
                const afterMonthDays = date.year(year).daysInMonth();
                const tempDate = date.date(Math.min(beforeMonthDays.valueOf(), afterMonthDays.valueOf()));
                return tempDate.year(year);
            },
            // 月变化时 需要修正 日数据边界
            setMonth(date, month) {
                const beforeMonthDays = date.date();
                const afterMonthDays = date.month(month).daysInMonth();
                const tempDate = date.date(Math.min(beforeMonthDays.valueOf(), afterMonthDays.valueOf()));
                return tempDate.month(month);
            },
            getDateData() {
                const { modeName, locale } = this.data;
                const date = this.getDate();
                const selYear = date.year();
                const selMonth = date.month();
                const selDate = date.date();
                const selHour = date.hour();
                const minDateYear = this.getMinYear();
                const maxDateYear = this.getMaxYear();
                const minDateMonth = this.getMinMonth();
                const maxDateMonth = this.getMaxMonth();
                const minDateDay = this.getMinDay();
                const maxDateDay = this.getMaxDay();
                const minDateHour = this.getMinHour();
                const maxDateHour = this.getMaxHour();
                const minDateMinute = this.getMinMinute();
                const maxDateMinute = this.getMaxMinute();
                // 年处理
                const years = [];
                for (let i = minDateYear; i <= maxDateYear; i += 1) {
                    years.push({
                        type: ModeType.YEAR,
                        value: `${i}`,
                        label: `${i + locale.year}`,
                    });
                }
                if (modeName === ModeType.YEAR) {
                    return [years];
                }
                // 月处理
                const months = [];
                let minMonth = 0;
                let maxMonth = 11;
                if (minDateYear === selYear) {
                    minMonth = minDateMonth;
                }
                if (maxDateYear === selYear) {
                    maxMonth = maxDateMonth;
                }
                for (let i = minMonth; i <= maxMonth; i += 1) {
                    months.push({
                        type: ModeType.MONTH,
                        value: `${i}`,
                        label: `${i + 1 + locale.month}`,
                    });
                }
                if (modeName === ModeType.MONTH) {
                    return [years, months];
                }
                // 日处理
                const days = [];
                let minDay = 1;
                let maxDay = date.daysInMonth();
                if (minDateYear === selYear && minDateMonth === selMonth) {
                    minDay = minDateDay;
                }
                if (maxDateYear === selYear && maxDateMonth === selMonth) {
                    maxDay = maxDateDay;
                }
                for (let i = minDay; i <= maxDay; i += 1) {
                    days.push({
                        type: ModeType.DATE,
                        value: `${i}`,
                        label: `${i + locale.day}`,
                    });
                }
                if (modeName === ModeType.DATE) {
                    return [years, months, days];
                }
                // 小时
                const hours = [];
                let minHour = 0;
                let maxHour = 23;
                if (minDateYear === selYear && minDateMonth === selMonth && minDateDay === selDate) {
                    minHour = minDateHour;
                }
                if (maxDateYear === selYear && maxDateMonth === selMonth && maxDateDay === selDate) {
                    maxHour = maxDateHour;
                }
                for (let i = minHour; i <= maxHour; i += 1) {
                    hours.push({
                        type: ModeType.HOUR,
                        value: `${i}`,
                        label: `${i + locale.hour}`,
                    });
                }
                // 分钟
                const minutes = [];
                let minMinute = 0;
                let maxMinute = 59;
                if (minDateYear === selYear &&
                    minDateMonth === selMonth &&
                    minDateDay === selDate &&
                    minHour === selHour) {
                    minMinute = minDateMinute;
                }
                if (maxDateYear === selYear &&
                    maxDateMonth === selMonth &&
                    maxDateDay === selDate &&
                    maxHour === selHour) {
                    maxMinute = maxDateMinute;
                }
                for (let i = minMinute; i <= maxMinute; i += 1) {
                    minutes.push({
                        type: ModeType.MINUTE,
                        value: `${i}`,
                        label: `${i + locale.minute}`,
                    });
                }
                if (modeName === ModeType.MINUTE || modeName === ModeType.DATE_ADD_MINUTE) {
                    return [years, months, days, hours, minutes];
                }
                if (modeName === ModeType.YEAR_ADD_HOUR) {
                    return [years, hours];
                }
                if (modeName === ModeType.YEAR_ADD_MINUTE) {
                    return [years, hours, minutes];
                }
                if (modeName === ModeType.MONTH_ADD_HOUR) {
                    return [years, months, hours];
                }
                if (modeName === ModeType.MONTH_ADD_MINUTE) {
                    return [years, months, hours, minutes];
                }
                if (modeName === ModeType.DATE_ADD_HOUR) {
                    return [years, months, days, hours];
                }
                if (modeName === ModeType.NULL_HOUR) {
                    return [hours];
                }
                if (modeName === ModeType.NULL_MINUTE) {
                    return [hours, minutes];
                }
                if (modeName === ModeType.MONTH_ADD_DATE) {
                    return [months, days];
                }
            },
            getValueCols() {
                return {
                    columns: this.getDateData(),
                    columnsValue: this.getColumnsValue(),
                };
            },
            getColumnsValue() {
                const { modeName } = this.data;
                const date = this.getDate();
                const mode2Value = {
                    [`${ModeType.YEAR}`]: [`${date.year()}`],
                    [`${ModeType.MONTH}`]: [`${date.year()}`, `${date.month()}`],
                    [`${ModeType.DATE}`]: [`${date.year()}`, `${date.month()}`, `${date.date()}`],
                    [`${ModeType.HOUR}`]: [
                        `${date.year()}`,
                        `${date.month()}`,
                        `${date.date()}`,
                        `${date.hour()}`,
                    ],
                    [`${ModeType.MINUTE}`]: [
                        `${date.year()}`,
                        `${date.month()}`,
                        `${date.date()}`,
                        `${date.hour()}`,
                        `${date.minute()}`,
                    ],
                    [`${ModeType.YEAR_ADD_HOUR}`]: [`${date.year()}`, `${date.hour()}`],
                    [`${ModeType.YEAR_ADD_MINUTE}`]: [`${date.year()}`, `${date.hour()}`, `${date.minute()}`],
                    [`${ModeType.MONTH_ADD_HOUR}`]: [`${date.year()}`, `${date.month()}`, `${date.hour()}`],
                    [`${ModeType.MONTH_ADD_MINUTE}`]: [
                        `${date.year()}`,
                        `${date.month()}`,
                        `${date.hour()}`,
                        `${date.minute()}`,
                    ],
                    [`${ModeType.DATE_ADD_HOUR}`]: [
                        `${date.year()}`,
                        `${date.month()}`,
                        `${date.date()}`,
                        `${date.hour()}`,
                    ],
                    [`${ModeType.DATE_ADD_MINUTE}`]: [
                        `${date.year()}`,
                        `${date.month()}`,
                        `${date.date()}`,
                        `${date.hour()}`,
                        `${date.minute()}`,
                    ],
                    [`${ModeType.NULL_HOUR}`]: [`${date.hour()}`],
                    [`${ModeType.NULL_MINUTE}`]: [`${date.hour()}`, `${date.minute()}`],
                    [`${ModeType.MONTH_ADD_DATE}`]: [`${date.month()}`, `${date.date()}`],
                };
                if (mode2Value[modeName] === undefined) {
                    throw new Error('mode 输入项有误');
                }
                return mode2Value[modeName];
            },
            getNewDate(value, type) {
                let newValue = this.getDate();
                switch (type) {
                    case ModeType.YEAR:
                        newValue = this.setYear(newValue, value);
                        break;
                    case ModeType.MONTH:
                        newValue = this.setMonth(newValue, value);
                        break;
                    case ModeType.DATE:
                        newValue = newValue.date(value);
                        break;
                    case ModeType.HOUR:
                        newValue = newValue.hour(value);
                        break;
                    case ModeType.MINUTE:
                        newValue = newValue.minute(value);
                        break;
                    default:
                        break;
                }
                return this.clipDate(newValue);
            },
            onColumnChange(e) {
                const { value, column } = e === null || e === void 0 ? void 0 : e.detail;
                const newValue = this.getNewDate(parseInt(value === null || value === void 0 ? void 0 : value.value, 10), value === null || value === void 0 ? void 0 : value.type);
                this.setData({
                    date: newValue,
                });
                const { columns, columnsValue } = this.getValueCols();
                this.setData({
                    columns,
                    columnsValue,
                });
                this.triggerEvent('column-change', { column, value });
            },
            onConfirm() {
                const { format } = this.properties;
                const date = this.getDate();
                this.triggerEvent('confirm', { value: date, formatValue: date.format(format) });
            },
            onCancel() {
                const { value } = this.properties;
                const parseDate = dayjs(value || DEFAULT_MIN_DATE);
                this.setData({
                    date: parseDate,
                });
                const { columns, columnsValue } = this.getValueCols();
                this.setData({
                    columns,
                    columnsValue,
                });
                this.triggerEvent('cancel');
            },
        };
    }
};
DateTimePicker = __decorate([
    wxComponent()
], DateTimePicker);
export default DateTimePicker;

//# sourceMappingURL=date-time-picker.js.map

import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { SuperComponent, wxComponent } from '../common/src/index';
import defaultLocale from './locale/zh';

import props from './props';
import { DisableDateObj } from './type';

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

enum ModeType {
  YEAR = 'year', // 年
  MONTH = 'month', // 年/月
  DATE = 'date', // 年/月/日
  HOUR = 'hour', //  年/月/日/小时
  MINUTE = 'minute', // 年/月/日/小时/分钟

  YEAR_ADD_HOUR = 'year+hour', // 年/小时
  YEAR_ADD_MINUTE = 'year+minute', // 年/小时/分钟
  MONTH_ADD_HOUR = 'month+hour', // 年/月/小时
  MONTH_ADD_MINUTE = 'month+minute', // 年/月/小时/分钟
  MONTH_ADD_DATE = 'month+date', // 月/日
  DATE_ADD_HOUR = 'date+hour', // 年/月/日/小时
  DATE_ADD_MINUTE = 'date+minute', // 年/月/日/小时/分钟

  NULL_HOUR = 'null+hour', // 小时
  NULL_MINUTE = 'null+minute', // 小时 + 分钟
}
interface ColumnItemValue {
  type: string;
  value: string | number;
  label: string | number;
}

const DEFAULT_MIN_DATE: Dayjs = dayjs('2000-01-01 00:00:00');
const DEFAULT_MAX_DATE: Dayjs = dayjs('2030-12-31 23:59:59');

@wxComponent()
export default class DateTimePicker extends SuperComponent {
  properties = props;

  externalClasses = ['t-class', 't-class-confirm', 't-class-cancel', 't-class-title'];

  options = {
    multipleSlots: true,
  };

  observers = {
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

  data = {
    date: null,
    columns: [],
    columnsValue: [],
    modeName: 'date',
    locale: defaultLocale,
  };

  methods = {
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

    getModeNameByPropsMode(mode): ModeType {
      return mode.join('+');
    },

    getMinDate(): Dayjs {
      const { disableDate } = this.properties;
      const startDate = (disableDate as DisableDateObj)?.before;
      return startDate ? dayjs(startDate) : DEFAULT_MIN_DATE;
    },

    getMaxDate(): Dayjs {
      const { disableDate } = this.properties;
      const endDate = (disableDate as DisableDateObj)?.after;
      return endDate ? dayjs(endDate) : DEFAULT_MAX_DATE;
    },

    getMinYear(): number {
      return this.getMinDate().year();
    },

    getMaxYear(): number {
      return this.getMaxDate().year();
    },

    getMinMonth(): number {
      return this.getMinDate().month();
    },

    getMaxMonth(): number {
      return this.getMaxDate().month();
    },

    getMinDay(): number {
      return this.getMinDate().date();
    },

    getMaxDay(): number {
      return this.getMaxDate().date();
    },

    getMinHour(): number {
      return this.getMinDate().hour();
    },

    getMaxHour(): number {
      return this.getMaxDate().hour();
    },

    getMinMinute(): number {
      return this.getMinDate().minute();
    },

    getMaxMinute(): number {
      return this.getMaxDate().minute();
    },

    getDate(): Dayjs {
      return this.clipDate(this.data?.date || DEFAULT_MIN_DATE);
    },

    // 数据裁减 确保数据不越界
    clipDate(date): Dayjs {
      const minDate: Dayjs = this.getMinDate();
      const maxDate: Dayjs = this.getMaxDate();
      return dayjs(Math.min(Math.max(minDate.valueOf(), date.valueOf()), maxDate.valueOf()));
    },

    // 年变化时 需要修正 日数据  例如 2 月的 28 | 29
    setYear(date: Dayjs, year: number): Dayjs {
      const beforeMonthDays = date.date();
      const afterMonthDays = date.year(year).daysInMonth();

      const tempDate = date.date(Math.min(beforeMonthDays.valueOf(), afterMonthDays.valueOf()));
      return tempDate.year(year);
    },

    // 月变化时 需要修正 日数据边界
    setMonth(date: Dayjs, month: number): Dayjs {
      const beforeMonthDays = date.date();
      const afterMonthDays = date.month(month).daysInMonth();

      const tempDate = date.date(Math.min(beforeMonthDays.valueOf(), afterMonthDays.valueOf()));
      return tempDate.month(month);
    },

    getDateData(): Array<ColumnItemValue[]> {
      const { modeName, locale } = this.data;
      const date: Dayjs = this.getDate();

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
      const years: ColumnItemValue[] = [];
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
      const months: ColumnItemValue[] = [];
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
      const days: ColumnItemValue[] = [];
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
      const hours: ColumnItemValue[] = [];
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
      const minutes: ColumnItemValue[] = [];
      let minMinute = 0;
      let maxMinute = 59;

      if (minDateYear === selYear && minDateMonth === selMonth && minDateDay === selDate && minHour === selHour) {
        minMinute = minDateMinute;
      }

      if (maxDateYear === selYear && maxDateMonth === selMonth && maxDateDay === selDate && maxHour === selHour) {
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

    getValueCols(this: DateTimePicker) {
      return {
        columns: this.getDateData(),
        columnsValue: this.getColumnsValue(),
      };
    },

    getColumnsValue(): string[] {
      const { modeName } = this.data;
      const date: Dayjs = this.getDate();

      const mode2Value = {
        [`${ModeType.YEAR}`]: [`${date.year()}`],
        [`${ModeType.MONTH}`]: [`${date.year()}`, `${date.month()}`],
        [`${ModeType.DATE}`]: [`${date.year()}`, `${date.month()}`, `${date.date()}`],
        [`${ModeType.HOUR}`]: [`${date.year()}`, `${date.month()}`, `${date.date()}`, `${date.hour()}`],
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
        [`${ModeType.MONTH_ADD_MINUTE}`]: [`${date.year()}`, `${date.month()}`, `${date.hour()}`, `${date.minute()}`],
        [`${ModeType.DATE_ADD_HOUR}`]: [`${date.year()}`, `${date.month()}`, `${date.date()}`, `${date.hour()}`],
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

    getNewDate(value: number, type: ModeType): Dayjs {
      let newValue: Dayjs = this.getDate();

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

    onColumnChange(e: WechatMiniprogram.CustomEvent) {
      const { value, column } = e?.detail;
      const { format } = this.properties;
      const date = this.getDate();

      const newValue = this.getNewDate(parseInt(value?.value, 10), value?.type);

      this.setData({
        date: newValue,
      });

      const { columns, columnsValue } = this.getValueCols();

      this.setData({
        columns,
        columnsValue,
      });

      this.triggerEvent('column-change', { index: column, value });
      this.triggerEvent('change', { value: date, formatValue: date.format(format) });
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

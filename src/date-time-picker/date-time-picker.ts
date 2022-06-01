import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';
import defaultLocale from './locale/zh';

import props from './props';

const { prefix } = config;

enum ModeItem {
  YEAR = 'year',
  MONTH = 'month',
  DATE = 'date',
  HOUR = 'hour',
  MINUTE = 'minute',
}

const DATE_MODES = ['year', 'month', 'date'];
const TIME_MODES = ['hour', 'minute'];
const FULL_MODES = [...DATE_MODES, ...TIME_MODES];

const DEFAULT_MIN_DATE: Dayjs = dayjs('2000-01-01 00:00:00');
const DEFAULT_MAX_DATE: Dayjs = dayjs('2030-12-31 23:59:59');

interface ColumnItemValue {
  value: string | number;
  label: string | number;
}

@wxComponent()
export default class DateTimePicker extends SuperComponent {
  properties = props;

  externalClasses = [`${prefix}-class`, `${prefix}-class-confirm`, `${prefix}-class-cancel`, `${prefix}-class-title`];

  options = {
    multipleSlots: true,
  };

  initValue = null;

  observers = {
    'start, end, value': function () {
      this.updateColumns();
    },

    mode(m) {
      const fullModes = this.getFullModeArray(m);
      this.setData({
        fullModes,
      });
      this.updateColumns();
    },
  };

  data = {
    prefix,
    date: null,
    columns: [],
    columnsValue: [],
    fullModes: [],
    locale: defaultLocale,
  };

  lifetimes = {
    attached() {
      const { value, defaultValue } = this.properties;

      if (value == null && defaultValue != null) {
        this.initValue = defaultValue;
      }
    },
  };

  methods = {
    updateColumns() {
      const parseDate = this.getParseDate();

      this.setData({
        date: parseDate,
      });

      const { columns, columnsValue } = this.getValueCols();
      this.setData({
        columns,
        columnsValue,
      });
    },

    getParseDate() {
      const { value, defaultValue } = this.properties;
      const minDate = this.getMinDate();

      const isTimeMode = this.isTimeMode();
      let currentValue = this.initValue || value || defaultValue;

      // 时间需要补齐前缀
      if (isTimeMode) {
        const dateStr = dayjs(minDate).format('YYYY-MM-DD');
        currentValue = dayjs(`${dateStr} ${currentValue}`);
      }

      const parseDate = dayjs(currentValue || minDate);
      const isDateValid = parseDate.isValid();

      return isDateValid ? parseDate : minDate;
    },

    getMinDate(): Dayjs {
      const { start } = this.properties;
      return start ? dayjs(start) : DEFAULT_MIN_DATE;
    },

    getMaxDate(): Dayjs {
      const { end } = this.properties;
      return end ? dayjs(end) : DEFAULT_MAX_DATE;
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

    getColumnOptions() {
      const { fullModes } = this.data;
      const dateParams = this.getCommonDateParams();

      const columnOptions = [];
      fullModes?.forEach((mode) => {
        const columnOption = this.getOptionByType(mode, dateParams);
        columnOptions.push(columnOption);
      });

      return columnOptions;
    },

    getCommonDateParams() {
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

      return {
        date,
        selYear,
        selMonth,
        selDate,
        selHour,
        minDateYear,
        maxDateYear,
        minDateMonth,
        maxDateMonth,
        minDateDay,
        maxDateDay,
        minDateHour,
        maxDateHour,
        minDateMinute,
        maxDateMinute,
      };
    },

    getOptionByType(type, dateParams) {
      switch (type) {
        case ModeItem.YEAR:
          return this.getYearOptions(dateParams);
        case ModeItem.MONTH:
          return this.getMonthOptions(dateParams);
        case ModeItem.DATE:
          return this.getDayOptions(dateParams);
        case ModeItem.HOUR:
          return this.getHourOptions(dateParams);
        case ModeItem.MINUTE:
          return this.getMinuteOptions(dateParams);
        default:
          break;
      }
    },

    getYearOptions(dateParams): ColumnItemValue[] {
      const { locale } = this.data;
      const { minDateYear, maxDateYear } = dateParams || {};

      const years: ColumnItemValue[] = [];
      for (let i = minDateYear; i <= maxDateYear; i += 1) {
        years.push({
          value: `${i}`,
          label: `${i + locale.year}`,
        });
      }
      return years;
    },

    getMonthOptions(dateParams): ColumnItemValue[] {
      const { locale } = this.data;
      const { minDateYear, maxDateYear, selYear, minDateMonth, maxDateMonth } = dateParams || {};
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
          value: `${i}`,
          label: `${i + 1 + locale.month}`,
        });
      }

      return months;
    },

    getDayOptions(dateParams): ColumnItemValue[] {
      const { locale } = this.data;
      const { minDateYear, maxDateYear, minDateMonth, maxDateMonth, minDateDay, maxDateDay, selYear, selMonth, date } =
        dateParams || {};
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
          value: `${i}`,
          label: `${i + locale.day}`,
        });
      }

      return days;
    },

    getHourOptions(dateParams) {
      const { locale } = this.data;
      const {
        minDateYear,
        maxDateYear,
        minDateMonth,
        maxDateMonth,
        minDateDay,
        minDateHour,
        maxDateDay,
        maxDateHour,
        selYear,
        selMonth,
        selDate,
      } = dateParams || {};

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
          value: `${i}`,
          label: `${i + locale.hour}`,
        });
      }

      return hours;
    },

    getMinuteOptions(dateParams) {
      const { locale } = this.data;
      const {
        minDateYear,
        maxDateYear,
        minDateMonth,
        maxDateMonth,
        minDateDay,
        maxDateDay,
        minDateHour,
        maxDateHour,
        minDateMinute,
        maxDateMinute,
        selYear,
        selMonth,
        selDate,
        selHour,
      } = dateParams || {};

      const minutes: ColumnItemValue[] = [];
      let minMinute = 0;
      let maxMinute = 59;

      if (minDateYear === selYear && minDateMonth === selMonth && minDateDay === selDate && minDateHour === selHour) {
        minMinute = minDateMinute;
      }

      if (maxDateYear === selYear && maxDateMonth === selMonth && maxDateDay === selDate && maxDateHour === selHour) {
        maxMinute = maxDateMinute;
      }

      for (let i = minMinute; i <= maxMinute; i += 1) {
        minutes.push({
          value: `${i}`,
          label: `${i + locale.minute}`,
        });
      }

      return minutes;
    },

    getValueCols(this: DateTimePicker) {
      return {
        columns: this.getColumnOptions(),
        columnsValue: this.getColumnsValue(),
      };
    },

    getColumnsValue(): string[] {
      const { fullModes } = this.data;
      const date: Dayjs = this.getDate();

      const columnsValue = [];

      fullModes?.forEach((mode) => {
        columnsValue.push(`${date[mode]()}`);
      });

      return columnsValue;
    },

    getNewDate(value: number, type: ModeItem): Dayjs {
      let newValue: Dayjs = this.getDate();

      switch (type) {
        case ModeItem.YEAR:
          newValue = this.setYear(newValue, value);
          break;
        case ModeItem.MONTH:
          newValue = this.setMonth(newValue, value);
          break;
        case ModeItem.DATE:
          newValue = newValue.date(value);
          break;
        case ModeItem.HOUR:
          newValue = newValue.hour(value);
          break;
        case ModeItem.MINUTE:
          newValue = newValue.minute(value);
          break;
        default:
          break;
      }

      return this.clipDate(newValue);
    },

    onColumnChange(e: WechatMiniprogram.CustomEvent) {
      const { value, column } = e?.detail;
      const { fullModes, format } = this.data;

      const columnValue = value?.[column];
      const columnType = fullModes?.[column];

      const newValue = this.getNewDate(parseInt(columnValue, 10), columnType);

      this.setData({
        date: newValue,
      });

      const { columns, columnsValue } = this.getValueCols();

      this.setData({
        columns,
        columnsValue,
      });

      const date = this.getDate();
      const pickValue = format ? date.format(format) : date.valueOf();

      this.triggerEvent('pick', { value: pickValue });
    },

    onConfirm() {
      const { format } = this.properties;
      const date = this.getDate();

      const value = format ? date.format(format) : date.valueOf();
      this.triggerEvent('change', { value });
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

  // 将简写的 mode 转化成枚举值
  getFullModeArray(mode) {
    // 简易模式
    if (typeof mode === 'string' || mode instanceof String) {
      return this.getFullModeByModeString(mode, FULL_MODES);
    }

    // 高级模式
    if (Array.isArray(mode)) {
      if (mode?.length === 1) {
        return this.getFullModeByModeString(mode[0], FULL_MODES);
      }

      if (mode?.length === 2) {
        const dateModes = this.getFullModeByModeString(mode[0], DATE_MODES);
        const timeModes = this.getFullModeByModeString(mode[1], TIME_MODES);
        return [...dateModes, ...timeModes];
      }
    }
  }

  getFullModeByModeString(modeString, matchModes) {
    if (!modeString) {
      return [];
    }

    const endIndex = matchModes?.findIndex((mode) => modeString === mode);
    return matchModes?.slice(0, endIndex + 1);
  }

  // 仅展示时或者时分 需要单独特殊处理
  isTimeMode() {
    const { fullModes } = this.data;
    return fullModes[0] === ModeItem.HOUR;
  }
}

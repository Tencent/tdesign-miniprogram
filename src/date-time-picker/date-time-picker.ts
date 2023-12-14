import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';

import props from './props';
import dayjsLocaleMap from './locale/dayjs';
/**
 * dayjs LocaleData 插件
 * https://dayjs.fenxianglu.cn/category/plugin.html#localedata
 */
dayjs.extend(localeData);
// 设置 demo 的默认语言为 zh
dayjs.locale('zh-cn');

// const defaultLocale = dayjsLocaleMap.default.key;
const defaultLocale = dayjsLocaleMap[dayjs.locale()]?.key || dayjsLocaleMap.default?.key;

const { prefix } = config;
const name = `${prefix}-date-time-picker`;

enum ModeItem {
  YEAR = 'year',
  MONTH = 'month',
  DATE = 'date',
  HOUR = 'hour',
  MINUTE = 'minute',
  SECOND = 'second',
}

const DATE_MODES = ['year', 'month', 'date'];
const TIME_MODES = ['hour', 'minute', 'second'];
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

  observers = {
    'start, end, value': function () {
      this.updateColumns();
    },

    customLocale(v) {
      if (!v || !dayjsLocaleMap[v].key) return;
      this.setData({
        locale: dayjsLocaleMap[v].i18n,
        dayjsLocale: dayjsLocaleMap[v].key,
      });
    },

    mode(m) {
      const fullModes = this.getFullModeArray(m);
      this.setData({
        fullModes,
      });
      this.updateColumns();
    },
  };

  date = null;

  data = {
    prefix,
    classPrefix: name,
    columns: [],
    columnsValue: [],
    fullModes: [],
    locale: dayjsLocaleMap[defaultLocale].i18n, // 国际化语言包
    dayjsLocale: dayjsLocaleMap[defaultLocale].key, // dayjs 自适应的 key
  };

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  methods = {
    updateColumns() {
      this.date = this.getParseDate();

      const { columns, columnsValue } = this.getValueCols();
      this.setData({
        columns,
        columnsValue,
      });
    },

    getParseDate(): Dayjs {
      const { value, defaultValue } = this.properties;
      const minDate = this.getMinDate();

      const isTimeMode = this.isTimeMode();
      let currentValue = value || defaultValue;

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

    getDateRect(type = 'default') {
      const map = {
        min: 'getMinDate',
        max: 'getMaxDate',
        default: 'getDate',
      };
      const date = this[map[type]]();
      const keys = ['year', 'month', 'date', 'hour', 'minute', 'second'];

      return keys.map((k) => date[k]?.());
    },

    getDate(): Dayjs {
      return this.clipDate(this?.date || DEFAULT_MIN_DATE);
    },

    // 数据裁减 确保数据不越界
    clipDate(date: Dayjs): Dayjs {
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

      const columnOptions = [];
      fullModes?.forEach((mode) => {
        const columnOption = this.getOptionByType(mode);
        columnOptions.push(columnOption);
      });

      return columnOptions;
    },

    getOptionByType(type) {
      const { locale, steps } = this.data;
      const options: ColumnItemValue[] = [];

      const minEdge = this.getOptionEdge('min', type);
      const maxEdge = this.getOptionEdge('max', type);
      const step = steps?.[type] ?? 1;
      const dayjsMonthsShort = dayjs().locale(this.data.dayjsLocale).localeData().monthsShort();

      for (let i = minEdge; i <= maxEdge; i += step) {
        options.push({
          value: `${i}`,
          label: type === 'month' ? dayjsMonthsShort[i] : `${i + locale[type]}`,
        });
      }

      return options;
    },

    getYearOptions(dateParams): ColumnItemValue[] {
      const { locale } = this.data;
      const { minDateYear, maxDateYear } = dateParams;

      const years: ColumnItemValue[] = [];
      for (let i = minDateYear; i <= maxDateYear; i += 1) {
        years.push({
          value: `${i}`,
          label: `${i + locale.year}`,
        });
      }
      return years;
    },

    getOptionEdge(minOrMax: 'min' | 'max', type) {
      const selDateArray = this.getDateRect();
      const compareArray = this.getDateRect(minOrMax);
      const edge = {
        month: [0, 11],
        date: [1, this.getDate().daysInMonth()],
        hour: [0, 23],
        minute: [0, 59],
        second: [0, 59],
      };
      const types = ['year', 'month', 'date', 'hour', 'minute', 'second'];

      for (let i = 0, size = selDateArray.length; i < size; i += 1) {
        if (types[i] === type) return compareArray[i];
        if (compareArray[i] !== selDateArray[i]) return edge[type][minOrMax === 'min' ? 0 : 1];
      }
      return edge[type][minOrMax === 'min' ? 0 : 1];
    },

    getMonthOptions(): ColumnItemValue[] {
      const months: ColumnItemValue[] = [];

      const minMonth = this.getOptionEdge('min', 'month');
      const maxMonth = this.getOptionEdge('max', 'month');
      const dayjsMonthsShort = dayjs.monthsShort();

      for (let i = minMonth; i <= maxMonth; i += 1) {
        months.push({
          value: `${i}`,
          label: dayjsMonthsShort[i],
        });
      }

      return months;
    },

    getDayOptions(): ColumnItemValue[] {
      const { locale } = this.data;
      const days: ColumnItemValue[] = [];
      const minDay = this.getOptionEdge('min', 'date');
      const maxDay = this.getOptionEdge('max', 'date');

      for (let i = minDay; i <= maxDay; i += 1) {
        days.push({
          value: `${i}`,
          label: `${i + locale.day}`,
        });
      }

      return days;
    },

    getHourOptions() {
      const { locale } = this.data;
      const hours: ColumnItemValue[] = [];
      const minHour = this.getOptionEdge('min', 'hour');
      const maxHour = this.getOptionEdge('max', 'hour');

      for (let i = minHour; i <= maxHour; i += 1) {
        hours.push({
          value: `${i}`,
          label: `${i + locale.hour}`,
        });
      }

      return hours;
    },

    getMinuteOptions() {
      const { locale } = this.data;
      const minutes: ColumnItemValue[] = [];
      const minMinute = this.getOptionEdge('min', 'minute');
      const maxMinute = this.getOptionEdge('max', 'minute');

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
        case ModeItem.SECOND:
          newValue = newValue.second(value);
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

      this.date = newValue;

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
      this._trigger('change', { value });
      this.triggerEvent('confirm', { value });
      this.resetColumns();
    },

    onCancel() {
      this.resetColumns();
      this.triggerEvent('cancel');
    },

    onVisibleChange(e) {
      if (!e.detail.visible) {
        this.resetColumns();
      }
    },

    onClose(e) {
      const { trigger } = e.detail;

      this.triggerEvent('close', { trigger });
    },

    resetColumns() {
      const parseDate = this.getParseDate();

      this.date = parseDate;

      const { columns, columnsValue } = this.getValueCols();

      this.setData({
        columns,
        columnsValue,
      });
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

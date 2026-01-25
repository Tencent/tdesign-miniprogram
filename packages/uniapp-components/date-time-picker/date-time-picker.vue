<template>
  <view>
    <t-picker
      :custom-style="tools._style([customStyle])"
      :class="tClass + ' ' + classPrefix"
      :visible="visible"
      :value="columnsValue"
      :header="header"
      :title="title"
      :auto-close="autoClose"
      :confirm-btn="confirmBtn || locale.confirm"
      :cancel-btn="cancelBtn || locale.cancel"
      :use-popup="usePopup"
      :popup-props="popupProps"
      @pick="onColumnChange"
      @confirm="onConfirm"
      @cancel="onCancel"
      @visible-change="onVisibleChange"
      @close="onClose"
    >
      <template
        #header
      >
        <slot
          name="header"
        />
      </template>

      <t-picker-item
        v-for="(item, index) in columns"
        :key="index"
        :class="tools.cls(classPrefix + '__item', [['roomly', columns.length >= 5 && index == 0]])"
        :use-slots="false"
        :options="item"
        index="index"
        :format="formatter"
      />
      <template
        #footer
      >
        <slot
          name="footer"
        />
      </template>
    </t-picker>
  </view>
</template>
<script>
import TPicker from '../picker/picker';
import TPickerItem from '../picker-item/picker-item';
import { prefix } from '../common/config';
import { coalesce } from '../common/utils';
import { uniComponent } from '../common/src/index';
import props from './props';
import dayjsLocaleMap from './locale/dayjs';
import tools from '../common/utils.wxs';
import dayjs from '../npm/dayjs/esm/index.js';
import localeData from '../npm/dayjs/esm/plugin/localeData';

/**
 * dayjs LocaleData 插件
 * https://dayjs.fenxianglu.cn/category/plugin.html#localedata
 */
dayjs.extend(localeData);
dayjs.locale('zh-cn');

const defaultLocale = dayjsLocaleMap[dayjs.locale()]?.key || dayjsLocaleMap.default?.key;


const name = `${prefix}-date-time-picker`;

const ModeItem = {
  YEAR: 'year',
  MONTH: 'month',
  DATE: 'date',
  HOUR: 'hour',
  MINUTE: 'minute',
  SECOND: 'second',
};

const DATE_MODES = ['year', 'month', 'date'];
const TIME_MODES = ['hour', 'minute', 'second'];
const FULL_MODES = [...DATE_MODES, ...TIME_MODES];

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [
    {
      key: 'value',
      event: 'change',
    },
  ],
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-confirm`,
    `${prefix}-class-cancel`,
    `${prefix}-class-title`,
  ],
  components: {
    TPicker,
    TPickerItem,
  },
  props: {
    ...props,
  },
  emits: [
    'update:visible',
  ],
  data() {
    return {
      prefix,
      classPrefix: name,
      columns: [],
      columnsValue: [],
      fullModes: [],
      locale: dayjsLocaleMap[defaultLocale].i18n, // 国际化语言包
      dayjsLocale: dayjsLocaleMap[defaultLocale].key, // dayjs 自适应的 key
      tools,

      dataValue: coalesce(this.value, this.defaultValue),

      date: null,
    };
  },
  watch: {
    value: {
      handler(v) {
        this.dataValue = v;
      },
      immediate: true,
      deep: true,
    },

    start: 'updateColumns',
    end: 'updateColumns',
    dataValue: 'updateColumns',

    customLocale: {
      handler(v) {
        if (!v || !dayjsLocaleMap[v].key) return;
        this.locale = dayjsLocaleMap[v].i18n;
        this.dayjsLocale = dayjsLocaleMap[v].key;
      },
      immediate: true,
    },

    mode: {
      handler(v, prev) {
        // 解决 pick 事件触发两次问题
        const checkEqual = () => {
          if (!prev) return false;
          let result = false;
          try {
            result = JSON.stringify(v) === JSON.stringify(prev);
          } catch (e) {
            return result;
          }
          return result;
        };
        if (checkEqual()) return;

        const fullModes = this.getFullModeArray(v);
        this.fullModes = fullModes;
        this.updateColumns();
      },
      immediate: true,
    },
  },
  created() {
    // created 时机并不准，uniapp 自己 mock 的
    // this.date = null;
  },
  mounted() {

  },
  methods: {
    updateColumns() {
      this.date = this.getParseDate();

      const { columns, columnsValue } = this.getValueCols();
      this.columns = columns,
      this.columnsValue = columnsValue;
    },

    getDaysOfWeekInMonth(date, type) {
      const { locale, steps, dayjsLocale } = this;
      const startOfMonth = date.startOf('month');
      const minEdge = this.getOptionEdge('min', type);
      const maxEdge = this.getOptionEdge('max', type);
      const step = coalesce(steps?.[type], 1);
      const daysOfWeek = [];

      for (let i = minEdge; i <= maxEdge; i += step) {
        const currentDate = startOfMonth.date(i).locale(dayjsLocale);
        const dayName = currentDate.format('ddd');
        daysOfWeek.push({
          value: `${i}`,
          label: `${i}${locale.date || ''} ${dayName}`,
        });
      }

      return daysOfWeek;
    },

    getParseDate() {
      const { dataValue } = this;
      const minDate = this.getMinDate();

      const isTimeMode = this.isTimeMode();
      let currentValue = dataValue;

      // 时间需要补齐前缀
      if (isTimeMode) {
        const dateStr = dayjs(minDate).format('YYYY-MM-DD');
        currentValue = dayjs(`${dateStr} ${currentValue}`);
      }

      const parseDate = dayjs(currentValue || minDate);
      const isDateValid = parseDate.isValid();

      return isDateValid ? parseDate : minDate;
    },

    normalize(val, defaultDay) {
      return val && dayjs(val).isValid() ? dayjs(val) : defaultDay;
    },

    getMinDate() {
      return this.normalize(this.start, dayjs().subtract(10, 'year'));
    },

    getMaxDate() {
      return this.normalize(this.end, dayjs().add(10, 'year'));
    },

    getDateRect(type = 'default') {
      const map = {
        min: 'getMinDate',
        max: 'getMaxDate',
        default: 'getDate',
      };
      const date = this[map[type]]();
      const keys = ['year', 'month', 'date', 'hour', 'minute', 'second'];

      return keys.map(k => date[k]?.());
    },

    getDate() {
      return this.clipDate(this?.date || this.getMinDate());
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

    getColumnOptions() {
      const { fullModes, filter } = this;

      const columnOptions = [];
      fullModes?.forEach((mode) => {
        const columnOption = this.getOptionByType(mode);
        if (typeof filter === 'function') {
          columnOptions.push(filter(mode, columnOption));
        } else {
          columnOptions.push(columnOption);
        }
      });
      return columnOptions;
    },

    getOptionByType(type) {
      const { locale, steps, showWeek } = this;
      const options = [];

      const minEdge = this.getOptionEdge('min', type);
      const maxEdge = this.getOptionEdge('max', type);
      const step = coalesce(steps?.[type], 1);
      const dayjsMonthsShort = dayjs().locale(this.dayjsLocale)
        .localeData()
        .monthsShort();

      if (type === 'date' && showWeek) {
        return this.getDaysOfWeekInMonth(this.date, type);
      }

      for (let i = minEdge; i <= maxEdge; i += step) {
        options.push({
          value: `${i}`,
          label: type === 'month' ? dayjsMonthsShort[i] : `${i + locale[type]}`,
        });
      }

      return options;
    },

    getYearOptions(dateParams) {
      const { locale } = this;
      const { minDateYear, maxDateYear } = dateParams;

      const years = [];
      for (let i = minDateYear; i <= maxDateYear; i += 1) {
        years.push({
          value: `${i}`,
          label: `${i + locale.year}`,
        });
      }
      return years;
    },

    getOptionEdge(minOrMax, type) {
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

    getMonthOptions() {
      const months = [];

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

    getDayOptions() {
      const { locale } = this;
      const days = [];
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
      const { locale } = this;
      const hours = [];
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
      const { locale } = this;
      const minutes = [];
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

    getValueCols() {
      return {
        columns: this.getColumnOptions(),
        columnsValue: this.getColumnsValue(),
      };
    },

    getColumnsValue() {
      const { fullModes } = this;
      const date = this.getDate();

      const columnsValue = [];

      fullModes?.forEach((mode) => {
        columnsValue.push(`${date[mode]()}`);
      });

      return columnsValue;
    },

    getNewDate(value, type) {
      let newValue = this.getDate();

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

    onColumnChange(e) {
      const { value, column } = e;
      const { fullModes, format } = this;

      const columnValue = value?.[column];
      const columnType = fullModes?.[column];

      const newValue = this.getNewDate(parseInt(columnValue, 10), columnType);

      this.date = newValue;

      const { columns, columnsValue } = this.getValueCols();

      this.columns = columns;
      this.columnsValue = columnsValue;

      const date = this.getDate();
      const pickValue = format ? date.format(format) : date.valueOf();

      this.$emit('pick', { value: pickValue });
    },

    onConfirm() {
      const { format } = this;
      const date = this.getDate();

      const value = format ? date.format(format) : date.valueOf();
      this._trigger('change', { value });
      this.$emit('confirm', { value });
      this.resetColumns();
    },

    onCancel() {
      this.resetColumns();
      this.$emit('cancel');
    },

    onVisibleChange(e) {
      if (!e.visible) {
        this.resetColumns();
      }
    },

    onClose(e) {
      const { trigger } = e;

      this.$emit('close', { trigger });
      this.$emit('update:visible', false);
    },

    resetColumns() {
      const parseDate = this.getParseDate();

      this.date = parseDate;

      const { columns, columnsValue } = this.getValueCols();

      this.columns = columns;
      this.columnsValue = columnsValue;
    },

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
    },

    getFullModeByModeString(modeString, matchModes) {
      if (!modeString) {
        return [];
      }

      const endIndex = matchModes?.findIndex(mode => modeString === mode);
      return matchModes?.slice(0, endIndex + 1);
    },

    // 仅展示时或者时分 需要单独特殊处理
    isTimeMode() {
      const { fullModes } = this;
      return fullModes[0] === ModeItem.HOUR;
    },
  },


});
</script>
<style scoped>
@import './date-time-picker.css';
</style>

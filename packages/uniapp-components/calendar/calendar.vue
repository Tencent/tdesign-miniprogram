<template>
  <view>
    <t-popup
      v-if="usePopup"
      :visible="visible"
      :using-custom-navbar="usingCustomNavbar"
      :custom-navbar-height="customNavbarHeight"
      placement="bottom"
      @visible-change="onVisibleChange"
    >
      <CalendarTemplate
        :class-prefix="classPrefix"
        :use-popup="usePopup"
        :switch-mode="switchMode"
        :t-class="tClass"
        :custom-style="tools._style([customStyle])"
        :title="title"
        :real-local-text="realLocalText"
        :months="months"
        :current-month="currentMonth"
        :action-buttons="actionButtons"
        :days="days"
        :scroll-into-view="scrollIntoView"
        :first-day-of-week="firstDayOfWeek"
        :inner-confirm-btn="innerConfirmBtn"
        @scroll="onScroll"
        @close="handleClose"
        @select="handleSelect"
        @clickButton="onTplButtonTap"
        @handleSwitchModeChange="handleSwitchModeChange"
      >
        <template #confirm-btn>
          <slot name="confirm-btn" />
        </template>
        <template #title>
          <slot name="title" />
        </template>
      </CalendarTemplate>
    </t-popup>
    <block v-else>
      <CalendarTemplate
        :class-prefix="classPrefix"
        :use-popup="usePopup"
        :switch-mode="switchMode"
        :t-class="tClass"
        :custom-style="tools._style([customStyle])"
        :title="title"
        :real-local-text="realLocalText"
        :months="months"
        :current-month="currentMonth"
        :action-buttons="actionButtons"
        :days="days"
        :scroll-into-view="scrollIntoView"
        :first-day-of-week="firstDayOfWeek"
        :inner-confirm-btn="innerConfirmBtn"
        @scroll="onScroll"
        @close="handleClose"
        @select="handleSelect"
        @clickButton="onTplButtonTap"
        @handleSwitchModeChange="handleSwitchModeChange"
      >
        <template #confirm-btn>
          <slot name="confirm-btn" />
        </template>
        <template #title>
          <slot name="title" />
        </template>
      </CalendarTemplate>
    </block>
  </view>
</template>
<script>
import TPopup from '../popup/popup';
import TButton from '../button/button';
import TIcon from '../icon/icon';
import CalendarTemplate from './template.vue';

import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import { coalesce } from '../common/utils';

import props from './props';
import TCalendar from '../common/shared/calendar/index';
import useCustomNavbar from '../mixins/using-custom-navbar';
import { getPrevMonth, getPrevYear, getNextMonth, getNextYear } from './utils';
import tools from '../common/utils.wxs';
import {
  getMonthTitle,
  getDateLabel,
  isDateSelected,
} from './computed.js';


const name = `${prefix}-calendar`;


const defaultLocaleText = {
  title: '请选择日期',
  weekdays: ['日', '一', '二', '三', '四', '五', '六'],
  monthTitle: '{year} 年 {month}',
  months: ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月'],
  confirm: '确认',
};

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [
    {
      key: 'value',
      event: 'confirm',
    },
    {
      key: 'value',
      event: 'change',
    },
  ],
  externalClasses: [
    `${prefix}-class`,
  ],
  mixins: [useCustomNavbar],
  components: {
    TPopup,
    TButton,
    TIcon,
    CalendarTemplate,
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
      months: [],
      scrollIntoView: '',
      innerConfirmBtn: {},
      realLocalText: {},
      currentMonth: {},
      actionButtons: {
        preYearBtnDisable: false,
        prevMonthBtnDisable: false,
        nextMonthBtnDisable: false,
        nextYearBtnDisable: false,
      },
      tools,

      dataVisible: this.visible,
      dataValue: coalesce(this.value, this.defaultValue),
      days: [],
    };
  },
  watch: {
    type: {
      handler(v) {
        this.base.type = v;
      },
    },

    allowSameDay(v) {
      this.base.allowSameDay = v;
    },

    confirmBtn: {
      handler(v) {
        if (typeof v === 'string') {
          this.innerConfirmBtn = v === 'slot' ? 'slot' : { content: v };
        } else if (typeof v === 'object') {
          this.innerConfirmBtn = v;
        }
      },
      immediate: true,
    },

    firstDayOfWeek: 'onWatchMinMaxDate',
    minDate: 'onWatchMinMaxDate',
    maxDate: 'onWatchMinMaxDate',

    value: {
      handler(v) {
        this.dataValue = v;
      },
      immediate: true,
      deep: true,
    },

    visible: {
      handler(v) {
        this.dataVisible = v;
      },
      immediate: true,
    },

    dataValue: {
      handler(v) {
        this.base.value = v;
        this.calcMonths();
        this.updateCurrentMonth(Array.isArray(v) ? v[0] : v);
      },
      deep: true,
    },

    dataVisible: {
      handler(v) {
        if (v) {
          this.onScrollIntoView();
          this.base.value = this.dataValue;
          this.calcMonths();
        }
      },
      immediate: true,
    },
    format: {
      handler(v) {
        const { usePopup, dataVisible: visible } = this;

        if (this.base) {
          this.base.format = v;
        }

        if (!usePopup || visible) {
          this.calcMonths();
        }
      },
      immediate: true,
    },
  },
  created() {
    const values = Object.keys(props).reduce((acc, key) => ({
      ...acc,
      [key]: this[key],
    }));
    this.base = new TCalendar(values);
  },

  mounted() {
    const realLocalText = { ...defaultLocaleText, ...this.localeText };
    this.initialValue();
    this.onWatchMinMaxDate();
    this.days = this.base.getDays(realLocalText.weekdays);
    this.realLocalText = realLocalText;

    this.calcMonths();
    this.updateCurrentMonth();

    if (!this.usePopup) {
      this.onScrollIntoView();
    }
  },
  methods: {
    getMonthTitle,
    getDateLabel,
    isDateSelected,
    initialValue() {
      const { dataValue: value, type, minDate } = this;

      if (!value) {
        const today = new Date();
        const now = minDate || new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime(); // 获取 0 点的时间戳
        const initialValue = type === 'single' ? now : [now];

        if (type === 'range') {
          initialValue[1] = now + 24 * 3600 * 1000; // 第二天
        }

        this.dataValue = initialValue;
        this.base.value = initialValue;
      }
    },

    onScrollIntoView() {
      const { dataValue: value } = this;

      if (!value) return;

      const date = new Date(Array.isArray(value) ? value[0] : value);

      if (date) {
        this.scrollIntoView = `year_${date.getFullYear()}_month_${date.getMonth()}`;
      }
    },

    getCurrentYearAndMonth(v) {
      const date = new Date(v);
      return { year: date.getFullYear(), month: date.getMonth() };
    },

    updateActionButton(value) {
      const _min = this.getCurrentYearAndMonth(this.base.minDate);
      const _max = this.getCurrentYearAndMonth(this.base.maxDate);
      const _value = this.getCurrentYearAndMonth(value);

      const _minTimestamp = new Date(_min.year, _min.month, 1).getTime();
      const _maxTimestamp = new Date(_max.year, _max.month, 1).getTime();
      const _dateValue = new Date(_value.year, _value.month, 1);

      const _prevYearTimestamp = getPrevYear(_dateValue).getTime();
      const _prevMonthTimestamp = getPrevMonth(_dateValue).getTime();
      const _nextMonthTimestamp = getNextMonth(_dateValue).getTime();
      const _nextYearTimestamp = getNextYear(_dateValue).getTime();

      const preYearBtnDisable = _prevYearTimestamp < _minTimestamp || _prevMonthTimestamp < _minTimestamp;
      const prevMonthBtnDisable = _prevMonthTimestamp < _minTimestamp;
      const nextYearBtnDisable = _nextMonthTimestamp > _maxTimestamp || _nextYearTimestamp > _maxTimestamp;
      const nextMonthBtnDisable = _nextMonthTimestamp > _maxTimestamp;

      this.actionButtons = {
        preYearBtnDisable,
        prevMonthBtnDisable,
        nextYearBtnDisable,
        nextMonthBtnDisable,
      };
    },

    updateCurrentMonth(newValue) {
      if (this.switchMode === 'none') return;
      this.calcCurrentMonth(newValue);
    },

    calcCurrentMonth(newValue) {
      const date = newValue || this.getCurrentDate();
      const { year, month } = this.getCurrentYearAndMonth(date);
      const currentMonth = this.months.filter(item => item.year === year && item.month === month);

      this.updateActionButton(date);

      this.currentMonth = currentMonth.length > 0 ? currentMonth : [this.months[0]];
    },

    calcMonths() {
      if (!this.base) return;

      const months = this.base.getMonths();

      this.months = months;
    },

    close(trigger) {
      if (this.autoClose) {
        this.$emit('update:visible', false);
        this.dataVisible = false;
      }
      this.$emit('close', { trigger });
    },

    onVisibleChange() {
      this.close('overlay');
    },

    handleClose() {
      this.close('close-btn');
    },

    handleSelect(e) {
      const { readonly } = this;
      const { date, year, month } = e.currentTarget.dataset;

      if (date.type === 'disabled' || readonly) return;

      const rawValue = this.base.select({ cellType: date.type, year, month, date: date.day });

      const value = this.toTime(rawValue);

      this.calcMonths();
      this.updateCurrentMonth();

      if (this.confirmBtn == null) {
        // 不显示确认按钮，则选择完即关闭 popup
        if (this.type === 'single' || rawValue.length === 2) {
          this.dataVisible = false;
          this._trigger('change', { value }); // 受控
        }
      }

      this.$emit('select', { value });
    },

    onTplButtonTap() {
      const rawValue = this.base.getTrimValue();
      const value = this.toTime(rawValue);

      this.close('confirm-btn');
      this._trigger('confirm', { value });
    },

    toTime(val) {
      if (!val) return null;
      if (Array.isArray(val)) {
        return val.map(item => item.getTime());
      }
      return val.getTime();
    },

    onScroll(e) {
      this.$emit('scroll', e.detail);
    },

    getCurrentDate() {
      let time = Array.isArray(this.base.value) ? this.base.value[0] : this.base.value;

      if (this.currentMonth.length > 0) {
        const year = this.currentMonth[0]?.year;
        const month = this.currentMonth[0]?.month;
        time = new Date(year, month, 1).getTime();
      }

      return time;
    },

    handleSwitchModeChange(e) {
      const { type, disabled } = e.currentTarget.dataset;
      if (disabled) return;

      const date = this.getCurrentDate();

      const funcMap = {
        'pre-year': () => getPrevYear(date),
        'pre-month': () => getPrevMonth(date),
        'next-month': () => getNextMonth(date),
        'next-year': () => getNextYear(date),
      };
      const newValue = funcMap[type]();
      if (!newValue) return;

      const { year, month } = this.getCurrentYearAndMonth(newValue);
      this.$emit('panel-change', { year, month: month + 1 });

      this.calcCurrentMonth(newValue);
    },

    onWatchMinMaxDate() {
      const { firstDayOfWeek, minDate, maxDate } = this;
      firstDayOfWeek && (this.base.firstDayOfWeek = firstDayOfWeek);
      minDate && (this.base.minDate = minDate);
      maxDate && (this.base.maxDate = maxDate);
      this.calcMonths();
    },
  },
});
</script>
<style scoped>
@import './calendar.css';
</style>
<style scoped>
.t-calendar-switch-mode--none > .t-calendar__months {
  /* support mp-alipay */
  width: 100%;
}
</style>

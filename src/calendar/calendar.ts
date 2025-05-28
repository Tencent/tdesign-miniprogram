import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import TCalendar from '../common/shared/calendar/index';
import { TdCalendarProps } from './type';
import useCustomNavbar from '../mixins/using-custom-navbar';
import { getPrevMonth, getPrevYear, getNextMonth, getNextYear } from './utils';

const { prefix } = config;
const name = `${prefix}-calendar`;

const defaultLocaleText = {
  title: '请选择日期',
  weekdays: ['日', '一', '二', '三', '四', '五', '六'],
  monthTitle: '{year} 年 {month}',
  months: ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月'],
  confirm: '确认',
};

export interface CalendarProps extends TdCalendarProps {}

@wxComponent()
export default class Calendar extends SuperComponent {
  behaviors = [useCustomNavbar];

  externalClasses = [`${prefix}-class`];

  options: WechatMiniprogram.Component.ComponentOptions = {
    multipleSlots: true,
  };

  properties = props;

  data = {
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
  };

  controlledProps = [
    {
      key: 'value',
      event: 'confirm',
    },
    {
      key: 'value',
      event: 'change',
    },
  ];

  lifetimes = {
    created() {
      this.base = new TCalendar(this.properties);
    },

    ready() {
      const realLocalText = { ...defaultLocaleText, ...this.properties.localeText };
      this.initialValue();

      this.setData({
        days: this.base.getDays(realLocalText.weekdays),
        realLocalText,
      });

      this.calcMonths();
      this.updateCurrentMonth();

      if (!this.data.usePopup) {
        this.scrollIntoView();
      }
    },
  };

  observers = {
    type(v) {
      this.base.type = v;
    },

    confirmBtn(v) {
      if (typeof v === 'string') {
        this.setData({ innerConfirmBtn: v === 'slot' ? 'slot' : { content: v } });
      } else if (typeof v === 'object') {
        this.setData({ innerConfirmBtn: v });
      }
    },

    'firstDayOfWeek,minDate,maxDate'(firstDayOfWeek, minDate, maxDate) {
      firstDayOfWeek && (this.base.firstDayOfWeek = firstDayOfWeek);
      minDate && (this.base.minDate = minDate);
      maxDate && (this.base.maxDate = maxDate);
      this.calcMonths();
    },

    value(v) {
      this.base.value = v;
      this.calcMonths();
      this.updateCurrentMonth();
    },

    visible(v) {
      if (v) {
        this.scrollIntoView();
        this.base.value = this.data.value;
        this.calcMonths();
      }
    },
    format(v) {
      const { usePopup, visible } = this.data;

      this.base.format = v;

      if (!usePopup || visible) {
        this.calcMonths();
      }
    },
  };

  methods = {
    initialValue() {
      const { value, type, minDate } = this.data;

      if (!value) {
        const today = new Date();
        const now = minDate || new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime(); // 获取 0 点的时间戳
        const initialValue = type === 'single' ? now : [now];

        if (type === 'range') {
          initialValue[1] = now + 24 * 3600 * 1000; // 第二天
        }

        this.setData({
          value: initialValue,
        });
        this.base.value = initialValue;
      }
    },

    scrollIntoView() {
      const { value } = this.data;

      if (!value) return;

      const date = new Date(Array.isArray(value) ? value[0] : value);

      if (date) {
        this.setData({
          scrollIntoView: `year_${date.getFullYear()}_month_${date.getMonth()}`,
        });
      }
    },

    getCurrentYearAndMonth(v: Date) {
      const date = new Date(v);
      return { year: date.getFullYear(), month: date.getMonth() };
    },

    updateActionButton(value: Date) {
      const _min = this.getCurrentYearAndMonth(this.base.minDate);
      const _max = this.getCurrentYearAndMonth(this.base.maxDate);

      const _minTimestamp = new Date(_min.year, _min.month, 1).getTime();
      const _maxTimestamp = new Date(_max.year, _max.month, 1).getTime();

      const _prevYearTimestamp = getPrevYear(value).getTime();
      const _prevMonthTimestamp = getPrevMonth(value).getTime();
      const _nextMonthTimestamp = getNextMonth(value).getTime();
      const _nextYearTimestamp = getNextYear(value).getTime();

      const preYearBtnDisable = _prevYearTimestamp < _minTimestamp || _prevMonthTimestamp < _minTimestamp;
      const prevMonthBtnDisable = _prevMonthTimestamp < _minTimestamp;
      const nextYearBtnDisable = _nextMonthTimestamp > _maxTimestamp || _nextYearTimestamp > _maxTimestamp;
      const nextMonthBtnDisable = _nextMonthTimestamp > _maxTimestamp;

      this.setData({
        actionButtons: {
          preYearBtnDisable,
          prevMonthBtnDisable,
          nextYearBtnDisable,
          nextMonthBtnDisable,
        },
      });
    },

    updateCurrentMonth() {
      if (this.data.switchMode === 'none') return;
      this.calcCurrentMonth();
    },

    calcCurrentMonth(newValue?: any) {
      const date = newValue || this.getCurrentDate();
      const { year, month } = this.getCurrentYearAndMonth(date);
      const currentMonth = this.data.months.filter((item) => item.year === year && item.month === month);

      this.updateActionButton(date);

      this.setData({
        currentMonth: currentMonth.length > 0 ? currentMonth : [this.data.months[0]],
      });
    },

    calcMonths() {
      const months = this.base.getMonths();

      this.setData({
        months,
      });
    },

    close(trigger) {
      if (this.data.autoClose) {
        this.setData({ visible: false });
      }
      this.triggerEvent('close', { trigger });
    },

    onVisibleChange() {
      this.close('overlay');
    },

    handleClose() {
      this.close('close-btn');
    },

    handleSelect(e) {
      const { date, year, month } = e.currentTarget.dataset;

      if (date.type === 'disabled') return;

      const rawValue = this.base.select({ cellType: date.type, year, month, date: date.day });

      const value = this.toTime(rawValue);

      this.calcMonths();
      this.updateCurrentMonth();

      if (this.data.confirmBtn == null) {
        // 不显示确认按钮，则选择完即关闭 popup
        if (this.data.type === 'single' || rawValue.length === 2) {
          this.setData({ visible: false });
          this._trigger('change', { value }); // 受控
        }
      }

      this.triggerEvent('select', { value });
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
        return val.map((item) => item.getTime());
      }
      return val.getTime();
    },

    onScroll(e) {
      this.triggerEvent('scroll', e.detail);
    },

    getCurrentDate() {
      let time = Array.isArray(this.base.value) ? this.base.value[0] : this.base.value;

      if (this.data.currentMonth.length > 0) {
        const year = this.data.currentMonth[0]?.year;
        const month = this.data.currentMonth[0]?.month;
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
      this.triggerEvent('panel-change', { year, month: month + 1 });

      this.calcCurrentMonth(newValue);
    },
  };
}

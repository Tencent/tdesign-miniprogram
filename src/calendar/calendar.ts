import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import TCalendar from '../common/shared/calendar/index';
import { TdCalendarProps } from './type';
import useCustomNavbar from '../mixins/using-custom-navbar';

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
      if (Array.isArray(val)) {
        return val.map((item) => item.getTime());
      }
      return val.getTime();
    },
    onScroll(e) {
      this.triggerEvent('scroll', e.detail);
    },
  };
}

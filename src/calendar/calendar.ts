import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import TCalendar from '../common/shared/calendar/index';
import { TdCalendarProps } from './type';

const { prefix } = config;
const name = `${prefix}-calendar`;

export interface CalendarProps extends TdCalendarProps {}

@wxComponent()
export default class Calendar extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options: WechatMiniprogram.Component.ComponentOptions = {
    multipleSlots: true,
    styleIsolation: 'apply-shared',
  };

  properties = props;

  data = {
    prefix,
    name,
    months: [],
  };

  lifetimes = {
    ready() {
      let { confirmBtn } = this.data;

      if (!confirmBtn) {
        confirmBtn = { content: '确认' };
      }
      this.base = new TCalendar(this.properties);
      this.setData({
        days: this.base.getDays(),
        confirmBtn,
      });
      this.calcMonths();
    },
  };

  methods = {
    calcMonths() {
      const months = this.base.getMonths();

      this.setData({
        months,
      });
    },
    handleClose() {
      this.setData({ visible: false });
    },
    handleSelect(e) {
      const { date, item } = e.currentTarget.dataset;
      const { year, month } = item;

      const value = this.base.select({ cellType: date.type, year, month, date: date.day });
      this.base.value = value;
      this.calcMonths();
    },
    onTplButtonTap() {
      const value = this.base.getTrimValue();
      this.triggerEvent('confirm', { value });
    },
    handleVisibleChange() {
      this.setData({ visible: false });
    },
  };
}

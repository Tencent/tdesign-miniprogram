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
    classPrefix: name,
    months: [],
    scrollIntoView: '',
  };

  controlledProps = [
    {
      key: 'value',
      event: 'confirm',
    },
  ];

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
    },
  };

  observers = {
    value(v) {
      if (this.base) {
        this.base.value = v;
      }
    },
    visible(v) {
      if (v) {
        const { value } = this.data;

        if (value) {
          // 滚动到 value 对应的月份
          const date = new Date(Array.isArray(value) ? value[0] : value);

          if (date) {
            this.setData({
              scrollIntoView: `year_${date.getFullYear()}_month_${date.getMonth()}`,
            });
          }
        }
        this.base.value = this.data.value;
        this.calcMonths();
      }
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
      const { date, year, month } = e.currentTarget.dataset;

      if (date.type === 'disabled') return;

      this.base.select({ cellType: date.type, year, month, date: date.day });
      this.calcMonths();
    },
    onTplButtonTap() {
      const rawValue = this.base.getTrimValue();
      let value: string | string[] = '';

      if (Array.isArray(rawValue)) {
        value = rawValue.map((item) => item.getTime());
      } else {
        value = rawValue.getTime();
      }

      this._trigger('confirm', { value });
    },
  };
}

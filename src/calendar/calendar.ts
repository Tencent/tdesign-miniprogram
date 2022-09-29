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

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    name,
    months: [],
  };

  lifetimes = {
    ready() {
      this.base = new TCalendar(this.properties);
      const selectedDate = this.base.getTrimValue();
      const months = this.base.getMonths(selectedDate);

      this.setData({
        days: this.base.getDays(),
        months,
      });
    },
  };

  methods = {
    handleClose() {
      this.setData({ visible: false });
    },
    handleSelect() {},
    handleConfirm() {},
  };
}

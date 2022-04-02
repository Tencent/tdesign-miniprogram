import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getBackgroundColor } from './utils';

const { prefix } = config;
const name = `${prefix}-progress`;

@wxComponent()
export default class Progress extends SuperComponent {
  externalClasses = ['t-class-text'];

  options = {
    multipleSlots: true,
  };

  properties = {
    ...props,
    text: {
      type: Boolean,
      value: true,
    },
    textColor: {
      type: String,
      value: '',
    },
  };

  data = {
    classPrefix: name,
    percentageBar: 0,
    colorBar: '',
  };

  observers = {
    percentage(percentage) {
      const { status } = this.data;
      if (percentage > 100) {
        percentage = 100;
      } else if (percentage < 0) {
        percentage = 0;
      } else if (percentage === 100) {
        this.setData({
          status: 'success',
        });
      }
      if (status === 'success' && percentage > 0 && percentage < 100) {
        this.setData({
          status: '',
        });
      }
      this.setData({
        percentageBar: `${percentage}%`,
      });
    },

    color(color) {
      this.setData({
        colorBar: getBackgroundColor(color),
      });
    },
  };

  lifetimes = {
    ready() {},
  };

  methods = {};
}

import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getBackgroundColor } from './utils';

const { prefix } = config;
const classPrefix = `${prefix}-progress`;

@wxComponent()
export default class Progress extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-bar`, `${prefix}-class-label`];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix,
    colorBar: '',
    computedStatus: '',
    computedProgress: 0,
  };

  observers = {
    percentage(percentage) {
      percentage = Math.max(0, Math.min(percentage, 100));

      this.setData({
        computedStatus: percentage === 100 ? 'success' : '',
        computedProgress: percentage,
      });
    },

    color(color) {
      this.setData({
        colorBar: getBackgroundColor(color),
      });
    },
  };
}

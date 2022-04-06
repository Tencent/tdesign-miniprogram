import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getBackgroundColor } from './utils';

const { prefix } = config;
const name = `${prefix}-progress`;

@wxComponent()
export default class Progress extends SuperComponent {
  externalClasses = ['t-class-label'];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    percentageBar: 0,
    colorBar: '',
  };

  observers = {
    percentage(percentage) {
      const { status } = this.data;
      percentage = Math.max(0, Math.min(percentage, 100));

      if (percentage === 100 && !['error', 'warning', 'active'].includes(status)) {
        this.setData({
          status: 'success',
        });
      }

      if (status === 'success' && percentage > 0 && percentage < 100) {
        this.setData({
          status: '',
        });
      }
    },

    color(color) {
      this.setData({
        colorBar: getBackgroundColor(color),
      });
    },
  };
}

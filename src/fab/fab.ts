import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-fab`;

@wxComponent()
export default class Fab extends SuperComponent {
  properties = props;

  externalClasses = [`${prefix}-class`, `${prefix}-class-button`];

  data = {
    prefix,
    classPrefix: name,
    baseButtonProps: {
      size: 'large',
      shape: 'circle',
      theme: 'primary',
    },
  };

  observers = {
    text(val) {
      if (val) {
        this.setData({
          baseButtonProps: {
            shape: 'round',
          },
        });
      }
    },
  };

  methods = {
    onTplButtonTap(e) {
      this.triggerEvent('click', e);
    },
  };
}

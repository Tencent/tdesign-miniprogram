import { SuperComponent, RelationsOptions, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-back-top`;

@wxComponent()
export default class BackTop extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-icon`, `${prefix}-class-text`];

  options = {
    multipleSlots: true,
  };

  properties = props;

  relations: RelationsOptions = {
    '../pull-down-refresh/pull-down-refresh': {
      type: 'ancestor',
    },
  };

  data = {
    prefix,
    classPrefix: name,
    _icon: null,
  };

  observers = {
    icon() {
      this.setIcon();
    },
  };

  lifetimes = {
    ready() {
      this.setIcon();
    },
  };

  methods = {
    setIcon() {
      const { icon } = this.properties;
      const isBool = typeof icon === 'boolean';

      if ((isBool && icon) || typeof icon === 'string') {
        this.setData({
          _icon: { name: isBool ? 'backtop' : icon },
        });
      } else if (typeof icon === 'object') {
        this.setData({
          _icon: icon,
        });
      }
    },

    toTop() {
      this.triggerEvent('to-top');
      if (this.$parent) {
        this.$parent?.setScrollTop(0);
      } else {
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 300,
        });
      }
    },
  };
}

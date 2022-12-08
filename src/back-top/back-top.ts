import { SuperComponent, wxComponent } from '../common/src/index';
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

  data = {
    prefix,
    classPrefix: name,
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
      if (!icon) {
        this.setData({ iconName: '', iconData: {} });
      } else if (typeof icon === 'string') {
        this.setData({
          iconName: icon,
          iconData: {},
        });
      } else if (typeof icon === 'object') {
        this.setData({
          iconName: '',
          iconData: icon,
        });
      } else {
        this.setData({ iconName: 'backtop', iconData: {} });
      }
    },

    toTop() {
      this.triggerEvent('to-top');
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300,
      });
    },
  };
}

import { SuperComponent, RelationsOptions, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { calcIcon } from '../common/utils';

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
    hidden: true,
  };

  observers = {
    icon() {
      this.setIcon();
    },

    scrollTop(value: number) {
      const { visibilityHeight } = this.properties;
      this.setData({ hidden: value < visibilityHeight });
    },
  };

  lifetimes = {
    ready() {
      const { icon } = this.properties;
      this.setIcon(icon);
    },
  };

  methods = {
    setIcon(v) {
      this.setData({
        _icon: calcIcon(v, 'backtop'),
      });
    },

    toTop() {
      this.triggerEvent('to-top');
      if (this.$parent) {
        this.$parent?.setScrollTop(0);
        this.setData({ hidden: true });
      } else {
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 300,
        });
      }
    },
  };
}

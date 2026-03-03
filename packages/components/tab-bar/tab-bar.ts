import { wxComponent, SuperComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getRect, systemInfo } from '../common/utils';

const { prefix } = config;
const classPrefix = `${prefix}-tab-bar`;

@wxComponent()
export default class Tabbar extends SuperComponent {
  relations: RelationsOptions = {
    '../tab-bar-item/tab-bar-item': {
      type: 'descendant',
    },
  };

  externalClasses = [`${prefix}-class`];

  backupValue = -1;

  data = {
    prefix,
    classPrefix,
    placeholderHeight: 56,
    safeAreaBottomHeight: 0,
  };

  properties = props;

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  observers = {
    value() {
      this.updateChildren();
    },
    'fixed, placeholder'() {
      this.setPlaceholderHeight();
    },
    safeAreaInsetBottom() {
      this.setSafeAreaBottomHeight();
    },
  };

  lifetimes = {
    ready() {
      this.showChildren();
      this.setSafeAreaBottomHeight();
    },
  };

  methods = {
    setSafeAreaBottomHeight() {
      if (!this.properties.safeAreaInsetBottom) return;

      wx.nextTick(() => {
        const { screenHeight, safeArea } = systemInfo;
        const safeAreaBottomHeight = screenHeight - (safeArea?.bottom ?? screenHeight);
        this.setData({ safeAreaBottomHeight: Math.max(0, safeAreaBottomHeight) });
      });
    },
    setPlaceholderHeight() {
      if (!this.properties.fixed || !this.properties.placeholder) return;

      wx.nextTick(() => {
        getRect(this, `.${classPrefix}`).then((res) => {
          this.setData({ placeholderHeight: res.height });
        });
      });
    },

    showChildren() {
      const { value } = this.data;

      this.$children.forEach((child) => {
        child.setData({ crowded: this.$children.length > 3 });

        if (child.properties.value === value) {
          child.showSpread();
        }
      });
    },

    updateChildren() {
      const { value } = this.data;

      this.$children.forEach((child) => {
        child.checkActive(value);
      });
    },

    updateValue(value) {
      this._trigger('change', { value });
    },

    changeOtherSpread(value) {
      this.$children.forEach((child) => {
        if (child.properties.value !== value) {
          child.closeSpread();
        }
      });
    },

    initName() {
      return (this.backupValue += 1);
    },
  };
}

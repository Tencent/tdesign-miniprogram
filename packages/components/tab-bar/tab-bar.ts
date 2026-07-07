import { wxComponent, SuperComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getRect } from '../common/utils';
import { getWindowInfo } from '../common/wechat';

const { prefix } = config;
const classPrefix = `${prefix}-tab-bar`;

/** 获取底部安全区高度（home indicator 区） */
function getSafeAreaBottom() {
  try {
    const info = getWindowInfo();
    if (info && info.safeArea && typeof info.screenHeight === 'number') {
      return Math.max(0, info.screenHeight - info.safeArea.bottom);
    }
  } catch (e) {
    // ignore
  }
  return 0;
}

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
    safeAreaBottomReady: false,
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
    'fixed, placeholder, shape, safeAreaInsetBottom'() {
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
      if (!this.properties.safeAreaInsetBottom) {
        // 关闭时清空，避免残留值影响样式
        if (this.data.safeAreaBottomReady || this.data.safeAreaBottomHeight !== 0) {
          this.setData({ safeAreaBottomHeight: 0, safeAreaBottomReady: false });
        }
        return;
      }

      wx.nextTick(() => {
        const safeAreaBottomHeight = getSafeAreaBottom();
        this.setData({ safeAreaBottomHeight, safeAreaBottomReady: true }, () => {
          // safeArea 注入后，placeholder 占位高度可能依赖它，再触发一次重算
          this.setPlaceholderHeight();
        });
      });
    },

    setPlaceholderHeight() {
      if (!this.properties.fixed || !this.properties.placeholder) return;

      wx.nextTick(() => {
        getRect(this, `.${classPrefix}`).then((res) => {
          let { height } = res;
          if (this.properties.shape === 'round' && this.properties.safeAreaInsetBottom) {
            height += getSafeAreaBottom();
          }
          this.setData({ placeholderHeight: height });
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

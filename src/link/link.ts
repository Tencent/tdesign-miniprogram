import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { navigatePropsValue } from './type';
import { calcIcon } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-link`;

@wxComponent()
export default class Link extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-hover`,
    `${prefix}-class-prefix-icon`,
    `${prefix}-class-content`,
    `${prefix}-class-suffix-icon`,
  ];

  properties = props;

  options = {
    multipleSlots: true,
  };

  data = {
    prefix,
    classPrefix: name,
  };

  observers = {
    'theme, status, size, underline, navigatorProps'() {
      this.setClass();
    },

    prefixIcon(v) {
      this.setData({
        _prefixIcon: calcIcon(v),
      });
    },

    suffixIcon(v) {
      this.setData({
        _suffixIcon: calcIcon(v),
      });
    },
  };

  lifetimes = {
    attached() {
      this.setClass();
    },
  };

  methods = {
    setClass() {
      const { theme, size, underline, navigatorProps, disabled } = this.properties;
      const classList = [name, `${name}--${theme}`, `${name}--${size}`];
      if (underline) {
        classList.push(`${name}--underline`);
      }
      if ((navigatorProps && !navigatorProps.url) || disabled) {
        classList.push(`${name}--disabled`);
      }

      this.setData({
        className: classList.join(' '),
      });
    },

    onClick() {
      const { navigatorProps } = this.properties;
      this.jumpLink(navigatorProps);
    },

    jumpLink(navigatorProps: navigatePropsValue) {
      const { disabled } = this.properties;
      if (!navigatorProps || !navigatorProps.url || disabled) return;
      wx[navigatorProps.type]({
        ...navigatorProps,
        fail: (e) => {
          this.triggerEvent('fail', e);
        },
        success: (e) => {
          this.triggerEvent('success', e);
        },
        complete: (e) => {
          this.triggerEvent('complete', e);
        },
      });
    },
  };
}

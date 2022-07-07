import { wxComponent, SuperComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { classNames } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-tag`;

@wxComponent()
export default class Tag extends SuperComponent {
  data = {
    prefix,
    classPrefix: name,
    className: '',
  };

  properties = props;

  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true,
  };

  lifetimes = {
    attached() {
      this.setClass();
    },
  };

  methods = {
    setClass() {
      const { prefix, classPrefix } = this.data;
      const { size, shape, theme, variant, closable, disabled } = this.properties;
      const tagClass = [
        classPrefix,
        `${classPrefix}--theme-${theme || 'default'}`,
        `${classPrefix}--variant-${variant || 'dark'}`,
        closable ? `${classPrefix}--closable ${prefix}-is-closable` : '',
        disabled ? `${classPrefix}--disabled ${prefix}-is-disabled` : '',
        `${classPrefix}--size-${size || 'medium'}`,
        `${classPrefix}--shape-${shape || 'square'}`,
      ];
      const className = classNames(tagClass);
      this.setData({
        className,
      });
    },

    handleClick(e: WechatMiniprogram.BaseEvent) {
      if (this.data.disabled) return;
      this.triggerEvent('click', e);
    },

    hangleClose(e: WechatMiniprogram.BaseEvent) {
      if (this.data.disabled) return;
      this.triggerEvent('close', e);
    },
  };
}

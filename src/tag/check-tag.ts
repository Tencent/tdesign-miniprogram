import { wxComponent, SuperComponent } from '../common/src/index';
import config from '../common/config';
import props from './check-tag-props';
import { classNames } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-tag`;

@wxComponent()
export default class CheckTag extends SuperComponent {
  data = {
    prefix,
    classPrefix: name,
    className: '',
  };

  properties = props;

  controlledProps = [
    {
      key: 'checked',
      event: 'change',
    },
  ];

  options = {
    multipleSlots: true,
  };

  lifetimes = {
    attached() {
      this.setClass();
    },
  };

  observers = {
    checked() {
      this.setClass();
    },
  };

  methods = {
    setClass() {
      const { prefix, classPrefix } = this.data;
      const { size, shape, closable, disabled, checked, defaultChecked } = this.properties;
      const isChecked = checked || defaultChecked;
      const tagClass = [
        classPrefix,
        `${classPrefix}--checkable`,
        closable ? `${classPrefix}--closable ${prefix}-is-closable` : '',
        disabled ? `${classPrefix}--disabled ${prefix}-is-disabled` : '',
        isChecked ? `${classPrefix}--checked ${prefix}-is-checked` : '',
        `${classPrefix}--size-${size || 'medium'}`,
        `${classPrefix}--shape-${shape || 'square'}`,
      ];
      const className = classNames(tagClass);
      this.setData({
        className,
      });
    },

    handleClose(e: WechatMiniprogram.BaseEvent) {
      if (this.data.disabled) return;
      this.triggerEvent('close', e);
    },

    handleChange() {
      if (this.data.disabled) return;
      const { checked, defaultChecked } = this.properties;
      const isChecked = checked || defaultChecked;
      this.setData({
        checked: !isChecked,
      });
      this._trigger('change', { checked: !isChecked });
    },
  };
}

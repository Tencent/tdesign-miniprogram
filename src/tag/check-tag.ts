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

  externalClasses = [`${prefix}-class`];

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
    'size, closable, disabled, checked'() {
      this.setClass();
    },
  };

  methods = {
    setClass() {
      const { classPrefix } = this.data;
      const { size, variant, closable, disabled, checked, defaultChecked } = this.properties;
      const isChecked = checked || defaultChecked;
      const tagClass = [
        classPrefix,
        `${classPrefix}--checkable`,
        closable ? `${classPrefix}--closable` : '',
        disabled ? `${classPrefix}--disabled` : '',
        isChecked ? `${classPrefix}--checked` : '',
        `${classPrefix}--${isChecked ? 'primary' : 'default'}`,
        `${classPrefix}--${size}`,
        `${classPrefix}--${variant}`,
      ];
      const className = classNames(tagClass);
      this.setData({
        className,
      });
    },

    onClick() {
      if (this.data.disabled) return;
      const { checked, defaultChecked } = this.properties;
      const isChecked = checked || defaultChecked;
      this.setData({
        checked: !isChecked,
      });
      this._trigger('click');
      this._trigger('change', { checked: !isChecked });
    },
  };
}

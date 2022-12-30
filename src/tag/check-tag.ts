import { wxComponent, SuperComponent } from '../common/src/index';
import config from '../common/config';
import props from './check-tag-props';
import { classNames, calcIcon } from '../common/utils';

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
    'size, disabled, checked'() {
      this.setClass();
    },
    icon(v) {
      this.setData({
        _icon: calcIcon(v),
      });
    },
  };

  methods = {
    setClass() {
      const { classPrefix } = this.data;
      const { size, variant, disabled, checked } = this.properties;
      const tagClass = [
        classPrefix,
        `${classPrefix}--checkable`,
        disabled ? `${classPrefix}--disabled` : '',
        checked ? `${classPrefix}--checked` : '',
        `${classPrefix}--${checked ? 'primary' : 'default'}`,
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
      const { checked } = this.data;

      this._trigger('click');
      this._trigger('change', { checked: !checked });
    },
  };
}

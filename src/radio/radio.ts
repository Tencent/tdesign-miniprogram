import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';
import Props from './props';

const { prefix } = config;
const name = `${prefix}-radio`;

const iconDefault = {
  'fill-circle': ['check-circle-filled', 'circle'],
  'stroke-line': ['check', ''],
};
@wxComponent()
export default class Radio extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-label`,
    `${prefix}-class-icon`,
    `${prefix}-class-content`,
    `${prefix}-class-border`,
  ];

  behaviors = ['wx://form-field'];

  relations = {
    '../radio-group/radio-group': {
      type: 'ancestor' as 'ancestor',
    },
  };

  options = {
    multipleSlots: true,
  };

  lifetimes = {
    attached() {
      this.initStatus();
    },
  };

  properties = {
    ...Props,
    borderless: {
      type: Boolean,
      value: false,
    },
  };

  controlledProps = [
    {
      key: 'checked',
      event: 'change',
    },
  ];

  observers = {
    checked(isChecked: Boolean) {
      this.setData({
        active: isChecked,
      });
    },
  };

  data = {
    prefix,
    active: false,
    classPrefix: name,
    customIcon: false,
    optionLinked: false,
    iconVal: [],
  };

  methods = {
    handleTap(e) {
      if (this.data.disabled) return;

      const { target } = e.currentTarget.dataset;

      if (target === 'text' && this.data.contentDisabled) return;

      const { value, active } = this.data;
      const [parent] = this.getRelationNodes('../radio-group/radio-group');

      if (parent) {
        parent.updateValue(value);
      } else {
        this._trigger('change', { checked: !active });
      }
    },
    initStatus() {
      const { icon } = this.data;
      const isIdArr = Array.isArray(icon);

      this.setData({
        customIcon: isIdArr,
        iconVal: !isIdArr ? iconDefault[icon] : this.data.icon,
      });
    },

    setDisabled(disabled: Boolean) {
      this.setData({
        disabled: this.data.disabled || disabled,
      });
    },
  };
}

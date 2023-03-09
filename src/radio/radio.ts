import config from '../common/config';
import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import Props from './props';

const { prefix } = config;
const name = `${prefix}-radio`;

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

  parent = null;

  relations: RelationsOptions = {
    '../radio-group/radio-group': {
      type: 'ancestor',
      linked(parent) {
        this.parent = parent;
        if (parent.data.placement) {
          this.setData({ placement: parent.data.placement });
        }
        if (parent.data.borderless) {
          this.setData({ borderless: true });
        }
      },
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

  data = {
    prefix,
    classPrefix: name,
    customIcon: false,
    slotIcon: false,
    optionLinked: false,
    iconVal: [],
  };

  methods = {
    handleTap(e) {
      if (this.data.disabled) return;

      const { target } = e.currentTarget.dataset;

      if (target === 'text' && this.data.contentDisabled) return;

      this.doChange();
    },
    doChange() {
      const { value, checked } = this.data;

      if (this.$parent) {
        this.$parent.updateValue(value);
      } else {
        this._trigger('change', { checked: !checked });
      }
    },
    initStatus() {
      const { icon } = this.data;
      const isIdArr = Array.isArray(this.parent?.icon || icon);

      this.setData({
        customIcon: isIdArr,
        slotIcon: icon === 'slot',
        iconVal: isIdArr ? this.parent?.icon || icon : [],
      });
    },

    setDisabled(disabled: Boolean) {
      this.setData({
        disabled: this.data.disabled || disabled,
      });
    },
  };
}

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

  relations: RelationsOptions = {
    '../radio-group/radio-group': {
      type: 'ancestor',
      linked(parent) {
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
      this.init();
    },
  };

  properties = {
    ...Props,
    borderless: {
      type: Boolean,
      value: false,
    },
    tId: {
      type: String,
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
    _placement: '',
    _disabled: false,
    _readonly: false,
  };

  observers = {
    disabled(v) {
      this.setData({ _disabled: v });
    },
    readonly(v) {
      this.setData({ _readonly: v });
    },
  };

  methods = {
    handleTap(e) {
      const { _disabled, _readonly, contentDisabled } = this.data;
      const { target } = e.currentTarget.dataset;

      if (_disabled || _readonly || (target === 'text' && contentDisabled)) return;

      this.doChange();
    },
    doChange() {
      const { value, checked, allowUncheck } = this.data;

      const isAllowUncheck = Boolean(allowUncheck || this.$parent?.data.allowUncheck);

      if (this.$parent) {
        this.$parent.updateValue(checked && isAllowUncheck ? null : value);
      } else {
        this._trigger('change', { checked: isAllowUncheck ? !checked : true });
      }
    },
    init() {
      const { icon } = this.data;
      const isIdArr = Array.isArray(this.$parent?.icon || icon);

      this.setData({
        customIcon: isIdArr,
        slotIcon: icon === 'slot',
        iconVal: isIdArr ? this.$parent?.icon || icon : [],
        _placement: this.data.placement || this.$parent?.data?.placement || 'left',
      });
    },

    setDisabled(disabled: Boolean) {
      this.setData({
        _disabled: this.data.disabled || disabled,
      });
    },

    setReadonly(readonly: Boolean) {
      this.setData({
        _readonly: this.data.readonly || readonly,
      });
    },
  };
}

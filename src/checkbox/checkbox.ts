import { SuperComponent, wxComponent, ComponentsOptionsType, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import Props from './props';

const { prefix } = config;
const name = `${prefix}-checkbox`;
@wxComponent()
export default class CheckBox extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-label`,
    `${prefix}-class-icon`,
    `${prefix}-class-content`,
    `${prefix}-class-border`,
  ];

  behaviors = ['wx://form-field'];

  relations: RelationsOptions = {
    '../checkbox-group/checkbox-group': {
      type: 'ancestor',
      linked(parent) {
        const { value, disabled, borderless } = parent.data;
        const valueSet = new Set(value);
        const checkedFromParent = valueSet.has(this.data.value);
        const data: any = {
          _disabled: this.data.disabled == null ? disabled : this.data.disabled,
        };

        if (borderless) {
          data.borderless = true;
        }

        data.checked = this.data.checked || checkedFromParent;
        if (this.data.checked) {
          parent.updateValue(this.data);
        }

        if (this.data.checkAll) {
          data.checked = valueSet.size > 0;
          // data.indeterminate =
        }

        this.setData(data);
      },
    },
  };

  options: ComponentsOptionsType = {
    multipleSlots: true,
    // styleIsolation: 'shared',
  };

  properties = {
    ...Props,
    theme: {
      type: String,
      value: 'default',
    },
  };

  data = {
    prefix,
    classPrefix: name,
    _disabled: false,
  };

  observers = {
    disabled(v) {
      this.setData({ _disabled: v });
    },
  };

  controlledProps = [
    {
      key: 'checked',
      event: 'change',
    },
  ];

  methods = {
    handleTap(e: WechatMiniprogram.TouchEvent) {
      const { _disabled, readonly, contentDisabled } = this.data;
      const { target } = e.currentTarget.dataset;

      if (_disabled || readonly || (target === 'text' && contentDisabled)) return;

      const { value, label } = this.data;
      const checked = !this.data.checked;
      const parent = this.$parent;

      if (parent) {
        parent.updateValue({ ...this.data, checked });
      } else {
        this._trigger('change', { context: { value, label }, checked });
      }
    },

    setDisabled(disabled: Boolean) {
      this.setData({
        _disabled: this.data.disabled || disabled,
      });
    },
  };
}

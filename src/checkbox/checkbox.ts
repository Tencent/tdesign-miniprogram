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
        const data: any = {
          disabled: disabled || this.data.disabled,
        };

        if (borderless) {
          data.borderless = true;
        }

        data.checked = valueSet.has(this.data.value);

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
    borderless: {
      type: Boolean,
      value: false,
    },
  };

  data = {
    prefix,
    classPrefix: name,
  };

  controlledProps = [
    {
      key: 'checked',
      event: 'change',
    },
  ];

  methods = {
    onChange(e: WechatMiniprogram.TouchEvent) {
      const { disabled, readonly } = this.data;

      if (disabled || readonly) return;

      const { target } = e.currentTarget.dataset;
      const { contentDisabled } = this.data;

      if (target === 'text' && contentDisabled) {
        return;
      }

      const checked = !this.data.checked;
      const parent = this.$parent;

      if (parent) {
        parent.updateValue({ ...this.data, checked });
      } else {
        this._trigger('change', { checked });
      }
    },
  };
}

import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import Props from '../checkbox/checkbox-group-props';

const { prefix } = config;
const name = `${prefix}-checkbox-group`;
@wxComponent()
export default class CheckBoxGroup extends SuperComponent {
  externalClasses = ['t-class'];

  relations = {
    '../checkbox/checkbox': {
      type: 'descendant' as 'descendant',
      linked(child) {
        const { value, disabled } = this.data;

        child.setData({
          checked: value.includes(child.data.value),
          disabled: disabled || child.data.disabled,
        });
      },
    },
  };

  data = {
    prefix,
    classPrefix: name,
    checkboxOptions: [],
    indeterminate: false,
  };

  properties = {
    ...Props,
    customStyle: String,
    defaultValue: {
      type: null,
      value: undefined,
    },
  };

  observers = {
    value() {
      this.updateChildren();
    },
  };

  lifetimes = {
    attached() {
      this.initWithOptions();
    },
  };

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  methods = {
    getChilds() {
      let items = this.getRelationNodes('../checkbox/checkbox');
      if (!items.length) {
        items = this.selectAllComponents(`.${prefix}-checkbox-option`);
      }
      return items || [];
    },

    updateChildren() {
      const items = this.getChilds();
      const { value, options } = this.data;

      if (items.length > 0) {
        items.forEach((item: any) => {
          !item.data.checkAll &&
            item.setData({
              checked: value?.includes(item.data.value),
            });
        });
        // 关联可全选项
        if (options.some((item) => item.checkAll)) {
          this.handleCheckall();
        }
      }
    },

    updateValue({ key, checked }) {
      const { value, max } = this.data;
      let newValue = value;
      const keySet = new Set(this.getChilds().map((item) => item.data.value));

      newValue = newValue.filter((value) => keySet.has(value));

      if (max && checked && newValue.length === max) return;

      if (checked) {
        newValue = newValue.concat(key);
      } else {
        const index = newValue.findIndex((v: string) => v === key);
        newValue.splice(index, 1);
      }
      this._trigger('change', { value: newValue });
    },

    initWithOptions() {
      const { options } = this.data;

      if (!options?.length || !Array.isArray(options)) return;

      const checkboxOptions = options.map((item) => {
        const isLabel = ['number', 'string'].includes(typeof item);
        return isLabel
          ? {
              label: `${item}`,
              value: item,
            }
          : { ...item };
      });

      this.setData({
        checkboxOptions,
      });
    },

    handleInnerChildChange(e) {
      const { item } = e.target.dataset;
      const { checked } = e.detail;
      const { checkboxOptions, indeterminate } = this.data;

      if (item.checkAll) {
        const value =
          !checked && indeterminate
            ? checkboxOptions.map((item) => item.value)
            : checkboxOptions
                .filter((item) => {
                  if (item.disabled) {
                    return this.data.value.includes(item.value);
                  }
                  return checked && !item.checkAll;
                })
                .map((item) => item.value);
        this._trigger('change', { value });
      } else {
        this.updateValue({ key: item.value, checked });
      }
    },

    handleCheckall() {
      const { checkboxOptions, value } = this.data;
      const valueSet = new Set(value);
      const isCheckall = checkboxOptions.every((item) => (item.checkAll ? true : valueSet.has(item.value)));
      const items = this.selectAllComponents(`.${prefix}-checkbox-option`);
      const $target = items.find((item) => item.data.checkAll);

      $target.setData({
        checked: valueSet.size > 0,
      });
      this.setData({
        indeterminate: !isCheckall,
      });
    },
  };
}

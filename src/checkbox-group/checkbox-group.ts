import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-checkbox-group`;
@wxComponent()
export default class CheckBoxGroup extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  relations: RelationsOptions = {
    '../checkbox/checkbox': {
      type: 'descendant',
    },
  };

  data = {
    prefix,
    classPrefix: name,
    checkboxOptions: [],
  };

  properties = props;

  observers = {
    value() {
      this.updateChildren();
    },
    options() {
      this.initWithOptions();
    },
    disabled(v) {
      if (this.data.options?.length) {
        this.initWithOptions();
        return;
      }
      this.getChildren().forEach((item) => {
        item.setDisabled(v);
      });
    },
  };

  lifetimes = {
    ready() {
      this.setCheckall();
    },
  };

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  $checkAll = null; // 全选复选框

  methods = {
    getChildren() {
      let items = this.$children;
      if (!items.length) {
        items = this.selectAllComponents(`.${prefix}-checkbox-option`);
      }
      return items || [];
    },

    updateChildren() {
      const items = this.getChildren();
      const { value } = this.data;

      if (items.length > 0) {
        items.forEach((item: any) => {
          !item.data.checkAll &&
            item.setData({
              checked: value?.includes(item.data.value),
            });
        });
        // 关联可全选项
        if (items.some((item) => item.data.checkAll)) {
          this.setCheckall();
        }
      }
    },

    updateValue({ value, checked, checkAll, item, indeterminate }) {
      let { value: newValue } = this.data;
      const { max } = this.data;
      const keySet = new Set(this.getChildren().map((item) => item.data.value));

      newValue = newValue.filter((value) => keySet.has(value));

      if (max && checked && newValue.length === max) return;

      if (checkAll) {
        const items = this.getChildren();
        newValue =
          !checked && indeterminate
            ? items
                .filter(({ data }) => !(data.disabled && !newValue.includes(data.value)))
                .map((item) => item.data.value)
            : items
                .filter(({ data }) => {
                  if (data.disabled) {
                    return newValue.includes(data.value);
                  }
                  return checked && !data.checkAll;
                })
                .map(({ data }) => data.value);
      } else if (checked) {
        newValue = newValue.concat(value);
      } else {
        const index = newValue.findIndex((v: string) => v === value);
        newValue.splice(index, 1);
      }

      this._trigger('change', { value: newValue, context: item });
    },

    initWithOptions() {
      const { options, value } = this.data;

      if (!options?.length || !Array.isArray(options)) return;

      const checkboxOptions = options.map((item) => {
        const isLabel = ['number', 'string'].includes(typeof item);
        return isLabel
          ? {
              label: `${item}`,
              value: item,
              checked: value?.includes(item),
            }
          : { ...item, checked: value?.includes(item.value) };
      });

      this.setData({
        checkboxOptions,
      });
    },

    handleInnerChildChange(e) {
      const { item } = e.target.dataset;
      const { checked } = e.detail;
      const rect: any = {};

      if (item.checkAll) {
        rect.indeterminate = this.$checkAll?.data.indeterminate;
      }

      this.updateValue({ ...item, checked, item, ...rect });
    },

    setCheckall() {
      const items = this.getChildren();

      if (!this.$checkAll) {
        this.$checkAll = items.find((item) => item.data.checkAll);
      }

      if (!this.$checkAll) return;

      const { value } = this.data;
      const valueSet = new Set(value.filter((val) => val !== this.$checkAll.data.value));
      const isCheckall = items.every((item) => (item.data.checkAll ? true : valueSet.has(item.data.value)));

      this.$checkAll.setData({
        checked: valueSet.size > 0,
        indeterminate: !isCheckall,
      });
    },
  };
}

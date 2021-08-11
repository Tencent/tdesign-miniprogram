import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import Props from '../checkbox/checkbox-group-props';
const { prefix } = config;
const name = `${prefix}-checkbox-group`;
const count = 0;
@wxComponent()
export default class CheckboxGroup extends SuperComponent {
  relations = {
    '../checkbox/checkbox': {
      type: 'descendant' as 'descendant',
      linked() {
        // this.updateChildren();
      },
    },
  };
  data = {
    classPrefix: name,
    checkboxOptions: [],
  };
  properties = Props;
  observers = {
    value() {
      this.updateChildren();
    },
  };
  lifetimes = {
    attached() {
      this.handleCreateMulCheckbox();
      this.handleOptionLinked();
    },
  };
  methods = {
    // slot插入选项
    updateChildren() {
      const items = this.getRelationNodes('../checkbox/checkbox');
      const { value, disabled } = this.data;
      if (items.length > 0) {
        items.forEach((item: any) => {
          item.changeActive(value.indexOf(item.data.value) > -1);
          item.setDisabled(disabled);
        });
      }
    },
    updateValue({ name, checked }) {
      const { value, max } = this.data;
      let newValue = value;
      if (max && checked && newValue.length === max) {
        return;
      }
      if (checked) {
        newValue = newValue.concat(name);
      } else {
        const index = newValue.findIndex((v: string) => v === name);
        newValue.splice(index, 1);
      }
      this.setData({
        value: newValue,
      });
      this.updateChildren();
      this.triggerEvent('change', { names: newValue });
    },
    // 支持自定义options
    handleCreateMulCheckbox() {
      const { options } = this.data;
      // 数字数组｜字符串数组｜对像数组
      if (!options?.length || !Array.isArray(options)) {
        return;
      }
      const optionsValue = [];
      try {
        options.forEach((element) => {
          const typeName = typeof element;
          if (typeName === 'number' || typeName === 'string') {
            optionsValue.push({
              label: `${element}`,
              value: element,
            });
          } else if (typeName === 'object') {
            optionsValue.push({
              ...element,
            });
          }
        });
        this.setData({
          checkboxOptions: optionsValue,
        });
      } catch (error) {
        console.log('error', error);
      }
    },
    // 处理全选
    handleCheckAll(e) {
      const { checked, option, name } = e.detail;
      const items = this.selectAllComponents('.t-checkbox');
      if (!option) {
        if (!items?.length) {
          return;
        }
        this.setData({
          value: items
            .map((item) => {
              if (item.data.disabled) {
                return;
              }
              item.changeActive(checked);
              return checked ? item.data.value : '';
            })
            .filter((val) => val),
        });
        this.triggerEvent('change', { names: this.data.value });
      } else {
        this.updateValue({ name, checked });
        const element = items.find((item) => item.data.value === name);
        element?.changeActive(checked);
      }
      this.handleHalfCheck(items.length);
    },
    // 处理半选
    handleHalfCheck(len: number) {
      const items = this.selectAllComponents('.t-checkbox');
      const element = items.find((item) => item.data.checkAll);
      element?.changeCheckAllHalfStatus(this.data.value.length !== len - 1);
    },
    // 设置可全选option选项
    handleOptionLinked() {
      const items = this.selectAllComponents('.t-checkbox');
      if (this.data.checkboxOptions.length) {
        items.forEach((item) => {
          item.setOptionLinked(true);
        });
      }
    },
  };
}

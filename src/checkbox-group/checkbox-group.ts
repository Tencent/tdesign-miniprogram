import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import Props from '../checkbox/checkbox-group-props';

const { prefix } = config;
const name = `${prefix}-checkbox-group`;
@wxComponent()
export default class CheckboxGroup extends SuperComponent {
  externalClasses = ['t-class'];

  relations = {
    '../checkbox/checkbox': {
      type: 'descendant' as 'descendant',
      linked() {
        this.updateChildren();
      },
    },
  };

  data = {
    classPrefix: name,
    checkboxOptions: [],
  };

  properties = Props;

  lifetimes = {
    attached() {
      this.handleCreateMulCheckbox();
    },
  };

  methods = {
    // slot插入选项
    updateChildren(type = 'slot') {
      let items = [];
      if (type === 'not-slot') {
        items = this.selectAllComponents('.t-checkbox-option');
      } else {
        items = this.getRelationNodes('../checkbox/checkbox');
      }
      const { value, disabled } = this.data;
      if (items.length > 0) {
        items.forEach((item: any) => {
          !item.data.checkAll && item.changeActive(value.indexOf(item.data.value) > -1);
          item.setDisabled(disabled);
        });
        // 关联可全选项
        if (items.findIndex((item) => item.data.checkAll) > -1) {
          items.forEach((item) => {
            item.setOptionLinked(true);
          });
          this.handleHalfCheck(type, items.length);
        }
      }
    },
    updateValue({ name, checked }, type = 'slot') {
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
      this.updateChildren(type);
      this.triggerEvent('change', newValue);
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
        this.updateChildren('not-slot');
      } catch (error) {
        console.error('error', error);
      }
    },
    // 处理全选
    handleCheckAll(e) {
      const { checked, option, name, type } = e.detail || e;
      let items = [];
      if (type === 'not-slot') {
        items = this.selectAllComponents('.t-checkbox-option');
      } else {
        items = this.getRelationNodes('../checkbox/checkbox');
      }
      if (!option) {
        if (!items?.length) {
          return;
        }
        this.setData({
          value: items
            .map((item) => {
              if (item.data.disabled) {
                return '';
              }
              item.changeActive(checked);
              return checked && !item.data.checkAll ? item.data.value : '';
            })
            .filter((val) => val),
        });
        this.triggerEvent('change', this.data.value);
        this.handleHalfCheck(type, items.length);
      } else {
        this.updateValue({ name, checked }, type);
      }
    },
    // 处理options半选
    handleHalfCheck(type: string, len: number) {
      let items = [];
      if (type === 'not-slot') {
        items = this.selectAllComponents('.t-checkbox-option');
      } else {
        items = this.getRelationNodes('../checkbox/checkbox');
      }
      const all = items.filter((i) => !i.data.checkAll).map((item) => item.data.value);
      const currentVal = Array.from(new Set(this.data.value.filter((i) => all.indexOf(i) > -1)));
      const element = items.find((item) => item.data.checkAll);
      if (currentVal.length) {
        element?.changeActive(true);
        element?.changeCheckAllHalfStatus(currentVal.length !== len - 1);
      } else {
        element?.changeActive(false);
      }
    },
    // 设置可全选option选项
    handleOptionLinked() {
      const items = this.selectAllComponents('.t-checkbox-option');
      if (this.data.checkboxOptions.length) {
        items.forEach((item) => {
          item.setOptionLinked(true);
        });
      }
    },
  };
}

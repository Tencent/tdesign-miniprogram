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
      linked() {
        this.updateChildren();
      },
    },
  };

  data = {
    classPrefix: name,
    checkboxOptions: [],
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
      this.handleCreateMulCheckbox();
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
        items = this.selectAllComponents('.t-checkbox-option');
      }
      return items || [];
    },

    // slot插入选项
    updateChildren() {
      const items = this.getChilds();

      const { value, disabled } = this.data;
      if (items.length > 0) {
        items.forEach((item: any) => {
          !item.data.checkAll &&
            item.setData({
              checked: value?.indexOf(item.data.value) > -1,
            });
          item.setDisabled(disabled);
        });
        // 关联可全选项
        if (items.findIndex((item) => item.data.checkAll) > -1) {
          items.forEach((item) => {
            item.setOptionLinked(true);
          });
          this.handleHalfCheck(items.length);
        }
      }
    },
    updateValue({ name, checked }) {
      const { value, max } = this.data;
      let newValue = value;
      const keySet = this.getChilds()
        .map((item) => item.data.value)
        .reduce((set, key) => {
          set.add(key);
          return set;
        }, new Set());

      newValue = newValue.filter((value) => keySet.has(value));
      if (max && checked && newValue.length === max) {
        return;
      }
      if (checked) {
        newValue = newValue.concat(name);
      } else {
        const index = newValue.findIndex((v: string) => v === name);
        newValue.splice(index, 1);
      }
      this._trigger('change', { value: newValue });
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
        this.updateChildren();
      } catch (error) {
        console.error('error', error);
      }
    },
    // 处理全选
    handleCheckAll(e) {
      const { checked, option, name } = e.detail || e;
      const items = this.getChilds();

      if (!option) {
        if (!items?.length) {
          return;
        }
        this._trigger('change', {
          value: items
            .map((item) => {
              if (item.data.disabled) {
                return this.data.value.includes(item.data.value) ? item.data.value : '';
              }
              return checked && !item.data.checkAll ? item.data.value : '';
            })
            .filter((val) => val),
        });
      } else {
        this.updateValue({ name, checked });
      }
    },
    // 处理options半选
    handleHalfCheck(len: number) {
      const items = this.getChilds();
      const checkboxOptions = items.filter((i) => !i.data.checkAll);
      const all = checkboxOptions.map((item) => item.data.value);
      const enableValue = checkboxOptions.filter((i) => !i.data.disabled).map((item) => item.data.value);
      const currentVal = Array.from(new Set(this.data.value?.filter((i) => all.indexOf(i) > -1)));
      const element = items.find((item) => item.data.checkAll);
      if (currentVal.length) {
        element?.setData({ checked: true });
        element?.changeCheckAllHalfStatus(currentVal.length !== len - 1);
        // 取消全选
        element?.setCancel(enableValue.every((val) => currentVal.includes(val)));
      } else {
        element?.setData({ checked: false });
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

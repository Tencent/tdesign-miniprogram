import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';
import Props from '../radio/radio-group-props';

const { prefix } = config;
const name = `${prefix}-radio-group`;

@wxComponent()
export default class RadioGroup extends SuperComponent {
  externalClasses = ['t-class'];

  data = {
    classPrefix: name,
    radioOptions: [],
  };

  relations = {
    '../radio/radio': {
      type: 'descendant' as 'descendant',
      linked() {
        this.updateChildren();
      },
    },
  };

  properties = Props;

  lifetimes = {
    attached() {
      this.handleCreateMulRadio();
    },
  };

  observers = {
    value: function () {
      this.updateChildren();
    },
  };

  methods = {
    updateChildren() {
      let items = this.getRelationNodes('../radio/radio');
      if (!items.length) {
        items = this.selectAllComponents('.t-radio-option');
      }
      const { value, disabled } = this.data;
      if (items.length > 0) {
        items.forEach((item) => {
          item.changeActive(value === item.data.value);
          item.setDisabled(disabled);
        });
      }
    },
    updateValue(item) {
      this.setData({
        value: item.name,
      });
      this.updateChildren();
      this.triggerEvent('change', item.name);
    },
    // 处理 group选项
    handleGroupSelect(e) {
      const { name } = e.detail;
      this.setData({
        value: name,
      });
      this.triggerEvent('change', name);
      const items = this.selectAllComponents('.t-radio-option');
      if (items.length > 0) {
        items.forEach((item) => {
          item.changeActive(name === item.data.value);
        });
      }
    },
    // 设置option选项
    handleOptionLinked() {
      const items = this.selectAllComponents('.t-radio-option');
      if (this.data.radioOptions.length) {
        items.forEach((item) => {
          item.setOptionLinked(true);
        });
      }
    },
    // 支持自定义options
    handleCreateMulRadio() {
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
          radioOptions: optionsValue,
        });
        this.handleOptionLinked();
        this.updateChildren();
      } catch (error) {
        console.error('error', error);
      }
    },
  };
}

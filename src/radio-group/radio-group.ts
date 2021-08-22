import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';
import Props from '../radio/radio-group-props';
const { prefix } = config;
const name = `${prefix}-radio-group`;

@wxComponent()
export default class PullDownRefresh extends SuperComponent {
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
      this.handleOptionLinked();
    },
  };
  methods = {
    updateChildren() {
      const items = this.getRelationNodes('../radio/radio');
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
      const items = this.selectAllComponents('.t-radio');
      if (items.length > 0) {
        items.forEach((item) => {
          item.changeActive(name === item.data.value);
        });
      }
    },
    // 设置option选项
    handleOptionLinked() {
      const items = this.selectAllComponents('.t-radio');
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
      } catch (error) {
        console.log('error', error);
      }
    },
  };
}

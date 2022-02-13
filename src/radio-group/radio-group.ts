import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';
import Props from '../radio/radio-group-props';

const { prefix } = config;
const name = `${prefix}-radio-group`;

@wxComponent()
export default class RadioGroup extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  data = {
    prefix,
    classPrefix: name,
    radioOptions: [],
  };

  relations = {
    '../radio/radio': {
      type: 'descendant' as 'descendant',
      linked(target) {
        const { value, disabled, bordered } = this.data;
        target.setData({
          checked: value === target.data.value,
        });
        target.setDisabled(disabled);
        target.setBordered(bordered);
      },
    },
  };

  properties = {
    ...Props,
    bordered: {
      type: Boolean,
      value: false,
    },
  };

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  lifetimes = {
    attached() {
      this.initWithOptions();
    },
  };

  observers = {
    value() {
      this.getChilds().forEach((item) => {
        item.setData({
          checked: this.data.value === item.data.value,
        });
      });
    },
  };

  methods = {
    getChilds() {
      let items = this.getRelationNodes('../radio/radio');
      if (!items.length) {
        items = this.selectAllComponents(`.${prefix}-radio-option`);
      }
      return items;
    },

    updateValue(value) {
      this._trigger('change', { value });
    },

    handleRadioChange(e) {
      const { value } = e.target.dataset;

      this.updateValue(value);
    },

    // 支持自定义options
    initWithOptions() {
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
        console.error('error', error);
      }
    },
  };
}

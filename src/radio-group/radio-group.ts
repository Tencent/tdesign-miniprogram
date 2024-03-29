import config from '../common/config';
import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import props from './props';

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

  relations: RelationsOptions = {
    '../radio/radio': {
      type: 'descendant',
      linked(target) {
        const { value, disabled } = this.data;
        target.setData({
          checked: value === target.data.value,
        });
        target.setDisabled(disabled);
      },
    },
  };

  properties = props;

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  observers = {
    value(v) {
      this.getChildren().forEach((item) => {
        item.setData({
          checked: v === item.data.value,
        });
      });
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

  methods = {
    getChildren() {
      let items = this.$children;

      if (!items?.length) {
        items = this.selectAllComponents(`.${prefix}-radio-option`);
      }
      return items;
    },

    updateValue(value) {
      this._trigger('change', { value });
    },

    handleRadioChange(e) {
      const { checked } = e.detail;
      const { value, index, allowUncheck } = e.target.dataset;

      this._trigger('change', checked === false && allowUncheck ? { value: null, index } : { value, index });
    },

    // 支持自定义options
    initWithOptions() {
      const { options, value, keys, disabled } = this.data;
      // 数字数组｜字符串数组｜对像数组
      if (!options?.length || !Array.isArray(options)) {
        this.setData({
          radioOptions: [],
        });
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
              checked: value === element,
              disabled,
            });
          } else if (typeName === 'object') {
            optionsValue.push({
              ...element,
              label: element[keys?.label ?? 'label'],
              value: element[keys?.value ?? 'value'],
              checked: value === element[keys?.value ?? 'value'],
              disabled: element.disabled || disabled,
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

import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getCharacterLength } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-textarea`;

@wxComponent()
export default class Textarea extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  behaviors = ['wx://form-field'];

  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-textarea`,
    `${prefix}-class-label`,
    `${prefix}-class-indicator`,
  ];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    count: 0,
  };

  observers = {
    value(val) {
      this.updateCount(val ?? this.properties.defaultValue);
    },
  };

  lifetimes = {
    ready() {
      const { value, defaultValue } = this.properties;
      this.updateValue(value ?? defaultValue ?? '');
    },
  };

  methods = {
    updateCount(val) {
      const { maxcharacter, maxlength } = this.properties;
      const { count } = this.calculateValue(val, maxcharacter, maxlength);
      this.setData({
        count,
      });
    },

    updateValue(val) {
      const { maxcharacter, maxlength } = this.properties;
      const { value, count } = this.calculateValue(val, maxcharacter, maxlength);
      this.setData({
        value,
        count,
      });
    },

    calculateValue(value, maxcharacter, maxlength) {
      if (maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
        const { length, characters } = getCharacterLength('maxcharacter', value, maxcharacter);
        return {
          value: characters,
          count: length,
        };
      }
      if (maxlength > 0 && !Number.isNaN(maxlength)) {
        const { length, characters } = getCharacterLength('maxlength', value, maxlength);
        return {
          value: characters,
          count: length,
        };
      }
      return {
        value,
        count: value ? String(value).length : 0,
      };
    },

    onInput(event) {
      const { value, cursor } = event.detail;
      this.updateValue(value);
      this.triggerEvent('change', { value: this.data.value, cursor });
    },
    onFocus(event) {
      this.triggerEvent('focus', {
        ...event.detail,
      });
    },
    onBlur(event) {
      this.triggerEvent('blur', {
        ...event.detail,
      });
    },
    onConfirm(event) {
      this.triggerEvent('enter', {
        ...event.detail,
      });
    },
    onLineChange(event) {
      this.triggerEvent('line-change', {
        ...event.detail,
      });
    },
    onKeyboardHeightChange(e) {
      this.triggerEvent('keyboardheightchange', e.detail);
    },
  };
}

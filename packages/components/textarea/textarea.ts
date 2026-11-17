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
      // setData 是异步的，this.data.value 在本轮同步代码里仍是旧值。
      // 把截断后的值返回给调用方（onInput），避免 change 事件带出超长原始值。
      return value;
    },

    calculateValue(value, maxcharacter, maxlength) {
      const { allowInputOverMax } = this.properties;
      if (maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
        const { length, characters } = getCharacterLength(
          'maxcharacter',
          value,
          allowInputOverMax ? Infinity : maxcharacter,
        );
        return {
          value: characters,
          count: length,
        };
      }
      if (maxlength > 0 && !Number.isNaN(maxlength)) {
        const { length, characters } = getCharacterLength('maxlength', value, allowInputOverMax ? Infinity : maxlength);
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
      const nextValue = this.updateValue(value);
      // 使用 updateValue 返回的截断结果：this.setData 异步生效，
      // 直接读 this.data.value 会拿到未经 maxlength/maxcharacter 截断的旧值，
      // 导致外部收到的 value 长度超过 maxlength（issue #4705）。
      this.triggerEvent('change', { value: nextValue, cursor });
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

/*
 * @Author: rileycai
 * @Date: 2021-09-22 10:33:54
 * @LastEditTime: 2021-09-28 10:26:44
 * @LastEditors: Please set LastEditors
 * @Description: 新增textarea组件
 * @FilePath: /tdesign-miniprogram/src/textarea/textarea.ts
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getCharacterLength } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-textarea`;

@wxComponent()
export default class Textarea extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
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
      this.updateValue(val);
    },
  };

  methods = {
    updateValue(value) {
      const { maxcharacter, maxlength } = this.properties;
      if (maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
        const { length, characters } = getCharacterLength('maxcharacter', value, maxcharacter);
        this.setData({
          computedValue: characters,
          count: length,
        });
      } else if (maxlength > 0 && !Number.isNaN(maxlength)) {
        const { length, characters } = getCharacterLength('maxlength', value, maxlength);
        this.setData({
          computedValue: characters,
          count: length,
        });
      } else {
        this.setData({
          computedValue: value,
          count: value ? String(value).length : 0,
        });
      }
    },

    onInput(event) {
      const { value } = event.detail;
      this.updateValue(value);
      this.triggerEvent('change', { value: this.data.computedValue });
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
      this.triggerEvent('lineChange', {
        ...event.detail,
      });
    },
  };
}

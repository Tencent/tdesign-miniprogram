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

  externalClasses = [`${prefix}-class`, `${prefix}-class-textarea`, `${prefix}-class-label`];

  properties = {
    ...props,
    // 指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离
    cursorSpacing: {
      type: Number,
      value: 0,
    },
  };

  data = {
    prefix,
    classPrefix: name,
    count: 0,
  };

  /* 组件生命周期 */
  lifetimes = {
    ready() {
      this.getTextareaValueLength(this.data.value);
    },
  };

  methods = {
    getTextareaValueLength(textareaValue) {
      const { maxcharacter } = this.properties;
      if (maxcharacter && maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
        const { length = 0 } = getCharacterLength(textareaValue, maxcharacter);
        this.setData({
          count: length,
        });
      } else {
        this.setData({
          count: textareaValue ? String(textareaValue).length : 0,
        });
      }
    },
    onInput(event) {
      const { value } = event.detail;
      this.getTextareaValueLength(value);

      this.triggerEvent('change', {
        ...event.detail,
      });
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

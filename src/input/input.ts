/*
 * @Author: rileycai
 * @Date: 2021-09-21 19:10:10
 * @LastEditTime: 2021-09-21 19:41:08
 * @LastEditors: rileycai
 * @Description: textarea从input组件拆分出去
 * @FilePath: /tdesign-miniprogram/src/input/input.ts
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-input`;

@wxComponent()
export default class Input extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };

  externalClasses = ['wrapper-class', 'input-class', 'placeholder-class'];

  properties = props;

  data = {
    inputValue: '',
    classPrefix: name,
  };

  /* 组件生命周期 */
  lifetimes = {
    ready() {
      this.setData({ inputValue: this.data.value });
    },
  };

  methods = {
    onInput(event) {
      const { value } = event.detail;
      this.setData({ inputValue: value });

      this.triggerEvent('input', {
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
    clearInput(event) {
      this.setData({ inputValue: '' });
      this.triggerEvent('clear', {
        ...event.detail,
      });
    },
  };
}

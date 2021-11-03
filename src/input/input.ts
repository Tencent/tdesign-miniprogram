/*
 * @Author: rileycai
 * @Date: 2021-09-21 19:10:10
 * @LastEditTime: 2021-09-28 10:26:57
 * @LastEditors: Please set LastEditors
 * @Description: textarea从input组件拆分出去
 * @FilePath: /tdesign-miniprogram/src/input/input.ts
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getCharacterLength } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-input`;

@wxComponent()
export default class Input extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };

  externalClasses = ['t-class', 't-class-input', 't-class-placeholder', 't-class-error-msg'];

  properties = props;

  data = {
    inputValue: '',
    classPrefix: name,
    characterLength: 0,
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
      const { maxcharacter } = this.properties;
      if (maxcharacter && maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
        const { characters = '', length = 0 } = getCharacterLength(value, maxcharacter);
        this.setData({
          value: characters,
          characterLength: length,
        });
      } else {
        this.setData({ inputValue: value });
      }

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
    clearInput(event) {
      this.setData({ inputValue: '', value: '' });
      this.triggerEvent('clear', {
        ...event.detail,
      });
    },
  };
}

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
import { getCharacterLength, setIcon } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-input`;

@wxComponent()
export default class Input extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };

  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-prefix-icon`,
    `${prefix}-class-label`,
    `${prefix}-class-input`,
    `${prefix}-class-clearable`,
    `${prefix}-class-suffix`,
    `${prefix}-class-suffix-icon`,
    `${prefix}-class-tips`,
  ];

  behaviors = ['wx://form-field'];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    classBasePrefix: prefix,
  };

  lifetimes = {
    ready() {
      const { value } = this.properties;
      this.updateValue(value);
    },
  };

  observers = {
    prefixIcon(prefixIcon) {
      const obj = setIcon('prefixIcon', prefixIcon, '');
      this.setData({
        ...obj,
      });
    },

    suffixIcon(suffixIcon) {
      const obj = setIcon('suffixIcon', suffixIcon, '');
      this.setData({
        ...obj,
      });
    },

    clearable(clearable) {
      const obj = setIcon('clearable', clearable, 'close-circle-filled');
      this.setData({
        ...obj,
      });
    },
  };

  methods = {
    updateValue(value) {
      const { maxcharacter, maxlength } = this.properties;
      if (maxcharacter && maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
        const { length, characters } = getCharacterLength('maxcharacter', value, maxcharacter);
        this.setData({
          value: characters,
          count: length,
        });
      } else if (maxlength > 0 && !Number.isNaN(maxlength)) {
        const { length, characters } = getCharacterLength('maxlength', value, maxlength);
        this.setData({
          value: characters,
          count: length,
        });
      } else {
        this.setData({
          value,
          count: value ? String(value).length : 0,
        });
      }
    },
    onInput(e) {
      const { value, cursor, keyCode } = e.detail;
      this.updateValue(value);
      this.triggerEvent('change', { value: this.data.value, cursor, keyCode });
    },
    onFocus(e) {
      this.triggerEvent('focus', e.detail);
    },
    onBlur(e) {
      this.triggerEvent('blur', e.detail);
    },
    onConfirm(e) {
      this.triggerEvent('enter', e.detail);
    },
    onSuffixClick() {
      this.triggerEvent('click', { trigger: 'suffix' });
    },
    onSuffixIconClick() {
      this.triggerEvent('click', { trigger: 'suffix-icon' });
    },
    clearInput(e) {
      this.triggerEvent('clear', e.detail);
      this.setData({ value: '' });
    },
    onKeyboardHeightChange(e) {
      this.triggerEvent('keyboardheightchange', e.detail);
    },
  };
}

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
    prefixIcon() {
      this.setPrefixIcon();
    },

    suffixIcon() {
      this.setSuffixIcon();
    },

    clearable() {
      this.setClearableIcon();
    },
  };

  methods = {
    setPrefixIcon() {
      const { prefixIcon } = this.properties;
      if (prefixIcon) {
        if (typeof prefixIcon === 'string') {
          this.setData({
            prefixIconName: prefixIcon,
            prefixIconData: {},
          });
        } else if (typeof prefixIcon === 'object') {
          this.setData({
            prefixIconName: '',
            prefixIconData: prefixIcon,
          });
        }
      }
    },

    setSuffixIcon() {
      const { suffixIcon } = this.properties;
      if (suffixIcon) {
        if (typeof suffixIcon === 'string') {
          this.setData({
            suffixIconName: suffixIcon,
            suffixIconData: {},
          });
        } else if (typeof suffixIcon === 'object') {
          this.setData({
            suffixIconName: '',
            suffixIconData: suffixIcon,
          });
        }
      }
    },

    setClearableIcon() {
      const { clearable } = this.properties;
      if (!clearable) {
        this.setData({ clearableIconName: '', clearableIconData: {} });
      } else if (typeof clearable === 'string') {
        this.setData({
          clearableIconName: clearable,
          clearableIconData: {},
        });
      } else if (typeof clearable === 'object') {
        this.setData({
          clearableIconName: '',
          clearableIconData: clearable,
        });
      } else {
        this.setData({ clearableIconName: 'close-circle-filled', clearableIconData: {} });
      }
    },

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
    clearInput(e) {
      this.triggerEvent('clear', e.detail);
      this.setData({ value: '' });
    },
    onKeyboardHeightChange(e) {
      this.triggerEvent('keyboardheightchange', e.detail);
    },
  };
}

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
    `${prefix}-class-input`,
    `${prefix}-class-placeholder`,
    `${prefix}-class-error-msg`,
  ];

  behaviors = ['wx://form-field'];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    classBasePrefix: prefix,
    characterLength: 0,
  };

  methods = {
    onInput(e) {
      const { value, cursor, keyCode } = e.detail;
      const { maxcharacter } = this.properties;

      if (maxcharacter && maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
        const { characters = '', length = 0 } = getCharacterLength(value, maxcharacter);

        this.triggerEvent('change', { value: characters, cursor, keyCode });
        this.setData({
          value: characters,
          characterLength: length,
        });
      } else {
        this.triggerEvent('change', { value, cursor, keyCode });
      }
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

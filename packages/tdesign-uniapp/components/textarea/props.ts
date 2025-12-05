/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdTextareaProps } from './type';
export default {
  /** 键盘弹起时，是否自动上推页面 */
  adjustPosition: {
    type: Boolean,
    default: true,
  },
  /** 超出 `maxlength` 或 `maxcharacter` 之后是否还允许输入 */
  allowInputOverMax: Boolean,
  /** 自动聚焦，拉起键盘 */
  autofocus: Boolean,
  /** 是否自动增高，值为 true 时，style.height 不生效。支持传入对象，如 { maxHeight: 120, minHeight: 20 } */
  autosize: {
    type: [Boolean, Object],
    default: false as TdTextareaProps['autosize'],
  },
  /** 是否显示外边框 */
  bordered: Boolean,
  /** 点击键盘右下角按钮时是否保持键盘不收起点 */
  confirmHold: Boolean,
  /** 设置键盘右下角按钮的文字，仅在 type='text'时生效 */
  confirmType: {
    type: String,
    default: 'return' as TdTextareaProps['confirmType'],
    validator(val: TdTextareaProps['confirmType']): boolean {
      if (!val) return true;
      return ['return', 'send', 'search', 'next', 'go', 'done'].includes(val);
    },
  },
  /** 指定 focus 时的光标位置 */
  cursor: {
    type: Number,
    default: -1,
  },
  /** 【试验性】光标颜色，仅在 Skyline 下有效 */
  cursorColor: {
    type: String,
    default: '#0052d9',
  },
  /** 指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离 */
  cursorSpacing: {
    type: Number,
    default: 0,
  },
  /** 是否去掉 iOS 下的默认内边距 */
  disableDefaultPadding: Boolean,
  /** 是否禁用文本框 */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 如果 textarea 是在一个 `position:fixed` 的区域，需要显式指定属性 fixed 为 true */
  fixed: Boolean,
  /** 自动聚焦 */
  focus: Boolean,
  /** focus时，点击页面的时候不收起键盘 */
  holdKeyboard: Boolean,
  /** 显示文本计数器，如 0/140。当 `maxlength < 0 && maxcharacter < 0` 成立时， indicator无效 */
  indicator: Boolean,
  /** 左侧文本 */
  label: {
    type: String,
  },
  /** 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度 */
  maxcharacter: {
    type: Number,
  },
  /** 用户最多可以输入的字符个数，值为 -1 的时候不限制最大长度 */
  maxlength: {
    type: Number,
    default: -1,
  },
  /** 占位符 */
  placeholder: {
    type: String,
    default: undefined,
  },
  /** 指定 placeholder 的样式类，目前仅支持color,font-size和font-weight */
  placeholderClass: {
    type: String,
    default: 'textarea-placeholder',
  },
  /** 指定 placeholder 的样式，目前仅支持 color ,font-size和font-weight */
  placeholderStyle: {
    type: String,
    default: '',
  },
  /** 只读状态 */
  readonly: {
    type: Boolean,
    default: undefined,
  },
  /** 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 */
  selectionEnd: {
    type: Number,
    default: -1,
  },
  /** 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 */
  selectionStart: {
    type: Number,
    default: -1,
  },
  /** 是否显示键盘上方带有”完成“按钮那一栏 */
  showConfirmBar: {
    type: Boolean,
    default: true,
  },
  /** 文本框值 */
  value: {
    type: [String, Number],
  },
  /** 文本框值，非受控属性 */
  defaultValue: {
    type: [String, Number],
  },
  /** 失去焦点时触发 */
  onBlur: {
    type: Function,
    default: () => ({}),
  },
  /** 输入内容变化时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 点击完成时触发 */
  onEnter: {
    type: Function,
    default: () => ({}),
  },
  /** 获得焦点时触发 */
  onFocus: {
    type: Function,
    default: () => ({}),
  },
  /** 键盘高度发生变化的时候触发此事件 */
  onKeyboardheightchange: {
    type: Function,
    default: () => ({}),
  },
  /** 行高发生变化时触发 */
  onLineChange: {
    type: Function,
    default: () => ({}),
  },
};

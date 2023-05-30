/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTextareaProps } from './type';
const props: TdTextareaProps = {
  /** 键盘弹起时，是否自动上推页面 */
  adjustPosition: {
    type: Boolean,
    value: true,
  },
  /** 自动聚焦，拉起键盘 */
  autofocus: {
    type: Boolean,
    value: false,
  },
  /** 是否自动增高，值为 autosize 时，style.height 不生效 */
  autosize: {
    type: null,
    value: false,
  },
  /** 点击键盘右下角按钮时是否保持键盘不收起点 */
  confirmHold: {
    type: Boolean,
    value: false,
  },
  /** 设置键盘右下角按钮的文字，仅在 type='text'时生效 */
  confirmType: {
    type: String,
    value: 'return',
  },
  /** 指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离 */
  cursorSpacing: {
    type: Number,
    value: 0,
  },
  /** 是否禁用文本框 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 组件类名，分别用于表示组件外层元素、输入框、占位符、标签名等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 自动聚焦 */
  focus: {
    type: Boolean,
    value: false,
  },
  /** 左侧文本 */
  label: {
    type: String,
  },
  /** 如果 textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true */
  fixed: {
    type: Boolean,
    value: false,
  },
  /** 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度 */
  maxcharacter: {
    type: Number,
  },
  /** 用户最多可以输入的字符个数。默认为 -1，不限制输入长度 */
  maxlength: {
    type: Number,
    value: -1,
  },
  /** 指定 placeholder 的样式，目前仅支持 color ,font-size和font-weight */
  placeholder: {
    type: String,
    value: undefined,
  },
  /** 占位符样式 */
  placeholderStyle: {
    type: String,
    value: '',
  },
  /** 文本框值 */
  value: {
    type: String,
    value: null,
  },
  /** 文本框值，非受控属性 */
  defaultValue: {
    type: String,
    value: '',
  },
  /** 是否显示外边框 */
  bordered: {
    type: Boolean,
    value: false,
  },
  /**
   * 显示文本计数器，如 0/140。当 `maxlength < 0 && maxcharacter < 0` 成立时， indicator无效
   */
  indicator: {
    type: Boolean,
    value: false,
  },
  /** 指定focus时的光标位置 */
  cursor: {
    type: Number,
    value: -1,
  },
  /** 是否显示键盘上方带有”完成“按钮那一栏 */
  showConfirmBar: {
    type: Boolean,
    value: true,
  },
  /** 光标起始位置，自动聚集时有效，需与selection-end搭配使用 */
  selectionStart: {
    type: Number,
    value: -1,
  },
  /** 光标结束位置，自动聚集时有效，需与selection-start搭配使用 */
  selectionEnd: {
    type: Number,
    value: -1,
  },
  /** 是否去掉 iOS 下的默认内边距 */
  disableDefaultPadding: {
    type: Boolean,
    value: false,
  },
  /** focus时，点击页面的时候不收起键盘 */
  holdKeyboard: {
    type: Boolean,
    value: false,
  },
};

export default props;

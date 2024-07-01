/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdSearchProps } from './type';
const props: TdSearchProps = {
  /** 自定义右侧操作按钮文字 */
  action: {
    type: String,
    value: '',
  },
  /** 键盘弹起时，是否自动上推页面 */
  adjustPosition: {
    type: Boolean,
    value: true,
  },
  /** 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) */
  alwaysEmbed: {
    type: Boolean,
    value: false,
  },
  /** 是否居中 */
  center: {
    type: Boolean,
    value: false,
  },
  /** 是否启用清除控件 */
  clearable: {
    type: Boolean,
    value: true,
  },
  /** 点击键盘右下角按钮时是否保持键盘不收起 */
  confirmHold: {
    type: Boolean,
    value: false,
  },
  /** 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />`send` 右下角按钮为“发送”；<br />`search` 右下角按钮为“搜索”；<br />`next` 右下角按钮为“下一个”；<br />`go` 右下角按钮为“前往”；<br />`done` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) */
  confirmType: {
    type: String,
    value: 'search',
  },
  /** 指定 focus 时的光标位置 */
  cursor: {
    type: Number,
  },
  /** 搜索框聚焦时底部与键盘的距离 */
  cursorSpacing: {
    type: Number,
    value: 0,
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 是否聚焦 */
  focus: {
    type: Boolean,
    value: false,
  },
  /** focus时，点击页面的时候不收起键盘 */
  holdKeyboard: {
    type: Boolean,
    value: false,
  },
  /** 左侧图标 */
  leftIcon: {
    type: String,
    value: 'search',
  },
  /** 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 */
  maxcharacter: {
    type: Number,
  },
  /** 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为 -1，不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 */
  maxlength: {
    type: Number,
    value: -1,
  },
  /** 占位符 */
  placeholder: {
    type: String,
    value: '',
  },
  /** 指定 placeholder 的样式类 */
  placeholderClass: {
    type: String,
    value: 'input-placeholder',
  },
  /** 指定 placeholder 的样式 */
  placeholderStyle: {
    type: String,
    value: '',
  },
  /** 预览结果列表 */
  resultList: {
    type: Array,
    value: [],
  },
  /** 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 */
  selectionEnd: {
    type: Number,
    value: -1,
  },
  /** 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 */
  selectionStart: {
    type: Number,
    value: -1,
  },
  /** 搜索框形状 */
  shape: {
    type: String,
    value: 'square',
  },
  /** 自定义组件样式 */
  style: {
    type: String,
    value: '',
  },
  /** 拉起键盘的类型 */
  type: {
    type: String,
    value: 'text',
  },
  /** 值 */
  value: {
    type: String,
    value: '',
  },
};

export default props;

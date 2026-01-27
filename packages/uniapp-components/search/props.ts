/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdSearchProps } from './type';
export default {
  /** 自定义右侧操作按钮文字 */
  action: {
    type: String,
    default: '' as TdSearchProps['action'],
  },
  /** 键盘弹起时，是否自动上推页面 */
  adjustPosition: {
    type: Boolean,
    default: true,
  },
  /** 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) */
  alwaysEmbed: Boolean,
  /** 是否居中 */
  center: Boolean,
  /** 清空图标触发方式，仅在输入框有值时有效 */
  clearTrigger: {
    type: String,
    default: 'always' as TdSearchProps['clearTrigger'],
    validator(val: TdSearchProps['clearTrigger']): boolean {
      if (!val) return true;
      return ['always', 'focus'].includes(val);
    },
  },
  /** 是否启用清除控件 */
  clearable: {
    type: Boolean,
    default: true,
  },
  /** 点击键盘右下角按钮时是否保持键盘不收起 */
  confirmHold: Boolean,
  /** 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />`send` 右下角按钮为“发送”；<br />`search` 右下角按钮为“搜索”；<br />`next` 右下角按钮为“下一个”；<br />`go` 右下角按钮为“前往”；<br />`done` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) */
  confirmType: {
    type: String,
    default: 'search' as TdSearchProps['confirmType'],
    validator(val: TdSearchProps['confirmType']): boolean {
      if (!val) return true;
      return ['send', 'search', 'next', 'go', 'done'].includes(val);
    },
  },
  /** 指定 focus 时的光标位置 */
  cursor: {
    type: Number,
    default: -1,
  },
  /** 光标颜色。iOS 下的格式为十六进制颜色值 #000000，安卓下的只支持 default 和 green，Skyline 下无限制 */
  cursorColor: {
    type: String,
    default: '#0052d9',
  },
  /** 搜索框聚焦时底部与键盘的距离 */
  cursorSpacing: {
    type: Number,
    default: 0,
  },
  /** 是否禁用 */
  disabled: Boolean,
  /** 是否聚焦 */
  focus: Boolean,
  /** focus时，点击页面的时候不收起键盘 */
  holdKeyboard: Boolean,
  /** 左侧图标。如果需要使用 `Slot` 进行自定义，必须将该值设置为假值 */
  leftIcon: {
    type: String,
    default: 'search' as TdSearchProps['leftIcon'],
  },
  /** 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 */
  maxcharacter: {
    type: Number,
  },
  /** 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为 -1，不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 */
  maxlength: {
    type: Number,
    default: -1,
  },
  /** 占位符 */
  placeholder: {
    type: String,
    default: '',
  },
  /** 指定 placeholder 的样式类 */
  placeholderClass: {
    type: String,
    default: 'input-placeholder',
  },
  /** 指定 placeholder 的样式 */
  placeholderStyle: {
    type: String,
    default: '',
  },
  /** 只读状态 */
  readonly: {
    type: Boolean,
    default: undefined,
  },
  /** 预览结果列表 */
  resultList: {
    type: Array,
    default: (): TdSearchProps['resultList'] => [],
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
  /** 搜索框形状 */
  shape: {
    type: String,
    default: 'square' as TdSearchProps['shape'],
    validator(val: TdSearchProps['shape']): boolean {
      if (!val) return true;
      return ['square', 'round'].includes(val);
    },
  },
  /** 拉起键盘的类型 */
  type: {
    type: String,
    default: 'text' as TdSearchProps['type'],
    validator(val: TdSearchProps['type']): boolean {
      if (!val) return true;
      return ['text', 'number', 'idcard', 'digit', 'nickname'].includes(val);
    },
  },
  /** 值 */
  value: {
    type: String,
    default: '',
  },
  /** 点击右侧操作按钮文字时触发 */
  onActionClick: {
    type: Function,
    default: () => ({}),
  },
  /** 失去焦点时触发 */
  onBlur: {
    type: Function,
    default: () => ({}),
  },
  /** 值发生变化时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 点击清除时触发 */
  onClear: {
    type: Function,
    default: () => ({}),
  },
  /** 聚焦时触发 */
  onFocus: {
    type: Function,
    default: () => ({}),
  },
  /** 提交时触发 */
  onSubmit: {
    type: Function,
    default: () => ({}),
  },
};

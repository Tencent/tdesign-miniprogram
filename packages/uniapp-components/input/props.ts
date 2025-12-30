/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdInputProps } from './type';
export default {
  /** 键盘弹起时，是否自动上推页面 */
  adjustPosition: {
    type: Boolean,
    default: true,
  },
  /** 文本内容位置，居左/居中/居右 */
  align: {
    type: String,
    default: 'left' as TdInputProps['align'],
    validator(val: TdInputProps['align']): boolean {
      if (!val) return true;
      return ['left', 'center', 'right'].includes(val);
    },
  },
  /** 超出 `maxlength` 或 `maxcharacter` 之后是否允许继续输入 */
  allowInputOverMax: Boolean,
  /** 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) */
  alwaysEmbed: Boolean,
  /** (即将废弃，请直接使用 focus )自动聚焦，拉起键盘 */
  autoFocus: Boolean,
  /** 是否开启无边框模式 */
  borderless: Boolean,
  /** 清空图标触发方式，仅在输入框有值时有效 */
  clearTrigger: {
    type: String,
    default: 'always' as TdInputProps['clearTrigger'],
    validator(val: TdInputProps['clearTrigger']): boolean {
      if (!val) return true;
      return ['always', 'focus'].includes(val);
    },
  },
  /** 是否可清空，默认不启动。值为 `true` 表示使用默认清空按钮，值为 `Object` 表示透传至 `icon` */
  clearable: {
    type: [Boolean, Object],
    default: false as TdInputProps['clearable'],
  },
  /** 点击键盘右下角按钮时是否保持键盘不收起 */
  confirmHold: Boolean,
  /** 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />`send` 右下角按钮为“发送”；<br />`search` 右下角按钮为“搜索”；<br />`next` 右下角按钮为“下一个”；<br />`go` 右下角按钮为“前往”；<br />`done` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) */
  confirmType: {
    type: String,
    default: 'done' as TdInputProps['confirmType'],
    validator(val: TdInputProps['confirmType']): boolean {
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
  /** 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 */
  cursorSpacing: {
    type: Number,
    default: 0,
  },
  /** 是否禁用输入框 */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 获取焦点 */
  focus: Boolean,
  /** 指定输入框展示值的格式 */
  format: {
    type: Function,
  },
  /** focus时，点击页面的时候不收起键盘 */
  holdKeyboard: Boolean,
  /** 左侧文本 */
  label: {
    type: String,
  },
  /** 标题输入框布局方式 */
  layout: {
    type: String,
    default: 'horizontal' as TdInputProps['layout'],
    validator(val: TdInputProps['layout']): boolean {
      if (!val) return true;
      return ['vertical', 'horizontal'].includes(val);
    },
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
    default: undefined,
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
  /** 组件前置图标。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon` */
  prefixIcon: {
    type: [String, Object],
  },
  /** 只读状态 */
  readonly: {
    type: Boolean,
    default: undefined,
  },
  /** 安全键盘加密公钥的路径，只支持包内路径 */
  safePasswordCertPath: {
    type: String,
    default: '',
  },
  /** 安全键盘计算 hash 的算法表达式，如 `md5(sha1('foo' + sha256(sm3(password + 'bar'))))` */
  safePasswordCustomHash: {
    type: String,
    default: '',
  },
  /** 安全键盘输入密码长度 */
  safePasswordLength: {
    type: Number,
  },
  /** 安全键盘加密盐值 */
  safePasswordNonce: {
    type: String,
    default: '',
  },
  /** 安全键盘计算 hash 盐值，若指定custom-hash 则无效 */
  safePasswordSalt: {
    type: String,
    default: '',
  },
  /** 安全键盘加密时间戳 */
  safePasswordTimeStamp: {
    type: Number,
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
  /** 输入框状态 */
  status: {
    type: String,
    default: 'default' as TdInputProps['status'],
    validator(val: TdInputProps['status']): boolean {
      if (!val) return true;
      return ['default', 'success', 'warning', 'error'].includes(val);
    },
  },
  /** 后置图标前的后置内容 */
  suffix: {
    type: String,
  },
  /** 后置文本内容。值为字符串则表示图标名称，值为 `Object` 类型，表示透传至 `icon` */
  suffixIcon: {
    type: [String, Object],
  },
  /** 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 */
  tips: {
    type: String,
  },
  /** 输入框类型 */
  type: {
    type: String,
    default: 'text' as TdInputProps['type'],
    validator(val: TdInputProps['type']): boolean {
      if (!val) return true;
      return ['text', 'number', 'idcard', 'digit', 'safe-password', 'password', 'nickname'].includes(val);
    },
  },
  /** 输入框的值 */
  value: {
    type: [String, Number],
  },
  /** 失去焦点时触发 */
  onBlur: {
    type: Function,
    default: () => ({}),
  },
  /** 输入框值发生变化时触发；cursor 为光标位置； */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 清空按钮点击时触发 */
  onClear: {
    type: Function,
    default: () => ({}),
  },
  /** 点击事件。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts)。 */
  onClick: {
    type: Function,
    default: () => ({}),
  },
  /** 回车键按下时触发 */
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
  /** 用户昵称审核完毕后触发，仅在 type 为 "nickname" 时有效 */
  onNicknamereview: {
    type: Function,
    default: () => ({}),
  },
  /** 字数超出限制时触发 */
  onValidate: {
    type: Function,
    default: () => ({}),
  },
};

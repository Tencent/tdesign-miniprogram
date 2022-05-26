/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdInputProps } from './type';
const props: TdInputProps = {
  /** 文本内容位置，居左/居中/居右 */
  align: {
    type: String,
    value: 'left',
  },
  /** 是否开启无边框模式 */
  borderless: {
    type: Boolean,
    value: false,
  },
  /** 是否可清空 */
  clearable: {
    type: Boolean,
    value: false,
  },
  /** 是否禁用输入框 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 已废弃。错误提示文本，值为空不显示（废弃属性，如果需要，请更为使用 status 和 tips） */
  errorMessage: {
    type: String,
    value: '',
  },
  /** 组件类名，用于设置组件外层元素、输入框、占位符、错误信息等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 【开发中】指定输入框展示值的格式 */
  format: {
    type: null,
  },
  /** 左侧文本 */
  label: {
    type: String,
  },
  /** 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 */
  maxcharacter: {
    type: Number,
  },
  /** 用户最多可以输入的文本长度，一个中文等于一个计数长度。值小于等于 0 的时候，则表示不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 */
  maxlength: {
    type: Number,
  },
  /** 占位符 */
  placeholder: {
    type: String,
    value: undefined,
  },
  /** 组件前置图标，值为字符串则表示图标名称 */
  prefixIcon: {
    type: String,
  },
  /** 只读状态 */
  readonly: {
    type: Boolean,
    value: false,
  },
  /** 输入框尺寸 */
  size: {
    type: String,
    value: 'small',
  },
  /** 输入框状态 */
  status: {
    type: String,
    value: 'default',
  },
  /** 后置图标前的后置内容 */
  suffix: {
    type: String,
  },
  /** 后置文本内容，值为字符串则表示图标名称 */
  suffixIcon: {
    type: String,
  },
  /** 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 */
  tips: {
    type: String,
  },
  /** 输入框的值 */
  value: {
    type: String,
    optionalTypes: [Number],
    value: null,
  },
  /** 输入框的值，非受控属性 */
  defaultValue: {
    type: String,
    optionalTypes: [Number],
  },
  /** input 的类型。<br />具体释义：<br />`text` 文本输入键盘；<br />`number` 数字输入键盘；<br />`idcard` 身份证输入键盘；<br />`digit` 带小数点的数字键盘；<br />`safe-password` 密码安全输入键盘 <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/safe-password.html">指引</a>；<br />`nickname` 昵称输入键盘。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) */
  type: {
    type: String,
    value: 'text',
  },
  /** 指定 placeholder 的样式 */
  placeholderStyle: {
    type: String,
    value: '',
  },
  /** 指定 placeholder 的样式类 */
  placeholderClass: {
    type: String,
    value: 'input-placeholder',
  },
  /** 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 */
  cursorSpacing: {
    type: Number,
    value: 0,
  },
  /** (即将废弃，请直接使用 focus )自动聚焦，拉起键盘 */
  autoFocus: {
    type: Boolean,
    value: false,
  },
  /** 获取焦点 */
  focus: {
    type: Boolean,
    value: false,
  },
  /** 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />`send` 右下角按钮为“发送”；<br />`search` 右下角按钮为“搜索”；<br />`next` 右下角按钮为“下一个”；<br />`go` 右下角按钮为“前往”；<br />`done` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) */
  confirmType: {
    type: String,
    value: 'done',
  },
  /** 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) */
  alwaysEmbed: {
    type: Boolean,
    value: false,
  },
  /** 点击键盘右下角按钮时是否保持键盘不收起 */
  confirmHold: {
    type: Boolean,
    value: false,
  },
  /** 指定focus时的光标位置 */
  cursor: {
    type: Number,
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
  /** 键盘弹起时，是否自动上推页面 */
  adjustPosition: {
    type: Boolean,
    value: true,
  },
  /** focus时，点击页面的时候不收起键盘 */
  holdKeyboard: {
    type: Boolean,
    value: false,
  },
  /** 安全键盘加密公钥的路径，只支持包内路径 */
  safePasswordCertPath: {
    type: String,
    value: '',
  },
  /** 安全键盘输入密码长度 */
  safePasswordLength: {
    type: Number,
  },
  /** 安全键盘加密时间戳 */
  safePasswordTimeStamp: {
    type: Number,
  },
  /** 安全键盘加密盐值 */
  safePasswordNonce: {
    type: String,
    value: '',
  },
  /** 安全键盘计算hash盐值，若指定custom-hash 则无效 */
  safePasswordSalt: {
    type: String,
    value: '',
  },
  /** 安全键盘计算hash的算法表达式，如 `md5(sha1('foo' + sha256(sm3(password + 'bar'))))` */
  safePasswordCustomHash: {
    type: String,
    value: '',
  },
};

export default props;

/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdInputProps } from './type';
const props: TdInputProps = {
  /** 键盘弹起时，是否自动上推页面 */
  adjustPosition: {
    type: Boolean,
    value: true,
  },
  /** 文本内容位置，居左/居中/居右 */
  align: {
    type: String,
    value: 'left',
  },
  /** 【讨论中】是否开启无边框模式 */
  borderless: {
    type: Boolean,
    value: false,
  },
  /** 是否可清空 */
  clearable: {
    type: Boolean,
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
    value: 'done',
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
  /** 自动聚焦 */
  focus: {
    type: Boolean,
    value: false,
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
  /** 输入框类型 */
  type: {
    type: String,
    value: 'text',
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
};

export default props;

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
  /** 是否居中 */
  center: {
    type: Boolean,
    value: false,
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 组件外部样式类名，分别用于设置组件外层类名、输入框类名、输入框容器类名、右侧 cancel 文本类名、左侧图标类名、右侧图标类型 */
  externalClasses: {
    type: Array,
  },
  /** 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 */
  cursorSpacing: {
    type: Number,
    value: 0,
  },
  /** 是否聚焦 */
  focus: {
    type: Boolean,
    value: false,
  },
  /** 左侧文本 */
  label: {
    type: String,
    value: '',
  },
  /** 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 */
  maxcharacter: {
    type: Number,
  },
  /** 用户最多可以输入的文本长度，一个中文等于一个计数长度，默认为 -1，不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 */
  maxlength: {
    type: Number,
    value: -1,
  },
  /** 左侧图标 */
  leftIcon: {
    type: String,
    value: 'search',
  },
  /** 占位符 */
  placeholder: {
    type: String,
    value: '',
  },
  /** 右侧图标 */
  rightIcon: {
    type: String,
    value: 'close-circle-filled',
  },
  /** 搜索框形状 */
  shape: {
    type: String,
    value: 'square',
  },
  /** 值 */
  value: {
    type: String,
    value: '',
  },
  /** 是否启用清除控件 */
  clearable: {
    type: Boolean,
    value: true,
  },
  /** 控制拉起的键盘类型 */
  type: {
    type: String,
    value: 'text',
  },
};

export default props;

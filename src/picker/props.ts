/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdPickerProps } from './type';
const props: TdPickerProps = {
  /** 自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible */
  autoClose: {
    type: Boolean,
    value: true,
  },
  /** 取消按钮文字 */
  cancelBtn: {
    type: null,
    value: true,
  },
  /** 确定按钮文字 */
  confirmBtn: {
    type: null,
    value: true,
  },
  /** 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 TNode 表示自定义头部内容 */
  header: {
    type: Boolean,
    value: true,
  },
  /** 用来定义 value / label 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** 标题 */
  title: {
    type: String,
    value: '',
  },
  /** 选中值 */
  value: {
    type: Array,
    value: null,
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: Array,
  },
  /** 是否显示 */
  visible: {
    type: Boolean,
    value: false,
  },
  /** popupProps透传 */
  popupProps: {
    type: Object,
    value: {},
  },
};

export default props;

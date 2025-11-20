/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdPickerProps } from './type';
export default {
  /** 自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible */
  autoClose: {
    type: Boolean,
    default: true,
  },
  /** 取消按钮文字 */
  cancelBtn: {
    type: [String, Boolean],
    default: true as TdPickerProps['cancelBtn'],
  },
  /** 确定按钮文字 */
  confirmBtn: {
    type: [String, Boolean],
    default: true as TdPickerProps['confirmBtn'],
  },
  /** 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容 */
  header: {
    type: Boolean,
    default: true as TdPickerProps['header'],
  },
  /** PickerItem 的子项高度，单位 rpx */
  itemHeight: {
    type: Number,
    default: 80,
  },
  /** 用来定义 value / label / icon 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** 透传 Popup 组件全部属性 */
  popupProps: {
    type: Object,
    default: () => ({}),
  },
  /** 标题 */
  title: {
    type: String,
    default: '',
  },
  /** 是否使用弹出层包裹 */
  usePopup: {
    type: Boolean,
    default: true,
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: Boolean,
  /** 选中值 */
  value: {
    type: Array,
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: Array,
  },
  /** 是否显示。支持语法糖 `v-model:visible` */
  visible: Boolean,
  /** 点击取消按钮时触发 */
  onCancel: {
    type: Function,
    default: () => ({}),
  },
  /** 选中变化时候触发，即确认变化时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 关闭时触发 */
  onClose: {
    type: Function,
    default: () => ({}),
  },
  /** 点击确认按钮时触发 */
  onConfirm: {
    type: Function,
    default: () => ({}),
  },
  /** 任何一列选中都会触发，不同的列参数不同。`column` 表示第几列变化，`index` 表示变化那一列的选中项下标 */
  onPick: {
    type: Function,
    default: () => ({}),
  },
};

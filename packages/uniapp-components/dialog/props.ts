/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdDialogProps } from './type';
export default {
  /** 操作栏 */
  actions: {
    type: Array,
  },
  /** 多按钮排列方式 */
  buttonLayout: {
    type: String,
    default: 'horizontal' as TdDialogProps['buttonLayout'],
    validator(val: TdDialogProps['buttonLayout']): boolean {
      if (!val) return true;
      return ['horizontal', 'vertical'].includes(val);
    },
  },
  /** 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 Slot 自定义按钮时，需自行控制取消事件 */
  cancelBtn: {
    type: [String, Object],
  },
  /** 是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；使用 Object 时透传至图标组件 */
  closeBtn: {
    type: [Boolean, Object],
    default: false as TdDialogProps['closeBtn'],
  },
  /** 点击蒙层时是否触发关闭事件 */
  closeOnOverlayClick: Boolean,
  /** 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 Slot 自定义按钮时，需自行控制确认事件 */
  confirmBtn: {
    type: [String, Object],
  },
  /** 内容 */
  content: {
    type: String,
  },
  /** 透传至 Overlay 组件 */
  overlayProps: {
    type: Object,
    default: () => ({}),
  },
  /** 防止滚动穿透 */
  preventScrollThrough: {
    type: Boolean,
    default: true,
  },
  /** 是否显示遮罩层 */
  showOverlay: {
    type: Boolean,
    default: true,
  },
  /** 标题 */
  title: {
    type: String,
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: Boolean,
  /** 控制对话框是否显示 */
  visible: Boolean,
  /** 对话框层级，Web 侧样式默认为 2500，移动端样式默认 2500，小程序样式默认为 11500 */
  zIndex: {
    type: Number,
    default: 11500,
  },
  /** 点击多按钮中的其中一个时触发 */
  onAction: {
    type: Function,
    default: () => ({}),
  },
  /** 如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件 */
  onCancel: {
    type: Function,
    default: () => ({}),
  },
  /** 关闭事件，点击 取消按钮 或 点击蒙层 时触发 */
  onClose: {
    type: Function,
    default: () => ({}),
  },
  /** 如果“确认”按钮存在，则点击“确认”按钮时触发 */
  onConfirm: {
    type: Function,
    default: () => ({}),
  },
  /** 如果蒙层存在，点击蒙层时触发 */
  onOverlayClick: {
    type: Function,
    default: () => ({}),
  },
};

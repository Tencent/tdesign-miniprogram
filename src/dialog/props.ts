/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdDialogProps } from './type';
const props: TdDialogProps = {
  /** 操作栏 */
  actions: {
    type: Array,
  },
  /** 多按钮排列方式 */
  buttonLayout: {
    type: String,
    value: 'horizontal',
  },
  /** 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 Slot 自定义按钮时，需自行控制取消事件 */
  cancelBtn: {
    type: null,
  },
  /** 是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；使用 Object 时透传至图标组件 */
  closeBtn: {
    type: null,
    value: false,
  },
  /** 点击蒙层时是否触发关闭事件 */
  closeOnOverlayClick: {
    type: Boolean,
    value: false,
  },
  /** 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 Slot 自定义按钮时，需自行控制确认事件 */
  confirmBtn: {
    type: null,
  },
  /** 内容 */
  content: {
    type: String,
  },
  /** 组件类名，分别用于设置 组件外层元素、组件内容部分、确认按钮、取消按钮 等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 透传至 Overlay 组件 */
  overlayProps: {
    type: Object,
    value: {},
  },
  /** 防止滚动穿透 */
  preventScrollThrough: {
    type: Boolean,
    value: true,
  },
  /** 是否显示遮罩层 */
  showOverlay: {
    type: Boolean,
    value: true,
  },
  /** 自定义组件样式 */
  style: {
    type: String,
    value: '',
  },
  /** 标题 */
  title: {
    type: String,
  },
  /** 控制对话框是否显示 */
  visible: {
    type: Boolean,
  },
  /** 对话框层级，Web 侧样式默认为 2500，移动端样式默认 2500，小程序样式默认为 11500 */
  zIndex: {
    type: Number,
    value: 11500,
  },
};

export default props;

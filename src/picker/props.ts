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
  /** 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容 */
  header: {
    type: Boolean,
    value: true,
  },
  /** PickerItem 的子项高度，单位 rpx */
  itemHeight: {
    type: Number,
    value: 80,
  },
  /** 用来定义 value / label 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** 透传 `Popup` 组件全部属性 */
  popupProps: {
    type: Object,
    value: {},
  },
  /** 标题 */
  title: {
    type: String,
    value: '',
  },
  /** 是否使用弹出层包裹 */
  usePopup: {
    type: Boolean,
    value: true,
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: {
    type: Boolean,
    value: false,
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
};

export default props;

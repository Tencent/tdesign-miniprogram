/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdActionSheetProps } from './type';
export default {
  /** 水平对齐方式 */
  align: {
    type: String,
    default: 'center' as TdActionSheetProps['align'],
    validator(val: TdActionSheetProps['align']): boolean {
      if (!val) return true;
      return ['center', 'left'].includes(val);
    },
  },
  /** 设置取消按钮的文本 */
  cancelText: {
    type: String,
    default: '',
  },
  /** 设置每页展示菜单的数量，仅当 type=grid 时有效 */
  count: {
    type: Number,
    default: 8,
  },
  /** 动作面板描述文字 */
  description: {
    type: String,
    default: '',
  },
  /** 菜单项 */
  items: {
    type: Array,
    default: (): TdActionSheetProps['items'] => [],
  },
  /** 透传 Popup 组件全部属性 */
  popupProps: {
    type: Object,
    default: () => ({}),
  },
  /** 是否显示取消按钮 */
  showCancel: {
    type: Boolean,
    default: true,
  },
  /** 是否显示遮罩层 */
  showOverlay: {
    type: Boolean,
    default: true,
  },
  /** 展示类型，列表和表格形式展示 */
  theme: {
    type: String,
    default: 'list' as TdActionSheetProps['theme'],
    validator(val: TdActionSheetProps['theme']): boolean {
      if (!val) return true;
      return ['list', 'grid'].includes(val);
    },
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: Boolean,
  /** 显示与隐藏 */
  visible: {
    type: Boolean,
    default: undefined,
  },
  /** 显示与隐藏，非受控属性 */
  defaultVisible: Boolean,
  /** 点击取消按钮时触发 */
  onCancel: {
    type: Function,
    default: () => ({}),
  },
  /** 关闭时触发 */
  onClose: {
    type: Function,
    default: () => ({}),
  },
  /** 选择菜单项时触发 */
  onSelected: {
    type: Function,
    default: () => ({}),
  },
};

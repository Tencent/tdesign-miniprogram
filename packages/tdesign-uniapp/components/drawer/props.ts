/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdDrawerProps } from './type';
export default {
  /** 点击蒙层时是否触发抽屉关闭事件 */
  closeOnOverlayClick: {
    type: Boolean,
    default: true,
  },
  /** 抽屉关闭时是否销毁节点 */
  destroyOnClose: Boolean,
  /** 抽屉里的列表项 */
  items: {
    type: Array,
  },
  /** 遮罩层的属性，透传至 overlay */
  overlayProps: {
    type: Object,
    default: () => ({}),
  },
  /** 抽屉方向 */
  placement: {
    type: String,
    default: 'right' as TdDrawerProps['placement'],
    validator(val: TdDrawerProps['placement']): boolean {
      if (!val) return true;
      return ['left', 'right'].includes(val);
    },
  },
  /** 是否显示遮罩层 */
  showOverlay: {
    type: Boolean,
    default: true,
  },
  /** 抽屉的标题 */
  title: {
    type: String,
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: Boolean,
  /** 组件是否可见。支持语法糖 `v-model:visible` */
  visible: Boolean,
  /** 抽屉层级，样式默认为 11500 */
  zIndex: {
    type: Number,
    default: 11500,
  },
  /** 关闭时触发。 */
  onClose: {
    type: Function,
    default: () => ({}),
  },
  /** 点击抽屉里的列表项 */
  onItemClick: {
    type: Function,
    default: () => ({}),
  },
  /** 如果蒙层存在，点击蒙层时触发 */
  onOverlayClick: {
    type: Function,
    default: () => ({}),
  },
  /** 更新可见性 */
  onUpdateVisible: {
    type: Function,
    default: () => ({}),
  },
};

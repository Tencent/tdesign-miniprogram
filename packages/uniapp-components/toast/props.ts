/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdToastProps } from './type';
export default {
  /** 图标排列方式 */
  direction: {
    type: String,
    default: 'row' as TdToastProps['direction'],
    validator(val: TdToastProps['direction']): boolean {
      if (!val) return true;
      return ['row', 'column'].includes(val);
    },
  },
  /** 弹窗显示毫秒数 */
  duration: {
    type: Number,
    default: 2000,
  },
  /** 自定义图标。传入对象则透传至 Icon 组件 */
  icon: {
    type: [String, Object],
  },
  /** 弹窗显示文字 */
  message: {
    type: String,
  },
  /** 遮罩层属性，透传至 Overlay */
  overlayProps: {
    type: Object,
  },
  /** 弹窗展示位置 */
  placement: {
    type: String,
    default: 'middle' as TdToastProps['placement'],
    validator(val: TdToastProps['placement']): boolean {
      if (!val) return true;
      return ['top', 'middle', 'bottom'].includes(val);
    },
  },
  /** 防止滚动穿透，即不允许点击和滚动 */
  preventScrollThrough: Boolean,
  /** 是否显示遮罩层 */
  showOverlay: Boolean,
  /** 提示类型 */
  theme: {
    type: String,
    validator(val: TdToastProps['theme']): boolean {
      if (!val) return true;
      return ['loading', 'success', 'warning', 'error'].includes(val);
    },
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: Boolean,
  /** 轻提示隐藏的时候触发 */
  onClose: {
    type: Function,
    default: () => ({}),
  },
  /** 轻提示销毁的时候触发 */
  onDestroy: {
    type: Function,
    default: () => ({}),
  },
};

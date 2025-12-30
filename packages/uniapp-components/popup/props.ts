/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdPopupProps } from './type';
export default {
  /** 关闭按钮，值类型为 Boolean 时表示是否显示关闭按钮。也可以自定义关闭按钮 */
  closeBtn: {
    type: Boolean,
  },
  /** 点击遮罩层是否关闭 */
  closeOnOverlayClick: {
    type: Boolean,
    default: true,
  },
  /** 浮层里面的内容 */
  content: {
    type: String,
  },
  /** 动画过渡时间 */
  duration: {
    type: Number,
    default: 240,
  },
  /** 遮罩层的属性，透传至 overlay */
  overlayProps: {
    type: Object,
    default: () => ({}),
  },
  /** 浮层出现位置 */
  placement: {
    type: String,
    default: 'top' as TdPopupProps['placement'],
    validator(val: TdPopupProps['placement']): boolean {
      if (!val) return true;
      return ['top', 'left', 'right', 'bottom', 'center'].includes(val);
    },
  },
  /** 是否阻止背景滚动 */
  preventScrollThrough: {
    type: Boolean,
    default: true,
  },
  /** 是否显示遮罩层 */
  showOverlay: {
    type: Boolean,
    default: true,
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: Boolean,
  /** 是否显示浮层 */
  visible: Boolean,
  /** 是否显示浮层，非受控属性 */
  defaultVisible: Boolean,
  /** 组件层级，Web 侧样式默认为 5500，移动端样式默认为 1500，小程序样式默认为11500 */
  zIndex: {
    type: Number,
    default: 11500,
  },
  /** 当浮层隐藏或显示时触发 */
  onVisibleChange: {
    type: Function,
    default: () => ({}),
  },
};

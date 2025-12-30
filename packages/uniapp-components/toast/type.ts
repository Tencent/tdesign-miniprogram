/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdOverlayProps as OverlayProps } from '../overlay/type';

export interface TdToastProps {
  /**
   * 图标排列方式
   * @default row
   */
  direction?: 'row' | 'column';
  /**
   * 弹窗显示毫秒数
   * @default 2000
   */
  duration?: number;
  /**
   * 自定义图标。传入对象则透传至 Icon 组件
   */
  icon?: string | object;
  /**
   * 弹窗显示文字
   */
  message?: string;
  /**
   * 遮罩层属性，透传至 Overlay
   */
  overlayProps?: OverlayProps;
  /**
   * 弹窗展示位置
   * @default middle
   */
  placement?: 'top' | 'middle' | 'bottom';
  /**
   * 防止滚动穿透，即不允许点击和滚动
   * @default false
   */
  preventScrollThrough?: boolean;
  /**
   * 是否显示遮罩层
   * @default false
   */
  showOverlay?: boolean;
  /**
   * 提示类型
   */
  theme?: 'loading' | 'success' | 'warning' | 'error';
  /**
   * 是否使用了自定义导航栏
   * @default false
   */
  usingCustomNavbar?: boolean;
  /**
   * 轻提示隐藏的时候触发
   */
  onClose?: () => void;
  /**
   * 轻提示销毁的时候触发
   */
  onDestroy?: () => void;
}

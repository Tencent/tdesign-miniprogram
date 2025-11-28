/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdOverlayProps as OverlayProps } from '../overlay/type';

export interface TdPopupProps {
  /**
   * 关闭按钮，值类型为 Boolean 时表示是否显示关闭按钮。也可以自定义关闭按钮
   */
  closeBtn?: boolean;
  /**
   * 点击遮罩层是否关闭
   * @default true
   */
  closeOnOverlayClick?: boolean;
  /**
   * 浮层里面的内容
   */
  content?: string;
  /**
   * 动画过渡时间
   * @default 240
   */
  duration?: number;
  /**
   * 遮罩层的属性，透传至 overlay
   * @default {}
   */
  overlayProps?: OverlayProps;
  /**
   * 浮层出现位置
   * @default top
   */
  placement?: 'top' | 'left' | 'right' | 'bottom' | 'center';
  /**
   * 是否阻止背景滚动
   * @default true
   */
  preventScrollThrough?: boolean;
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 是否使用了自定义导航栏
   * @default false
   */
  usingCustomNavbar?: boolean;
  /**
   * 是否显示浮层
   */
  visible?: boolean;
  /**
   * 是否显示浮层，非受控属性
   */
  defaultVisible?: boolean;
  /**
   * 组件层级，Web 侧样式默认为 5500，移动端样式默认为 1500，小程序样式默认为11500
   * @default 11500
   */
  zIndex?: number;
  /**
   * 当浮层隐藏或显示时触发
   */
  onVisibleChange?: (context: { visible: boolean; trigger: PopupSource }) => void;
}

export type PopupSource = 'close-btn' | 'overlay';

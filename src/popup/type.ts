/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdOverlayProps as OverlayProps } from '../overlay/index';

export interface TdPopupProps {
  /**
   * 关闭按钮，值类型为 Boolean 时表示是否显示关闭按钮。也可以自定义关闭按钮
   */
  closeBtn?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 点击遮罩层是否关闭
   * @default true
   */
  closeOnOverlayClick?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 浮层里面的内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 动画过渡时间
   * @default 240
   */
  duration?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 组件类名，分别用于设置 组件外层元素、遮罩层、浮层内容 等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-overlay', 't-class-content'];
  };
  /**
   * 遮罩层的属性，透传至 overlay
   * @default {}
   */
  overlayProps?: {
    type: ObjectConstructor;
    value?: OverlayProps;
  };
  /**
   * 浮层出现位置
   * @default top
   */
  placement?: {
    type: StringConstructor;
    value?: 'top' | 'left' | 'right' | 'bottom' | 'center';
  };
  /**
   * 防止滚动穿透
   * @default true
   */
  preventScrollThrough?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否使用了自定义导航栏
   * @default false
   */
  usingCustomNavbar?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否显示浮层
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否显示浮层，非受控属性
   * @default false
   */
  defaultVisible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件层级，Web 侧样式默认为 5500，移动端样式默认为 1500，小程序样式默认为11500
   * @default 11500
   */
  zIndex?: {
    type: NumberConstructor;
    value?: number;
  };
}

export interface PopupVisibleChangeContext {
  trigger: 'close-btn' | 'overlay';
}

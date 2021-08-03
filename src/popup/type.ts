/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-03 19:04:54
 * */

import { TransitionProps } from '../transition/transition';

export interface TdPopupProps {
  /**
   * 关闭按钮，值类型为 Boolean 时表示是否显示关闭按钮。也可以自定义按钮
   */
  closeBtn?: {
    type: BooleanConstructor,
    value?: boolean,
  };
  /**
   * 点击遮罩层是否关闭
   * @default true
   */
  closeOnOverlayClick?: {
    type: BooleanConstructor,
    value?: boolean,
  };
  /**
   * 浮层里面的内容
   */
  content?: {
    type: StringConstructor,
    value?: string,
  };
  /**
   * 是否在关闭浮层时销毁浮层
   * @default false
   */
  destroyOnClose?: {
    type: BooleanConstructor,
    value?: boolean,
  };
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: {
    type: BooleanConstructor,
    value?: boolean,
  };
  /**
   * 组件类名，分别用于设置 组件外层元素、遮罩层、浮层内容 等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor,
    value?: ['t-class', 't-class-overlay', 't-class-content'],
  };
  /**
   * 浮层出现位置
   * @default top
   */
  placement?: {
    type: StringConstructor,
    value?: 'top' | 'left' | 'right' | 'bottom' | 'center',
  };
  /**
   * 防止滚动穿透
   * @default true
   */
  preventScrollThrough?: {
    type: BooleanConstructor,
    value?: boolean,
  };
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: {
    type: BooleanConstructor,
    value?: boolean,
  };
  /**
   * 动画效果定义
   */
  transitionProps?: {
    type: ObjectConstructor,
    value?: TransitionProps,
  };
  /**
   * 是否显示浮层
   * @default false
   */
  visible?: {
    type: BooleanConstructor,
    value?: boolean,
  };
  /**
   * 组件层级，Web 侧样式默认为 5500，移动端和小程序样式默认为 1500
   */
  zIndex?: {
    type: NumberConstructor,
    value?: number,
  };
};

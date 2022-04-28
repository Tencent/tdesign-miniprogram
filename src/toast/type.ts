/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdToastProps {
  /**
   * 图标排列方式
   * @default row
   */
  direction?: {
    type: StringConstructor;
    value?: 'row' | 'column';
  };
  /**
   * 弹窗显示毫秒数
   * @default 2000
   */
  duration?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 组件类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class'];
  };
  /**
   * 自定义图标
   * @default ''
   */
  icon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 弹窗显示文字
   */
  message?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 遮罩层属性，透传至 Overlay
   * @default {}
   */
  overlayProps?: {
    type: ObjectConstructor;
    value?: object;
  };
  /**
   * 弹窗展示位置
   * @default middle
   */
  placement?: {
    type: StringConstructor;
    value?: 'top' | 'middle' | 'bottom';
  };
  /**
   * 防止滚动穿透，即不允许点击和滚动
   * @default false
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
   * 提示类型
   */
  theme?: {
    type: StringConstructor;
    value?: 'loading' | 'success' | 'fail';
  };
}

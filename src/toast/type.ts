/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-21 18:50:46
 * */

export interface TdToastProps {
  /**
   * 图标排列方式
   */
  direction?: {
    type: StringConstructor;
    value?: 'row' | 'column';
    required?: boolean;
  };
  /**
   * 弹窗显示毫秒数
   * @default 2000
   */
  duration?: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
  /**
   * 弹窗显示文字
   * @default ''
   */
  message?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 弹窗展示位置
   * @default middle
   */
  position?: {
    type: StringConstructor;
    value?: 'top' | 'middle' | 'bottom';
    required?: boolean;
  };
  /**
   * 是否显示背景遮罩，禁止背景点击和滚动
   */
  showOverlay?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 提示类型
   */
  type?: {
    type: StringConstructor;
    value?: 'loading' | 'success' | 'fail';
    required?: boolean;
  };
}

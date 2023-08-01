/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdDropdownMenuProps {
  /**
   * 自定义箭头图标
   * @default 'caret-down-small'
   */
  arrowIcon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 是否在点击遮罩层后关闭菜单
   * @default true
   */
  closeOnClickOverlay?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 动画时长
   * @default 200
   */
  duration?: {
    type: null;
    value?: string | number;
  };
  /**
   * 组件类名，分别用于设置 组件外层类名、菜单标签、菜单图标类名 等
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-item', 't-class-label', 't-class-icon'];
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
   * 菜单栏 z-index 层级
   * @default 11600
   */
  zIndex?: {
    type: NumberConstructor;
    value?: number;
  };
}

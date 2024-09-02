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

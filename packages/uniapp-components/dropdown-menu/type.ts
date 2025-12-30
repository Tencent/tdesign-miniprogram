/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdDropdownMenuProps {
  /**
   * 自定义箭头图标
   * @default 'caret-down-small'
   */
  arrowIcon?: string | object;
  /**
   * 是否在点击遮罩层后关闭菜单
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * 动画时长
   * @default 200
   */
  duration?: string | number;
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 菜单栏 z-index 层级
   * @default 11600
   */
  zIndex?: number;
  /**
   * 菜单关闭时触发
   */
  onClose?: () => void;
  /**
   * 菜单展开时触发
   */
  onOpen?: () => void;
}

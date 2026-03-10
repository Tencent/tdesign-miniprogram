/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdPopoverProps {
  /**
   * 是否在点击外部元素后关闭菜单
   * @default true
   */
  closeOnClickOutside?: boolean;
  /**
   * 确认框内容
   */
  content?: string;
  /**
   * 如果触发元素为 `fixed` 场景，需要显示指定 `fixed` 属性为 `true`，同时需在触发元素层添加 `t-popover-wrapper--fixed` 类，用于定位触发元素
   * @default false
   */
  fixed?: boolean;
  /**
   * 浮层出现位置
   * @default top
   */
  placement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'left-top'
    | 'left-bottom'
    | 'right-top'
    | 'right-bottom';
  /**
   * 是否显示浮层箭头
   * @default true
   */
  showArrow?: boolean;
  /**
   * 弹出气泡主题
   * @default dark
   */
  theme?: 'dark' | 'light' | 'brand' | 'success' | 'warning' | 'error';
  /**
   * 是否显示气泡确认框
   */
  visible?: boolean;
  /**
   * 是否显示气泡确认框，非受控属性
   */
  defaultVisible?: boolean;
  /**
   * 确认框显示或隐藏时触发
   */
  onVisibleChange?: (visible: boolean) => void;
}

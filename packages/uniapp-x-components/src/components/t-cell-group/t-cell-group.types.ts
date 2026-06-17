/**
 * CellGroup 组件类型契约
 */

export type CellGroupTheme = 'default' | 'card';

export interface CellGroupProps {
  /** 是否显示组边框 */
  bordered?: boolean;
  /** 单元格组风格 */
  theme?: CellGroupTheme;
  /** 单元格组标题 */
  title?: string;
  /** 透传额外类名 */
  customClass?: string;
}

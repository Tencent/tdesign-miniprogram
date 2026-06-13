/**
 * Cell 组件类型契约
 */

export type CellAlign = 'top' | 'middle' | 'bottom';

export interface CellProps {
  /** 标题文案（与 #title 插槽二选一） */
  title?: string;
  /** 描述文案（与 #description 插槽二选一） */
  description?: string;
  /** 右侧值（与 #note 插槽二选一） */
  note?: string;
  /** 是否显示右箭头；string 时作为图标名（PoC 阶段仅控制是否显示） */
  arrow?: boolean;
  /** 是否显示下边框 */
  bordered?: boolean;
  /** 是否启用 hover 高亮 */
  hover?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否必填（在 title 前显示红色星号） */
  required?: boolean;
  /** 主轴对齐 */
  align?: CellAlign;
  /** 透传额外类名 */
  customClass?: string;
}

export interface CellEmits {
  (e: 'click', event: MouseEvent): void;
}

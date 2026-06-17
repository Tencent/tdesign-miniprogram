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
  /** 主图 */
  image?: string;
  /** 链接跳转类型 */
  jumpType?: string;
  /** 左侧图标，出现在单元格标题的左侧 */
  leftIcon?: string | object;
  /** 说明文字自定义样式 */
  noteStyle?: string | object;
  /** 最右侧图标 */
  rightIcon?: string | object;
  /** 右侧图标自定义样式 */
  rightIconStyle?: string | object;
  /** 标题自定义样式 */
  titleStyle?: string | object;
  /** 点击后跳转链接地址。如果值为空，则表示不需要跳转 */
  url?: string;
}

export interface CellEmits {
  (e: 'click', event: MouseEvent): void;
}

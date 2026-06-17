/**
 * Row 组件类型契约
 *
 * 与 @tdesign/uniapp 的 row props 视觉与 API 全面对齐：
 *  - gutter：列之间的间距（默认单位 px），传给子 col 用于设置 padding
 */

export interface RowProps {
  /** 列之间的间距（默认单位 px） */
  gutter?: number;
  /** 透传额外类名 */
  customClass?: string;
}

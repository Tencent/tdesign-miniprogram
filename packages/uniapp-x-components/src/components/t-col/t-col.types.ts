/**
 * Col 组件类型契约
 *
 * 与 @tdesign/uniapp 的 col props 视觉与 API 全面对齐：
 *  - span：列宽 1-24 栅格
 *  - offset：偏移列数 1-24 栅格
 */

export interface ColProps {
  /** 列的偏移量，单位为 24 栅格 */
  offset?: number;
  /** 列的宽度，单位为 24 栅格 */
  span?: number;
  /** 透传额外类名 */
  customClass?: string;
}

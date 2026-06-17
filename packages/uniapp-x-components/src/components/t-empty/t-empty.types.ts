/**
 * Empty 组件类型契约
 */

export interface EmptyProps {
  /** 描述文字 */
  description?: string;
  /** 图标。string=图片 URL（uts 端简化） */
  icon?: string;
  /** 图片地址 */
  image?: string;
  /** 透传额外类名 */
  customClass?: string;
}

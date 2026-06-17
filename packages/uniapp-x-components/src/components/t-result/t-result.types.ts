/**
 * Result 组件类型契约
 */

export type ResultTheme = 'default' | 'success' | 'warning' | 'error';

export interface ResultProps {
  /** 描述文字 */
  description?: string;
  /** 图标。string=图片 URL；false=不显示；uts 端不支持 Object 透传 */
  icon?: string | boolean;
  /** 图片地址 */
  image?: string;
  /** 内置主题 */
  theme?: ResultTheme;
  /** 标题 */
  title?: string;
  /** 透传额外类名 */
  customClass?: string;
}

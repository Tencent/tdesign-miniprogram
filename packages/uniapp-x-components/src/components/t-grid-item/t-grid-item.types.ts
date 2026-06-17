/**
 * GridItem 组件类型契约
 */

export type GridItemLayout = 'vertical' | 'horizontal';

export interface GridItemProps {
  /** 文本以外的更多描述 */
  description?: string;
  /** 图标。string=图片 URL；uts 端不支持 Object 透传 */
  icon?: string;
  /** 图片 */
  image?: string;
  /** 内容布局方式 */
  layout?: GridItemLayout;
  /** 文本 */
  text?: string;
  /** 跳转链接（uts 端不在组件内执行跳转，需业务处理 click） */
  url?: string;
  /** 透传额外类名 */
  customClass?: string;
}

export interface GridItemEmits {
  (e: 'click', event: UniEvent): void;
}

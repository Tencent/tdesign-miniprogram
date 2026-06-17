/**
 * Fab 组件类型契约
 *
 * uts 端简化：暂不实现拖拽（draggable / yBounds 仅作为声明保留）。
 */

export type FabDraggable = boolean | 'all' | 'vertical' | 'horizontal';

export interface FabProps {
  /** 是否可拖拽（uts 端暂不实现） */
  draggable?: FabDraggable;
  /** 图标。string=图片 URL；uts 端不支持 Object 透传 */
  icon?: string;
  /** 文本内容 */
  text?: string;
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar?: boolean;
  /** 垂直边界限制 [top, bottom]，uts 端暂不生效 */
  yBounds?: any[];
  /** 透传额外类名 */
  customClass?: string;
}

export interface FabEmits {
  (e: 'click', event: UniEvent): void;
}

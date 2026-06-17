/**
 * Watermark 组件类型契约
 *
 * 行为契约对齐 uniapp-components/watermark：
 *  - uts 端不实现 canvas 绘制水印图案，使用 css repeating-pattern + transform:rotate
 *    退化为简化版（单色文本水印），适用于业务级版权/防截图标识场景
 */

export type WatermarkLayout = 'rectangular' | 'hexagonal';

export interface WatermarkContentItem {
  text?: string;
  fontSize?: number;
  fontColor?: string;
  fontWeight?: string | number;
  alpha?: number;
}

export interface WatermarkProps {
  /** 整体透明度 [0-1] */
  alpha?: number;
  /** 水印所覆盖的内容（默认 slot 即可，content 仅作 uniapp 兼容声明） */
  content?: string;
  /** 水印高度 */
  height?: number;
  /** 是否重复出现 */
  isRepeat?: boolean;
  /** 布局：rectangular(矩形) / hexagonal(六边形错位) */
  layout?: WatermarkLayout;
  /** 多行水印的行间距 */
  lineSpace?: number;
  /** 水印是否可移动 */
  movable?: boolean;
  /** 水印发生位移的间隙（毫秒） */
  moveInterval?: number;
  /** 水印水平、垂直偏移量 [x, y] */
  offset?: number[];
  /** 水印是否可被删除 */
  removable?: boolean;
  /** 水印旋转角度（度） */
  rotate?: number;
  /** 水印内容（多行支持数组） */
  watermarkContent?: WatermarkContentItem | WatermarkContentItem[] | null;
  /** 水印宽度 */
  width?: number;
  /** 水平间距 */
  x?: number;
  /** 垂直间距 */
  y?: number;
  /** z-index */
  zIndex?: number;
  /** 透传额外类名 */
  customClass?: string;
}

/**
 * Badge 组件的类型契约
 *
 * 这些类型同时被：
 *  - vue3 SFC（badge.vue，单测 + H5 端）
 *  - uts SFC（t-badge.uvue，uni-app x App 端）共享
 *
 * 命名遵循 TDesign 现有约定（dot/count/maxCount/shape/size/...）。
 */

export type BadgeShape =
  | 'circle'
  | 'square'
  | 'bubble'
  | 'ribbon'
  | 'ribbon-right'
  | 'ribbon-left'
  | 'triangle-right'
  | 'triangle-left';

export type BadgeSize = 'medium' | 'large';

export interface BadgeProps {
  /** 是否为红点（小圆点） */
  dot?: boolean;
  /** 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+ */
  count?: string | number;
  /** 封顶的数字值，超过则展示为 `${maxCount}+` */
  maxCount?: number;
  /** 当数值为 0 时是否展示徽标 */
  showZero?: boolean;
  /** 徽标内容文本（默认插槽更灵活） */
  content?: string;
  /** 徽标颜色（背景色） */
  color?: string;
  /** 徽标形状 */
  shape?: BadgeShape;
  /** 尺寸 */
  size?: BadgeSize;
  /** 状态点位置偏移：[x, y]，单位 px */
  offset?: number[];
  /** 透传额外类名 */
  customClass?: string;
}

export interface BadgeEmits {
  // 预留：当前阶段无事件
}

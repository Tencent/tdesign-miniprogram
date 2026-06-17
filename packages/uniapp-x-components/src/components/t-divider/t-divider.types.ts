/**
 * Divider 组件的类型契约
 *
 * 这些类型同时被：
 *  - vue3 SFC（divider.vue，单测 + H5 端）
 *  - uts SFC（t-divider.uvue，uni-app x App 端）共享
 *
 * 命名遵循 TDesign 现有约定（layout/align/dashed/content）。
 */

export type DividerLayout = 'horizontal' | 'vertical';

export type DividerAlign = 'left' | 'right' | 'center';

export interface DividerProps {
  /** 分隔线类型：水平 / 垂直 */
  layout?: DividerLayout;
  /** 文本位置（仅在水平分割线有效） */
  align?: DividerAlign;
  /** 是否虚线（仅在水平分割线有效） */
  dashed?: boolean;
  /** 子元素文本，等价于默认插槽 */
  content?: string;
  /** 分割线颜色（同时作用于线条与文字） */
  lineColor?: string;
  /** 透传额外类名 */
  customClass?: string;
}

export interface DividerEmits {
  // 预留：当前阶段无事件
}

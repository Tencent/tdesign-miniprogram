/**
 * Indexes 组件类型契约
 *
 * 与 @tdesign/uniapp 的 indexes props 视觉与 API 全面对齐
 *
 * 实现差异（uniapp x）：
 *  - 不接管 page-scroll 自动联动（uts 中跨平台 getRect 测量 + 滚动节流复杂）
 *    sticky / stickyOffset / change(滚动联动) 仍保留 props，但默认仅在点击时触发
 *  - select 事件：点击侧边栏时触发；change 事件：current 变化时触发
 *  - sticky 视觉效果由子 t-indexes-anchor 自身样式承担，不再由父组件计算 transform
 */

export type IndexesValue = string | number;

export interface IndexesProps {
  /** 当前激活索引 */
  current?: IndexesValue;
  /** 默认激活索引，非受控 */
  defaultCurrent?: IndexesValue;
  /** 索引字符列表，默认 A-Z */
  indexList?: IndexesValue[];
  /** 索引是否完整展示 */
  showFullIndex?: boolean;
  /** 索引是否吸顶 */
  sticky?: boolean;
  /** 锚点吸顶时与顶部的距离 */
  stickyOffset?: number;
  /** 透传额外类名 */
  customClass?: string;
}

export interface IndexesEmits {
  (e: 'change', payload: { index: IndexesValue; current: IndexesValue }): void;
  (e: 'select', payload: { index: IndexesValue }): void;
}

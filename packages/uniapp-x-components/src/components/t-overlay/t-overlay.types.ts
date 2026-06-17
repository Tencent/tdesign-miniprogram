/**
 * Overlay 组件类型契约
 *
 * 与 @tdesign/uniapp 的 overlay props 视觉与 API 全面对齐
 *
 * 实现差异（uniapp x）：
 *  - usingCustomNavbar 仅作语义保留（uvue 内不存在自定义导航栏布局差异）
 *  - 锁滚动通过 @touchmove.stop.prevent + position:fixed 实现，不再依赖 disable-scroll
 */

export interface OverlayProps {
  /** 遮罩层的背景色 */
  backgroundColor?: string;
  /** 自定义类名 */
  customClass?: string;
  /** 自定义样式（行内） */
  customStyle?: string;
  /** 背景色过渡时间，单位毫秒 */
  duration?: number;
  /** 防止滚动穿透，即不允许点击和滚动 */
  preventScrollThrough?: boolean;
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar?: boolean;
  /** 是否展示 */
  visible?: boolean;
  /** 遮罩层级 */
  zIndex?: number;
}

export interface OverlayEmits {
  /** 点击遮罩时触发 */
  (e: 'click', payload: { visible: boolean }): void;
  /** 离场动画结束 */
  (e: 'leaved'): void;
}

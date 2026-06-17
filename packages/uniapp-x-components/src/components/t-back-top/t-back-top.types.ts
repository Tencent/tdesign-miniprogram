/**
 * BackTop 组件类型契约
 *
 * 与 @tdesign/uniapp 的 back-top props 视觉与 API 全面对齐
 */

export type BackTopTheme = 'round' | 'half-round' | 'round-dark' | 'half-round-dark';

export interface BackTopProps {
  /** 是否绝对定位固定到屏幕右下方 */
  fixed?: boolean;
  /** 图标名称；为空字符串表示不显示图标，默认显示 'backtop' */
  icon?: string;
  /** 是否隐藏图标 */
  hideIcon?: boolean;
  /** 页面滚动距离 */
  scrollTop?: number;
  /** 文案 */
  text?: string;
  /** 预设的样式类型 */
  theme?: BackTopTheme;
  /** 滚动高度达到此参数值才出现 */
  visibilityHeight?: number;
  /** 透传额外类名 */
  customClass?: string;
}

export interface BackTopEmits {
  (e: 'to-top'): void;
}

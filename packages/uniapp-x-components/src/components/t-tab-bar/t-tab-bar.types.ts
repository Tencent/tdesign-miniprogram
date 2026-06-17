/**
 * TabBar 组件类型契约
 *
 * 与 @tdesign/uniapp 的 tab-bar props 视觉与 API 全面对齐
 */

export type TabBarShape = 'normal' | 'round';
export type TabBarTheme = 'normal' | 'tag';
export type TabBarValue = string | number;

export interface TabBarProps {
  /** 是否显示外边框 */
  bordered?: boolean;
  /** 是否固定在底部 */
  fixed?: boolean;
  /** 固定在底部时是否开启占位 */
  placeholder?: boolean;
  /** 是否开启底部安全区适配 */
  safeAreaInsetBottom?: boolean;
  /** 标签栏的形状 */
  shape?: TabBarShape;
  /** 是否需要分割线 */
  split?: boolean;
  /** 选项风格 */
  theme?: TabBarTheme;
  /** 当前选中标签的 value */
  value?: TabBarValue;
  /** 默认选中的 value */
  defaultValue?: TabBarValue;
  /** 标签栏层级 */
  zIndex?: number;
  /** 透传额外类名 */
  customClass?: string;
}

export interface TabBarEmits {
  (e: 'change', payload: { value: TabBarValue }): void;
}

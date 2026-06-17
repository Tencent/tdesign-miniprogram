/**
 * Tabs 组件类型契约
 *
 * 与 @tdesign/uniapp 的 tabs props 视觉与 API 全面对齐
 *
 * 实现差异：
 *  - 不支持 sticky / animation 自定义曲线、swipeable 滑动切换、scroll 事件
 *    （uts 中 scroll-view 的高级 API 与小程序差异较大），保留 props 但 noop
 *  - bottomLineMode 仅支持 'fixed'，足以覆盖主流场景
 */

export type TabsTheme = 'line' | 'tag' | 'card';
export type TabsBottomLineMode = 'fixed' | 'auto' | 'full';
export type TabsValue = string | number;

export interface TabsAnimation {
  duration?: number;
}

export interface TabsStickyProps {
  zIndex?: number;
  offsetTop?: number;
  container?: any;
}

export interface TabsProps {
  animation?: TabsAnimation;
  bottomLineMode?: TabsBottomLineMode;
  showBottomLine?: boolean;
  spaceEvenly?: boolean;
  split?: boolean;
  sticky?: boolean;
  stickyProps?: TabsStickyProps;
  swipeable?: boolean;
  theme?: TabsTheme;
  value?: TabsValue;
  defaultValue?: TabsValue;
  customClass?: string;
}

export interface TabsEmits {
  (e: 'change', payload: { value: TabsValue; label: string }): void;
  (e: 'click', payload: { value: TabsValue; label: string }): void;
}

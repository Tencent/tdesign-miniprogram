/**
 * Navbar 组件类型契约
 *
 * 与 @tdesign/uniapp 的 navbar props 视觉与 API 全面对齐
 *
 * 注意：
 *  - uniapp x 在 App / H5 平台无 `uni.getMenuButtonBoundingClientRect`（仅小程序专属），
 *    胶囊适配以 CSS 变量 + 默认高度（44px）的形式实现；如需调整可通过
 *    `--td-navbar-height` 等 CSS 变量覆盖。
 */

export interface NavbarProps {
  /** 是否添加动画效果 */
  animation?: boolean;
  /** 后退按钮后退层数；传入 0 不会执行 navigateBack */
  delta?: number;
  /** 是否固定在顶部 */
  fixed?: boolean;
  /** 是否展示左侧箭头 */
  leftArrow?: boolean;
  /** 固定在顶部时是否开启占位 */
  placeholder?: boolean;
  /** 是否开启顶部安全区适配 */
  safeAreaInsetTop?: boolean;
  /** 页面标题 */
  title?: string;
  /** 标题文字最大长度，超出的范围使用 `...` 表示 */
  titleMaxLength?: number;
  /** 是否显示 */
  visible?: boolean;
  /** 导航栏栏层级 */
  zIndex?: number;
  /** 透传额外类名 */
  customClass?: string;
}

export interface NavbarEmits {
  (e: 'go-back'): void;
  (e: 'right-click'): void;
  (e: 'success', detail: any): void;
  (e: 'fail', detail: any): void;
  (e: 'complete', detail: any): void;
}

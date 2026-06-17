/**
 * Loading 组件的类型契约
 *
 * 这些类型同时被：
 *  - vue3 SFC（loading.vue，单测 + H5 端）
 *  - uts SFC（t-loading.uvue，uni-app x App 端）共享
 *
 * 命名遵循 TDesign 现有约定（theme/layout/loading/...）。
 */

export type LoadingTheme = 'circular' | 'spinner' | 'dots';

export type LoadingLayout = 'horizontal' | 'vertical';

export interface LoadingProps {
  /** 加载组件类型 */
  theme?: LoadingTheme;
  /** 对齐方式 */
  layout?: LoadingLayout;
  /** 加载提示文案 */
  text?: string;
  /** 尺寸，示例：`20`、`'20px'`、`'48rpx'` */
  size?: string | number;
  /** 加载动画执行完成一次的时间，单位：毫秒 */
  duration?: number;
  /** 是否处于加载状态 */
  loading?: boolean;
  /** 延迟显示加载效果的时间，单位：毫秒 */
  delay?: number;
  /** 是否暂停动画 */
  pause?: boolean;
  /** 加载动画是否反向 */
  reverse?: boolean;
  /** 是否继承父元素颜色 */
  inheritColor?: boolean;
  /** 是否显示加载指示符 */
  indicator?: boolean;
  /** 是否显示为全屏加载 */
  fullscreen?: boolean;
  /** 透传额外类名 */
  customClass?: string;
}

export interface LoadingEmits {
  // 预留：当前 PoC 阶段无事件
}

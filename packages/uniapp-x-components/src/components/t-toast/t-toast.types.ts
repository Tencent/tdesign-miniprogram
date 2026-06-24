/**
 * Toast - uni-app x 类型定义
 *
 * 行为契约对齐 @tdesign/uniapp 的 toast：
 *  - theme: loading / success / warning / error 4 主题
 *  - placement: top / middle / bottom 位置
 *  - direction: row（横向 icon+message）/ column（纵向）
 *  - duration: 自动关闭毫秒数（0 表示常驻直到 hideToast）
 *  - showOverlay / preventScrollThrough 控制遮罩穿透
 *
 * 实现差异：
 *  - 通过预埋组件 + getInstance 模式调用：
 *    1) 用户在 page template 中写 <t-toast ref="toast" />
 *    2) showToast(opts) 内部用 getCurrentPages 拿到 ref 调 .show(opts)
 */

export type ToastTheme = 'loading' | 'success' | 'warning' | 'error';
export type ToastPlacement = 'top' | 'middle' | 'bottom';
export type ToastDirection = 'row' | 'column';

/** 图标配置对象（对齐 uniapp 版本的 icon?: string | object） */
export type ToastIconConfig = {
  name: string;
  prefix?: string;
  size?: string;
  color?: string;
  style?: string;
};

/** 遮罩层配置（对齐 uniapp 版本的 overlayProps） */
export type ToastOverlayProps = {
  zIndex?: number;
  duration?: number;
  backgroundColor?: string;
};

/** showToast 调用参数 */
export type ToastOptions = {
  /** 提示文字（必填或为空） */
  message?: string;
  /** 主题，决定预设图标 */
  theme?: ToastTheme;
  /** 自定义图标名或图标配置对象（与 theme 互斥时优先 theme 预设图标） */
  icon?: string | ToastIconConfig;
  /** 位置 */
  placement?: ToastPlacement;
  /** 排列方向 */
  direction?: ToastDirection;
  /** 持续时间 ms，0 表示不自动关闭，-1 表示常驻 */
  duration?: number;
  /** 是否显示遮罩层 */
  showOverlay?: boolean;
  /** 是否阻止背景滚动 */
  preventScrollThrough?: boolean;
  /** 遮罩层属性，透传至 Overlay */
  overlayProps?: ToastOverlayProps;
  /** 是否使用了自定义导航栏（影响 top placement 的 top% 计算） */
  usingCustomNavbar?: boolean;
};

/** Toast 组件 props（用于 <t-toast /> 的初始预埋；通常不传，由 show() 填充） */
export type ToastProps = ToastOptions & {
  /** 自定义类名 */
  customClass?: string;
  /** 自定义样式（外层根节点 inline style） */
  customStyle?: string;
};

/** Toast 组件 emits */
export type ToastEmits = {
  (e: 'close'): void;
  (e: 'destroy'): void;
};

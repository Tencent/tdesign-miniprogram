/**
 * Popup - uni-app x 类型定义
 *
 * 行为契约对齐 @tdesign/uniapp 的 popup 组件：
 *  - placement: 浮层出现位置（top/bottom/left/right/center）
 *  - visible: 是否显示（受控）
 *  - defaultVisible: 初始显示（非受控）
 *  - closeBtn: 是否显示关闭按钮（值类型为 Boolean 时表示是否显示）
 *  - closeOnOverlayClick: 点击遮罩层是否关闭（默认 true）
 *  - showOverlay: 是否显示遮罩层（默认 true）
 *  - preventScrollThrough: 是否阻止背景滚动（默认 true）
 *  - duration: 动画过渡时间（毫秒，默认 240）
 *  - zIndex: 浮层层级（默认 11500）
 *
 * 不实现项（uniapp x 限制 / 暂不需要）：
 *  - usingCustomNavbar: uvue 没有自定义导航栏概念，仅作语义保留参数
 *  - overlayProps: 复杂对象 props 在 uts 类型系统下不友好，简化为顶层透传
 */

export type PopupPlacement = 'top' | 'bottom' | 'left' | 'right' | 'center';

/** Popup 关闭来源，与 @tdesign/uniapp 一致 */
export type PopupSource = 'close-btn' | 'overlay';

/** visible-change 事件参数 */
export type PopupVisibleChangeContext = {
  visible: boolean;
  trigger: PopupSource;
};

/** Popup 全部 props 的类型形态 */
export type PopupProps = {
  /** 关闭按钮，true 表示显示默认 close 图标按钮 */
  closeBtn?: boolean;
  /** 点击遮罩层是否关闭 */
  closeOnOverlayClick?: boolean;
  /** 自定义类名（根节点） */
  customClass?: string;
  /** 自定义内容容器类名 */
  customClassContent?: string;
  /** 自定义样式（根节点） */
  customStyle?: string;
  /** 浮层里面的内容（兜底文本，slot 优先） */
  content?: string;
  /** 默认显示，非受控 */
  defaultVisible?: boolean;
  /** 动画过渡时间，单位 ms */
  duration?: number;
  /** 是否阻止背景滚动 */
  preventScrollThrough?: boolean;
  /** 浮层出现位置 */
  placement?: PopupPlacement;
  /** 是否显示遮罩层 */
  showOverlay?: boolean;
  /** 是否使用了自定义导航栏（uvue 暂保留参数，无实质效果） */
  usingCustomNavbar?: boolean;
  /** 是否显示浮层（受控） */
  visible?: boolean;
  /** 浮层层级 */
  zIndex?: number;
};

/** Popup 全部 emits 的类型形态 */
export type PopupEmits = {
  /** 浮层显隐变化时触发 */
  (e: 'visible-change', ctx: PopupVisibleChangeContext): void;
  /** v-model:visible 双向绑定专用 */
  (e: 'update:visible', visible: boolean): void;
  /** 离场动画结束 */
  (e: 'leaved'): void;
};

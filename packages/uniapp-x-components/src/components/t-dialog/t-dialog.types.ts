/**
 * Dialog - uni-app x 类型定义
 *
 * 字段集与 @tdesign/uniapp/dialog/type.ts 对齐：
 *  - actions: Array<UTSJSONObject>  多按钮（每个对象透传到 t-button）
 *  - cancelBtn / confirmBtn: string | UTSJSONObject  字符串=文本；对象=透传 button props
 *  - closeBtn: boolean | UTSJSONObject  true=默认关闭图标；对象=透传 icon props
 *  - overlayProps: UTSJSONObject  透传给底层 overlay
 *  - preventScrollThrough / showOverlay / closeOnOverlayClick / usingCustomNavbar / zIndex
 *
 * uts 适配点：
 *  - 多类型 prop 在 uts 模板里运行时 typeof 判断；类型契约层用 string|UTSJSONObject
 *  - 函数 prop（onConfirm/onCancel/onAction）通过指令式 show.ts 传入而非 prop
 */

export type DialogButtonLayout = 'horizontal' | 'vertical';

/** 关闭事件来源 */
export type DialogEventSource = 'cancel' | 'overlay' | 'close-btn';

export type DialogConfirmContext = {
  e?: any;
};

export type DialogCancelContext = {
  e?: any;
};

export type DialogCloseContext = {
  trigger: DialogEventSource;
};

export type DialogActionContext = {
  index: number;
};

/**
 * Dialog 全局指令式 API 的参数
 *
 * 与 @tdesign/uniapp 的 DialogPlugin.alert/.confirm/.action 选项对齐：
 *  - actions / cancelBtn / confirmBtn / closeBtn / closeOnOverlayClick
 *  - showOverlay / preventScrollThrough / zIndex / buttonLayout
 *  - onConfirm / onCancel / onAction / onClose / onOverlayClick 命令式回调
 */
export type DialogOptions = {
  /** 标题 */
  title?: string;
  /** 内容 */
  content?: string;
  /** 取消按钮，string=文本；UTSJSONObject=透传 button；空字符串=不显示 */
  cancelBtn?: any;
  /** 确认按钮，string=文本；UTSJSONObject=透传 button；空字符串=不显示 */
  confirmBtn?: any;
  /** 关闭按钮，true=显示默认 ×；UTSJSONObject=透传 icon */
  closeBtn?: any;
  /** 多按钮列表（与 cancelBtn/confirmBtn 互斥优先级低于二者） */
  actions?: Array<Record<string, any>> | null;
  /** 按钮排列方向 */
  buttonLayout?: DialogButtonLayout;
  /** 点击遮罩是否关闭 */
  closeOnOverlayClick?: boolean;
  /** 是否显示遮罩 */
  showOverlay?: boolean;
  /** 防止滚动穿透 */
  preventScrollThrough?: boolean;
  /** 是否使用了自定义导航栏（uvue 仅占位） */
  usingCustomNavbar?: boolean;
  /** 透传给 overlay */
  overlayProps?: Record<string, any> | null;
  /** 层级 */
  zIndex?: number;
  /** 自定义样式（透传至根容器） */
  customStyle?: string;
  /** 自定义类（透传至根容器） */
  customClass?: string;

  /** 命令式：点击确认 */
  onConfirm?: ((ctx: DialogConfirmContext) => void) | null;
  /** 命令式：点击取消 */
  onCancel?: ((ctx: DialogCancelContext) => void) | null;
  /** 命令式：关闭事件 */
  onClose?: ((ctx: DialogCloseContext) => void) | null;
  /** 命令式：点击 actions[index] */
  onAction?: ((ctx: DialogActionContext) => void) | null;
  /** 命令式：点击 overlay */
  onOverlayClick?: (() => void) | null;
};

export type DialogProps = DialogOptions & {
  visible?: boolean;
};

export type DialogEmits = {
  (e: 'confirm', ctx: DialogConfirmContext): void;
  (e: 'cancel', ctx: DialogCancelContext): void;
  (e: 'close', ctx: DialogCloseContext): void;
  (e: 'action', ctx: DialogActionContext): void;
  (e: 'overlay-click'): void;
  (e: 'update:visible', visible: boolean): void;
};

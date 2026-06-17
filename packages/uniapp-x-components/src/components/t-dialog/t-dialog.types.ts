/**
 * Dialog - uni-app x 类型定义
 *
 * 行为契约对齐 @tdesign/uniapp 的 dialog：
 *  - 标题 title + 内容 content + 取消/确认按钮 + 关闭按钮
 *  - buttonLayout: horizontal / vertical 按钮排列
 *  - showOverlay / preventScrollThrough / closeOnOverlayClick 透传给底层 popup
 *
 * 实现差异（v1 简化）：
 *  - cancelBtn / confirmBtn 仅支持字符串文本（uts 类型不友好不支持透传 Button props 对象）
 *  - actions 多按钮列表暂不支持，使用 cancelBtn/confirmBtn 二选一
 *  - 关闭按钮 closeBtn 只支持 boolean
 */

export type DialogButtonLayout = 'horizontal' | 'vertical';

export type DialogConfirmContext = {
  e?: any;
};
export type DialogCancelContext = {
  e?: any;
};

/** Dialog 全局指令式 API 的参数 */
export type DialogOptions = {
  title?: string;
  content?: string;
  /** 取消按钮文本，空字符串表示不显示 */
  cancelBtn?: string;
  /** 确认按钮文本，空字符串表示不显示 */
  confirmBtn?: string;
  /** 按钮排列方向 */
  buttonLayout?: DialogButtonLayout;
  /** 关闭按钮 */
  closeBtn?: boolean;
  /** 点击遮罩是否关闭 */
  closeOnOverlayClick?: boolean;
  /** 是否显示遮罩 */
  showOverlay?: boolean;
  /** 防止滚动穿透 */
  preventScrollThrough?: boolean;
  /** 层级 */
  zIndex?: number;
};

export type DialogProps = DialogOptions & {
  visible?: boolean;
  customClass?: string;
  customStyle?: string;
};

export type DialogEmits = {
  (e: 'confirm', ctx: DialogConfirmContext): void;
  (e: 'cancel', ctx: DialogCancelContext): void;
  (e: 'close'): void;
  (e: 'overlay-click'): void;
  (e: 'update:visible', visible: boolean): void;
};

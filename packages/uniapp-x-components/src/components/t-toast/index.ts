/**
 * Toast 组件导出
 *
 * 对齐 @tdesign/uniapp/toast/index.js 导出结构：
 *  - default: Toast function（可直接 Toast(options) 调用）
 *  - showToast: 显示 toast
 *  - hideToast: 隐藏 toast
 *  - Toast: 对象风格 { show, hide }
 *  - toastVariants: cva 变体（样式定制用）
 *  - 类型导出
 */
export { toastVariants } from './t-toast.variants';
export { default, showToast, hideToast } from './show';
export { ToastObj as Toast } from './show';
export type { ToastProps, ToastEmits, ToastOptions, ToastTheme, ToastPlacement, ToastDirection } from './t-toast.types';

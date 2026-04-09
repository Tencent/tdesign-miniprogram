// This file is intentionally empty.
// It serves as the runtime entry point for module resolvers.
// All meaningful exports from this package are type-only.

// mixins
export { handlePageScroll } from './mixins/page-scroll';

// 函数式调用
export { default as DialogPlugin } from './dialog/index';
export { default as Dialog } from './dialog/index';
export { default as MessagePlugin } from './message/index';
export { default as Message } from './message/index';
export { default as Toast, showToast, hideToast } from './toast/index';
export { default as ToastPlugin } from './toast/index';
export { default as ActionSheetPlugin, ActionSheetTheme } from './action-sheet/index';
export { default as ActionSheet } from './action-sheet/index';

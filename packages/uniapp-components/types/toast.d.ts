import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdToastProps } from '../toast/type';

export type ToastProps = ExtractNonOnProps<TdToastProps>;
export type ToastEmits = TransformEventHandlers<TdToastProps, true>;
declare const ToastComponent: import('vue').DefineComponent<ToastProps, {}, {}, {}, {}, {}, {}, ToastEmits, any>;
export default ToastComponent;

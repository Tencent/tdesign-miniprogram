import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdDialogProps } from '../dialog/type';

export type DialogProps = ExtractNonOnProps<TdDialogProps>;
export type DialogEmits = TransformEventHandlers<TdDialogProps, true>;
declare const DialogComponent: import('vue').DefineComponent<DialogProps, {}, {}, {}, {}, {}, {}, DialogEmits, any>;
export default DialogComponent;

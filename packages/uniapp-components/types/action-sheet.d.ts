import type { TdActionSheetProps } from '../action-sheet/type';
import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';

export type ActionSheetProps = ExtractNonOnProps<TdActionSheetProps>;
export type ActionSheetEmits = TransformEventHandlers<TdActionSheetProps, true>;
declare const ActionSheetComponent: import('vue').DefineComponent<ActionSheetProps, {}, {}, {}, {}, {}, {}, ActionSheetEmits, any>;
export default ActionSheetComponent;

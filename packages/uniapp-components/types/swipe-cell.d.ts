import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdSwipeCellProps } from '../swipe-cell/type';

export type SwipeCellProps = ExtractNonOnProps<TdSwipeCellProps>;
export type SwipeCellEmits = TransformEventHandlers<TdSwipeCellProps, true>;
declare const SwipeCellComponent: import('vue').DefineComponent<SwipeCellProps, {}, {}, {}, {}, {}, {}, SwipeCellEmits, any>;
export default SwipeCellComponent;

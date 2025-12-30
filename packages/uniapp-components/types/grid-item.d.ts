import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdGridItemProps } from '../grid-item/type';

export type GridItemProps = ExtractNonOnProps<TdGridItemProps>;
export type GridItemEmits = TransformEventHandlers<TdGridItemProps, true>;
declare const GridItemComponent: import('vue').DefineComponent<GridItemProps, {}, {}, {}, {}, {}, {}, GridItemEmits, any>;
export default GridItemComponent;

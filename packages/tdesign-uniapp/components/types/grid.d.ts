import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdGridProps } from '../grid/type';

export type GridProps = ExtractNonOnProps<TdGridProps>;
export type GridEmits = TransformEventHandlers<TdGridProps, true>;
declare const GridComponent: import('vue').DefineComponent<GridProps, {}, {}, {}, {}, {}, {}, GridEmits, any>;
export default GridComponent;

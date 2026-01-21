import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdCellProps } from '../cell/type';

export type CellProps = ExtractNonOnProps<TdCellProps>;
export type CellEmits = TransformEventHandlers<TdCellProps, true>;
declare const CellComponent: import('vue').DefineComponent<CellProps, {}, {}, {}, {}, {}, {}, CellEmits, any>;
export default CellComponent;

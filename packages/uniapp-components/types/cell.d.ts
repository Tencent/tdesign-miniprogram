import type { TdCellProps } from '../cell/type';
import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';

export type CellProps = ExtractNonOnProps<TdCellProps>;
export type CellEmits = TransformEventHandlers<TdCellProps, true>;
declare const CellComponent: import('vue').DefineComponent<CellProps, {}, {}, {}, {}, {}, {}, CellEmits, any>;
export default CellComponent;

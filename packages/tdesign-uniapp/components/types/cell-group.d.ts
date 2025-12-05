import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdCellGroupProps } from '../cell-group/type';

export type CellGroupProps = ExtractNonOnProps<TdCellGroupProps>;
export type CellGroupEmits = TransformEventHandlers<TdCellGroupProps, true>;
declare const CellGroupComponent: import('vue').DefineComponent<CellGroupProps, {}, {}, {}, {}, {}, {}, CellGroupEmits, any>;
export default CellGroupComponent;

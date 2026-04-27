import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdTableProps } from '../table/type';

export type TableProps = ExtractNonOnProps<TdTableProps>;
export type TableEmits = TransformEventHandlers<TdTableProps, true>;
declare const TableComponent: import('vue').DefineComponent<TableProps, {}, {}, {}, {}, {}, {}, TableEmits, any>;
export default TableComponent;

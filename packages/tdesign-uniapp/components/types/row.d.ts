import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdRowProps } from '../row/type';

export type RowProps = ExtractNonOnProps<TdRowProps>;
export type RowEmits = TransformEventHandlers<TdRowProps, true>;
declare const RowComponent: import('vue').DefineComponent<RowProps, {}, {}, {}, {}, {}, {}, RowEmits, any>;
export default RowComponent;

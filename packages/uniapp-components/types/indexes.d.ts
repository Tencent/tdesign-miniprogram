import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdIndexesProps } from '../indexes/type';

export type IndexesProps = ExtractNonOnProps<TdIndexesProps>;
export type IndexesEmits = TransformEventHandlers<TdIndexesProps, true>;
declare const IndexesComponent: import('vue').DefineComponent<IndexesProps, {}, {}, {}, {}, {}, {}, IndexesEmits, any>;
export default IndexesComponent;

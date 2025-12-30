import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdIndexesAnchorProps } from '../indexes-anchor/type';

export type IndexesAnchorProps = ExtractNonOnProps<TdIndexesAnchorProps>;
export type IndexesAnchorEmits = TransformEventHandlers<TdIndexesAnchorProps, true>;
declare const IndexesAnchorComponent: import('vue').DefineComponent<IndexesAnchorProps, {}, {}, {}, {}, {}, {}, IndexesAnchorEmits, any>;
export default IndexesAnchorComponent;

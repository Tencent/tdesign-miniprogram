import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdSegmentedProps } from '../segmented/type';

export type SegmentedProps = ExtractNonOnProps<TdSegmentedProps>;
export type SegmentedEmits = TransformEventHandlers<TdSegmentedProps, true>;
declare const SegmentedComponent: import('vue').DefineComponent<SegmentedProps, {}, {}, {}, {}, {}, {}, SegmentedEmits, any>;
export default SegmentedComponent;

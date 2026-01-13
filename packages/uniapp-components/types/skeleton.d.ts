import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdSkeletonProps } from '../skeleton/type';

export type SkeletonProps = ExtractNonOnProps<TdSkeletonProps>;
export type SkeletonEmits = TransformEventHandlers<TdSkeletonProps, true>;
declare const SkeletonComponent: import('vue').DefineComponent<SkeletonProps, {}, {}, {}, {}, {}, {}, SkeletonEmits, any>;
export default SkeletonComponent;

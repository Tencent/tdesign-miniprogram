import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdProgressProps } from '../progress/type';

export type ProgressProps = ExtractNonOnProps<TdProgressProps>;
export type ProgressEmits = TransformEventHandlers<TdProgressProps, true>;
declare const ProgressComponent: import('vue').DefineComponent<ProgressProps, {}, {}, {}, {}, {}, {}, ProgressEmits, any>;
export default ProgressComponent;

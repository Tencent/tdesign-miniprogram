import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdStepsProps } from '../steps/type';

export type StepsProps = ExtractNonOnProps<TdStepsProps>;
export type StepsEmits = TransformEventHandlers<TdStepsProps, true>;
declare const StepsComponent: import('vue').DefineComponent<StepsProps, {}, {}, {}, {}, {}, {}, StepsEmits, any>;
export default StepsComponent;

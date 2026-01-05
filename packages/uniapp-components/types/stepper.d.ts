import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdStepperProps } from '../stepper/type';

export type StepperProps = ExtractNonOnProps<TdStepperProps>;
export type StepperEmits = TransformEventHandlers<TdStepperProps, true>;
declare const StepperComponent: import('vue').DefineComponent<StepperProps, {}, {}, {}, {}, {}, {}, StepperEmits, any>;
export default StepperComponent;

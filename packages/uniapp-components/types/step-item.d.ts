import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdStepItemProps } from '../step-item/type';

export type StepItemProps = ExtractNonOnProps<TdStepItemProps>;
export type StepItemEmits = TransformEventHandlers<TdStepItemProps, true>;
declare const StepItemComponent: import('vue').DefineComponent<StepItemProps, {}, {}, {}, {}, {}, {}, StepItemEmits, any>;
export default StepItemComponent;

import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdRadioGroupProps } from '../radio-group/type';

export type RadioGroupProps = ExtractNonOnProps<TdRadioGroupProps>;
export type RadioGroupEmits = TransformEventHandlers<TdRadioGroupProps, true>;
declare const RadioGroupComponent: import('vue').DefineComponent<RadioGroupProps, {}, {}, {}, {}, {}, {}, RadioGroupEmits, any>;
export default RadioGroupComponent;

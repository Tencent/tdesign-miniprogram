import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdRadioProps } from '../radio/type';

export type RadioProps = ExtractNonOnProps<TdRadioProps>;
export type RadioEmits = TransformEventHandlers<TdRadioProps, true>;
declare const RadioComponent: import('vue').DefineComponent<RadioProps, {}, {}, {}, {}, {}, {}, RadioEmits, any>;
export default RadioComponent;

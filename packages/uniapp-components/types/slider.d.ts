import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdSliderProps } from '../slider/type';

export type SliderProps = ExtractNonOnProps<TdSliderProps>;
export type SliderEmits = TransformEventHandlers<TdSliderProps, true>;
declare const SliderComponent: import('vue').DefineComponent<SliderProps, {}, {}, {}, {}, {}, {}, SliderEmits, any>;
export default SliderComponent;

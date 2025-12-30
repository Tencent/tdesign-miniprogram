import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdCountDownProps } from '../count-down/type';

export type CountDownProps = ExtractNonOnProps<TdCountDownProps>;
export type CountDownEmits = TransformEventHandlers<TdCountDownProps, true>;
declare const CountDownComponent: import('vue').DefineComponent<CountDownProps, {}, {}, {}, {}, {}, {}, CountDownEmits, any>;
export default CountDownComponent;

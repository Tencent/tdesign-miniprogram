import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdRateProps } from '../rate/type';

export type RateProps = ExtractNonOnProps<TdRateProps>;
export type RateEmits = TransformEventHandlers<TdRateProps, true>;
declare const RateComponent: import('vue').DefineComponent<RateProps, {}, {}, {}, {}, {}, {}, RateEmits, any>;
export default RateComponent;

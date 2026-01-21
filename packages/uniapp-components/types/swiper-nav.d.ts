import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdSwiperNavProps } from '../swiper-nav/type';

export type SwiperNavProps = ExtractNonOnProps<TdSwiperNavProps>;
export type SwiperNavEmits = TransformEventHandlers<TdSwiperNavProps, true>;
declare const SwiperNavComponent: import('vue').DefineComponent<SwiperNavProps, {}, {}, {}, {}, {}, {}, SwiperNavEmits, any>;
export default SwiperNavComponent;

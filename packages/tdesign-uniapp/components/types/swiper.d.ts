import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdSwiperProps } from '../swiper/type';

export type SwiperProps = ExtractNonOnProps<TdSwiperProps>;
export type SwiperEmits = TransformEventHandlers<TdSwiperProps, true>;
declare const SwiperComponent: import('vue').DefineComponent<SwiperProps, {}, {}, {}, {}, {}, {}, SwiperEmits, any>;
export default SwiperComponent;

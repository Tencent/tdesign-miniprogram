import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdWatermarkProps } from '../watermark/type';

export type WatermarkProps = ExtractNonOnProps<TdWatermarkProps>;
export type WatermarkEmits = TransformEventHandlers<TdWatermarkProps, true>;
declare const WatermarkComponent: import('vue').DefineComponent<WatermarkProps, {}, {}, {}, {}, {}, {}, WatermarkEmits, any>;
export default WatermarkComponent;

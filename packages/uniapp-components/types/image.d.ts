import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdImageProps } from '../image/type';

export type ImageProps = ExtractNonOnProps<TdImageProps>;
export type ImageEmits = TransformEventHandlers<TdImageProps, true>;
declare const ImageComponent: import('vue').DefineComponent<ImageProps, {}, {}, {}, {}, {}, {}, ImageEmits, any>;
export default ImageComponent;

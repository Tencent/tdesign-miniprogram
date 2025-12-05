import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdImageViewerProps } from '../image-viewer/type';

export type ImageViewerProps = ExtractNonOnProps<TdImageViewerProps>;
export type ImageViewerEmits = TransformEventHandlers<TdImageViewerProps, true>;
declare const ImageViewerComponent: import('vue').DefineComponent<ImageViewerProps, {}, {}, {}, {}, {}, {}, ImageViewerEmits, any>;
export default ImageViewerComponent;

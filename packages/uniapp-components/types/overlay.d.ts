import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdOverlayProps } from '../overlay/type';

export type OverlayProps = ExtractNonOnProps<TdOverlayProps>;
export type OverlayEmits = TransformEventHandlers<TdOverlayProps, true>;
declare const OverlayComponent: import('vue').DefineComponent<OverlayProps, {}, {}, {}, {}, {}, {}, OverlayEmits, any>;
export default OverlayComponent;

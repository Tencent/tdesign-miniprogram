import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdPopupProps } from '../popup/type';

export type PopupProps = ExtractNonOnProps<TdPopupProps>;
export type PopupEmits = TransformEventHandlers<TdPopupProps, true>;
declare const PopupComponent: import('vue').DefineComponent<PopupProps, {}, {}, {}, {}, {}, {}, PopupEmits, any>;
export default PopupComponent;

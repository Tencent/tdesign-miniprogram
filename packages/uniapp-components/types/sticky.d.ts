import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdStickyProps } from '../sticky/type';

export type StickyProps = ExtractNonOnProps<TdStickyProps>;
export type StickyEmits = TransformEventHandlers<TdStickyProps, true>;
declare const StickyComponent: import('vue').DefineComponent<StickyProps, {}, {}, {}, {}, {}, {}, StickyEmits, any>;
export default StickyComponent;

import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdPopoverProps } from '../popover/type';

export type PopoverProps = ExtractNonOnProps<TdPopoverProps>;
export type PopoverEmits = TransformEventHandlers<TdPopoverProps, true>;
declare const PopoverComponent: import('vue').DefineComponent<PopoverProps, {}, {}, {}, {}, {}, {}, PopoverEmits, any>;
export default PopoverComponent;

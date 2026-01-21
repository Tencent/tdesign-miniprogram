import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdPickerItemProps } from '../picker-item/type';

export type PickerItemProps = ExtractNonOnProps<TdPickerItemProps>;
export type PickerItemEmits = TransformEventHandlers<TdPickerItemProps, true>;
declare const PickerItemComponent: import('vue').DefineComponent<PickerItemProps, {}, {}, {}, {}, {}, {}, PickerItemEmits, any>;
export default PickerItemComponent;

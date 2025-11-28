import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdPickerProps } from '../picker/type';

export type PickerProps = ExtractNonOnProps<TdPickerProps>;
export type PickerEmits = TransformEventHandlers<TdPickerProps, true>;
declare const PickerComponent: import('vue').DefineComponent<PickerProps, {}, {}, {}, {}, {}, {}, PickerEmits, any>;
export default PickerComponent;

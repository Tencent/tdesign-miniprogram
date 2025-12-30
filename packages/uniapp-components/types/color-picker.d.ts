import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdColorPickerProps } from '../color-picker/type';

export type ColorPickerProps = ExtractNonOnProps<TdColorPickerProps>;
export type ColorPickerEmits = TransformEventHandlers<TdColorPickerProps, true>;
declare const ColorPickerComponent: import('vue').DefineComponent<ColorPickerProps, {}, {}, {}, {}, {}, {}, ColorPickerEmits, any>;
export default ColorPickerComponent;

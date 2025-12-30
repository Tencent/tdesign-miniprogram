import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdInputProps } from '../input/type';

export type InputProps = ExtractNonOnProps<TdInputProps>;
export type InputEmits = TransformEventHandlers<TdInputProps, true>;
declare const InputComponent: import('vue').DefineComponent<InputProps, {}, {}, {}, {}, {}, {}, InputEmits, any>;
export default InputComponent;

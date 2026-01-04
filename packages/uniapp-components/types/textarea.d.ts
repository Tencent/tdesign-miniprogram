import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdTextareaProps } from '../textarea/type';

export type TextareaProps = ExtractNonOnProps<TdTextareaProps>;
export type TextareaEmits = TransformEventHandlers<TdTextareaProps, true>;
declare const TextareaComponent: import('vue').DefineComponent<TextareaProps, {}, {}, {}, {}, {}, {}, TextareaEmits, any>;
export default TextareaComponent;

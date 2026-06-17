import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdTextProps } from '../text/type';

export type TextProps = ExtractNonOnProps<TdTextProps>;
export type TextEmits = TransformEventHandlers<TdTextProps, true>;
declare const TextComponent: import('vue').DefineComponent<TextProps, {}, {}, {}, {}, {}, {}, TextEmits, any>;
export default TextComponent;

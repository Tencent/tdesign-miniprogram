import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdParagraphProps } from '../paragraph/type';

export type ParagraphProps = ExtractNonOnProps<TdParagraphProps>;
export type ParagraphEmits = TransformEventHandlers<TdParagraphProps, true>;
declare const ParagraphComponent: import('vue').DefineComponent<
  ParagraphProps,
  {},
  {},
  {},
  {},
  {},
  {},
  ParagraphEmits,
  any
>;
export default ParagraphComponent;

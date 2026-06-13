import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdTitleProps } from '../title/type';

export type TitleProps = ExtractNonOnProps<TdTitleProps>;
export type TitleEmits = TransformEventHandlers<TdTitleProps, true>;
declare const TitleComponent: import('vue').DefineComponent<TitleProps, {}, {}, {}, {}, {}, {}, TitleEmits, any>;
export default TitleComponent;

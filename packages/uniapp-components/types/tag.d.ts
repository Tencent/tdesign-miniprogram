import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdTagProps } from '../tag/type';

export type TagProps = ExtractNonOnProps<TdTagProps>;
export type TagEmits = TransformEventHandlers<TdTagProps, true>;
declare const TagComponent: import('vue').DefineComponent<TagProps, {}, {}, {}, {}, {}, {}, TagEmits, any>;
export default TagComponent;

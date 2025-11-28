import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdEmptyProps } from '../empty/type';

export type EmptyProps = ExtractNonOnProps<TdEmptyProps>;
export type EmptyEmits = TransformEventHandlers<TdEmptyProps, true>;
declare const EmptyComponent: import('vue').DefineComponent<EmptyProps, {}, {}, {}, {}, {}, {}, EmptyEmits, any>;
export default EmptyComponent;

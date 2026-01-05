import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdFabProps } from '../fab/type';

export type FabProps = ExtractNonOnProps<TdFabProps>;
export type FabEmits = TransformEventHandlers<TdFabProps, true>;
declare const FabComponent: import('vue').DefineComponent<FabProps, {}, {}, {}, {}, {}, {}, FabEmits, any>;
export default FabComponent;

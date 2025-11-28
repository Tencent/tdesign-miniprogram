import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdDividerProps } from '../divider/type';

export type DividerProps = ExtractNonOnProps<TdDividerProps>;
export type DividerEmits = TransformEventHandlers<TdDividerProps, true>;
declare const DividerComponent: import('vue').DefineComponent<DividerProps, {}, {}, {}, {}, {}, {}, DividerEmits, any>;
export default DividerComponent;

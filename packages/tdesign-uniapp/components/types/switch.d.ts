import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdSwitchProps } from '../switch/type';

export type SwitchProps = ExtractNonOnProps<TdSwitchProps>;
export type SwitchEmits = TransformEventHandlers<TdSwitchProps, true>;
declare const SwitchComponent: import('vue').DefineComponent<SwitchProps, {}, {}, {}, {}, {}, {}, SwitchEmits, any>;
export default SwitchComponent;

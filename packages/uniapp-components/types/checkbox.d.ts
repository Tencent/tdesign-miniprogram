import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdCheckboxProps } from '../checkbox/type';

export type CheckboxProps = ExtractNonOnProps<TdCheckboxProps>;
export type CheckboxEmits = TransformEventHandlers<TdCheckboxProps, true>;
declare const CheckboxComponent: import('vue').DefineComponent<CheckboxProps, {}, {}, {}, {}, {}, {}, CheckboxEmits, any>;
export default CheckboxComponent;

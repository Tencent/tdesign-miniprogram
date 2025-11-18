import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdCheckboxGroupProps } from '../checkbox-group/type';

export type CheckboxGroupProps = ExtractNonOnProps<TdCheckboxGroupProps>;
export type CheckboxGroupEmits = TransformEventHandlers<TdCheckboxGroupProps, true>;
declare const CheckboxGroupComponent: import('vue').DefineComponent<CheckboxGroupProps, {}, {}, {}, {}, {}, {}, CheckboxGroupEmits, any>;
export default CheckboxGroupComponent;

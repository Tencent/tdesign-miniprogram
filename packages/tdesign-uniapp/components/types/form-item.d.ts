import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdFormItemProps } from '../form-item/type';

export type FormItemProps = ExtractNonOnProps<TdFormItemProps>;
export type FormItemEmits = TransformEventHandlers<TdFormItemProps, true>;
declare const FormItemComponent: import('vue').DefineComponent<FormItemProps, {}, {}, {}, {}, {}, {}, FormItemEmits, any>;
export default FormItemComponent;

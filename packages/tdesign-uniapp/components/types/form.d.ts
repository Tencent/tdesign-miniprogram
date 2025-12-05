import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdFormProps } from '../form/type';

export type FormProps = ExtractNonOnProps<TdFormProps>;
export type FormEmits = TransformEventHandlers<TdFormProps, true>;
declare const FormComponent: import('vue').DefineComponent<FormProps, {}, {}, {}, {}, {}, {}, FormEmits, any>;
export default FormComponent;

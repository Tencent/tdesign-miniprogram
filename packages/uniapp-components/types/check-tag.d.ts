import type { TdCheckTagProps } from '../check-tag/type';
import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';

export type CheckTagProps = ExtractNonOnProps<TdCheckTagProps>;
export type CheckTagEmits = TransformEventHandlers<TdCheckTagProps, true>;
declare const CheckTagComponent: import('vue').DefineComponent<CheckTagProps, {}, {}, {}, {}, {}, {}, CheckTagEmits, any>;
export default CheckTagComponent;

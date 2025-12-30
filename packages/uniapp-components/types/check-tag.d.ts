import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdCheckTagProps } from '../check-tag/type';

export type CheckTagProps = ExtractNonOnProps<TdCheckTagProps>;
export type CheckTagEmits = TransformEventHandlers<TdCheckTagProps, true>;
declare const CheckTagComponent: import('vue').DefineComponent<CheckTagProps, {}, {}, {}, {}, {}, {}, CheckTagEmits, any>;
export default CheckTagComponent;

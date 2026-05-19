import type { TdButtonProps } from '../button/type';
import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';

export type ButtonProps = ExtractNonOnProps<TdButtonProps>;
export type ButtonEmits = TransformEventHandlers<TdButtonProps, true>;
declare const ButtonComponent: import('vue').DefineComponent<ButtonProps, {}, {}, {}, {}, {}, {}, ButtonEmits, any>;
export default ButtonComponent;

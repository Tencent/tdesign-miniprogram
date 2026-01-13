import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdIconProps } from '../icon/type';

export type IconProps = ExtractNonOnProps<TdIconProps>;
export type IconEmits = TransformEventHandlers<TdIconProps, true>;
declare const IconComponent: import('vue').DefineComponent<IconProps, {}, {}, {}, {}, {}, {}, IconEmits, any>;
export default IconComponent;

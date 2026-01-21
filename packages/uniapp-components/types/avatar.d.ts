import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdAvatarProps } from '../avatar/type';

export type AvatarProps = ExtractNonOnProps<TdAvatarProps>;
export type AvatarEmits = TransformEventHandlers<TdAvatarProps, true>;
declare const AvatarComponent: import('vue').DefineComponent<AvatarProps, {}, {}, {}, {}, {}, {}, AvatarEmits, any>;
export default AvatarComponent;

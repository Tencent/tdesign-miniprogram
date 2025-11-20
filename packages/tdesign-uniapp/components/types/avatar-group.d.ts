import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdAvatarGroupProps } from '../avatar-group/type';

export type AvatarGroupProps = ExtractNonOnProps<TdAvatarGroupProps>;
export type AvatarGroupEmits = TransformEventHandlers<TdAvatarGroupProps, true>;
declare const AvatarGroupComponent: import('vue').DefineComponent<AvatarGroupProps, {}, {}, {}, {}, {}, {}, AvatarGroupEmits, any>;
export default AvatarGroupComponent;

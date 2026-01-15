import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdBadgeProps } from '../badge/type';

export type BadgeProps = ExtractNonOnProps<TdBadgeProps>;
export type BadgeEmits = TransformEventHandlers<TdBadgeProps, true>;
declare const BadgeComponent: import('vue').DefineComponent<BadgeProps, {}, {}, {}, {}, {}, {}, BadgeEmits, any>;
export default BadgeComponent;

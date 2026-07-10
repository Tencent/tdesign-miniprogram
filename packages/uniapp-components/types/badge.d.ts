import type { TdBadgeProps } from '../badge/type';
import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';

export type BadgeProps = ExtractNonOnProps<TdBadgeProps>;
export type BadgeEmits = TransformEventHandlers<TdBadgeProps, true>;
declare const BadgeComponent: import('vue').DefineComponent<BadgeProps, {}, {}, {}, {}, {}, {}, BadgeEmits, any>;
export default BadgeComponent;

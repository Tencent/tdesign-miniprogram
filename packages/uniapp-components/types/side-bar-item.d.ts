import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdSideBarItemProps } from '../side-bar-item/type';

export type SideBarItemProps = ExtractNonOnProps<TdSideBarItemProps>;
export type SideBarItemEmits = TransformEventHandlers<TdSideBarItemProps, true>;
declare const SideBarItemComponent: import('vue').DefineComponent<SideBarItemProps, {}, {}, {}, {}, {}, {}, SideBarItemEmits, any>;
export default SideBarItemComponent;

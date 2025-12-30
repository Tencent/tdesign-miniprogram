import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdSideBarProps } from '../side-bar/type';

export type SideBarProps = ExtractNonOnProps<TdSideBarProps>;
export type SideBarEmits = TransformEventHandlers<TdSideBarProps, true>;
declare const SideBarComponent: import('vue').DefineComponent<SideBarProps, {}, {}, {}, {}, {}, {}, SideBarEmits, any>;
export default SideBarComponent;

import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdTabBarProps } from '../tab-bar/type';

export type TabBarProps = ExtractNonOnProps<TdTabBarProps>;
export type TabBarEmits = TransformEventHandlers<TdTabBarProps, true>;
declare const TabBarComponent: import('vue').DefineComponent<TabBarProps, {}, {}, {}, {}, {}, {}, TabBarEmits, any>;
export default TabBarComponent;

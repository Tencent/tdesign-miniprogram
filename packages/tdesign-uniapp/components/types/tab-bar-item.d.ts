import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdTabBarItemProps } from '../tab-bar-item/type';

export type TabBarItemProps = ExtractNonOnProps<TdTabBarItemProps>;
export type TabBarItemEmits = TransformEventHandlers<TdTabBarItemProps, true>;
declare const TabBarItemComponent: import('vue').DefineComponent<TabBarItemProps, {}, {}, {}, {}, {}, {}, TabBarItemEmits, any>;
export default TabBarItemComponent;

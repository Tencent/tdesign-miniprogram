import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdTabsProps } from '../tabs/type';

export type TabsProps = ExtractNonOnProps<TdTabsProps>;
export type TabsEmits = TransformEventHandlers<TdTabsProps, true>;
declare const TabsComponent: import('vue').DefineComponent<TabsProps, {}, {}, {}, {}, {}, {}, TabsEmits, any>;
export default TabsComponent;

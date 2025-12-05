import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdTabPanelProps } from '../tab-panel/type';

export type TabPanelProps = ExtractNonOnProps<TdTabPanelProps>;
export type TabPanelEmits = TransformEventHandlers<TdTabPanelProps, true>;
declare const TabPanelComponent: import('vue').DefineComponent<TabPanelProps, {}, {}, {}, {}, {}, {}, TabPanelEmits, any>;
export default TabPanelComponent;

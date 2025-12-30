import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdCollapsePanelProps } from '../collapse-panel/type';

export type CollapsePanelProps = ExtractNonOnProps<TdCollapsePanelProps>;
export type CollapsePanelEmits = TransformEventHandlers<TdCollapsePanelProps, true>;
declare const CollapsePanelComponent: import('vue').DefineComponent<CollapsePanelProps, {}, {}, {}, {}, {}, {}, CollapsePanelEmits, any>;
export default CollapsePanelComponent;

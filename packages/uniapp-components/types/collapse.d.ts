import type { TdCollapseProps } from '../collapse/type';
import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';

export type CollapseProps = ExtractNonOnProps<TdCollapseProps>;
export type CollapseEmits = TransformEventHandlers<TdCollapseProps, true>;
declare const CollapseComponent: import('vue').DefineComponent<CollapseProps, {}, {}, {}, {}, {}, {}, CollapseEmits, any>;
export default CollapseComponent;

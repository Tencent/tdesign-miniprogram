import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdTreeSelectProps } from '../tree-select/type';

export type TreeSelectProps = ExtractNonOnProps<TdTreeSelectProps>;
export type TreeSelectEmits = TransformEventHandlers<TdTreeSelectProps, true>;
declare const TreeSelectComponent: import('vue').DefineComponent<TreeSelectProps, {}, {}, {}, {}, {}, {}, TreeSelectEmits, any>;
export default TreeSelectComponent;

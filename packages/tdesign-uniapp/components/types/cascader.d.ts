import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdCascaderProps } from '../cascader/type';

export type CascaderProps = ExtractNonOnProps<TdCascaderProps>;
export type CascaderEmits = TransformEventHandlers<TdCascaderProps, true>;
declare const CascaderComponent: import('vue').DefineComponent<CascaderProps, {}, {}, {}, {}, {}, {}, CascaderEmits, any>;
export default CascaderComponent;

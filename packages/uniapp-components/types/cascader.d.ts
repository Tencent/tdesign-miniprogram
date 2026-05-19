import type { TdCascaderProps } from '../cascader/type';
import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';

export type CascaderProps = ExtractNonOnProps<TdCascaderProps>;
export type CascaderEmits = TransformEventHandlers<TdCascaderProps, true>;
declare const CascaderComponent: import('vue').DefineComponent<CascaderProps, {}, {}, {}, {}, {}, {}, CascaderEmits, any>;
export default CascaderComponent;

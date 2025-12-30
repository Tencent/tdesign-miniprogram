import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdColProps } from '../col/type';

export type ColProps = ExtractNonOnProps<TdColProps>;
export type ColEmits = TransformEventHandlers<TdColProps, true>;
declare const ColComponent: import('vue').DefineComponent<ColProps, {}, {}, {}, {}, {}, {}, ColEmits, any>;
export default ColComponent;

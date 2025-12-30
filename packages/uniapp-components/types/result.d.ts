import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdResultProps } from '../result/type';

export type ResultProps = ExtractNonOnProps<TdResultProps>;
export type ResultEmits = TransformEventHandlers<TdResultProps, true>;
declare const ResultComponent: import('vue').DefineComponent<ResultProps, {}, {}, {}, {}, {}, {}, ResultEmits, any>;
export default ResultComponent;

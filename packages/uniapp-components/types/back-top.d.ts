import type { TdBackTopProps } from '../back-top/type';
import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';

export type BackTopProps = ExtractNonOnProps<TdBackTopProps>;
export type BackTopEmits = TransformEventHandlers<TdBackTopProps, true>;
declare const BackTopComponent: import('vue').DefineComponent<BackTopProps, {}, {}, {}, {}, {}, {}, BackTopEmits, any>;
export default BackTopComponent;

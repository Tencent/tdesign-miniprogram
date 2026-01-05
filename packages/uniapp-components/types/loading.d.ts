import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdLoadingProps } from '../loading/type';

export type LoadingProps = ExtractNonOnProps<TdLoadingProps>;
export type LoadingEmits = TransformEventHandlers<TdLoadingProps, true>;
declare const LoadingComponent: import('vue').DefineComponent<LoadingProps, {}, {}, {}, {}, {}, {}, LoadingEmits, any>;
export default LoadingComponent;

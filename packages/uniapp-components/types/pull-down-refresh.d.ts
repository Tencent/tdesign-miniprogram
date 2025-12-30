import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdPullDownRefreshProps } from '../pull-down-refresh/type';

export type PullDownRefreshProps = ExtractNonOnProps<TdPullDownRefreshProps>;
export type PullDownRefreshEmits = TransformEventHandlers<TdPullDownRefreshProps, true>;
declare const PullDownRefreshComponent: import('vue').DefineComponent<PullDownRefreshProps, {}, {}, {}, {}, {}, {}, PullDownRefreshEmits, any>;
export default PullDownRefreshComponent;

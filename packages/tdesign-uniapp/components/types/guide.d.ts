import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdGuideProps } from '../guide/type';

export type GuideProps = ExtractNonOnProps<TdGuideProps>;
export type GuideEmits = TransformEventHandlers<TdGuideProps, true>;
declare const GuideComponent: import('vue').DefineComponent<GuideProps, {}, {}, {}, {}, {}, {}, GuideEmits, any>;
export default GuideComponent;

import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdUploadProps } from '../upload/type';

export type UploadProps = ExtractNonOnProps<TdUploadProps>;
export type UploadEmits = TransformEventHandlers<TdUploadProps, true>;
declare const UploadComponent: import('vue').DefineComponent<UploadProps, {}, {}, {}, {}, {}, {}, UploadEmits, any>;
export default UploadComponent;

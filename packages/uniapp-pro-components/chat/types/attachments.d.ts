import type { TdAttachmentsProps } from '../attachments/type';
import type { TransformEventHandlers, ExtractNonOnProps } from '@tdesign/uniapp/common/common';

export type AttachmentsProps = ExtractNonOnProps<TdAttachmentsProps>;
export type AttachmentsEmits = TransformEventHandlers<TdAttachmentsProps, true>;
declare const AttachmentsComponent: import('vue').DefineComponent<AttachmentsProps, {}, {}, {}, {}, {}, {}, AttachmentsEmits, any>;
export default AttachmentsComponent;

import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdMessageProps } from '../message/type';

export type MessageProps = ExtractNonOnProps<TdMessageProps>;
export type MessageEmits = TransformEventHandlers<TdMessageProps, true>;
declare const MessageComponent: import('vue').DefineComponent<MessageProps, {}, {}, {}, {}, {}, {}, MessageEmits, any>;
export default MessageComponent;

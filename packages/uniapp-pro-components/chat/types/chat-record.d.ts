import type { TransformEventHandlers, ExtractNonOnProps } from 'tdesign-uniapp/common/common';
import type { TdChatRecordProps } from '../chat-record/type';

export type ChatRecordProps = ExtractNonOnProps<TdChatRecordProps>;
export type ChatRecordEmits = TransformEventHandlers<TdChatRecordProps, true>;
declare const ChatRecordComponent: import('vue').DefineComponent<
  ChatRecordProps,
  {},
  {},
  {},
  {},
  {},
  {},
  ChatRecordEmits,
  any
>;
export default ChatRecordComponent;

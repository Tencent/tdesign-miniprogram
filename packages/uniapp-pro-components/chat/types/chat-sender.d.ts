import type { TransformEventHandlers, ExtractNonOnProps } from '@tdesign/uniapp/common/common';
import type { TdChatSenderProps } from '../chat-sender/type';

export type ChatSenderProps = ExtractNonOnProps<TdChatSenderProps>;
export type ChatSenderEmits = TransformEventHandlers<TdChatSenderProps, true>;
declare const ChatSenderComponent: import('vue').DefineComponent<ChatSenderProps, {}, {}, {}, {}, {}, {}, ChatSenderEmits, any>;
export default ChatSenderComponent;

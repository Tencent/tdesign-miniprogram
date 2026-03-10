import type { TransformEventHandlers, ExtractNonOnProps } from '@tdesign/uniapp/common/common';
import type { TdChatMessageProps } from '../chat-message/type';

export type ChatMessageProps = ExtractNonOnProps<TdChatMessageProps>;
export type ChatMessageEmits = TransformEventHandlers<TdChatMessageProps, true>;
declare const ChatMessageComponent: import('vue').DefineComponent<ChatMessageProps, {}, {}, {}, {}, {}, {}, ChatMessageEmits, any>;
export default ChatMessageComponent;

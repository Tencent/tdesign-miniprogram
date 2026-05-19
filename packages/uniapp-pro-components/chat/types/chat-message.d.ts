import type { TdChatMessageProps } from '../chat-message/type';
import type { TransformEventHandlers, ExtractNonOnProps } from '@tdesign/uniapp/common/common';

export type ChatMessageProps = ExtractNonOnProps<TdChatMessageProps>;
export type ChatMessageEmits = TransformEventHandlers<TdChatMessageProps, true>;
declare const ChatMessageComponent: import('vue').DefineComponent<ChatMessageProps, {}, {}, {}, {}, {}, {}, ChatMessageEmits, any>;
export default ChatMessageComponent;

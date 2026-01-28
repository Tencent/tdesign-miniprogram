import type { TransformEventHandlers, ExtractNonOnProps } from '@tdesign/uniapp/common/common';
import type { TdChatThinkingProps } from '../chat-thinking/type';

export type ChatThinkingProps = ExtractNonOnProps<TdChatThinkingProps>;
export type ChatThinkingEmits = TransformEventHandlers<TdChatThinkingProps, true>;
declare const ChatThinkingComponent: import('vue').DefineComponent<ChatThinkingProps, {}, {}, {}, {}, {}, {}, ChatThinkingEmits, any>;
export default ChatThinkingComponent;

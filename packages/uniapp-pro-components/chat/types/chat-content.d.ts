import type { TdChatContentProps } from '../chat-content/type';
import type { TransformEventHandlers, ExtractNonOnProps } from '@tdesign/uniapp/common/common';

export type ChatContentProps = ExtractNonOnProps<TdChatContentProps>;
export type ChatContentEmits = TransformEventHandlers<TdChatContentProps, true>;
declare const ChatContentComponent: import('vue').DefineComponent<ChatContentProps, {}, {}, {}, {}, {}, {}, ChatContentEmits, any>;
export default ChatContentComponent;

import type { TransformEventHandlers, ExtractNonOnProps } from '@tdesign/uniapp/common/common';
import type { TdChatListProps } from '../chat-list/type';

export type ChatListProps = ExtractNonOnProps<TdChatListProps>;
export type ChatListEmits = TransformEventHandlers<TdChatListProps, true>;
declare const ChatListComponent: import('vue').DefineComponent<ChatListProps, {}, {}, {}, {}, {}, {}, ChatListEmits, any>;
export default ChatListComponent;

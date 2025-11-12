
## API

### ChatMessage Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
allow-content-segment-custom | Boolean | false | \- | N
animation | String | skeleton | options: skeleton/moving/gradient/dots | N
avatar | String | - | \- | N
chat-content-props | Object | - | Typescript: `ChatContentProps`，[ChatContent API Documents](./chat-content?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/chat-message/type.ts) | N
chat-id | String | - | \- | N
content | Array | - | Typescript: `ChatMessageContent[] ` `type ChatMessageContent = TextContent \| MarkdownContent \| ThinkingContent \| AttachmentContent` ` type AttachmentContent = ChatBaseContent<'attachment', FileItem[]>` `type ThinkingContent = ChatBaseContent<'thinking', ThinkingContentData>` `type MarkdownContent = ChatBaseContent<'markdown', string>` `type TextContent = ChatBaseContent<'text', string>` `interface ThinkingContentData {title?: string; text: string}` `interface ChatBaseContent<T extends ChatContentType, TData> {type: T; data: TData}` `type ChatMessageStatus = 'pending' \| 'streaming' \| 'complete' \| 'stop' \| 'error'` `type ChatContentType = \| 'text' \| 'markdown' \| 'thinking' \| 'attachment'`，[Attachments API Documents](./attachments?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/chat-message/type.ts) | N
datetime | String | - | \- | N
name | String | - | \- | N
placement | String | - | options: left/right | N
role | String | user | options: user/assistant/system | N
status | String | - | options: pending/streaming/complete/stop/error  | N
variant | String | base | options: base/outline/text | N

### ChatMessage Events

name | params | description
-- | -- | --
longpress | `(detail: { id: string })` | \-

### ChatMessage Slots

name | \-
avatar | \-
datetime | \-

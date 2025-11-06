
## API

### ChatContent Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
content | Object | - | required。Typescript: `TdChatContentType ` `interface TdChatContentType { type: 'text' \| 'markdown'; data: string; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/chat-content/type.ts) | Y
markdown-props | Object | - | Typescript: `ChatMarkdownProps`，[ChatMarkdown API Documents](./chat-markdown?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/chat-content/type.ts) | N
role | String | - | required。options: user/assistant/system | Y
status | String | - | options: error / '' | N

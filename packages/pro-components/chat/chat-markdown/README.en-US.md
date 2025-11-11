:: BASE_DOC ::

## API

### ChatMarkdown Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
content | String | - | required | Y
options | Object | { gfm: true, pedantic: false, breaks: true } | Typescript: `TdChatContentMDOptions ` `interface TdChatContentMDOptions {gfm?: boolean; pedantic?: boolean; smartLists?: boolean; breaks?: boolean}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/chat-markdown/type.ts) | N

### ChatMarkdown Events

name | params | description
-- | -- | --
click | `(detail: {detail:{event, node}, currentTarget, target})` | \-

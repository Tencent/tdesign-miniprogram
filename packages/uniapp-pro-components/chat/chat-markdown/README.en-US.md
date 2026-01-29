:: BASE_DOC ::

## API

### ChatMarkdown Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
content | String | - | required | Y
options | Object | () => ({ gfm: true, pedantic: false, breaks: true }) | Typescript: `TdChatContentMDOptions ` `interface TdChatContentMDOptions {gfm?: boolean; pedantic?: boolean; smartLists?: boolean; breaks?: boolean}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-pro-components/chat/chat-markdown/type.ts) | N

### ChatMarkdown Events

name | params | description
-- | -- | --
click | `(context: {detail:{event, node}, currentTarget, target})` | \-

:: BASE_DOC ::

## API

### ChatMarkdown Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
content | String | - | required | Y
options | Object | { gfm: true, pedantic: false, breaks: true } | Typescript: `TdChatContentMDOptions ` `interface TdChatContentMDOptions {gfm?: boolean; pedantic?: boolean; smartLists?: boolean; breaks?: boolean}`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-pro-components/chat/chat-markdown/type.ts) | N

### ChatMarkdown Events

name | params | description
-- | -- | --
click | `(context: TdMarkdownClickContext)` | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/chat-markdown/type.ts)。<br/>`interface TdMarkdownClickContext {event: TouchEvent;node: TdMarkdownNode;}`<br/>`interface TdMarkdownNode {   type: string;   raw?: string;   text?: string;   href?: string;   title?: string;   tokens?: TdMarkdownNode[];   [key: string]: unknown;}`<br/>

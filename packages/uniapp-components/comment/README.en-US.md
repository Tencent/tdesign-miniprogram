:: BASE_DOC ::

## API
### Comment Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
actions | Array | - | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts) | N
author | String | - | \- | N
avatar | String / Object | - | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts) | N
children | String | - | children, same as `reply` | N
content | String | - | \- | N
datetime | String | - | \- | N
folds | Object | - | `v-model:folds` is supported。Typescript: `CommentFold ` `type CommentFoldState = 'collapsed' \| 'partial' \| 'expanded'` `interface CommentFold { state: CommentFoldState; total?: number; step?: number; content?: Partial<Record<CommentFoldState, string \| [string, string]>>}`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts) | N
reply | String | - | \- | N

### Comment Events

name | params | description
-- | -- | --
actions | `(context: { action: CommentActionItem; e: Event })` | \-
folds | `(context: { fold: CommentFold; e: Event })` | \-

### Comment Slots

name | Description
-- | --
actions | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts)
author | \-
avatar | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts)
children | children, same as `reply`
content | \-
datetime | \-
reply | \-

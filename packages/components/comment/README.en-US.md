---
title: Comment
description: Used to display comment information, supports replies, likes and other operations, as well as collapsing/expanding reply areas.
spline: data
isComponent: true
---

<div style="background: #ecf2fe; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <div style="border-left: 2px solid #0052d9; padding: 0 8px">Rendering framework support: Skyline, WebView</div>
</div>

## Introduction

Global introduction, configured in `app.json` under the miniprogram root directory, or local introduction, configured in the `index.json` of the page or component that needs to be introduced.

```json
"usingComponents": {
  "t-comment": "tdesign-miniprogram/comment/comment"
}
```

## Examples

### Basic Comment

{{ base }}

### Comment with Actions

{{ action }}

### Image Comment

{{ image }}

### Text + Image Comment

{{ mixed }}

### Collapse/Expand Comment

{{ collapse }}

## API
### Comment Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
actions | String / Array | - | Typescript: `Array<CommentActionItem> \| string` `type ActionPlacement = 'start' \| 'end'` `interface CommentActionItem { key: string; content?: string; placement?: ActionPlacement; disabled?: boolean}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/comment/type.ts) | N
author | String | - | \- | N
avatar | String / Object | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/comment/type.ts) | N
children | String | - | children, same as `reply` | N
content | String | - | \- | N
datetime | String | - | \- | N
folds | Object | - | Typescript: `CommentFold ` `type CommentFoldState = 'collapsed' \| 'partial' \| 'expanded'` `interface CommentFold { state: CommentFoldState; total?: number; step?: number; content?: Partial<Record<CommentFoldState, string \| [string , string ]>>}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/comment/type.ts) | N
reply | String | - | \- | N

### Comment Events

name | params | description
-- | -- | --
actions | `(detail: { action: CommentActionItem \| TNode;})` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)
folds | `(detail: { fold: CommentFold;})` | \-

### Comment Slots

name | Description
-- | --
author | \-
avatar | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/comment/type.ts)
children | children, same as `reply`
content | \-
datetime | \-
reply | \-

---
title: Comment 评论
description: 评论用于对页面内容的反馈、评价、讨论等，如对文章的评价，对话题的讨论等。
spline: data
isComponent: true
---

## 引入

推荐使用 easycom 模式引入组件，配置后无需手动 import 即可直接在模板中使用 `<t-comment />`。详细配置请参考 [快速开始](../getting-started)。

如需手动引入：

```js
import TComment from '@tdesign/uniapp/comment/comment.vue';
```

### 类型

基础评论

{{ base }}

图片评论

{{ image }}

文字+图片评论

{{ mixed }}

### 样式

展开 + 收起

{{ collapse }}

## API
### Comment Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
actions | Array | - | 操作。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts) | N
author | String | - | 作者 | N
avatar | String / Object | - | 头像。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts) | N
children | String | - | 子元素内容，同 reply | N
content | String | - | 内容 | N
datetime | String | - | 时间 | N
folds | Object | - | 折叠/展开配置项。支持语法糖 `v-model:folds`。TS 类型：`CommentFold ` `type CommentFoldState = 'collapsed' \| 'partial' \| 'expanded'` `interface CommentFold { state: CommentFoldState; total?: number; step?: number; content?: Partial<Record<CommentFoldState, string \| [string, string]>>}`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts) | N
reply | String | - | 回复 | N

### Comment Events

名称 | 参数 | 描述
-- | -- | --
actions | `(context: { action: CommentActionItem; e: Event })` | 点击任一操作项（如回复/点赞/不喜欢）时触发并返回当前操作项
folds | `(context: { fold: CommentFold; e: Event })` | 用户点击“展开回复/收起”时触发，并返回点击后的 fold 配置

### Comment Slots

名称 | 描述
-- | --
actions | 自定义 `actions` 显示内容。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts)
author | 自定义 `author` 显示内容
avatar | 自定义 `avatar` 显示内容。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts)
children | 自定义 `children` 显示内容
content | 自定义 `content` 显示内容
datetime | 自定义 `datetime` 显示内容
reply | 自定义 `reply` 显示内容

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。

名称 | 默认值 | 描述
-- | -- | --
--td-comment-content-font | @font-body-large | 内容字体
--td-comment-content-color | @text-color-primary | 内容颜色
--td-comment-author-color | @text-color-placeholder | 作者颜色
--td-comment-datetime-color | @text-color-disabled | 时间颜色
--td-comment-datetime-font | @font-body-small | 时间字体
--td-comment-folds-item-color | @text-color-secondary | 折叠项颜色

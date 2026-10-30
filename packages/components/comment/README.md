---
title: Comment 评论
description: 用于展示评论信息，支持回复、点赞等操作，以及折叠/展开回复区。
spline: data
isComponent: true
---

<div style="background: #ecf2fe; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <div style="border-left: 2px solid #0052d9; padding: 0 8px">渲染框架支持情况：Skyline、WebView</div>
</div>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-comment": "tdesign-miniprogram/comment/comment"
}
```

## 代码演示

### 基础评论

{{ base }}

### 带操作按钮

{{ action }}

### 图片评论

{{ image }}

### 文字+图片评论

{{ mixed }}

### 展开/收起评论

{{ collapse }}

## API
### Comment Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
actions | String / Array | - | 操作。TS 类型：`Array<CommentActionItem> \| string` `type ActionPlacement = 'start' \| 'end'` `interface CommentActionItem { key: string; content?: string; placement?: ActionPlacement; disabled?: boolean}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/comment/type.ts) | N
author | String | - | 作者 | N
avatar | String / Object | - | 头像。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/comment/type.ts) | N
children | String | - | 子元素内容，同 reply | N
content | String | - | 内容 | N
datetime | String | - | 时间 | N
folds | Object | - | 折叠/展开配置项。TS 类型：`CommentFold ` `type CommentFoldState = 'collapsed' \| 'partial' \| 'expanded'` `interface CommentFold { state: CommentFoldState; total?: number; step?: number; content?: Partial<Record<CommentFoldState, string \| [string , string ]>>}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/comment/type.ts) | N
reply | String | - | 回复 | N

### Comment Events

名称 | 参数 | 描述
-- | -- | --
actions | `(detail: { action: CommentActionItem \| TNode;})` | 点击任一操作项（如回复/点赞/不喜欢）时触发并返回当前操作项。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)
folds | `(detail: { fold: CommentFold;})` | 用户点击“展开回复/收起”时触发，并返回点击后的 fold 配置

### Comment Slots

名称 | 描述
-- | --
author | 自定义 `author` 显示内容
avatar | 自定义 `avatar` 显示内容。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/comment/type.ts)
children | 自定义 `children` 显示内容
content | 自定义 `content` 显示内容
datetime | 自定义 `datetime` 显示内容
reply | 自定义 `reply` 显示内容

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。

名称 | 默认值 | 描述
-- | -- | --
--td-comment-inner-padding | @spacer-1 @spacer-2 calc(@spacer / 2) @spacer-2 | 评论区内边距
--td-comment-content-color | @text-color-primary | 评论内容颜色
--td-comment-author-color | @text-color-placeholder | 作者名称颜色
--td-comment-datetime-color | @text-color-disabled | 时间颜色
--td-comment-bottom-margin-top | calc(@spacer / 2) | 底部操作区上边距

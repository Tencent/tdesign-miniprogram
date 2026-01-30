---
title: ChatThinking 思考过程
description: 用于展示思考过程的组件。
spline: base
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TChatThinking from '@tdesign/uniapp-chat/chat-thinking/chat-thinking.vue';
```

### 01 组件类型

支持多种加载动效类型，包括gradient、moving、dots


{{ base }}

### 02 组件状态

#### 思考中

{{ pending }}

#### 思考完成

{{ complete }}

### 03 组件样式

支持通过`layout`来设置思考过程的布局方式

{{ layout }}

## API

### ChatThinking Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
animation | String | moving | 内容区域最大高度，超出会自动滚动。可选项：skeleton/moving/gradient/dot | N
collapsed | Boolean | false | 是否折叠 | N
content | Object | - | 必需。思考内容对象。TS 类型：`{ text?: string; title?: string }` | Y
layout | String | block | 布局方式。可选项：block/border | N
max-height | Number | - | 内容区域最大高度，超出会自动滚动 | N
status | String | pending | 必需。思考状态。可选项：complete/stop/error/pending | Y

### ChatThinking Events

名称 | 参数 | 描述
-- | -- | --
collapsed-change | `(value: Boolean)` | 切换折叠面板时触发

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
-- | -- | --
--td-chat-thinking-bg-color | @bg-color-container | 思考过程背景色
--td-chat-thinking-border-color | @component-border | 思考过程边框颜色
--td-chat-thinking-border-radius | @radius-default | 思考过程边框圆角
--td-chat-thinking-color | @text-color-primary | 思考过程文字颜色
--td-chat-thinking-font-size | @font-size-base | 思考过程文字大小
--td-chat-thinking-line-height | @line-height-base | 思考过程行高
--td-chat-thinking-padding | @spacer-2 | 思考过程内边距

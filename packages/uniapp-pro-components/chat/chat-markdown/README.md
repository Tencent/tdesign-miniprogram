---
title: ChatMarkdown Markdown内容
description: 用于聊天场景中渲染 Markdown 格式文本的组件，内置 marked 解析器，支持多种 Markdown 语法和配置选项。
spline: chat
isComponent: true
---

## 引入

推荐使用 easycom 模式引入组件，配置后无需手动 import 即可直接在模板中使用 `<t-chat-markdown />`。详细配置请参考 [快速开始](../getting-started)。

如需手动引入：

```js
import TChatMarkdown from '@tdesign/uniapp-chat/chat-markdown/chat-markdown.vue';
```

### 01 基础 Markdown 样式

#### 标题与文本

{{ base }}

#### 列表

{{ list }}

### 02 代码块与表格

#### 代码块

{{ code }}

#### 表格

{{ sheet }}

### 03 图片与超链接

支持监听所有节点的点击事件，点击时返回对应节点数据

{{ url }}

### 04 引用

{{ refer }}

### 05 流式输出光标

{{ tail }}

## API

### ChatMarkdown Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
content | String | - | 必需。markdown 内容文本 | Y
options | Object | { gfm: true, pedantic: false, breaks: true } | Markdown 解析器基础配置。TS 类型：`TdChatContentMDOptions ` `interface TdChatContentMDOptions {gfm?: boolean; pedantic?: boolean; smartLists?: boolean; breaks?: boolean}`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-pro-components/chat/chat-markdown/type.ts) | N
streaming | Object | - | 流式输出配置，控制尾部光标的显示与隐藏。尾部光标配置，true 使用默认光标 ▋，传对象可自定义光标字符。TS 类型：`TdChatMarkdownStreamingOptions` ` interface TdChatMarkdownStreamingOptions { hasNextChunk?: boolean; tail?: boolean \| { content?: string } }`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-pro-components/chat/chat-markdown/type.ts) | N

### ChatMarkdown Events

名称 | 参数 | 描述
-- | -- | --
click | `(context: TdMarkdownClickContext)` | 点击链接时触发。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/chat-markdown/type.ts)。<br/>`interface TdMarkdownClickContext {event: TouchEvent;node: TdMarkdownNode;}`<br/><br/>`interface TdMarkdownNode {   type: string;   raw?: string;   text?: string;   href?: string;   title?: string;   tokens?: TdMarkdownNode[];   [key: string]: unknown;}`<br/>

---
title: ChatMarkdown Markdown内容
description: 用于聊天场景中渲染 Markdown 格式文本的组件，内置 marked 解析器，支持多种 Markdown 语法和配置选项。
spline: chat
isComponent: true
---

## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

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

## API

### ChatMarkdown Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
content | String | - | 必需。markdown 内容文本 | Y
options | Object | { gfm: true, pedantic: false, breaks: true } | Markdown 解析器基础配置。TS 类型：`TdChatContentMDOptions ` `interface TdChatContentMDOptions {gfm?: boolean; pedantic?: boolean; smartLists?: boolean; breaks?: boolean}`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-pro-components/chat/chat-markdown/type.ts) | N

### ChatMarkdown Events

名称 | 参数 | 描述
-- | -- | --
click | `(context: TdMarkdownClickContext)` | 点击任意 Markdown 节点时触发，`node` 为被点击节点的原始数据对象。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-pro-components/chat/chat-markdown/type.ts)。<br/>`interface TdMarkdownClickContext {event: TouchEvent;node: TdMarkdownNode;}`<br/>`interface TdMarkdownNode { type: string; raw?: string; text?: string; href?: string; title?: string; tokens?: TdMarkdownNode[]; [key: string]: unknown;}`<br/>

#### TdMarkdownNode type 字段说明

| type 值 | 说明 | 主要字段 |
| -- | -- | -- |
| `heading` | 标题 | `type`, `raw`, `depth`(1-6), `text`, `tokens`(子节点) |
| `paragraph` | 段落 | `type`, `raw`, `text`, `tokens`(子节点) |
| `text` | 文本 | `type`, `raw`, `text`, `tokens`(子节点，可选) |
| `strong` | 加粗 | `type`, `raw`, `text`, `tokens`(子节点) |
| `em` | 斜体 | `type`, `raw`, `text`, `tokens`(子节点) |
| `del` | 删除线 | `type`, `raw`, `text`, `tokens`(子节点) |
| `link` | 链接 | `type`, `raw`, `text`, `href`, `title`, `tokens`(子节点) |
| `image` | 图片 | `type`, `raw`, `text`, `href`, `title` |
| `list` | 列表 | `type`, `raw`, `ordered`(是否有序), `items`(列表项数组) |
| `blockquote` | 引用块 | `type`, `raw`, `text`, `tokens`(子节点) |
| `code` | 代码块 | `type`, `raw`, `text`(代码内容), `lang`(语言) |
| `codespan` | 行内代码 | `type`, `raw`, `text` |
| `table` | 表格 | `type`, `raw`, `header`(表头数组), `rows`(行数组), `align`(对齐方式) |

> 注：`table` 和 `code` 节点点击时，`node` 为整个节点对象（含完整表格/代码数据）；其余节点点击时，`node` 为对应的 marked token 对象。
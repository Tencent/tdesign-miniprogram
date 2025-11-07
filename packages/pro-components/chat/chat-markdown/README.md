---
title: ChatMarkdown Markdown内容
description: 用于聊天场景中渲染 Markdown 格式文本的组件，内置 marked 解析器，支持多种 Markdown 语法和配置选项。
spline: base
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat-markdown": "tdesign-miniprogram/chat-markdown/chat-markdown"
}
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

支持监听链接的点击事件

{{ url }}

### 04 引用

{{ refer }}

## API

### ChatMarkdown Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
content | String | - | 必需。markdown 内容文本 | Y
options | Object | { gfm: true, pedantic: false, breaks: true } | Markdown 解析器基础配置。TS 类型：`TdChatContentMDOptions ` `interface TdChatContentMDOptions {gfm?: boolean; pedantic?: boolean; smartLists?: boolean; breaks?: boolean}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/chat-markdown/type.ts) | N

### ChatMarkdown Events

名称 | 参数 | 描述
-- | -- | --
click | `(detail: {detail:{event, node}, currentTarget, target})` | 点击链接时触发

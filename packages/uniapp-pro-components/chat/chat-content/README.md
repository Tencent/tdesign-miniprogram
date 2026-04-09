---
title: ChatContent 对话正文
description: ChatContent 用于在聊天对话中渲染不同类型的聊天内容。它支持纯文本和Markdown格式的内容渲染，能够根据内容类型自动选择合适的渲染方式。
spline: base
isComponent: true
---

## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TChatContent from '@tdesign/uniapp-chat/chat-content/chat-content.vue';
```

### 01 组件类型

- 对大模型返回的 markdown 数据自动渲染。markdown 会内置调用 `t-chat-markdown` 渲染，同时可根据 role（user/assistant）切换样式。
- 用户发送的消息保持默认格式显示，纯文本会做 HTML 转义并用 rich-text 渲染；


{{ base }}


## API

### ChatContent Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
content | Object | - | 必需。聊天内容对象。TS 类型：`TdChatContentType ` `interface TdChatContentType { type: 'text' \| 'markdown'; data: string; }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-pro-components/chat/chat-content/type.ts) | Y
markdown-props | Object | - | marked 解析器的配置选项。TS 类型：`ChatMarkdownProps`，[ChatMarkdown API Documents](./chat-markdown?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-pro-components/chat/chat-content/type.ts) | N
role | String | - | 必需。消息角色，用于区分用户和助手的消息样式	。可选项：user/assistant/system | Y
status | String | - | 正文状态。可选项：error / '' | N

### ChatContent Events

名称 | 参数 | 描述
-- | -- | --
click | `(context: {detail:{event, node}, currentTarget, target})` | 点击链接时触发

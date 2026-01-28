---
title: ChatMessage 对话消息体
description: 用于在聊天对话中显示单个消息项。它可以展示用户的头像、昵称、时间、聊天内容，支持多种消息状态和样式变体。
spline: base
isComponent: true
---

## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TChatMessage from '@tdesign/uniapp-chat/chat-message/chat-message.vue';
```

### 01 组件类型

#### 基础类型

{{ base }}

#### 可配置昵称、头像、对齐方式

{{ configure }}

#### 配置消息属性

支持`avatar`，`name`，`datetime`，`content`插槽自定义, `content`插槽使用建议：渲染聊天消息统一用 `t-chat-content`；仅在需要“单独使用 Markdown 组件”时使用 `t-chat-markdown`。也支持别的 markdown 渲染组件，选择其他 markdown 渲染库由用户自行安装。

{{ content }}

### 02 组件状态

#### 加载状态

{{ status }}

#### 出错状态

{{ error }}

### 03 组件样式

#### 气泡样式

{{ style }}

## API

### ChatMessage Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
animation | String | skeleton | 动画效果。可选项：skeleton/moving/gradient/dots | N
avatar | String | - | 自定义的头像配置 | N
chat-content-props | Object | - | 聊天内容组件的属性。TS 类型：`ChatContentProps`，[ChatContent API Documents](./chat-content?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-pro-components/chat/chat-message/type.ts) | N
chat-id | String | - | 聊天消息的唯一标识 | N
content | Array | - | 消息内容，数组中的每一项为一个消息内容对象。TS 类型：`ChatMessageContent[] ` `type ChatMessageContent = TextContent \| MarkdownContent \| ThinkingContent \| AttachmentContent` ` type AttachmentContent = ChatBaseContent<'attachment', FileItem[]>` `type ThinkingContent = ChatBaseContent<'thinking', ThinkingContentData>` `type MarkdownContent = ChatBaseContent<'markdown', string>` `type TextContent = ChatBaseContent<'text', string>` `interface ThinkingContentData {title?: string; text: string}` `interface ChatBaseContent<T extends ChatContentType, TData> {type: T; data: TData}` `type ChatMessageStatus = 'pending' \| 'streaming' \| 'complete' \| 'stop' \| 'error'` `type ChatContentType = \| 'text' \| 'markdown' \| 'thinking' \| 'attachment'`，[Attachments API Documents](./attachments?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-pro-components/chat/chat-message/type.ts) | N
datetime | String | - | 对话单元的时间配置 | N
name | String | - | 自定义的昵称 | N
placement | String | - | 消息显示位置。可选项：left/right | N
role | String | user | 消息角色。可选项：user/assistant/system | N
status | String | - | 消息状态。可选项：pending/streaming/complete/stop/error  | N
variant | String | base | 气泡框样式，支持基础、线框、文字三种类型。可选项：base/outline/text | N

### ChatMessage Events

名称 | 参数 | 描述
-- | -- | --
message-longpress | `(detail: { id: string, longPressPosition: { x: number, y: number } })` | 长按事件
### ChatMessage Slots

名称 | 描述
-- | --
avatar | 自定义 `avatar` 显示内容
datetime | 自定义 `datetime` 显示内容
name | 自定义 `name` 显示内容

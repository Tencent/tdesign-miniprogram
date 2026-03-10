---
title: ChatActionbar 对话操作
description: 包含重新生成，点赞，点踩，复制按钮。 内置 Clipboard 可以复制聊天内容，提供按钮的交互样式，监听 actions 相关事件由业务层实现具体逻辑。
spline: base
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TChatActionbar from '@tdesign/uniapp-chat/chat-actionbar/chat-actionbar.vue';
```

### 01 组件类型

#### 基础类型

{{ base }}

### 02 组件状态

#### 手动初始化状态

{{ comment }}


## API

### ChatActionbar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
action-bar | Array | () => ['replay', 'copy', 'good', 'bad', 'share'] | 操作栏配置。TS 类型：`Array<'replay'\|'copy'\|'good'\|'bad'\|'share'>` | N
chat-id | String | - | 【实验】聊天消息的唯一标识 | N
comment | String | - | 评价内容 | N
content | String | - | 被复制的内容 | N
copy-mode | String | markdown | 【实验】复制内容的模式，可选 'markdown'（复制markdown原文）或 'text'（复制纯文本）。可选项：markdown/text | N
disabled | Boolean | false | 【讨论中】操作按钮是否可点击 | N
long-press-position | Object | - | 【实验】长按触发点的位置信息，用于定位 popover。TS 类型：`{pageX: number; pageY: number; clientX: number; clientY: number; x: number; y: number}` | N
placement | String | start | 【实验】操作栏位置。可选项：start/end/space-around/space-between/longpress | N

### ChatActionbar Events

名称 | 参数 | 描述
-- | -- | --
actions | `(context: {name: string, active: boolean, chatId: string})` | 点击点赞，点踩，复制，分享，重新生成按钮时触发发

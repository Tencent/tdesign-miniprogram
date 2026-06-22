---
title: ChatActionbar 对话操作
description: 包含重新生成，点赞，点踩，复制按钮。 内置 Clipboard 可以复制聊天内容，提供按钮的交互样式，监听 actions 相关事件由业务层实现具体逻辑。
spline: chat
isComponent: true
---


## 引入

推荐使用 easycom 模式引入组件，配置后无需手动 import 即可直接在模板中使用 `<t-chat-actionbar />`。详细配置请参考 [快速开始](../getting-started)。

如需手动引入：

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
action-bar | Array | ['replay', 'copy', 'good', 'bad', 'share'] | 操作栏配置。TS 类型：`Array<'replay'\|'copy'\|'good'\|'bad'\|'share'\|'quote'>` | N
chat-id | String | - | 【实验】聊天消息的唯一标识 | N
comment | String | - | 评价类型， 可选 'good'（点赞） 或者 'bad'（点踩）， 默认为空。可选项：good/bad | N
content | String | - | 被复制的内容 | N
copy-mode | String | markdown | 【实验】复制内容的模式，可选 'markdown'（复制markdown原文）或 'text'（复制纯文本）。可选项：markdown/text | N
disabled | Boolean | false | 【讨论中】操作按钮是否可点击 | N
long-press-position | Object | - | 【实验】长按操作栏位置。TS 类型：`ChatActionbarLongPressPosition ` `interface ChatActionbarLongPressPosition { type?: object, value?: LongPressPositionValue } ` `interface LongPressPositionValue { pageX?: number, pageY?: number, clientX?: number, clientY?: number, x?: number, y?: number }`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-pro-components/chat/chat-actionbar/type.ts) | N
placement | String | start | 【实验】操作栏位置。可选项：start/end/space-around/space-between/longpress | N

### ChatActionbar Events

名称 | 参数 | 描述
-- | -- | --
actions | `(context: {name: string, active: boolean, chatId: string})` | 点击点赞，点踩，复制，分享，重新生成按钮时触发发

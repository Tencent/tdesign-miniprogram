---
title: ChatList 对话列表
description: 用于展示对话或者普通对话场景的组件。
spline: base
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TChatList from '@tdesign/uniapp-chat/chat-list/chat-list.vue';
```


### 组件类型

#### 基础使用

{{ base }}

#### 组合式用法

{{ hook-component }}

#### 自定义

`t-chat-message`支持`content`自定义，使用建议：渲染聊天消息统一用 `t-chat-content`；仅在需要“单独使用 Markdown 组件”或自定义管线时使用 `t-chat-markdown`。也支持别的 markdown 渲染组件，选择其他 markdown 渲染库由用户自行安装。

{{ custom }}

#### 文案助手

{{ docs }}

#### 图像生成

{{ image }}

#### 任务规划

{{ agent }}

## API

### ChatList Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
animation | String | skeleton | 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种。可选项：skeleton/moving/gradient/dot | N
data | Array | - | 对话列表的数据。TS 类型：`Array<TdChatItemMeta>` ` interface TdChatItemMeta { avatar?: string; name?:string; role?:string; datetime?: string; content?: string; status?: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-pro-components/chat/chat-list/type.ts) | N
layout | String | both | 对话布局形式，支持两侧对齐与左对齐。使用插槽自定义对话内容时不生效，得用`t-chat-message`的`placement`属性。可选项：both/single | N
reverse | Boolean | true | 是否表现为倒序 | N

### ChatList Events

名称 | 参数 | 描述
-- | -- | --
scroll | `(context: {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY})` | 滚动事件的回调

### ChatList Slots

名称 | 描述
-- | --
actionbar | 自定义操作按钮的插槽

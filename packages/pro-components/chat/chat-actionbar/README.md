---
title: ChatActionbar 对话操作
description: 包含重新生成，点赞，点踩，复制按钮。 内置 Clipboard 可以复制聊天内容，提供按钮的交互样式，监听 actions 相关事件由业务层实现具体逻辑。
spline: base
isComponent: true
---


## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat-actionbar": "tdesign-miniprogram/chat-actionbar/chat-actionbar"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/TfXVvtmM8I4c" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>


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
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
action-bar | Array | ['replay', 'copy', 'good', 'bad', 'share'] | 操作栏配置。TS 类型：`Array<'replay'\|'copy'\|'good'\|'bad'\|'share'>` | N
chat-id | String | - | 【实验】聊天消息的唯一标识 | N
comment | String | - | 评价内容 | N
content | String | - | 被复制的内容 | N
copy-mode | String | markdown | 【实验】复制内容的模式，可选 'markdown'（复制markdown原文）或 'text'（复制纯文本）。可选项：markdown/text | N
disabled | Boolean | false | 【讨论中】操作按钮是否可点击 | N
placement | String | start | 【实验】操作栏位置。可选项：start/end/space-around/space-between | N

### ChatActionbar Events

名称 | 参数 | 描述
-- | -- | --
actions | `(detail: {name: string, active: boolean})` | 点击点赞，点踩，复制，分享，重新生成按钮时触发发

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--chat-actionbar-item-padding | 16rpx 28rpx | -
--chat-actionbar-padding | 0 | -

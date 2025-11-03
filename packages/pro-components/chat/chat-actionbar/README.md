---
title: ChatActionbar 对话操作栏
description: 用于 ChatBot 对话场景中的操作栏组件。
spline: base
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat-actionbar": "tdesign-miniprogram/chat-actionbar/chat-actionbar"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/F1cSo7mm75SS" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>


## 基础示例

### 基础操作栏

{{ base }}

### 手动初始化状态

{{ comment }}

### 左右布局

{{ layout }}

### 按钮配置

{{ action }}

### 复制模式

copyMode对应复制内容的模式，可选 'markdown'（复制markdown原文）或 'text'（复制纯文本）

{{ copy }}

## API
### ChatAction Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
chatId | String | '' | 聊天消息的唯一标识，一般用于分享一段问答 | N
content | String | - | 被复制的内容 | N
copyMode | String | markdown | 复制内容的模式，可选 'markdown'（复制markdown原文）或 'text'（复制纯文本） | N
comment | String | - | 评价类型， 可选值： `'good(点赞)'/'bad(点踩)`， 默认为空| N
actionBar | Array | ["refresh", "copy", "good", "bad", "share"] | 操作按钮配置项，可配置操作按钮选项和顺序。TS 类型：`Array<'refresh'\|'copy'\|'good'\|'bad'\|'share'>` | N
placement | String | start | 操作栏位置。可选项：start/end/space-around/space-between | N

### ChatAction Events

名称 | 参数 | 描述
-- | -- | --
handleAction | `(name: ChatActionsName, context: { e: MouseEvent, active: boolean })`  点击点赞，点踩，复制，分享，重新生成按钮时触发发

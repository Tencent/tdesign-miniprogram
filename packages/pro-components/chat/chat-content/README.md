---
title: ChatContent 对话正文
description: ChatContent 用于在聊天对话中渲染不同类型的聊天内容。它支持纯文本和Markdown格式的内容渲染，能够根据内容类型自动选择合适的渲染方式。
spline: base
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat-content": "tdesign-miniprogram/chat-content/chat-content"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/rIY05tmE8p4o" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 01 组件类型

- 对大模型返回的 markdown 数据自动渲染。markdown 会内置调用 `t-chat-markdown` 渲染，同时可根据 role（user/assistant）切换样式。
- 用户发送的消息保持默认格式显示，纯文本会做 HTML 转义并用 rich-text 渲染；


{{ base }}


## API

### ChatContent Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
content | Object | - | 必需。聊天内容对象。TS 类型：`TdChatContentType ` `interface TdChatContentType { type: 'text' \| 'markdown'; data: string; }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/chat-content/type.ts) | Y
markdown-props | Object | - | marked 解析器的配置选项。TS 类型：`ChatMarkdownProps`，[ChatMarkdown API Documents](./chat-markdown?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/chat-content/type.ts) | N
role | String | - | 必需。消息角色，用于区分用户和助手的消息样式	。可选项：user/assistant/system | Y
status | String | - | 正文状态。可选项：error / '' | N

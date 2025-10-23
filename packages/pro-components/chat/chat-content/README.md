---
title: ChatContent 聊天内容
description: ChatContent 用于在聊天对话中渲染不同类型的聊天内容。它支持纯文本和Markdown格式的内容渲染，能够根据内容类型自动选择合适的渲染方式。
spline: base
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat-content": "tdesign-miniprogram-chat/chat-content/chat-content"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/F1cSo7mm75SS" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 01 内容类型

### 默认聊天格式

对大模型返回的 markdown 数据自动渲染。

{{ base }}

### 纯文本聊天

用户发送的消息保持默认格式显示，没有高亮效果

{{ text }}


## API

### ChatContent Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
content | Object | {} | 聊天内容对象，包含type和data字段 | Y
role | String | '' | 消息角色，用于区分用户和助手的消息样式 | N

### Content 对象结构

```typescript
interface Content {
  type: 'text' | 'markdown';  // 内容类型
  data: string;               // 内容数据
}
```

### 使用示例

#### 纯文本内容
```xml
<t-chat-content 
  content="{{ { type: 'text', data: '这是一条纯文本消息' } }}"
  role="user"
/>
```

#### Markdown内容
```xml
<t-chat-content 
  content="{{ { type: 'markdown', data: '# 标题\n这是一条**Markdown**消息' } }}"
  role="assistant"
/>
```

### ChatContent External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-text | 文本内容样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-chat-content-text-color | @text-color-primary | 文本颜色
--td-chat-content-text-size | @font-size-base | 文本大小
--td-chat-content-line-height | @line-height-base | 行高

## 功能特性

### 1. 智能内容渲染
- **纯文本内容**：使用 `rich-text` 组件渲染，支持HTML转义
- **Markdown内容**：自动调用 `t-chat-markdown` 组件进行渲染

### 2. 角色样式区分
- **用户消息**：使用 `t-chat__text__user` 样式类
- **助手消息**：使用 `t-chat__text__assistant` 样式类

### 3. 内容安全处理
- 内置HTML转义功能，防止XSS攻击
- 支持编码和非编码两种转义模式

### 4. 组件依赖
- 依赖 `t-chat-markdown` 组件处理Markdown内容
- 使用 `miniprogram-computed` 进行响应式计算

## 注意事项

1. **content对象**：必须包含 `type` 和 `data` 两个字段
2. **type字段**：目前支持 `text` 和 `markdown` 两种类型
3. **role字段**：用于样式区分，建议传入 `user` 或 `assistant`
4. **Markdown渲染**：需要确保 `t-chat-markdown` 组件已正确引入

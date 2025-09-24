---
title: ChatMessage 聊天消息
description: ChatMessage 用于在聊天对话中显示单个消息项。它可以展示用户的头像、昵称、时间、聊天内容，支持多种消息状态和样式变体。
spline: base
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat-message": "tdesign-miniprogram/chat-message/chat-message"
}
```

## 代码演示

### 01 基础用法

#### 基础聊天消息

{{ base }}

{{ style }}

### 可配置头像，昵称，位置

{{ configure }}

#### 加载中状态

{{ status }}

## 消息内容渲染
### 内置支持的几种消息内容
通过配置 `message type`属性，可以渲染内置的几种消息内容：**Markdown格式内容**、**思考过程**
{{ content }}

### 消息内容自定义
{{ custom }}

### 消息操作栏
消息底部操作栏，通过`植入插槽actionbar`的方式实现，可以直接使用`ChatActionBar`组件，也可以完全自定义实现
{{ action }}

## API

### ChatMessage Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
chatId | String | '' | 聊天消息的唯一标识 | N
avatar | String / Object / Slot / Function | '' | 自定义的头像配置。支持字符串、对象、插槽或函数 | N
name | String / Slot / Function | '' | 自定义的昵称。支持字符串、插槽或函数 | N
datetime | String / Slot / Function | '' | 对话单元的时间配置。支持字符串、插槽或函数 | N
variant | String | 'base' | 气泡框样式，支持基础、线框、文字三种类型。可选项：base/outline/text | N
message | Object | {} | 消息内容对象。类型定义见下方 ChatMessagesData | N
placement | String | '' | 消息显示位置。可选项：left/right | N
animation | String | 'skeleton' | 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种。可选项：skeleton/moving/gradient | N


### ChatMessagesData 消息对象结构

字段 | 类型 | 必传 | 说明
--|--|--|--
role | `"user" \| "assistant" \| "system"` | Y | 消息角色类型
status | `"pending" \| "streaming" \| "complete" \| "stop" \| "error"` | N | 消息状态
content | `UserMessageContent[] \| AIMessageContent[] \|  TextContent[]` | N | 消息内容
ext | any | N | 扩展字段

#### UserMessageContent 内容类型支持
- 文本消息 (`TextContent`)
- 附件消息 (`AttachmentContent`)

#### AIMessageContent 内容类型支持
- 文本消息 (`TextContent`)
- Markdown 消息 (`MarkdownContent`)
- 思考状态 (`ThinkingContent`)

几种类型都继承自`ChatBaseContent`，包含通用字段：
字段 | 类型 | 必传 | 默认值 | 说明
--|--|--|--|--
type | `ChatContentType` | Y | - | 内容类型标识（text/markdown/thinking等）
data | 泛型TData | Y | - | 具体内容数据，类型由type决定

### ChatMessage Events

名称 | 参数 | 描述
-- | -- | --
longpress | `({ e: TouchEvent, id: String })` | 长按时触发，返回事件对象和聊天消息ID

### ChatMessage Slots

名称 | 描述
-- | --
avatar | 自定义头像内容
name | 自定义昵称内容
datetime | 自定义时间内容
actionbar | 自定义操作栏内容
default | 默认插槽，用于自定义消息内容

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。

名称 | 默认值 | 描述
-- | -- | --
--t-chat-message-avatar-size | 64rpx | 头像尺寸
--t-chat-message-avatar-radius | 50% | 头像圆角
--t-chat-message-name-color | rgba(0, 0, 0, 0.4) | 昵称文字颜色
--t-chat-message-datetime-color | rgba(0, 0, 0, 0.4) | 时间文字颜色
--t-chat-message-content-bg | #f3f3f3 | 消息内容背景色
--t-chat-message-content-border-radius | 24rpx | 消息内容圆角
--t-chat-message-content-padding | 24rpx 32rpx | 消息内容内边距

### External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-avatar | 头像样式类
t-class-name | 昵称样式类
t-class-datetime | 时间样式类
t-class-content | 内容样式类
t-class-actions | 操作栏样式类

## 使用示例

### 基础用法

```html
<t-chat-message
  avatar="https://example.com/avatar.jpg"
  name="用户名"
  datetime="14:30"
  message="{{messageData}}"
  role="user"
/>
```

### 自定义插槽

```html
<t-chat-message role="assistant">
  <view slot="avatar">
    <image src="https://example.com/ai-avatar.jpg" />
  </view>
  <view slot="name">AI助手</view>
  <view slot="datetime">刚刚</view>
  <view slot="default">
    这是AI助手的回复内容
  </view>
</t-chat-message>
```

### 加载状态

```html
<t-chat-message
  text-loading="{{true}}"
  animation="skeleton"
  role="assistant"
/>
```

### 不同样式变体

```html
<!-- 基础样式 -->
<t-chat-message variant="base" />

<!-- 线框样式 -->
<t-chat-message variant="outline" />

<!-- 文字样式 -->
<t-chat-message variant="text" />
```

## 注意事项

1. **组件依赖**：该组件依赖 `tdesign-miniprogram` 包
2. **样式隔离**：组件使用 `styleIsolation: 'shared'` 模式
3. **插槽支持**：支持多个插槽，可以灵活自定义内容
4. **响应式更新**：支持通过 `observers` 监听属性变化自动更新UI
5. **事件处理**：支持长按事件，可用于消息操作菜单

## 更新日志

- 支持多种消息样式变体
- 支持自定义插槽内容
- 支持加载状态和动画效果
- 支持消息位置对齐
- 支持长按事件处理

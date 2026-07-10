---
title: 常见问题
description: 看看有没有你想要的。
spline: explain
---

## 写在前面

`@tdesign/uniapp-chat` 是构建在 `@tdesign/uniapp` 之上的 AI 对话场景组件集，专注于聊天列表、消息气泡、Markdown 渲染、流式输出等能力。

由于底层依赖 `@tdesign/uniapp`，**所有 `@tdesign/uniapp` 的通用约定在 chat 包中同样适用**，包括但不限于：

- 事件参数已统一去除 `e.detail` 包装层；
- 受控组件统一使用 `v-model:value`，而非 Vue 3 默认的 `modelValue`；
- 外部样式类通过 props 形式传入，并需要 `:deep()` 穿透；
- 函数式组件（Toast、Dialog 等）的 `context` 处理方式；
- TypeScript slot 类型提示、`tsconfig` 的修正方式。

以上详细说明请参见 [TDesign Uniapp 常见问题](/uniapp/faq)，本文不再重复，只列出 chat 包特有的问题。

## 常见问题

### 与 `@tdesign/uniapp` 的关系

[`@tdesign/uniapp`](https://www.npmjs.com/package/@tdesign/uniapp) 与 [`@tdesign/uniapp-chat`](https://www.npmjs.com/package/@tdesign/uniapp-chat) 是两个独立发布的包，**`@tdesign/uniapp-chat` 依赖 `@tdesign/uniapp`**，使用前需要同时安装这两个包。

样式文件只需从 `@tdesign/uniapp` 中引入一份即可，chat 包共用同一套主题变量，**无需额外引入 chat 包的样式**：

```js
// 推荐：默认单位 px
import '@tdesign/uniapp/theme.css';

// 或者引入与 tdesign-miniprogram 完全一致的版本，单位为 rpx
import '@tdesign/uniapp/theme.less';
```

### `chat-list` 新增消息时页面抖动

`chat-list` 在新增消息时如果出现页面元素抖动、闪烁或重新渲染，通常是由于列表项缺少**稳定且唯一的 key**，导致框架在 diff 时无法正确复用节点。

解决办法：在传入 `data` 的每一条消息上提供稳定的 `id`（建议使用消息的真实 ID，**避免使用 index 或随机数**），组件内部会使用该字段作为渲染 key。

```js
const data = [
  { id: 'msg_001', role: 'user', content: '你好' },
  { id: 'msg_002', role: 'assistant', content: '你好，请问有什么可以帮你？' },
  // ...
];
```

### `chat-list` 为什么默认倒序

默认 `reverse` 为 `true`，即将列表渲染为倒序。这样可以带来两个体验优势：

- 新消息到来时，页面可以「自然地」从下方推上去，无需额外计算滚动位置；
- 下拉加载历史消息时滚动行为更顺滑，不会出现因列表头部插入导致的视口跳动。

如果业务场景需要正序展示，可以将 `reverse` 设为 `false`：

```html
<t-chat-list :data="data" :reverse="false" />
```

需要注意，正序模式下新消息追加在末尾，业务方需要自行处理「新消息到来时滚动到底部」的逻辑。

### 流式输出（SSE）相关

如果你需要对接大模型的流式响应（Server-Sent Events），可以参考独立的 [什么是流式输出](/uniapp-chat/sse) 文档，里面包含完整的请求封装、增量渲染、打字机效果等示例。

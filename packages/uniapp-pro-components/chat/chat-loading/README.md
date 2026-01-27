---
title: ChatLoading 对话加载
description: 用于对话场景中的加载状态组件。
spline: base
isComponent: true
---

## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TChatLoading from '@tdesign/uniapp-chat/chat-loading/chat-loading.vue';
```

### 01 组件类型

支持多种加载中动效类型，包括 gradient、moving、dots

{{ base }}

#### 带文案描述的加载组件

{{ text }}

## API

### ChatLoading Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
animation | String | moving | 加载的状态形式。可选项：skeleton/moving/gradient/dot | N
text | String | - | 加载过程展示的文字内容 | N

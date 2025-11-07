---
title: ChatLoading 对话加载
description: 用于对话场景中的加载状态组件。
spline: base
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat-loading": "tdesign-miniprogram/chat-loading/chat-loading"
}
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
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
animation | String | moving | 加载的状态形式。可选项：skeleton/moving/gradient/dot | N
text | String | - | 加载过程展示的文字内容 | N

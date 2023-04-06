---
title: Empty 空状态
description: 用于空状态时的占位提示。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-empty": "tdesign-miniprogram/empty/empty"
}
```

## 代码演示

### 类型

图标空状态

{{ base }}

自定义图片空状态

{{ imageEmpty }}

带操作空状态

{{ buttonEmpty }}



## API
### Empty Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
action | Slot | - | 操作按钮 | N
description | String / Slot | - | 描述文字 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层类名、文本描述类名、图片类名、操作按钮类名。`['t-class', 't-class-description', 't-class-image', 't-class-actions']` | N
icon | String / Object | - | 图标名称。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon`。 | N
image | String / Slot | - | 图片地址 | N

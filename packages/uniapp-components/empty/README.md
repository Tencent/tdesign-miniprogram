---
title: Empty 空状态
description: 用于空状态时的占位提示。
spline: data
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TEmpty from 'tdesign-uniapp/empty/empty.vue';
```

### 类型

图标空状态

{{ base }}

自定义图片空状态

{{ imageEmpty }}

带操作空状态

{{ buttonEmpty }}



## API

### Empty Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
description | String | - | 描述文字 | N
icon | String / Object | - | 图标名称。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon` | N
image | String | - | 图片地址 | N

### Empty Slots

名称 | 描述
-- | --
action | 操作按钮
description | 自定义 `description` 显示内容
image | 自定义 `image` 显示内容

### Empty External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-description | 描述样式类
t-class-image | 图片样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-empty-action-margin-top | @spacer-4 | - |
| --td-empty-description-color | @text-color-placeholder | - |
| --td-empty-description-font-size | @font-size-base | - |
| --td-empty-description-line-height | 44rpx | - |
| --td-empty-description-margin-top | @spacer-2 | - |
| --td-empty-icon-color | @text-color-placeholder | - |
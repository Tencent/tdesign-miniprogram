---
title: ButtonGroup
description: 按钮组
spline: base
isComponent: true
---

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-button-group": "tdesign-miniprogram/button-group/button-group"
}
```

## 用法

### 组件方式

```html
<!-- page.wxml -->
<t-button-group>
  <t-button theme="ghost">置底按钮</t-button>
  <t-button theme="primary">置底按钮</t-button>
</t-button-group>
```

## API

### `<t-button-group>` 组件

组件路径：`tdesign-miniprogram/button-group/button-group`

#### Props
名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
type | String | `'default'` | 按钮组样式  | N  

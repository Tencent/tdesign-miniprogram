---
title: Toast 轻提示
description: 用于轻量级反馈或提示，不会打断用户操作。
spline: message
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-toast": "tdesign-miniprogram/toast/toast"
}
```

## 代码演示

### 基础提示

{{ base }}

### 默认提示

{{ normal }}

### 不同位置的提示

{{ display }}

### 显示遮罩
{{ cover }}

### 手动关闭
{{ close }}
## API
### Toast Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
direction | String | row | 图标排列方式。可选项：row/column | N
duration | Number | 2000 | 弹窗显示毫秒数 | N
external-classes | Array | - | 组件类名。`['t-class']` | N
icon | String | - | 自定义图标 | N
message | String / Slot | - | 弹窗显示文字 | N
overlay-props | Object | {} | 遮罩层属性，透传至 Overlay | N
placement | String | middle | 弹窗展示位置。可选项： top/middle/bottom | N
prevent-scroll-through | Boolean | false | 防止滚动穿透，即不允许点击和滚动 | N
show-overlay | Boolean | false | 是否显示遮罩层 | N
theme | String | - | 提示类型。可选项：loading/success/fail | N

### Toast Events

名称 | 参数 | 描述
-- | -- | --
close | - | 轻提示隐藏的时候触发
destory | - | 轻提示销毁的时候触发

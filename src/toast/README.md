---
title: Toast 轻提示
description: 用于轻量级反馈或提示，不会打断用户操作。
spline: message
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span>
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

### 组件状态

{{ theme }}

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
icon | String / Object / Slot | - | 自定义图标。传入对象则透传至 Icon 组件 | N
message | String / Slot | - | 弹窗显示文字 | N
overlay-props | Object | {} | 遮罩层属性，透传至 Overlay | N
placement | String | middle | 弹窗展示位置。可选项： top/middle/bottom | N
prevent-scroll-through | Boolean | false | 防止滚动穿透，即不允许点击和滚动 | N
show-overlay | Boolean | false | 是否显示遮罩层 | N
theme | String | - | 提示类型。可选项：loading/success/error | N

### Toast Events

名称 | 参数 | 描述
-- | -- | --
close | \- | 轻提示隐藏的时候触发
destory | \- | 轻提示销毁的时候触发

### Toast 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类

### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-toast-bg-color | @font-gray-2 | - 
--td-toast-color | @font-white-1 | - 
--td-toast-column-icon-size | 64rpx | - 
--td-toast-max-width | 374rpx | - 
--td-toast-radius | 8rpx | - 
--td-toast-row-icon-size | 48rpx | - 

---
title: Link 链接
description: 文字超链接用于跳转一个新页面，如当前项目跳转，友情链接等。
spline: navigation
isComponent: true
---

## 代码演示

### 组件类型

基础文字链接

{{ content }}

下划线文字链接

{{ underline }}

前置图标文字链接

{{ prefix }}

后置图标文字链接

{{ suffix }}

### 组件状态

不同主题

{{ theme }}

禁用状态

{{ status }}

### 组件样式

链接尺寸

{{ size }}

## API
### Link Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | String / Slot | - | 链接内容 | N
navigator-props | Object | - | 与 navigator 原生组件属性保持一致，具体使用参考：https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html。 | N
prefix-icon | String / Object / Slot | - | 前置图标 | N
size | String | medium | 尺寸。可选项：small/medium/large。TS 类型：`SizeEnum` | N
status | String | normal | 组件状态。可选项：normal/active/disabled | N
suffix-icon | String / Object / Slot | - | 前置图标 | N
theme | String | default | 组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success | N
underline | Boolean | - 是否显示链接下划线 | N

### Link Events

名称 | 参数 | 描述
-- | -- | --
complete | \- | 页面链接执行完成后触发（失败或成功均会触发）
fail | \- | 页面链接跳转失败后触发
success | \- | 页面链接跳转成功后触发

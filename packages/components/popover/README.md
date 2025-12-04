---
title: Popover 弹出气泡
description: 用于文字提示的气泡框。
spline: data
isComponent: true
---


## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-popover": "tdesign-miniprogram/popover/popover"
}
```

<!-- ## 代码演示 -->


### 组件类型
带箭头的弹出气泡

{{ base }}

## API


### Popover Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
close-on-click-outside | Boolean | true | 是否在点击外部元素后关闭菜单  | N
content | String | - | 确认框内容 | N
placement | String | top | 浮层出现位置。可选项：top/left/right/bottom/top-left/top-right/bottom-left/bottom-right/left-top/left-bottom/right-top/right-bottom | N
show-arrow | Boolean | true | 是否显示浮层箭头 | N
theme | String | dark | 弹出气泡主题。可选项：dark/light/brand/success/warning/error | N
visible | Boolean | - | 是否显示气泡确认框 | N

### Popover Events

名称 | 参数 | 描述
-- | -- | --
visible-change | `(visible: boolean)` | 确认框显示或隐藏时触发

### Popover Slots

名称 | 描述
-- | --
\- | 自定义 `` 显示内容
content \| 自定义 `content` 显示内容

### Popover External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-popover-padding | 24rpx | - 
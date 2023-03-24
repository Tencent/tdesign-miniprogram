---
title: Popup 弹出层
description: 由其他控件触发，屏幕滑出或弹出一块自定义内容区域。
spline: message
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-popup": "tdesign-miniprogram/popup/popup"
}
```

## 代码演示

### 组件类型

基础弹出层

{{ base }}

### 组件示例

应用示例

{{ with-title }}

{{ custom-close }}

## API
### Popup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
close-btn | Boolean / Slot | - | 关闭按钮，值类型为 Boolean 时表示是否显示关闭按钮。也可以自定义关闭按钮 | N
close-on-overlay-click | Boolean | true | 点击遮罩层是否关闭 | N
content | String / Slot | - | 浮层里面的内容 | N
duration | Number | 240 | 动画过渡时间 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层元素、遮罩层、浮层内容 等元素类名。`['t-class', 't-class-overlay', 't-class-content']` | N
overlay-props | Object | {} | 遮罩层的属性，透传至 overlay | N
placement | String | top | 浮层出现位置。可选项：top/left/right/bottom/center | N
prevent-scroll-through | Boolean | true | 防止滚动穿透 | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
visible | Boolean | false | 是否显示浮层。TS 类型：`boolean` | N
default-visible | Boolean | undefined | 是否显示浮层。非受控属性。TS 类型：`boolean` | N
z-index | Number | 11500 | 组件层级，Web 侧样式默认为 5500，移动端样式默认为 1500，小程序样式默认为11500 | N

### Popup Events

名称 | 参数 | 描述
-- | -- | --
visible-change | `(visible: boolean, trigger: PopupSource) ` | 当浮层隐藏或显示时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popup/type.ts)。<br/>`type PopupSource = 'close-btn' \| 'overlay'`<br/>

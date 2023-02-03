---
title: Overlay 遮罩层
description: 通过遮罩层，可以强调部分内容
spline: message
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.10.0 版本上线，请留意版本。
</div>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-overlay": "tdesign-miniprogram/overlay/overlay"
}
```

## 代码演示

### 基础使用

{{ base }}

## API

### Overlay Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
visible | Boolean | false | 是否展示 | N
zIndex | Number | 11000 | 遮罩层及 | N
duration | Number | 300 | (暂不支持)背景色过渡时间，单位毫秒 | N
backgroundColor | String | - | 遮罩层的背景色 | N
preventScrollThrough | Boolean | true | 防止滚动穿透，即不允许点击和滚动 | N

### Overlay Events

名称 | 参数 | 描述
-- | -- | --
click | `({ visible: boolean })` | 点击遮罩时触发

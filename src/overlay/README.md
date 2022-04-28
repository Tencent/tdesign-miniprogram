---
title: Overlay 遮罩层
description: 通过遮罩层，可以强调部分内容
spline: message
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-overlay": "tdesign-miniprogram/overlay/overlay"
}
```

## 代码演示

### 基础使用

```html
<t-overlay visible="{{overlayVisible}}" bind:click="handleOverlay">
  <!-- slot -->
</t-overlay>
```

```js
Page({
  data: {
    overlayVisible: true
  },
  handleOverlay() {
    this.setData({ overlayVisible: false });
  }
})
```

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
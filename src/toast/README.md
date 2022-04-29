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

### 基础轻提示

用 API `Toast` 方法调用轻提示。

```html
<t-toast id="t-toast" />
```

```js
import Toast from 'tdesign-miniprogram/toast/index';
```

### 纯文本的轻提示

<img src="https://tdesign.gtimg.com/miniprogram/readme/toast-1.png" width="20%" height="20%">

```js
Toast({
  context: this,
  selector: '#t-toast',
  message: '轻提示文字内容',
});
```

### 带横向图标的轻提示

<img src="https://tdesign.gtimg.com/miniprogram/readme/toast-3.png" width="20%" height="20%">

```js
Toast({
  context: this,
  selector: '#t-toast',
  message: '带图标横向',
  icon: 'check-circle',
});
```

### 带竖向图标的轻提示

<img src="https://tdesign.gtimg.com/miniprogram/readme/toast-4.png" width="20%" height="20%">

```js
Toast({
  context: this,
  selector: '#t-toast',
  message: '带图标竖向',
  icon: 'star',
  direction: 'column',
});
```

### 默认轻提示

<img src="https://tdesign.gtimg.com/miniprogram/readme/toast-2.png" width="375px" height="20%">

```js
Toast({
  context: this,
  selector: '#t-toast',
  message: '成功文案',
  theme: 'fail',
});

Toast({
  context: this,
  selector: '#t-toast',
  message: '警告文案',
  theme: 'success',
});

Toast({
  context: this,
  selector: '#t-toast',
  message: '加载中...',
  theme: 'loading',
  direction: 'column',
});
```

### 不同位置的轻提示

```js
Toast({
  context: this,
  selector: '#t-toast',
  message: '顶部-展示1秒',
  direction: 'column',
  placement: 'top',
  duration: 1000,
  icon: 'star',
});

Toast({
  context: this,
  selector: '#t-toast',
  message: '中间-展示2秒',
  direction: 'column',
  duration: 2000,
  icon: 'star',
});

Toast({
  context: this,
  selector: '#t-toast',
  message: '底部-展示3秒',
  direction: 'column',
  placement: 'bottom',
  duration: 3000,
  icon: 'star',
});
```

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
show-overlay | Boolean | true | 是否显示遮罩层 | N
theme | String | - | 提示类型。可选项：loading/success/fail | N

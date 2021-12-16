---
title: Message 消息通知
description: 用于轻量级反馈或提示，不会打断用户操作。
spline: message
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-message": "tdesign-miniprogram/message/message"
}
```

### 引入 API

若以 API 形式调用 Message，则需在页面 `page.js` 中引入组件 API：

```js
import Message from 'tdesign-miniprogram/message/index';
```

## 代码演示

### 基础消息通知

弹窗内容为纯文本、标题和副标题、带输入框，用 API `Message.info` 方法调用反馈类对话框。

```html
<t-message id="t-message" />
```

### 纯文字的消息通知

<img src="https://tdesign.gtimg.com/miniprogram/readme/messageNormal(4).png" width="375px" height="50%">

```js
Message.info({
  offset: [20, 32],
  duration: 5000,
  icon: false,
  content: '这是一条纯文字的消息通知 5s消失',
});
```

### 带图标的消息通知

<img src="https://tdesign.gtimg.com/miniprogram/readme/messageNormal.png" width="375px" height="50%">

```js
Message.info({
  offset: ['20rpx', '32rpx'],
  duration: 5000,
  icon: 'error-circle',
  content: '这是一条带图标的消息通知 5s消失',
});
```

### 带关闭的消息通知

<img src="https://tdesign.gtimg.com/miniprogram/readme/messageNormal(1).png" width="375px" height="50%">

```js
Message.info({
  offset: [20, 32],
  icon: 'error-circle',
  content: '这是一条带关闭的消息通知 常驻可关闭',
  duration: -1,
  closeBtn: true,
});
```

### 滚动的消息通知

<img src="https://tdesign.gtimg.com/miniprogram/readme/messageNormal(3).png" width="375px" height="50%">

```js
Message.info({
  offset: [20, 32],
  marquee: { speed: 50, loop: -1, delay: 5000 },
  icon: false,
  content: '这是一条滚动的通知信息',
  duration: -1,
});
```

### 带按钮的消息通知

<img src="https://tdesign.gtimg.com/miniprogram/readme/messageWarning(3).png" width="375px" height="50%">

```js
Message.info({
  offset: [20, 32],
  icon: 'notification',
  content: '这是一条带操作的消息通知',
  duration: -1,
  action: '按钮',
});
```

### 不同状态的消息通知

消息通知类型为普通（info）、警示（warning）、成功（success）、错误（error）

#### 普通消息通知

<img src="https://tdesign.gtimg.com/miniprogram/readme/messageNormal(2).png" width="375px" height="50%">

```js
Message.info({
  offset: [20, 32],
  duration: 5000,
  icon: false,
  content: '这是一条纯文字的消息通知 5s消失',
});
```

#### 警示消息通知

<img src="https://tdesign.gtimg.com/miniprogram/readme/messageWarning(1).png" width="375px" height="50%">

```js
Message.warning({
  offset: [20, 32],
  duration: -1,
  content: '这是一条需要用户关注到的警示通知',
});
```

#### 成功消息通知

<img src="https://tdesign.gtimg.com/miniprogram/readme/messageWarning.png" width="375px" height="50%">

```js
Message.success({
  offset: [20, 32],
  duration: -1,
  content: '这是一条需要成功的提示消息',
});
```

#### 错误消息通知

<img src="https://tdesign.gtimg.com/miniprogram/readme/messageWarning(2).png" width="375px" height="50%">

```js
Message.error({
  offset: [20, 32],
  duration: -1,
  content: '这是一条错误提示通知',
});
```

## API

### Message Props

| 名称 | 类型 | 默认值 | 说明 | 必传|
| -- | -- | -- | -- | -- |
| action           | String / Slot           | -         | 操作                                                                                                                                                                                | N                                                                                                                  |
| align            | String                  | left      | 文本对齐方式。可选项：left/center                                                                                                                                                   | N                                                                                                                  |
| close-btn        | String / Boolean / Slot | undefined | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。也可以完全自定义按钮                                         | N                                                                                                                  |
| content          | String / Slot           | -         | 用于自定义消息弹出内容                                                                                                                                                              | N                                                                                                                  |
| duration         | Number                  | 3000      | 消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器。                                                                                           | N                                                                                                                  |
| external-classes | Array                   | -         | 样式类名，分别用于设置 组件外层、消息内容、左侧图标、操作按钮、关闭按钮等元素类名。`['t-class', 't-class-content', 't-class-icon', 't-class-action', 't-class-close-btn']`          | N                                                                                                                  |
| icon             | String / Boolean / Slot | true      | 消息提醒前面的图标。值为 true 则根据 theme 显示对应的图标，值为 false 则不显示图标。值为 'info' 或 'bell' 则显示组件内置图标。也可以完全自定义图标节点。TS 类型：`boolean           | 'info'                                                                                                             | 'bell'` | N   |
| marquee          | Boolean / Object        | false     | 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放。TS 类型：`boolean                                       | DrawMarquee`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N       |
| offset           | Array                   | -         | 相对于 placement 的偏移量，示例：[-10, 20] 或 ['10rpx', '8rpx']。TS 类型：`Array<string                                                                                             | number>`                                                                                                           | N       |
| theme            | String                  | info      | 消息组件风格。可选项：info/success/warning/error。TS 类型：`MessageThemeList`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N                                                                                                                  |
| visible          | Boolean                 | false     | 是否显示，隐藏时默认销毁组件                                                                                                                                                        | N                                                                                                                  |
| z-index          | Number                  | -         | 元素层级，样式默认为 5000                                                                                                                                                           | N                                                                                                                  |

### Message Events

| 名称             | 参数 | 描述                                     |
| ---------------- | ---- | ---------------------------------------- |
| action-btn-click | -    | 当操作按钮存在时，用户点击操作按钮时触发 |
| close-btn-click  | -    | 当关闭按钮存在时，用户点击关闭按钮触发   |
| duration-end     | -    | 计时结束后触发                           |

---
title: Message 消息通知
description: 用于轻量级反馈或提示，不会打断用户操作。
spline: message
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-89%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-86%25-blue" /></span>
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

### 组件类型

弹窗内容为纯文本、标题和副标题、带输入框，用 API `Message.info` 方法调用反馈类对话框。


{{ base }}


### 组件状态

消息通知类型为普通（info）、警示（warning）、成功（success）、错误（error）  

{{ theme }}

## API
### Message Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
action | String / Slot | - | 已废弃。操作 | N
align | String | left | 文本对齐方式。可选项：left/center。TS 类型：`MessageAlignType` `type MessageAlignType = 'left' \| 'center'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
close-btn | String / Boolean / Object / Slot | false | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string ，如：'user'，则显示组件内置图标。值类型为 object ，则会透传至 icon 组件。| N
content | String / Slot | - | 用于自定义消息弹出内容 | N
duration | Number | 3000 | 消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器。 | N
external-classes | Array | - | 样式类名，分别用于设置 组件外层、消息内容、左侧图标、操作按钮、关闭按钮等元素类名。`['t-class', 't-class-content', 't-class-icon', 't-class-link', 't-class-close-btn']` | N
icon | String / Boolean / Object / Slot | true | 消息提醒前面的图标，可以自定义。值为 true 则根据 theme 显示对应的图标，值为 false 则不显示图标。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string ，如：'info'，则显示组件内置图标。值类型为 object ，则会透传至 icon 组件。| N
marquee | Boolean / Object | false | 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放。TS 类型：`boolean \| DrawMarquee` `interface DrawMarquee { speed?: number; loop?: number; delay?: number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
offset | Array | - | 相对于 placement 的偏移量，默认单位 rpx。示例：[-10, 20] 或 ['10rpx', '8rpx']。TS 类型：`Array<string \| number>` | N
theme | String | info | 消息组件风格。可选项：info/success/warning/error。TS 类型：`MessageThemeList` `type MessageThemeList = 'info' \| 'success' \| 'warning' \| 'error'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
visible | Boolean | false | 是否显示，隐藏时默认销毁组件 | N
default-visible | Boolean | false | 是否显示，隐藏时默认销毁组件。非受控属性 | N
z-index | Number | 15000 | 元素层级，样式默认为 15000 | N
link | String / Object / Slot | - | 链接名称。值为字符串表示链接名称，值为 `Object` 类型，表示透传至 `Link`。 | N
### Message Events

名称 | 参数 | 描述
-- | -- | --
action-btn-click | - | 已废弃。当操作按钮存在时，用户点击操作按钮时触发
close-btn-click | - | 当关闭按钮存在时，用户点击关闭按钮触发
duration-end | \- | 计时结束后触发
link-click | - | 当`link`链接存在时，点击链接文本时触发

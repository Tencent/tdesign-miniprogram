---
title: Dialog 对话框
description: 用于显示重要提示或请求用户进行重要操作，一种打断当前操作的模态视图。
spline: message
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-97%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-82%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-dialog": "tdesign-miniprogram/dialog/dialog"
}
```

## 代码演示

按钮的样式，默认使用 `variant = text`，如果任意按钮改变了 `variant`，那么全部按钮都改变成这个。

### 组件类型
#### 反馈类对话框

{{ base }}

> 使用这种方式，对话框的 `visible` 是受控的，需要手动设置额 `visible` 为 `false` 才会关闭对话框。

#### 确认类对话框

{{ confirm }}

#### 输入类对话框

{{ with-input }}

#### 带图片对话框

{{ with-image }}

### 组件状态

{{ status }}

### 组件用法
#### 命令调用

{{ command }}

#### 开发能力按钮

当传入的按钮类型为对象时，整个对象都将透传至 `t-button`，因此按钮可以直接使用开放能力

{{ button }}

## API
### Dialog Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
actions | Array / Slot | - | 操作栏。TS 类型：`Array<ButtonProps>`，[Button API Documents](./button?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts) | N
button-layout | String | horizontal | 多按钮排列方式。可选项：horizontal/vertical | N
cancel-btn | String / Object / Slot | - | 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 Slot 自定义按钮时，需自行控制取消事件。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts) | N
close-btn | Boolean / Object | false | `0.31.0`。是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；使用 Object 时透传至图标组件 | N
close-on-overlay-click | Boolean | undefined | 点击蒙层时是否触发关闭事件 | N
confirm-btn | String / Object / Slot | - | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 Slot 自定义按钮时，需自行控制确认事件 | N
content | String / Slot | - | 内容 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层元素、组件内容部分、确认按钮、取消按钮 等元素类名。`['t-class', 't-class-content', 't-class-confirm', 't-class-cancel']` | N
overlay-props | Object | {} | 透传至 Overlay 组件 | N
prevent-scroll-through | Boolean | true | 防止滚动穿透 | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
title | String / Slot | - | 标题 | N
visible | Boolean | - | 控制对话框是否显示 | N
z-index | Number | 11500 | 对话框层级，Web 侧样式默认为 2500，移动端样式默认 2500，小程序样式默认为 11500 | N

### Dialog Events

名称 | 参数 | 描述
-- | -- | --
cancel | - | 如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件
close | `(trigger: DialogEventSource)` | 关闭事件，点击 取消按钮 或 点击蒙层 时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts)。<br/>`type DialogEventSource = 'cancel' \| 'overlay' \| 'close-btn'`<br/>
confirm | - | 如果“确认”按钮存在，则点击“确认”按钮时触发
overlay-click | - | 如果蒙层存在，点击蒙层时触发

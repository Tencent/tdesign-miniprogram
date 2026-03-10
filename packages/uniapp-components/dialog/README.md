---
title: Dialog 对话框
description: 用于显示重要提示或请求用户进行重要操作，一种打断当前操作的模态视图。
spline: message
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TDialog from '@tdesign/uniapp/dialog/dialog.vue';
```

### 组件类型

按钮的样式，默认使用 `variant = text`，如果任意按钮改变了 `variant`，那么全部按钮都改变成这个。

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

#### 开放能力按钮

当传入的按钮类型为对象时，整个对象都将透传至 `t-button`，因此按钮可以直接使用开放能力

{{ button }}

## API

### Dialog Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
actions | Array | - | 操作栏。TS 类型：`Array<ButtonProps>`，[Button API Documents](./button?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/dialog/type.ts) | N
button-layout | String | horizontal | 多按钮排列方式。可选项：horizontal/vertical | N
cancel-btn | String / Object | - | 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 Slot 自定义按钮时，需自行控制取消事件。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/dialog/type.ts) | N
close-btn | Boolean / Object | false | 是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；使用 Object 时透传至图标组件。TS 类型：`boolean \| ButtonProps \| null`，[Button API Documents](./button?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/dialog/type.ts) | N
close-on-overlay-click | Boolean | false | 点击蒙层时是否触发关闭事件 | N
confirm-btn | String / Object | - | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 Slot 自定义按钮时，需自行控制确认事件 | N
content | String | - | 内容 | N
overlay-props | Object | {} | 透传至 Overlay 组件。TS 类型：`OverlayProps`，[Overlay API Documents](./overlay?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/dialog/type.ts) | N
prevent-scroll-through | Boolean | true | 防止滚动穿透 | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
title | String | - | 标题 | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
visible | Boolean | - | 控制对话框是否显示 | N
z-index | Number | 11500 | 对话框层级，Web 侧样式默认为 2500，移动端样式默认 2500，小程序样式默认为 11500 | N

### Dialog Events

名称 | 参数 | 描述
-- | -- | --
action | `(context: { index: number })` | 点击多按钮中的其中一个时触发
cancel | `(context: { e: MouseEvent })` | 如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件
close | `(context: { trigger: DialogEventSource })` | 关闭事件，点击 取消按钮 或 点击蒙层 时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/dialog/type.ts)。<br/>`type DialogEventSource = 'cancel' \| 'overlay' \| 'close-btn'`<br/>
confirm | `(context: { e: MouseEvent })` | 如果“确认”按钮存在，则点击“确认”按钮时触发
overlay-click | `(context: { e: MouseEvent })` | 如果蒙层存在，点击蒙层时触发

### Dialog Slots

名称 | 描述
-- | --
actions | 自定义 `actions` 显示内容
cancel-btn | 自定义 `cancel-btn` 显示内容
confirm-btn | 自定义 `confirm-btn` 显示内容
content | 自定义 `content` 显示内容
middle | 中间自定义内容
title | 自定义 `title` 显示内容
top | 顶部自定义内容

### Dialog External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-action | 操作样式类
t-class-cancel | 取消样式类
t-class-confirm | 确认样式类
t-class-content | 内容样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-dialog-body-max-height | 912rpx | -
--td-dialog-border-radius | @radius-extraLarge | -
--td-dialog-close-color | @text-color-placeholder | -
--td-dialog-content-color | @text-color-secondary | -
--td-dialog-content-font | @font-body-large | -
--td-dialog-title-color | @text-color-primary | -
--td-dialog-title-font | @font-title-large | -
--td-dialog-width | 622rpx | -

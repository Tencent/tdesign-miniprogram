---
title: Dialog 对话框
description: 用于显示重要提示或请求用户进行重要操作，一种打断当前操作的模态视图。
spline: message
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-dialog": "tdesign-miniprogram/dialog/dialog"
}
```

## 代码演示

### 基础方式

<img src="https://tdesign.gtimg.com/miniprogram/readme/dialog-1.png" width="375px" height="50%">

```html
<!-- 单行标题 -->
<t-dialog visible="{{true}}" title="对话框标题" confirm-btn="我知道了" bind:confirm="confirmHandle"> </t-dialog>

<!-- 带文本说明 -->
<t-dialog
  visible="{{true}}"
  title="对话框标题"
  content="告知当前状态、信息和解决方法等内容。"
  confirm-btn="我知道了"
  bind:confirm="confirmHandle"
></t-dialog>
```

> 使用这种方式，对话框的 `visible` 是受控的，需要手动设置额 `visible` 为 `false` 才会关闭对话框。

### API 调用方式

用 `Dialog.alert` 方法调用反馈类对话框。

```html
<t-dialog id="t-dialog" />
```

```js
import Dialog from 'tdesign-miniprogram/dialog/index';

Dialog.alert({
  title: '对话框标题',
  content: '告知当前状态、信息和解决方法等内容。',
  confirmBtn: '我知道了',
}).then(() => {
  // 点击确定按钮时触发
});
```

> 使用这种方式，对话框会在点击事件发生之后自动关闭。

### 不同状态的对话框

#### 双按钮对话框
<img src="https://tdesign.gtimg.com/miniprogram/readme/dialog-2.png" width="375px" height="50%">

```html
<t-dialog id="t-dialog" />
```

```js
// 双按钮
import Dialog from 'tdesign-miniprogram/dialog/index';

Dialog.confirm({
  title: '弹窗标题',
  content: '告知当前状态、信息和解决方法等内容。',
  confirmBtn: '按钮最多字数',
  cancelBtn: '取消',
})
  .then(() => {
    // 点击确定按钮
  })
  .catch(() => {
    // 点击取消按钮
  });
```
#### 多按钮对话框

通过 `actions` 可实现多个操作按钮。

```html
<t-dialog id="t-dialog" />
```

```js
import Dialog from 'tdesign-miniprogram/dialog/index';

Dialog.action({
  title: '弹窗标题',
  content: '告知当前状态、信息和解决方法等内容。',
  actions: [
    { name: '取消', primary: false },
    { name: '单行按钮最多十五个字符文案内容', primary: true },
    { name: '按钮文案文字内容较长', primary: true, style: 'color:red;' },
  ]
})
  .then(({ index }) => {
    console.log(index);
  })
```

## API
### Dialog Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
actions | Array / Slot | - | 操作栏。TS 类型：`Array<TdButtonProps>`，[Button API Documents](./button?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts) | N
button-layout | String | horizontal | 多按钮排列方式。可选项：horizontal/vertical | N
cancel-btn | String / Object / Slot | '' | 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制取消事件。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts) | N
close-on-overlay-click | Boolean | true | 点击蒙层时是否触发关闭事件 | N
confirm-btn | String / Object / Slot | '' | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件 | N
content | String / Slot | - | 内容 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层元素、组件内容部分、确认按钮、取消按钮 等元素类名。`['t-class', 't-class-content', 't-class-confirm', 't-class-cancel']` | N
prevent-scroll-through | Boolean | true | 防止滚动穿透 | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
title | String / Slot | - | 标题 | N
visible | Boolean | false | 控制对话框是否显示 | N
z-index | Number | - | 对话框层级，Web 侧样式默认为 2500，移动端和小程序样式默认为 1500 | N

### Dialog Events

名称 | 参数 | 描述
-- | -- | --
cancel | - | 如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件
close | `(trigger: DialogEventSource)` | 关闭事件，点击 取消按钮 或 点击蒙层 时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts)。<br/>`type DialogEventSource = 'cancel' | 'overlay'`<br/>
overlay-click | - | 如果蒙层存在，点击蒙层时触发
confirm | - | 如果“确认”按钮存在，则点击“确认”按钮时触发
action | `(index: number)` | 操作列表的点击时间，`index` 代表操作列表的顺序
open-type-event | `(ButtonEventDetail)` | “确认”按钮具有开放能力的话，对应的成功回调
open-type-error-event | `(ButtonError)` | “确认”按钮具有开放能力的话，对应的失败回调

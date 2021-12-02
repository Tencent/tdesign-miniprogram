# Message

消息组件

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

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

## 用法

### 消息提示

用 API `Message.info` 方法调用反馈类对话框

```html
<!-- page.wxml -->
<t-message id="t-message" />
```

```js
// page.js
Message.info({
  content: '消息内容',
});
```

## API

### `<Message>` 组件

组件路径：`tdesign-miniprogram/message/message`

#### Props

| 属性            | 值类型                  | 默认值    | 说明                                                                                                                                                                       |
| --------------- | ----------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | --------------- |
| visible         | Boolean                 | false     | 是否显示，隐藏时默认销毁组件                                                                                                                                               | N              |
| content         | String / Slot           | -         | 用于自定义消息弹出内容。                                                                                                                                                   | N              |
| theme           | String                  | info      | 消息组件风格。可选值：info/success/warning/error。                                                                                                                         | N              |
| duration        | Number                  | 3000      | 消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器。                                                                                  | N              |
| offset          | `Object`                | -         | 偏移量，默认[0,0]                                                                                                                                                          |
| closeBtn        | String / Boolean /Slot  | undefined | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。也可以完全自定义按钮。                              | N              |
| externalClasses | Array                   | -         | 样式类名，分别用于设置 组件外层、消息内容、左侧图标、操作按钮、关闭按钮等元素类名。`['t-class', 't-class-content', 't-class-icon', 't-class-action', 't-class-close-btn']` | N              |
| icon            | String / Boolean / Slot | true      | 消息提醒前面的图标。值为 true 则根据 theme 显示对应的图标，值为 false 则不显示图标。值为 'info' 或 'bell' 则显示组件内置图标。也可以完全自定义图标节点。TS 类型：`boolean  | 'warning_fill' | 'sound_fill'` N |
| marquee         | Object                  | -         | 跑马灯效果,delay 动画延迟时间 (s);speed 滚动速率 (px/s)。N                                                                                                                 |
| zIndex          | Number                  | -         | 元素层级，样式默认为 5000                                                                                                                                                  | N              |

### Event

| 事件名         | 说明                                     | 参数             |
| -------------- | ---------------------------------------- | ---------------- |
| closeBtnClick  | 点击关闭 icon 时触发                     | -                |
| actionBtnClick | 点击按钮时触发, 可通过 self 拿到组件实例 | `{ self: this }` |

### Slot

| 事件名   | 说明                |
| -------- | ------------------- |
| icon     | 左侧 icon 处        |
| action   | 右侧操作按钮。 N    |
| closeBtn | 按钮（关闭 icon）处 |

### 外部样式

| class             | 说明        |
| ----------------- | ----------- |
| t-class           | 根节点      |
| t-class-content   | 文本内容    |
| t-class-icon      | 左侧 icon   |
| t-class-action    | 右侧 button |
| t-class-close-btn | 右侧 icon   |

### 编程式调用

| 方法                       | type    | 返回值 | 说明                                                                                                         |
| -------------------------- | ------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| Message.info(`options`)    | info    | `void` | 弹出消息，参数参考 Props,额外可指定`{context: WechatMiniprogram.Component.TrivialInstance,selector: string}` |
| Message.success(`options`) | success | `void` | 弹出消息，参数参考 Props,额外可指定`{context: WechatMiniprogram.Component.TrivialInstance,selector: string}` |
| Message.warning(`options`) | warning | `void` | 弹出消息，参数参考 Props,额外可指定`{context: WechatMiniprogram.Component.TrivialInstance,selector: string}` |
| Message.error(`options`)   | error   | `void` | 弹出消息，参数参考 Props,额外可指定`{context: WechatMiniprogram.Component.TrivialInstance,selector: string}` |

---
title: SwipeCell 滑动操作
description: 用于承载列表中的更多操作，通过左右滑动来展示，按钮的宽度固定高度根据列表高度而变化。
spline: message
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
   "t-swipe-cell": "tdesign-miniprogram/swipe-cell/swipe-cell"
}
```

## 代码演示

### 基础滑动操作

<img src="https://tdesign.gtimg.com/miniprogram/readme/swipeout-1.png" width="375px" height="50%">

```html
<t-swipe-cell>
  <view slot="left">选择</view>
  <t-cell title="单行列表" value="描述文字" />
  <view slot="right">删除</view>
</t-swipe-cell>
```

## API

### SwipeCell Props

| 名称     | 类型            | 默认值 | 说明| 必传            |
| -------- | --------------- | ------ | -- | --------------- |
| disabled | Boolean         | -      | 是否禁用滑动| N |
| left     | Array / Slot    | -      | 左侧滑动操作项。所有行为同 `right`。TS 类型：`Array<SwipeActionItem>`| N               |
| opened   | Boolean / Array | false  | 操作项是否呈现为打开态，值为数组时表示分别控制左右滑动的展开和收起状态。TS 类型：`boolean| Array<boolean>` | N   |
| right    | Array / Slot    | -      | 右侧滑动操作项。有两种定义方式，一种是使用数组，二种是使用插槽。`right.text` 表示操作文本，`right.className` 表示操作项类名，`right.style` 表示操作项样式，`right.onClick` 表示点击操作项后执行的回调函数。示例：`[{ text: '删除', style: 'background-color: red', onClick: () => { /** TO DO */ } }]`。TS 类型：`Array<SwipeActionItem>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swipe-cell/type.ts) | N |

### SwipeCell Events

名称 | 参数 | 描述
-- | -- | --
click | `(action: SwipeActionItem, source: SwipeSource)` | 操作项点击时触发（插槽写法组件不触发，业务侧自定义内容和事件）。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swipe-cell/type.ts)。<br/>`type SwipeSource = 'left' | 'right'`<br/>

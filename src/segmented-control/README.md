---
title: SegmentedControl
description: 分段器。
spline: navigation
isComponent: true
---

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-segmented-control": "tdesign-miniprogram/segmented-control/segmented-control"
}
```

## 用法

### 组件方式

默认使用数组索引判断当前元素，若 `items` 的元素中存在 value 属性则使用该属性进行判断。

```html
<!-- page.wxml -->
<view>
  <t-segmented-control items="{{list}}" bind:change="onChange"></t-segmented-control>
  <view wx:if="{{currentValue === 0}}">选项一的内容</view>
  <view wx:if="{{currentValue === 1}}">选项二的内容</view>
</view>

<view>
  <t-segmented-control items="{{list2}}" bind:change="onChange2"></t-segmented-control>
  <view wx:if="{{currentValue2 === 'item_1'}}">选项A的内容</view>
  <view wx:if="{{currentValue2 === 'item_2'}}">选项B的内容</view>
</view>
```

```js
Page({
  data: {
    list: [{ text: '项目一' }, { text: '项目二' }],
    list: [
      { text: '项目A', value: 'item_1' },
      { text: '项目B', value: 'item_2' },
    ],
    currentValue: -1,
    currentValue2: '',
  },
  onChange(event) {
    this.setData({ currentValue: event.detail });
  },
  onChange2(event) {
    this.setData({ currentValue2: event.detail });
  },
});
```

## API

### Props

| 属性  | 类型          | 默认值   | 必传 | 说明 |
| ----- | ------------- | -------- | ---- | ---- | ------------ |
| items | `Array<String | Number>` | []   | Y    | 分段器的选项 |
| value | `String       | Number`  | -    | N    | 当前选中的值 |

### Props items 参数

| 属性  | 类型     | 默认值  | 必传 | 说明           |
| ----- | -------- | ------- | ---- | -------------- | ------------ |
| text  | `String` | -       | Y    | 选项显示的内容 |
| value | `String  | Number` | -    | N              | 选项的标识符 |

### Event

| 事件名 | 说明                                                 | 回调参数 |
| ------ | ---------------------------------------------------- | -------- | ------- |
| change | 选中变化时候触发，回调参数为 `item.value` 或数组索引 | `String  | Number` |

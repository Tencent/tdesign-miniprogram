---
title: Tabs 选项卡
description: 用于内容分类后的展示切换。
spline: navigation
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-tabs": "tdesign-miniprogram/tabs/tabs",
  "t-tab-panel": "tdesign-miniprogram/tabs/tab-panel"
}
```

## 代码演示

### 基础选项卡

横向选项卡支持超过屏幕滑动

<img src="https://tdesign.gtimg.com/miniprogram/readme/tabs-3.png" width="375px" height="50%">

```html
<t-tabs defaultValue="{{0}}" bind:change="onTabsChange">
  <t-tab-panel label="标签页一" value="0">标签一内容</t-tab-panel>
  <t-tab-panel label="标签页二" value="1">标签二内容</t-tab-panel>
</t-tabs>
```

### 不同状态的选项卡

<img src="https://tdesign.gtimg.com/miniprogram/readme/tabs-2.png" width="375px" height="50%">

```html
<t-tabs defaultValue="0" bind:change="onTabsChange">
  <t-tab-panel label="标签页一" value="0">标签一内容</t-tab-panel>
  <t-tab-panel label="标签页二" value="1">标签二内容</t-tab-panel>
  <t-tab-panel label="禁用状态" value="2" disabled>禁用状态</t-tab-panel>
</t-tabs>
```

### 竖向选项卡

<img src="https://tdesign.gtimg.com/miniprogram/readme/tabs-1.png" width="375px" height="50%">

```html
<t-tabs defaultValue="{{1}}" placement="left" bind:change="onTabsChange">
  <t-tab-panel label="标签页一" value="0">
    <view class="tab-content">标签一内容区</view>
  </t-tab-panel>
  <t-tab-panel label="标签页二" value="1">
    <view class="tab-content">标签二内容区</view>
  </t-tab-panel>
  <t-tab-panel label="标签页三" value="2">
    <view class="tab-content">标签三内容区</view>
  </t-tab-panel>
</t-tabs>
```

```js
Page({
  onTabsChange(event: any) {
    console.log(event.detail);
  },
});
```

### 受控用法

```html
<t-tabs value="{{value}}" bind:change="onTabsChange">
  <t-tab-panel label="标签页一" value="0">标签一内容</t-tab-panel>
  <t-tab-panel label="标签页二" value="1">标签二内容</t-tab-panel>
</t-tabs>
```

```js
Page({
  data: {
    value: '0',
  },
  onTabsChange(e) {
    this.setData({ value: e.detail.value })
  },
});
```

## API
### Tabs Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
animation | Object | - | 动画效果设置。其中 duration 表示动画时长。TS 类型：`TabAnimation` `type TabAnimation = { duration: number } & Record<string, any>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层元素、选项卡单项、选项卡激活态、滚动条样式类名 等类名。`['t-class', 't-class-item', 't-class-active', 't-class-track']` | N
placement | String | top | 选项卡位置。可选项：left/top | N
show-bottom-line | Boolean | true | 是否展示底部激活线条 | N
value | String / Number | - | 激活的选项卡值。TS 类型：`TabValue` `type TabValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
default-value | String / Number | undefined | 激活的选项卡值。非受控属性。TS 类型：`TabValue` `type TabValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N

### Tabs Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: TabValue)` | 激活的选项卡发生变化时触发

### TabPanel Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
destroy-on-hide | Boolean | true | 选项卡内容隐藏时是否销毁 | N
disabled | Boolean | false | 是否禁用当前选项卡 | N
label | String | - | 选项卡名称 | N
panel | String / Slot | - | 用于自定义选项卡面板内容 | N
value | String / Number | - | 选项卡的值，唯一标识。TS 类型：`TabValue` | N

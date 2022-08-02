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

## 主题定制

CSS 变量名|说明
--|--
--td-tab-item-color | 选项卡字体颜色
--td-tab-item-active-color | 选项卡激活时字体颜色
--td-tab-item-disabled-color | 选项卡禁止状态时字体颜色
--td-tab-track-color | 选项卡滑块颜色
--td-tab-track-thickness | 选项卡滑块厚度（水平时为高度，垂直时为宽度）
--td-tab-border-color | 选项卡底部边框颜色

## 代码演示

### 基础选项卡

{{ base }}

### 超过屏幕滚动
{{ scroll }}

### 无下划线
{{ unline }}

### 动画时间可调整
{{ adjust-time }}

### 选项卡状态
{{ status }}

### 竖向选项卡
{{ vertical }}

### 选中态文字尺寸规格
{{ size }}

<!-- 横向选项卡支持超过屏幕滑动 -->

<img src="https://tdesign.gtimg.com/miniprogram/readme/tabs-3.png" width="375px" height="50%">


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

### 与 Popup 使用

```html
 <t-popup visible="{{visible}}" bind:visible-change="onVisibleChange">
  <t-tabs id="tabs" defaultValue="{{0}}" bind:change="onTabsChange" bind:click="onTabsClick" t-class="custom-tabs">
    <t-tab-panel label="标签页一" value="0">标签一内容</t-tab-panel>
    <t-tab-panel label="标签页二" value="1">标签二内容</t-tab-panel>
    <t-tab-panel label="标签页三" value="2">标签三内容</t-tab-panel>
  </t-tabs>
</t-popup>
```

```js
Page({
  data: {
    visible: false
  },
  showPopup() {
    this.setData({
      visible: true
    }, () => {
      const tabs = this.selectComponent('tabs');

      tabs.setTrack(); // 这一步很重要，因为小程序的无法正确执行生命周期，所以需要手动设置下 tabs 的滑块
    })
  }
})
```

## API
### Tabs Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
animation | Object | - | 动画效果设置。其中 duration 表示动画时长。TS 类型：`TabAnimation` `type TabAnimation = { duration: number } & Record<string, any>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层元素、选项卡单项、选项卡激活态、滚动条样式类名 等类名。`['t-class', 't-class-item', 't-class-active', 't-class-track']` | N
placement | String | top | 选项卡位置。可选项：left/top | N
show-bottom-line | Boolean | true | 是否展示底部激活线条 | N
swipeable | Boolean | true | 是否可以滑动切换 | N
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

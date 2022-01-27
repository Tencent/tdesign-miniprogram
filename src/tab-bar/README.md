---
title: TabBar 标签栏
description: 用于在不同功能模块之间进行快速切换，位于页面底部。
spline: navigation
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-tab-bar": "tdesign-miniprogram/tab-bar/tab-bar",
  "t-tab-bar-item": "tdesign-miniprogram/tab-bar/tab-bar-item"
}
```

## 代码演示

### 基础标签栏

文本标签栏，分为单层双层，可以自定义标签栏内容

<img src="https://tdesign.gtimg.com/miniprogram/readme/tabbar-1.png" width="375px" height="50%">

```html
<!-- 单层级纯文本标签栏 -->
<t-tab-bar
  wx:for="{{demoList_1}}"
  wx:for-item="list"
  wx:for-index="index"
  wx:key="index"
  value="{{value}}"
  bindchange="onChange"
>
  <t-tab-bar-item wx:for="{{list}}" wx:for-item="item" wx:for-index="index" wx:key="index">
    {{item.text}}
  </t-tab-bar-item>
</t-tab-bar>
```

<img src="https://tdesign.gtimg.com/miniprogram/readme/tabbar-4.png" width="375px" height="50%">

```html
<!-- 双层级纯文本标签栏 -->
<t-tab-bar value="{{value}}" bindchange="onChange">
  <t-tab-bar-item
    wx:for="{{list_5}}"
    wx:for-item="item"
    wx:for-index="index"
    wx:key="index"
    name="{{item.name}}"
    children="{{item.children}}"
  >
    {{item.text}}
  </t-tab-bar-item>
</t-tab-bar>
```

<img src="https://tdesign.gtimg.com/miniprogram/readme/tabbar-2.png" width="375px" height="50%">

```html
<!-- 文本加图标标签栏 -->
<t-cell-group title="文本加图标标签栏">
  <t-tab-bar
    wx:for="{{demoList_2}}"
    wx:for-item="list"
    wx:for-index="index"
    wx:key="index"
    value="{{value}}"
    bindchange="onChange"
  >
    <t-tab-bar-item
      wx:for="{{list}}"
      wx:for-item="item"
      wx:for-index="index"
      wx:key="index"
      icon="{{item.icon}}"
      name="{{item.name}}"
    >
      {{item.text}}
    </t-tab-bar-item>
  </t-tab-bar>
</t-cell-group>
```

## API
### TabBar Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
bordered | Boolean | true | 是否显示外边框 | N
color | Array | ['#0052D9', 'rgba(0, 0, 0, .6)'] | 标签颜色设置。示例：[选中标签的颜色, 未选中的标签颜色]。TS 类型：`Array<string>` | N
external-classes | Array | - | 组件类名，用于设置外层元素类名。`['t-class']` | N
fixed | Boolean | true | 是否固定在底部 | N
safe-area-inset-bottom | Boolean | true | 是否为 iPhoneX 留出底部安全距离 | N
split | Boolean | true | 是否需要分割线 | N
value | String / Number / Array | 0 | 当前选中标签的索引。TS 类型：`string | number | Array<string | number>` | N
defaultValue | String / Number / Array | 0 | （非受控）当前选中标签的索引。TS 类型：`string | number | Array<string | number>` | N

### TabBar Events

名称 | 参数 | 描述
-- | -- | --
change | (value: String / Number) | 选中标签切换时触发

### TabBarItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
badge-props | Object | - | 图标右上角提示信息。TS 类型：`TdBadgeProps`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-bar/type.ts) | N
icon | String / Slot | - | 图标名称 | N
sub-tab-bar | Array | - | 二级菜单。TS 类型：`SubTabBarItem[] `。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-bar/type.ts) | N
value | String / Number | - | 标识符 | N

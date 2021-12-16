---
title: Badge 徽标
description: 用于告知用户，该区域的状态变化或者待处理任务的数量。
spline: data
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-badge": "tdesign-miniprogram/badge/badge"
}
```

## 代码演示

### 普通徽标

<img src="https://tdesign.gtimg.com/miniprogram/readme/badge-1.png" width="375px" height="50%">

```html
<!-- 红点提示 -->
<t-badge dot content="消息" />

<!-- 数字提示 -->
<t-badge count="{{16}}" content="消息" />

<!-- 文字提示 -->
<t-badge count="New">
  <text style="padding: 0 10px">消息</text>
</t-badge>

<!-- 角标提示 -->
<t-badge count="···">
  <text style="padding: 0 10px">消息</text>
</t-badge>

<!-- 按钮提示 -->
<t-button t-class="size-mini" size="small" variant="outline">小按钮</t-button>
```

### 单元格徽标

<img src="https://tdesign.gtimg.com/miniprogram/readme/badge-2.png" width="375px" height="50%">

```html
<!-- 单元格提示 -->
<t-cell title="单行标题" hover arrow>
  <view class="cell-badge-wrap" slot="note">
    <t-badge dot />
  </view>
</t-cell>
```

### 标签栏徽标

<img src="https://tdesign.gtimg.com/miniprogram/readme/badge-3.png" width="375px" height="50%">

```html
<!-- tabbar提示 -->
<t-tab-bar value="label1" bindchange="onChange" class="mb-12" t-class="tab-bar-wrapper">
  <t-tab-bar-item badge-props="{{{count: 16}}}" value="label1" icon="app">文字</t-tab-bar-item>
  <t-tab-bar-item badge-props="{{{dot: true}}}" value="label2" icon="app">文字 </t-tab-bar-item>
  <t-tab-bar-item badge-props="{{{count: 'New'}}}" value="label3" icon="app">文字 </t-tab-bar-item>
  <t-tab-bar-item badge-props="{{{count: '···'}}}" value="label4" icon="app">文字 </t-tab-bar-item>
</t-tab-bar>
```

## API

### Badge Props

| 名称             | 类型                   | 默认值 | 说明                                                                                                              | 必传     |
| ---------------- | ---------------------- | ------ | ----------------------------------------------------------------------------------------------------------------- | -------- |
| color            | String                 | -      | 颜色                                                                                                              | N        |
| content          | String                 | -      | 徽标内容，示例：`content='自定义内容'`。也可以使用默认插槽定义                                                    | N        |
| count            | String / Number / Slot | 0      | 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+。特殊：值为空表示使用插槽渲染                           | N        |
| dot              | Boolean                | false  | 是否为红点                                                                                                        | N        |
| external-classes | Array                  | -      | 组件类名，分别用于设置外层元素、默认内容、右上角内容等元素类名。`['t-class', 't-class-content', 't-class-count']` | N        |
| max-count        | Number                 | 99     | 封顶的数字值                                                                                                      | N        |
| offset           | Array                  | -      | 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem']。TS 类型：`Array<string                                 | number>` | N   |
| shape            | String                 | circle | 形状。可选项：circle/square/round/ribbon                                                                          | N        |
| show-zero        | Boolean                | false  | 当数值为 0 时，是否展示徽标                                                                                       | N        |
| size             | String                 | medium | 尺寸。可选项：small/medium                                                                                        | N        |

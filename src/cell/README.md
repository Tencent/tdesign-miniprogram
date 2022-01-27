---
title: Cell 单元格
description: 用于各个类别行的信息展示。
spline: data
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-cell": "tdesign-miniprogram/cell/cell"
}
```

## 代码演示

### 单行单元格

<img src="https://tdesign.gtimg.com/miniprogram/readme/cell-1.png" width="375px" height="50%">

```html
<!-- 单行 默认 -->
<t-cell title="单行标题" hover />

<!-- 单行 必须 -->
<t-cell title="单行标题" required />

<!-- 单行 辅助信息 -->
<t-cell title="单行标题" hover note="辅助信息" />

<!-- 单行 箭头 -->
<t-cell title="单行标题" hover arrow />

<!-- 单行 自定义辅助信息-slot -->
<t-cell title="单行标题" hover arrow>
  <t-badge count="{{16}}" slot="note" />
</t-cell>

<!-- 单行 左侧icon-slot -->
<t-cell title="单行标题" hover>
  <t-icon name="app" slot="left-icon" />
</t-cell>
```

### 多行单元格

<img src="https://tdesign.gtimg.com/miniprogram/readme/cell-2.png" width="375px" height="50%">

```html
<!-- 多行 -->
<t-cell title="多行标题" description="一段很长很长的内容文字" />

<!-- 多行 带图标 -->
<t-cell title="多行带图标" description="说明文字" note="辅助信息" arrow t-class-left="t-class-left">
  <t-icon class="icon-center title-icon" name="app" slot="left-icon" />
</t-cell>

<!-- 多行 带头像 -->
<t-cell
  title="多行带头像"
  arrow
  description="一段很长很长很长的内容文字"
  t-class-image="title-image"
>
  <view class="avatar" slot="left-icon">
    <open-data type="userAvatarUrl" />
  </view>
</t-cell>

<!-- 多行 带图片 -->
<t-cell
  title="多行带图片"
  description="一段很长很长的内容文字"
  align="top"
  t-class-image="title-image-large"
  image="xxx.svg"
/>
```

## API
### Cell Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | middle | 内容的对齐方式，默认居中对齐。可选项：top/middle/bottom | N
arrow | Boolean | false | 是否显示右侧箭头 | N
bordered | Boolean | true | 是否显示下边框 | N
description | String / Slot | - | 下方内容描述 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层类名、标题类名、右侧说明文字类名、下方描述内容类名、图片类名、激活态类名、左侧图标类名、右侧图标类名 等。`['t-class', 't-class-title', 't-class-note', 't-class-description', 't-class-thumb', 't-class-hover', 't-class-left', 't-class-right']` | N
hover | Boolean | - | 是否开启点击反馈 | N
image | String / Slot | - | 主图 | N
jump-type | String | navigateTo | 链接跳转类型。可选项：switchTab/reLaunch/redirectTo/navigateTo | N
left-icon | String / Slot | - | 左侧图标，出现在单元格标题的左侧 | N
note | String / Slot | - | 和标题同行的说明文字 | N
required | Boolean | false | 是否显示表单必填星号 | N
right-icon | String / Slot | - | 最右侧图标 | N
title | String / Slot | - | 标题 | N
url | String | - | 点击后跳转链接地址。如果值为空，则表示不需要跳转 | N

### Cell Events

名称 | 参数 | 描述
-- | -- | --
click | - | 右侧内容

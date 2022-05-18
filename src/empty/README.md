---
title: Empty 空内容
description: 用于空状态时的占位提示。
spline: data
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-empty": "tdesign-miniprogram/empty/empty"
}
```

## 代码演示

### 基础空内容

<img src="https://tdesign.gtimg.com/miniprogram/readme/empty-1.png" width="375px" height="50%">

```html
<!-- 图标空状态 -->
<t-empty icon="info-circle-filled" description="描述文字" />

<!-- 自定义图片空状态 -->
<t-empty t-class-image="t-empty__image" image="{{'xxx.jpg'}}" description="描述文字" />

<!-- 带操作空状态 -->
<t-empty icon="info-circle-filled" description="描述文字">
  <t-button slot="action" t-class="t-empty__button" theme="primary">操作按钮</t-button>
</t-empty>
```

### 页面级空内容

<img src="https://tdesign.gtimg.com/miniprogram/readme/empty-2.png" width="375px" height="50%">

```html
<!-- 空页面 -->
<view class="page">
  <t-empty
    t-class="empty-cls"
    t-class-actions="t-empty__actions"
    icon="info-circle-filled"
    description="描述文字"
  >
    <t-button slot="action" t-class="t-empty__button" variant="plain">按钮</t-button>
  </t-empty>
</view>
```

## API

### Empty Props

| 名称             | 类型          | 默认值 | 说明                                                                                                                                                | 必传 |
| ---------------- | ------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| action           | Slot          | -      | 操作按钮                                                                                                                                            | N    |
| description      | String / Slot | -      | 描述文字                                                                                                                                            | N    |
| external-classes | Array         | -      | 组件类名，分别用于设置 组件外层类名、文本描述类名、图片类名、操作按钮类名。`['t-class', 't-class-description', 't-class-image', 't-class-actions']` | N    |
| icon             | String        | -      | 图标名称                                                                                                                                            | N    |
| image            | String / Slot | -      | 图片地址                                                                                                                                            | N    |

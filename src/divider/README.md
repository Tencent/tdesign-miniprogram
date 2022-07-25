---
title: Divider 分割符
description: 用于分割、组织、细化有一定逻辑的组织元素内容和页面结构。
spline: message
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-divider": "tdesign-miniprogram/divider/divider"
}
```

### 主题定制

CSS 变量名|说明
--|--
--td-divider-color | 分割线颜色
--td-divider-content-color | 分割线文本颜色


## 代码演示

### 基础分割符

分割符主要是由直线和文字组成，通过`slot`传入分割线文案或者其他自定义内容，通过`layout`控制分隔符是垂直还是横向，`line-color`属性可定义线条颜色

<img src="https://tdesign.gtimg.com/miniprogram/readme/divider.png" width="375px" height="50%">

{{ base }}

### 文字 + 直线

{{ text-line }}

### 纯文字 + 分割

{{ text-only }}

## API

### Divider Props

| 名称             | 类型          | 默认值     | 说明                                                                                                 | 必传 |
| ---------------- | ------------- | ---------- | ---------------------------------------------------------------------------------------------------- | ---- |
| align            | String        | center     | 文本位置（仅在水平分割线有效）。可选项：left/right/center                                            | N    |
| content          | String / Slot | -          | 子元素                                                                                               | N    |
| dashed           | Boolean       | false      | 是否虚线（仅在水平分割线有效）                                                                       | N    |
| external-classes | Array         | -          | 组件类名，分别用于设置 组件外层类名、分隔线类名 等。`['t-class', 't-class-line', 't-class-content']` | N    |
| layout           | String        | horizontal | 分隔线类型有两种：水平和垂直。可选项：horizontal/vertical                                            | N    |
| line-color       | String        | -          | 分隔线颜色                                                                                           | N    |
| theme            | String        | horizontal | 已废弃。请更为使用 `layout`。分隔线类型有两种：水平和垂直。可选项：horizontal/vertical               | N    |

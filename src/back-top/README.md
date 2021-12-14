---
title: BackTop 返回顶部
description: 用于当页面过长往下滑动时，帮助用户快速回到页面顶部。
spline: navigation
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
"t-back-top": "tdesign-miniprogram/back-top/back-top",
}
```

## 代码演示

### 圆型返回顶部

<img src="https://tdesign.gtimg.com/miniprogram/readme/backtop-1.png" width="375px" height="50%">

```html
<!-- 圆白底 -->
<t-back-top theme="round" text="顶部"></t-back-top>
<!-- 圆黑底 -->
<t-back-top theme="round-dark" text="顶部"></t-back-top>
<!-- 圆白底纯图标 -->
<t-back-top theme="round" text=""></t-back-top>
<!-- 圆黑底纯图标 -->
<t-back-top theme="round-dark" text=""></t-back-top>
```

### 半圆型返回顶部

<img src="https://tdesign.gtimg.com/miniprogram/readme/backtop-2.png" width="375px" height="50%">

```html
<!-- 半圆白底 -->
<t-back-top theme="half-round" text="顶部"></t-back-top>
<!-- 半圆黑底 -->
<t-back-top theme="half-round-dark" text="顶部"></t-back-top>
```

## API

### BackTop Props

| 名称             | 类型          | 默认值    | 说明                                                                                                    | 必传 |
| ---------------- | ------------- | --------- | ------------------------------------------------------------------------------------------------------- | ---- |
| external-classes | Array         | -         | 组件类名，分别用于设置外层元素、图标、文本内容等元素类名。`['t-class', 't-class-icon', 't-class-text']` | N    |
| fixed            | Boolean       | true      | 是否绝对定位固定到屏幕右下方                                                                            | N    |
| icon             | String / Slot | 'backtop' | 图标                                                                                                    | N    |
| text             | String        | ''        | 文案                                                                                                    | N    |
| theme            | String        | round     | 预设的样式类型。可选项：round/half-round/round-dark/half-round-dark                                     | N    |

### BackTop Events

| 名称   | 参数 | 描述     |
| ------ | ---- | -------- |
| to-top | -    | 点击触发 |

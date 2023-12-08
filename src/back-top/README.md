---
title: BackTop 返回顶部
description: 用于当页面过长往下滑动时，帮助用户快速回到页面顶部。
spline: navigation
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
"t-back-top": "tdesign-miniprogram/back-top/back-top",
}
```

## 代码演示

<img src="https://tdesign.gtimg.com/miniprogram/readme/backtop-1.png" width="375px" height="50%">

### 基础返回顶部

{{ base }}

## API
### BackTop Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
external-classes | Array | - | 组件类名，分别用于设置外层元素、图标、文本内容等元素类名。`['t-class', 't-class-icon', 't-class-text']` | N
visibility-height | Number | 200 | 滚动高度达到此参数值才出现 | N
scroll-top | Number | 0 | 页面滚动距离 | N
fixed | Boolean | true | 是否绝对定位固定到屏幕右下方 | N
icon | String / Boolean / Object / Slot | true | 图标。值为 `false` 表示不显示图标。不传表示使用默认图标 `'backtop'` | N
text | String | '' | 文案 | N
theme | String | round | 预设的样式类型。可选项：round/half-round/round-dark/half-round-dark | N

### BackTop Events

名称 | 参数 | 描述
-- | -- | --
to-top | \- | 点击触发

### BackTop 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-icon | 图标样式类
t-class-text | 文本样式类

### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-back-top-round-bg-color | @font-white-1 | - 
--td-back-top-round-border-color | @component-border | - 
--td-back-top-round-border-radius | @radius-circle | - 
--td-back-top-round-color | @font-gray-1 | - 
--td-back-top-round-dark-bg-color | @gray-color-14 | - 
--td-back-top-round-dark-color | @font-white-1 | - 

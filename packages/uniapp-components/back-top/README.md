---
title: BackTop 返回顶部
description: 用于当页面过长往下滑动时，帮助用户快速回到页面顶部。
spline: navigation
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TBackTop from '@tdesign/uniapp/back-top/back-top.vue';
```

### 基础返回顶部

{{ base }}

## API

### BackTop Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
fixed | Boolean | true | 是否绝对定位固定到屏幕右下方 | N
icon | String / Boolean / Object | true | 图标。值为 `false` 表示不显示图标。不传表示使用默认图标 `'backtop'` | N
scroll-top | Number | 0 | 页面滚动距离 | N
text | String | '' | 文案 | N
theme | String | round | 预设的样式类型。可选项：round/half-round/round-dark/half-round-dark | N
visibility-height | Number | 200 | 滚动高度达到此参数值才出现 | N

### BackTop Events

名称 | 参数 | 描述
-- | -- | --
to-top | \- | 点击触发

### BackTop Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容
icon |  自定义图标内容

### BackTop External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-icon | 图标样式类
t-class-text | 文本样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-back-top-half-round-border-radius | @radius-round | -
--td-back-top-round-bg-color | @bg-color-container | -
--td-back-top-round-border-color | @component-border | -
--td-back-top-round-border-radius | @radius-circle | -
--td-back-top-round-color | @text-color-primary | -
--td-back-top-round-dark-bg-color | @gray-color-13 | -
--td-back-top-round-dark-color | @text-color-anti | -

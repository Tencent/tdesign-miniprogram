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

<a href="https://developers.weixin.qq.com/s/2aR1demj7aS2" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>


<img src="https://tdesign.gtimg.com/miniprogram/readme/backtop-1.png" width="375px" height="50%">

### 基础返回顶部

{{ base }}

## API

### BackTop Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
fixed | Boolean | true | 是否绝对定位固定到屏幕右下方 | N
icon | String / Boolean / Object / Slot | true | 图标。值为 `false` 表示不显示图标。不传表示使用默认图标 `'backtop'`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
scroll-top | Number | 0 | 页面滚动距离 | N
text | String | '' | 文案 | N
theme | String | round | 预设的样式类型。可选项：round/half-round/round-dark/half-round-dark | N
visibility-height | Number | 200 | 滚动高度达到此参数值才出现 | N

### BackTop Events

名称 | 参数 | 描述
-- | -- | --
to-top | \- | 点击触发
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
--td-back-top-round-bg-color | @font-white-1 | - 
--td-back-top-round-border-color | @component-border | - 
--td-back-top-round-border-radius | @radius-circle | - 
--td-back-top-round-color | @font-gray-1 | - 
--td-back-top-round-dark-bg-color | @gray-color-14 | - 
--td-back-top-round-dark-color | @font-white-1 | -
---
title: Skeleton 骨架屏
description: 用于等待加载内容所展示的占位图形组合，有动态效果加载效果，减少用户等待焦虑。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-94%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-skeleton": "tdesign-miniprogram/skeleton/skeleton"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/CY7gyimz7GS8" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 骨架屏类型

基础骨架屏

{{ theme }}

单元格骨架屏

{{ cell-group }}


宫格骨架屏

{{ grid }}

图文组合骨架屏

{{ image-group }}

### 组件动效

{{ animation }}


## API

### Skeleton Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
animation | String | none | 动画效果，有「渐变加载动画」和「闪烁加载动画」两种。值为 'none' 则表示没有动画。可选项：gradient/flashed/none | N
delay | Number | 0 | 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 | N
loading | Boolean | true | 是否为加载状态，如果是则显示骨架图，如果不是则显示加载完成的内容 | N
row-col | Array | - | 高级设置，用于自定义行列数量、宽度高度、间距等。【示例一】，`[1, 1, 2]` 表示输出三行骨架图，第一行一列，第二行一列，第三行两列。【示例二】，`[1, 1, { width: '100px' }]` 表示自定义第三行的宽度为 `100px`。【示例三】，`[1, 2, [{ width, height }, { width, height, marginLeft }]]` 表示第三行有两列，且自定义宽度、高度、尺寸（圆形或方形使用）、间距、内容等。TS 类型：`SkeletonRowCol` `type SkeletonRowCol = Array<Number \| SkeletonRowColObj \| Array<SkeletonRowColObj>>` `interface SkeletonRowColObj { width?: string; size?: string;height?: string; marginRight?: string; marginLeft?: string; margin?: string; type?: 'rect' \| 'circle' \| 'text';}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/skeleton/type.ts) | N
theme | String | text | 骨架图风格，有基础、头像组合等两大类。可选项：avatar/image/text/paragraph | N
### Skeleton External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-col | 行样式类
t-class-row | 列样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-skeleton-animation-flashed | rgba(90%, 90%, 90%, 0.3) | - 
--td-skeleton-animation-gradient | rgba(0, 0, 0, 4%) | - 
--td-skeleton-bg-color | @bg-color-page | - 
--td-skeleton-circle-border-radius | @radius-circle | - 
--td-skeleton-circle-height | 96rpx | - 
--td-skeleton-rect-border-radius | @radius-default | - 
--td-skeleton-rect-height | 32rpx | - 
--td-skeleton-row-spacing | @spacer-2 | - 
--td-skeleton-text-border-radius | @radius-small | - 
--td-skeleton-text-height | 32rpx | -
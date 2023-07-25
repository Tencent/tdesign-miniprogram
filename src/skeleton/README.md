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

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
animation | String | none | 动画效果，有「渐变加载动画」和「闪烁加载动画」两种。值为 'none' 则表示没有动画。可选项：gradient/flashed/none | N
delay | Number | 0 | 【开发中】延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 | N
loading | Boolean | true | 是否为加载状态，如果是则显示骨架图，如果不是则显示加载完成的内容 | N
row-col | Array | [1, 1, 1, { width: '70%' }] | 用于设置行列数量、宽度高度、间距等。【示例一】，`[1, 1, 2]` 表示输出三行骨架图，第一行一列，第二行一列，第三行两列。【示例二】，`[1, 1, { width: '100px' }]` 表示自定义第三行的宽度为 `100px`。【示例三】，`[1, 2, [{ width, height }, { width, height, marginLeft }]]` 表示第三行有两列，且自定义宽度、高度和间距。TS 类型：`SkeletonRowCol` `type SkeletonRowCol = Array<Number \| SkeletonRowColObj \| Array<SkeletonRowColObj>>` `interface SkeletonRowColObj { width?: string; size?: string;height?: string; marginRight?: string; marginLeft?: string; margin?: string; type?: 'rect' \| 'circle' \| 'text';}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/skeleton/type.ts) | N
theme | String | text | 骨架图风格，有基础、头像组合等两大类。可选项：avatar/image/text/paragraph | N

### Skeleton 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-col | 行样式类
t-class-row | 列样式类

### CSS 变量
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

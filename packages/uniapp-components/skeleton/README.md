---
title: Skeleton 骨架屏
description: 用于等待加载内容所展示的占位图形组合，有动态效果加载效果，减少用户等待焦虑。
spline: data
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TSkeleton from '@tdesign/uniapp/skeleton/skeleton.vue';
```

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
custom-style | Object | - | 自定义样式 | N
animation | String | none | 动画效果，有「渐变加载动画」和「闪烁加载动画」两种。值为 'none' 则表示没有动画。可选项：gradient/flashed/none | N
delay | Number | 0 | 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 | N
loading | Boolean | true | 是否为加载状态，如果是则显示骨架图，如果不是则显示加载完成的内容 | N
row-col | Array | - | 高级设置，用于自定义行列数量、宽度高度、间距等。【示例一】，`[1, 1, 2]` 表示输出三行骨架图，第一行一列，第二行一列，第三行两列。【示例二】，`[1, 1, { width: '100px' }]` 表示自定义第三行的宽度为 `100px`。【示例三】，`[1, 2, [{ width, height }, { width, height, marginLeft }]]` 表示第三行有两列，且自定义宽度、高度、尺寸（圆形或方形使用）、间距、内容等。TS 类型：`SkeletonRowCol` `type SkeletonRowCol = Array<Number \| SkeletonRowColObj \| Array<SkeletonRowColObj>>` `interface SkeletonRowColObj { width?: string; size?: string;height?: string; marginRight?: string; marginLeft?: string; margin?: string; type?: 'rect' \| 'circle' \| 'text';}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/skeleton/type.ts) | N
theme | String | text | 骨架图风格，有基础、头像组合等两大类。可选项：avatar/image/text/paragraph | N

### Skeleton Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容

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
--td-skeleton-circle-border-radius | @skeleton-circle-border-radius | -
--td-skeleton-animation-flashed | rgba(90%, 90%, 90%, 0.3) | -
--td-skeleton-animation-gradient | rgba(0, 0, 0, 4%) | -
--td-skeleton-bg-color | @bg-color-secondarycontainer | -
--td-skeleton-circle-height | 96rpx | -
--td-skeleton-rect-border-radius | @radius-default | -
--td-skeleton-rect-height | 32rpx | -
--td-skeleton-row-spacing | @spacer-2 | -
--td-skeleton-text-border-radius | @radius-small | -
--td-skeleton-text-height | 32rpx | -

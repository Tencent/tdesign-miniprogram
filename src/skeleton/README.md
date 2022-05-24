---
title: Skeleton 骨架屏
description: 用于等待加载内容所展示的占位图形组合，有动态效果加载效果，减少用户等待焦虑。
spline: data
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-skeleton": "tdesign-miniprogram/skeleton/skeleton"
}
```

## 代码演示

### 基础骨架屏

<img src="https://tdesign.gtimg.com/miniprogram/readme/skeleton-1.gif" width="375px" height="50%">

```html
<t-skeleton
  rowCol="{{rowCol}}"
  theme="avatar-text"
  animation="flashed"
  loading
></t-skeleton>
```

```js
data: {
  rowCol: [
    { width: '566rpx', height: '32rpx' },
    { width: '100%', height: '32rpx' },
    { width: '100%', height: '32rpx' },
    { width: '314rpx', height: '32rpx' },
  ],
},
```

## API

### Skeleton Props

| 名称             | 类型    | 默认值                      | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 必传 |
| ---------------- | ------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| animation        | String  | -                           | 动画效果，有「渐变加载动画」和「闪烁加载动画」两种。值为空则表示没有动画。可选项：gradient/flashed                                                                                                                                                                                                                                                                                                                                                   | N    |
| external-classes | Array   | -                           | 组件类名，分别用于设置组件外层元素、头像、图片、文本等元素类名。`['t-class', 't-class-avatar', 't-class-image', 't-class-text']`                                                                                                                                                                                                                                                                                                                     | N    |
| loading          | Boolean | -                           | 是否为加载状态，如果是则显示骨架图，如果不是则显示加载完成的内容                                                                                                                                                                                                                                                                                                                                                                                     | N    |
| row-col          | Array   | [1, 1, 1, { width: '70%' }] | 用于设置行列数量、宽度高度、间距等。【示例一】，`[1, 1, 2]` 表示输出三行骨架图，第一行一列，第二行一列，第三行两列。【示例二】，`[1, 1, { width: '100px' }]` 表示自定义第三行的宽度为 `100px`。【示例三】，`[1, 2, [{ width, height }, { width, height, marginLeft }]]` 表示第三行有两列，且自定义宽度、高度和间距。TS 类型：`SkeletonRowCol`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/skeleton/type.ts) | N    |
| theme            | String  | text                        | 骨架图风格，有基础、头像组合等两大类。可选项：text/avatar-text                                                                                                                                                                                                                                                                                                                                                                                       | N    |

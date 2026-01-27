---
title: Watermark 水印
description: 给页面的某个区域加上水印。
spline: data
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TWatermark from '@tdesign/uniapp/watermark/watermark.vue';
```

## 代码演示

### 组件类型

#### 文字水印

{{ base }}

#### 图片水印

{{ image }}

#### 图片灰阶水印

{{ gray }}

#### 多行图文水印

{{ multi-line }}

#### 多行图文灰阶水印

{{ multi-line-gray }}

#### 运动文字水印

{{ move-text }}

#### 运动图片水印

{{ move-image }}

### 不同布局的水印 
通过设置 layout 使用不同的布局。

{{ layout }}


## API

### Watermark Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
alpha | Number | 1 | 水印整体透明度，取值范围 [0-1] | N
content | String | - | 水印所覆盖的内容节点 | N
height | Number | - | 水印高度 | N
is-repeat | Boolean | true | 水印是否重复出现 | N
layout | String | rectangular | 水印的布局方式，rectangular：矩形，即横平竖直的水印；hexagonal：六边形，即错位的水印。可选项：rectangular/hexagonal | N
line-space | Number | 16 | 行间距，只作用在多行（`content` 配置为数组）情况下 | N
movable | Boolean | false | 水印是否可移动 | N
move-interval | Number | 3000 | 水印发生运动位移的间隙，单位：毫秒 | N
offset | Array | - | 水印在画布上绘制的水平和垂直偏移量，正常情况下水印绘制在中间位置，即 `offset = [gapX / 2, gapY / 2]`。TS 类型：`Array<number>` | N
removable | Boolean | true | 水印是否可被删除 | N
rotate | Number | -22 | 水印旋转的角度，单位 ° | N
watermark-content | Object / Array | - | 水印内容，需要显示多行情况下可配置为数组。TS 类型：`WatermarkText\|WatermarkImage\|Array<WatermarkText\|WatermarkImage>` | N
width | Number | - | 水印宽度 | N
x | Number | - | 水印之间的水平间距 | N
y | Number | - | 水印之间的垂直间距 | N
z-index | Number | - | 水印元素的 `z-index`，默认值写在 CSS 中 | N

### Watermark Slots

名称 | 描述
-- | --
\- | 默认插槽，作用同 `content` 插槽
content | 自定义 `content` 显示内容

### WatermarkText

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
font-color | String | rgba(0,0,0,0.1) | 水印文本文字颜色 | N
font-family | String | - | 水印文本文字字体 | N
font-size | Number | 16 | 水印文本文字大小 | N
font-weight | String | normal | 水印文本文字粗细。可选项：normal/lighter/bold/bolder | N
text | String | - | 水印文本内容 | N

### WatermarkImage

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
is-grayscale | Boolean | false | 水印图片是否需要灰阶显示 | N
url | String | - | 水印图片源地址，为了显示清楚，建议导出 2 倍或 3 倍图 | N

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--watermark-left-0 | --watermark-left-0 | -
--watermark-left-25 | --watermark-left-25 | -
--watermark-left-50 | --watermark-left-50 | -
--watermark-left-75 | --watermark-left-75 | -
--watermark-top-0 | --watermark-top-0 | -
--watermark-top-25 | --watermark-top-25 | -
--watermark-top-50 | --watermark-top-50 | -
--watermark-top-75 | --watermark-top-75 | -

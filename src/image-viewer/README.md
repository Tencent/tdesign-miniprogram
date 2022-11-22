---
title: ImageViewer 图片预览
description: 图片全屏放大预览效果，包含全屏背景色、页码位置样式、增加操作等规范。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-90%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-88%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-90%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-88%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-image-viewer": "tdesign-miniprogram/image-viewer/image-viewer",
}
```

## 代码演示

### 类型

基础图片预览

{{ base }}

带操作图片预览

{{ delete }}


## API

### ImageViewer Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
background-color | String / Number | rgba(0, 0, 0, 1) | 遮罩的背景颜色 | N
images | Array | [] | 图片数组。TS 类型：`Array<string>` | N
initial-index | Number | 0 | 默认展示第几项 | N
show-index | Boolean | false | 是否显示页码 | N
delete-btn | Boolean | false | 是否显示删除操作，前提需要开启页码 | N
close-btn | Boolean | false | 是否显示关闭操作，前提需要开启页码 | N
delete-icon-props | Object | {} | 删除图标属性，透传至删除操作按钮 icon | N
close-icon-props | Object | {} | 关闭图标属性，透传至关闭操作按钮 icon | N
visible | Boolean | false | 隐藏/显示预览 | N
default-visible | Boolean | undefined | 隐藏/显示预览。非受控属性 |


### ImageViewer Events

名称 | 参数 | 描述
-- | -- | --
change | `(index: Number)` | 翻页时回调
close | `(trigger: 'overlay' | 'button' , visible: Boolean, index: Number)` | 点击操作按钮button或者overlay时触发
delete | `(index: Number)` | 点击删除操作按钮时触发


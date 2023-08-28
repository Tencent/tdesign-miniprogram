---
title: ImageViewer 图片预览
description: 图片全屏放大预览效果，包含全屏背景色、页码位置样式、增加操作等规范。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-90%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-88%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-90%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-88%25-blue" /></span>

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.10.0 版本上线，请留意版本。
</div>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-image-viewer": "tdesign-miniprogram/image-viewer/image-viewer",
}
```

## 代码演示

### 类型

#### 基础图片预览

{{ base }}

#### 带操作图片预览

顶部区域可以配置关闭按钮、页码信息、删除按钮。

{{ delete }}

> 当使用自定义导航栏的时候，顶部的操作按钮会被遮挡，此时需要开启 `using-custom-navbar` 来解决

## API
### ImageViewer Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
background-color | String | 'rgba(0, 0, 0, 1)' | 遮罩的背景颜色 | N
close-btn | String / Boolean / Object / Slot | false | 是否显示关闭操作，前提需要开启页码。值为字符串表示图标名称，值为 `true` 表示使用默认图标 `close`，值为 `Object` 类型，表示透传至 `icon` ，不传表示不显示图标 | N
delete-btn | String / Boolean / Object / Slot | false | 是否显示删除操作，前提需要开启页码。值为字符串表示图标名称，值为 `true` 表示使用默认图标 `delete`，值为 `Object` 类型，表示透传至 `icon`，不传表示不显示图标 | N
images | Array | [] | 图片数组。TS 类型：`Array<string>` | N
initial-index | Number | 0 | 初始化页码。TS 类型：`Number` | N
show-index | Boolean | false | 是否显示页码 | N
using-custom-navbar | Boolean | false | `v1.1.4` 是否使用了自定义导航栏 | N
visible | Boolean | false | 隐藏/显示预览 | N
default-visible | Boolean | undefined | 隐藏/显示预览。非受控属性 | N

### ImageViewer Events

名称 | 参数 | 描述
-- | -- | --
change | `(index: Number)` | 翻页时回调
close | `(trigger: 'overlay' \| 'button', visible: Boolean, index: Number)` | 点击操作按钮button或者overlay时触发
delete | `(index: Number)` | 点击删除操作按钮时触发


### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-image-viewer-close-margin-left | @spacer-1 | - 
--td-image-viewer-delete-margin-right | @spacer-1 | - 
--td-image-viewer-nav-bg-color | @font-gray-3 | - 
--td-image-viewer-nav-color | @font-white-1 | - 
--td-image-viewer-nav-height | 96rpx | - 
--td-image-viewer-nav-index-font-size | @font-size-base | - 
--td-image-viewer-top | @position-fixed-top | - 

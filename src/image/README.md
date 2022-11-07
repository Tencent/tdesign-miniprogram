---
title: Image 图片
description: 用于展示效果，主要为上下左右居中裁切、拉伸、平铺等方式。
spline: base
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
    "t-image": "tdesign-miniprogram/image/image"
}
```

## 代码演示

### 裁切样式
{{ mode }}


### 圆角样式

{{ shape }}

### 加载-默认提示

{{ image-loading }}


### 加载-自定义提示

{{ custom-loading }}

### 加载失败-默认提示

{{ error-loading }}

### 加载失败-自定义提示

{{ custom-error-loading }}

### 常用图片尺寸

{{ size }}


## API
### Image Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
error | String / Slot | 'default' | 加载失败时显示的内容。值为 `default` 则表示使用默认加载失败风格；值为空或者 `slot` 表示使用插槽渲染，插槽名称为 `error`；值为其他则表示普通文本内容，如“加载失败” | N
external-classes | Array | - | 组件类名，分别用于设置加载组件外层元素，中间内容等元素类名。`['t-class', 't-class-load']` | N
lazy | Boolean | false | 是否开启图片懒加载 | N
loading | String / Slot | 'default' | 加载态内容。值为 `default` 则表示使用默认加载中风格；值为空或者 `slot` 表示使用插槽渲染，插槽名称为 `loading`；值为其他则表示普通文本内容，如“加载中” | N
shape | String | square | 图片圆角类型。可选项：circle/round/square | N
src | String | - | 图片链接 | N
mode | String | scaleToFill | 图片裁剪、缩放的模式。<br />具体释义：<br />`scaleToFill` 缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素；<br />`aspectFit` 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。；<br />`aspectFill` 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。；<br />`widthFix` 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变；<br />`heightFix` 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变；<br />`top` 裁剪模式，不缩放图片，只显示图片的顶部区域；<br />`bottom` 裁剪模式，不缩放图片，只显示图片的底部区域；<br />`center` 裁剪模式，不缩放图片，只显示图片的中间区域；<br />`left` 裁剪模式，不缩放图片，只显示图片的左边区域；<br />`right` 裁剪模式，不缩放图片，只显示图片的右边区域；<br />`top left` 裁剪模式，不缩放图片，只显示图片的左上边区域；<br />`top right` 裁剪模式，不缩放图片，只显示图片的右上边区域；<br />`bottom left` 裁剪模式，不缩放图片，只显示图片的左下边区域；<br />`bottom right` 裁剪模式，不缩放图片，只显示图片的右下边区域。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)。可选项：scaleToFill/aspectFit/aspectFill/widthFix/heightFix/top/bottom/center/left/right/top left/top right/bottom left/bottom right | N
webp | Boolean | false | 默认不解析 webP 格式，只支持网络资源 | N
show-menu-by-longpress | Boolean | false | 长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单。 | N
binderror | Eventhandle | - | 当错误发生时触发，event.detail = {errMsg} | N
bindload | Eventhandle | - | 当图片载入完毕时触发，event.detail = {height, width} | N

### Image Events

名称 | 参数 | 描述
-- | -- | --
error | \- | 图片加载失败时触发
load | \- | 图片加载完成时触发

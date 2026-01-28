---
title: Image 图片
description: 用于展示效果，主要为上下左右居中裁切、拉伸、平铺等方式。
spline: base
isComponent: true
---



## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TImage from '@tdesign/uniapp/image/image.vue';
```

### 裁切样式

{{ base }}

### 加载状态

{{ status }}

## 常见问题

<details>
  <summary>
    本地图片无法正确引用?
    <span class="icon">👇</span>
  </summary>
  <p style="margin-top: 10px; color: rgba(0, 0, 0, .6)">
    建议使用绝对路径，而不是相对路径。绝对路径以 app.json 所在位置为基准。
  </p>
</details>

## API

### Image Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
error | String | 'default' | 加载失败时显示的内容。值为 `default` 则表示使用默认加载失败风格；值为空或者 `slot` 表示使用插槽渲染，插槽名称为 `error`；值为其他则表示普通文本内容，如“加载失败” | N
height | String / Number | - | 高度，默认单位为`px` | N
lazy | Boolean | false | 是否开启图片懒加载 | N
loading | String | 'default' | 加载态内容。值为 `default` 则表示使用默认加载中风格；值为其他则表示普通文本内容，如“加载中” | N
mode | String | scaleToFill | 图片裁剪、缩放的模式；[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)。可选项：scaleToFill/aspectFit/aspectFill/widthFix/heightFix/top/bottom/center/left/right/top left/top right/bottom left/bottom right | N
shape | String | square | 图片圆角类型。可选项：circle/round/square | N
show-menu-by-longpress | Boolean | false | 长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单 | N
src | String | - | 图片链接 | N
t-id | String | - | 图片标签id | N
webp | Boolean | false | 默认不解析 webP 格式，只支持网络资源 | N
width | String / Number | - | 宽度，默认单位为`px` | N

### Image Events

名称 | 参数 | 描述
-- | -- | --
error | `(context: { e: ImageEvent })` | 图片加载失败时触发。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/common/common.ts)
load | `(context: { e: ImageEvent })` | 图片加载完成时触发。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/common/common.ts)

### Image Slots

名称 | 描述
-- | --
error | 自定义 `error` 显示内容
loading | 自定义 `loading` 显示内容

### Image External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-load | 加载样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-image-color | @text-color-placeholder | -
--td-image-loading-bg-color | @bg-color-secondarycontainer | -
--td-image-loading-color | @text-color-placeholder | -
--td-image-round-radius | @radius-default | -

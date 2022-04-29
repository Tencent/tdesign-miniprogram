---
title: ImageViewer 图片预览
description: 图片全屏放大预览效果，包含全屏背景色、页码位置样式、增加操作等规范。
spline: data
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-image-viewer": "tdesign-miniprogram/image-viewer/image-viewer",
}
```

## 代码演示

### 基础用法

```html
<t-image-viewer
  visible="{{visible}}"
  images="{{images}}"
  bind:visible-change="onVisibleChange"
  bind:change="onChange"
/>
```

### 显示页码

```html
<t-image-viewer
  showIndex="{{showIndex}}"
  visible="{{visible}}"
  images="{{images}}"
  initialIndex="{{initialIndex}}"
  bind:close="onClose"
  bind:change="onChange"
/>
```

### 带删除操作

```html
<t-image-viewer
  deleteBtn="{{deleteBtn}}"
  closeBtn="{{closeBtn}}"
  showIndex="{{showIndex}}"
  visible="{{visible}}"
  images="{{images}}"
  initialIndex="{{initialIndex}}"
  bind:change="onChange"
  bind:delete="onDelete"
  bind:close="onClose"
/>
```

### 支持自定义操作按钮

```html
<t-image-viewer
  showIndex="{{showIndex}}"
  visible="{{visible}}"
  images="{{images}}"
  initialIndex="{{initialIndex}}"
  bind:change="onChange"
/>
  <view class="closeBtn">我是自定义的关闭内容</view>
  <view class="deleteBtn">我是自定义的删除内容</view>
</t-image-viewer>
```


## API

### ImageViewer Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
background-color | String / Number | rgba(0, 0, 0, 1) | 遮罩的背景颜色 | N
images | Array | [] | 图片数组。TS 类型：`Array<string>` | N
initial-index | Number | 0 | 默认展示第几项 | N
show-index | Boolean | false | 是否显示页码 | N
delete-btn | Boolean | false | 是否显示删除操作，前提需要开启页码 | N 
close-btn | Boolean | false | 是否显示关闭操作，前提需要开启页码 | N 
visible | Boolean | false | 隐藏/显示预览 | N
default-visible | Boolean | undefined | 隐藏/显示预览。非受控属性 | N



### ImageViewer Events

名称 | 参数 | 描述
-- | -- | --
change | `(index: Number)` | 翻页时回调 
close | `(trigger: 'overlay' | 'button' , visible: Boolean, index: Number)` | 点击操作按钮button或者overlay时触发 
delete | `(index: Number)` | 点击删除操作按钮时触发 


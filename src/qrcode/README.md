---
title: QRCode 二维码
description: 能够将文本转换生成二维码
spline: message
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-qrcode": "tdesign-miniprogram/qrcode/qrcode"
}
```

## 代码演示

<a href="" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

## 组件类型

### 基础用法
value 传入需要渲染的值，使用 size 调整二维码大小，默认值是160rpx，使用boderless属性决定是否需要边框

{{ base }}

### 自定义颜色
通过设置 color 自定义二维码颜色，通过设置 bgColor 自定义背景颜色，默认属性是黑白色

{{ color }}

### 带 Icon 的例子
将 icon 的地址传入 icon 属性，使用iconSize属性调整大小

{{ icon }}

### 纠错比例
通过设置 level 调整不同的容错等级，提供 L，M，Q，H 四个等级

{{ level }}

### 不同的状态
可以通过 status 的值控制二维码的状态，提供 active，expired，loading，scanned 四个值

{{ status }}

### 自定义状态渲染
可以通过 statusRender 的值控制二维码不同状态的渲染逻辑, 小程序中该属性为 Boolean ，利用slot进行自定义渲染

{{ statusRender }}

##

## API

### QRCode Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
bg-color | String | - | 二维码背景颜色 | N
borderless | Boolean | false | 是否有边框 | N
color | String | - | 二维码颜色 | N
icon | String | - | 二维码中图片的地址 | N
icon-size | Number / Object | 40 | 二维码中图片的大小。TS 类型：`number \| { width: number; height: number }` | N
level | String | M | 二维码纠错等级。可选项：L/M/Q/H | N
size | Number | 160 | 二维码大小 | N
status | String | active | 二维码状态。可选项：active/expired/loading/scanned。TS 类型：`QRStatus` `type QRStatus = "active" \| "expired" \| "loading" \| "scanned"`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/qrcode/type.ts) | N
status-render | Slot | - | 自定义状态渲染器。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/qrcode/type.ts) | N
value | String | - | 扫描后的文本 | N

### QRCode Events

名称 | 参数 | 描述
-- | -- | --
refresh | \- | 点击"点击刷新"的回调


### Progress External Classes

类名 | 描述
-- | --
t-class | 根节点样式类

### CSS Variables


组件提供了下列 CSS 变量，可用于自定义样式。

名称 | 默认值 | 描述
-- | -- | --
--td-qrcode-border-color | #dcdcdc | -
--td-qrcode-border-width | 1rpx | -
--td-qrcode-border-radius | 6rpx | -
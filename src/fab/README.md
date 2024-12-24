---
title: Fab 悬浮按钮
description: 当功能使用图标即可表意清楚时，可使用纯图标悬浮按钮，例如：添加、发布。
spline: form
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.7.2 版本上线，请留意版本。
</div>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。


```json
"usingComponents": {
  "t-fab": "tdesign-miniprogram/fab/fab"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/KNHt9bmB7OSc" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 基础使用

{{ base }}

### 进阶使用

{{ advance }}

### 可移动悬浮按钮

{{ draggable }}

## FAQ

### 为什么通过 style/customStyle 设置 top/left 调整初试定位后，会使页面内容无法点击以及拖拽异常？

由于 `position: fixed;` 会使得元素脱离文档流，它将悬浮于页面上方。同时，元素没有设置宽高，当同时使用 `top`、`right`、`bottom` 和 `left` 属性时，浏览器会根据给定的 `top`、`right`、`bottom` 和 `left` 创建一个矩形框来容纳元素及其内容，所以会出现元素覆盖页面内容及拖拽异常等问题。

Fab 组件默认定位 `right: 16px; bottom: 32px;`，且拖拽功能也是通过调整 `right` 与 `bottom` 属性值实现，因此在使用 `Fab` 组件时，仅支持通过 `style/customStyle` 属性设置 `right/bottom` 来调整初试位置， 避免使用 `top/left`。


## API

### Fab Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | String | right: 16px; bottom: 32px; | 悬浮按钮的样式，常用于调整位置（即将废弃，建议使用 `style`） | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
button-props | Object | - | 透传至 Button 组件。TS 类型：`ButtonProps`，[Button API Documents](./button?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/fab/type.ts) | N
draggable | String / Boolean | false | 是否可拖拽。`true` / `'all'`可拖动<br>`'vertical'`可垂直拖动<br>`'horizontal'`可水平拖动<br>`false`禁止拖动。TS 类型：`boolean \| FabDirectionEnum ` `type FabDirectionEnum = 'all' \| 'vertical' \| 'horizontal'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/fab/type.ts) | N
icon | String | - | 图标 | N
text | String | - | 文本内容 | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
y-bounds | Array | - | 设置垂直方向边界限制，示例：[48, 48] 或 ['96rpx', 80]。TS 类型：`Array<string \| number>` | N

### Fab Events

名称 | 参数 | 描述
-- | -- | --
click | `({e: Event})` | 悬浮按钮点击事件
drag-end | `(e: TouchEvent)` | 结束拖拽时触发
drag-start | `(e: TouchEvent)` | 开始拖拽时触发

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-fab-shadow | @shadow-2 | -
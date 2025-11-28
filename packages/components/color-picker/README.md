---
title: ColorPicker 颜色选择器
description: 用于颜色选择，支持多种格式。
spline: data
isComponent: true
---


<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-0%25-red" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-0%25-red" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-0%25-red" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-0%25-red" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-color-picker": "tdesign-miniprogram/color-picker/color-picker"
}
```

## 代码演示

### 组件类型

#### 基础颜色选择器

{{ base }}

#### 带色板的颜色选择器

{{ multiple }}

### 组件状态

{{ format }}

## FAQ

如果使用场景为 `scroll-view`，除了需要显示指定 `fixed` 属性为 `true`，还需要手动调用组件的 debouncedUpdateEleRect() 事件。

```html
<scroll-view type="list" scroll-y bind:scroll="onScroll">
  <t-color-picker id="ColorPicker" fixed />
</scroll-view>
```

```js
onScroll(e) {
  if (!this.colorPicker) this.colorPicker = this.selectComponent('#ColorPicker');
  this.colorPicker.debouncedUpdateEleRect(e);
}
```

## API

### ColorPicker Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
auto-close | Boolean | true | 自动关闭。在点击遮罩层时自动关闭，不需要手动设置 visible | N
color-modes | String / Array | "monochrome" | 颜色模式选择。同时支持单色和渐变两种模式，可仅使用单色或者渐变其中一种模式，也可以同时使用。`monochrome` 表示单色，`linear-gradient` 表示渐变色。TS 类型：`colorModesEnum \| colorModesEnum[] ` `type colorModesEnum = 'monochrome' \| 'linear-gradient'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/color-picker/type.ts) | N
enable-alpha | Boolean | false | 是否开启透明通道 | N
enable-multiple-gradient | Boolean | true | 是否允许开启通过点击渐变轴增加渐变梯度，默认开启，关闭时只会存在起始和结束两个颜色 | N
fixed | Boolean | false | `1.8.5`。如果 color-picker 是在一个 `position:fixed` 的区域，需要显式指定属性 fixed 为 true | N
format | String | RGB | 格式化色值。`enableAlpha` 为真时，`HEX8/RGBA/HSLA/HSVA` 有效。可选项：HEX/HEX8/RGB/RGBA/HSL/HSLA/HSV/HSVA/CMYK/CSS | N
popup-props | Object | {} | 透传 Popup 组件全部属性。TS 类型：`PopupProps`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/color-picker/type.ts) | N
swatch-colors | Array | undefined | 系统预设的颜色样例，值为 `null` 或 `[]` 则不显示系统色，值为 `undefined` 会显示组件内置的系统默认色。TS 类型：`Array<string> \| null \| undefined` | N
type | String | base | 颜色选择器类型。（base 表示仅展示系统预设内容; multiple 表示展示色板和系统预设内容。可选项：base/multiple。TS 类型：`TypeEnum ` `type TypeEnum = 'base' \| 'multiple'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/color-picker/type.ts) | N
use-popup | Boolean | false | 是否使用弹出层包裹颜色选择器 | N
value | String | - | 色值 | N
default-value | String | undefined | 色值。非受控属性 | N
visible | Boolean | false | 是否显示颜色选择器。`usePopup` 为 true 时有效 | N

### ColorPicker Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger })` | 选中的色值发生变化时触发，第一个参数 `value` 表示新色值，`context.color` 表示当前调色板控制器的色值，`context.trigger` 表示触发颜色变化的来源。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/color-picker/type.ts)。<br/>`type ColorPickerChangeTrigger = 'palette-hue-bar' \| 'palette-alpha-bar' \| 'preset' `<br/>
close | `(trigger: ColorPickerTrigger)` | 关闭按钮时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/color-picker/type.ts)。<br/>`type ColorPickerTrigger = 'overlay'`<br/>
palette-bar-change | `(detail: { color: ColorObject })` | 调色板控制器的值变化时触发，`context.color` 指调色板控制器的值。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/color-picker/type.ts)。<br/>`interface ColorObject { alpha: number; css: string; hex: string; hex8: string; hsl: string; hsla: string; hsv: string; hsva: string; rgb: string; rgba: string; value: number;}`<br/>

### ColorPicker Slots

名称 | 描述
-- | --
footer | 底部插槽，仅在 `usePopup` 为 `true` 时有效
header | 顶部插槽，仅在 `usePopup` 为 `true` 时有效

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-color-picker-gradient-preview-height | 56rpx | -
--td-color-picker-gradient-preview-radius | 6rpx | -
--td-color-picker-gradient-preview-width | 56rpx | -
--td-color-picker-input-format-margin-left | 48rpx | -
--td-color-picker-panel-background | @bg-color-container | -
--td-color-picker-panel-padding | 32rpx | -
--td-color-picker-panel-radius | 24rpx | -
--td-color-picker-panel-width | 750rpx | -
--td-color-picker-saturation-height | 288rpx | -
--td-color-picker-saturation-radius | 12rpx | -
--td-color-picker-saturation-thumb-size | 48rpx | -
--td-color-picker-slider-height | 16rpx | -
--td-color-picker-slider-thumb-padding | 6rpx | -
--td-color-picker-slider-thumb-size | 48rpx | -
--td-color-picker-slider-thumb-transform-x | -18rpx | -
--td-color-picker-slider-wrapper-padding | 0 18rpx | -
--td-color-picker-swatch-border-radius | @radius-small | -
--td-color-picker-swatch-height | 48rpx | -
--td-color-picker-swatch-padding | 0 | -
--td-color-picker-swatch-width | 48rpx | -
--td-color-picker-swatches-title-font | @font-title-medium | -

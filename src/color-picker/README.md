---
title: ColorPicker 颜色选择器
description: 用于颜色选择，支持多种格式。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-88%25-blue" /></span>

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
enable-alpha | Boolean | false | 是否开启透明通道 | N
fixed | Boolean | false | `1.8.5`。如果 color-picker 是在一个 `position:fixed` 的区域，需要显式指定属性 fixed 为 true | N
footer | Slot | - | 底部插槽，仅在 `usePopup` 为 `true` 时有效。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
format | String | RGB | 格式化色值。`enableAlpha` 为真时，`RGBA/HSLA/HSVA` 等值有效。可选项：RGB/RGBA/HSL/HSLA/HSB/HSV/HSVA/HEX/CMYK/CSS | N
header | Slot | - | 顶部插槽，仅在 `usePopup` 为 `true` 时有效。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
popup-props | Object | {} | popupProps透传。TS 类型：`PopupProps`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts) | N
swatch-colors | Array | - | 系统预设的颜色样例，值为 `null` 或 `[]` 则不显示系统色，值为 `undefined` 会显示组件内置的系统默认色。TS 类型：`Array<string> \| null` | N
type | String | base | 颜色选择器类型。（base 表示仅展示系统预设内容; multiple 表示展示色板和系统预设内容。可选项：base/multiple。TS 类型：`TypeEnum ` `type TypeEnum = 'base' \| 'multiple'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts) | N
use-popup | Boolean | false | 是否使用弹出层包裹颜色选择器 | N
value | String | - | 色值 | N
default-value | String | undefined | 色值。非受控属性 | N
visible | Boolean | false | 是否显示颜色选择器。`usePopup` 为 true 时有效 | N

### ColorPicker Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger })` | 选中的色值发生变化时触发，第一个参数 `value` 表示新色值，`context.color` 表示当前调色板控制器的色值，`context.trigger` 表示触发颜色变化的来源。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts)。<br/>`type ColorPickerChangeTrigger = 'palette-hue-bar' \| 'palette-alpha-bar' \| 'preset' `<br/>
close | `(trigger: ColorPickerTrigger)` | 关闭按钮时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts)。<br/>`type ColorPickerTrigger = 'overlay'`<br/>
palette-bar-change | `(detail: { color: ColorObject })` | 调色板控制器的值变化时触发，`context.color` 指调色板控制器的值。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts)。<br/>`interface ColorObject { alpha: number; css: string; hex: string; hex8: string; hsl: string; hsla: string; hsv: string; hsva: string; rgb: string; rgba: string; value: number;}`<br/>


### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-color-picker-background | #fff | - 
--td-color-picker-border-radius-circle | 50% | - 
--td-color-picker-format-background-color | @gray-color-1 | - 
--td-color-picker-gradient-preview-height | 56rpx | - 
--td-color-picker-gradient-preview-radius | 6rpx | - 
--td-color-picker-gradient-preview-width | 56rpx | - 
--td-color-picker-input-format-margin-left | 48rpx | - 
--td-color-picker-margin | 24rpx | - 
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
--td-color-picker-swatch-active | rgba(0, 0, 0, 0.2) | - 
--td-color-picker-swatch-border-radius | 6rpx | - 
--td-color-picker-swatch-height | 48rpx | - 
--td-color-picker-swatch-padding | 0 | - 
--td-color-picker-swatch-width | 48rpx | - 
--td-color-picker-swatches-title-font | 32rpx | - 

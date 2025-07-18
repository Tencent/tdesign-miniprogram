:: BASE_DOC ::

## API

### ColorPicker Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
auto-close | Boolean | true | \- | N
enable-alpha | Boolean | false | \- | N
fixed | Boolean | false | `1.8.5` | N
footer | Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
format | String | RGB | options: RGB/RGBA/HSL/HSLA/HSB/HSV/HSVA/HEX/CMYK/CSS | N
header | Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
popup-props | Object | {} | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts) | N
swatch-colors | Array | - | swatch colors。Typescript：`Array<string> \| null` | N
type | String | base | options: base/multiple。Typescript：`TypeEnum ` `type TypeEnum = 'base' \| 'multiple'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts) | N
use-popup | Boolean | false | \- | N
value | String | - | color value | N
default-value | String | undefined | color value。uncontrolled property | N
visible | Boolean | false | \- | N

### ColorPicker Events

name | params | description
-- | -- | --
change | `(value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger })` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts)。<br/>`type ColorPickerChangeTrigger = 'palette-hue-bar' \| 'palette-alpha-bar' \| 'preset' `<br/>
close | `(trigger: ColorPickerTrigger)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts)。<br/>`type ColorPickerTrigger = 'overlay'`<br/>
palette-bar-change | `(detail: { color: ColorObject })` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts)。<br/>`interface ColorObject { alpha: number; css: string; hex: string; hex8: string; hsl: string; hsla: string; hsv: string; hsva: string; rgb: string; rgba: string; value: number;}`<br/>


### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
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

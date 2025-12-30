:: BASE_DOC ::

## API

### ColorPicker Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
auto-close | Boolean | true | \- | N
enable-alpha | Boolean | false | \- | N
fixed | Boolean | false | \- | N
format | String | RGB | When `enableAlpha` is true, `HEX8/RGBA/HSLA/HSVA` are valid。options: HEX/HEX8/RGB/RGBA/HSL/HSLA/HSV/HSVA/CMYK/CSS | N
popup-props | Object | {} | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts) | N
swatch-colors | Array | undefined | swatch colors。Typescript：`Array<string> \| null \| undefined` | N
type | String | base | options: base/multiple。Typescript：`TypeEnum ` `type TypeEnum = 'base' \| 'multiple'`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts) | N
use-popup | Boolean | false | \- | N
value | String | - | color value。`v-model:value` is supported | N
default-value | String | - | color value。uncontrolled property | N
visible | Boolean | false | \- | N

### ColorPicker Events

name | params | description
-- | -- | --
change | `(context: { value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger }})` | [see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts)。<br/>`type ColorPickerChangeTrigger = 'palette-hue-bar' \| 'palette-alpha-bar' \| 'preset' `<br/>
close | `(context: { trigger: ColorPickerTrigger })` | [see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts)。<br/>`type ColorPickerTrigger = 'overlay'`<br/>
palette-bar-change | `(context: { color: ColorObject })` | [see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts)。<br/>`interface ColorObject { alpha: number; css: string; hex: string; hex8: string; hsl: string; hsla: string; hsv: string; hsva: string; rgb: string; rgba: string; value: number;}`<br/>

### ColorPicker Slots

name | Description
-- | --
footer | \-
header | \-

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
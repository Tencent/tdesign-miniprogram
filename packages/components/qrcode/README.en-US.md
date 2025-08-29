:: BASE_DOC ::

## API

### QRCode Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
bg-color | String | - | QR code background color | N
borderless | Boolean | false | Is there a border | N
color | String | - | QR code color | N
icon | String | - | The address of the picture in the QR code | N
icon-size | Number / Object | 40 | The size of the picture in the QR code。Typescript：`number \| { width: number; height: number }` | N
level | String | M | QR code error correction level。options: L/M/Q/H | N
size | Number | 160 | QR code size | N
status | String | active | QR code status。options: active/expired/loading/scanned。Typescript：`QRStatus` `type QRStatus = "active" \| "expired" \| "loading" \| "scanned"`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/components/qrcode/type.ts) | N
status-render | Slot | - | Custom state renderer。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/components/qrcode/type.ts) | N
value | String | - | scanned text | N

### QRCode Events

name | params | description
-- | -- | --
refresh | \- | Click the "Click to refresh" callback

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-font-size-title-small | --td-font-size-title-small | - 
--td-brand-color-hover | --td-brand-color-hover | - 
--td-success-color | --td-success-color | -
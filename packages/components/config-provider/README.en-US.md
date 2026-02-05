:: BASE_DOC ::

## API

### ConfigProvider Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
global-config | Object | - | global config。Typescript: `GlobalConfigProvider` | N
theme-vars | Object | - | theme Variables | N

### GlobalConfigProvider

name | type | default | description | required
-- | -- | -- | -- | --
action-sheet | Object | - | ActionSheet global configs。Typescript: `ActionSheetConfig` | N
calendar | Object | - | Calendar global configs。Typescript: `CalendarConfig` | N
cascader | Object | - | Cascader global configs。Typescript: `CascaderConfig` | N
class-prefix | String | t | \- | N
date-time-picker | Object | - | DateTimePicker global configs。Typescript: `DateTimePickerConfig` | N
dropdown-menu | Object | - | DropdownMenu global configs。Typescript: `DropdownMenuConfig` | N
guide | Object | - | Guide global configs。Typescript: `GuideConfig` | N
picker | Object | - | Picker global configs。Typescript: `PickerConfig` | N
pull-down-refresh | Object | - | PullDownRefresh global configs。Typescript: `PullDownRefreshConfig` | N
qrcode | Object | - | QRCode global configs。Typescript: `QRCodeConfig` | N
rate | Object | - | Rate global configs。Typescript: `RateConfig` | N
tab-bar | Object | - | TabBar global configs。Typescript: `TabBarConfig` | N
upload | Object | - | Upload global configs。Typescript: `UploadConfig` | N

### ActionSheetConfig

name | type | default | description | required
-- | -- | -- | -- | --
cancel | String | - | cancel text | N

### CalendarConfig

name | type | default | description | required
-- | -- | -- | -- | --
confirm | String | - | confirm text | N
month-title | String | - | \- | N
months | Array | - | Typescript: `string[]` | N
title | String | - | \- | N
weekdays | Array | - | Typescript: `string[]` | N

### CascaderConfig

name | type | default | description | required
-- | -- | -- | -- | --
placeholder | String | - | \- | N
title | String | - | \- | N

### DateTimePickerConfig

name | type | default | description | required
-- | -- | -- | -- | --
cancel | String | - | \- | N
confirm | String | - | \- | N
date-label | String | - | \- | N
format | String | 'YYYY-MM-DD HH:mm:ss' | \- | N
hour-label | String | - | \- | N
minute-label | String | - | \- | N
month-label | String | - | \- | N
second-label | String | - | \- | N
title | String | - | \- | N
year-label | String | - | \- | N

### DropdownMenuConfig

name | type | default | description | required
-- | -- | -- | -- | --
confirm | String | - | confirm text | N
reset | String | - | reset text | N

### GuideConfig

name | type | default | description | required
-- | -- | -- | -- | --
back | String | - | \- | N
finish | String | - | \- | N
next | String | - | \- | N
skip | String | - | \- | N

### ImageConfig

name | type | default | description | required
-- | -- | -- | -- | --
error-text | String | - | loading text, default value is "Error" | N
loading-text | String | - | loading text, default value is "loading" | N
replace-image-src | Function | - | replace all `src` attribute of images。Typescript: `(params: ImageProps) => string`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/config-provider/type.ts) | N

### InputConfig

name | type | default | description | required
-- | -- | -- | -- | --
placeholder | String | - | \- | N

### PickerConfig

name | type | default | description | required
-- | -- | -- | -- | --
cancel | String | - | cancel text | N
confirm | String | - | confirm text | N

### PullDownRefreshConfig

name | type | default | description | required
-- | -- | -- | -- | --
loading-texts | Array | - | Typescript: `string[]` | N

### QRCodeConfig

name | type | default | description | required
-- | -- | -- | -- | --
expired-text | String | - | Language configuration, "QR code expired" description text | N
refresh-text | String | - | Language configuration, "QR code refresh" description text | N
scanned-text | String | - | Language configuration, "QR code scanned" description text | N

### RateConfig

name | type | default | description | required
-- | -- | -- | -- | --
no-value-text | String | - | \- | N
value-text | String | - | \- | N

### TabBarConfig

name | type | default | description | required
-- | -- | -- | -- | --
have-more-news-aria-label | String | - | \- | N
have-news-aria-label | String | - | \- | N
more-news-aria-label | String | - | \- | N
news-aria-label | String | - | \- | N

### UploadConfig

name | type | default | description | required
-- | -- | -- | -- | --
progress | Object | - | Typescript: `UploadConfigProgress` | N

### UploadConfigProgress

name | type | default | description | required
-- | -- | -- | -- | --
fail-text | String | - | \- | N
success-text | String | - | \- | N
uploading-text | String | - | \- | N
waiting-text | String | - | \- | N

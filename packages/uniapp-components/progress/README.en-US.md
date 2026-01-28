:: BASE_DOC ::

## API

### Progress Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
color | String / Object / Array | '' | Typescript：`string \| Array<string> \| Record<string, string>` | N
label | String / Boolean | true | \- | N
percentage | Number | 0 | \- | N
size | String / Number | 'default' | \- | N
status | String | - | options: success/error/warning/active。Typescript：`ProgressStatus` `type ProgressStatus = 'success' \| 'error' \| 'warning' \| 'active'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/progress/type.ts) | N
stroke-width | String / Number | - | \- | N
theme | String | line | options: line/plump/circle。Typescript：`ProgressTheme` `type ProgressTheme = 'line' \| 'plump' \| 'circle'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/progress/type.ts) | N
track-color | String | '' | \- | N

### Progress Slots

name | Description
-- | --
label | \-

### Progress External Classes

className | Description
-- | --
t-class | \-
t-class-bar | \-
t-class-label | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-progress-info-dark-color | @text-color-primary | -
--td-progress-info-light-color | @text-color-anti | -
--td-progress-inner-bg-color-active | @bg-color-container | -
--td-progress-inner-bg-color-error | @error-color | -
--td-progress-inner-bg-color-success | @success-color | -
--td-progress-inner-bg-color-warning | @warning-color | -
--td-progress-circle-icon-size | 96rpx | -
--td-progress-circle-inner-bg-color | @bg-color-container | -
--td-progress-circle-label-font | @font-title-extraLarge | -
--td-progress-circle-width | 224rpx | -
--td-progress-inner-bg-color | @brand-color | -
--td-progress-line-stroke-width | 12rpx | -
--td-progress-stroke-circle-width | 12rpx | -
--td-progress-stroke-plump-width | 40rpx | -
--td-progress-track-bg-color | @bg-color-component | -

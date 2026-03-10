:: BASE_DOC ::

## API

### Upload Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
add-btn | Boolean | true | \- | N
add-content | String | - | \- | N
allow-upload-duplicate-file | Boolean | false | allow to upload duplicate name files | N
config | Object | - | Typescript：`UploadMpConfig` `type UploadMpConfig = ImageConfig \| VideoConfig` `interface ImageConfig { count?: number; sizeType?: Array<SizeTypeValues>; sourceType?: Array<SourceTypeValues> }` `type SizeTypeValues = 'original' \| 'compressed'` `type SourceTypeValues = 'album' \| 'camera'` `interface VideoConfig { sourceType?: Array<SourceTypeValues>; compressed?: boolean; maxDuration?: number; camera?: 'back' \| 'front' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/upload/type.ts) | N
disabled | Boolean | undefined | make upload to be disabled | N
draggable | Boolean / Object | - | Typescript：`boolean \| {vibrate?: boolean; collisionVibrate?: boolean}` | N
files | Array | - | `v-model:files` is supported。Typescript：`Array<UploadFile>` `interface UploadFile { url: string; name?: string; size?: number; type?: 'image' \| 'video'; percent?: number; status: 'loading' \| 'reload' \| 'failed' \| 'done' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/upload/type.ts) | N
default-files | Array | - | uncontrolled property。Typescript：`Array<UploadFile>` `interface UploadFile { url: string; name?: string; size?: number; type?: 'image' \| 'video'; percent?: number; status: 'loading' \| 'reload' \| 'failed' \| 'done' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/upload/type.ts) | N
grid-config | Object | - | Typescript：`{column?: number;  width?: number; height?: number;}` | N
gutter | Number | 16 | \- | N
image-props | Object | - | Typescript：`ImageProps`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/upload/type.ts) | N
max | Number | 0 | max count of files limit | N
media-type | Array | ['image', 'video'] | Typescript：`Array<MediaType>` `type MediaType = 'image' \| 'video'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/upload/type.ts) | N
preview | Boolean | true | \- | N
remove-btn | Boolean | true | \- | N
request-method | Function | - | Typescript：`any` | N
size-limit | Number / Object | - | files size limit。Typescript：`number \| SizeLimitObj` `interface SizeLimitObj { size: number; unit: SizeUnit ; message?: string }` `type SizeUnitArray = ['B', 'KB', 'MB', 'GB']` `type SizeUnit = SizeUnitArray[number]`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/upload/type.ts) | N
source | String | media | options: media/messageFile | N
transition | Object | `{backTransition: true, duration: 300, timingFunction: 'ease'}` | Typescript：`Transition` `interface Transition { backTransition?: boolean, duration?: number, timingFunction?: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/upload/type.ts) | N

### Upload Events

name | params | description
-- | -- | --
add | `(context: { files: MediaContext })` | \-
click | `(context: { index: number; file: VideoContext \| ImageContext })` | \-
complete | \- | \-
drop | `(context: { files: MediaContext }) ` | \-
fail | \- | \-
remove | `(context: { index: number; file: UploadFile })` | \-
select-change | `(context: { files: MediaContext[]; currentSelectedFiles: MediaContext[] })` | \-
success | `(context: { files: MediaContext })` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/upload/type.ts)。<br/>`type MediaContext = VideoContext[] \| ImageContext[]`<br/><br/>`interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }`<br/><br/>`interface ImageContext { name: string; type: string; url: string;  size: number; width: number; height: number; progress: number  }`<br/>

### Upload Slots

name | Description
-- | --
add-content | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-upload-add-bg-color | @bg-color-secondarycontainer | -
--td-upload-add-color | @text-color-placeholder | -
--td-upload-add-disabled-bg-color | @bg-color-component-disabled | -
--td-upload-add-icon-disabled-color | @text-color-disabled | -
--td-upload-add-icon-size | 56rpx | -
--td-upload-disabled-mask | rgba(0, 0.6) | -
--td-upload-drag-transition-duration | --td-upload-drag-transition-duration | -
--td-upload-drag-transition-timing-function | --td-upload-drag-transition-timing-function | -
--td-upload-drag-z-index | 999 | -
--td-upload-radius | @radius-default | -

:: BASE_DOC ::

## API

### Upload Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
add-content | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
allow-upload-duplicate-file | Boolean | false | `暂不支持`。allow to upload duplicate name files | N
config | Object | - | Typescript：`UploadMpConfig` `type UploadMpConfig = ImageConfig \| VideoConfig` `interface ImageConfig { count?: number; sizeType?: Array<SizeTypeValues>; sourceType?: Array<SourceTypeValues> }` `type SizeTypeValues = 'original' \| 'compressed'` `type SourceTypeValues = 'album' \| 'camera'` `interface VideoConfig { sourceType?: Array<SourceTypeValues>; compressed?: boolean; maxDuration?: number; camera?: 'back' \| 'front' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
disabled | Boolean | undefined | make upload to be disabled | N
draggable | Boolean / Object | - | Typescript：`boolean \| {vibrate?: boolean; collisionVibrate?: boolean}` | N
files | Array | - | Typescript：`Array<UploadFile>` `interface UploadFile { url: string; name?: string; size?: number; type?: 'image' \| 'video'; percent?: number; status: 'loading' \| 'reload' \| 'failed' \| 'done' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
default-files | Array | undefined | uncontrolled property。Typescript：`Array<UploadFile>` `interface UploadFile { url: string; name?: string; size?: number; type?: 'image' \| 'video'; percent?: number; status: 'loading' \| 'reload' \| 'failed' \| 'done' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
grid-config | Object | - | Typescript：`{column?: number;  width?: number; height?: number;}` | N
gutter | Number | 16 | \- | N
image-props | Object | - | Typescript：`ImageProps`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
max | Number | 0 | max count of files limit | N
media-type | Array | ['image', 'video'] | Typescript：`Array<MediaType>` `type MediaType = 'image' \| 'video'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
request-method | Function | - | \- | N
size-limit | Number / Object | - | files size limit。Typescript：`number \| SizeLimitObj` `interface SizeLimitObj { size: number; unit: SizeUnit ; message?: string }` `type SizeUnitArray = ['B', 'KB', 'MB', 'GB']` `type SizeUnit = SizeUnitArray[number]`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
source | String | media | options: media/messageFile | N
transition | Object | { backTransition: true, duration: 300, timingFunction: 'ease' } | Typescript：`Transition` `interface Transition { backTransition?: boolean, duration?: number, timingFunction?: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N

### Upload Events

name | params | description
-- | -- | --
add | `(files: MediaContext)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts)。<br/>`type MediaContext = VideoContext[] \| ImageContext[]`<br/><br/>`interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }`<br/><br/>`interface ImageContext { name: string; type: string; url: string;  size: number; width: number; height: number; progress: number  }`<br/>
click | `(file: VideoContext \| ImageContext)` | \-
complete | \- | \-
drop | `(files: MediaContext) ` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts)。<br/>`type MediaContext = VideoContext[] \| ImageContext[]; interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }; interface ImageContext { name: string; type: string; url: string;  size: number; width: number; height: number; progress: number}`<br/>
fail | \- | \-
remove | `(index: number; file: UploadFile)` | \-
select-change | `(files: MediaContext[]; currentSelectedFiles: MediaContext[])` | \-
success | `(files: MediaContext)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts)。<br/>`type MediaContext = VideoContext[] \| ImageContext[]`<br/><br/>`interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }`<br/><br/>`interface ImageContext { name: string; type: string; url: string;  size: number; width: number; height: number; progress: number  }`<br/>

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-upload-add-bg-color | @bg-color-secondarycontainer | - 
--td-upload-add-color | @font-gray-3 | - 
--td-upload-add-disabled-bg-color | @bg-color-component-disabled | - 
--td-upload-add-icon-disabled-color | @text-color-disabled | - 
--td-upload-add-icon-font-size | 56rpx | - 
--td-upload-disabled-mask | rgba(255, 255, 255, 0.55) | - 
--td-upload-radius | @radius-default | - 
--td-upload-drag-z-index | 999 | -
---
title: Upload 上传
description: 用于相册读取或拉起拍照的图片上传功能。
spline: form
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-90%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-83%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-89%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-81%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-upload": "tdesign-miniprogram/upload/upload",
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/jz6CGimj7NSG" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 单选上传图片

图片上传有两种方式：

1 选择完所有图片之后，统一上传，因此选择完就直接展示

2 每次选择图片都上传，展示每次上传图片的进度

{{ single }}

### 多选上传图片

{{ multiple }}

### 长按拖拽排序图片

{{ drag }}

### 加载状态

支持多种状态：`loading`、`reload`、`failed`；

其中 `loading` 还可以通过传入 `percent` 来区分是否展示进度。

{{ status }}

### 从聊天记录上选

使用 `wx.chooseMessageFile` 实现，需要基础版本库 `2.5.0+`

{{ messageFile }}

## API

### Upload Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
add-content | String / Slot | - | 添加按钮内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
allow-upload-duplicate-file | Boolean | false | `暂不支持`。是否允许重复上传相同文件名的文件 | N
config | Object | - | 图片上传配置，视频上传配置，文件上传配置等，包含图片尺寸、图片来源、视频来源、视频拍摄最长时间等。更多细节查看小程序官网。[图片上传](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)。[视频上传](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html)。TS 类型：`UploadMpConfig` `type UploadMpConfig = ImageConfig \| VideoConfig` `interface ImageConfig { count?: number; sizeType?: Array<SizeTypeValues>; sourceType?: Array<SourceTypeValues> }` `type SizeTypeValues = 'original' \| 'compressed'` `type SourceTypeValues = 'album' \| 'camera'` `interface VideoConfig { sourceType?: Array<SourceTypeValues>; compressed?: boolean; maxDuration?: number; camera?: 'back' \| 'front' }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
disabled | Boolean | undefined | 是否禁用组件 | N
draggable | Boolean / Object | - | 是否支持拖拽排序。长按时是否振动，碰撞时是否振动。示例一：`true`。示例二：`{ vibrate: true, collisionVibrate: true }`。TS 类型：`boolean \| {vibrate?: boolean; collisionVibrate?: boolean}` | N
files | Array | - | 已上传文件列表。TS 类型：`Array<UploadFile>` `interface UploadFile { url: string; name?: string; size?: number; type?: 'image' \| 'video'; percent?: number; status: 'loading' \| 'reload' \| 'failed' \| 'done' }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
default-files | Array | undefined | 已上传文件列表。非受控属性。TS 类型：`Array<UploadFile>` `interface UploadFile { url: string; name?: string; size?: number; type?: 'image' \| 'video'; percent?: number; status: 'loading' \| 'reload' \| 'failed' \| 'done' }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
grid-config | Object | - | upload组件每行上传图片列数以及图片的宽度和高度。TS 类型：`{column?: number;  width?: number; height?: number;}` | N
gutter | Number | 16 | 预览窗格的 `gutter` 大小，单位 rpx | N
image-props | Object | - | 透传 Image 组件全部属性。TS 类型：`ImageProps`，[Image API Documents](./image?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
max | Number | 0 | 用于控制文件上传数量，值为 0 则不限制 | N
media-type | Array | ['image', 'video'] | 支持上传的文件类型，图片或视频。TS 类型：`Array<MediaType>` `type MediaType = 'image' \| 'video'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
request-method | Function | - | 自定义上传方法 | N
size-limit | Number / Object | - | 图片文件大小限制，默认单位 KB。可选单位有：`'B' \| 'KB' \| 'MB' \| 'GB'`。示例一：`1000`。示例二：`{ size: 2, unit: 'MB', message: '图片大小不超过 {sizeLimit} MB' }`。TS 类型：`number \| SizeLimitObj` `interface SizeLimitObj { size: number; unit: SizeUnit ; message?: string }` `type SizeUnitArray = ['B', 'KB', 'MB', 'GB']` `type SizeUnit = SizeUnitArray[number]`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
source | String | media | 来源。可选项：media/messageFile | N
transition | Object | { backTransition: true, duration: 300, timingFunction: 'ease' } | 拖拽位置移动时的过渡参数,`duration`单位为ms。TS 类型：`Transition` `interface Transition { backTransition?: boolean, duration?: number, timingFunction?: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N

### Upload Events

名称 | 参数 | 描述
-- | -- | --
add | `(files: MediaContext)` | 选择后触发，仅包含本次选择的照片；`url` 表示选定视频的临时文件路径 (本地路径)。`duration` 表示选定视频的时间长度。`size`选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts)。<br/>`type MediaContext = VideoContext[] \| ImageContext[]`<br/><br/>`interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }`<br/><br/>`interface ImageContext { name: string; type: string; url: string;  size: number; width: number; height: number; progress: number  }`<br/>
click | `(file: VideoContext \| ImageContext)` | 点击已选文件时触发；常用于重新上传
complete | \- | 上传成功或失败后触发
drop | `(files: MediaContext) ` | 拖拽结束后触发，包含所有上传的文件（拖拽后的文件顺序）；`url` 表示选定视频的临时文件路径 (本地路径)。`duration` 表示选定视频的时间长度。`size` 选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts)。<br/>`type MediaContext = VideoContext[] \| ImageContext[]; interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }; interface ImageContext { name: string; type: string; url: string;  size: number; width: number; height: number; progress: number}`<br/>
fail | \- | 上传失败后触发
remove | `(index: number; file: UploadFile)` | 移除文件时触发
select-change | `(files: MediaContext[]; currentSelectedFiles: MediaContext[])` | 选择文件或图片之后，上传之前，触发该事件。<br />`files` 表示之前已经上传完成的文件列表。<br />`currentSelectedFiles` 表示本次上传选中的文件列表
success | `(files: MediaContext)` | 上传成功后触发，包含所有上传的文件；`url` 表示选定视频的临时文件路径 (本地路径)。`duration` 表示选定视频的时间长度。`size`选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts)。<br/>`type MediaContext = VideoContext[] \| ImageContext[]`<br/><br/>`interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }`<br/><br/>`interface ImageContext { name: string; type: string; url: string;  size: number; width: number; height: number; progress: number  }`<br/>

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-upload-add-bg-color | @bg-color-secondarycontainer | - 
--td-upload-add-color | @font-gray-3 | - 
--td-upload-add-disabled-bg-color | @bg-color-component-disabled | - 
--td-upload-add-icon-disabled-color | @text-color-disabled | - 
--td-upload-add-icon-font-size | 56rpx | - 
--td-upload-disabled-mask | rgba(255, 255, 255, 0.55) | - 
--td-upload-radius | @radius-default | - 
--td-upload-drag-z-index | 999 | -
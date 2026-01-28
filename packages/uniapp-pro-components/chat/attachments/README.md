---
title: Attachments 文件附件
description: 用于聊天场景中上传、预览和管理附件的组件。
spline: base
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TAttachments from '@tdesign/uniapp-chat/attachments/attachments.vue';
```

### 01 组件类型

#### 图片类型

{{ base }}

#### 文件类型

{{ file }}

### 02 组件状态

#### 图片类型加载状态

{{ image-loading }}

#### 文件类型加载状态

{{ file-loading }}

## API

### Attachments Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
addable | Boolean | true | 【讨论中】是否显示添加按钮 | N
image-viewer | Boolean | true | 是否启用图片预览功能 | N
items | Array | [] | 必需。附件列表。TS 类型：`FileItem[]` `interface FileItem { fileType: 'image'\|'video'\|'audio'\|'pdf'\|'doc'\|'ppt'\|'txt'; name: string; url: string; size: number; status?: 'success'\|'fail'\|'pending'\|'error'; progress?: number; errorMessage?: string; fileIcon?: string; width?: number; height?: number; mode?: 'aspectFit' \| 'aspectFill' \| 'widthFix' \| 'heightFix' \| 'scaleToFill'}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-pro-components/chat/attachments/type.ts) | Y
removable | Boolean | true | 是否显示删除按钮 | N

### Attachments Events

名称 | 参数 | 描述
-- | -- | --
add | \- | 点击添加按钮时触发
file-click | `(item: FileItem)` | 点击文件时触发
remove | `(item: FileItem, index: number)` | 点击删除按钮时触发

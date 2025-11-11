---
title: Attachments 文件附件
description: 用于聊天场景中上传、预览和管理附件的组件。
spline: base
isComponent: true
---


## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-attachments": "tdesign-miniprogram/attachments/attachments"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/nsYgGtm58k4g" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

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
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
addable | Boolean | true | 【讨论中】是否显示添加按钮 | N
image-viewer | Boolean | true | 是否启用图片预览功能 | N
items | Array | [] | 【实验】附件列表。TS 类型：`FileItem[]` `interface FileItem { fileType: 'image'\|'video'\|'audio'\|'pdf'\|'doc'\|'ppt'\|'txt'; name: string; url: string; size: number; status?: 'success'\|'fail'\|'pending'\|'error'; progress?: number; errorMessage?: string; fileIcon?: string; width?: number; height?: number; mode?: 'aspectFit' \| 'aspectFill' \| 'widthFix' \| 'heightFix' \| 'scaleToFill'}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/attachments/type.ts) | N
removable | Boolean | true | 是否显示删除按钮 | N

### Attachments Events

名称 | 参数 | 描述
-- | -- | --
add | \- | 点击添加按钮时触发
file-click | `(item: FileItem)` | 点击文件时触发
remove | `(item: FileItem, index: number)` | 点击删除按钮时触发

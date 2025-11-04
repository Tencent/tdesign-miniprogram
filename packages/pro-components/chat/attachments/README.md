---
title: Attachments 文件附件
description: 用于聊天场景中上传、预览和管理附件的组件。
spline: base
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-attachments": "tdesign-miniprogram/attachments/attachments"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/F1cSo7mm75SS" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 01 组件类型

图片类型

{{ base }}

文件类型

{{ file }}

### 02 组件状态
图片类型加载状态

{{ imageLoading }}

文件类型加载状态
{{ fileLoading }}

## API

### Attachments Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
items | Array | [] | 附件列表。TS类型：FileItem[] | Y
removable | Boolean | true | 是否显示删除按钮 | N
imageViewer | Boolean | true | 是否启用图片预览功能 | N
addable | Boolean | true | 是否显示添加按钮 | N




### FileItem 类型定义
```typescript
interface FileItem {
  fileType: 'image'|'video'|'audio'|'pdf'|'doc'|'ppt'|'txt'  // 文件类型
  name: string  // 文件名
  url: string  // 文件URL
  size: number  // 文件大小(KB)
  status?: 'success'|'fail'|'pending'|'error'  // 上传状态
  progress?: number  // 上传进度(0-100)
  errorMessage?: string  // 错误信息
  fileIcon?: string  // 自定义文件图标URL
  width?: number  // 图片宽度(px)
  height?: number  // 图片高度(px)
  mode?: 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'scaleToFill'  // 图片模式
}

### Attachments Events

名称 | 参数 | 描述
-- | -- | --
fileClick | `(item: FileItem)` | 点击文件时触发
remove | `(item: FileItem, index: number)` | 点击删除按钮时触发
add | - | 点击添加按钮时触发


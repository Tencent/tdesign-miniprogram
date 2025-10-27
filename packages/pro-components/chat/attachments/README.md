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
  "t-attachments": "tdesign-miniprogram-chat/attachments/attachments"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/F1cSo7mm75SS" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 01 组件类型

#### 基础附件管理

{{ base }}

## API

### Attachments Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
items | Array | [] | 文件列表数据，每个元素需包含fileType/name/url/size等属性 | Y
removable | Boolean | true | 是否显示删除按钮 | N
imageViewer | Boolean | true | 是否启用图片预览功能 | N
addable | Boolean | true | 是否显示添加按钮 | N
imageProps | Object | { mode: 'scaleToFill', width: 52, height: 52 } | 图片组件的属性配置，包含mode（图片裁剪模式）、width（宽度）、height（高度） | N



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
}
```

### Attachments Events

名称 | 参数 | 描述
-- | -- | --
fileClick | `(item: FileItem)` | 点击文件时触发
remove | `(item: FileItem, index: number)` | 点击删除按钮时触发
add | - | 点击添加按钮时触发

### Attachments Slots

名称 | 作用域参数 | 描述
-- | -- | --
default | - | 自定义文件列表内容

### Attachments Methods

方法名 | 参数 | 返回值 | 描述
-- | -- | -- | --
handleFileClick | `item: FileItem` | - | 处理文件点击事件
handleRemove | `item: FileItem, index: number` | - | 处理文件删除
handleAdd | - | - | 处理添加按钮点击
renderDesc | `item: FileItem` | string | 生成文件描述文本
renderIcon | `item: FileItem` | string | 获取文件图标URL
renderFileType | `item: FileItem` | string | 识别文件类型
renderExtension | `item: FileItem` | string | 获取文件扩展名

---
title: ChatSender 聊天发送器
description: 用于聊天场景的消息输入和发送组件。
spline: base
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat-sender": "tdesign-miniprogram-chat/chat-sender/chat-sender"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/F1cSo7mm75SS" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 01 组件类型

#### 基础输入框

{{ base }}

### 附件输入

支持选择附件及展示附件列表，受控进行文件数据管理，示例中模拟了文件上传流程

{{ attachments }}

### 输入框自定义
输入框底部左侧区域 `footer-prefix` ，输入框底部操作区域 `suffix`

{{ slot }}

## API
### ChatSender Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
disabled | Boolean | false | 是否禁用输入框 | N
placeholder | String | 请输入消息... | 输入框默认文案 | N
loading | Boolean | false | 发送按钮是否处于加载状态 | N
textareaProps | Object | { autosize: { maxHeight: 125, minHeight: 0 } } | 透传给Textarea组件的全部属性，autosize支持Boolean或Object`boolean \| { maxHeight?: number, minHeight?: number }`| N
value | String | '' | 输入框的值 | N
onBlur | Function | () => {} | 输入框失焦时触发 | N
onChange | Function | () => {} | 输入框值发生变化时触发 | N
onFocus | Function | () => {} | 输入框聚焦时触发 | N
onSend | Function | () => {} | 点击消息发送的回调方法 | N
onStop | Function | () => {} | 点击消息终止的回调方法 | N
fileList | Array | [] | 附件文件列表 | N
attachmentsProps | Object | { items: [], removable: true, imageViewer: true, addable: false } | 附件列表属性 | N
renderPresets | Array | [见下方说明] | 预设发送区渲染配置 | N
visible | Boolean | false | 上传面板是否可见 | N


### 事件

事件名 | 说明 | 回调参数
-- | -- | --
send | 点击发送按钮时触发 | value, { e }
stop | 点击停止按钮时触发 | value, { e }
focus | 输入框聚焦时触发 | value, context
blur | 输入框失焦时触发 | value, context
change | 输入框内容变化时触发 | value, context
uploadClick | 点击上传按钮时触发 | -
fileClick | 点击附件时触发 | file
fileDelete | 删除附件时触发 | file
fileChange | 附件列表变化时触发 | files
fileAdd | 添加附件时触发 | -
fileSelect | 选择文件（图片/微信文件）时触发 | { e, name, files }
update:visible | 上传面板显示状态变化时触发 | Boolean

#### fileSelect 回调参数说明

字段 | 类型 | 说明
-- | -- | --
e | Event | 原始事件对象
name | String | 触发来源，uploadImage（相册）、uploadCamera（拍照）、uploadAttachment（微信文件）
files | Array | 选中的文件列表，格式为：{ url, name, size, fileType }

### 插槽

插槽名 | 说明
-- | --
header | 输入框上方自定义内容（如工具栏、附件等）
footerPrefix | 输入框下方左侧自定义内容
suffix | 发送按钮右侧自定义内容

### renderPresets 说明

`renderPresets` 用于灵活配置发送区的上传入口和发送按钮，支持自定义类型、顺序、样式。

#### 类型定义

```
Array<
  | {
      name: 'upload', // 固定为上传入口
      presets: string[], // 上传入口类型数组（如 ['uploadImage', 'uploadCamera', 'uploadAttachment']）
      type: 'popup' | 'bottom', // 上传入口展现方式：弹出层或底部
      status?: string, // 可选，'disabled' 时按钮不可用
    }
  | {
      name: 'send', // 固定为发送按钮
      type: 'icon' | 'text', // 发送按钮类型
      // 可扩展更多属性，如自定义文案、icon等
    }
>
```

#### 可选上传类型（presets）
- `uploadImage`：图片
- `uploadCamera`：拍摄
- `uploadAttachment`：微信文件

#### 示例用法

**1. 默认配置（上传+发送）**
```
[
  {
    name: 'upload',
    presets: ['uploadImage', 'uploadCamera', 'uploadAttachment'],
    type: 'popup',
    status: '',
  },
  {
    name: 'send',
    type: 'icon',
  },
]
```

**2. 只显示“图片”和“微信文件”，发送按钮为文字**
```
[
  {
    name: 'upload',
    presets: ['uploadImage', 'uploadAttachment'],
    type: 'popup',
  },
  {
    name: 'send',
    type: 'text',
  },
]
```

**3. 上传入口为底部，只显示“拍照”，发送按钮为icon**
```
[
  {
    name: 'upload',
    presets: ['uploadCamera'],
    type: 'bottom',
  },
  {
    name: 'send',
    type: 'icon',
  },
]
```

**4. 禁用上传入口**
```
[
  {
    name: 'upload',
    presets: ['uploadImage', 'uploadCamera'],
    type: 'popup',
    status: 'disabled',
  },
  {
    name: 'send',
    type: 'icon',
  },
]
```

#### 说明
- `presets` 数组决定上传入口的类型和顺序，支持任意组合。
- `type` 决定上传入口的展现方式（底部/弹出）。
- `status` 可选，支持 'disabled'，可控制入口是否可用。
- 发送按钮通过 `name: 'send'` 和 `type` 控制样式，后续可扩展更多属性。


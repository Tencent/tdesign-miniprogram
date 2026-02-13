---
title: ChatSender 对话输入
description: 用于聊天对话的输入框，可以扩展模型、多模态等能力。
spline: base
isComponent: true
---


## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat-sender": "tdesign-miniprogram/chat-sender/chat-sender"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/1b3SQumy8n4O" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 01 组件类型

#### 基础类型

{{ base }}

#### 上传文件

支持选择附件及展示附件列表，受控进行文件数据管理，示例中模拟了文件上传流程

{{ attachments }}

#### 内容引用
输入框顶部区域 `header` ，输入框底部左侧区域 `footer-prefix` ，输入框底部操作区域 `suffix`

{{ content-citation }}

#### 文件引用

输入框顶部区域 `header` ，输入框底部左侧区域 `footer-prefix` ，输入框底部操作区域 `suffix`

{{ file-citation }}

## API

### ChatSender Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
adjust-position | Boolean | false | 默认键盘弹起不会把页面顶起来 | N
attachments-props | Object | - | 附件列表属性。TS 类型：`AttachmentsProps`，[Attachments API Documents](./attachments?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/chat-sender/type.ts) | N
auto-rise-with-keyboard | Boolean | false | 键盘弹起时自动顶起来输入框 | N
disabled | Boolean | false | 是否禁用输入框 | N
input-mode | String | text | 输入模式：text-文本输入模式（显示textarea），voice-语音输入模式（显示语音按钮）。可选项：text/voice | N
file-list | Array | [] | 附件文件列表。TS 类型：`FileItem[]` | N
loading | Boolean | false | 发送按钮是否处于加载状态 | N
placeholder | String | 请输入消息... | 输入框默认文案 | N
render-presets | Array | [{name: 'upload', presets: ['uploadCamera', 'uploadImage', 'uploadAttachment'], status: ''},{ name: 'send', type: 'icon'}] | 预设发送区渲染配置，用于灵活配置发送区的上传入口和发送按钮，支持自定义类型、顺序、样式。TS 类型：`ChatActionButtons` `type ChatActionButtons = Array<ChatActionButton>` `type ChatActionButton = UploadButton \| SendButton` `interface UploadButton { name: 'upload'; presets: string[]; status?: string; }` `interface SendButton { name: 'send'; type: 'icon' \| 'text';}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/chat-sender/type.ts) | N
textarea-props | Boolean / Object | { autosize: { maxHeight: 264, minHeight: 48 } } | 透传给 Textarea 组件的属性，autosize数值单位为 rpx | N
value | String | - | 输入框的值 | N
visible | Boolean | false | 上传面板是否可见 | N

### ChatSender Events

名称 | 参数 | 描述
-- | -- | --
blur | `(value:string, context: { e: FocusEvent })` | 输入框聚焦时触发
change | `(value:string, context: { e: InputEvent \| MouseEvent \| KeyboardEvent })` | 输入框值发生变化时触发
file-add | \- | 添加附件时触发
file-change | `(file:FileItem)` | 附件列表变化时触发
file-click | `(file:FileItem)` | 点击附件时触发
file-delete | `(file:FileItem)` | 删除附件时触发
file-select | `(detail: {files: FileList, name: UploadActionType})` | 选择文件（图片/微信文件）时触发
focus | `(value:string, context: { e: FocusEvent }) ` | 输入框聚焦时触发
keyboardheightchange | `(detail: {height: number, duration: number})` | 选择文件（图片/微信文件）时触发
send | `(value:string, context: {\| KeyboardEvent })` | 点击消息发送的回调方法
stop | `(value:string)` | 点击消息终止的回调方法
upload-click | \- | 【实验】点击上传按钮时触发

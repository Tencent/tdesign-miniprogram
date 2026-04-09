:: BASE_DOC ::

## API

### ChatSender Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
adjust-position | Boolean | false | \- | N
attachments-props | Object | - | Typescript: `AttachmentsProps`，[Attachments API Documents](./attachments?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-pro-components/chat/chat-sender/type.ts) | N
auto-rise-with-keyboard | Boolean | false | \- | N
disabled | Boolean | false | \- | N
file-list | Array | [] | Typescript: `FileItem[]` | N
loading | Boolean | false | \- | N
placeholder | String | 请输入消息... | \- | N
render-presets | Array | [{name: 'upload', presets: ['uploadCamera', 'uploadImage', 'uploadAttachment'], status: ''},{ name: 'send', type: 'icon'}] | Typescript: `ChatActionButtons` `type ChatActionButtons = Array<ChatActionButton>` `type ChatActionButton = UploadButton \| SendButton` `interface UploadButton { name: 'upload'; presets: string[]; status?: string; }` `interface SendButton { name: 'send'; type: 'icon' \| 'text';}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-pro-components/chat/chat-sender/type.ts) | N
textarea-props | Boolean / Object | { autosize: { maxHeight: 264, minHeight: 48 } } | \- | N
value | String | - | input value | N
visible | Boolean | false | \- | N

### ChatSender Events

name | params | description
-- | -- | --
blur | `(value:string, context: { e: FocusEvent })` | \-
change | `(value:string, context: { e: InputEvent \| MouseEvent \| KeyboardEvent })` | \-
file-add | \- | \-
file-change | `(file:FileItem)` | \-
file-click | `(file:FileItem)` | \-
file-delete | `(file:FileItem)` | \-
file-select | `(context: {files: FileList, name: UploadActionType})` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/chat-sender/type.ts)。<br/>`type UploadActionType = 'uploadAttachment' \| 'uploadImage'`<br/>
focus | `(value:string, context: { e: FocusEvent }) ` | \-
keyboardheightchange | `(context: {height: number, duration: number})` | \-
send | `(value:string, context: { e: MouseEvent \| KeyboardEvent })` | \-
stop | `(value:string, context: { e: MouseEvent })` | \-
update-value | `(value: boolean)` | \-
update-visible | `(value: boolean)` | \-
upload-click | \- | \-

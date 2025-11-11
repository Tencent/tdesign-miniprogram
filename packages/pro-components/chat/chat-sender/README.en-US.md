:: BASE_DOC ::

## API

### ChatSender Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
adjust-position | Boolean | false | \- | N
attachments-props | Object | - | Typescript: `AttachmentsProps`，[Attachments API Documents](./attachments?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/chat-sender/type.ts) | N
auto-rise-with-keyboard | Boolean | false | \- | N
disabled | Boolean | false | \- | N
file-list | Array | [] | Typescript: `FileItem[]` | N
loading | Boolean | false | \- | N
placeholder | String | 请输入消息... | \- | N
render-presets | Array | [{name: 'upload', presets: ['uploadCamera', 'uploadImage', 'uploadAttachment'], status: ''},{ name: 'send', type: 'icon'}] | Typescript: `ChatActionButtons` `type ChatActionButtons = Array<ChatActionButton>` `type ChatActionButton = UploadButton \| SendButton` `interface UploadButton { name: 'upload'; presets: string[]; status?: string; }` `interface SendButton { name: 'send'; type: 'icon' \| 'text';}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/chat-sender/type.ts) | N
textarea-props | Boolean / Object | { autosize: { maxHeight: 264, minHeight: 48 } } | \- | N
value | String | - | input value | N
default-value | String | undefined | input value。uncontrolled property | N
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
file-select | `(detail: {files: FileList, name: UploadActionType})` | \-
focus | `(value:string, context: { e: FocusEvent }) ` | \-
keyboardheightchange | `(detail: {height: number, duration: number})` | \-
send | `(value:string, context: {\| KeyboardEvent })` | \-
stop | `(value:string)` | \-
upload-click | \- | \-

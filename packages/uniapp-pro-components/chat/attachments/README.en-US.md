:: BASE_DOC ::

## API

### Attachments Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
addable | Boolean | true | \- | N
image-viewer | Boolean | true | \- | N
items | Array | [] | required。Typescript: `FileItem[]` `interface FileItem { fileType: 'image'\|'video'\|'audio'\|'pdf'\|'doc'\|'ppt'\|'txt'; name: string; url: string; size: number; status?: 'success'\|'fail'\|'pending'\|'error'; progress?: number; errorMessage?: string; fileIcon?: string; width?: number; height?: number; mode?: 'aspectFit' \| 'aspectFill' \| 'widthFix' \| 'heightFix' \| 'scaleToFill'}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-pro-components/chat/attachments/type.ts) | Y
removable | Boolean | true | \- | N

### Attachments Events

name | params | description
-- | -- | --
add | \- | \-
file-click | `(item: FileItem)` | \-
remove | `(item: FileItem, index: number)` | \-

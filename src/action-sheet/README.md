:: BASE_DOC ::

## API
### ActionSheet Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | center | `0.29.0`。水平对齐方式。可选项：center/left | N
cancel-text | String | - | 设置取消按钮的文本 | N
count | Number | 8 | 设置每页展示菜单的数量，仅当 type=grid 时有效 | N
description | String | - | `0.29.0`。动作面板描述文字 | N
items | Array | - | 必需。菜单项。TS 类型：`Array<string \| ActionSheetItem>` `interface ActionSheetItem {label: string; color?: string; disabled?: boolean;icon?: string;suffixIcon?: string; }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/action-sheet/type.ts) | Y
popup-props | Object | {} | popupProps透传 | N
show-cancel | Boolean | true | 是否显示取消按钮 | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
theme | String | list | 展示类型，列表和表格形式展示。可选项：list/grid | N
visible | Boolean | false | 必需。显示与隐藏 | Y
default-visible | Boolean | undefined | 必需。显示与隐藏。非受控属性 | Y

### ActionSheet Events

名称 | 参数 | 描述
-- | -- | --
cancel | \- | 点击取消按钮时触发
close | `(trigger: TriggerSource)` | 关闭时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/action-sheet/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'command' \| 'select' `<br/>
selected | `(selected: ActionSheetItem \| string, index: number)` | 选择菜单项时触发

### ActionSheet 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-cancel | 取消样式类

### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-action-sheet-border-color | @gray-color-1 | - 
--td-action-sheet-border-radius | @radius-extra-large | - 
--td-action-sheet-cancel-color | @font-gray-1 | - 
--td-action-sheet-cancel-height | 96rpx | - 
--td-action-sheet-color | @font-gray-1 | - 
--td-action-sheet-description-color | @font-gray-3 | - 
--td-action-sheet-list-item-disabled-color | @font-gray-4 | - 
--td-action-sheet-list-item-height | 112rpx | - 
--td-action-sheet-text-align | center | - 

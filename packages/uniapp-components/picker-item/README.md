:: BASE_DOC ::

## API

### PickerItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
format | Function | - | 格式化标签。TS 类型：`(option: PickerItemOption, columnIndex: number) => PickerItemOption` | N
options | Array | [] | 数据源。TS 类型：`PickerItemOption[]` `interface PickerItemOption { label: string; value: string \| number; icon?: string }`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/picker/type.ts) | N

### PickerItem Slots

名称 | 描述
-- | --
label-suffix--[index] | 列表子项后置插槽，用于自定义标签文本之后的内容。

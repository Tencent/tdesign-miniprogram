:: BASE_DOC ::

## API

### Segmented Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
disabled | Boolean | - | 是否禁用 | N
options | Object | [] | 数据化配置选项内容。TS 类型：`string[] \| number[] \| SegmentedItem[] ` `interface SegmentedItem { value: string \| number; label?: string; icon?: string \| object; disabled?: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/segmented/type.ts) | N
value | String / Number | - | 当前选中的值 | N
default-value | String / Number | undefined | 当前选中的值。非受控属性 | N

### Segmented Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: string \| number, selectedOption: SegmentedItem)` | 选项值发生变化时触发

:: BASE_DOC ::

## API
### SideBar Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
value | String / Number | - | 选项值 | N
default-value | String / Number | undefined | 选项值。非受控属性 | N

### SideBar Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: number \| string, label: string)` | 选项值发生变化时触发
click | `(value: number \| string, label: string)` | 点击选项时触发

### SideBarItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
badge-props | Object | - | 透传至 Badge 组件 | N
disabled | Boolean | false | 是否禁用 | N
label | String | - | 展示的标签 | N
value | String / Number | - | 当前选项的值 | N

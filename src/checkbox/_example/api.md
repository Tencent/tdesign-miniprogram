### Checkbox Props

| 名称            | 类型            | 默认值    | 说明                                                                                                                                    | 必传    |
| --------------- | --------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- | --- |
| align           | String          | left      | 复选框和内容相对位置。可选值：left/right                                                                                                | N       |
| checked         | Boolean         | false     | 是否选中                                                                                                                                | N       |
| content         | String / Slot   | -         | 复选框内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)                       | N       |
| contentDisabled | Boolean         | -         | 是否禁用组件内容（content）触发选中                                                                                                     | N       |
| disabled        | Boolean         | undefined | 是否禁用组件                                                                                                                            | N       |
| externalClasses | Array           | -         | 组件类名，分别用于设置 组件外层、复选框图标、主文案、内容 等元素类名。`['t-class', 't-class-icon', 't-class-label', 't-class-content']` | N       |
| icon            | Array           | -         | 自定义选中图标和非选中图标。TS 类型：`Array<string, string>`                                                                            | N       |
| indeterminate   | Boolean         | false     | 是否为半选                                                                                                                              | N       |
| label           | String / Slot   | -         | 主文案。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)                           | N       |
| maxContentRow   | Number          | 5         | 内容最大行数限制                                                                                                                        | N       |
| maxLabelRow     | Number          | 3         | 主文案最大行数限制                                                                                                                      | N       |
| name            | String          | -         | HTM 元素原生属性                                                                                                                        | N       |
| readonly        | Boolean         | false     | 组件是否只读                                                                                                                            | N       |
| value           | String / Number | -         | 复选框的值。TS 类型：`string                                                                                                            | number` | N   |

### Checkbox Events

| 名称   | 参数                 | 描述         |
| ------ | -------------------- | ------------ |
| change | `(checked: boolean)` | 值变化时触发 |

### CheckboxGroup Props

| 名称     | 类型    | 默认值 | 说明                                                                                                                                                                                                                                                                                                                       | 必传 |
| -------- | ------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| disabled | Boolean | false  | 是否禁用组件                                                                                                                                                                                                                                                                                                               | N    |
| max      | Number  | -      | 支持最多选中的数量                                                                                                                                                                                                                                                                                                         | N    |
| name     | String  | -      | 统一设置内部复选框 HTML 属性                                                                                                                                                                                                                                                                                               | N    |
| options  | Array   | []     | 以配置形式设置子元素。示例 1：['北京', '上海'] ，示例 2: [{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]。checkAll 值为 true 表示当前选项为「全选选项」。TS 类型：`Array<CheckboxOption>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts) | N    |
| value    | Array   | []     | 选中值。TS 类型：`CheckboxGroupValue`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts)                                                                                                                                                                               | N    |

### CheckboxGroup Events

| 名称   | 参数                                                 | 描述         |
| ------ | ---------------------------------------------------- | ------------ |
| change | `(value: CheckboxGroupValue, context: { e: Event })` | 值变化时触发 |

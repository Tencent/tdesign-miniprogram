#### Props

| 属性            | 值类型    | 默认值       | 必传 | 说明                                                                                                                                                                                                                                  |
| --------------- | --------- | ------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title           | `String`  | -            | N    | 左侧标题                                                                                                                                                                                                                              |
| content         | `String`  | -            | N    | 右侧内容                                                                                                                                                                                                                              |
| label           | `String`  | -            | N    | 标题下方的描述信息                                                                                                                                                                                                                    |
| align           | `String`  | `middle`     | N    | cell 内容位置，可选值`top`,`middle`,`bottom `                                                                                                                                                                                         |
| required        | `boolean` | `false`      | N    | 是否显示表单必填星号                                                                                                                                                                                                                  |
| hover           | `boolean` | `false`      | N    | 是否开启点击反馈                                                                                                                                                                                                                      |
| useLabelSlot    | `Boolean` | `false`      | N    | 是否使用 label slot                                                                                                                                                                                                                   |
| bordered        | `Boolean` | `true`       | N    | 是否显示下边框                                                                                                                                                                                                                        |
| url             | `string`  | -            | N    | 点击后跳转的链接地址                                                                                                                                                                                                                  |
| linkType        | `string`  | `navigateTo` | N    | 链接跳转类型，可选值为 `redirectTo`, `switchTab` ,`reLaunch`                                                                                                                                                                          |
| externalClasses | `Array`   | -            | N    | 外部样式类名，分别用于设置 cell 组件最外层样式、左侧标题、左侧 label、右侧内容、点击反馈效果、左侧 slot、右侧 slot。['t-class', 't-class-title', 't-calss-label', 't-class-content','t-class-hover','t-class-left','t-class-right', ] |

#### Events

| 事件       | 值类型     | event.detail | 说明             |
| ---------- | ---------- | ------------ | ---------------- |
| bind:click | `Function` | -            | 点击单元格时触发 |

### Slots

| 名称       | 说明                                                     |
| ---------- | -------------------------------------------------------- |
| content    | 自定义 content 显示内容，如果设置了 content 属性则不生效 |
| title      | 自定义 title 显示内容，如果设置了 title 属性则不生效     |
| label      | 自定义 label 显示内容，需要设置 use-label-slot 属性      |
| left-icon  | 自定义左侧显示内容                                       |
| right-icon | 自定义右侧显示内容                                       |

### cell 外部样式类

| 类名            | 说明                 |
| --------------- | -------------------- |
| t-class         | 根节点样式类         |
| t-class-title   | title 样式           |
| t-calss-label   | label 样式           |
| t-class-content | value 样式           |
| t-class-hover   | hover 样式           |
| t-class-left    | left-icon slot 样式  |
| t-class-right   | right-icon slot 样式 |

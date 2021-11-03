### Search Props

| 名称        | 类型    | 默认值   | 说明                             | 必传 |
| ----------- | ------- | -------- | -------------------------------- | ---- |
| actionText  | String  | ''       | 自定义右侧 cancel 文字           | N    |
| center      | Boolean | false    | 是否居中                         | N    |
| disabled    | Boolean | false    | 是否禁用                         | N    |
| focus       | Boolean | false    | 是否聚焦                         | N    |
| keyword     | String  | ''       | 值                               | N    |
| label       | String  | ''       | 左侧文本                         | N    |
| leftIcon    | String  | 'search' | 左侧图标                         | N    |
| placeholder | String  | ''       | 占位符                           | N    |
| rightIcon   | String  | 'close'  | 右侧图标                         | N    |
| shape       | String  | 'square' | 搜索框形状。可选值：square/round | N    |

### Search Events

| 名称   | 参数                  | 描述                       |
| ------ | --------------------- | -------------------------- |
| blur   | `({ value: string })` | 失去焦点时触发             |
| cancel | `({})`                | 点击右侧 cancel 文字时触发 |
| change | `({ value: string })` | 值发生变化时触发           |
| clear  | `({ value: string })` | 点击清除时触发             |
| focus  | `({ value: string })` | 聚焦时触发                 |
| submit | `({ value: string })` | 提交时触发                 |

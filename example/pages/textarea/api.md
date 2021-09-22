### Textarea Props

| 名称           | 类型    | 默认值 | 说明                                                                                                 | 必传     |
| -------------- | ------- | ------ | ---------------------------------------------------------------------------------------------------- | -------- | ------ | ---- | ------- | --- |
| adjustPosition | Boolean | true   | 键盘弹起时，是否自动上推页面                                                                         | N        |
| autofocus      | Boolean | false  | 自动聚焦，拉起键盘                                                                                   | N        |
| autoHeight     | Boolean | false  | 是否自动增高，设置 auto-height 时，style.height 不生效                                               | N        |
| confirmHold    | Boolean | false  | 点击键盘右下角按钮时是否保持键盘不收起点                                                             | N        |
| confirmType    | String  | done   | 设置键盘右下角按钮的文字，仅在 type='text'时生效。可选值：send/search/next/go/done。TS 类型：`'send' | 'search' | 'next' | 'go' | 'done'` | N   |
| disabled       | Boolean | false  | 是否禁用文本框                                                                                       | N        |
| focus          | Boolean | false  | 是否获取焦点                                                                                         | N        |
| maxlength      | Number  | 140    | 用户最多可以输入的字符个数                                                                           | N        |
| name           | String  | -      | 名称                                                                                                 | N        |
| placeholder    | String  | -      | 占位符                                                                                               | N        |
| value          | String  | -      | 文本框值                                                                                             | N        |

### Textarea Events

| 名称        | 参数                                                   | 描述               |
| ----------- | ------------------------------------------------------ | ------------------ |
| blur        | `(value: TextareaValue, context: { e: FocusEvent })`   | 失去焦点时触发     |
| change      | `(value: TextareaValue, context?: { e?: InputEvent })` | 输入内容变化时触发 |
| enter       | `(value: TextareaValue, context: { e: FocusEvent })`   | 点击完成时触发     |
| focus       | `(value: TextareaValue, context: { e: FocusEvent })`   | 获得焦点时触发     |
| line-change | `(value: TextareaValue, context: { e: FocusEvent })`   | 行高发生变化时触发 |

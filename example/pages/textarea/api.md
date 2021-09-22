### Input Props

| 名称           | 类型          | 默认值 | 说明                                                                                                                | 必传     |
| -------------- | ------------- | ------ | ------------------------------------------------------------------------------------------------------------------- | -------- | -------- | ------- | ---------------- | --- |
| adjustPosition | Boolean       | true   | 键盘弹起时，是否自动上推页面                                                                                        | N        |
| clearable      | Boolean       | false  | 是否可清空                                                                                                          | N        |
| confirmHold    | Boolean       | false  | 点击键盘右下角按钮时是否保持键盘不收起点                                                                            | N        |
| confirmType    | String        | done   | 设置键盘右下角按钮的文字，仅在 type='text'时生效。可选值：send/search/next/go/done。TS 类型：`'send'                | 'search' | 'next'   | 'go'    | 'done'`          | N   |
| disabled       | Boolean       | false  | 是否禁用输入框                                                                                                      | N        |
| error          | Boolean       | false  | 是否存在错误提示消息                                                                                                | N        |
| errorMessage   | String        | -      | 错误提示文本                                                                                                        | N        |
| focus          | Boolean       | false  | 是否获取焦点                                                                                                        | N        |
| maxlength      | Number        | 140    | 用户最多可以输入的文本长度                                                                                          | N        |
| name           | String        | -      | 名称                                                                                                                | N        |
| password       | Boolean       | false  | 是否密码类型                                                                                                        | N        |
| placeholder    | String        | -      | 占位符                                                                                                              | N        |
| required       | Boolean       | false  | 是否必填                                                                                                            | N        |
| size           | String        | small  | 输入框尺寸。可选值：small/medium。TS 类型：`'medium'                                                                | 'small'` | N        |
| suffix         | String        | -      | 后置文本内容                                                                                                        | N        |
| suffixIcon     | String / Slot | -      | 组件后置图标。[通用类型定义](https://git.code.oa.com/TDesign/tdesign-miniprogram/blob/develop/src/common/common.ts) | N        |
| type           | String        | text   | 输入框类型。可选值：text/number/idcard/digit/safe-password。TS 类型：`'text'                                        | 'number' | 'idcard' | 'digit' | 'safe-password'` | N   |
| value          | String        | -      | 输入框的值                                                                                                          | N        |

### Input Events

| 名称  | 参数                                                 | 描述               |
| ----- | ---------------------------------------------------- | ------------------ |
| blur  | `(value: InputValue, context: { e: FocusEvent })`    | 失去焦点时触发     |
| clear | `(context: { e: MouseEvent })`                       | 清空按钮点击时触发 |
| enter | `(value: InputValue, context: { e: KeyboardEvent })` | 回车键按下时触发   |
| focus | `(value: InputValue, context: { e: FocusEvent })`    | 获得焦点时触发     |
| input | `(value: InputValue, context?: { e?: Event })`       | 输入内容变化时触发 |

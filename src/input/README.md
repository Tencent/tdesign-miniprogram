# Input 输入框

## 介绍

用于单行文本信息输入。

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-input": "@tencent/tdesign-miniprogram/input/input"
}
```

## 用法

### 组件方式

```html
<!-- page.wxml -->
<t-input name="标签文字" placeholder="请输入文字" />
```

## API

### Props

| 属性           | 值类型              | 默认值  | 必传 | 说明                                                                                         |
| -------------- | ------------------- | ------- | ---- | -------------------------------------------------------------------------------------------- |
| name           | `String`            | -       | N    | 标签名称                                                                                     |
| value          | `String`            | -       | N    | 输入框的值                                                                                   |
| password       | `Boolean`           | `false` | N    | 是否密码类型                                                                                 |
| error          | `Boolean`           | `false` | N    | 是否存在错误提示                                                                             |
| errorMessage   | `String`            | -       | N    | 错误提示文本                                                                                 |
| suffixIcon     | `String`            | -       | N    | 组件后置图标                                                                                 |
| suffix         | `String`            | -       | N    | 后置文本内容                                                                                 |
| type           | `TTypeValue`        | `text`  | N    | 输入框类型，'text'、'number'、 'idcard' 、 'digit' 、'safe-password'                         |
| size           | `TSizeValue`        | `small` | N    | 文本框规格 'medium'、 'small'                                                                |
| required       | `Boolean`           | `false` | N    | 是否必填                                                                                     |
| clearable      | `Boolean`           | `false` | N    | 是否可清空                                                                                   |
| disabled       | `Boolean`           | `false` | N    | 是否禁用输入框                                                                               |
| placeholder    | `String`            | -       | N    | 输入框为空时的占位符                                                                         |
| maxlength      | `Number`            | 140     | N    | 输入框输入文本的最大长度                                                                     |
| focus          | `Boolean`           | `false` | N    | 是否获取焦点                                                                                 |
| confirmType    | `TConfirmTypeValue` | -       | N    | 设置键盘右下角按钮的文字，仅在 type='text'时生效,'send'、 'search' 、 'next' 、'go' 、'done' |
| confirmHold    | `Boolean`           | `false` | N    | 点击键盘右下角按钮时是否保持键盘不收起点                                                     |
| adjustPosition | `Boolean`           | `true`  | N    | 键盘弹起时，是否自动上推页面                                                                 |

### Events

| 事件  | event.detail | 说明               |
| ----- | ------------ | ------------------ |
| input | -            | 键盘输入时触发     |
| focus | -            | 键盘聚焦时触发     |
| blur  | -            | 键盘失去焦点时触发 |
| enter | -            | 点击完成按钮时触发 |
| clear | -            | 输入框清除时触发   |

### External Class

| 类名                | 说明                        |
| ------------------- | --------------------------- |
| t-class             | 外部包裹的拓展类            |
| t-class-input       | 输入框的拓展类              |
| t-class-placeholder | 输入框 placeholder 的拓展类 |
| t-class-error-msg   | 错误提示的拓展类            |

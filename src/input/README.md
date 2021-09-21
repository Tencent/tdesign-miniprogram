# input 组件

## 介绍

输入框

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
<t-input label="标签文字" placeholder="请输入文字" />
```

## API

### Props

| 属性         | 值类型       | 默认值  | 必传 | 说明                                                                 |
| ------------ | ------------ | ------- | ---- | -------------------------------------------------------------------- |
| label        | `String`     | -       | N    | 标签名称                                                             |
| value        | `String`     | -       | N    | 输入框的值                                                           |
| password     | `Boolean`    | `false` | N    | 是否密码类型                                                         |
| error        | `Boolean`    | `false` | N    | 是否存在错误提示                                                     |
| errorMessage | `String`     | -       | N    | 错误提示文本                                                         |
| suffixIcon   | `String`     | -       | N    | 后缀图标                                                             |
| suffix       | `String`     | -       | N    | 后缀文本内容                                                         |
| type         | `TTypeValue` | `text`  | N    | 输入框类型，'text'、'number'、 'idcard' 、 'digit' 、'safe-password' |
| size         | `TSizeValue` | `small` | N    | 文本框规格 'medium'、 'small'                                        |
| required     | `Boolean`    | `false` | N    | 是否必填                                                             |
| clearable    | `Boolean`    | `false` | N    | 是否可清空                                                           |
| disabled     | `Boolean`    | `false` | N    | 是否禁用输入框                                                       |
| placeholder  | `String`     | -       | N    | 输入框为空时的占位符                                                 |

### Events

| 事件  | event.detail | 说明           |
| ----- | ------------ | -------------- |
| input | -            | input 事件     |
| clear | -            | 清空输入框事件 |

### External Class

| 类名              | 说明                        |
| ----------------- | --------------------------- |
| wrapper-class     | 外部包裹的拓展类            |
| input-class       | 输入框的拓展类              |
| placeholder-class | 输入框 placeholder 的拓展类 |

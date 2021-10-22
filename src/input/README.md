# Input 输入框

## 介绍

用于单行文本信息输入。<br/><br/>

请使用微信扫码预览 ↓<br/><br/>

![预览](https://tdesign.gtimg.com/miniprogram/qrcode/input.png)

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-input": "@tencent/tdesign-miniprogram/input/input"
}
```

## 代码演示

### 类型

基础文本框

<img src="https://tdesign.gtimg.com/miniprogram/readme/input-1.png" width="50%" height="50%" style="margin-top: 10px">

```html
<t-input name="标签文字" placeholder="请输入文字" />
```

## API

### Props

| 属性           | 值类型              | 默认值  | 必传 | 说明                                                                                         |
| -------------- | ------------------- | ------- | ---- | -------------------------------------------------------------------------------------------- |
| name           | `String`            | -       | N    | 标签名称                                                                                     |
| value          | `String`            | -       | N    | 输入框的值                                                                                   |
| errorMessage   | `String`            | -       | N    | 错误提示文本                                                                                 |
| suffixIcon     | `String`            | -       | N    | 组件后置图标                                                                                 |
| suffix         | `String`            | -       | N    | 后置文本内容                                                                                 |
| algin          | `String`            | -       | N    | 输入框文本对其，'left'、'center'、'right'                                                    |
| type           | `TTypeValue`        | `text`  | N    | 输入框类型，'text'、'number'、 'idcard' 、 'digit' 、'safe-password'、'password'             |
| size           | `TSizeValue`        | `small` | N    | 文本框规格 'medium'、 'small'                                                                |
| clearable      | `Boolean`           | `false` | N    | 是否可清空                                                                                   |
| disabled       | `Boolean`           | `false` | N    | 是否禁用输入框                                                                               |
| placeholder    | `String`            | -       | N    | 输入框为空时的占位符                                                                         |
| maxlength      | `Number`            | -       | N    | 输入框输入文本的最大长度                                                                     |
| maxcharacter   | `Number`            | -       | N    | 输入框输入文本的最大长度,一个中文汉字表示两个字符                                            |
| focus          | `Boolean`           | `false` | N    | 是否获取焦点                                                                                 |
| autofocus      | `Boolean`           | `false` | N    | 自动聚焦，拉起键盘                                                                           |
| confirmType    | `TConfirmTypeValue` | -       | N    | 设置键盘右下角按钮的文字，仅在 type='text'时生效,'send'、 'search' 、 'next' 、'go' 、'done' |
| confirmHold    | `Boolean`           | `false` | N    | 点击键盘右下角按钮时是否保持键盘不收起点                                                     |
| adjustPosition | `Boolean`           | `true`  | N    | 键盘弹起时，是否自动上推页面                                                                 |

### Events

| 事件   | event.detail | 说明               |
| ------ | ------------ | ------------------ |
| change | -            | 键盘输入时触发     |
| focus  | -            | 键盘聚焦时触发     |
| blur   | -            | 键盘失去焦点时触发 |
| enter  | -            | 点击完成按钮时触发 |
| clear  | -            | 输入框清除时触发   |

### External Class

| 类名                | 说明                        |
| ------------------- | --------------------------- |
| t-class             | 外部包裹的拓展类            |
| t-class-input       | 输入框的拓展类              |
| t-class-placeholder | 输入框 placeholder 的拓展类 |
| t-class-error-msg   | 错误提示的拓展类            |

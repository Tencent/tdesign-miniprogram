# Textarea 多行输入框

用于多行文本信息输入。

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-textarea": "@tencent/tdesign-miniprogram/textarea/textarea"
}
```

## 代码演示

### 类型

基础多行文本信息输入

<img src="https://tdesign.gtimg.com/miniprogram/readme/input-2.png" width="375px" height="50%">

```html
<t-textarea name="标签文字" placeholder="请输入文字" />
```

## API

### Props

| 属性           | 值类型              | 默认值  | 必传 | 说明                                                                                         |
| -------------- | ------------------- | ------- | ---- | -------------------------------------------------------------------------------------------- |
| name           | `String`            | -       | N    | 标签名称                                                                                     |
| value          | `String`            | -       | N    | 输入框的值                                                                                   |
| disabled       | `Boolean`           | `false` | N    | 是否禁用输入框                                                                               |
| placeholder    | `String`            | -       | N    | 输入框为空时的占位符                                                                         |
| maxlength      | `Number`            | -       | N    | 输入框输入文本的最大长度                                                                     |
| maxcharacter   | `Number`            | -       | N    | 输入框输入文本的最大长度,一个中文汉字表示两个字符                                            |
| focus          | `Boolean`           | `false` | N    | 是否获取焦点                                                                                 |
| autofocus      | `Boolean`           | `false` | N    | 自动聚焦，拉起键盘                                                                           |
| autosize       | `Boolean`           | `false` | N    | 是否自动增高，设置 auto-height 时，style.height 不生效                                       |
| confirmType    | `TConfirmTypeValue` | -       | N    | 设置键盘右下角按钮的文字，仅在 type='text'时生效,'send'、 'search' 、 'next' 、'go' 、'done' |
| confirmHold    | `Boolean`           | `false` | N    | 点击键盘右下角按钮时是否保持键盘不收起点                                                     |
| adjustPosition | `Boolean`           | `true`  | N    | 键盘弹起时，是否自动上推页面                                                                 |

### Events

| 事件       | event.detail | 说明                     |
| ---------- | ------------ | ------------------------ |
| change     | -            | 键盘输入时触发           |
| focus      | -            | 键盘聚焦时触发           |
| blur       | -            | 键盘失去焦点时触发       |
| enter      | -            | 点击完成按钮时触发       |
| lineChange | -            | 文本框行高发生变化时触发 |

### External Class

| 类名                | 说明                        |
| ------------------- | --------------------------- |
| t-class             | 外部包裹的拓展类            |
| t-class-textarea    | 输入框的拓展类              |
| t-class-placeholder | 输入框 placeholder 的拓展类 |
| t-class-name        | 标签的拓展类                |

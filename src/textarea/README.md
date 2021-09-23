# Textarea 组件

## 介绍

多行输入框

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-textarea": "@tencent/tdesign-miniprogram/textarea/textarea"
}
```

## 用法

### 组件方式

```html
<!-- page.wxml -->
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
| maxlength      | `Number`            | 140     | N    | 输入框输入文本的最大长度                                                                     |
| focus          | `Boolean`           | `false` | N    | 是否获取焦点                                                                                 |
| autofocus      | `Boolean`           | `false` | N    | 自动聚焦，拉起键盘                                                                           |
| autoHeight     | `Boolean`           | `false` | N    | 是否自动增高，设置 auto-height 时，style.height 不生效                                       |
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

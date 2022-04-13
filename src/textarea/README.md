---
title: Textarea 多行文本框
description: 用于多行文本信息输入。
spline: form
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-textarea": "tdesign-miniprogram/textarea/textarea"
}
```

## 代码演示

### 基础多行文本框

<img src="https://tdesign.gtimg.com/miniprogram/readme/input-2.png" width="375px" height="50%">

```html
<t-textarea name="标签文字" placeholder="请输入文字" />
```

## API
### Textarea Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
adjust-position | Boolean | true | 键盘弹起时，是否自动上推页面 | N
autofocus | Boolean | false | 自动聚焦，拉起键盘 | N
autosize | Boolean | false | 是否自动增高，值为 autosize 时，style.height 不生效 | N
confirm-hold | Boolean | false | 点击键盘右下角按钮时是否保持键盘不收起点 | N
confirm-type | String | done | 设置键盘右下角按钮的文字，仅在 type='text'时生效。可选项：send/search/next/go/done。TS 类型：`'send' | 'search' | 'next' | 'go' | 'done'` | N
disabled | Boolean | false | 是否禁用文本框 | N
external-classes | Array | - | 组件类名，分别用于表示组件外层元素、输入框、占位符、标签名等元素类名。`['t-class', 't-class-textarea', 't-class-placeholder', 't-class-label']` | N
focus | Boolean | false | 自动聚焦 | N
label | String / Slot | - | 左侧文本 | N
maxcharacter | Number | - | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度 | N
maxlength | Number | - | 用户最多可以输入的字符个数 | N
placeholder | String | undefined | 占位符 | N
value | String | - | 文本框值 | N

### Textarea Events

名称 | 参数 | 描述
-- | -- | --
blur | `(value: TextareaValue)` | 失去焦点时触发
change | `(value: TextareaValue)` | 输入内容变化时触发
enter | `(value: TextareaValue)` | 点击完成时触发
focus | `(value: TextareaValue)` | 获得焦点时触发
line-change | `(value: TextareaValue)` | 行高发生变化时触发

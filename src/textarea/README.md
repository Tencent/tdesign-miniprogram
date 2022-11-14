---
title: Textarea 多行文本框
description: 用于多行文本信息输入。
spline: form
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-92%25-blue" /></span>
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

{{ base }}

### 带标题多行文本框

{{ label }}

### 自动增高多行文本框

{{ autoSize }}

### 禁用多行文本框

{{ disabled }}

### 设置最大字符个数

{{ maxlength }}

### 设置最大字符个数，一个汉字表示两个字符

{{ maxcharacter }}

## 提示

- 如果需要在页面中调整 `textarea` 中 `placeholder` 样式，请使用名称为`t-textarea__placeholder`的Class选择器，直接覆盖组件内部样式（注意权重）。

## API
### Textarea Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
adjust-position | Boolean | true | 键盘弹起时，是否自动上推页面 | N
autofocus | Boolean | false | 自动聚焦，拉起键盘 | N
autosize | Boolean | false | 是否自动增高，值为 autosize 时，style.height 不生效 | N
confirm-hold | Boolean | false | 点击键盘右下角按钮时是否保持键盘不收起点 | N
confirm-type | String | done | 设置键盘右下角按钮的文字，仅在 type='text'时生效。可选项：send/search/next/go/done。TS 类型：`'return' \| 'send' \| 'search' \| 'next' \| 'go' \| 'done'` | N
cursor-spacing | Number | 0 | 指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离 | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
disabled | Boolean | false | 是否禁用文本框 | N
external-classes | Array | - | 组件类名，分别用于表示组件外层元素、输入框、占位符、标签名等元素类名。`['t-class', 't-class-textarea', 't-class-label']` | N
focus | Boolean | false | 自动聚焦 | N
label | String / Slot | - | 左侧文本 | N
maxcharacter | Number | - | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度 | N
maxlength | Number | - | 用户最多可以输入的字符个数 | N
placeholder | String | undefined | 占位符 | N
value | String | - | 文本框值 | N
default-value | String | undefined | 文本框值。非受控属性 | N

### Textarea Events

名称 | 参数 | 描述
-- | -- | --
blur | `(value: TextareaValue)` | 失去焦点时触发
change | `(value: TextareaValue)` | 输入内容变化时触发
enter | `(value: TextareaValue)` | 点击完成时触发
focus | `(value: TextareaValue)` | 获得焦点时触发
line-change | `(value: TextareaValue)` | 行高发生变化时触发

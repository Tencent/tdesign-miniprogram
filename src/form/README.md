---
title: Form 表单
description: 表单组件，用于数据录入、校验，支持布局、验证、提交等功能。
spline: form
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-form": "tdesign-miniprogram/form/form",
  "t-form-item": "tdesign-miniprogram/form/form-item"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/F1cSo7mm75SS" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 01 组件类型

#### 基础表单

{{ base }}

#### 水平布局表单

{{ horizontal }}

#### 垂直布局表单

{{ vertical }}

### 02 组件状态

#### 表单验证

{{ validation }}

#### 表单禁用

{{ disabled }}

### 03 组件样式

#### 标签对齐

{{ label-align }}

#### 必填标识

{{ required-mark }}

#### 冒号显示

{{ colon }}

## API

### Form Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
colon | Boolean | false | 是否在表单标签字段右侧显示冒号 | N
contentAlign | String | 'left' | 表单内容对齐方式。可选项：left/right | N
data | Object | {} | 表单数据 | N
disabled | Boolean | undefined | 是否禁用整个表单 | N
errorMessage | Object | - | 表单错误信息配置 | N
labelAlign | String | 'left' | 表单字段标签对齐方式。可选项：left/right/top | N
labelWidth | String / Number | '81px' | 可以整体设置label标签宽度 | N
preventSubmitDefault | Boolean | true | 是否阻止表单提交默认事件 | N
requiredMark | Boolean | undefined | 是否显示必填符号（*） | N
resetType | String | 'empty' | 重置表单的方式。可选项：empty/initial | N
rules | Object | - | 表单字段校验规则 | N
scrollToFirstError | String | - | 表单校验不通过时，是否自动滚动到第一个校验不通过的字段。可选项：smooth/auto | N
showErrorMessage | Boolean | true | 校验不通过时，是否显示错误提示信息 | N
submitWithWarningMessage | Boolean | false | 当校验结果只有告警信息时，是否触发 submit 提交事件 | N

### Form Events

名称 | 参数 | 描述
-- | -- | --
submit | `(context: SubmitContext)` | 表单提交时触发
reset | `(context: { e?: FormResetEvent })` | 表单重置时触发
validate | `(result: ValidateResultContext)` | 校验结束后触发

### FormItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
arrow | Boolean | false | 是否显示右侧箭头 | N
contentAlign | String | 'left' | 表单内容对齐方式。可选项：left/right | N
for | String | - | label 原生属性 | N
help | String | - | 表单项说明内容 | N
label | String | '' | 字段标签名称 | N
labelAlign | String | - | 表单字段标签对齐方式。可选项：left/right/top | N
labelWidth | String / Number | - | 可以整体设置标签宽度 | N
name | String / Number | - | 表单字段名称 | N
requiredMark | Boolean | undefined | 是否显示必填符号（*） | N
rules | Array | - | 表单字段校验规则 | N
showErrorMessage | Boolean | undefined | 校验不通过时，是否显示错误提示信息 | N

### 验证规则

名称 | 类型 | 描述
-- | -- | --
required | Boolean | 必填验证
email | Boolean | 邮箱验证
telnumber | Boolean | 手机号验证
idcard | Boolean | 身份证验证
number | Boolean | 数字验证
boolean | Boolean | 布尔值验证
url | Boolean | URL验证
date | Boolean | 日期验证
whitespace | Boolean | 空格验证
len | Number | 长度验证
min | Number | 最小长度验证
max | Number | 最大长度验证
enum | Array | 枚举验证
pattern | RegExp | 正则验证
validator | Function | 自定义验证

### 组件实例方法

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
validate | `(params?: FormValidateParams)` | `Promise<FormValidateResult>` | 校验函数
validateOnly | `(params?: Pick<FormValidateParams, 'fields' \| 'trigger'>)` | `Promise<FormValidateResult>` | 纯净的校验函数
submit | `(params?: { showErrorMessage?: boolean })` | - | 提交表单
reset | `(params?: FormResetParams)` | - | 重置表单
clearValidate | `(fields?: Array<string>)` | - | 清空校验结果
setValidateMessage | `(message: FormValidateMessage)` | - | 设置自定义校验结果

### Form External Classes

类名 | 描述
-- | --
t-class | 根节点样式类

### FormItem External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-label | 标签样式类
t-class-help | 说明内容样式类
t-class-error | 错误信息样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。

名称 | 默认值 | 描述
-- | -- | --
--td-form-bg-color | @bg-color-container | -
--td-form-border-color | @component-stroke | -
--td-form-border-radius | @radius-default | -
--td-form-item-border-color | @component-stroke | -
--td-form-item-border-width | 1rpx | -
--td-form-item-padding | 32rpx | -
--td-form-label-color | @text-color-primary | -
--td-form-label-font-size | @font-size-m | -
--td-form-label-font-weight | 400 | -
--td-form-label-line-height | 48rpx | -
--td-form-label-min-width | 2em | -
--td-form-label-max-width | 5em | -
--td-form-required-color | @error-color | -
--td-form-help-color | @text-color-placeholder | -
--td-form-help-font-size | @font-size-s | -
--td-form-error-color | @error-color | -
--td-form-error-font-size | @font-size-s | -
--td-form-colon-color | @text-color-primary | -
--td-form-colon-margin-left | 4rpx | -
--td-form-colon-margin-right | 8rpx | - 
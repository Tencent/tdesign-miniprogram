---
title: Input 输入框
description: 用于单行文本信息输入。
spline: form
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-input": "tdesign-miniprogram/input/input"
}
```

## 代码演示

### 基础输入框

<img src="https://tdesign.gtimg.com/miniprogram/readme/input-1.png" width="375px" height="50%">

```html
<!-- 无标题输入框 -->
<t-input placeholder="请输入文字" />

<!-- 带标题输入框 设置属性：label -->
<t-input label="标签文字" placeholder="请输入文字" />

<!-- 自定义标题输入框 设置属性：label="slot" slot="label"-->
<t-input placeholder="请输入文字" label="slot">
	<text slot="label">
    标签文字<text style="color: #e34d59"> *</text>
	</text>
</t-input>

<!-- 带后缀输入框 设置属性：slot="suffix" -->
<t-input
 placeholder="请输入手机号码"
 value="{{phoneNumber}}"
 type="number"
 error-message="{{phoneError ? '手机号输入不正确' : ''}}"
 bindchange="onPhoneInput"
>
	<view slot="suffix" class="verify">发送验证码 </view>
</t-input>
```

### 双向绑定

```html
<t-input model:value="{{value}}" />
```

## API
### Input Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
adjust-position | Boolean | true | 键盘弹起时，是否自动上推页面 | N
align | String | left | 文本内容位置，居左/居中/居右。可选项：left/center/right | N
borderless | Boolean | false | 【讨论中】是否开启无边框模式 | N
clearable | Boolean | false | 是否可清空 | N
confirm-hold | Boolean | false | 点击键盘右下角按钮时是否保持键盘不收起点 | N
confirm-type | String | done | 设置键盘右下角按钮的文字，仅在 type='text'时生效。可选项：send/search/next/go/done | N
disabled | Boolean | false | 是否禁用输入框 | N
error-message | String | - | 已废弃。错误提示文本，值为空不显示（废弃属性，如果需要，请更为使用 status 和 tips） | N
external-classes | Array | - | 组件类名，用于设置组件外层元素、输入框、占位符、错误信息等元素类名。`['t-class', 't-class-input', 't-class-placeholder', 't-class-error-msg']` | N
focus | Boolean | false | 自动聚焦 | N
format | Function | - | 【开发中】指定输入框展示值的格式。TS 类型：`InputFormatType` `type InputFormatType = (value: InputValue) => number | string`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
label | String / Slot | - | 左侧文本 | N
maxcharacter | Number | - | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 | N
maxlength | Number | - | 用户最多可以输入的文本长度，一个中文等于一个计数长度。值小于等于 0 的时候，则表示不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 | N
placeholder | String | undefined | 占位符 | N
prefix-icon | String / Slot | - | 组件前置图标，值为字符串则表示图标名称 | N
readonly | Boolean | false | 【开发中】只读状态 | N
size | String | small | 输入框尺寸。可选项：small/medium。TS 类型：`'medium' | 'small'` | N
status | String | - | 【开发中】输入框状态。可选项：success/warning/error | N
suffix | String / Slot | - | 后置图标前的后置内容 | N
suffix-icon | String / Slot | - | 后置文本内容，值为字符串则表示图标名称 | N
tips | String / Slot | - | 【开发中】输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 | N
type | String | text | 输入框类型。可选项：text/number/idcard/digit/safe-password/password | N
value | String / Number | - | 输入框的值。TS 类型：`InputValue` `type InputValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
default-value | String / Number | undefined | 输入框的值。非受控属性。TS 类型：`InputValue` `type InputValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N

### Input Events

名称 | 参数 | 描述
-- | -- | --
blur | `(value: InputValue)` | 失去焦点时触发
change | `(value: InputValue)` | 输入框值发生变化时触发
clear | - | 清空按钮点击时触发
enter | `(value: InputValue)` | 回车键按下时触发
focus | `(value: InputValue)` | 获得焦点时触发

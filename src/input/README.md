---
title: Input 输入框
description: 用于单行文本信息输入。
spline: form
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-97%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-88%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-97%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-92%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-input": "tdesign-miniprogram/input/input"
}
```

## 代码演示

### 01 组件类型

基础输入框

{{ base }}

带字数限制输入框

{{ maxlength }}

带操作输入框

{{ suffix }}

带图标输入框

{{ prefix }}

特定类型输入框

{{ special }}

### 02 组件状态

输入框状态

{{ status }}

信息超长状态

{{ label }}

### 03 组件样式

内容位置

{{ align }}

竖排样式

{{ layout }}

非通栏样式

{{ banner }}

标签外置样式

{{ bordered }}

自定义样式文本框

{{ custom }}


## API
### Input Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | left | 文本内容位置，居左/居中/居右。可选项：left/center/right | N
layout | String | horizontal | 标题输入框布局方式。可选项：vertical/horizontal | N
borderless | Boolean | false | 是否开启无边框模式 | N
clearable | Boolean / Object | false | 是否可清空，默认不启动。值为 `true` 表示使用默认清除空按钮，值为 `Object` 表示透传至 `icon` | N
disabled | Boolean | false | 是否禁用输入框 | N
error-message | String | - | 已废弃。错误提示文本，值为空不显示（废弃属性，如果需要，请更为使用 status 和 tips） | N
external-classes | Array | - | 组件类名，用于设置组件外层元素、输入框、占位符、错误信息等元素类名。`['t-class','t-class-prefix-icon', 't-class-label', 't-class-input',  't-class-clearable', 't-class-suffix', 't-class-suffix-icon', 't-class-tips']` | N
format | Function | - | 【开发中】指定输入框展示值的格式。TS 类型：`InputFormatType` `type InputFormatType = (value: InputValue) => number | string`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
label | String / Slot | - | 左侧文本。 | N
maxcharacter | Number | - | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 | N
maxlength | Number | - | 用户最多可以输入的文本长度，一个中文等于一个计数长度。值为空，则表示不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 | N
placeholder | String | undefined | 占位符 | N
prefix-icon | String / Object / Slot | - | 组件前置图标。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon`。 | N
readonly | Boolean | false | 【开发中】只读状态 | N
size | String | medium | 【已废弃】输入框尺寸。可选项：small/medium。TS 类型：`'medium' \| 'small'` | N
status | String | - | 输入框状态。可选项：success/warning/error | N
suffix | String / Slot | - | 后置图标前的后置内容 | N
suffix-icon | String  / Object / Slot | - | 后置文本内容。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon`。 | N
tips | String / Slot | - | 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 | N
type | String | text | 输入框类型。可选项：text/number/idcard/digit/safe-password/password/nickname | N
value | String / Number | - | 输入框的值。TS 类型：`InputValue` `type InputValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
default-value | String / Number | undefined | 输入框的值。非受控属性。TS 类型：`InputValue` `type InputValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
password | Boolean | false | 是否是密码类型（已废弃，请更为使用 type 指定输入框类型） | N
placeholder-style | String | - | 必需。指定 placeholder 的样式 | Y
placeholder-class | String | input-placeholder | 指定 placeholder 的样式类 | N
cursor-spacing | Number | 0 | 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 | N
auto-focus | Boolean | false | (即将废弃，请直接使用 focus )自动聚焦，拉起键盘 | N
focus | Boolean | false | 获取焦点 | N
confirm-type | String | done | 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />`send` 右下角按钮为“发送”；<br />`search` 右下角按钮为“搜索”；<br />`next` 右下角按钮为“下一个”；<br />`go` 右下角按钮为“前往”；<br />`done` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)。可选项：send/search/next/go/done | N
always-embed | Boolean | false | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | N
confirm-hold | Boolean | false | 点击键盘右下角按钮时是否保持键盘不收起 | N
cursor | Number | - | 必需。指定 focus 时的光标位置 | Y
selection-start | Number | -1 | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | N
selection-end | Number | -1 | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | N
adjust-position | Boolean | true | 键盘弹起时，是否自动上推页面 | N
hold-keyboard | Boolean | false | focus时，点击页面的时候不收起键盘 | N
safe-password-cert-path | String | - | 安全键盘加密公钥的路径，只支持包内路径 | N
safe-password-length | Number | - | 安全键盘输入密码长度 | N
safe-password-time-stamp | Number | - | 安全键盘加密时间戳 | N
safe-password-nonce | String | - | 安全键盘加密盐值 | N
safe-password-salt | String | - | 安全键盘计算 hash 盐值，若指定custom-hash 则无效 | N
safe-password-custom-hash | String | - | 安全键盘计算 hash 的算法表达式，如 `md5(sha1('foo' + sha256(sm3(password + 'bar'))))` | N

### Input Events

名称 | 参数 | 描述
-- | -- | --
blur | `(value: InputValue)` | 失去焦点时触发
change | `(value: InputValue, cursor: number, keyCode: number)` | 输入框值发生变化时触发；cursor 为光标位置；
clear | \- | 清空按钮点击时触发
enter | `(value: InputValue)` | 回车键按下时触发
focus | `(value: InputValue)` | 获得焦点时触发
keyboardheightchange | `(height: number, duration: number)` | 键盘高度发生变化的时候触发此事件
click `v0.32.0`| `(trigger: InputTrigger)` | 点击事件。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts)。<br/>`type InputTrigger = 'suffix' \| 'suffix-icon';`<br/>

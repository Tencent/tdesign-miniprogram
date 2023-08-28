---
title: Search 搜索框
description: 用于用户输入搜索信息，并进行页面内容搜索。
spline: form
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-96%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-86%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-96%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-search": "tdesign-miniprogram/search/search"
}
```

## 代码演示

### 01 组件类型

基础搜索框

{{ base }}

获取焦点后显示取消按钮

{{ action }}

### 02 组件样式

搜索框形状

{{ shape }}

### 03 组件状态

默认状态其他对齐方式

{{ other }}

## API
### Search Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
action | String / Slot | '' | 自定义右侧操作按钮文字 | N
center | Boolean | false | 是否居中 | N
disabled | Boolean | false | 是否禁用 | N
cursor-spacing | Number | 0 | 搜索框聚焦时底部与键盘的距离 | N
focus | Boolean | false | 是否聚焦 | N
label | String | '' | 已废弃。左侧文本 | N
maxcharacter | Number | - | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 | N
maxlength | Number | -1 | 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为 -1，不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 | N
confirm-type | String | search | 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />`send` 右下角按钮为“发送”；<br />`search` 右下角按钮为“搜索”；<br />`next` 右下角按钮为“下一个”；<br />`go` 右下角按钮为“前往”；<br />`done` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)。可选项：send/search/next/go/done | N
always-embed | Boolean | false | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | N
confirm-hold | Boolean | false | 点击键盘右下角按钮时是否保持键盘不收起 | N
cursor | Number | - | 必需。指定 focus 时的光标位置 | Y
selection-start | Number | -1 | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | N
selection-end | Number | -1 | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | N
adjust-position | Boolean | true | 键盘弹起时，是否自动上推页面 | N
hold-keyboard | Boolean | false | focus时，点击页面的时候不收起键盘 | N
placeholder-style | String | - | 必需。指定 placeholder 的样式 | Y
placeholder-class | String | input-placeholder | 指定 placeholder 的样式类 | N
left-icon | String / Slot | 'search' | 左侧图标 | N
placeholder | String | '' | 占位符 | N
right-icon | String / Slot | 'close-circle-filled' | 已废弃。右侧图标 | N
clearable | Boolean | true | 是否启用清除控件 | N
shape | String | 'square' | 搜索框形状。可选项：square/round | N
value | String | '' | 值 | N
type | String | 'text' | 拉起键盘的类型，可选项：text/number/idcard/digit/nickname | N

### Search Events

名称 | 参数 | 描述
-- | -- | --
action-click | `({})` | 点击右侧操作按钮文字时触发
blur | `({ value: string })` | 失去焦点时触发
change | `({ value: string })` | 值发生变化时触发
clear | `({ value: string })` | 点击清除时触发
focus | `({ value: string })` | 聚焦时触发
submit | `({ value: string })` | 提交时触发

### Search 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-input-container | 输入框容器样式类
t-class-input | 输入框样式类
t-class-action | 操作按钮样式类
t-class-left | 左侧图标样式类
t-class-clear | 右侧图标样式类

### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-search-action-color | @brand-color | - 
--td-search-bg-color | @bg-color-secondarycontainer | - 
--td-search-clear-icon-color | @font-gray-3 | - 
--td-search-font-size | @font-size-m | - 
--td-search-height | 80rpx | - 
--td-search-icon-color | @font-gray-3 | - 
--td-search-label-color | @font-gray-1 | - 
--td-search-padding | 16rpx 24rpx | - 
--td-search-placeholder-color | @font-gray-3 | - 
--td-search-square-radius | @radius-default | - 
--td-search-text-color | @font-gray-1 | - 

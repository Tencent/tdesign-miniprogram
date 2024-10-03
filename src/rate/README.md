---
title: Rate 评分
description: 用于对某行为/事物进行打分。
spline: form
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-50%25-red" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
{
  "usingComponents": {
    "t-rate": "tdesign-miniprogram/rate/rate"
  }
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/J86K2imu7tSh" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 组件类型

实心评分

{{ base }}

自定义评分

{{ custom }}

自定义评分数量

{{ count }}

带描述评分

{{ show-text }}

### 组件状态

{{ action }}

### 组件样式

评分大小

{{ size }}

设置评分颜色

{{ color }}

### 特殊样式

竖向带描述评分

{{ special }}

自定义图片前缀

{{iconPrefix}}


## API

### Rate Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
allow-half | Boolean | false | 是否允许半选 | N
color | String / Array | '#ED7B2F' | `0.30.0`。评分图标的颜色，样式中默认为 #ED7B2F。一个值表示设置选中高亮的五角星颜色，示例：[选中颜色]。数组则表示分别设置 选中高亮的五角星颜色 和 未选中暗灰的五角星颜色，[选中颜色，未选中颜色]。示例：['#ED7B2F', '#E3E6EB']。TS 类型：`string \| Array<string>` | N
count | Number | 5 | 评分的数量 | N
disabled | Boolean | undefined | 是否禁用评分 | N
gap | String / Number | 8 | 评分图标的间距 | N
icon | String / Array | - | `0.30.0`。自定义评分图标，[选中图标，未选中图标]。TS 类型：`string \| string[]` | N
icon-prefix | String | undefined | 定义图标前缀 | N
placement | String | top | 选择评分弹框的位置，值为空字符表示不显示评分弹框。可选项：top / bottom / '' | N
show-text | Boolean | false | 是否显示对应的辅助文字 | N
size | String | 24px | 评分图标的大小 | N
texts | Array | [] | 评分等级对应的辅助文字。组件内置默认值为：['极差', '失望', '一般', '满意', '惊喜']。自定义值示例：['1分', '2分', '3分', '4分', '5分']。TS 类型：`Array<string>` | N
value | Number | 0 | 选择评分的值 | N
default-value | Number | undefined | 选择评分的值。非受控属性 | N
variant | String | outline | 已废弃。形状类型，有描边类型和填充类型两种。可选项：outline/filled | N

### Rate Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: number)` | 评分数改变时触发
### Rate External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-icon | 图标样式类
t-class-text | 文本样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-rate-icon-scale | 1.33 | - 
--td-rate-selected-color | @warning-color | - 
--td-rate-text-active-color | @font-gray-1 | - 
--td-rate-text-active-font-weight | 600 | - 
--td-rate-text-color | @font-gray-4 | - 
--td-rate-text-font-size | @font-size-m | - 
--td-rate-unselected-color | @bg-color-secondarycomponent | -
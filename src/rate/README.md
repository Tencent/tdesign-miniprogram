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

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
allow-half | Boolean | false | 是否允许半选 | N
color | String / Array | '#ED7B2F' | `0.30.0`。评分图标的颜色，样式中默认为 #ED7B2F。一个值表示设置选中高亮的五角星颜色，示例：[选中颜色]。数组则表示分别设置 选中高亮的五角星颜色 和 未选中暗灰的五角星颜色，[选中颜色，未选中颜色]。示例：['#ED7B2F', '#E3E6EB']。TS 类型：`string \| Array<string>` | N
count | Number | 5 | 评分的数量 | N
disabled | Boolean | - | 是否禁用评分 | N
gap | Number | 8 | 评分图标的间距 | N
icon | String / Array | - | `0.30.0`。自定义评分图标，[选中图标，未选中图标]。TS 类型：`string \| string[]` | N
show-text | Boolean | false | 是否显示对应的辅助文字 | N
size | String | 24px | 评分图标的大小 | N
texts | Array | [] | 评分等级对应的辅助文字。组件内置默认值为：['极差', '失望', '一般', '满意', '惊喜']。自定义值示例：['1分', '2分', '3分', '4分', '5分']。TS 类型：`Array<string>` | N
value | Number | 0 | 选择评分的值 | N
default-value | Number | undefined | 选择评分的值。非受控属性 | N
placement | String | top | 选择评分弹框的位置。可选项：top / bottom | N
iconPrefix | String | undefined | 定义图标前缀 
variant | String | outline | 废弃。形状类型，有描边类型和填充类型两种。可选项：outline/filled | N

### Rate Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: number)` | 评分数改变时触发

### Rate 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-icon` | 图标样式类
t-class-text | 文本样式类

### CSS 变量
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

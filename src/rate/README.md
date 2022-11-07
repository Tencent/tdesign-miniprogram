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
### 主题定制
CSS 变量名|说明
--|--
--td-rate-selected-color | 选中态评分颜色
--td-rate-unselected-color | 未选中态评分颜色
--td-rate-text-color | 辅助文字颜色
--td-rate-disabled-color | 禁用评分颜色

## 代码演示

<img src="https://tdesign.gtimg.com/miniprogram/readme/rate.png" width="375px" height="50%">

### 实心评分

{{ base }}

### 空心评分

{{ un-filled }}

### 自定义评分数量

{{ count }}

### 半星评分

{{ allow-half }}

### 带描述评分

{{ show-text }}

### 禁用评分

{{ disabled }}

### 设置评分颜色

{{ aolor }}

### 评价规格

{{ size }}

## API
### Rate Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
allow-half | Boolean | false | 是否允许半选 | N
count | Number | 5 | 评分的数量 | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
disabled | Boolean | false | 是否禁用评分 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层类名、评分图标类名、辅助文字类名。。`['t-class', 't-class-icon', 't-class-text']` | N
gap | Number | 8 | 评分图标的间距，默认单位为 `px`, 示例：`8` | N
show-text | Boolean | false | 是否显示对应的辅助文字 | N
size | String | 20 | 评分图标的大小，默认单位为 `px`，示例：`20` | N
texts | Array | [] | 评分等级对应的辅助文字。组件内置默认值为：['极差', '失望', '一般', '满意', '惊喜']。自定义值示例：['1分', '2分', '3分', '4分', '5分']。TS 类型：`Array<string>` | N
value | Number | 0 | 选择评分的值 | N
default-value | Number | undefined | 选择评分的值。非受控属性 | N
variant | String | outline | 形状类型，有描边类型和填充类型两种。可选项：outline/filled | N

### Rate Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: number)` | 评分数改变时触发

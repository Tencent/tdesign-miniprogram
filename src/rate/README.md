---
title: Rate 评分
description: 用于对某行为/事物进行打分。
spline: form
isComponent: true
---

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

### 基础评分

<img src="https://tdesign.gtimg.com/miniprogram/readme/rate.png" width="375px" height="50%">

```html
<!-- 实心评分，设置属性：variant-->
<t-rate defaultValue="{{value}}" variant="filled"></t-rate>

<!-- 空心评分，设置属性：variant-->
<t-rate defaultValue="{{value}}" variant="outline"  bind:change="changeValue"></t-rate>

<!-- 自定义评分数量，设置属性：count-->
<t-rate defaultValue="{{value}}" variant="outline" count="{{6}}"></t-rate>

<!-- 半星评分，设置属性：allowHalf -->
<t-rate defaultValue="{{value}}" variant="filled" allowHalf></t-rate>

<!-- 带描述评分，设置属性：showText-->
<t-rate defaultValue="{{value}}" variant="outline" showText></t-rate>

<!-- 自定义带描述评分，设置属性：texts -->
<t-rate defaultValue="{{value}}" variant="outline" showText texts="{{texts}}"></t-rate>

<!-- 禁用评分，设置属性：disabled -->
<t-rate defaultValue="{{value}}" variant="filled" disabled></t-rate>

<!-- 设置评分颜色，设置属性： color-->
<t-rate defaultValue="{{value}}" variant="filled" color="#FFC51C,#DDDDDD"></t-rate>
```

### 受控用法

```html
<t-rate value="{{value}}" variant="filled" bind:change="onChange"></t-rate>
```

```js
Page({
  data: {
    value: 3
  },
  onChange(e) {
    const { value } = e.detail;
    this.setData({ value })
  }
})
```
## API
### Rate Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
allow-half | Boolean | false | 是否允许半选 | N
color | String / Array | '#ED7B2F' | 评分图标的颜色，样式中默认为 #ED7B2F。一个值表示设置选中高亮的五角星颜色，示例：[选中颜色]。数组则表示分别设置 选中高亮的五角星颜色 和 未选中暗灰的五角星颜色，[选中颜色，未选中颜色]。示例：['#ED7B2F', '#E3E6EB']。TS 类型：`string | Array<string>` | N
count | Number | 5 | 评分的数量 | N
disabled | Boolean | false | 是否禁用评分 | N
gap | Number | 6 | 评分图标的间距 | N
show-text | Boolean | false | 是否显示对应的辅助文字 | N
size | String | - | 评分图标的大小，示例：`20` | N
texts | Array | [] | 评分等级对应的辅助文字。组件内置默认值为：['极差', '失望', '一般', '满意', '惊喜']。自定义值示例：['1分', '2分', '3分', '4分', '5分']。TS 类型：`Array<string>` | N
value | Number | 0 | 选择评分的值 | N
default-value | Number | undefined | 选择评分的值。非受控属性 | N
variant | String | outline | 形状类型，有描边类型和填充类型两种。可选项：outline/filled | N

### Rate Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: number)` | 评分数改变时触发

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
<t-rate size="{{48}}" value="{{3}}" variant="filled" bind:change="onChange"></t-rate>
```

## API

### Rate Props

| 名称       | 类型    | 默认值  | 说明                                                                                                                                                                      | 必传 |
| ---------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| allow-half | Boolean | false   | 是否允许半选                                                                                                                                                              | N    |
| color      | String  | #ED7B2F | 评分图标的颜色，样式中默认为 #ED7B2F。一个值表示设置选中高亮的五角星颜色，两个值表示分别设置 选中高亮的五角星颜色 和 未选中暗灰的五角星颜色。示例：['#ED7B2F', '#999999'] | N    |
| count      | Number  | 5       | 评分的数量                                                                                                                                                                | N    |
| disabled   | Boolean | false   | 是否禁用评分                                                                                                                                                              | N    |
| gap        | Number  | 6       | 评分图标的间距                                                                                                                                                            | N    |
| showText   | Boolean | false   | 是否显示辅助文字                                                                                                                                                          | N    |
| size       | String  | 40      | 评分图标的大小                                                                                                                                                            | N    |
| texts      | Array   | -       | 自定义评分等级对应的辅助文字，组件内部默认为：['极差', '失望', '一般', '满意', '惊喜']。TS 类型：`Array<string>`                                                          | N    |
| value      | Number  | -       | 选择评分的值                                                                                                                                                              | Y    |
| variant    | String  | outline | 形状类型，有描边类型和填充类型两种。可选项：`outline`/`filled`                                                                                                            | N    |

### Rate Events

| 名称   | 参数              | 描述             |
| ------ | ----------------- | ---------------- |
| change | `(value: number)` | 评分数改变时触发 |

### rate 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| t-class | 根节点样式类 |

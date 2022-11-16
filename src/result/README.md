---
title: Result 结果
description: 反馈结果状态。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-93%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-93%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-25%25-red" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-result": "tdesign-miniprogram/result/result"
}
```

### 主题定制

CSS 变量名|说明
--|--
--td-result-icon-default-color ｜ 默认状态图标颜色
--td-result-icon-success-color ｜ 成功状态图标颜色
--td-result-icon-warning-color ｜ 警示状态图标颜色
--td-result-icon-error-color ｜ 失败状态图标颜色
--td-result-title-font-size | 标题文字大小
--td-result-title-line-height | 标题行高
--td-result-title-color | 标题颜色
--td-result-title-margin-top | 标题内容上边距
--td-result-description-font-size | 描述文字大小
--td-result-description-line-height | 描述行高;
--td-result-description-margin-top | 描述内容上边距
--td-result-description-color | 描述颜色

## 代码演示

### 结果状态

{{ theme }}

### 自定义结果

{{ custom }}

## API
### Result Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
description | String / Slot | - | 描述文字 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层类名、文本描述类名、图片类名、操作按钮类名。`['t-class', 't-class-image', 't-class-title', 't-class-description']` | N
icon | String | - | 图标名称 | N
icon-props | Object | {} | 图标属性，透传至 icon | N
image | String / Slot | - | 图片地址 | N
theme | String | default | 内置主题。可选项：default/success/warning/error | N
title | String / Slot | '' | 标题 | N

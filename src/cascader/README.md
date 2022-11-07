---
title: Cascader 级联选择器
description: 级联选择器适用于有清晰层级结构的数据集合，用户可以通过逐级查看并选择。
spline: form
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-cascader": "tdesign-miniprogram/cascader/cascader"
}
```

## 主题定制

CSS 变量名|说明
--|--
--td-cascader-active-color | 激活时颜色
--td-cascader-title-color | 标题颜色
--td-cascader-options-title-color | 次标题颜色
--td-cascader-border-color | 步骤条下方边框颜色
--td-cascader-step-arrow-color | 步骤条箭头颜色

## 代码演示

### 基础用法

{{ base }}

### 选项卡风格

{{ theme-tab }}

### 进阶

#### 带初始值

{{ with-value }}

#### 自定义 keys

{{ keys }}

#### 使用次级标题

{{ with-title }}

## API
### Cascader Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
close-btn | Boolean / Slot | true | 关闭按钮 | N
keys | Object | - | 用来定义 value / label 在 `options` 中对应的字段别名。TS 类型：`KeysType` | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
options | Array | [] | 可选项数据源。TS 类型：`Array<CascaderOption>` | N
sub-titles | Array | [] | 每级展示的次标题。TS 类型：`Array<string>` | N
theme | String | 'step' | 展示风格。可选项：step/tab | N
title | String / Slot | - | 标题 | N
value | String / Number | null | 选项值 | N
default-value | String / Number | undefined | 选项值。非受控属性 | N
visible | Boolean | false | 是否展示 | N

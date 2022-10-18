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

## 代码演示

### 基础用法

{{ base }}

## API
### Cascader Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
close-btn | Boolean / Slot | true | 关闭按钮 | N
options | Array | [] | 可选项数据源。TS 类型：`Array<CascaderOption>` | N
title | String / Slot | - | 标题 | N
value | String / Number | - | 选项值 | N
default-value | String / Number | undefined | 选项值。非受控属性 | N
visible | Boolean | false | 是否展示 | N

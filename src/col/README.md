---
title: Layout 布局
description: 以规则的网格阵列来指导和规范页面中的版面布局以及信息分布，提高界面内布局的一致性，节约成本。
spline: base
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-row": "tdesign-miniprogram/row/row",
  "t-col": "tdesign-miniprogram/col/col"
}
```

## 代码演示

### 组件类型

基础

{{ base }}


增加间距

{{ offset }}



## API
### Col Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
offset | String / Number | - | 列的偏移量（默认单位px） | N
span | String / Number | - | 列的宽度（默认单位px） | N

### Row Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
gutter | String / Number | - | 列之间的间距（默认单位px） | N

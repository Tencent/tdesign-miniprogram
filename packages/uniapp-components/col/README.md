---
title: Layout 布局
description: 以规则的网格阵列来指导和规范页面中的版面布局以及信息分布，提高界面内布局的一致性，节约成本。
spline: base
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。


```js
import TRow from '@tdesign/uniapp/row/row.vue';
import TCol from '@tdesign/uniapp/col/col.vue';
```

### 组件类型

基础

{{ base }}


增加间距

{{ offset }}



## API

### Col Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
offset | String / Number | - | 列的偏移量（默认单位px） | N
span | String / Number | - | 列的宽度（默认单位px） | N

### Col Slots

名称 | 描述
-- | --
\- | 默认插槽，列内容


### Row Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
gutter | String / Number | - | 列之间的间距（默认单位px） | N

### Row Slots

名称 | 描述
-- | --
\- | 默认插槽，行内容

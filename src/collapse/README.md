---
title: Collapse 折叠面板
description: 用于对复杂区域进行分组和隐藏 常用于订单信息展示等
spline: data
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-collapse": "tdesign-miniprogram/collapse/collapse",
  "t-collapse-panel": "tdesign-miniprogram/collapse/collapse-panel"
}
```

## 代码演示

## API

### Collapse Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
default-expand-all | Boolean | false | 默认是否展开全部 | N
disabled | Boolean | - | 是否禁用面板展开/收起操作 | N
expand-icon | Boolean / Slot | - | 展开图标。值为 undefined 或 false 则不显示展开图标；值为 true 显示默认图标；值类型为函数，则表示完全自定义展开图标 | N
expand-mutex | Boolean | false | 每个面板互斥展开，每次只展开一个面板 | N
value | String / Number / Array | - | 展开的面板集合。TS 类型：`CollapseValue` `type CollapseValue = string | number | Array<CollapseValue>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/collapse/type.ts) | N
default-value | String / Number / Array | undefined | 展开的面板集合。非受控属性。TS 类型：`CollapseValue` `type CollapseValue = string | number | Array<CollapseValue>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/collapse/type.ts) | N

### Collapse Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: CollapseValue)` | 切换面板时触发，返回变化的值

### CollapsePanel Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | String / Slot | - | 折叠面板内容 | N
destroy-on-collapse | Boolean | false | 当前面板处理折叠状态时，是否销毁面板内容 | N
disabled | Boolean | undefined | 禁止当前面板展开，优先级大于 Collapse 的同名属性 | N
expand-icon | Boolean / Slot | - | 当前折叠面板展开图标，优先级大于 Collapse 的同名属性 | N
header | String / Slot | - | 面板头内容 | N
header-right-content | String / Slot | - | 面板头的右侧区域，一般用于呈现面板操作 | N
value | String / Number | - | 当前面板唯一标识，如果值为空则取当前面下标兜底作为唯一标识 | N

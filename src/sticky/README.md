---
title: Sticky 吸顶
description: 用于常驻页面顶部的信息、操作展示。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-87%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-90%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-84%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-79%25-red" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-sticky": "tdesign-miniprogram/sticky/sticky"
}
```

## 代码演示

将内容包裹在 `Sticky` 组件内

<img src="https://tdesign.gtimg.com/miniprogram/readme/sticky.gif" width="375px" height="50%">

### 基础吸顶

{{ base }}


### 吸顶距离

{{ offset }}

### 指定容器

{{ container }}



## API
### Sticky Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
container | Function | - | 函数返回容器对应的 NodesRef 节点，将对应节点指定为组件的外部容器，滚动时组件会始终保持在容器范围内，当组件即将超出容器底部时，会返回原位置。 | N
disabled | Boolean | false | 是否禁用组件 | N
offset-top | String / Number | 0 | 吸顶时与顶部的距离，单位`px` | N
z-index | Number | 99 | 吸顶时的 z-index | N

### Sticky Events

名称 | 参数 | 描述
-- | -- | --
scroll | `(detail: { scrollTop: number, isFixed: boolean })` | 滚动时触发，scrollTop: 距离顶部位置，isFixed: 是否吸顶

### Sticky 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-content | 内容样式类

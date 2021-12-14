---
title: Sticky 吸顶容器
description: 用于常驻页面顶部的信息、操作展示。
spline: data
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-sticky": "tdesign-miniprogram/sticky/sticky"
}
```

## 代码演示

### 基础吸顶容器

将内容包裹在 `Sticky` 组件内

<img src="https://tdesign.gtimg.com/miniprogram/readme/sticky.gif" width="375px" height="50%">

```html
<t-sticky offset-top="{{40}}">
  <t-button class="box2" theme="danger" t-class="inner-box" size="small">吸顶距离</t-button>
</t-sticky>
```

## API

### Sticky Props

| 名称             | 类型     | 默认值 | 说明                                                                                                                                         | 必传 |
| ---------------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| container        | Function | -      | 函数返回容器对应的 NodesRef 节点，将对应节点指定为组件的外部容器，滚动时组件会始终保持在容器范围内，当组件即将超出容器底部时，会返回原位置。 | N    |
| disabled         | Boolean  | false  | 是否禁用组件                                                                                                                                 | N    |
| external-classes | Array    | -      | 根结点外部样式。`['t-class']`                                                                                                                | N    |
| offset-top       | Number   | 0      | 吸顶时与顶部的距离，单位`px`                                                                                                                 | N    |
| z-index          | Number   | 99     | 吸顶时的 z-index                                                                                                                             | N    |

### Sticky Events

| 名称   | 参数                                                | 描述                                                   |
| ------ | --------------------------------------------------- | ------------------------------------------------------ |
| scroll | `(detail: { scrollTop: number, isFixed: boolean })` | 滚动时触发，scrollTop: 距离顶部位置，isFixed: 是否吸顶 |

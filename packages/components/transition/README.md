---
title: Transition 过渡
description: 过渡组件。
spline: message
isComponent: true
---

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-transition": "tdesign-miniprogram/transition/transition"
}
```

## 用法

### 组件方式

```xml
<!-- page.wxml -->
<t-transition
  name="transition-class"
  visible="{{ visible }}"
>
  <view class="block" style="width: 100px; height: 100px; background: red;"></view>
</t-transition>
```

## API

### Transition Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
appear | Boolean | false | 首次出现是否展示动画 | N
destory-on-hide | Boolean | false | 隐藏时是否销毁内容 | N
durations | Number / Array | - | 指定过渡时间。TS 类型：`number \| number[]` | N
name | String | t-transition | 过渡类名 | N
visible | Boolean | false | 是否显示 | N

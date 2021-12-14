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

### `<transition>` 组件

组件路径：`tdesign-miniprogram/transition/transition`

### 过渡类名

过渡类名指定格式同 vue，enter/enter-to leave/leave-to

#### Props

| 属性          | 值类型           | 默认值         | 说明                        |
| ------------- | ---------------- | -------------- | --------------------------- |
| name          | String           | 't-transition' | 过渡类名，类似 vue 过渡类名 |
| visible       | Boolean          | false          | 是否显示                    |
| customClass   | String           | false          | 自定义容器类名              |
| destoryOnHide | Boolean          | false          | 隐藏之后是否渲染 slot 内容  |
| appear        | Boolean          | false          | 首次出现是否展示动画        |
| durations     | Number / Boolean |                | 手动指定过渡时间            |

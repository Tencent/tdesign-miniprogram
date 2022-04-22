---
title: Switch 开关
description: 用于控制某个功能的开启和关闭。
spline: form
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-switch": "tdesign-miniprogram/switch/switch"
}
```

## 代码演示

### 基础开关

<img src="https://tdesign.gtimg.com/miniprogram/readme/switch.png" width="375px" height="50%">

```html
<!-- page.wxml -->

<!-- 受控用法 -->
<t-switch value="{{value}}" bindchange="onChange"></t-switch>

<!-- 非受控用法 -->
<t-switch defaultValue="{{value}}"></t-switch>
```

## API
### Switch Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
colors | Array | - | 自定义颜色，[打开时的颜色，关闭时的颜色]。组件默认颜色为 ['#0052d9', 'rgba(0, 0, 0, .26']。示例：[blue, gray]。TS 类型：`string[]` | N
custom-value | Array | - | 开关内容，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]。TS 类型：`Array<SwitchValue>` | N
disabled | Boolean | false | 是否禁用组件 | N
label | String | '' | 开关的标签 | N
loading | Boolean | false | 是否处于加载中状态 | N
size | String | medium | 开关尺寸。可选项：small/medium/large | N
value | String / Number / Boolean | undefined | 开关值。TS 类型：`SwitchValue` `type SwitchValue = string | number | boolean`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/switch/type.ts) | N
default-value | String / Number / Boolean | undefined | 开关值。非受控属性。TS 类型：`SwitchValue` `type SwitchValue = string | number | boolean`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/switch/type.ts) | N

### Switch Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: SwitchValue)` | 数据发生变化时触发

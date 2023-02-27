---
title: Slider 滑动选择器
description: 用于选择横轴上的数值、区间、档位。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-95%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-82%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-slider": "tdesign-miniprogram/slider/slider"
}
```

## 代码演示

<img src="https://tdesign.gtimg.com/miniprogram/readme/slider.png" width="375px" height="50%">

### 组件类型

单游标滑块

{{ base }}

双游标滑块

{{ range }}

带数值滑动选择器

{{ label }}

带刻度滑动选择器

{{ step }}

### 组件状态

滑块禁用状态

{{ disabled }}

#### 特殊样式

胶囊型滑块

{{ capsule }}

## API
### Slider Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
colors | Array | [] | 废弃。颜色，[已选择, 未选择]。TS 类型：`Array<string>` | N
disabled | Boolean | false | 是否禁用组件 | N
disabled-color | Array | [] | 废弃。禁用状态滑动条的颜色，[已选, 未选]。TS 类型：`Array<string>` | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层元素、滑道底部、滑道激活态、滑道禁用态、游标 等元素类名。`['t-class', 't-class-bar', 't-class-bar-active', 't-class-bar-disabled', 't-class-cursor']` | N
label | String / Boolean | false | 滑块当前值文本。<br />值为 true 显示默认文案；值为 false 不显示滑块当前值文本；<br />值为 `${value}%` 则表示组件会根据占位符渲染文案；<br />值类型为函数时，参数 `value` 标识滑块值，参数 `position=start` 表示范围滑块的起始值，参数 `position=end` 表示范围滑块的终点值。TS 类型：`string \| boolean` | N
marks | Object / Array | {} | 刻度标记，示例：`[0, 10, 40, 200]` 或者 `{ 5:  '5¥', 10: '10%' }`。TS 类型：`Record<number, string> \| Array<number>` | N
max | Number | 100 | 滑块范围最大值 | N
min | Number | 0 | 滑块范围最小值 | N
range | Boolean | false | 双游标滑块 | N
show-extreme-value | Boolean | false | 是否边界值 | N
step | Number | 1 | 步长 | N
theme | String | default | `0.30.0`。滑块风格。可选项：default/capsule | N
value | Number / Array | 0 | 滑块值。TS 类型：`SliderValue` `type SliderValue = number \| Array<number>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/slider/type.ts) | N
default-value | Number / Array | undefined | 滑块值。非受控属性。TS 类型：`SliderValue` `type SliderValue = number \| Array<number>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/slider/type.ts) | N

### Slider Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: SliderValue)` | 滑块值变化时触发
dragend | \- | 结束拖动时触发
dragstart | \- | 开始拖动时触发

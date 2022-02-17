---
title: CountDown 倒计时
description: 用于实时展示倒计时数值。
spline: data
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-count-down": "tdesign-miniprogram/count-down/count-down"
}
```

## 代码演示

### 基础倒计时

动态倒计时间主要有时间数字和时分秒分割组成，尺寸可通过 class 进行控制

<img src="https://tdesign.gtimg.com/miniprogram/readme/countdown.png" width="375px" height="50%">

```html
<!-- 时分秒毫秒 -->
<t-count-down time="{{96 * 60 * 1000}}" />

<!-- 带毫秒 -->
<t-count-down format="HH:mm:ss:SSS" time="{{96 * 60 * 1000}}" millisecond />

<!-- 带方形底 -->
<t-count-down content="default" time="{{96 * 60 * 1000}}" theme="square" />

<!-- Large 带方形底 -->
<t-count-down content="default" time="{{96 * 60 * 1000}}" theme="square" size="large" />

<!-- 自定义内容 -->
<t-count-down
  t-class="custom-theme"
  content="slot"
  time="{{96 * 60 * 1000}}"
  bind:change="onChange"
>
  <text class="item">{{timeData.hours}}</text>
  <text class="item-dot">:</text>
  <text class="item">{{timeData.minutes}}</text>
  <text class="item-dot">:</text>
  <text class="item">{{timeData.seconds}}</text>
</t-count-down>
```

```js
onChange(e) {
  this.setData({
    timeData: e.detail,
  });
},
```

## API
### CountDown Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
auto-start | Boolean | true | 是否自动开始倒计时 | N
content | String / Slot | 'default' | 最终倒计时的展示内容，值为'default'时使用默认的格式，否则使用自定义样式插槽 | N
format | String | HH:mm:ss | 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒 | N
millisecond | Boolean | false | 是否开启毫秒级渲染 | N
size | String | 'small' | 倒计时尺寸。可选项：small/medium/large `v0.5.1` | N
split-with-unit | Boolean | false | 使用时间单位分割 `v0.5.1` | N
theme | String | 'default' | 倒计时风格。可选项：default/round/square `v0.5.1` | N
time | Number | - | 必需。倒计时时长，单位毫秒 | Y

### CountDown Events

名称 | 参数 | 描述
-- | -- | --
change | `(time: TimeData)` | 时间变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/count-down/type.ts)。<br/>`interface TimeData {  days: number; hours: number; minutes: number; seconds: number; milliseconds: number }`<br/>
finish | - | 倒计时结束时触发

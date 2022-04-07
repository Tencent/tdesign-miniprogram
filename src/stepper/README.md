---
title: Stepper 步进器
description: 用于数量的增减。
spline: form
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-stepper": "tdesign-miniprogram/stepper/stepper"
}
```

## 代码演示

### 带单位的步进器

<img src="https://tdesign.gtimg.com/miniprogram/readme/stepper.png" width="375px" height="50%">

```html
<t-cell title="标题文字（单位）">
  <view class="cell-badge-wrap" slot="right-icon">
    <t-stepper defaultValue="0" step="2" />
  </view>
</t-cell>
```

### 受控用法

```html
<t-stepper value="{{value}}" bind:change="handleChange" />
```

```js
Page({
  data: {
    value: 0
  },
  handleChange(e) {
    this.setData({ value: e.detail.value })
  }
})
```
## API
### Stepper Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
disabled | Boolean | false | 禁用全部操作 | N
disable-input | Boolean | false | 禁用输入框 | N
external-classes | Array | - | 组件类名，分别用于表示组件外层元素、输入框、右侧递增号、左侧递减号等元素类名。`['t-class', 't-class-input', 't-class-add', 't-class-minus']` | N
input-width | Number | - | 输入框宽度 | N
max | Number | 100 | 最大值 | N
min | Number | 0 | 最小值 | N
step | Number | 1 | 步长 | N
theme | String | normal | 组件风格。可选项：normal/grey | N
value | String / Number | 0 | 值 | N
default-value | String / Number | undefined | 值。非受控属性 | N

### Stepper Events

名称 | 参数 | 描述
-- | -- | --
blur | `({ type: string | number })` | 输入框失去焦点时触发
change | `({ value: string | number })` | 数值发生变更时触发
overlimit | `({type: 'minus' | 'plus'})` | 数值超出限制时触发

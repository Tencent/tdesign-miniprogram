---
title: Radio 单选框
description: 用于在预设的一组选项中执行单项选择，并呈现选择结果。
spline: form
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-radio": "tdesign-miniprogram/radio/radio",
  "t-radio-group": "tdesign-miniprogram/radio-group/radio-group"
}
```

## 代码演示

### 单个单选框

```html
<!-- 非受控用法 -->
<t-radio label="单选" />
<t-radio defaultChecked="{{true}}" label="单选" />

<!-- 受控用法 -->
<t-radio checked="{{checked}}" bind:change="handleChange" label="单选" />
```

```js
Page({
  data: {
    checked: false,
  },
  handleChange(e) {
    this.setData({
      checked: e.detail.checked,
    });
  },
})
```

### 组合单选框

<img src="https://tdesign.gtimg.com/miniprogram/readme/radio.png" width="375px" height="50%">

```html
<t-radio-group bind:change="onChange" defaultValue="radio1">
  <t-radio value="radio1" label="单选" />
  <t-radio value="radio2" label="单选" />
  <t-radio value="radio3" label="单选" />
  <t-radio value="radio4" label="单选" />
</t-radio-group>
```

### 受控用法

```html
<t-radio-group bind:change="onChange" value="{{value}}">
  <t-radio value="radio1" label="单选" />
  <t-radio value="radio2" label="单选" />
</t-radio-group>
```

```js
Page({
  data: {
    value: 'radio1'
  },
  onChange(e) {
    const { value } = e.detail;

    this.setData({
      value
    })
  }
})
```

### 使用 options

```html
<t-radio-group options="{{options}}" defaultValue="数字" bind:change="onChange"></t-radio-group>
```

```js
Page({
  data: {
    options: [
      'string', // => { label: 'string', value: 'string', disabled: false }
      'number', // => { label: 'number', value: 'number', disabled: false }
      { label: '对象', value: 'object', disabled: true },
    ],
  },
  onChange(e) {
    console.log(e.detail.value)
  }
})
```

## API
### Radio Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | left | 复选框和内容相对位置。可选项：left/right | N
allow-uncheck | Boolean | false | 【开发中】是否允许取消选中 | N
checked | Boolean | false | 是否选中 | N
default-checked | Boolean | undefined | 是否选中。非受控属性 | N
color | String | #0052d9 | 单选按钮颜色 | N
content | String / Slot | - | 单选内容 | N
content-disabled | Boolean | false | 是否禁用组件内容（content）触发选中 | N
disabled | Boolean | undefined | 是否为禁用态 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层、单选图标、主文案、内容 等元素类名。`['t-class', 't-class-icon', 't-class-label', 't-class-content', 't-class-border']` | N
icon | String / Array | 'fill-circle' | 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。值为 fill-circle 表示图标为填充型图标，值为 stroke-line 表示图标为描边型图标。TS 类型：`'fill-circle' | 'stroke-line' | Array<string>` | N
label | String / Slot | - | 主文案 | N
max-content-row | Number | 5 | 内容最大行数限制 | N
max-label-row | Number | 3 | 主文案最大行数限制 | N
name | String | - | HTML 元素原生属性 | N
value | String / Number / Boolean | false | 单选按钮的值。TS 类型：`RadioValue` `type RadioValue = string | number | boolean`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/radio/type.ts) | N

### Radio Events

名称 | 参数 | 描述
-- | -- | --
change | `(checked: boolean)` | 值变化时触发

### RadioGroup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
disabled | Boolean | undefined | 是否禁用全部子单选框 | N
name | String | - | HTML 元素原生属性 | N
options | Array | - | 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同。TS 类型：`Array<RadioOption>` `type RadioOption = string | number | RadioOptionObj` `interface RadioOptionObj { label?: string; value?: string | number; disabled?: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/radio/type.ts) | N
value | String / Number / Boolean | false | 选中的值。TS 类型：`RadioValue` | N
default-value | String / Number / Boolean | undefined | 选中的值。非受控属性。TS 类型：`RadioValue` | N

### RadioGroup Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: RadioValue)` | 选中值发生变化时触发

---
title: Checkbox 复选框
description: 用于预设的一组选项中执行多项选择，并呈现选择结果。
spline: form
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-checkbox": "tdesign-miniprogram/checkbox/checkbox"
}
```

## 代码演示

### 基础复选框

<img src="https://tdesign.gtimg.com/miniprogram/readme/checkbox.png" width="375px" height="50%">

```html
<t-checkbox-group value="{{demoCheckbox1}}" bind:change="onChange">
  <t-checkbox value="checkbox1" label="多选" />
  <t-checkbox value="checkbox2" label="多选" />
  <t-checkbox value="checkbox3" label="多选" />
  <t-checkbox
    value="checkbox4"
    label="多选多选多选多选多选多选多选多选多选多选多选多选多选多选多选多选多选选多选多选多选多选"
    max-label-row="2"
  ></t-checkbox>
  <t-checkbox value="checkbox5" label="多选" max-content-row="2">
    多选多选多选多选多选多选多选多选多选多选多选多选多选多选多选多选多选选多选多选多选选多选多选多选多选
  </t-checkbox>
</t-checkbox-group>
```

```js
Page({
  data: {
    demoCheckbox1: ['checkbox2', 'checkbox3'],
  },
  onChange(event) {
    console.log('checkbox', event.detail);
  },
});
```

## API
### CheckboxGroup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
disabled | Boolean | false | 是否禁用组件 | N
max | Number | undefined | 支持最多选中的数量 | N
name | String | - | 统一设置内部复选框 HTML 属性 | N
options | Array | [] | 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」。TS 类型：`Array<CheckboxOption>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts) | N
value | Array | [] | 选中值。TS 类型：`CheckboxGroupValue`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts) | N

### CheckboxGroup Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: CheckboxGroupValue)` | 值变化时触发

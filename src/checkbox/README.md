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
  "t-checkbox": "tdesign-miniprogram/checkbox/checkbox",
  "t-checkbox-group": "tdesign-miniprogram/checkbox-group/checkbox-group"
}
```

## 代码演示

### 基础复选框

<img src="https://tdesign.gtimg.com/miniprogram/readme/checkbox.png" width="375px" height="50%">

```html
<t-checkbox-group defaultValue="{{demoCheckbox1}}" bind:change="onChange">
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

 <t-checkbox defaultChecked="{{true}}" label="多选" />
```

```js
Page({
  data: {
    demoCheckbox1: ['checkbox2', 'checkbox3'],
  },
  onChange(event) {
    console.log('checkbox', event.detail.value);
  },
});
```

## API
### Checkbox Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | left | 多选框和内容相对位置。可选项：left/right | N
check-all | Boolean | false | 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用 | N
checked | Boolean | false | 是否选中 | N
default-checked | Boolean | undefined | 是否选中。非受控属性 | N
color | String | #0052d9 | 多选框颜色 | N
content | String / Slot | - | 多选框内容 | N
content-disabled | Boolean | - | 是否禁用组件内容（content）触发选中 | N
disabled | Boolean | undefined | 是否禁用组件 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层、多选框图标、主文案、内容 等元素类名。`['t-class', 't-class-icon', 't-class-label', 't-class-content', 't-class-border']` | N
icon | Array | - | 自定义选中图标和非选中图标。示例：[选中态图标地址，非选中态图标地址]。TS 类型：`Array<string>` | N
indeterminate | Boolean | false | 是否为半选 | N
label | String / Slot | - | 主文案 | N
max-content-row | Number | 5 | 内容最大行数限制 | N
max-label-row | Number | 3 | 主文案最大行数限制 | N
name | String | - | HTML 元素原生属性 | N
readonly | Boolean | false | 只读状态 | N
value | String / Number | - | 多选框的值。TS 类型：`string | number` | N

### Checkbox Events

名称 | 参数 | 描述
-- | -- | --
change | `(checked: boolean)` | 值变化时触发

### CheckboxGroup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
disabled | Boolean | false | 是否禁用组件 | N
max | Number | undefined | 支持最多选中的数量 | N
name | String | - | 统一设置内部复选框 HTML 属性 | N
options | Array | [] | 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」。TS 类型：`Array<CheckboxOption>` `type CheckboxOption = string | number | CheckboxOptionObj` `interface CheckboxOptionObj { label?: string; value?: string | number; disabled?: boolean; checkAll?: true }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts) | N
value | Array | [] | 选中值。TS 类型：`CheckboxGroupValue` `type CheckboxGroupValue = Array<string | number>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts) | N
default-value | Array | undefined | 选中值。非受控属性。TS 类型：`CheckboxGroupValue` `type CheckboxGroupValue = Array<string | number>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts) | N

### CheckboxGroup Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: CheckboxGroupValue, context: CheckboxGroupChangeContext)` | 值变化时触发。`context.current` 表示当前变化的数据项，如果是全选则为空；`context.type` 表示引起选中数据变化的是选中或是取消选中。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts)。<br/>`interface CheckboxGroupChangeContext { e: Event; current: string | number; option: CheckboxOption | TdCheckboxProps; type: 'check' | 'uncheck' }`<br/>

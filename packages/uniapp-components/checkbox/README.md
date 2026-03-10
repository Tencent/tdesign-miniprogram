---
title: Checkbox 多选框
description: 用于预设的一组选项中执行多项选择，并呈现选择结果。
spline: form
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TCheckbox from '@tdesign/uniapp/checkbox/checkbox.vue';
import TCheckboxGroup from '@tdesign/uniapp/checkbox-group/checkbox-group.vue';
```

### 组件类型

纵向多选框

{{ base }}

横向多选框

{{ horizontal }}

带全选多选框

{{ all }}

### 组件状态

多选框状态

{{ status }}

### 组件样式

勾选样式

{{ type }}

勾选显示位置

{{ right }}

非通栏多选样式

{{ card }}

### 组件规格

多选框尺寸规格

{{ special }}

## API

### Checkbox Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
block | Boolean | true | 是否为块级元素 | N
borderless | Boolean | undefined | 是否开启无边框模式 | N
check-all | Boolean | false | 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用 | N
checked | Boolean | - | 是否选中。支持语法糖 `v-model:checked` | N
default-checked | Boolean | - | 是否选中。非受控属性 | N
content | String | - | 多选框内容 | N
content-disabled | Boolean | - | 是否禁用组件内容（content）触发选中 | N
disabled | Boolean | undefined | 是否禁用组件。如果父组件存在 CheckboxGroup，默认值由 CheckboxGroup.disabled 控制。优先级：Checkbox.disabled > CheckboxGroup.disabled > Form.disabled | N
icon | String / Array | 'circle' | 自定义选中图标和非选中图标。使用 Array 时表示：`[选中态图标，非选中态图标，半选中态图标]`。使用 String 时，值为 circle 表示填充圆形图标、值为 line 表示描边型图标、值为 rectangle 表示填充矩形图标。TS 类型：`'circle' \| 'line' \| 'rectangle' \| string[]` | N
indeterminate | Boolean | false | 是否为半选 | N
label | String | - | 主文案 | N
max-content-row | Number | 5 | 内容最大行数限制 | N
max-label-row | Number | 3 | 主文案最大行数限制 | N
name | String | - | HTML 元素原生属性 | N
placement | String | left | 多选框和内容相对位置。可选项：left/right | N
readonly | Boolean | undefined | 只读状态 | N
relation-key | String | - | -1 时代表独立，不再寻找 parent，用于头条小程序 | N
value | String / Number / Boolean | - | 多选框的值。TS 类型：`string \| number \| boolean` | N

### Checkbox Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { checked: boolean, context: { value: boolean\|number\|string, label: boolean\|number\|string }})` | 值变化时触发。`context` 表示当前点击项内容

### Checkbox Slots

名称 | 描述
-- | --
\- | 默认插槽，主文案
content | 自定义 `content` 显示内容
label | 自定义 `label` 显示内容

### Checkbox External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-border | 边框样式类
t-class-content | 内容样式类
t-class-icon | 图标样式类
t-class-label | 标签样式类


### CheckboxGroup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
borderless | Boolean | false | 是否开启无边框模式。优先级低于 Checkbox.borderless | N
disabled | Boolean | undefined | 是否禁用组件。优先级：Form.disabled < CheckboxGroup.disabled < Checkbox.disabled | N
keys | Object | - | 用来定义 value / label / disabled 在 `options` 中对应的字段别名。TS 类型：`KeysType`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/common/common.ts) | N
max | Number | undefined | 支持最多选中的数量 | N
name | String | - | 统一设置内部复选框 HTML 属性 | N
options | Array | [] | 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」。TS 类型：`Array<CheckboxOption>` `type CheckboxOption = string \| number \| CheckboxOptionObj` `interface CheckboxOptionObj { label?: string; value?: string \| number; disabled?: boolean; checkAll?: true }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/checkbox-group/type.ts) | N
readonly | Boolean | undefined | 只读状态 | N
relation-key | String | - | -1 时代表独立，不再寻找 parent，用于头条小程序 | N
value | Array | - | 选中值。支持语法糖 `v-model:value`。TS 类型：`T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/checkbox-group/type.ts) | N
default-value | Array | - | 选中值。非受控属性。TS 类型：`T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/checkbox-group/type.ts) | N

### CheckboxGroup Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { value: CheckboxGroupValue, context: { value: boolean\|number\|string, label: boolean\|number\|string }})` | 值变化时触发。`context` 表示当前点击项内容

### CheckboxGroup Slots

名称 | 描述
-- | --
\- | 默认插槽，多选框组内容

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-checkbox-bg-color | @bg-color-container | -
--td-checkbox-border-color | @component-stroke | -
--td-checkbox-description-color | @text-color-secondary | -
--td-checkbox-description-disabled-color | @text-color-disabled | -
--td-checkbox-description-font | @font-body-medium | -
--td-checkbox-icon-checked-color | @brand-color | -
--td-checkbox-icon-color | @component-border | -
--td-checkbox-icon-disabled-bg-color | @bg-color-component-disabled | -
--td-checkbox-icon-disabled-color | @brand-color-disabled | -
--td-checkbox-icon-size | 48rpx | -
--td-checkbox-tag-active-bg-color | @brand-color-light | -
--td-checkbox-tag-active-color | @brand-color | -
--td-checkbox-title-color | @text-color-primary | -
--td-checkbox-title-disabled-color | @text-color-disabled | -
--td-checkbox-title-font | @font-body-large | -
--td-checkbox-title-line-height | 48rpx | -
--td-checkbox-vertical-padding | @spacer-2 | -

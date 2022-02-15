---
title: radio-group
description: 组合单选框。
spline: form
isComponent: true
---

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-radio": "tdesign-miniprogram/radio/radio",
  "t-radio-group": "tdesign-miniprogram/radio-group/radio-group"
}
```

## 用法

### 组件方式

```html
<!-- page.wxml -->
<t-radio-group  value="radio1" bind:change="onChange">
  <t-radio title="单行标题" name="radio1" />
  <t-radio title="单行标题" label="辅助信息" name="radio2" />
</t-radio-group>
```

## API

### `<t-radio-group>` 组件

组件路径：`tdesign-miniprogram/radio-group/radio-group`

#### Props

| 属性     | 值类型    | 默认值 | 必传 | 说明                   |
| -------- | --------- | ------ | ---- | ---------------------- |
| value    | `String`  | -      | N    | 当前选中项的标识符     |
| name     | `String`  | -      | N    | 在表单内提交时的标识符 |

### Slots

| 名称 | 说明           |
| ---- | -------------- |
| 默认 | `t-radio` 组件 |

#### Events

| 事件        | event.detail              | 说明                     |
| ----------- | ------------------------- | ------------------------ |
| bind:change | {name:当前选中项的标识符} | 当绑定值变化时触发的事件 |

# checkbox-group

## 介绍

组合多选框

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-checkbox": "@tencent/tdesign-miniprogram/checkbox/checkbox",
  "t-checkbox-group": "@tencent/tdesign-miniprogram/checkbox-group/checkbox-group"
}
```

## 用法

### 组件方式

```html
<!-- page.wxml -->
<t-checkbox-group bordered value="checkbox1" bind:change="onChange">
  <t-checkbox title="单行标题" name="checkbox1" />
  <t-checkbox title="单行标题" label="辅助信息" name="checkbox2" />
</t-checkbox-group>
```

## API

### `<t-checkbox-group>` 组件

组件路径：`@tencent/tdesign-miniprogram/checkbox-group/checkbox-group`

#### Props

| 属性     | 值类型    | 默认值 | 必传 | 说明                   |
| -------- | --------- | ------ | ---- | ---------------------- |
| value    | `Array`  | `[]`     | N    | 当前选中项的标识符     |
| name     | `String`  | -      | N    | 在表单内提交时的标识符 |
| bordered | `Boolean` | `true` | N    | 是否显示外边框         |

### Slots

| 名称 | 说明           |
| ---- | -------------- |
| 默认 | `t-checkbox` 组件 |

#### Events

| 事件        | event.detail              | 说明                     |
| ----------- | ------------------------- | ------------------------ |
| bind:change | {names:当前选中项的标识符} | 当绑定值变化时触发的事件 |

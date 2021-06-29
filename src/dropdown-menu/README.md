# DropdownMenu 下拉菜单

## 介绍

菜单呈现数个并列的选项类目，用于整个页面的内容筛选，由菜单面板和菜单选项组成。

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
   "t-dropdown-item": "@tencent/tdesign-miniprogram/dropdown-menu/dropdown-item"
   "t-dropdown-menu": "@tencent/tdesign-miniprogram/dropdown-menu/dropdown-menu"
}
```

## 用法

### 组件方式

```html
<!-- page.wxml -->
<t-dropdown-menu>
  <t-dropdown-item
    title="单选菜单"
    options="{{optionsS}}"
    value="{{selectedS}}"
    bindselected="singleSelected"
  ></t-dropdown-item>
  <t-dropdown-item
    title="多选菜单"
    options="{{optionsM}}"
    value="{{selectedM}}"
    bindselected="multiSelected"
    selectMode="multi"
  ></t-dropdown-item>
</t-dropdown-menu>
```

## API

### `<t-dropdown-menu>` 组件

组件路径：`@tencent/tdesign-miniprogram/dropdown-menu/dropdown-item`

### DropdownMenu Props

| 属性                   | 类型    | 默认值 | 必传 | 说明                   |
| ---------------------- | ------- | ------ | ---- | ---------------------- |
| duration               | number  | 200    | -    | 展开动画的时长         |
| overlay                | boolean | true   | -    | 展开选单时是否展示遮罩 |
| close-on-click-overlay | boolean | true   | -    | 点击遮罩时是否关闭选单 |

### `<t-dropdown-item>` 组件

组件路径：`@tencent/tdesign-miniprogram/dropdown-menu/dropdown-item`

### DropdownItem Props

| 属性            | 类型                           | 默认值      | 必传 | 说明                                                                 |
| --------------- | ------------------------------ | ----------- | ---- | -------------------------------------------------------------------- |
| value           | `string` / `number` / `&[]`    | -           | -    | 当前选中项的 `value`                                                 |
| title           | `string`                       | -           | √    | 列表标题（多选和树形选单无法根据选中项推断 `title`，必须指定此属性） |
| options         | `{ title, value, options? }[]` | -           | √    | 选项数据（树型结构中，`options` 字段表示子级数据）                   |
| disabled        | boolean                        | `false`     | -    | 是否禁用选单                                                         |
| select-mode     | string                         | `'single'`  | -    | 选取模式：`'single'` 单选 / `'multi'` 多选                           |
| options-layout  | string                         | `'columns'` | -    | 选项布局：`'columns'` 分栏 / `'tree'` 树形                           |
| options-columns | number                         | `1`         | -    | 选项分栏数：`1 ~ 3`（仅在 `options-layout` 为 `'columns'` 时生效）   |

## Events

### DropdownItem Events

| 事件名 | 说明               | 回调参数                    |
| ------ | ------------------ | --------------------------- |
| change | 选项变化时候触发   | `string` / `number` / `&[]` |
| open   | 选单准备展开时触发 | -                           |
| opened | 选单展开完毕时触发 | -                           |
| close  | 选单准备关闭时触发 | -                           |
| closed | 选单关闭完毕时触发 | -                           |

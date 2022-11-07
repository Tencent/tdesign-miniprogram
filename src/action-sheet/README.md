---
title: ActionSheet 动作面板
description: 由用户操作后触发的一种特定的模态弹出框 ，呈现一组与当前情境相关的两个或多个选项。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-89%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-action-sheet": "tdesign-miniprogram/action-sheet/action-sheet",
}
```

## 代码演示

### 基础用法

{{ list }}

### 图标列表型

{{ icon-list }}

### 宫格型

{{ grid }}

### 宫格型-多页

{{ grid-multi }}

### 支持指令调用

```javascript
import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';

// 指令调用不同于组件引用不需要传入visible
const basicListOption: ActionSheetShowOption = {
  theme: ActionSheetTheme.List,
  selector: '#t-action-sheet',
  items: [
    {
      label: '默认选项',
    },
    {
      label: '失效选项',
      disabled: true,
    },
    {
      label: '警告选项',
      color: '#e34d59',
    },
  ],
};

const handler = ActionSheet.show(basicListOption);
```

指令调用的关闭如下

```javascript
handler.close();
```


## API
### ActionSheet Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
cancel-text | String | 取消 | 设置取消按钮的文本 | N
count | Number | 8 | 设置每页展示菜单的数量，仅当 type=grid 时有效 | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
external-classes | Array | - | 组件类名，用于设置组件外层元素类名。。`['t-class', 't-class-image', 't-class-content']` | N
items | Array | - | 必需。菜单项。TS 类型：`Array<string \| ActionSheetItem>` `interface ActionSheetItem {label: string; color?: string; disabled?: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/action-sheet/type.ts) | Y
show-cancel | Boolean | true | 是否显示取消按钮 | N
theme | String | list | 展示类型，列表和表格形式展示。可选项：list/grid | N
visible | Boolean | false | 必需。显示与隐藏 | Y
default-visible | Boolean | false | 必需。显示与隐藏。非受控属性 | Y

### ActionSheet Events

名称 | 参数 | 描述
-- | -- | --
visible-change | `(visible: Boolean)` | 当浮层隐藏或显示时触发。
cancel | \- | 点击取消按钮时触发
selected | `(selected: ActionSheetItem \| string, index: number)` | 选择菜单项时触发

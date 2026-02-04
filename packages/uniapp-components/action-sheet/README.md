---
title: ActionSheet 动作面板
description: 由用户操作后触发的一种特定的模态弹出框 ，呈现一组与当前情境相关的两个或多个选项。
spline: data
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TActionSheet from '@tdesign/uniapp/action-sheet/action-sheet.vue';
```


### 组件类型

列表型动作面板

{{ list }}

宫格型动作面板

{{ grid }}

### 组件状态

宫格型动作面板

{{ status }}

### 组件样式

列表型对齐方式

{{ align }}

### 支持指令调用

```javascript
import ActionSheet, { ActionSheetTheme } from '@tdesign/uniapp/action-sheet/index';

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

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
align | String | center | 水平对齐方式。可选项：center/left | N
cancel-text | String | - | 设置取消按钮的文本 | N
count | Number | 8 | 设置每页展示菜单的数量，仅当 type=grid 时有效 | N
description | String | - | 动作面板描述文字 | N
items | Array | [] | 菜单项。TS 类型：`Array<string \| ActionSheetItem>` `interface ActionSheetItem { label: string; description?: string; color?: string; disabled?: boolean; icon?: string \| object; suffixIcon?: string \| object }`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/action-sheet/type.ts) | N
popup-props | Object | {} | 透传 Popup 组件全部属性。TS 类型：`PopupProps`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/action-sheet/type.ts) | N
show-cancel | Boolean | true | 是否显示取消按钮 | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
theme | String | list | 展示类型，列表和表格形式展示。可选项：list/grid | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
visible | Boolean | false | 显示与隐藏。支持语法糖 `v-model:visible` | N
default-visible | Boolean | false | 显示与隐藏。非受控属性 | N

### ActionSheet Events

名称 | 参数 | 描述
-- | -- | --
cancel | \- | 点击取消按钮时触发
close | `(context: { trigger: ActionSheetTriggerSource })` | 关闭时触发。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/action-sheet/type.ts)。<br/>`type ActionSheetTriggerSource = 'overlay' \| 'command' \| 'select' `<br/>
selected | `(context: {  selected: ActionSheetItem \| string, index: number })` | 选择菜单项时触发

### ActionSheet Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容

### ActionSheet External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-cancel | 取消样式类
t-class-content | 内容样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-action-sheet-border-color | @component-stroke | -
--td-action-sheet-border-radius | @radius-extraLarge | -
--td-action-sheet-cancel-color | @text-color-primary | -
--td-action-sheet-color | @text-color-primary | -
--td-action-sheet-description-color | @text-color-placeholder | -
--td-action-sheet-description-font | @font-body-medium | -
--td-action-sheet-disabled-color | @text-color-disabled | -
--td-action-sheet-dot-active-color | @brand-color | -
--td-action-sheet-dot-color | @text-color-disabled | -
--td-action-sheet-dot-size | 16rpx | -
--td-action-sheet-gap-color | @bg-color-page | -

---
title: ActionSheet 动作面板
description: 由用户操作后触发的一种特定的模态弹出框 ，呈现一组与当前情境相关的两个或多个选项。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-89%25-blue" /></span>

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.9.0 版本上线，请留意版本。
</div>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-action-sheet": "tdesign-miniprogram/action-sheet/action-sheet",
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/EM7cxim37USn" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

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

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
align | String | center | `0.29.0`。水平对齐方式。可选项：center/left | N
cancel-text | String | - | 设置取消按钮的文本 | N
count | Number | 8 | 设置每页展示菜单的数量，仅当 type=grid 时有效 | N
description | String | - | `0.29.0`。动作面板描述文字 | N
items | Array | - | 必需。菜单项。TS 类型：`Array<string \| ActionSheetItem>` `interface ActionSheetItem {label: string; color?: string; disabled?: boolean;icon?: string;suffixIcon?: string; }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/action-sheet/type.ts) | Y
popup-props | Object | {} | popupProps透传。TS 类型：`PopupProps`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/action-sheet/type.ts) | N
show-cancel | Boolean | true | 是否显示取消按钮 | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
theme | String | list | 展示类型，列表和表格形式展示。可选项：list/grid | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
visible | Boolean | false | 必需。显示与隐藏 | Y
default-visible | Boolean | undefined | 必需。显示与隐藏。非受控属性 | Y

### ActionSheet Events

名称 | 参数 | 描述
-- | -- | --
cancel | \- | 点击取消按钮时触发
close | `(trigger: TriggerSource)` | 关闭时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/action-sheet/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'command' \| 'select' `<br/>
selected | `(selected: ActionSheetItem \| string, index: number)` | 选择菜单项时触发
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
--td-action-sheet-border-color | @gray-color-1 | - 
--td-action-sheet-border-radius | @radius-extra-large | - 
--td-action-sheet-cancel-color | @font-gray-1 | - 
--td-action-sheet-cancel-height | 96rpx | - 
--td-action-sheet-color | @font-gray-1 | - 
--td-action-sheet-description-color | @font-gray-3 | - 
--td-action-sheet-list-item-disabled-color | @font-gray-4 | - 
--td-action-sheet-list-item-height | 112rpx | - 
--td-action-sheet-text-align | center | -
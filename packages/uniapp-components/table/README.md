---
title: Table 表格
description: 表格常用于展示同类结构下的多种数据，易于组织、对比和分析等，并可对数据进行搜索、筛选、排序等操作。一般包括表头、数据行和表尾三部分。
spline: data
isComponent: true
toc: false
---

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.9.0 版本上线，请留意版本。
</div>

## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TSwitch from '@tdesign/uniapp/table/table.vue';
```

## 代码演示

### 组件类型

#### 基础表格

{{ base }}

#### 横向平铺可滚动表格

{{ scroll }}

#### 带斑马纹表格样式

{{ stripe }}

#### 带边框表格样式

{{ bordered }}

#### 带合并单元格的表格

{{ rowspan-colspan }}

## API

### BaseTable Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
bordered | Boolean | false | 是否显示表格边框 | N
cell-empty-content | String | - | 单元格数据为空时呈现的内容 | N
columns | Array | [] | 列配置，泛型 T 指表格数据类型。TS 类型：`Array<BaseTableCol<T>>` | N
data | Array | [] | 数据源，泛型 T 指表格数据类型。TS 类型：`Array<T>` | N
empty | String | '' | 空表格呈现样式，支持全局配置 `GlobalConfigProvider` | N
fixed-rows | Array | - | 固定行（冻结行），示例：[M, N]，表示冻结表头 M 行和表尾 N 行。M 和 N 值为 0 时，表示不冻结行。TS 类型：`Array<number>` | N
footer-summary | String | - | 表尾总结行 | N
height | String / Number | - | 表格高度，超出后会出现滚动条。示例：100,  '30%',  '300'。值为数字类型，会自动加上单位 px。如果不是绝对固定表格高度，建议使用 `maxHeight` | N
loading | Boolean | undefined | 加载中状态。值为 `true` 会显示默认加载中样式，可以通过 Function 和 插槽 自定义加载状态呈现内容和样式。值为 `false` 则会取消加载状态 | N
loading-props | Object | - | 透传加载组件全部属性。TS 类型：`Partial<LoadingProps>`，[Loading API Documents](./loading?tab=api)。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/table/type.ts) | N
max-height | String / Number | - | 表格最大高度，超出后会出现滚动条。示例：100, '30%', '300'。值为数字类型，会自动加上单位 px | N
row-key | String | 'id' | 必需。唯一标识一行数据的字段名，来源于 `data` 中的字段。如果是字段嵌套多层，可以设置形如 `item.a.id` 的方法 | Y
rowspan-and-colspan | Function | - | 用于自定义合并单元格，泛型 T 指表格数据类型。示例：`({ row, col, rowIndex, colIndex }) => { rowspan: 2, colspan: 3 }`。TS 类型：`TableRowspanAndColspanFunc<T>` `type TableRowspanAndColspanFunc<T> = (params: BaseTableCellParams<T>) => RowspanColspan` `interface RowspanColspan { colspan?: number; rowspan?: number }`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/table/type.ts) | N
show-header | Boolean | true | 是否显示表头 | N
stripe | Boolean | false | 是否显示斑马纹 | N
table-content-width | String | - | 表格内容的总宽度，注意不是表格可见宽度。主要应用于 `table-layout: auto` 模式下的固定列显示。`tableContentWidth` 内容宽度的值必须大于表格可见宽度 | N
table-layout | String | fixed | 表格布局方式。可选项：auto/fixed | N
vertical-align | String | middle | 行内容上下方向对齐。可选项：top/middle/bottom | N

### BaseTable Events

名称 | 参数 | 描述
-- | -- | --
cell-click | `(context: BaseTableCellEventContext<T>)` | 单元格点击时触发。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/table/type.ts)。<br/>`interface BaseTableCellEventContext<T> { row: T; col: BaseTableCol; rowIndex: number; colIndex: number; e: MouseEvent }`<br/>
row-click | `(context: RowEventContext<T>)` | 行点击时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/table/type.ts)。<br/>`interface RowEventContext<T> { row: T; index: number; e: MouseEvent }`<br/>

### BaseTable Slots

名称 | 描述
-- | --
cell-empty-content | 自定义 `cell-empty-content` 显示内容
empty | 自定义 `empty` 显示内容
footer-summary | 自定义 `footer-summary` 显示内容
loading | 自定义 `loading` 显示内容

### BaseTableCol

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
align | String | left | 列横向对齐方式。可选项：left/right/center | N
cell | String / Function | - | 自定义单元格渲染。默认使用 `colKey` 的值作为自定义当前列的插槽名称。<br/>如果 `cell` 值类型为 Function 表示以函数形式渲染单元格。值类型为 string 表示使用插槽渲染，插槽名称为 cell 的值。优先级高于 `render`。泛型 T 指表格数据类型。TS 类型：`string \| ((params: BaseTableCellParams<T>) => string)` `interface BaseTableCellParams<T> { row: T; rowIndex: number; col: BaseTableCol<T>; colIndex: number }`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/table/type.ts) | N
class-name | String / Object / Array / Function | - | 列类名，值类型是 Function 使用返回值作为列类名；值类型不为 Function 时，值用于整列类名（含表头）。泛型 T 指表格数据类型。TS 类型：`TableColumnClassName<T> \| TableColumnClassName<T>[]` `type TableColumnClassName<T> = ClassName \| ((context: CellData<T>) => ClassName)` `interface CellData<T> extends BaseTableCellParams<T> { type: 'th' \| 'td' }`。[通用类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/common/common.ts)。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/table/type.ts) | N
col-key | String | - | 渲染列所需字段，值为 `serial-number` 表示当前列为「序号」列 | N
fixed | String | left | 固定列显示位置。可选项：left/right | N
min-width | String / Number | - | 透传 CSS 属性 `min-width` 到 `<col>` 元素。⚠️ 仅少部分浏览器支持，如：使用 [TablesNG](https://docs.google.com/document/d/16PFD1GtMI9Zgwu0jtPaKZJ75Q2wyZ9EZnVbBacOfiNA/preview) 渲染的 Chrome 浏览器支持 `minWidth` | N
width | String / Number | - | 列宽，可以作为最小宽度使用。当列宽总和小于 `table` 元素时，浏览器根据宽度设置情况自动分配宽度；当列宽总和大于 `table` 元素，表现为定宽。可以同时调整 `table` 元素的宽度来达到自己想要的效果 | N

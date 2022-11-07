---
title: Indexes 索引
description: 用于页面中信息快速检索，可以根据目录中的页码快速找到所需的内容。
spline: navigation
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-88%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-87%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-85%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-65%25-red" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-indexes": "tdesign-miniprogram/indexes/indexes"
}
```
### 主题定制
CSS 变量名|说明
--|--
--td-indexes-title-color | 索引标题颜色;
--td-indexes-title-bg-color | 索引标题背景颜色;
--td-indexes-children-text-color | 索引内容文本颜色;
--td-indexes-children-bg-color | 索引内容背景颜色;
--td-indexes-index-text-color | 索引文本颜色;
--td-indexes-index-text-active-color | 索引文本激活态颜色;
--td-indexes-index-bg-color | 索引背景颜色;
--td-indexes-tips-text-color | 索引提示信息颜色;
--td-indexes-tips-bg-color | 索引提示信息颜色;

## 代码演示

### 基础索引

<img src="https://tdesign.gtimg.com/miniprogram/readme/indexes.png" width="375px" height="50%">

{{ display }}

### API
### Indexes Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
height | Number | - | 列表高度，未设置默认占满设备高度 | N
list | Array | [] | 必需。索引列表的列表数据。每个元素包含三个子元素，index(string)：索引值，例如1，2，3，...或A，B，C等；title(string): 索引标题，可不填将默认设为索引值；children(Array<{title: string}>): 子元素列表，title为子元素的展示文案。。TS 类型：`ListItem[] ` `interface ListItem { title: string;  index: string;  children: { title: string; [key: string]: any} [] }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/indexes/type.ts) | Y
sticky | Boolean | true | 【开发中】索引是否吸顶，默认为true。TS 类型：`Boolean` | N

### Indexes Events

名称 | 参数 | 描述
-- | -- | --
select | `(indexes: { groupIndex: string; childrenIndex: number })` | 点击行元素时触发事件

---
title: Indexes 索引
description: 用于页面中信息快速检索，可以根据目录中的页码快速找到所需的内容。
spline: navigation
isComponent: true
---

## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TIndexes from '@tdesign/uniapp/indexes/indexes.vue';
import TIndexesAnchor from '@tdesign/uniapp/indexes-anchor/indexes-anchor.vue';
```

### 基础索引


{{ base }}

### 自定义索引

{{ custom }}

## FAQ

### 在滚动元素中， Indexes 索引组件失效（[#3746](https://github.com/Tencent/tdesign-miniprogram/issues/3746)）？

`Indexes` 组件自 `0.32.0` 版本开始移除了对 `scroll-view` 的依赖，组件内部使用 [wx.pageScrollTo](https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html) 滚动到指定位置，因此只支持页面级滚动，不支持在滚动元素中嵌套使用，包括 overflow: scroll、 scroll-view 等。

### API

### Indexes Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
current | String / Number | - | 索引列表的激活项，默认首项。支持语法糖 `v-model:current` | N
default-current | String / Number | - | 索引列表的激活项，默认首项。非受控属性 | N
index-list | Array | - | 索引字符列表。不传默认 `A-Z`。TS 类型：`Array<string \| number>` | N
list | Array | [] | 已废弃。索引列表的列表数据。每个元素包含三个子元素，index(string)：索引值，例如1，2，3，...或A，B，C等；title(string): 索引标题，可不填将默认设为索引值；children(Array<{title: string}>): 子元素列表，title为子元素的展示文案。TS 类型：`ListItem[] ` `interface ListItem { title: string;  index: string;  children: { title: string; [key: string]: any} [] }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/indexes/type.ts) | N
sticky | Boolean | true | 索引是否吸顶，默认为true。TS 类型：`Boolean` | N
sticky-offset | Number | 0 | 锚点吸顶时与顶部的距离	 | N

### Indexes Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { index: string \| number })` | 索引发生变更时触发事件
select | `(context: { index: string \| number })` | 点击侧边栏时触发事件

### Indexes Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容


### IndexesAnchor Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
index | String / Number | - | 索引字符 | N

### IndexesAnchor Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容

### IndexesAnchor External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-sidebar | 侧边栏样式类
t-class-sidebar-item | 侧边栏选项样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-indexes-sidebar-active-bg-color | @brand-color | -
--td-indexes-sidebar-active-color | @text-color-anti | -
--td-indexes-sidebar-color | @text-color-primary | -
--td-indexes-sidebar-font | @font-body-small | -
--td-indexes-sidebar-item-size | 40rpx | -
--td-indexes-sidebar-right | 16rpx | -
--td-indexes-sidebar-tips-bg-color | @brand-color-light | -
--td-indexes-sidebar-tips-color | @brand-color | -
--td-indexes-sidebar-tips-font | @font-title-extraLarge | -
--td-indexes-sidebar-tips-right | calc(100% + 32rpx) | -
--td-indexes-sidebar-tips-size | 96rpx | -
--td-indexes-anchor-active-bg-color | @bg-color-container | -
--td-indexes-anchor-active-color | @brand-color | -
--td-indexes-anchor-active-font-weight | 600 | -
--td-indexes-anchor-bg-color | @bg-color-secondarycontainer | -
--td-indexes-anchor-border-color | @component-border | -
--td-indexes-anchor-color | @text-color-primary | -
--td-indexes-anchor-font | @font-body-medium | -
--td-indexes-anchor-padding | 8rpx 32rpx | -
--td-indexes-anchor-top | 0 | -

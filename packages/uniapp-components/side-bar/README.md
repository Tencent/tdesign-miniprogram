---
title: SideBar 侧边栏
description: 用于信息分类后的展示切换或锚点，位于页面左侧。
spline: navigation
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TSideBar from '@tdesign/uniapp/side-bar/side-bar.vue';
import TSideBarItem from '@tdesign/uniapp/side-bar-item/side-bar-item.vue';
```

### 锚点用法

{{ base }}

### 切页用法

{{ switch }}

### 带图标侧边导航

{{ with-icon }}

### 自定义样式

{{ custom }}

## API

### SideBar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
value | String / Number | - | 选项值。支持语法糖 `v-model:value` | N
default-value | String / Number | - | 选项值。非受控属性 | N

### SideBar Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { value: number \| string, label: string })` | 选项值发生变化时触发
click | `(context: { value: number \| string; label: string })` | 点击选项时触发

### SideBar Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义侧边导航栏内容


### SideBarItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
badge-props | Object | - | 透传至 Badge 组件。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/side-bar-item/type.ts) | N
disabled | Boolean | false | 是否禁用 | N
icon | String / Object | - | 图标，传对象则透传至 Icon | N
label | String | - | 展示的标签 | N
value | String / Number | - | 当前选项的值 | N

### SideBarItem Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义侧边导航项内容

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-side-bar-bg-color | @bg-color-secondarycontainer | -
--td-side-bar-height | 100% | -
--td-side-bar-width | 206rpx | -
--td-side-bar-active-color | @brand-color | -
--td-side-bar-border-radius | 18rpx | -
--td-side-bar-color | @text-color-primary | -
--td-side-bar-disabled-color | @text-color-disabled | -
--td-side-bar-font | @font-body-large | -
--td-side-bar-icon-size | 40rpx | -
--td-side-bar-item-height | auto | -

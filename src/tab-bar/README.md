---
title: TabBar 标签栏
description: 用于在不同功能模块之间进行快速切换，位于页面底部。
spline: navigation
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-93%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-tab-bar": "tdesign-miniprogram/tab-bar/tab-bar",
  "t-tab-bar-item": "tdesign-miniprogram/tab-bar-item/tab-bar-item"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/H0G5SdmU7HSh" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>


### 组件类型
#### 纯文本标签栏

{{ text-only }}

#### 图标加文字标签栏

{{ base }}

#### 纯图标标签栏

{{ icon-only }}

#### 双层级纯文本标签栏

{{ sub }}

### 组件样式

#### 弱选中标签栏

{{ badge }}

#### 悬浮胶囊标签栏

{{ round }}

#### 自定义主题

{{ custom }}

## API

### TabBar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
bordered | Boolean | true | 是否显示外边框 | N
fixed | Boolean | true | 是否固定在底部 | N
safe-area-inset-bottom | Boolean | true | 是否为 iPhoneX 留出底部安全距离 | N
shape | String | normal | 标签栏的形状。可选项：normal/round | N
split | Boolean | true | 是否需要分割线 | N
theme | String | normal | 选项风格。可选项：normal/tag | N
value | String / Number / Array | - | 当前选中标签的索引。TS 类型：`string \| number \| Array<string \| number>` | N
default-value | String / Number / Array | undefined | 当前选中标签的索引。非受控属性。TS 类型：`string \| number \| Array<string \| number>` | N

### TabBar Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: string \| number)` | 选中标签切换时触发
### TabBar External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### TabBarItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
badge-props | Object | - | 图标右上角提示信息。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-bar-item/type.ts) | N
icon | String / Object / Slot | - | 图标名称。传入对象时透传至 Icon 组件。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
sub-tab-bar | Array | - | 二级菜单。TS 类型：`SubTabBarItem[] ` `interface SubTabBarItem { value: string; label: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-bar-item/type.ts) | N
value | String / Number | - | 标识符 | N

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-tab-bar-bg-color | @bg-color-container | - 
--td-tab-bar-border-color | @border-level-1-color | - 
--td-tab-bar-round-shadow | @shadow-3 | - 
--td-tab-bar-active-bg | @brand-color-light | - 
--td-tab-bar-active-color | @brand-color | - 
--td-tab-bar-bg-color | @bg-color-container | - 
--td-tab-bar-border-color | @border-color | - 
--td-tab-bar-color | @text-color-primary | - 
--td-tab-bar-height | 80rpx | - 
--td-tab-bar-hover-bg-color | rgba(0, 0, 0, 0.05) | - 
--td-tab-bar-spread-border-color | @border-color | - 
--td-tab-bar-spread-shadow | @shadow-3 | - 

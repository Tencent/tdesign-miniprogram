---
title: Steps 步骤条
description: 用于任务步骤展示或任务进度展示。
spline: navigation
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TSteps from 'tdesign-uniapp/steps/steps.vue';
import TStepsItem from 'tdesign-uniapp/steps-item/steps-item.vue';
```

## 代码演示

步骤条，方向可以横向和纵向，可以自定义步骤条显示内容以及是否可写

<a href="https://developers.weixin.qq.com/s/3H9EuimQ7JS0" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 组件类型

#### 水平步骤条

支持三种类型：序号、图标、简略

{{ horizontal }}

#### 垂直步骤条

支持三种类型：序号、图标、简略

{{ vertical }}

### 组件状态

#### 选项卡状态

共支持 4 种状态：未完成（default）、已完成（finish）、进行中（process）、错误（error）

{{ status }}

### 特殊类型

通过已有特性，改造出两种常见类型：

- 垂直自定义（在 Cascader 中使用）
- 纯展示步骤条

可以参考以下代码实现

{{ special }}

## API

### Steps Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
current | String / Number | - | 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成。支持语法糖 `v-model:current` | N
default-current | String / Number | - | 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成。非受控属性 | N
current-status | String | process | 用于控制 current 指向的步骤条的状态。可选项：default/process/finish/error | N
layout | String | horizontal | 步骤条方向，有两种：横向和纵向。可选项：horizontal/vertical | N
readonly | Boolean | undefined | 只读状态 | N
sequence | String | positive | 步骤条顺序。可选项：positive/reverse | N
theme | String | default | 步骤条风格。可选项：default/dot | N

### Steps Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: {current: string \| number, previous: string \| number})` | 当前步骤发生变化时触发

### Steps Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义步骤条内容

### Steps External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### StepItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
content | String | '' | 步骤描述 | N
extra | String | - | 步骤条自定义内容 | N
icon | String | - | 图标。传入 slot 代表使用插槽，其他字符串代表使用内置图标 | N
status | String | default | 当前步骤的状态：默认状态（未开始）、进行中状态、完成状态、错误状态。可选项：default/process/finish/error。TS 类型：`StepStatus` `type StepStatus = 'default' \| 'process' \| 'finish' \| 'error'`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/step-item/type.ts) | N
sub-step-items | Array | [] | 已废弃。子步骤条，仅支持 layout  = 'vertical' 时。TS 类型：`SubStepItem[]` `interface SubStepItem { status: StepStatus, title: string }`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/step-item/type.ts) | N
title | String | '' | 标题 | N

### StepItem Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义步骤内容
content | 自定义 `content` 显示内容
extra | 自定义 `extra` 显示内容
icon | 自定义 `icon` 显示内容
title | 自定义 `title` 显示内容

### StepItem External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-description | 描述样式类
t-class-extra | 额外样式类
t-class-title | 标题样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-step-item-circle-font-size | 28rpx | - |
| --td-step-item-circle-size | 44rpx | - |
| --td-step-item-default-circle-bg | @bg-color-secondarycontainer | - |
| --td-step-item-default-circle-color | @text-color-placeholder | - |
| --td-step-item-default-dot-border-color | @component-border | - |
| --td-step-item-default-icon-color | @text-color-placeholder | - |
| --td-step-item-default-title-color | @text-color-placeholder | - |
| --td-step-item-description-color | @text-color-placeholder | - |
| --td-step-item-dot-size | 16rpx | - |
| --td-step-item-error-circle-bg | @error-color-1 | - |
| --td-step-item-error-circle-color | @error-color | - |
| --td-step-item-error-dot-border-color | @error-color | - |
| --td-step-item-error-icon-color | @error-color | - |
| --td-step-item-error-title-color | @error-color | - |
| --td-step-item-finish-circle-bg | @brand-color-light | - |
| --td-step-item-finish-circle-color | @brand-color | - |
| --td-step-item-finish-dot-border-color | @brand-color | - |
| --td-step-item-finish-icon-color | @brand-color | - |
| --td-step-item-finish-line-color | @brand-color | - |
| --td-step-item-finish-title-color | @text-color-primary | - |
| --td-step-item-line-color | @component-border | - |
| --td-step-item-process-circle-bg | @brand-color | - |
| --td-step-item-process-circle-color | @text-color-anti | - |
| --td-step-item-process-dot-border-color | @brand-color | - |
| --td-step-item-process-icon-color | @brand-color | - |
| --td-step-item-process-title-color | @brand-color | - |
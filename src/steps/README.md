---
title: Steps 步骤条
description: 用于任务步骤展示或任务进度展示。
spline: navigation
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-98%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-88%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-96%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-82%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-steps": "tdesign-miniprogram/steps/steps",
  "t-step-item": "tdesign-miniprogram/steps/step-item",
}
```

## 代码演示

步骤条，方向可以横向和纵向，可以自定义步骤条显示内容以及是否可写

#### 横向可操作步骤条

{{ horizontal }}

#### 横向只读步骤条

{{ readonly }}


#### 竖向只读步骤条

{{ vertical }}

#### 竖向简化只读步骤条

{{ theme }}

#### 竖向双层级只读步骤条

{{ double }}

#### 自定义内容步骤条

{{ customization }}



## API
### Steps Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
current | String / Number | 0 | 当前步骤，即整个步骤条进度，格式为`1`、`1-0`或`1-1`。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。若当前步骤条存在子步骤条，则会根据子步骤条重新判断当前步骤状态（子步骤条中存在error，则当前步骤error，子步骤条中存在process，当前步骤process，若最后一个子步骤条finish，当前步骤finish，优先级为`finish>error>process`）。注意：如果每个步骤条单独设置了status，则步骤条为设定的status，若传入`status:''`,将默认为未开始状态,传入的status优先级最高。 | N
default-current | String / Number | undefined | 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成。非受控属性 | N
current-status | String | process | 用于控制 current 指向的步骤条的状态。可选项：default/process/finish/error | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
external-classes | Array | - | 组件类名，用于设置组件外层元素元素类名。`['t-class']` | N
layout | String | horizontal | 步骤条方向，有两种：横向和纵向。可选项：horizontal/vertical | N
readonly | Boolean | false | 只读状态 | N
separator | String | line | 【讨论中】步骤条分割符。可选项：line/dashed/arrow | N
theme | String | default | 步骤条风格。可选项：default/dot | N

### Steps Events

名称 | 参数 | 描述
-- | -- | --
change | `({current: string \| number, previous: string \| number})` | 当前步骤发生变化时触发

### StepItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | String / Slot | '' | 步骤描述 | N
custom-style | String | - | 自定义组件样式 | N
external-classes | Array | - | 组件类名，用于设置组件外层元素元素类名。`['t-class', 't-class-inner', 't-class-content', 't-class-title', 't-class-description', 't-class-extra', 't-class-sub', 't-class-sub-dot', 't-class-sub-content']` | N
icon | String / Slot | - | 图标。传入 slot 代表使用插槽，其他字符串代表使用内置图标 | N
status | String | default | 当前步骤的状态：默认状态（未开始）、进行中状态、完成状态、错误状态。可选项：default/process/finish/error。TS 类型：`StepStatus` `type StepStatus = 'default' \| 'process' \| 'finish' \| 'error'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/steps/type.ts) | N
sub-step-items | Array | [] | 子步骤条，仅支持 layout  = 'vertical' 时。TS 类型：`SubStepItem[]` `interface SubStepItem { status: StepStatus, title: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/steps/type.ts) | N
title | String / Slot | '' | 标题 | N

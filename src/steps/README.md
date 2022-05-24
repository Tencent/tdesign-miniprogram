---
title: Steps 步骤条
description: 用于任务步骤展示或任务进度展示。
spline: navigation
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-steps": "tdesign-miniprogram/steps/steps",
  "t-step": "tdesign-miniprogram/steps/step-item"
}
```

## 代码演示

### 基础步骤条

步骤条，方向可以横向和纵向，可以自定义步骤条显示内容以及是否可写

<img src="https://tdesign.gtimg.com/miniprogram/readme/steps-4.png" width="375px" height="50%">

```html
<t-steps defaultCurrent="1">
  <t-step title="步骤描述" />
  <t-step title="选中步骤" />
</t-steps>
```

#### 横向只读步骤条

<img src="https://tdesign.gtimg.com/miniprogram/readme/steps-3.png" width="375px" height="50%">

```html
<t-steps current="0" readonly="true">
  <t-step title="当前步骤" />
  <t-step title="未完成步骤" />
</t-steps>
```
#### 竖向只读步骤条

<img src="https://tdesign.gtimg.com/miniprogram/readme/steps-2.png" width="375px" height="50%">

```html
<t-steps current="1" readonly="true" layout="vertical">
  <t-step title="已完成步骤" />
  <t-step title="当前步骤" />
  <t-step title="未完成步骤" />
</t-steps>
```

#### 竖向双层级只读步骤条
```html
<t-steps class="demo-steps vertical" current="1-0" readonly="true" layout="vertical">
  <t-step title="已完成步骤" />
  <t-step title="当前步骤" subStepItems="{{subStepItems}}" />
  <t-step title="未完成步骤" />
</t-steps>

```
#### 自定义内容步骤条

<img src="https://tdesign.gtimg.com/miniprogram/readme/steps-1.png" width="375px" height="50%">

```html
<t-steps current="1" readonly="true" layout="vertical">
  <t-step title="已完成步骤">
    <view slot="content">可自定义此处内容</view>
    <view class="extra-img" slot="extra">
      <image src="" alt="image" style="width: 100%" mode="widthFix" />
    </view>
  </t-step>
  <t-step title="当前步骤">
    <view slot="content">可自定义此处内容</view>
  </t-step>
  <t-step title="未完成步骤">
    <view slot="content">可自定义此处内容</view>
  </t-step>
</t-steps>

<!-- 自定义step节点样式 -->
<t-steps class="demo-steps vertical" current="{{customStepCurrent}}" readonly="true" layout="vertical">
  <t-step-item
    wx:for="{{customStepItems}}"
    wx:key="key"
    wx:item="item"
    icon="slot"
    title="{{item.title}}"
    content="{{item.content}}"
    t-class-inner="t-class-inner t-class-inner--{{item.status}}"
    t-class-title="t-class-title {{item.title? '' : 't-class-title--no'}}"
    t-class-description="t-class-description"
    t-class-extra="t-class-extra"
  >
    <view
      slot="icon"
      class="t-icon-slot t-icon-slot--{{item.status}} {{item.title? '' : 't-icon-slot--child'}}"
    ></view>
    <view slot="extra">{{item.extra}}</view>
  </t-step-item>
</t-steps>
```

### 受控用法

```html
<t-steps current="{{current}}" bind:change="onChange">
  <t-step title="步骤描述" />
  <t-step title="选中步骤" />
</t-steps>
```

```js
Page({
  data: {
    current: 0
  },
  onChange(e) {
    const { current } = e.detail;
    this.setData({ current });
  },
})
```

## API
### Steps Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
current | String / Number | 0 | 当前步骤，即整个步骤条进度，格式为`1`、`1-0`或`1-1`。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。若当前步骤条存在子步骤条，则会根据子步骤条重新判断当前步骤状态（子步骤条中存在error，则当前步骤error，子步骤条中存在process，当前步骤process，若最后一个子步骤条finish，当前步骤finish，优先级为`finish>error>process`）。注意：如果每个步骤条单独设置了status，则步骤条为设定的status，若传入`status:''`,将默认为未开始状态,传入的status优先级最高。 | N
default-current | String / Number | undefined | 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成。非受控属性 | N
current-status | String | process | 用于控制 current 指向的步骤条的状态。可选项：default/process/finish/error | N
external-classes | Array | - | 组件类名，用于设置组件外层元素元素类名。`['t-class']` | N
layout | String | horizontal | 步骤条方向，有两种：横向和纵向。可选项：horizontal/vertical | N
readonly | Boolean | false | 只读状态 | N
theme | String | default | 步骤条风格。可选项：default/dot | N

### Steps Events

名称 | 参数 | 描述
-- | -- | --
change | `({current: string | number, previous: string | number})` | 当前步骤发生变化时触发

### StepItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | String / Slot | '' | 步骤描述 | N
external-classes | Array | - | 组件类名，用于设置组件外层元素元素类名。`['t-class', 't-class-inner', 't-class-content', 't-class-title', 't-class-description', 't-class-extra', 't-class-sub', 't-class-sub-dot', 't-class-sub-content']` | N
icon | String / Slot | - | 图标。传入 slot 代表使用插槽，其他字符串代表使用内置图标 | N
status | String | default | 当前步骤的状态。可选项：default/process/finish/error。TS 类型：`StepStatus` `type StepStatus = 'default' | 'process' | 'finish' | 'error'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/steps/type.ts) | N
sub-step-items | Array | [] | 子步骤条，仅支持 layout  = 'vertical' 时。TS 类型：`SubStepItem[]` `interface SubStepItem { status: StepStatus, title: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/steps/type.ts) | N
title | String / Slot | '' | 标题 | N

---
title: Tag 标签
description: 用于表明主体的类目，属性或状态。
spline: data
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-tag": "tdesign-miniprogram/tag/tag",
  "t-check-tag": "tdesign-miniprogram/tag/check-tag"
}
```

## 代码演示

### 基础标签

<img src="https://tdesign.gtimg.com/miniprogram/readme/tags-1.png" width="375px" height="50%">

```html
<!-- theme 样式 -->
<t-tag theme="primary">重要</t-tag>

<!-- variant 背景 -->
<t-tag theme="primary" variant="plain">镂空标签</t-tag>

<!-- shape 圆角 -->
<t-tag theme="primary" shape="circle">圆角标签</t-tag>

<!-- closable 带关闭 -->
<t-tag closable theme="primary">标签</t-tag>

<!-- 超长省略 -->
<t-tag max-width="150" title="超长省略文本标签超长省略文本标签"
  >超长省略文本标签超长省略文本标签</t-tag
>
```

### 可点击的标签

<img src="https://tdesign.gtimg.com/miniprogram/readme/tags-2.png" width="375px" height="50%">

```html
<t-check-tag checked="{{true}}" size="large">已点击</t-check-tag>
<t-check-tag checked="{{false}}" size="large">未点击</t-check-tag>
<t-check-tag checked="{{false}}" disabled="{{true}}" size="large">不可点击</t-check-tag>
```

## API
### Tag Props

| 名称             | 类型            | 默认值  | 说明                                                                                         | 必传    |
| ---------------- | --------------- | ------- | -------------------------------------------------------------------------------------------- | ------- |
| closable         | Boolean         | false   | 标签是否可关闭                                                                               | N       |
| disabled         | Boolean         | false   | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态                        | N       |
| external-classes | Array           | -       | 组件类名，用于设置 组件外层元素元素类名。`['t-class']`                                       | N       |
| icon             | String          | -       | 标签中的图标，可自定义图标呈现                                                               | N       |
| max-width        | String / Number | -       | 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80。TS 类型：`CSSProperties['maxWidth'] | number` | N |
| shape            | String          | square  | 标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark                          | N       |
| size             | String          | medium  | 标签尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`                                    | N       |
| theme            | String          | default | 组件风格，用于描述组件不同的应用场景。可选项：default/primary/warning/danger/success         | N       |
| variant          | String          | dark    | 标签风格变体。可选项：dark/light/outline/light-outline                                       | N       |

### Tag Events

| 名称  | 参数 | 描述                                 |
| ----- | ---- | ------------------------------------ |
| click | -    | 点击时触发                           |
| close | -    | 如果关闭按钮存在，点击关闭按钮时触发 |

### CheckTag Props

| 名称     | 类型                   | 默认值    | 说明                                                                  | 必传 |
| -------- | ---------------------- | --------- | --------------------------------------------------------------------- | ---- |
| checked  | Boolean                | undefined | 标签选中的状态，默认风格（theme=default）才有选中态                   | N    |
| closable | String / Boolean       | false     | 是否可以关闭                                                          | N    |
| content  | String / Number / Slot | -         | 组件子元素                                                            | N    |
| disabled | Boolean                | false     | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 | N    |
| icon     | String / Slot          | -         | 标签图标                                                              | N    |
| shape    | String                 | square    | 标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark   | N    |
| size     | String                 | medium    | 标签尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`             | N    |

### CheckTag Events

| 名称   | 参数                 | 描述           |
| ------ | -------------------- | -------------- |
| change | `(checked: boolean)` | 组件子元素     |
| click  | -                    | 点击标签时触发 |

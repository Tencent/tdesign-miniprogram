---
title: Grid 宫格
description: 用于功能入口布局，将页面或特定区域切分成若干等大的区块，形成若干功能入口。
spline: data
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-grid": "tdesign-miniprogram/grid/grid",
  "t-grid-item": "tdesign-miniprogram/grid/grid-item"
}
```

### 主题定制
CSS 变量名|说明
--|--
--td-grid-bg-color | 宫格背景颜色
--td-grid-item-text-color  | 宫格文本颜色
--td-grid-item-description-color | 宫格描述信息文本颜色
--td-grid-item-hover-bg-color | 开启点击反馈时宫格背景颜色

## 代码演示

### 一行三个带边框

{{ border }}

### 一行四个

{{ four }}

### 一行五个

{{ five }}

### 一行三个

{{ three }}

### 一行二个带说明

{{ two-des }}

### 一行三个带说明

{{ three-des }}

### 带徽标

{{ badge }}


## API

### Grid Props

| 名称             | 类型             | 默认值 | 说明                                                                                                | 必传                                              |
| ---------------- | ---------------- | ------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| align            | String           | center | 内容对齐方式。可选项：left/center                                                                   | N                                                 |
| border           | Boolean / Object | false  | 边框，默认不显示。值为 true 则显示默认边框，值类型为 object 则表示自定义边框样式。TS 类型：`boolean | { color?: string; width?: string; style?: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset' }` | N   |
| column           | Number           | 4      | 每一行的列数量                                                                                      | N                                                 |
| external-classes | Array            | -      | 组件类名，用于设置组件外层元素类名。`['t-class']`                                                   | N                                                 |
| gutter           | Number           | -      | 间隔大小                                                                                            | N                                                 |
| hover            | Boolean          | false  | 是否开启点击反馈                                                                                    | N                                                 |

### GridItem Props

| 名称             | 类型          | 默认值      | 说明                                                                                                                                  | 必传 |
| ---------------- | ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| description      | String / Slot | -           | 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点                                                           | N    |
| external-classes | Array         | -           | 组件类名，分别用于设置组件外层元素、图片、文本、描述等元素类名。`['t-class', 't-class-content', 't-class-image', 't-class-text', 't-class-description']` | N    |
| image            | String / Slot | -           | 图片，可以是图片地址，也可以自定义图片节点                                                                                            | N    |
| jump-type        | String        | navigate-to | 链接跳转类型。可选项：redirect-to/switch-tab/relaunch/navigate-to                                                                     | N    |
| layout           | String        | vertical    | 内容布局方式。可选项：vertical/horizontal                                                                                             | N    |
| text             | String / Slot | -           | 文本，可以通过 Props 传入文本，也可以自定义标题节点                                                                                   | N    |
| url              | String        | -           | 点击后的跳转链接                                                                                                                      | N    |

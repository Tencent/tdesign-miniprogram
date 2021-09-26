# Badge 徽标

## 介绍

用于告知用户，该区域的状态变化或者待处理任务的数量。

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-icon": "@tencent/tdesign-miniprogram/badge/badge"
}
```

## 用法

### 组件方式

```html
<!-- page.wxml -->
<t-badge count="10" size="medium"> </t-badge>
```

## API

### Badge Props

| 名称      | 类型                   | 默认值 | 说明                                                                              | 必传     |
| --------- | ---------------------- | ------ | --------------------------------------------------------------------------------- | -------- | --- |
| color     | String                 | -      | 颜色                                                                              | N        |
| content   | String / Slot          | -      | 徽标内容                                                                          | N        |
| count     | String / Number / Slot | -      | 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+                         | N        |
| dot       | Boolean                | false  | 是否为红点                                                                        | N        |
| max-count | Number                 | 99     | 封顶的数字值                                                                      | N        |
| offset    | Array                  | -      | 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem']。TS 类型：`Array<string | number>` | N   |
| shape     | String                 | circle | 形状。可选值：circle/round                                                        | N        |
| visible   | Boolean                | false  | 当数值为 0 时，是否展示徽标                                                       | N        |
| size      | String                 | medium | 尺寸。可选值：small/medium                                                        | N        |

### External Classes

| 名称          | 参数 | 描述             |
| ------------- | ---- | ---------------- |
| t-class       | -    | 外部包裹的拓展类 |
| t-class-badge | -    | badge 的拓展类   |

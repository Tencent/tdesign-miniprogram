# Badge 

## 介绍

徽标，图标右上角的红点、数字或者文字，用于告知用户，该区域的状态变化或者待处理任务的数量。

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
<t-badge
  count="10"
  size="medium">
</t-badge>
```

## API

### `<t-badge>` 组件

组件路径：`@tencent/tdesign-miniprogram/badge/badge`

#### Props

| 属性         | 类型                           | 默认值 | 必传 | 说明                              |
| ----------- | ---------------------------   | ------ | ---- | --------------------------------- |
| color       | `String`                      | red    | N    | 颜色                              |
| count       | `Number`                      | -      | N    | 展示的数字                        |
| dot         | `Boolean`                     | false  | N    | 是否为红点                        |
| maxCount    | `Number`                      | 99     | N    | 封顶的数字                        |
| content     | `String`                      | -      | N    | 自定义文字                        |
| size        | `String`                      | medium | N    | 尺寸（medium, small）             |
| shape       | `String`                      | circle | N    | 形状，圆形或圆角矩形 (circle,rounded or ribbon) |
| showZero    | `Boolean`                     | false  | N    | 当数值为 0 时是否展示 badge       |
| offset      | `Array`                       | -      | N    | 设置状态点的位置偏移，格式为[x,y] |
| numberStyle | `Object`                      | -      | N    | 设置状态点的样式                  |
| hasSlot     | `Boolean`                     | false  | N    | 是否有 slot，小程序自定义组件限制   |

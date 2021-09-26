# Cell 单元格

## 介绍

用于各个类别行的信息展示。

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-cell": "@tencent/tdesign-miniprogram/cell/cell"
}
```

## API

### Cell Props

| 名称             | 类型          | 默认值     | 说明                                                                                                                                                                                                                                                                             | 必传 |
| ---------------- | ------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| align            | String        | middle     | 内容的对齐方式，默认居中对齐。可选项：top/middle/bottom                                                                                                                                                                                                                          | N    |
| arrow            | Boolean       | false      | 是否显示右侧箭头                                                                                                                                                                                                                                                                 | N    |
| bordered         | Boolean       | true       | 是否显示下边框                                                                                                                                                                                                                                                                   | N    |
| description      | String / Slot | -          | 下方内容描述                                                                                                                                                                                                                                                                     | N    |
| external-classes | Array         | -          | 组件类名，分别用于设置 组件外层类名、标题类名、右侧说明文字类名、下方描述内容类名、图片类名、激活态类名、左侧图标类名、右侧图标类名 等。`['t-class', 't-class-title', 't-class-note', 't-class-description', 't-class-thumb', 't-class-hover', 't-class-left', 't-class-right']` | N    |
| hover            | Boolean       | -          | 是否开启点击反馈                                                                                                                                                                                                                                                                 | N    |
| image            | String / Slot | -          | 主图                                                                                                                                                                                                                                                                             | N    |
| jump-type        | String        | navigateTo | 链接跳转类型。可选项：redirect-to/switch-tab/relaunch/navigate-to                                                                                                                                                                                                                | N    |
| left-icon        | String / Slot | -          | 左侧图标，出现在单元格标题的左侧                                                                                                                                                                                                                                                 | N    |
| note             | String / Slot | -          | 和标题同行的说明文字                                                                                                                                                                                                                                                             | N    |
| required         | Boolean       | false      | 是否显示表单必填星号                                                                                                                                                                                                                                                             | N    |
| right-icon       | String / Slot | -          | 最右侧图标                                                                                                                                                                                                                                                                       | N    |
| title            | String / Slot | -          | 标题                                                                                                                                                                                                                                                                             | N    |
| url              | String        | -          | 点击后跳转链接地址。如果值为空，则表示不需要跳转                                                                                                                                                                                                                                 | N    |

### Cell Events

| 名称  | 参数 | 描述     |
| ----- | ---- | -------- |
| click | -    | 右侧内容 |

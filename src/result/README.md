---
title: Result 结果
description: 反馈结果状态。
spline: data
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-result": "tdesign-miniprogram/result/result"
}
```

## 代码演示

### 结果状态

{{ theme }}

### 自定义结果

{{ custom }}

## API

### Result Props

| 名称             | 类型          | 默认值 | 说明                                 | 必传 |
| ---------------- | ------------- | ------ | ------ | ---- |
| title            | String / Slot | -      | 标题     | N    |
| description      | String / Slot | -      | 描述文字       | N    |
| external-classes | Array         | -      | 组件类名，分别用于设置 组件外层类名、文本描述类名、图片类名、操作按钮类名。`['t-class', 't-class-image', 't-class-title', 't-class-description']` | N    |
| icon             | String        | -      | 图标名称      | N    |
| image            | String / Slot | -      | 图片地址  | N    |
| theme           | String         | default| 内置主题。可选项：default/success/warning/error | N  |

---
title: Icon 图标
description: 图标。
spline: base
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-icon": "tdesign-miniprogram/icon/icon"
}
```

## 代码演示

### 基础图标

```html
<!-- page.wxml -->
<t-icon name="primary" size="xl" bind:tap="someFunction"> </t-icon>
```

### 自定义图标

```html
<!-- page.wxml -->
<t-icon prefix="icon" name="a-1h" size="xl" bind:tap="someFunction"> </t-icon>
```

以 iconfont 为例：

- 在 iconfont 资源管理中打开我的项目
- 配置项目设置，统一 FontClass/Symbol 前缀 与 Font Family，如：`icon-` 与 `icon`
- 使用浏览器打开生成的 Font class 代码链接（以 `.css` 结尾），保存到小程序项目中，并将后缀名改为 `.wxss`
- 在 app.wxss 或者 page 对应的 .wxss 中，使用 `@import` 引入该 .wxss 文件
- 使用时，与前面设置的 Font Family 保持一致，即 `prefix="icon"`

## API

#### Props

| 属性        | 值类型   | 默认值    | 必传 | 说明                                                              |
| ----------- | -------- | --------- | ---- | ----------------------------------------------------------------- |
| name        | `String` | -         | Y    | 图标名称                                                          |
| size        | `String` | `inherit` | N    | 图标大小, 可以'middle' 'small'等关键字， 也可以是字体大小如'20px' |
| color       | `String` | `initial` | N    | 图标颜色                                                          |
| prefix      | `String` | -         | N    | 自定义图标前缀                                                          |
| customStyle | `String` | -         | N    | 自定义样式                                                        |

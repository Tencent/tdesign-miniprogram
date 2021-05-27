# Icon

## 介绍

图标

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-icon": "@tencent/tdesign-miniprogram/icon/icon"
}
```

## 用法

### 组件方式

```html
<!-- page.wxml -->
<t-icon name="primary" size="xl" bind:click="someFunction"> </t-icon>
```

## API

### `<t-icon>` 组件

组件路径：`@tencent/tdesign-miniprogram/icon/icon`

#### Props

| 属性        | 值类型   | 默认值    | 必传 | 说明                                                              |
| ----------- | -------- | --------- | ---- | ----------------------------------------------------------------- |
| name        | `String` | -         | Y    | 图标名称                                                          |
| size        | `String` | `inherit` | N    | 图标大小, 可以'middle' 'small'等关键字， 也可以是字体大小如'20px' |
| color       | `String` | `initial` | N    | 图标颜色                                                          |
| customStyle | `String` | -         | N    | 自定义样式                                                        |

#### Events

| 事件       | event.detail | 说明           |
| ---------- | ------------ | -------------- |
| bind:click | -            | 点击图标时触发 |

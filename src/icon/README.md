# Icon 图标

## 介绍

图标

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-icon": "@tencent/tdesign-miniprogram/icon/icon"
}
```

## 代码演示

```html
<!-- page.wxml -->
<t-icon name="primary" size="xl" bind:click="someFunction"> </t-icon>
```

## API

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

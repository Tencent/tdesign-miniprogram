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
<t-icon name="primary" size="xl" bind:click="someFunction"> </t-icon>
```

### 自定义图标

```html
<!-- page.wxml -->
<t-icon prefix="icon-a" name="1h" size="xl" bind:click="someFunction"> </t-icon>
```

由于微信小程序不支持本地 ttf 文件, 需要将图标文件上传到网络或者转换为 Base64 格式

以转换为 Base64 为例:

- 下载图标字体代码, 提取 iconfont.ttf 和 iconfont.css 文件
- 使用 [Online @font-face generator — Transfonter](https://transfonter.org/) 将 ttf 文件转换为 Base64, 用来替换 iconfont.css 中的 src 属性
- 修改 iconfont.css 中的 iconfont 类名, 譬如: iconfont.css 中图标类名为 `.icon-a-app:before`, 则该图标字体的前缀为 icon-a, `.iconfont` 应修改为 `.icon-a`
- iconfont.css 后缀名改为 wxss
- 在 app.wxss 或者指定 page 下的 wxss 中引入 iconfont.wxss
- 配置 Icon 组件, 使用 prefix 属性指定图标前缀, 譬如: `prefix="icon-a"`

[整理后的 iconfont.wxss](https://github.com/Tencent/tdesign-miniprogram/tree/develop/example/pages/icon/iconfont.wxss)

## API

#### Props

| 属性        | 值类型   | 默认值    | 必传 | 说明                                                              |
| ----------- | -------- | --------- | ---- | ----------------------------------------------------------------- |
| name        | `String` | -         | Y    | 图标名称                                                          |
| size        | `String` | `inherit` | N    | 图标大小, 可以'middle' 'small'等关键字， 也可以是字体大小如'20px' |
| color       | `String` | `initial` | N    | 图标颜色                                                          |
| prefix      | `String` | -         | N    | 自定义图标前缀                                                          |
| customStyle | `String` | -         | N    | 自定义样式                                                        |

#### Events

| 事件       | event.detail | 说明           |
| ---------- | ------------ | -------------- |
| bind:click | -            | 点击图标时触发 |

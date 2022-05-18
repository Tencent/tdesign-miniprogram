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
<t-icon name="primary" size="xl" bind:click="someFunction" />
```

### 自定义图标

```html
<!-- page.wxml -->
<t-icon prefix="icon" name="a-1h" size="xl" bind:click="someFunction" />
```

自定义图标用法，下面以 `iconfont` 为例

#### 准备图标文件

文件后缀应为`.wxss`，如下方代码块所示：

```css
@font-face {
  font-family: 'icon';  // 使用自定义的字体名称
  ···
}

.icon {
  font-family: 'icon' !important;  // 字体名称
  ···
}

.icon-a-0:before {  // icon 图标。注意 FontClass 前缀与 font-family 保持一致
  content: '\e64d';
}
```
- 添加所需图标，下载图标。图标库一般会提供 **在线链接** 或者 **下载至本地** 等使用方式。**在线链接** 方式会指向一个 `.css` 文件，可以下载或复制其内容，将其修改成后缀名为 `.wxss` 的文件
- 将 `.wxss` 文件中的 `FontClass/Symbol前缀` 与 `Font Family` 两项内容保持一致，如: `FontClass/Symbol` 前缀为 `icon-`，则 `Font Family` 为 `icon`。

> 注：若是采用 `下载至本地` 方式，需关注 `.css` 和 `.ttf` 文件。由于微信小程序不支持处理 `ttf、woff、eot` 等文件，但支持 `base64`，所以需要将 `.ttf` 文件转换为 `base64`  (可借助转换工具，如 [transfonter.org](https://transfonter.org/)，会得到一个 `stylesheet.css` 文件)，然后将 `.css` 文件中的 `@font-face {}` 内容替换为 `stylesheet.css` 中的 `base64` 内容，最后将 `.css` 文件修改后缀为 `.wxss`

#### 引入自定义图标

- 全局引入：在项目 `app.wxss`，使用 `@import` 引入上述的 `.wxss` 文件
- 局部引入：在 `page` 对应的 `.wxss` 中，使用 `@import` 引入上述的 `.wxss` 文件

#### 自定义图标的使用

 `<t-icon>` 组件中的 `prefix` 属性值与前面设置的 `Font Family` 保持一致，即 `prefix="icon"`，`name` 属性值为自定义图标名称，如图标的 `className` 为 `icon-a-1h`，则 `name="a-1h"`。

### 全部图标

<td-icons-view />

## API

#### Props

| 属性        | 值类型   | 默认值    | 必传 | 说明                                                              |
| ----------- | -------- | --------- | ---- | ----------------------------------------------------------------- |
| name        | `String` | -         | Y    | 图标名称                                                          |
| size        | `String` | `inherit` | N    | 图标大小, 可以'middle' 'small'等关键字， 也可以是字体大小如'20px' |
| color       | `String` | `initial` | N    | 图标颜色                                                          |
| prefix      | `String` | -         | N    | 自定义图标前缀                                                    |
| customStyle | `String` | -         | N    | 自定义样式                                                        |

#### Events

| 事件       | event.detail | 说明           |
| ---------- | ------------ | -------------- |
| bind:click | -            | 点击图标时触发 |

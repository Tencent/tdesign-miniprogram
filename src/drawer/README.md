# Drawer 抽屉

### 特性及兼容性

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务，常用于侧边栏导航

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-drawer": "@tencent/tdesign-miniprogram/drawer/drawer"
}
```

### 引入 API

若以 API 形式调用 Drawer，则需在页面 `page.js` 中引入组件 API：

```js
import Drawer from '@tencent/tdesign-miniprogram/drawer/drawer';
```

## 用法

### 基础用法

```html
<!-- page.wxml -->
<t-drawer visible="{{visible}}"></t-drawer>
```

```js
// page.js
Page({
  data: {
    visible: false,
  },
  openDrawer() {
    this.setData({
      visible: true,
    });
  },
});
```

### 自定义 title、content、以及 footer

`Drawer`组件支持通过 slot 的方式自定义头部、内容、底部

```html
<!-- page.wxml -->
<t-drawer visible="{{visible}}">
  <view slot="title">头部</view>
  <view>自定义内容</view>
  <view slot="footer">底部</view>
</t-drawer>
```

## API

### `<Drawer>` 组件

组件路径：`@tencent/tdesign-miniprogram/drawer/drawer`

#### Props

| 属性        | 值类型    | 默认值  | 说明                                                           |
| ----------- | --------- | ------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --- | ---------- |
| visible     | `Boolean` | `false` | Drawer 是否可见                                                |
| closeBtn    | `Boolean` | `true`  | 是否显示右上角的关闭按钮                                       |
| showOverlay | `Boolean` | `true`  | 是否展示遮罩                                                   |
| placement   | `'top'    | 'right' | 'bottom'                                                       | 'left'`                                                                              | -   | 抽屉的方向 |
| size        | `String   | Number` | -                                                              | 抽屉的大小，值可以是：large/middle/small/300px/500px/80%/50%/120(number)/150(number) |
| sidebar     | `Object`  | -       | 列表参数，包含 name(菜单名称),path(跳转路径),icon(图标 string) |

#### Events

| 事件              | event.detail | 说明                 |
| ----------------- | ------------ | -------------------- |
| bind:clickOverlay | -            | 点击遮罩层时触发     |
| bind:closed       | -            | 点击右上角叉触发回调 |

#### Slots

| 插槽    | 说明               |
| ------- | ------------------ |
| header  | 抽屉标题区的内容。 |
| default | 抽屉自定义内容。   |
| footer  | 抽屉底部的内容。   |

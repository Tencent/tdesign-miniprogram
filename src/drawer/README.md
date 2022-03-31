---
title: Drawer 抽屉
description: 用作一组平行关系页面/内容的切换器，相较于Tab，同屏可展示更多的选项数量。。
spline: message
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-drawer": "tdesign-miniprogram/drawer/drawer"
}
```

## 代码演示

### 基础抽屉
```html
<t-drawer visible="{{visible}}" sidebar="{{sidebar}}" bind:sidebar-item = "getSidebarItem"></t-drawer>
```
>Drawer的 `visible` 是受控的，需要手动设置 `visible` 为 `true` 才会开启抽屉



## API

### Drawer Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
visible | Boolean | false | 组件是否可见 | N
sidebar | Array   | -     | 侧边导航条数组 | N


### Drawer Events

名称 | 参数 | 描述
-- | -- | --
bind:sidebar-item | - | 获取当前点击对象


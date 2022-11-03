---
title: SideBar 侧边导航
description: 用于内容分类后的展示切换。
spline: navigation
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
{
  "usingComponents": {
    "t-side-bar": "tdesign-miniprogram/side-bar/side-bar",
    "t-side-bar-item": "tdesign-miniprogram/side-bar-item/side-bar-item",
  }
}
```
### 主题定制
CSS 变量名|说明
--|--
--td-side-bar-active-color | 选中态颜色
--td-side-bar-border-radius | 选中态边框圆角

## 代码演示

### 锚点用法

{{ base }}

### 切页用法

{{ switch }}

## API
### SideBar Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
value | String / Number | - | 选项值 | N
default-value | String / Number | undefined | 选项值。非受控属性 | N

### SideBar Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: number \| string, label: string)` | 选项值发生变化时触发
click | `(value: number \| string, label: string)` | 点击选项时触发

### SideBarItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
badge-props | Object | - | 透传至 Badge 组件 | N
disabled | Boolean | false | 是否禁用 | N
label | String | - | 展示的标签 | N
value | String / Number | - | 当前选项的值 | N

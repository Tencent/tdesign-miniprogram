---
title: SideBar 侧边栏
description: 用于内容分类后的展示切换。
spline: navigation
isComponent: true
---

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.25.0 版本上线，请留意版本。
</div>

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

## 代码演示

### 锚点用法

{{ base }}

### 切页用法

{{ switch }}

### 带图标侧边导航

{{ with-icon }}

### 自定义样式

{{ custom }}

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
icon | String / Object | - | `1.0.0-rc.1`。图标，传对象则透传至 Icon | N
label | String | - | 展示的标签 | N
value | String / Number | - | 当前选项的值 | N


### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-side-bar-bg-color | @bg-color-secondarycontainer | - 
--td-side-bar-height | 100% | - 
--td-side-bar-width | 206rpx | - 
--td-side-bar-active-color | @brand-color | - 
--td-side-bar-bg-color | @bg-color-secondarycontainer | - 
--td-side-bar-border-radius | 18rpx | - 
--td-side-bar-color | @font-gray-1 | - 
--td-side-bar-disabled-color | @font-gray-4 | - 
--td-side-bar-font-size | 32rpx | - 
--td-side-bar-icon-size | 40rpx | - 
--td-side-bar-item-height | 112rpx | - 
--td-side-bar-item-line-height | 48rpx | - 

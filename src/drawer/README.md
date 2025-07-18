---
title: Drawer 抽屉
description: 用作一组平行关系页面/内容的切换器，相较于Tab，同屏可展示更多的选项数量。
spline: message
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.7.2 版本上线，请留意版本。
</div>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-drawer": "tdesign-miniprogram/drawer/drawer"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/WoE0Rdmj7GSE" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>


### 基础抽屉
{{ base }}

### 带图标的抽屉
{{ icon-drawer }}

>Drawer的 `visible` 是受控的，需要手动设置 `visible` 为 `true` 才会开启抽屉



## API

### Drawer Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
close-on-overlay-click | Boolean | true | 点击蒙层时是否触发抽屉关闭事件 | N
destroy-on-close | Boolean | false | 抽屉关闭时是否销毁节点 | N
footer | Slot | - | `0.29.0`。抽屉的底部。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
items | Array | - | 抽屉里的列表项。TS 类型：`DrawerItem[] ` `interface DrawerItem { title: string; icon: string; }。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/drawer/type.ts)`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/drawer/type.ts) | N
placement | String | right | 抽屉方向。可选项：left/right | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
title | String / Slot | - | `0.29.0`。抽屉的标题。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
visible | Boolean | false | 组件是否可见 | N
z-index | Number | 11500 | 抽屉层级，样式默认为 11500 | N

### Drawer Events

名称 | 参数 | 描述
-- | -- | --
close | `(trigger: TriggerSource)` | 关闭时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/drawer/type.ts)。<br/>`type TriggerSource = 'overlay'`<br/>
item-click | `(index: number; item: DrawerItem)` | 点击抽屉里的列表项
overlay-click | \- | 如果蒙层存在，点击蒙层时触发

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-drawer-bg-color | @bg-color-container | - 
--td-drawer-border-color | @border-level-1-color | - 
--td-drawer-footer-padding-bottom | 40rpx | - 
--td-drawer-hover-color | @bg-color-secondarycontainer | - 
--td-drawer-item-height | 48rpx | - 
--td-drawer-item-icon-color | @drawer-title-color | - 
--td-drawer-item-icon-size | 48rpx | - 
--td-drawer-item-padding | 32rpx | - 
--td-drawer-sidebar-height | 70vh | - 
--td-drawer-title-color | @text-color-primary | - 
--td-drawer-title-font-size | 36rpx | - 
--td-drawer-title-padding | 48rpx 32rpx 16rpx | - 
--td-drawer-width | 560rpx | - 

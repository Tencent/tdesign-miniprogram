---
title: Drawer 抽屉
description: 用作一组平行关系页面/内容的切换器，相较于Tab，同屏可展示更多的选项数量。
spline: message
isComponent: true
---



## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TDrawer from '@tdesign/uniapp/drawer/drawer.vue';
```


### 基础抽屉
{{ base }}

### 带图标的抽屉
{{ icon-drawer }}

>Drawer的 `visible` 是受控的，需要手动设置 `visible` 为 `true` 才会开启抽屉



## API

### Drawer Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
close-on-overlay-click | Boolean | true | 点击蒙层时是否触发抽屉关闭事件 | N
destroy-on-close | Boolean | false | 抽屉关闭时是否销毁节点 | N
items | Array | - | 抽屉里的列表项。TS 类型：`DrawerItem[]` `interface DrawerItem { title: string; icon: string; }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/drawer/type.ts) | N
overlay-props | Object | {} | 遮罩层的属性，透传至 overlay。TS 类型：`OverlayProps`，[Overlay API Documents](./overlay?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/drawer/type.ts) | N
placement | String | right | 抽屉方向。可选项：left/right | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
title | String | - | 抽屉的标题 | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
visible | Boolean | false | 组件是否可见。支持语法糖 `v-model:visible` | N
z-index | Number | 11500 | 抽屉层级，样式默认为 11500 | N

### Drawer Events

名称 | 参数 | 描述
-- | -- | --
close | `(context: { trigger: DrawerTriggerSource })` | 关闭时触发。。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/drawer/type.ts)。<br/>`type DrawerTriggerSource = 'overlay'`<br/>
item-click | `(context: { index: number; item: DrawerItem })` | 点击抽屉里的列表项
overlay-click | \- | 如果蒙层存在，点击蒙层时触发
update-visible | `(context: { visible: boolean })` | 更新可见性

### Drawer Slots

名称 | 描述
-- | --
\- | 自定义抽屉的底部
footer | 抽屉的底部
title | 自定义 `title` 显示内容

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-drawer-bg-color | @bg-color-container | -
--td-drawer-border-color | @border-level-1-color | -
--td-drawer-footer-padding-bottom | 40rpx | -
--td-drawer-hover-color | @bg-color-secondarycontainer | -
--td-drawer-item-icon-color | @drawer-title-color | -
--td-drawer-item-icon-size | 48rpx | -
--td-drawer-item-padding | 32rpx | -
--td-drawer-sidebar-height | 70vh | -
--td-drawer-title-color | @text-color-primary | -
--td-drawer-title-font | @font-title-large | -
--td-drawer-title-padding | 48rpx 32rpx 16rpx | -
--td-drawer-width | 560rpx | -

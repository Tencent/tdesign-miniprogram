---
title: PullDownRefresh 下拉刷新
description: 用于快速刷新页面信息，刷新可以是整页刷新也可以是页面的局部刷新。
spline: message
isComponent: true
---



## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TPullDownRefresh from '@tdesign/uniapp/pull-down-refresh/pull-down-refresh.vue';
```

### 顶部下拉刷新

由于组件内无法监听页面滚动，需要由页面获取组件实例，并将页面滚动事件传递到组件。

{{ base }}

> 在使用 pull-down-refresh 组件的页面，建议开启 `disableScroll: true`

## API

### PullDownRefresh Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
disabled | Boolean | false | 是否禁用下拉刷新 | N
enable-back-to-top | Boolean | true | iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向。自 2.27.3 版本开始，若非显式设置为 false，则在显示尺寸大于屏幕 90% 时自动开启 | N
enable-passive | Boolean | false | 开启 passive 特性，能优化一定的滚动性能 | N
loading-bar-height | String / Number | 50 | 加载中下拉高度，如果值为数字则单位是：'px' | N
loading-props | Object | {} | 加载loading样式。TS 类型：`LoadingProps`，[Loading API Documents](./loading?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/pull-down-refresh/type.ts) | N
loading-texts | Array | [] | 提示语，组件内部默认值为 ['下拉刷新', '松手刷新', '正在刷新', '刷新完成']。TS 类型：`string[]` | N
lower-threshold | String / Number | 50 | 距底部/右边多远时，触发 scrolltolower 事件 | N
max-bar-height | String / Number | 80 | 最大下拉高度，如果值为数字则单位是：'px' | N
refresh-timeout | Number | 3000 | 刷新超时时间 | N
scroll-into-view | String | - | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 | N
show-scrollbar | Boolean | true | 滚动条显隐控制 (同时开启 enhanced 属性后生效) | N
success-duration | String / Number | 500 | 刷新成功提示展示时长，单位 'ms' | N
upper-threshold | String / Number | 50 | 距顶部/左边多远时，触发 scrolltoupper 事件 | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
value | Boolean | false | 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态。支持语法糖 `v-model:value` | N
default-value | Boolean | false | 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态。非受控属性 | N

### PullDownRefresh Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { value: boolean })` | 下拉或收起时触发，用户手势往下滑动触发下拉状态，手势松开触发收起状态
dragend | `(context: TouchEvent)` | 滑动结束事件
dragging | `(context: TouchEvent)` | 滑动事件
dragstart | `(context: TouchEvent)` | 滑动开始事件
refresh | \- | 结束下拉时触发
scrolltolower | \- | 滚动到页面底部时触发
timeout | \- | 刷新超时触发

### PullDownRefresh Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容
header | 头部

### PullDownRefresh External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-indicator | 指示样式类
t-class-loading | 加载样式类
t-class-text | 文本样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-pull-down-refresh-color | @text-color-placeholder | -

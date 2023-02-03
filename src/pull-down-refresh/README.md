---
title: PullDownRefresh 下拉刷新
description: 用于快速刷新页面信息，刷新可以是整页刷新也可以是页面的局部刷新。
spline: message
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-96%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-81%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-81%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-pull-down-refresh": "tdesign-miniprogram/pull-down-refresh/pull-down-refresh"
}
```

## 代码演示

### 顶部下拉刷新

由于组件内无法监听页面滚动，需要由页面获取组件实例，并将页面滚动事件传递到组件。

{{ base }}



> 在使用 pull-down-refresh 组件的页面，建议开启 `disableScroll: true`

## API
### PullDownRefresh Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
external-classes | Array | - | 加载loading样式。`['t-class', 't-class-loading','t-class-text', 't-class-indicator']` | N
loading-bar-height | String / Number | 50 | 加载中下拉高度，如果值为数字则单位是：'px' | N
loading-props | Object | - | 加载loading样式。TS 类型：`LoadingProps`，[Loading API Documents](./loading?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/pull-down-refresh/type.ts) | N
loading-texts | Array | [] | 提示语，组件内部默认值为 ['下拉刷新', '松手刷新', '正在刷新', '刷新完成']。TS 类型：`string[]` | N
max-bar-height | String / Number | 80 | 最大下拉高度，如果值为数字则单位是：'px' | N
refresh-timeout | Number | 3000 | 刷新超时时间 | N
value | Boolean | false | 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态 | N
default-value | Boolean | false | 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态。非受控属性 | N

### PullDownRefresh Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: boolean)` | 下拉或收起时触发，用户手势往下滑动触发下拉状态，手势松开触发收起状态
refresh | \- | 结束下拉时触发
scrolltolower | \- | 滚动到页面底部时触发
timeout | \- | 刷新超时触发

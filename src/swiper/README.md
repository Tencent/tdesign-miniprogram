---
title: Swiper 轮播图
description: 用于循环轮播一组图片或内容，也可以滑动进行切换，轮播动效时间可以设置。
spline: message
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-95%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-95%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-90%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-swiper": "tdesign-miniprogram/swiper/swiper",
  "t-swiper-item": "tdesign-miniprogram/swiper/swiper-item",
  "t-swiper-nav": "tdesign-miniprogram/swiper/swiper-nav",
}
```

### 组件说明

swiper 必须配合 swiper-item 使用，swiper-item 作为轮播条目组件，宽高默认 100%。


### 主题定制
CSS 变量名|说明
--|--
--td-swiper-nav-dot-color | 点状导航器颜色
--td-swiper-nav-dot-active-color | 点状导航器激活态颜色
--td-swiper-nav-fraction-color | 分式导航器颜色
--td-swiper-nav-fraction-bg-color | 分式导航器背景颜色
--td-swiper-nav-btn-color | 按钮导航器颜色
--td-swiper-nav-btn-bg-color | 按钮导航器背景颜色


## 代码演示

多种轮播样式，通过 `navigation` 设置导航样式，没有值则不显示，也可以自定义 `nav` 组件

<img src="https://tdesign.gtimg.com/miniprogram/readme/swiper.gif" width="375px" height="50%">


### 点状(dots)轮播图
{{ base }}

### 分式(fraction)导航器轮播图

{{ fraction }}

### 插槽自定义导航器轮播图

{{ custom }}

### 按钮导航器轮播图

{{ nav-btn }}

### 轮播图垂直样式

{{ vertical }}

## API
### Swiper Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
animation | String | slide | 轮播切换动画效果类型。可选项：slide | N
autoplay | Boolean | true | 是否自动播放 | N
current | Number | 0 | 当前轮播在哪一项（下标） | N
default-current | Number | undefined | 当前轮播在哪一项（下标）。非受控属性 | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
direction | String | horizontal | 轮播滑动方向，包括横向滑动和纵向滑动两个方向。可选项：horizontal/vertical | N
duration | Number | 300 | 滑动动画时长 | N
height | Number | - | 当使用垂直方向滚动时的高度 | N
interval | Number | 5000 | 轮播间隔时间 | N
loop | Boolean | true | 【开发中】是否循环播放 | N
navigation | Object / Slot | - | 导航器全部配置 | N
pagination-position | String | bottom | 页码信息展示位置。可选项：top-left/top/top-right/bottom-left/bottom/bottom-right | N

### Swiper Events

名称 | 参数 | 描述
-- | -- | --
change | `(current: number, source: SwiperChangeSource)` | 轮播切换时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper/type.ts)。<br/>`type SwiperChangeSource = 'autoplay' \| 'touch' \| ''`<br/>

### SwiperItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
custom-style `v0.25.0` | String | - | 自定义组件样式 | N

### SwiperNavigation

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
min-show-num | Number | - | 小于这个数字不会显示导航器 | N
show-slide-btn | Boolean | - | 表示是否显示两侧的滑动控制按钮 | N
type | String | - | 导航器类型，点状(dots)、点条状(dots-bar)、分式(fraction)等。TS 类型：`SwiperNavigationType` `type SwiperNavigationType = 'dots' \| 'dots-bar' \| 'fraction'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper/type.ts) | N

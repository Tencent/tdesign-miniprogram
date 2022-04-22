---
title: Swiper 轮播图
description: 用于循环轮播一组图片或内容，也可以滑动进行切换，轮播动效时间可以设置。
spline: message
isComponent: true
---

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

## 代码演示

### 基础轮播图

多种轮播样式，通过 `navigation` 设置导航样式，没有值则不显示，也可以自定义 `nav` 组件

<img src="https://tdesign.gtimg.com/miniprogram/readme/swiper.gif" width="375px" height="50%">

```html
<!-- 默认样式 -->
<t-swiper t-class="swiper-wrap" current="{{current}}" bindchange="onChange" navigation>
  <t-swiper-item wx:for="{{items}}" wx:key="index">
    <view class="item {{item.cls}}">{{index}}<image src="{{item.image}}" class="img" /></view>
  </t-swiper-item>
</t-swiper>

<!-- 使用插槽组合 自定义nav组件 -->
<t-swiper current="{{1}}" autoplay="{{true}}" duration="{{500}}" interval="{{5000}}">
  <t-swiper-item wx:for="{{items}}" wx:key="index">
    <view class="item {{item.cls}}">{{index}}<image src="{{item.image}}" class="img" /></view>
  </t-swiper-item>
  <t-swiper-nav slot="nav" type="dots-bar" />
</t-swiper>
```

```js
data: {
  current: 1,
  items: [
    {
      cls: 'item0',
      image: `01.png`,
    },
    {
      cls: 'item1',
      image: `02.png`,
    },
    {
      cls: 'item2',
      image: `03.png`,
    },
    {
      cls: 'item3',
      image: `04.png`,
    },
    {
      cls: 'item4',
      image: `05.png`,
    },
  ],
},

onChange(e) {
  const {
    detail: { current, source },
  } = e;
  console.log(current, source)
},
```

## API

### Swiper Props

| 名称       | 类型    | 默认值     | 说明                                                                                                                                                                                                                                                                                                                  | 必传 |
| ---------- | ------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| animation  | String  | slide      | 轮播切换动画效果类型。可选项：slide                                                                                                                                                                                                                                                                                   | N    |
| autoplay   | Boolean | true       | 是否自动播放                                                                                                                                                                                                                                                                                                          | N    |
| current    | Number  | 0          | 当前轮播在哪一项（下标）                                                                                                                                                                                                                                                                                              | N    |
| direction  | String  | horizontal | 轮播滑动方向，包括横向滑动和纵向滑动两个方向。可选项：horizontal/vertical                                                                                                                                                                                                                                             | N    |
| duration   | Number  | 300        | 滑动动画时长                                                                                                                                                                                                                                                                                                          | N    |
| height     | Number  | -          | 当使用垂直方向滚动时的高度                                                                                                                                                                                                                                                                                            | N    |
| interval   | Number  | 5000       | 轮播间隔时间                                                                                                                                                                                                                                                                                                          | N    |
| navigation | Object  | -          | 导航配置。`navigation.type` 表示导航器风格，圆点/分式等，没有值则不显示。`navigation.minShowNum` 表示小于这个数字不会显示导航器。`navigation.showSlideBtn` 表示是否显示两侧的滑动控制按钮。TS 类型：`Navigation`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper/type.ts) | N    |

### Swiper Events

名称 | 参数 | 描述
-- | -- | --
change | `(current: number, source: SwiperChangeSource)` | 轮播切换时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper/type.ts)。<br/>`type SwiperChangeSource = 'autoplay' | 'touch' | ''`<br/>


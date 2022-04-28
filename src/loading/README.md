---
title: Loading 加载
description: 用于表示页面或操作的加载状态，给予用户反馈的同时减缓等待的焦虑感，由一个或一组反馈动效组成。
spline: message
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-loading": "tdesign-miniprogram/loading/loading"
}
```

## 代码演示

### 基础加载

<img src="https://tdesign.gtimg.com/miniprogram/readme/loading-1.png" width="375px" height="50%">

```html
<t-loading theme="circular" size="40rpx" loading t-class-indicator="indicator-blue"></t-loading>
<t-loading theme="spinner" size="40rpx" loading></t-loading>
<t-loading theme="dots" size="80rpx" loading></t-loading>
```

### 图标加横向文字的加载

<img src="https://tdesign.gtimg.com/miniprogram/readme/loading-2.png" width="375px" height="50%">

```html
<t-loading
  theme="circular"
  size="40rpx"
  loading
  text="加载中..."
  t-class-indicator="indicator-blue"
></t-loading>
<t-loading theme="spinner" size="40rpx" loading text="加载中..."></t-loading>
<t-loading theme="circular" size="40rpx" loading style="color: #0052d9">
  <span slot="text">加载中...</span>
</t-loading>
```

### 图标加竖向文字的加载

<img src="https://tdesign.gtimg.com/miniprogram/readme/loading-3.png" width="375px" height="50%">

```html
<t-loading
  class="loading-style"
  theme="circular"
  size="40rpx"
  loading
  text="加载中"
  t-class-indicator="indicator-blue"
  layout="vertical"
></t-loading>
<view class="demo-section__desc">纯文字</view>
<t-loading class="loading-style" indicator="{{false}}" text="加载中..." loading></t-loading>
<view class="demo-section__desc">加载失败</view>
<t-loading theme="error" class="loading-style" loading bind:reload="reloadPage"></t-loading>
```

### 进度条加载

<img src="https://tdesign.gtimg.com/miniprogram/readme/loading-4.png" width="375px" height="50%">

```html
<t-loading theme="bar" progress="{{progress}}" loading="{{isLoading}}"></t-loading>
```

```js
Page({
  data: {
    progress: 100,
    isLoading: false,
    barLoadingTimeOut: null,
  },

  onLoad() {
    const timeout = setTimeout(() => {
      this.setData({ isLoading: false });
    }, 10000);
    this.setData({
      progress: -1,
      isLoading: true,
      barLoadingTimeOut: timeout,
    });
  },

  onUnload() {
    clearTimeout(this.data.barLoadingTimeOut);
  },
});
```

### 不同状态的加载

```html
<t-loading
  class="loading-style"
  theme="circular"
  size="40rpx"
  text="加载中..."
  loading
  delay="{{1000}}"
  t-class-indicator="indicator-blue"
></t-loading>
```

## API
### Loading Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
delay | Number | 0 | 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 | N
duration | Number | 800 | 加载动画执行完成一次的时间，单位：毫秒 | N
external-classes | Array | - | 组件类名，分别用于设置加载组件外层元素，加载组件文本，加载组件指示符，加载指示符内侧同心圆等元素类名。`['t-class', 't-class-text', 't-class-indicator']` | N
indicator | Boolean | true | 是否显示加载指示符 | N
inherit-color | Boolean | false | 是否继承父元素颜色 | N
layout | String | horizontal | 对齐方式。可选项：horizontal/vertical | N
loading | Boolean | true | 是否处于加载状态 | N
pause | Boolean | false | 是否暂停动画 | N
progress | Number | - | 加载进度 | N
reverse | Boolean | - | 加载动画是否反向 | N
size | String | '40rpx' | 尺寸，示例：40rpx/20px | N
text | String / Slot | - | 加载提示文案 | N
theme | String | circular | 加载组件类型。可选项：circular/spinner/bar/error/dots | N

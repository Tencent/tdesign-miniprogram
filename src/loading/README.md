---
title: Loading 加载
description: 用于表示页面或操作的加载状态，给予用户反馈的同时减缓等待的焦虑感，由一个或一组反馈动效组成。
spline: message
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-95%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-95%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-loading": "tdesign-miniprogram/loading/loading"
}
```

## 代码演示

### 纯icon

{{ base }}

### icon加文字横向

{{ horizontal }}

### icon加文字竖向

{{ vertical }}

### 纯文字

{{ text }}

### 加载失败

{{ error }}

### 状态

{{ status }}

### 加载速度

{{ duration }}

### 规格

{{ size }}

## API
### Loading Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
delay | Number | 0 | 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 | N
duration | Number | 800 | 加载动画执行完成一次的时间，单位：毫秒 | N
indicator | Boolean / Slot | true | 加载指示符，值为 true 显示默认指示符，值为 false 则不显示，也可以自定义指示符。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
inherit-color | Boolean | false | 是否继承父元素颜色 | N
layout | String | horizontal | 对齐方式。可选项：horizontal/vertical | N
loading | Boolean | true | 是否处于加载状态 | N
pause | Boolean | false | 是否暂停动画 | N
progress | Number | - | 加载进度 | N
reverse | Boolean | - | 加载动画是否反向 | N
size | String | '40rpx' | 尺寸，示例：40rpx/20px | N
text | String / Slot | - | 加载提示文案。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
theme | String | circular | 加载组件类型。可选项：circular/spinner/dots | N

### Loading 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-text | 文本样式类
t-class-indicator | 指示符样式类

### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-loading-color | @brand-color | - 
--td-loading-text-color | inherit | - 
--td-loading-text-font-size | 24rpx | - 
--td-loading-text-line-height | 40rpx | - 

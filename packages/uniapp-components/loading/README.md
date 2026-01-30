---
title: Loading 加载
description: 用于表示页面或操作的加载状态，给予用户反馈的同时减缓等待的焦虑感，由一个或一组反馈动效组成。
spline: message
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。


```js
import TLoading from '@tdesign/uniapp/loading/loading.vue';
```

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

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
delay | Number | 0 | 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 | N
duration | Number | 800 | 加载动画执行完成一次的时间，单位：毫秒 | N
fullscreen | Boolean | false | 是否显示为全屏加载 | N
indicator | Boolean | true | 加载指示符，值为 true 显示默认指示符，值为 false 则不显示，也可以自定义指示符 | N
inherit-color | Boolean | false | 是否继承父元素颜色 | N
layout | String | horizontal | 对齐方式。可选项：horizontal/vertical | N
loading | Boolean | true | 是否处于加载状态 | N
pause | Boolean | false | 是否暂停动画 | N
progress | Number | - | 加载进度 | N
reverse | Boolean | - | 加载动画是否反向 | N
size | String | '20px' | 尺寸，示例：20px | N
text | String | - | 加载提示文案 | N
theme | String | circular | 加载组件类型。可选项：circular/spinner/dots/custom | N

### Loading Slots

名称 | 描述
-- | --
\- | 默认插槽，作用同 `text` 插槽
indicator | 自定义 `indicator` 显示内容
text | 自定义 `text` 显示内容

### Loading External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-indicator | 指示符样式类
t-class-text | 文本样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-loading-color | @brand-color | -
--td-loading-full-bg-color | rgba(255, 255, 255, 0.6) | -
--td-loading-text-color | @text-color-primary | -
--td-loading-text-font | @font-body-small | -
--td-loading-z-index | 3500 | -

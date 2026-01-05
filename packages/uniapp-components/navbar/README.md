---
title: Navbar 导航栏
description: 用于不同页面之间切换或者跳转，位于内容区的上方，系统状态栏的下方。
spline: navigation
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TNavbar from 'tdesign-uniapp/navbar/navbar.vue';
```


### 基础导航栏

{{ base }}

### 胶囊样式导航栏

{{ back-home }}

### 带搜索导航栏

{{ search }}

### 带图片导航栏

{{ img }}

### 组件样式

{{ left-title }}

### 自定义颜色

{{ custom-color }}

### FAQ

#### 高度说明

`navbar` 组件可由 `--td-navbar-height` 控制。在 H5 或 APP-PLUS 平台下，`--td-navbar-height` 变量需要业务自己设置，小程序平台则会根据 `statusBarHeight` 等变量计算得到。

## API

### Navbar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
animation | Boolean | true | 是否添加动画效果 | N
background | String | - | 已废弃。背景 | N
delta | Number | 1 | 后退按钮后退层数，含义参考 [wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)，特殊的，传入 0 不会发生执行 wx.navigateBack | N
fixed | Boolean | true | 是否固定在顶部 | N
home-icon | String | - | 已废弃。首页图标地址。值为 '' 或者 undefined 则表示不显示返回图标，值为 'circle' 表示显示默认图标，值为 'slot' 表示使用插槽渲染，值为其他则表示图标地址 | N
left-arrow | Boolean | false | 是否展示左侧箭头 | N
left-icon | String | - | 已废弃。左侧图标地址，值为 '' 或者 undefined 则表示不显示返回图标，值为 'arrow-left' 表示显示返回图标，值为 'slot' 表示使用插槽渲染，值为其他则表示图标地址 | N
safe-area-inset-top | Boolean | true | 是否开启顶部安全区适配 | N
title | String | - | 页面标题 | N
title-max-length | Number | - | 标题文字最大长度，超出的范围使用 `...` 表示 | N
visible | Boolean | true | 是否显示 | N

### Navbar Events

名称 | 参数 | 描述
-- | -- | --
complete | \- | navigateBack 执行完成后触发（失败或成功均会触发）
fail | \- | navigateBack 执行失败后触发
go-back | \- | 点击左侧箭头时触发
go-home | \- | 已废弃。点击 Home 触发
success | \- | navigateBack 执行成功后触发

### Navbar Slots

名称 | 描述
-- | --
capsule | 左侧胶囊区域
left | 左侧内容区域
title | 自定义 `title` 显示内容

### Navbar External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-capsule | 左侧胶囊区域样式类
t-class-center | 中间内容样式类
t-class-home-icon | 首页图标样式类
t-class-left | 左侧内容样式类
t-class-left-icon | 左侧图标样式类
t-class-nav-btn | 导航按钮样式类
t-class-title | 标题样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-navbar-padding-top | 20px | - |
| --td-navbar-right | 95px | - |
| --td-navbar-background | @navbar-bg-color | - |
| --td-navbar-bg-color | @bg-color-container | - |
| --td-navbar-capsule-border-color | @border-level-1-color | - |
| --td-navbar-capsule-border-radius | 16px | - |
| --td-navbar-capsule-height | 32px | - |
| --td-navbar-capsule-width | 88px | - |
| --td-navbar-center-left | @navbar-right | - |
| --td-navbar-center-width | 187px | - |
| --td-navbar-color | @text-color-primary | - |
| --td-navbar-height | 48px | - |
| --td-navbar-left-arrow-size | 24px | - |
| --td-navbar-left-max-width | --td-navbar-left-max-width | - |
| --td-navbar-title-font-size | 18px | - |
| --td-navbar-title-font-weight | 600 | - |
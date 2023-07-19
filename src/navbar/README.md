---
title: Navbar 导航栏
description: 用于不同页面之间切换或者跳转，位于内容区的上方，系统状态栏的下方。
spline: navigation
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-97%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-87%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-95%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-84%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-navbar": "tdesign-miniprogram/navbar/navbar",
}
```

## 代码演示

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

## API
### Navbar Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
animation | Boolean | true | 是否添加动画效果 | N
capsule | Slot | - | 左侧胶囊区域 | N
delta | Number | 1 | 后退按钮后退层数，含义参考 [wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)，特殊的，传入 0 不会发生执行 wx.navigateBack | N
fixed | Boolean | true | 是否固定在顶部 | N
left | Slot | - | `0.26.0`。左侧内容区域 | N
left-arrow | Boolean | false | `0.26.0`。是否展示左侧箭头 | N
title | String / Slot | - | 页面标题 | N
title-max-length | Number | - | 标题文字最大长度，超出的范围使用 `...` 表示 | N
visible | Boolean | true | 是否显示 | N

### Navbar Events

名称 | 参数 | 描述
-- | -- | --
complete | \- | navigateBack 执行完成后触发（失败或成功均会触发）
fail | \- | navigateBack 执行失败后触发
go-back | \- | 点击左侧箭头时触发
success | \- | navigateBack 执行成功后触发

### Navbar 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-title | 标题样式类
t-class-left | 左侧内容样式类
t-class-center | 中间内容样式类
t-class-left-icon | 左侧图标样式类
t-class-home-icon` | 首页图标样式类
t-class-capsule | 左侧胶囊区域样式类
t-class-nav-btn | 导航按钮样式类

### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-navbar-bg-color | @bg-color-container | - 
--td-navbar-capsule-border-color | #e3e6ea | - 
--td-navbar-capsule-border-radius | 32rpx | - 
--td-navbar-capsule-height | 64rpx | - 
--td-navbar-capsule-width | 176rpx | - 
--td-navbar-color | @font-gray-1 | - 
--td-navbar-height | 96rpx | - 
--td-navbar-left-arrow-size | 48rpx | - 
--td-navbar-title-font-size | 36rpx | - 
--td-navbar-title-font-weight | 600 | - 

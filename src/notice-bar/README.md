---
title: NoticeBar 消息通知
description: 在导航栏下方，用于给用户显示提示消息。
spline: message
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-88%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-notice-bar": "tdesign-miniprogram/notice-bar/notice-bar"
}
```

## 代码演示

### 基础静态公告栏

{{ base }}

### 带图标静态公告栏

{{ iconDemo }}

### 带操作公告栏

{{ event }}

### 滚动公告栏

{{ scrolling }}

### 自定义样式

{{ custom }}

### 不同状态的公告栏
公告栏类型有普通（info）、警示（warning）、成功（success）、错误（error）

{{ theme }}

### 多行文字消息栏

{{ customization }}

## API
### NoticeBar Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | String / Slot | - | 文本内容 | N
custom-style `v0.25.0` | String | - | 自定义组件样式 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层元素、文本内容、前缀图标、右侧额外信息、后缀图标 等元素类名。。`['t-class', 't-class-content', 't-class-prefix-icon', 't-class-extra', 't-class-suffix-icon']` | N
extra | String / Slot | - | 右侧额外信息 | N
marquee | Boolean / Object | false | 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放。TS 类型：`boolean \| DrawMarquee` `interface DrawMarquee { speed?: number; loop?: number; delay?: number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/notice-bar/type.ts) | N
prefix-icon | String | - | 前缀图标 | N
suffix-icon | String | - | 后缀图标 | N
theme | String | info | 内置主题。可选项：info/success/warning/error | N
visible | Boolean | false | 显示/隐藏 | N
default-visible | Boolean | false | 显示/隐藏。非受控属性 | N

### NoticeBar Events

名称 | 参数 | 描述
-- | -- | --
click | `(trigger: NoticeBarTrigger)` | 点击事件。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/notice-bar/type.ts)。<br/>`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'extra' \| 'suffix-icon';`<br/>
